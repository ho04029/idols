export interface IidolMember {
  name: string;
  img: string;
  birth: string;
  role: string;
}

export interface IAlbum {
  date: string;
  series: string;
  title: string;
  etc?: string;
  img: string;
}

export interface IAlbumsStrict {
  [key: string]: IAlbum[];
  정규: IAlbum[];
  미니: IAlbum[];
  싱글: IAlbum[];
  "디지털 싱글": IAlbum[];
  "선공개 싱글": IAlbum[];
}

export type IAlbums = Partial<IAlbumsStrict>;

export interface IidolGroup {
  name: string;
  logo: string;
  mainPhoto: string;
  slogan: string;
  members: IidolMember[];
  albums: IAlbums;
  japanAlbums?: IAlbums;
  bgColor: string;
  textColor: string;
  headerActiveColor: string;
  headerActiveTextColor: string;
  memberConColor: string;
  memberConTextColor: string;
  albumconbgColor: string;
  albumcontextColor: string;
}
