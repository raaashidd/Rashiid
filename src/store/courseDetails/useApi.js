import { AxiosApi } from "../AxiosMethod";
import {
  CourseSingleViewFail,
  CourseSingleViewRequest,
  CourseSingleViewSuccess,
  createCourseFail,
  createCourseRequest,
  createCourseSuccess,
  getCourseDataFail,
  getCourseDataRequest,
  getCourseDataSuccess,
} from "./action";

export const createCourseApi = (values, navigate) => {
  return async (dispatch) => {
    dispatch(createCourseRequest(values));
    try {
      const res = await AxiosApi.post(`/course/course/`, values);
      dispatch(createCourseSuccess(res));
      navigate("/Courses");
    } catch (error) {
      dispatch(createCourseFail(error?.responce?.data));
    }
  };
};

//  GET COURSE DATA //

export const getCourseDataApi = () => {
  return async (dispatch) => {
    dispatch(getCourseDataRequest());
    try {
      const res = await AxiosApi.get(`/course/course/`);
      dispatch(getCourseDataSuccess(res.data));
    } catch (error) {
      dispatch(getCourseDataFail(error?.responce?.data));
    }
  };
};

// single view //

export const CourseSingleViewApi = (id) => {
  return async (dispatch) => {
    dispatch(CourseSingleViewRequest());
    try {
      const res = await AxiosApi.get(`/course/course/${id}`);
      dispatch(CourseSingleViewSuccess(res.data));
    } catch (error) {
      dispatch(CourseSingleViewFail(error?.responce?.data));
    }
  };
};
