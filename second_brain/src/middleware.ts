import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  const decoded = jwt.verify(header as string, JWT_PASSWORD);
  if (decoded) {
    //@ts-ignore
    req.userId = decoded.id; //how to overwrite the types of the express request object
    next();
  } else {
    res.status(403).json({
      message: "You're not logged in",
    });
  }
};
