declare namespace Express {
  export interface Request {
    // A logger instance that can be used to log messages
    // with request context automatically included.
    logger?: {
      info: (message: string, data?: Record<string, unknown>) => void;
    };
  }
}
