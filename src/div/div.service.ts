import { Injectable } from '@nestjs/common';

@Injectable()
export class DivService {
  divide(a: number, b: number) {
    if (b === 0) throw new Error('Division by zero');
    const result = a / b;
    return { a, b, result };
  }
}
