export type Request<I, O> = I extends void
  ? () => Promise<O>
  : (input: I) => Promise<O>
