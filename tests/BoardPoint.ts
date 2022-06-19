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
    
    it("Increase amount on a point", () => {
        const point = new BoardPoint(10, Checker.WHITE);
        point.increase();
        expect(point).deep.equal(new BoardPoint(11, Checker.WHITE));
    })

    
    it("Decrease amount on a point", () => {
        const point = new BoardPoint(10, Checker.WHITE);
        point.decrease();
        expect(point).deep.equal(new BoardPoint(9, Checker.WHITE));
    })

    
    it("Empty point decreasing it",  () => {
        const point = new BoardPoint(2, Checker.WHITE);
        point.decrease();  
        point.decrease();
        expect(point).deep.equal(new BoardPoint());
    })
}
)