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
      req.logger!.info(`Using handler ${handler.name}`);

      const { status, body } = await handler(req as any);

      req.logger!.info(`Handler ${handler.name} returned status ${status}`);

      res.locals.status = status;
      res.locals.body = body;

      next();
    } catch (error) {
      next(error);
    }
  };
};
