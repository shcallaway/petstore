import { NextFunction, Request, Response } from "express";

export const addLogger = (req: Request, res: Response, next: NextFunction) => {
  req.logger = {
    info: (message: string, data: Record<string, unknown> = {}) => {
      console.log(
        JSON.stringify({
          timestamp: new Date().toISOString(),
          message,
          data,
        })
      );
    },
  };

  next();
};
