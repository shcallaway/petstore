import { NextFunction, Request, Response } from "express";

export const defaultErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("An unexpected error occurred");
  console.log("Responding with status 500");
  res.sendStatus(500);
};
