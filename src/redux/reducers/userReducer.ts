import { SET_USER, LOGOUT } from '../actions/actionTypes';
import { IUser } from '../../Interfaces';

const initialStateState: IUser = {
  currentUser: {
    username: '',
    token: '',
  },
  serverMessage: '',
  isAuth: false,
};

export default function userReducer(
  state: IUser = initialStateState,
  action: any
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };

    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };

    default:
      return state;
  }
}
