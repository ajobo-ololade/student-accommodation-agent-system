import { getUserActionType, messageActionType } from "../type";

const initialStates = {
  successMessage: '',
  errorMessage: '',
  user: {}
};

export const GetUserReducer = (state = initialStates, { type, payload }) => {
  switch (type) {

    case getUserActionType.USER:
      return {
        ...state,
        user: payload
      }
    case messageActionType.SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: payload
      }

    case messageActionType.ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload
      }

    default:
      return state;
  }
};
