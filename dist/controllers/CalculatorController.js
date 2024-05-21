"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorController = void 0;
const Operation_1 = require("../domain/entities/Operation");
class CalculatorController {
    constructor(calculatorUseCase) {
        this.calculatorUseCase = calculatorUseCase;
    }
    handle(a, b, type) {
        const operation = new Operation_1.Operation(a, b, type);
        return this.calculatorUseCase.execute(operation);
    }
}
exports.CalculatorController = CalculatorController;
