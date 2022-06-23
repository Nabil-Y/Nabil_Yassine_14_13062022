import { DropdownItem, Employee } from "../types/types";

/**
 * Departments names for "Department" dropdown in AddEmployee form
 */
export const DEPARTMENTS: DropdownItem[] = [
  {
    name: "Sales",
    value: "Sales",
  },
  {
    name: "Marketing",
    value: "Marketing",
  },
  {
    name: "Engineering",
    value: "Engineering",
  },
  {
    name: "Human Resources",
    value: "Human Resources",
  },
  {
    name: "Legal",
    value: "Legal",
  },
];

/**
 * States names for "State" dropdown in AddEmployee form
 */
export const STATES: DropdownItem[] = [
  {
    name: "Alabama",
    value: "AL",
  },
  {
    name: "Alaska",
    value: "AK",
  },
  {
    name: "American Samoa",
    value: "AS",
  },
  {
    name: "Arizona",
    value: "AZ",
  },
  {
    name: "Arkansas",
    value: "AR",
  },
  {
    name: "California",
    value: "CA",
  },
  {
    name: "Colorado",
    value: "CO",
  },
  {
    name: "Connecticut",
    value: "CT",
  },
  {
    name: "Delaware",
    value: "DE",
  },
  {
    name: "District Of Columbia",
    value: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    value: "FM",
  },
  {
    name: "Florida",
    value: "FL",
  },
  {
    name: "Georgia",
    value: "GA",
  },
  {
    name: "Guam",
    value: "GU",
  },
  {
    name: "Hawaii",
    value: "HI",
  },
  {
    name: "Idaho",
    value: "ID",
  },
  {
    name: "Illinois",
    value: "IL",
  },
  {
    name: "Indiana",
    value: "IN",
  },
  {
    name: "Iowa",
    value: "IA",
  },
  {
    name: "Kansas",
    value: "KS",
  },
  {
    name: "Kentucky",
    value: "KY",
  },
  {
    name: "Louisiana",
    value: "LA",
  },
  {
    name: "Maine",
    value: "ME",
  },
  {
    name: "Marshall Islands",
    value: "MH",
  },
  {
    name: "Maryland",
    value: "MD",
  },
  {
    name: "Massachusetts",
    value: "MA",
  },
  {
    name: "Michigan",
    value: "MI",
  },
  {
    name: "Minnesota",
    value: "MN",
  },
  {
    name: "Mississippi",
    value: "MS",
  },
  {
    name: "Missouri",
    value: "MO",
  },
  {
    name: "Montana",
    value: "MT",
  },
  {
    name: "Nebraska",
    value: "NE",
  },
  {
    name: "Nevada",
    value: "NV",
  },
  {
    name: "New Hampshire",
    value: "NH",
  },
  {
    name: "New Jersey",
    value: "NJ",
  },
  {
    name: "New Mexico",
    value: "NM",
  },
  {
    name: "New York",
    value: "NY",
  },
  {
    name: "North Carolina",
    value: "NC",
  },
  {
    name: "North Dakota",
    value: "ND",
  },
  {
    name: "Northern Mariana Islands",
    value: "MP",
  },
  {
    name: "Ohio",
    value: "OH",
  },
  {
    name: "Oklahoma",
    value: "OK",
  },
  {
    name: "Oregon",
    value: "OR",
  },
  {
    name: "Palau",
    value: "PW",
  },
  {
    name: "Pennsylvania",
    value: "PA",
  },
  {
    name: "Puerto Rico",
    value: "PR",
  },
  {
    name: "Rhode Island",
    value: "RI",
  },
  {
    name: "South Carolina",
    value: "SC",
  },
  {
    name: "South Dakota",
    value: "SD",
  },
  {
    name: "Tennessee",
    value: "TN",
  },
  {
    name: "Texas",
    value: "TX",
  },
  {
    name: "Utah",
    value: "UT",
  },
  {
    name: "Vermont",
    value: "VT",
  },
  {
    name: "Virgin Islands",
    value: "VI",
  },
  {
    name: "Virginia",
    value: "VA",
  },
  {
    name: "Washington",
    value: "WA",
  },
  {
    name: "West Virginia",
    value: "WV",
  },
  {
    name: "Wisconsin",
    value: "WI",
  },
  {
    name: "Wyoming",
    value: "WY",
  },
];

/**
 * Mock EmployeesList to load when no there is no data.
 * Only for dev/test purposes
 */
