import { DepartmentFilter, EmployeesSortBy } from "./api/employees";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_V1 = `${BASE_URL}/api/v1`;

export const URLS = Object.freeze({
  LANDING_PAGE: `/`,
  EMPLOYEE_DETAILS: (id: string | null) => `/employees/${id ? id : '' }`,
});

export const API_URLS = Object.freeze({
  EMPLOYEES_INDEX: (search: string, department: DepartmentFilter, sortBy: EmployeesSortBy) => {
    const encodedSearch = encodeURIComponent(search);
    const encodedDepartment = encodeURIComponent(department);
    const encodedSortBy = encodeURIComponent(sortBy);
    return `${API_V1}/employees?search=${encodedSearch}&department=${encodedDepartment}&sortBy=${encodedSortBy}`;
  },
  EMPLOYEES_DETAILS: (id: string) => `${API_V1}/employees/${id}/`,
  CREATE_EMPLOYEE: `${API_V1}/employees/`,
  UPDATE_EMPLOYEE: (id: string) => `${API_V1}/employees/${id}`,
  DELETE_EMPLOYEE: (id: string) => `${API_V1}/employees/${id}`,
});