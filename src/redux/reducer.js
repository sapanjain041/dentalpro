import * as types from "./actionTypes";
const initialState = {
  aboutInfoData: [],
  doctorInfoData: [],
  ourServiceData: [],
  clinicInfoData: [],
  sliderImageData: [],
  AppoinmentData: [],

  loading: false,
};

export const dentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ABOUTINFO:
      return {
        ...state,
        aboutInfoData: action.payload,
      };
    case types.GET_DOCTORINFO:
      return {
        ...state,
        doctorInfoData: action.payload,
      };
    case types.GET_OURSERVICES:
      return {
        ...state,
        ourServiceData: action.payload,
      };
    case types.GET_CLINICINFO:
      return {
        ...state,
        clinicInfoData: action.payload,
      };
    case types.GET_SLIDERIMAGES:
      return {
        ...state,
        sliderImageData: action.payload,
      };
    case types.POST_APPOINTMENT:
      const new_appoinment = [...state.AppoinmentData, action.payload];
      return {
        ...state,
        AppoinmentData: new_appoinment,
      };

    default:
      return state;
  }
};
