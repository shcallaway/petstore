import { NextFunction, Request, Response } from "express";

export const defaultErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logger!.info("An unexpected error occurred");
  req.logger!.info("Responding with status 500");
  res.sendStatus(500);
};
