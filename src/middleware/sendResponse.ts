import { Request, Response, NextFunction } from "express";

export const sendResponse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logger!.info(`Sending response with status ${res.locals.status}`);
  res.status(res.locals.status).json(res.locals.body);
};
