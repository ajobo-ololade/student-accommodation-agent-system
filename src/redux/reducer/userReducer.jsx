import { getUserActionType } from "../type";

const initialStates = {
 user: {}
};

export const GetUserReducer = (state = initialStates, {type, payload}) => {
  switch (type) {

    case getUserActionType.USER:
        return {
            ...state,
            user: payload
        }
        
        default:
          return state;
        }
};
