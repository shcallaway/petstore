import { NextFunction, Request, Response } from "express";

import { RequestValidationError } from "../lib/types";

export const requestValidationErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    console.log("A request validation error occurred");
    console.log("Responding with status 400");
    res.sendStatus(400);
    return;
  }

  next(err);
};
