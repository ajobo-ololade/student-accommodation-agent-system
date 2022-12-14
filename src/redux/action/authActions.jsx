import { loginRequest, signUpRequest } from "../../api/authRequest";
import { storageSet } from "../../utils/utilities";
import { loadingActionTypes, messageActionType } from "../type";

export const LoginAction = (values) => async (dispatch) => {
  try {
    // dispatch({
    //   type: loadingActionTypes.ISLOADING,
    // });
    const data = await loginRequest(values);
    // console.log(data)
    if (data?.success === true) {
      storageSet("token", data.token);
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: data.message,
      });
    }
    else {
      dispatch({
        type: messageActionType.SUCCESS_MESSAGE,
        payload: data.message,
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
