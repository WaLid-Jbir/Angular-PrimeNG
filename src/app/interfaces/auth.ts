export interface RegisterPostData {
  fullName: string;
  email: string;
  password: string;
}

export interface User extends RegisterPostData {
  id: number;
  fullName: string;
  email: string;
  password: string;
}
