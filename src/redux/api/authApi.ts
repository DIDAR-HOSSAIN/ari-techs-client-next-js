import { tagTypes } from './../tag-types';
import { baseApi } from "./baseApi"

const AUTH_URL = "/auth";
const SIGN_UP_URL = "/signup";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url:`${AUTH_URL}/login`,
        method:"POST",
        data:loginData  
      }),
      invalidatesTags:[tagTypes.user]
    }),

    userSignUp: build.mutation({
      query: (data) => ({
        url:`${SIGN_UP_URL}/sign-up`,
        method:"POST",
        data  ,
      }),
      invalidatesTags:[tagTypes.user]
    }),

  }),
  overrideExisting: false,
})

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;
