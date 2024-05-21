import { CalculatorUseCase } from "../domain/usecases/CalculatorUseCase";
import { Operation, OperationType } from "../domain/entities/Operation";

export class CalculatorController {
  constructor(private calculatorUseCase: CalculatorUseCase) {}

  handle(a: number, b: number, type: OperationType): number {
    const operation = new Operation(a, b, type);
    return this.calculatorUseCase.execute(operation);
  }
}
