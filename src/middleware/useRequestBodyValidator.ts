import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../lib/types";

export const useRequestBodyValidator = (zodSchema: z.ZodType<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("Validating request body");

    const body = req.body;

    console.log("Body:", body);

    if (!body) {
      console.log("No body found");
      throw new RequestValidationError();
    }

    const result = zodSchema.safeParse(body);

    if (!result.success) {
      console.log("Request body is invalid");
      throw new RequestValidationError();
    }

    console.log("Request body is valid");

    next();
  };
};
