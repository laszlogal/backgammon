import {Checker} from '../src/classes/Checker'
import {expect} from 'chai'
describe("Checker", () => {
    it("White opposite should be Black", () => {
        expect(Checker.opposite(Checker.WHITE)).equal(Checker.BLACK);
    })

    it("Black opposite should be white", () => {
        expect(Checker.opposite(Checker.BLACK)).equal(Checker.WHITE);
    })

    it("None shoud not have an opposite", () => {
        expect(Checker.opposite(Checker.NONE)).equal(Checker.NONE);
    }) 
} ) 