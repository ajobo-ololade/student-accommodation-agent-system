import { getUsersRequest, usersUpdateRequest } from "../../api/usersRequest";
import { getUserActionType, messageActionType } from "../type";

export const GetUserAction = (value) => async (dispatch) => {

    try {

        const data = await getUsersRequest(value);
        console.log(data.user);
        if (data?.success === true) {
            dispatch({
                type: getUserActionType.USER,
                payload: data?.user,
            })
            console.log(data.user);
            localStorage.setItem('user', JSON.stringify(data?.user));
        }

        return data;
        
    } catch (error) {
        console.log(error);
    }
}

export const UpdateUserAction = (value) => async (dispatch) => {

    try {

        const data = await usersUpdateRequest(value);
        console.log(data);
        if (data?.success === true) {
            dispatch({
                type: messageActionType.SUCCESS_MESSAGE,
                payload: data?.message,
            })
        }else{
            dispatch({
                type: messageActionType.ERROR_MESSAGE,
                payload: 'Incomplete supply details',
            })
        }

        return data;
        
    } catch (error) {
        console.log(error);
    }
}