import { expect } from "chai";
import {mathEnforcer} from "../Functions/03_MathEnforcer.js";


describe("Math Enforcer tests", function(){
    describe("Add 5 function tests", function(){
        it("Should return Undefined if input is not a number", function(){
            expect(mathEnforcer.addFive("12345")).to.be.undefined;
            expect(mathEnforcer.addFive("")).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
        })
        it("Should return correct result when a valid number is passed to the function", function(){
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(3.3)).to.be.closeTo(8.3, 0.01);
        })
    })
    describe("Substract Ten funciont tests", function(){
        it("Shouyld retunr Undefinied if input is not a number", function(){
            expect(mathEnforcer.subtractTen("20")).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        })
        it("Should return correct value when passing a valid number", function(){
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
            expect(mathEnforcer.subtractTen(-6.6)).to.be.closeTo(-16.6, 0.01);
        })
    })
    describe("Sum function tests", function(){
        it("Should return Undefinied if one of the passed variables is not a number", function(){
            expect(mathEnforcer.sum("", 2)).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum(2, "")).to.be.undefined;
            expect(mathEnforcer.sum(2, null)).to.be.undefined;
            expect(mathEnforcer.sum(2, [])).to.be.undefined;
            expect(mathEnforcer.sum(2, {})).to.be.undefined;
        })
        it("Should return correct result with valid unput", function(){
            expect(mathEnforcer.sum(5, 7)).to.be.equal(12);
            expect(mathEnforcer.sum(5.5, 3.2)).to.be.closeTo(8.7, 0.01);
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
            expect(mathEnforcer.sum(-3.2, 6.2)).to.be.closeTo(3.0, 0.01);
        })
    })
})