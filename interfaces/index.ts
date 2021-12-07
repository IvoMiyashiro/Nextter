export interface IAppStore {
  userState: IUser,
  devitState: IDevit
}

export interface IUser {
  id: string
  name: string
  username: string
  email: string
  bio: string
  profilePicture: string
  coverPicture: string
  birthDate: Date
  followers: Array<any>
  followins: Array<any>
  firstEditProfile: boolean
}

export interface IDevit {
  id: string
  uid: string
  content: string
  img: string
  comments: Array<any>
  favs: Array<any>
  revits: Array<any>
  createdAt: Date
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

export interface IRevit {
  id: string
  devitId: string
  uid: string
  content: string
  img: string
  favs: IDevitFavs
  comments: IComment
}
