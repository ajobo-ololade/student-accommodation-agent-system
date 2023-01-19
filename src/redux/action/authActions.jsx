import { loginRequest, logOutRequest, signUpRequest } from "../../api/authRequest";
import { storageRemove, storageSet } from "../../utils/utilities";
import { loadingActionTypes, messageActionType } from "../type";

export const LoginAction = (values) => async (dispatch) => {
  try {
    // dispatch({
    //   type: loadingActionTypes.ISLOADING,
    // });
    const data = await loginRequest(values);
    console.log(data);
    if (data?.success === true) {
      // storageSet("token", data.token);
      storageSet("token", data?.data.token);
        // storageSet("data", data?.data);
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: data.message,
      });
    }
    else {
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: "Invalid Login details",
      });
    }
    // dispatch({
    //   type: loadingActionTypes.LOAD_DONE,
    // });
    return data
  } catch (error) {
    console.log(error);
    return error
  }
};

export const SignUpAction = (value) => async (dispatch) => {
  try {

    const data = await signUpRequest(value);

    // extract success
    if (data?.success === true) {
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: data.message,
      })

    }

    // extract error
    else {
      dispatch({
        type: messageActionType.ERROR_MESSAGE,
        payload: data.message,
      })
    }

    return data

  } catch (error) {
    console.log(error);
  }
}

export const LogOutAction = (value) => async (dispatch) => {
  try {

    const data = await logOutRequest(value);

    // extract success
    if (data?.success === true) {
      storageRemove('token')
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: data.message,
      })

    }

    // extract error
    // else {
    //   dispatch({
    //     type: messageActionType.ERROR_MESSAGE,
    //     payload: data.message,
    //   })
    // }

    return data

  } catch (error) {
    console.log(error);
  }
}
