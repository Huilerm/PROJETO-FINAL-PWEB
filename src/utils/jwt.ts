import jwt from "jsonwebtoken";

export function generateToken(
  userId: string,
  roleId: string | null,
  permissions: string[]
) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET não definida");
  }

  return jwt.sign({ userId, roleId, permissions }, secret, { expiresIn: "1d" });
}
