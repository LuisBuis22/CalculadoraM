"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalculatorController_1 = require("../controllers/CalculatorController");
const CalculatorUseCase_1 = require("../domain/usecases/CalculatorUseCase");
const calculatorUseCase = new CalculatorUseCase_1.CalculatorUseCase();
const calculatorController = new CalculatorController_1.CalculatorController(calculatorUseCase);
const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const type = process.argv[4];
try {
    const result = calculatorController.handle(a, b, type);
    console.log(`Result: ${result}`);
}
catch (error) {
    console.error(`Error: ${error.message}`);
}
