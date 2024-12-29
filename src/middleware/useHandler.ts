import { Request, Response, NextFunction } from "express";

import { Handler } from "../generated/openApi";

export const useHandler = <
  ReqBody,
  ResBody,
  ReqParams extends Record<string, any>,
  ReqQuery extends Record<string, any>
>(
  handler: Handler<ReqBody, ReqParams, ReqQuery, ResBody>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(`Using handler ${handler.name}`);

      const { status, body } = await handler(req as any);

      console.log(`Handler ${handler.name} returned status ${status}`);

      res.locals.status = status;
      res.locals.body = body;

      next();
    } catch (error) {
      next(error);
    }
  };
};
