import { tagTypes } from './../tag-types';
import { baseApi } from "./baseApi"

const SIGN_UP_URL = "/signup";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation({
      query: (data) => ({
        url:`${SIGN_UP_URL}/sign-up`,
        method:"POST",
        data,
      }),
      invalidatesTags:[tagTypes.user]
    }),

  }),
  overrideExisting: false,
})

export const { useUserSignUpMutation } = authApi;