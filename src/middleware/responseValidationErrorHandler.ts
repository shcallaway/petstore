import { NextFunction, Request, Response } from "express";

import { ResponseValidationError } from "../lib/types";

export const responseValidationErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ResponseValidationError) {
    req.logger!.info("A response validation error occurred");
    req.logger!.info("Responding with status 500");
    res.sendStatus(500);
    return;
  }

  next(err);
};
