import baseApi from '../../services';

type loginPayloadType = {
  username: string;
  password: string;
};
const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: loginPayloadType) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});

export default loginApi;
export const { useLoginMutation } = loginApi;
