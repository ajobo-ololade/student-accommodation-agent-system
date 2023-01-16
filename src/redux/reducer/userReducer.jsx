import { getHostelActionType } from "../type";

const initialStates = {
 user: {}
};

export const GetUserReducer = (state = initialStates, {type, payload}) => {
  switch (type) {

    case getHostelActionType.USER:
        return {
            ...state,
            user: payload
        }

    default:
      return state;
  }
};
