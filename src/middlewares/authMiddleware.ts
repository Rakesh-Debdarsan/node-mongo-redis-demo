import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  // For now, fake auth
  if (token === 'Bearer demo-token') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
