export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  password?: string;
  mobile_number: number;
};

export type UserInput = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword?: string;
  mobile_number: number;
};