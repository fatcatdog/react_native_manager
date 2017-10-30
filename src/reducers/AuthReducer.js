import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  //console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
        return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      // reset to initial state then update the user property
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAILED:
      return { ...state, password: '', loading: false, error: 'Authentication Failed' };
    default:
      return state;
  }
};
