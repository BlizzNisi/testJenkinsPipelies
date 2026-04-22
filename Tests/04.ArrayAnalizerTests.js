import { expect } from "chai";
import {analyzeArray} from "../Functions/04_ArrayAnalizer.js";

describe("Array Analizer tests", function(){
    it("Should return Undefinied if array is empty", function(){
        expect(analyzeArray("")).to.be.undefined;
        expect(analyzeArray([])).to.be.undefined;
        expect(analyzeArray({})).to.be.undefined;
        expect(analyzeArray(null)).to.be.undefined;
    })
    it("Should return Undefinied if array is a string", function(){
        expect(analyzeArray("12345")).to.be.undefined;
    })
    it("Should return proper min and max values and array lenght with valid input", function(){
        expect(analyzeArray([10, 11, 12, 13])).to.be.deep.equal({min: 10, max: 13, length: 4});
        expect(analyzeArray([110, -11, 12, -130, 0, 73])).to.be.deep.equal({min: -130, max: 110, length: 6});
    })
    it("Should return single element when the array is only of 1 element", function(){
        expect(analyzeArray([5])).to.be.deep.equal({min: 5, max: 5, length: 1});
    })
    it("Should return correct value if the array has equal elements", function(){
        expect(analyzeArray([3, 3, 3, 3, 3, 3])).to.be.deep.equal({min: 3, max: 3, length: 6});
    })
})