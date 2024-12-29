import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { ResponseValidationError } from "../lib/types";

// const getZodErrorMessages = (result: z.SafeParseError<any>): string[] => {
//   return result.error.errors.map((error) => error.message);
// };

// const formatZodErrorMessages = (messages: string[]): string => {
//   return `Zod parse errors:\n${messages
//     .map((message) => `- ${message}`)
//     .join("\n")}`;
// };

export const useResponseBodyValidator = (zodSchema: z.ZodType<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("Validating response body");

    const { body } = res.locals;

    if (!body) {
      console.log("No response body found");
    }

    const result = zodSchema.safeParse(body);

    if (!result.success) {
      console.log("Response body is invalid");
      throw new ResponseValidationError();
    }

    console.log("Response body is valid");

    next();
  };
};
