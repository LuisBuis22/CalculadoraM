import { CalculatorController } from '../controllers/CalculatorController';
import { CalculatorUseCase } from '../domain/usecases/CalculatorUseCase';

const calculatorUseCase = new CalculatorUseCase();
const calculatorController = new CalculatorController(calculatorUseCase);

const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const type = process.argv[4] as 'add' | 'subtract' | 'multiply' | 'divide';

try {
  const result = calculatorController.handle(a, b, type);
  console.log(`Result: ${result}`);
} catch (error: any) {
  console.error(`Error: ${error.message}`);
}