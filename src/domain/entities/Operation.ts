export type OperationType = "add" | "subtract" | "multiply" | "divide";

export class Operation {
  constructor(
    public readonly a: number,
    public readonly b: number,
    public readonly type: OperationType
  ) {}
}
