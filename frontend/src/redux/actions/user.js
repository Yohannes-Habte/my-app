import axios from "axios";

// load user
export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
      const { data } = await axios.get(`/user/getuser`, {
        withCredentials: true,
      });
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFail",
        payload: error.response.data.message,
      });
    }
  };