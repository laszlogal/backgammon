import { Checker } from './Checker'
export class BoardPoint {

    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }
    constructor(
        private _amount: number = 0, 
        private checker: Checker = Checker.NONE) {}
    isEmpty(): boolean {
        return this.amount === 0 && this.checker === Checker.NONE;
    }

    isOccupiedBy(checker: Checker): boolean {
        return this.checker === checker;
    }
    
    increase() {
        this._amount++;
    }

    decrease() {
        this._amount--;
        if (this._amount <= 0) {
            this._amount = 0;
            this.checker = Checker.NONE;
        }
    }
}