interface IReducer {
    uid: String,
    name: String,
    img: String
}

type userType = {
  uid: String,
  name: String,
  img: String
}

const initialState = {
  uid: '',
  name: '',
  img: ''
};

export const userReducer = (state: userType, action: any) => {
  switch (action.type) {
  default:
    return initialState;
  }
};
