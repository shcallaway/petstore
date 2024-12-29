import { NextFunction, Request, Response } from "express";

import { RequestValidationError } from "../lib/types";

export const requestValidationErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    req.logger!.info("A request validation error occurred");
    req.logger!.info("Responding with status 400");
    res.sendStatus(400);
    return;
  }

  next(err);
};
