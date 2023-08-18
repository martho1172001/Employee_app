import baseApi from '.';
type departmentType = {
  id: number;
  name: string;
  deletedAt: Date;
  updatedAt: Date;
  createdAt: Date;
};

const dropdownApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query<{ data: departmentType[] }, void>({
      query: () => '/departments',
      providesTags: ['getdepartments']
    }),
    getRoles: builder.query<{ data: String[] }, void>({
      query: () => '/roles',
      providesTags: ['getroles']
    })
  })
});

export default dropdownApi;
export const { useGetDepartmentsQuery, useGetRolesQuery } = dropdownApi;
