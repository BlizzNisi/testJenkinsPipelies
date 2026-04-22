import { expect } from "chai";
import { foodDelivery } from "../Functions/06_FoodDelivery.js";

describe("FoodDelivery functions tests", function(){
    describe("GetCategory tests", function(){
        it("Should throw an error when passin invalid category", function(){
            expect(() => foodDelivery.getCategory(6)).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory(["Vegan", "Vegetarian"])).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory({})).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory("Bai Ganio")).to.throw("Invalid Category!");
        })
        it("Should return corect result with valid input", function(){
            expect(foodDelivery.getCategory("Vegan")).to.be.equal("Dishes that contain no animal products.");
            expect(foodDelivery.getCategory("Vegetarian")).to.be.equal("Dishes that contain no meat or fish.");
            expect(foodDelivery.getCategory("Gluten-Free")).to.be.equal("Dishes that contain no gluten.");
            expect(foodDelivery.getCategory("All")).to.be.equal("All available dishes.");
        })
    })
    describe("addMenuItem function tests", function(){
        it("Should throw an error when passing invalid data", function(){
            expect(() => foodDelivery.addMenuItem({}, 10)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{name: "banana", price: 10}, {name: "peanut", price: 25}], "")).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{name: "banana", price: 10}, {name: "peanut", price: 25}], 4)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(null, null)).to.throw("Invalid Information!");
        })
        it("Should return correct menuitems", function(){
            expect(foodDelivery.addMenuItem([{name: "banana", price: 10}, {name: "peanut", price: 25}], 10)).to.be.equal("There are 1 available menu items matching your criteria!");
            expect(foodDelivery.addMenuItem([{name: "banana", price: 10}, {name: "peanut", price: 25}], 50)).to.be.equal("There are 2 available menu items matching your criteria!");
            expect(foodDelivery.addMenuItem([{name: "banana", price: 10}, {name: "peanut", price: 25}, {name: "oranges", price: 55}], 30)).to.be.equal("There are 2 available menu items matching your criteria!");
        })
    })
    describe("calculateOrderCost tests", function(){
        it("Should throw an error with invalid inputs", function(){
            expect(() => foodDelivery.calculateOrderCost({}, ["sauce"], true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost("string", ["sauce"], true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(5, ["sauce"], true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(null, ["sauce"], true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standart"], {}, true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standart"], "string", true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standart"], 5, true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standart"], null, true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standart"], ["sauce"], [])).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(["standart"], ["sauce"], {})).to.throw("Invalid Information!");
        })
        it("Should calculate proper order cost with valid data", function(){
            expect(foodDelivery.calculateOrderCost(["standart"], ["sauce"], true)).to.be.equal("You spend $0.85 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(["express"], ["sauce"], true)).to.be.equal("You spend $5.10 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(["express"], ["beverage"], true)).to.be.equal("You spend $7.22 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(["standart"], ["beverage"], true)).to.be.equal("You spend $2.98 for shipping and addons with a 15% discount!");
            expect(foodDelivery.calculateOrderCost(["express"], ["sauce"], false)).to.be.equal("You spend $6.00 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(["express"], ["beverage"], false)).to.be.equal("You spend $8.50 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(["standart"], ["sauce"], false)).to.be.equal("You spend $1.00 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(["standart"], ["beverage"], false)).to.be.equal("You spend $3.50 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(["standart", "express"], ["beverage", "sauce"], false)).to.be.equal("You spend $9.50 for shipping and addons!");
            expect(foodDelivery.calculateOrderCost(["standart", "express"], ["beverage", "sauce"], true)).to.be.equal("You spend $8.07 for shipping and addons with a 15% discount!");
        })
    })
})