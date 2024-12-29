import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../lib/types";

export const useRequestBodyValidator = (zodSchema: z.ZodType<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    req.logger!.info("Validating request body");

    const body = req.body;

    req.logger!.info("Body:", body);

    if (!body) {
      req.logger!.info("No body found");
      throw new RequestValidationError();
    }

    const result = zodSchema.safeParse(body);

    if (!result.success) {
      req.logger!.info("Request body is invalid");
      throw new RequestValidationError();
    }

    req.logger!.info("Request body is valid");

    next();
  };
};
