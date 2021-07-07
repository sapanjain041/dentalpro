import axios from "axios";
import * as types from "./actionTypes";

export const getAboutInfo = () => async (dispatch) => {
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/aboutInfo/"
  );
  dispatch({
    type: types.GET_ABOUTINFO,
    payload: result.data,
  });
};

export const getDoctorInfo = () => async (dispatch) => {
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/doctorInfo/"
  );
  dispatch({
    type: types.GET_DOCTORINFO,
    payload: result.data,
  });
};

export const getOurServices = () => async (dispatch) => {
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/ourService/"
  );
  dispatch({
    type: types.GET_OURSERVICES,
    payload: result.data,
  });
};

export const getClinicInfo = () => async (dispatch) => {
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/clinicInfo/1/"
  );
  dispatch({
    type: types.GET_CLINICINFO,
    payload: result.data,
  });
};

export const getSliderImages = () => async (dispatch) => {
  const result = await axios.get("https://dentalproject.herokuapp.com/slider/");
  dispatch({
    type: types.GET_SLIDERIMAGES,
    payload: result.data,
  });
};

export const postAppointment = (post) => async (dispatch) => {
  const result = await axios.post(
    "https://dentalproject.herokuapp.com/appoinment/",
    post
  );
  dispatch({
    type: types.POST_APPOINTMENT,
    payload: result.data,
  });
};
