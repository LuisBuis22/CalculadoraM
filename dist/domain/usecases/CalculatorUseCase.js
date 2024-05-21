"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorUseCase = void 0;
class CalculatorUseCase {
    execute(operation) {
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
exports.CalculatorUseCase = CalculatorUseCase;
