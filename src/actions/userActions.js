import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/login", { email, password }, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    userData=JSON.parse(userData)
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { header: { "Content-Type": "multipart/form-data" } };
    
    const {data}  = await axios.post("/register", userData, config);
    
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
 
    const { data } = await axios.get("/me");
    

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.ourUser });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};



export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
