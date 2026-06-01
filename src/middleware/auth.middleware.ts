import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware (
    req: Request,
    res: Response,
    next: NextFunction
) {
}