import { Operation, OperationType } from '../entities/Operation';

export class CalculatorUseCase {
  execute(operation: Operation): number {
    const { a, b, type } = operation;

    switch (type) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
      default:
        throw new Error("Invalid operation");
    }
  }
}
