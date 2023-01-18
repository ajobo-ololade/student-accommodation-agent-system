import { createHostelRequest, deleteHostelRequest, editHostelRequest, getHostelIdRequest, getHostelRequest } from "../../api/hostelRequests";
import { getHostelActionType, messageActionType, loadingActionTypes } from "../type";

export const CreateHostelAction = (value) => async (dispatch) => {

    try {
        console.log(value);
        const data = await createHostelRequest(value);
        console.log(data);
        if (data?.success === true) {
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data?.message
            })
        }else{
            dispatch({
                type: messageActionType.ERROR_MESSAGE,
                payload: data?.message
            })
        }

        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export const GetHostelAction = (value) => async (dispatch) => {
    
    try {

        dispatch({ type: loadingActionTypes.IS_LOADING, });

        const data = await getHostelRequest(value);
        console.log(data);
        // if (data) {
           dispatch({
            type: getHostelActionType.HOSTEL,
            payload: data,
           })
        // }
    } catch (error) {
        dispatch({ type: loadingActionTypes.IS_LOADING_DONE, });
        console.log(error)
    }
}

export const GetHostelIdAction = (value) => async (dispatch) => {
    try {
        
        const data = await getHostelIdRequest(value);
        console.log(data);

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const EditHostelAction = (value) => async (dispatch) => {
    try {
        
        const data = await editHostelRequest(value);
        console.log(data);

        if (data?.success === true) {
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data?.message
            })
        }

        return data;

    } catch (error) {
        console.log(error);
    }
}

export const DeleteHostelAction = (value) => async (dispatch) => {
    try {
        
        const data = await deleteHostelRequest(value);
        console.log(data);

        if (data?.success === true) {
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data?.message
            })
        }

        return data;

    } catch (error) {
        console.log(error);
    }
}