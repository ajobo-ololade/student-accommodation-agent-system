import { createMessageRequest, deleteMessageRequest, editMessageRequest, getAgentRequest, getMessageRequest } from "../../api/chatRequests";
import { getMessageActionType, messageActionType, loadingActionTypes, getAgentActionType } from "../type";

export const CreateMessageAction = (value) => async (dispatch) => {

    try {
        console.log(value);
        const data = await createMessageRequest(value);
        console.log(data);
        if (data?.success === true) {
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data?.message
            })
        }else{
            dispatch({
                type: messageActionType.ERROR_MESSAGE,
                payload: "Unable to upload Message details"
            })
        }

        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export const GetMessageAction = (value) => async (dispatch) => {
    
    try {

        dispatch({ type: loadingActionTypes.IS_LOADING, });

        const data = await getMessageRequest(value);
        console.log(data);
        // if (data) {
           dispatch({
            type: getMessageActionType.MESSAGES,
            payload: data,
           })
        // }
    } catch (error) {
        dispatch({ type: loadingActionTypes.IS_LOADING_DONE, });
        console.log(error)
    }
}

export const GetAgentAction = (value) => async (dispatch) => {
    try {
        
        const data = await getAgentRequest(value);
        if (data?.success) {
            console.log(data.data.data);
            dispatch({
                type: getAgentActionType.AGENTS,
                payload: data?.data.data,
            })
        }

        return data;

    } catch (error) {
        console.log(error);
    }
}


export const DeleteMessageAction = (value) => async (dispatch) => {
    try {
        
        const data = await deleteMessageRequest(value);
        console.log(data);

        if (data?.success === true) {
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data?.message
            })
        }else{
            dispatch({
                type: messageActionType.ERROR_MESSAGE,
                payload: 'Unable to delete Message details'
            })
        }

        return data;

    } catch (error) {
        console.log(error);
    }
}