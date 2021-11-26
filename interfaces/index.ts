export interface UserContextInterface {
  uid: string,
  name: string,
  img: string,
}

export interface IUser {
  id: string,
  name: string,
  email: string,
  bio: string,
  profilePicture: string,
  coverPicture: string,
  birthDate: Date,
  followers: Array<any>,
  followins: Array<any>
}

export interface IDevit {
  id: string,
  uid: string,
  content: string,
  img: string,
  comments: Array<any>,
  favs: Array<any>,
  revits: Array<any>,
  createdAt: Date,
  updatedAt : Date
}

export interface IDevitFavs {
  uid: string,
}

export interface IComment {
  id: string
  uid: string
  content: string
  url: string
  favs: string[]
  createdAt: Date
}