export const EMPLOYEES: Employee[] = [
  {
    firstName: "Ronald",
    lastName: "Christian",
    birthDate: "1992/12/06",
    startDate: "2020/01/05",
    street: "5 Rue Anatole France",
    city: "Paris",
    state: "AZ",
    zipcode: "75010",
    department: "Sales",
  },
  {
    firstName: "Marc",
    lastName: "Richefort",
    birthDate: "1998/10/11",
    startDate: "2021/05/29",
    street: "18 Rue Bir Hakeim",
    city: "Paris",
    state: "AK",
    zipcode: "75011",
    department: "Marketing",
  },
  {
    firstName: "Henri",
    lastName: "Baguire",
    birthDate: "1990/05/06",
    startDate: "2015/06/10",
    street: "25 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Legal",
  },
  {
    firstName: "Scott",
    lastName: "McSauce",
    birthDate: "1999/04/30",
    startDate: "2022/07/12",
    street: "04 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Engineering",
  },
  {
    firstName: "Bruno",
    lastName: "Penandes",
    birthDate: "1985/05/06",
    startDate: "2010/01/01",
    street: "48 Place du plongeur",
    city: "Paris",
    state: "MA",
    zipcode: "75020",
    department: "Human Resources",
  },
  {
    firstName: "Ronald",
    lastName: "Christian",
    birthDate: "1992/12/06",
    startDate: "2020/01/05",
    street: "5 Rue Anatole France",
    city: "Paris",
    state: "AZ",
    zipcode: "75010",
    department: "Sales",
  },
  {
    firstName: "Marc",
    lastName: "Richefort",
    birthDate: "1998/10/11",
    startDate: "2021/05/29",
    street: "18 Rue Bir Hakeim",
    city: "Paris",
    state: "AK",
    zipcode: "75011",
    department: "Marketing",
  },
  {
    firstName: "Henri",
    lastName: "Baguire",
    birthDate: "1990/05/06",
    startDate: "2015/06/10",
    street: "25 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Legal",
  },
  {
    firstName: "Scott",
    lastName: "McSauce",
    birthDate: "1999/04/30",
    startDate: "2022/07/12",
    street: "04 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Engineering",
  },
  {
    firstName: "Bruno",
    lastName: "Penandes",
    birthDate: "1985/05/06",
    startDate: "2010/01/01",
    street: "48 Place du plongeur",
    city: "Paris",
    state: "MA",
    zipcode: "75020",
    department: "Human Resources",
  },
  {
    firstName: "Ronald",
    lastName: "Christian",
    birthDate: "1992/12/06",
    startDate: "2020/01/05",
    street: "5 Rue Anatole France",
    city: "Paris",
    state: "AZ",
    zipcode: "75010",
    department: "Sales",
  },
  {
    firstName: "Marc",
    lastName: "Richefort",
    birthDate: "1998/10/11",
    startDate: "2021/05/29",
    street: "18 Rue Bir Hakeim",
    city: "Paris",
    state: "AK",
    zipcode: "75011",
    department: "Marketing",
  },
  {
    firstName: "Henri",
    lastName: "Baguire",
    birthDate: "1990/05/06",
    startDate: "2015/06/10",
    street: "25 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Legal",
  },
  {
    firstName: "Scott",
    lastName: "McSauce",
    birthDate: "1999/04/30",
    startDate: "2022/07/12",
    street: "04 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Engineering",
  },
  {
    firstName: "Bruno",
    lastName: "Penandes",
    birthDate: "1985/05/06",
    startDate: "2010/01/01",
    street: "48 Place du plongeur",
    city: "Paris",
    state: "MA",
    zipcode: "75020",
    department: "Human Resources",
  },
  {
    firstName: "Ronald",
    lastName: "Christian",
    birthDate: "1992/12/06",
    startDate: "2020/01/05",
    street: "5 Rue Anatole France",
    city: "Paris",
    state: "AZ",
    zipcode: "75010",
    department: "Sales",
  },
  {
    firstName: "Marc",
    lastName: "Richefort",
    birthDate: "1998/10/11",
    startDate: "2021/05/29",
    street: "18 Rue Bir Hakeim",
    city: "Paris",
    state: "AK",
    zipcode: "75011",
    department: "Marketing",
  },
  {
    firstName: "Henri",
    lastName: "Baguire",
    birthDate: "1990/05/06",
    startDate: "2015/06/10",
    street: "25 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Legal",
  },
  {
    firstName: "Scott",
    lastName: "McSauce",
    birthDate: "1999/04/30",
    startDate: "2022/07/12",
    street: "04 Rue du Capitole",
    city: "Paris",
    state: "WY",
    zipcode: "75001",
    department: "Engineering",
  },
  {
    firstName: "Bruno",
    lastName: "Penandes",
    birthDate: "1985/05/06",
    startDate: "2010/01/01",
    street: "48 Place du plongeur",
    city: "Paris",
    state: "MA",
    zipcode: "75020",
    department: "Human Resources",
  },
];
