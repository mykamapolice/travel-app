export interface IViews {
  imgURL: string;
  viewName: string;
  about: string;
}

export interface IDetails {
  info: string;
  views: IViews[];
  videoURL: string;
  mapCoords: any;
}

export interface ICountries {
  name: string;
  capital: string;
  currencyCode: string;
  details: IDetails;
  rating: any;
  photo: string;
}

export interface ISearchInput {
  text: string;
  disabled: boolean;
}

export interface IInitialStateType {
  loading: boolean;
  error: null;
  countries: ICountries[];
}

interface ICapital {
  latitude: number;
  longitude: number;
}
interface ICenter {
  latitude: number;
  longitude: number;
}

interface ImapCoords {
  capital: ICapital;
  center: ICenter;
}

export interface IMapProps {
  countryName: string;
  countryCapital: string;
  mapCoords: ImapCoords;
}

export interface ICurrenciesProps {
  currency: string;
}

interface IUserData {
  username: string;
  token: string;
}

export interface IUser {
  currentUser: IUserData;
  serverMessage: string;
  isAuth: boolean;
}
