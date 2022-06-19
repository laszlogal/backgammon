import { BoardPoint } from '../src/classes/BoardPoint';
import { expect } from 'chai';
import { Checker } from '../src/classes/Checker';

describe("BoardPoint", () => {
    it("Creating an empty point", () => {
        const point = new BoardPoint();
        expect(point.isEmpty()).equal(true)

    }) 

    it("Creating point Black with 5 amount", () => {
        const point = new BoardPoint(5, Checker.BLACK);
        expect(point.isOccupiedBy(Checker.BLACK)).equal(true)
        expect(point.amount).equal(5);
        })
}
)