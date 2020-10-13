import {
  KEY_DESCRIPTION_PATH,
  KEY_SEARCH_PARAM,
  KEY_TITLE,
  KEY_PAGE,
  KEY_IMDB_TITLE_SEARCH_PATH,
  KEY_SEARCH_PATH,
  SCROLL_NUMBER,
} from '../consts';
import {MovieConnection} from '../types/types';

export const Helperservice = {
  getWikipediaSearchURI(searchTerm: string): string {
    const searchString = `${searchTerm} film`;
    return KEY_SEARCH_PATH.concat(
      `${KEY_SEARCH_PARAM}=${searchString.trim().replace(/\s/g, '%20')}`,
    );
  },
  getWikipediaDescriptionURI(title: string): string {
    return KEY_DESCRIPTION_PATH.concat(
      `${KEY_TITLE}=${title.trim().replace(/\s/g, '_')}`,
    );
  },
  getIMDBTitleFromWikipedia(title: string): string {
    return KEY_IMDB_TITLE_SEARCH_PATH.concat(
      `${KEY_PAGE}=${title.trim().replace(/\s/g, '_')}`,
    );
  },
  getQueryForScrolling(
    selectedMovieID: number | undefined,
    searchQuery: string,
    response: MovieConnection | undefined,
  ): string | null {
    if (!response) {
      return null;
    }
    return !selectedMovieID
      ? Helperservice.getMoviesQuery(
          searchQuery,
          response.edges[response.edges.length - 1].cursor,
          response.totalCount - response.edges.length > SCROLL_NUMBER
            ? SCROLL_NUMBER
            : response.totalCount - response.edges.length,
        )
      : Helperservice.getReleatedMoviesQuery(
          selectedMovieID,
          response.edges[response.edges.length - 1].cursor,
          response.totalCount - response.edges.length > SCROLL_NUMBER
            ? SCROLL_NUMBER
            : response.totalCount - response.edges.length,
        );
  },
  isFetchAfterReachTheBottom(
    nativeEvent: any,
    movieConnection: MovieConnection | undefined,
  ) {
    const paddingToBottom = 20;
    return (
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
        nativeEvent.contentSize.height - paddingToBottom &&
      movieConnection &&
      movieConnection?.edges.length < movieConnection?.totalCount
    );
  },
  getReleatedMoviesQuery(
    id: number,
    _cursor?: string,
    _first?: number,
  ): string {
    const first = _first || SCROLL_NUMBER;
    const similiarTag = !_cursor
      ? `similar(first:${first})`
      : `similar(first:${first},after:"${_cursor}")`;
    return `
      {
          movies{
            movie(id:${id}){
              ${similiarTag}{
                totalCount
                edges{
                  node{
                      originalTitle
                      popularityIndex
                      id
                    }
                    cursor
                }
              }
            }
          }
        }   `;
  },
  getMoviesQuery(term: string, _cursor?: string, _first?: number): string {
    const first = _first || SCROLL_NUMBER; 
    const searchquery = !_cursor
      ? `term:"${term}",first:${first}`
      : `term:"${term}",first:${first},after:"${_cursor}"`;
    return `
      {
        movies{
          search(${searchquery}){
            totalCount
            edges{
              node{
                originalTitle
                popularityIndex
                id
              }
              cursor
            }
          }
        }
      }    `;
  },
};

export default Helperservice;
