export type LoginData = {
  email: string;
  password: string;
};

export type strVoid = string | void;

export default interface Login {
  login(data: LoginData): Promise<strVoid>;
}
