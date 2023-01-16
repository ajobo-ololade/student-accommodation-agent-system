import { usersRequest } from "../../api/usersRequest";
import { getUserActionType } from "../type";

export const GetUserAction = (value) => async (dispatch) => {

    try {

        const data = await usersRequest(value);
        console.log(data.user);
        if (data?.user) {
            // dispatch({
            //     type: getUserActionType.USER,
            //     payload: data.user,
            // })
            localStorage.setItem('user', JSON.stringify(data?.user));
        }

        return data;
        
    } catch (error) {
        console.log(error);
    }
}