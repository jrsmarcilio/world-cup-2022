
export interface User {
  name: string
  email: string
  password: string
  passwordConfirm?: string
}

export interface Login {
  email: string
  password: string
}

export interface UserRequest {
  status: string
  message: string
  data: Data
}

export interface Data {
  token: string
}

export interface ErrorRequest {
  status: string
  message: string
}
