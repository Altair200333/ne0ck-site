// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const assertUnreachable = (x: never): never => {
  throw new Error("Didn't expect to get here");
};
