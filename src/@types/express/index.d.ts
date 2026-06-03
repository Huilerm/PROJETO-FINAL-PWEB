declare namespace Express {
  export interface Request {
    user: {
      userId: number;
      roleId: number | null;
    };
  }
}
