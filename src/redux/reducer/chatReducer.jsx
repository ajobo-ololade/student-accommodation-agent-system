import { messageActionType, getAgentActionType, getMessageActionType } from "../type";

const initialStates = {
    successMessage: '',
    errorMessage: '',
    chats: [],
    agents: [],
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
                agents: payload
            }

        case getMessageActionType.MESSAGES:
            return {
                ...state,
                chat: payload
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
