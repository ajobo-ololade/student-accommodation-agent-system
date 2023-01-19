import { messageActionType, getAgentActionType, getMessageActionType } from "../type";

const initialStates = {
    successMessage: '',
    errorMessage: '',
    agent: [],
    chats: [],
};

export const ChatReducer = (state = initialStates, { type, payload }) => {
    switch (type) {

        case messageActionType.SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: payload
            }

        case getAgentActionType.AGENTS:
            return {
                ...state,
                agent: payload
            }

        case getMessageActionType.MESSAGES:
            return {
                ...state,
                chats: payload
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
