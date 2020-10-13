/* eslint-disable */
/* tslint-disable */
// @ts-nocheck
// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//


export type Maybe<T> = T | null;
import sgtsQL, {DocumentNode} from 'graphql-tag';

export interface AlternativeTitle {
  iso3166_1: string;
  title: string;
  type: string;
}

export interface BackdropSizeDetailImage {
  aspectRatio: number;
  height: number;
  image: undefined;
  iso639_1: Maybe<string>;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface BaseCreditBasicPerson {
  id: string;
  value: BasicPerson;
}

export interface BaseCreditMovie {
  id: string;
  value: Movie;
}

export interface BaseCreditMovieOrTV {
  id: string;
  value: MovieOrTV;
}

export interface BaseCreditTVShow {
  id: string;
  value: TVShow;
}

export interface BasicPerson {
  credits: PersonCredits;
  details: DetailedPerson;
  externalIds: ExternalIDS;
  id: number;
  images: ProfileSizeDetailImage[];
  name: string;
  profilePicture: Maybe<undefined>;
  taggedImages: TaggedImageConnection;
  translations: TranslationWithTranslatedPersonInfo[];
}

export interface CastCreditBasicPerson {
  character: string;
  id: string;
  value: BasicPerson;
}

export interface CastCreditMovie {
  character: string;
  id: string;
  value: Movie;
}

export interface CastCreditMovieOrTV {
  character: string;
  id: string;
  value: MovieOrTV;
}

export interface CastCreditTVShow {
  character: string;
  id: string;
  value: TVShow;
}

export interface CreditsBasicPerson {
  cast: CastCreditBasicPerson[];
  crew: CrewCreditBasicPerson[];
  id: number;
}

export interface CreditsMovie {
  cast: CastCreditMovie[];
  crew: CrewCreditMovie[];
  id: number;
}

export interface CreditsMovieOrTV {
  cast: CastCreditMovieOrTV[];
  crew: CrewCreditMovieOrTV[];
  id: number;
}

export interface CreditsTVShow {
  cast: CastCreditTVShow[];
  crew: CrewCreditTVShow[];
  id: number;
}

export interface CrewCreditBasicPerson {
  department: string;
  id: string;
  job: string;
  value: BasicPerson;
}

export interface CrewCreditMovie {
  department: string;
  id: string;
  job: string;
  value: Movie;
}

export interface CrewCreditMovieOrTV {
  department: string;
  id: string;
  job: string;
  value: MovieOrTV;
}

export interface CrewCreditTVShow {
  department: string;
  id: string;
  job: string;
  value: TVShow;
}

export interface DetailedEpisode {
  airDate: undefined;
  credits: EpisodeCreditsBasicPerson;
  crew: CrewCreditBasicPerson[];
  details: DetailedEpisode;
  episodeNumber: number;
  externalIds: ExternalIDS;
  guestStars: CastCreditBasicPerson[];
  id: number;
  images: EpisodeImages;
  name: string;
  overview: string;
  productionCode: string;
  seasonNumber: number;
  still: Maybe<undefined>;
  streamingOptions: Maybe<StreamingOption[]>;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
  voteAverage: number;
  voteCount: number;
}

export interface DetailedMovie {
  alternativeTitles: AlternativeTitle[];
  backdrop: Maybe<undefined>;
  budget: number;
  credits: CreditsBasicPerson;
  details: DetailedMovie;
  externalIds: ExternalIDS;
  genres: Genre[];
  id: number;
  images: MediaImages;
  imdbID: string;
  isAdult: boolean;
  isVideo: boolean;
  keywords: Keyword[];
  numberOfRatings: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularityIndex: Maybe<number>;
  poster: Maybe<undefined>;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  rating: number;
  recommendations: MovieConnection;
  releaseDate: Maybe<undefined>;
  revenue: number;
  reviews: ReviewConnection;
  runtime: number;
  similar: MovieConnection;
  spokenLanguages: SpokenLanguage[];
  status: Status;
  streamingOptions: Maybe<StreamingOption[]>;
  tagline: string;
  title: string;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
}

export interface DetailedPerson {
  alsoKnownAs: string[];
  biography: string;
  birthday: Maybe<undefined>;
  credits: PersonCredits;
  deathday: Maybe<undefined>;
  details: DetailedPerson;
  externalIds: ExternalIDS;
  gender: Gender;
  homepage: Maybe<undefined>;
  id: number;
  images: ProfileSizeDetailImage[];
  imdbID: Maybe<string>;
  isAdult: boolean;
  knownForDepartment: string;
  name: string;
  placeOfBirth: Maybe<string>;
  popularityIndex: number;
  profilePicture: Maybe<undefined>;
  taggedImages: TaggedImageConnection;
  translations: TranslationWithTranslatedPersonInfo[];
}

export interface DetailedSeason {
  airDate: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedSeason;
  episode: DetailedEpisode;
  episodes: Episode[];
  externalIds: ExternalIDS;
  id: number;
  images: MediaImages;
  name: string;
  overview: Maybe<string>;
  poster: Maybe<undefined>;
  seasonNumber: number;
  streamingOptions: Maybe<StreamingOption[]>;
  videos: Video[];
}

export interface DetailedTVShow {
  alternativeTitles: AlternativeTitle[];
  backdrop: Maybe<undefined>;
  createdBy: BaseCreditBasicPerson[];
  credits: CreditsBasicPerson;
  details: DetailedTVShow;
  episodeRunTime: number[];
  externalIds: ExternalIDS;
  firstAirDate: Maybe<undefined>;
  genres: Genre[];
  id: number;
  images: MediaImages;
  inProduction: boolean;
  keywords: Keyword[];
  languages: string[];
  lastAirDate: Maybe<undefined>;
  lastEpisodeToAir: Maybe<Episode>;
  name: string;
  networks: Network[];
  nextEpisodeToAir: Maybe<Episode>;
  numberOfEpisodes: number;
  numberOfRatings: number;
  numberOfSeasons: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularityIndex: Maybe<number>;
  poster: Maybe<undefined>;
  productionCompanies: Network[];
  rating: number;
  recommendations: TVShowConnection;
  reviews: ReviewConnection;
  season: DetailedSeason;
  seasons: SeasonResult[];
  similar: TVShowConnection;
  status: string;
  streamingOptions: Maybe<StreamingOption[]>;
  translations: TranslationWithTranslatedMovieInfo[];
  type: string;
  videos: Video[];
}

export interface Episode {
  airDate: undefined;
  credits: EpisodeCreditsBasicPerson;
  details: DetailedEpisode;
  episodeNumber: number;
  externalIds: ExternalIDS;
  id: number;
  images: EpisodeImages;
  name: string;
  overview: string;
  productionCode: string;
  seasonNumber: number;
  still: Maybe<undefined>;
  streamingOptions: Maybe<StreamingOption[]>;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
  voteAverage: number;
  voteCount: number;
}

export interface EpisodeCreditsBasicPerson {
  cast: CastCreditBasicPerson[];
  crew: CrewCreditBasicPerson[];
  guestStars: CastCreditBasicPerson[];
  id: number;
}

export interface EpisodeImages {
  stills: StillSizeDetailImage[];
}

export interface ExternalIDS {
  facebook: Maybe<string>;
  imdb: Maybe<string>;
  instagram: Maybe<string>;
  twitter: Maybe<string>;
}

export interface FromExternalIds {
  movies: Movie[];
  people: PersonListResult[];
  tv: TVShow[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Keyword {
  id: number;
  movies: MovieConnection;
  name: string;
}

export interface LogoSizeDetailImage {
  aspectRatio: number;
  height: number;
  image: undefined;
  iso639_1: Maybe<string>;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface MediaImages {
  backdrops: BackdropSizeDetailImage[];
  posters: PosterSizeDetailImage[];
}

export interface Movie {
  alternativeTitles: AlternativeTitle[];
  backdrop: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedMovie;
  externalIds: ExternalIDS;
  id: number;
  images: MediaImages;
  isAdult: boolean;
  isVideo: boolean;
  keywords: Keyword[];
  numberOfRatings: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularityIndex: Maybe<number>;
  poster: Maybe<undefined>;
  rating: number;
  recommendations: MovieConnection;
  releaseDate: Maybe<undefined>;
  reviews: ReviewConnection;
  similar: MovieConnection;
  streamingOptions: Maybe<StreamingOption[]>;
  title: string;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
}

export interface MovieConnection {
  edges: MovieEdge[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface MovieEdge {
  cursor: string;
  node: Maybe<Movie>;
}

export interface MovieOrTVOrPeopleConnection {
  edges: Maybe<MovieOrTVOrPeopleEdge[]>;
  pageInfo: PageInfo;
  totalCount: number;
}

export interface MovieOrTVOrPeopleEdge {
  cursor: string;
  node: Maybe<MovieOrTVOrPeople>;
}

export interface MovieResult {
  alternativeTitles: AlternativeTitle[];
  backdrop: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedMovie;
  externalIds: ExternalIDS;
  id: number;
  images: MediaImages;
  isAdult: boolean;
  isVideo: boolean;
  keywords: Keyword[];
  numberOfRatings: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularityIndex: Maybe<number>;
  poster: Maybe<undefined>;
  rating: number;
  recommendations: MovieConnection;
  releaseDate: Maybe<undefined>;
  reviews: ReviewConnection;
  similar: MovieConnection;
  streamingOptions: Maybe<StreamingOption[]>;
  title: string;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
}

export interface Movies {
  movie: DetailedMovie;
  nowPlaying: MovieConnection;
  popular: MovieConnection;
  search: MovieConnection;
  topRated: MovieConnection;
  trending: MovieConnection;
  upcoming: MovieConnection;
}

export interface Data {
  movies: Movies;
}

export interface Network {
  id: number;
  logo: Maybe<undefined>;
  name: string;
  originCountry: string;
}

export interface PageInfo {
  endCursor: Maybe<string>;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: Maybe<string>;
}

export interface People {
  person: DetailedPerson;
  popular: PersonListResultConnection;
  search: PersonListResultConnection;
  trending: PersonListResultConnection;
}

export interface Person {
  credits: PersonCredits;
  details: DetailedPerson;
  externalIds: ExternalIDS;
  id: number;
  images: ProfileSizeDetailImage[];
  isAdult: boolean;
  name: string;
  popularityIndex: number;
  profilePicture: Maybe<undefined>;
  taggedImages: TaggedImageConnection;
  translations: TranslationWithTranslatedPersonInfo[];
}

export interface PersonCredits {
  all: CreditsMovieOrTV;
  id: number;
  movies: CreditsMovie;
  tv: CreditsTVShow;
}

export interface PersonListResult {
  credits: PersonCredits;
  details: DetailedPerson;
  externalIds: ExternalIDS;
  id: number;
  images: ProfileSizeDetailImage[];
  isAdult: boolean;
  knownFor: MovieOrTV[];
  name: string;
  popularityIndex: number;
  profilePicture: Maybe<undefined>;
  taggedImages: TaggedImageConnection;
  translations: TranslationWithTranslatedPersonInfo[];
}

export interface PersonListResultConnection {
  edges: Maybe<PersonListResultEdge[]>;
  pageInfo: PageInfo;
  totalCount: number;
}

export interface PersonListResultEdge {
  cursor: string;
  node: Maybe<PersonListResult>;
}

export interface PosterSizeDetailImage {
  aspectRatio: number;
  height: number;
  image: undefined;
  iso639_1: Maybe<string>;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface ProductionCompany {
  id: number;
  logo: Maybe<undefined>;
  name: string;
  originCountry: string;
}

export interface ProductionCountry {
  iso3166_1: string;
  name: string;
}

export interface ProfileSizeDetailImage {
  aspectRatio: number;
  height: number;
  image: undefined;
  iso639_1: Maybe<string>;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface Query {
  find: FromExternalIds;
  movies: Movies;
  people: People;
  search: MovieOrTVOrPeopleConnection;
  trending: MovieOrTVOrPeopleConnection;
  tv: TV;
}

export interface Review {
  author: string;
  content: string;
  id: string;
  url: string;
}

export interface ReviewConnection {
  edges: Maybe<ReviewEdge[]>;
  pageInfo: PageInfo;
  totalCount: number;
}

export interface ReviewEdge {
  cursor: string;
  node: Maybe<Review>;
}

export interface Season {
  airDate: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedSeason;
  episode: DetailedEpisode;
  externalIds: ExternalIDS;
  id: number;
  images: MediaImages;
  name: string;
  overview: Maybe<string>;
  poster: Maybe<undefined>;
  seasonNumber: number;
  streamingOptions: Maybe<StreamingOption[]>;
  videos: Video[];
}

export interface SeasonResult {
  airDate: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedSeason;
  episode: DetailedEpisode;
  episodeCount: number;
  externalIds: ExternalIDS;
  id: number;
  images: MediaImages;
  name: string;
  overview: Maybe<string>;
  poster: Maybe<undefined>;
  seasonNumber: number;
  streamingOptions: Maybe<StreamingOption[]>;
  videos: Video[];
}

export interface SpokenLanguage {
  iso639_1: string;
  name: string;
}

export interface StillSizeDetailImage {
  aspectRatio: number;
  height: number;
  image: undefined;
  iso639_1: Maybe<string>;
  voteAverage: number;
  voteCount: number;
  width: number;
}

export interface StreamingLinks {
  androidTV: Maybe<undefined>;
  fireTV: Maybe<undefined>;
  tvOS: Maybe<undefined>;
  web: undefined;
}

export interface StreamingOption {
  bestOffering: StreamingOptionOffering;
  offerings: StreamingOptionOffering[];
  provider: Maybe<StreamingProvider>;
}

export interface StreamingOptionOffering {
  links: StreamingLinks;
  price: Maybe<Price>;
  resolution: VideoResolution;
  type: StreamingMonetizationType;
}

export interface StreamingProvider {
  iconURL: undefined;
  id: number;
  monetizationTypes: StreamingMonetizationType[];
  name: string;
  slug: string;
}

export interface TV {
  airingToday: TVShowConnection;
  onTheAir: TVShowConnection;
  popular: TVShowConnection;
  search: TVShowConnection;
  show: DetailedTVShow;
  topRated: TVShowConnection;
  trending: TVShowConnection;
  upcoming: TVShowConnection;
}

export interface TVShow {
  alternativeTitles: AlternativeTitle[];
  backdrop: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedTVShow;
  externalIds: ExternalIDS;
  firstAirDate: Maybe<undefined>;
  id: number;
  images: MediaImages;
  keywords: Keyword[];
  name: string;
  numberOfRatings: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularityIndex: Maybe<number>;
  poster: Maybe<undefined>;
  rating: number;
  recommendations: TVShowConnection;
  reviews: ReviewConnection;
  season: DetailedSeason;
  similar: TVShowConnection;
  streamingOptions: Maybe<StreamingOption[]>;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
}

export interface TVShowConnection {
  edges: Maybe<TVShowEdge[]>;
  pageInfo: PageInfo;
  totalCount: number;
}

export interface TVShowEdge {
  cursor: string;
  node: Maybe<TVShow>;
}

export interface TVShowResult {
  alternativeTitles: AlternativeTitle[];
  backdrop: Maybe<undefined>;
  credits: CreditsBasicPerson;
  details: DetailedTVShow;
  externalIds: ExternalIDS;
  firstAirDate: Maybe<undefined>;
  id: number;
  images: MediaImages;
  keywords: Keyword[];
  name: string;
  numberOfRatings: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularityIndex: Maybe<number>;
  poster: Maybe<undefined>;
  rating: number;
  recommendations: TVShowConnection;
  reviews: ReviewConnection;
  season: DetailedSeason;
  similar: TVShowConnection;
  streamingOptions: Maybe<StreamingOption[]>;
  translations: TranslationWithTranslatedMovieInfo[];
  videos: Video[];
}

export interface TaggedImage {
  image: AnyImage;
  media: MovieOrTV;
}

export interface TaggedImageConnection {
  edges: Maybe<TaggedImageEdge[]>;
  pageInfo: PageInfo;
  totalCount: number;
}

export interface TaggedImageEdge {
  cursor: string;
  node: Maybe<TaggedImage>;
}

export interface TranslatedMovieInfo {
  overview: string;
  title: string;
}

export interface TranslatedPersonInfo {
  biography: string;
}

export interface TranslationWithTranslatedMovieInfo {
  info: TranslatedMovieInfo;
  iso3166_1: string;
  iso639_1: string;
  language: Maybe<string>;
  localizedLanguage: Maybe<string>;
}

export interface TranslationWithTranslatedPersonInfo {
  info: TranslatedPersonInfo;
  iso3166_1: string;
  iso639_1: string;
  language: Maybe<string>;
  localizedLanguage: Maybe<string>;
}

export interface Video {
  id: string;
  iso3166_1: string;
  iso639_1: string;
  key: string;
  links: Maybe<StreamingLinks>;
  name: string;
  site: string;
  size: number;
  thumbnail: Maybe<undefined>;
  type: string;
}

export interface Error {
  message: string;
}

export type AnyImage =
  | BackdropSizeDetailImage
  | PosterSizeDetailImage
  | ProfileSizeDetailImage
  | StillSizeDetailImage
  | LogoSizeDetailImage;
export const enum BackdropSize {
  Original = 'Original',
  W1280 = 'W1280',
  W300 = 'W300',
  W780 = 'W780',
}
export const enum ExternalSource {
  Instagram = 'Instagram',
  Freebase = 'Freebase',
  Tvdb = 'Tvdb',
  Tvrage = 'Tvrage',
  Imdb = 'Imdb',
  Facebook = 'Facebook',
  Twitter = 'Twitter',
}
export const enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknownornonbinary = 'UnknownOrNonBinary',
}
export const enum LogoSize {
  W92 = 'W92',
  Original = 'Original',
  W45 = 'W45',
  W500 = 'W500',
  W300 = 'W300',
  W185 = 'W185',
  W154 = 'W154',
}
export type MovieOrTV = MovieResult | TVShowResult;
export type MovieOrTVOrPeople = MovieResult | TVShowResult | PersonListResult;
export const enum PosterSize {
  W780 = 'W780',
  W342 = 'W342',
  W185 = 'W185',
  W154 = 'W154',
  W92 = 'W92',
  Original = 'Original',
  W500 = 'W500',
}
export const enum ProfileSize {
  Original = 'Original',
  W185 = 'W185',
  H632 = 'H632',
  W45 = 'W45',
}
export const enum Status {
  Cancelled = 'Cancelled',
  Released = 'Released',
  Planned = 'Planned',
  Postproduction = 'PostProduction',
  Rumored = 'Rumored',
  Inproduction = 'InProduction',
}
export const enum StillSize {
  W300 = 'W300',
  W92 = 'W92',
  W185 = 'W185',
  Original = 'Original',
}
export const enum StreamingMonetizationType {
  Ads = 'Ads',
  Free = 'Free',
  Buy = 'Buy',
  Flatrate = 'Flatrate',
  Cinema = 'Cinema',
  Rent = 'Rent',
}
export const enum TimeWindow {
  Week = 'Week',
  Day = 'Day',
}
export const enum VideoResolution {
  Sd = 'Sd',
  Theatre = 'Theatre',
  Hd = 'Hd',
  Bluray = 'Bluray',
  Dvd = 'Dvd',
  Ultrahd = 'UltraHd',
}
export interface findArgs {
  source: ExternalSource;
  externalId: string;
}

export interface moviesArgs {}

export interface peopleArgs {}

export interface searchArgs {
  first?: number;
  term: string;
  before?: string;
  last?: number;
  after?: string;
}

export interface trendingArgs {
  timeWindow: TimeWindow;
  first?: number;
  before?: string;
  last?: number;
  after?: string;
}

export interface Searchinfo {
  totalhits: number;
}

export interface WikiSearch {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
}

export interface WikiQuery {
  searchinfo: Searchinfo;
  search: WikiSearch[];
  pages: Page[];
}

export interface Parse {
  title: string;
  pageid: number;
  text: string;
}

export interface Page {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
}

export interface RootObject {
  batchcomplete: string;
  continue: Continue;
  query: WikiQuery;
  parse: Parse;
  data: Data;
}

export interface DescriptionPage {
  title: string | undefined;
  description: string | undefined;
  imdbLink: string | undefined;
  wikepediaLink: string | undefined;
}

export interface tvArgs {}
