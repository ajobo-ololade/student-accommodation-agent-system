import { getHostelActionType, messageActionType, loadingActionTypes } from "../type";

const initialStates = {
  successMessage: '',
  errorMessage: '',
  isLoading: false,
  hostel: []
};

export const HostelReducer = (state = initialStates, { type, payload }) => {
  switch (type) {

    case loadingActionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case getHostelActionType.HOSTEL:
      return {
        ...state,
        hostel: payload
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

    case loadingActionTypes.IS_LOADING_DONE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state;
  }
};
