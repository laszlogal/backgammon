import { Checker } from './Checker'
export class BoardPoint {
    constructor(
        private amount: number = 0, 
        private checker: Checker = Checker.NONE) {}
    isEmpty(): boolean {
        return this.amount === 0 && this.checker === Checker.NONE;
    }

}