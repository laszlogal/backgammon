import { BoardPoint } from '../src/classes/BoardPoint';
import { expect } from 'chai';

describe("BoardPoint", () => {
    it("Creating an empty point", () => {
        let point = new BoardPoint();
        expect(point.isEmpty()).equal(true).a
        
    }) 
}
)