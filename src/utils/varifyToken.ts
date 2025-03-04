import { jwtDecode, JwtPayload } from "jwt-decode";

interface JwtUser extends JwtPayload {
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export const verifyToken = (token: string): JwtUser => {
  return jwtDecode(token);
};
