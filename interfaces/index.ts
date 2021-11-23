export interface UserContextInterface {
  uid: String,
  name: String,
  img: String,
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
