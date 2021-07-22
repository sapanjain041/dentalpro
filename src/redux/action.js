import axios from "axios";
import * as types from "./actionTypes";

export const getAboutInfo = () => async (dispatch) => {
  dispatch(isloading(true));
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/aboutInfo/"
  );
  dispatch({
    type: types.GET_ABOUTINFO,
    payload: result.data.results,
  });
  dispatch(isloading(false));
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
    payload: result.data.results,
  });
};

export const getClinicInfo = () => async (dispatch) => {
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/clinicInfo/1/"
  );
  dispatch({
    type: types.GET_CLINICINFO,
    payload: result.data.results,
  });
};

export const getSliderImages = () => async (dispatch) => {
  const result = await axios.get(process.env.REACT_APP_URL + "slider/");
  dispatch({
    type: types.GET_SLIDERIMAGES,
    payload: result.data.results,
  });
};

export const postAppointment = (post, notify) => async (dispatch) => {
  try {
    const result = await axios.post(
      "https://dentalproject.herokuapp.com/appoinment/",
      post
    );
    dispatch({
      type: types.POST_APPOINTMENT,
      payload: result.data.results,
    });
    notify("success");
  } catch (error) {
    notify("error");
  }
};

export const getSingleDoctorInfo = (id) => async (dispatch) => {
  try {
    const result = await axios.get(
      "https://dentalproject.herokuapp.com/doctorInfo/" + id + "/"
    );
    dispatch({
      type: types.GET_SINGLE_DOCTORINFO,
      payload: result.data,
    });
  } catch (err) {
    alert("this doctorInfo is not available yet " + err);
  }
};

export const getSingleClinicInfo = (id) => async (dispatch) => {
  try {
    const result = await axios.get(
      "https://dentalproject.herokuapp.com/clinicInfo/" + id + "/"
    );
    dispatch({
      type: types.GET_SINGLE_CLINICINFO,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
    alert("this ClinicInfo is not available yet ");
  }
};

export const isloading = (data) => {
  return { type: types.ISLOADING, payload: data };
};

export const getSpeciality = () => async (dispatch) => {
  const result = await axios.get(
    "https://dentalproject.herokuapp.com/speciality/"
  );
  dispatch({
    type: types.GET_SPECIALITY,
    payload: result.data.results,
  });
};
export const getBLogInfo = () => async (dispatch) => {
  const result = await axios.get(process.env.REACT_APP_URL + "blog/");
  dispatch({
    type: types.GET_BLOGINFO,
    payload: result.data.results,
  });
};
