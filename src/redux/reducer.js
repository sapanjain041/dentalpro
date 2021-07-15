import * as types from "./actionTypes";
const initialState = {
  aboutInfoData: [],
  doctorInfoData: [],
  ourServiceData: [],
  clinicInfoData: [],
  sliderImageData: [],
  blogData: [],
  specialityData: [],
  AppoinmentData: [],
  singleDoctorInfo: {
    name: "",
    expectisem: "",
    about_title: "",
    about_description: "",
    speciality: [],
  },

  singleClinicInfoData: {
    Professional_dentists: "",
    Setisfied_patient: "",
    Our_machines: "",
    Hospital_rooms: "",
  },

  isloading: false,
};

export const dentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ABOUTINFO:
      return {
        ...state,
        aboutInfoData: action.payload,
      };
    case types.GET_SPECIALITY:
      return {
        ...state,
        specialityData: action.payload,
      };
    case types.GET_BLOGINFO:
      return {
        ...state,
        blogData: action.payload,
      };
    case types.ISLOADING:
      return {
        ...state,
        isloading: action.payload,
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
    case types.GET_SINGLE_CLINICINFO:
      return {
        ...state,
        singleClinicInfoData: action.payload,
      };
    case types.GET_SINGLE_DOCTORINFO:
      return {
        ...state,
        singleDoctorInfo: action.payload,
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
