import baseApi from '.';
import { CreateEmployeeType, EmployeeType } from '../actions/employeeAction';

const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: EmployeeType[] }, void>({
      query: () => '/employees',
      providesTags: ['getemployees']
    }),
    getEmployeeById: builder.query<{ data: EmployeeType }, number>({
      query: (employeeId) => `/employees/${employeeId}`
    }),
    deleteEmployeeById: builder.mutation<{ data: EmployeeType }, number>({
      query: (employeeId) => ({
        url: `/employees/${employeeId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['getemployees']
    }),
    createNewEmployee: builder.mutation({
      query: (body: CreateEmployeeType) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['getemployees']
    }),
    saveNewEmployee: builder.mutation({
      query: (body: EmployeeType) => ({
        url: `/employees/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['getemployees']
    })
  })
});

export default employeeApi;
export const {
  useGetEmployeeListQuery,
  useLazyGetEmployeeListQuery,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeeByIdQuery,
  useDeleteEmployeeByIdMutation,
  useCreateNewEmployeeMutation,
  useSaveNewEmployeeMutation
} = employeeApi;
