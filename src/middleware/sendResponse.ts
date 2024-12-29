import { Request, Response, NextFunction } from "express";

export const sendResponse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Sending response with status ${res.locals.status}`);
  res.status(res.locals.status).json(res.locals.body);
};
