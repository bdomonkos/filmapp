import {RootObject, DescriptionPage, MovieConnection} from '../types/types';
import {WIKI_LINK_BASE} from '../consts';
import {NetworkService} from './api';
import {Helperservice} from './helperService';

const BeautifulDom = require('beautiful-dom');

export const SelectorService = {
  async getDescription(result: RootObject): Promise<DescriptionPage> {
    const desc = {} as DescriptionPage;
    desc.title = result.query.search[0].title.trim();
    desc.wikepediaLink =
      WIKI_LINK_BASE + result.query.search[0].title.trim().replace(/\s/g, '_');
    await NetworkService.SendGetRequest(
      Helperservice.getWikipediaDescriptionURI(result.query.search[0].title),
    ).then((res) => {
      desc.description = res.query.pages[0].extract;
    });
    await NetworkService.SendGetRequest(
      Helperservice.getIMDBTitleFromWikipedia(result.query.search[0].title),
    ).then((res) => {
      const dom = new BeautifulDom(res.parse.text);
      const hrefNodes = dom.getElementsByTagName('a');
      hrefNodes.forEach((element: any) => {
        if (
          element !== null &&
          element.getAttribute('href') !== null &&
          element.getAttribute('href').includes('imdb.com/title')
        ) {
          desc.imdbLink = element.getAttribute('href');
        }
      });
    });
    return desc;
  },
  getReleatedMovies(
    res: RootObject,
    state?: MovieConnection,
  ): Promise<MovieConnection> {

    const movieConnection = {} as MovieConnection;
    if (state) {
      if (res.data.movies.movie.similar !== null) {
        movieConnection.edges = state.edges.concat(
          res.data.movies.movie.similar.edges,
        );
      } else {
        movieConnection.edges = state.edges;
      }

      movieConnection.pageInfo = res.data.movies.movie.similar.pageInfo;
      movieConnection.totalCount = state.totalCount;
      return Promise.resolve(movieConnection);
    }
    return Promise.resolve(res.data.movies.movie.similar);
  },
  getMoviesSearchedMovies(
    res: RootObject,
    state?: MovieConnection,
  ): Promise<MovieConnection> {
    const movieConnection = {} as MovieConnection;
    if (state) {
      if (res.data.movies.search.edges !== null) {
        movieConnection.edges = state.edges.concat(
          res.data.movies.search.edges,
        );
      } else {
        movieConnection.edges = state.edges;
      }

      movieConnection.pageInfo = res.data.movies.search.pageInfo;
      movieConnection.totalCount = state.totalCount;
      return Promise.resolve(movieConnection);
    }
    return Promise.resolve(res.data.movies.search);
  },
};

export default SelectorService;
