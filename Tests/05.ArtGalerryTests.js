import { assert, expect } from "chai";
import {artGallery} from "../Functions/05_ArtGalerry.js";

describe("Art Galerry tests", function(){
    describe("Add Artwork tests", function(){
        /* it("Should trow an error if title input is invalid", function(){
            try{
                artGallery.addArtwork("", "40 x 50", "Picasso");
            }
            catch(err){
                var expected = "Invalid Information!";
                assert.equal(err.message, expected);
            }
        })
        it("should trow an error if artist input is invalid", function(){
            try{
                artGallery.addArtwork("new title", "40 x 50", [])
            }
            catch(err){
                var expected = "Invalid Information!";
                assert.equal(err.message, expected);
            }
        })
        it("Should trow an error if dimensions are invalid input", function(){
            try{
                artGallery.addArtwork("new title", [10, 20], "Picasso");
            }
            catch(err){
                var expected = "Invalid Dimensions!";
                assert.equal(err.message, expected);
            }
        })*/
        it("Should trow an error if artist, dimensions or title is invalid", function(){
            expect(() => artGallery.addArtwork([], "40 x 50", "Picasso")).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork("new title", "40 x 50", {})).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork("new title", "", "Picasso")).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork({}, "40 x 50", "Picasso")).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork("new title", "40 x 50", [])).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork("new title", {}, "Picasso")).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork("new title", "40 x 50", "Bat Vas")).to.throw('This artist is not allowed in the gallery!');
        })
        it("Should return correct data after valid input", function(){
            expect(artGallery.addArtwork("new title", "40 x 50", "Picasso")).to.equal("Artwork added successfully: 'new title' by Picasso with dimensions 40 x 50.");
        })
    })
    describe("Calculate Costs tests", function(){
            it("Should trow an error if any of the input data is invalid", function(){
                expect(() => artGallery.calculateCosts("string", 10, true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts([], 10, true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts([10, 20], 10, true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts({}, 10, true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, "string", true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, [], true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, {}, true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, [10, 20], true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, 10, [])).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, 10, {})).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, 10, "string")).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, 10, 20)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(-10, 10, true)).to.throw('Invalid Information!');
                expect(() => artGallery.calculateCosts(10, -10, true)).to.throw('Invalid Information!');
                
                
            })
            it("Should return correct costs with valid sponsor", function(){
                expect(artGallery.calculateCosts(80, 20, true)).to.be.equal("Exhibition and insurance costs are 90$, reduced by 10% with the help of a donation from your sponsor.")
                expect(artGallery.calculateCosts(0, 0, true)).to.be.equal("Exhibition and insurance costs are 0$, reduced by 10% with the help of a donation from your sponsor.")
            })
            it("Should return correct price if no sponsor is specified", function(){
                expect(artGallery.calculateCosts(70, 30, false)).to.be.equal("Exhibition and insurance costs are 100$.");
                expect(artGallery.calculateCosts(0, 0, false)).to.be.equal("Exhibition and insurance costs are 0$.")
            })
    })
    describe("OrganizeExhibits tests", function(){
        it("Should throw an error if input is invalid or negative numbers", function(){
            expect(() => artGallery.organizeExhibits("string", 5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits([], 5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits({}, 5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(5, "string")).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(5, [])).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(5, {})).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(null, 5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(5, null)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(-5, 5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(5, -5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(-5, -5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(0, 5)).to.be.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(5, 0)).to.be.throw("Invalid Information!");
        })
        it("Should return correct value with valid input", function(){
            expect(artGallery.organizeExhibits(20, 5)).to.be.equal("There are only 4 artworks in each display space, you can add more artworks.");
            expect(artGallery.organizeExhibits(20, 2)).to.be.equal("You have 2 display spaces with 10 artworks in each space.");
            expect(artGallery.organizeExhibits(2, 20)).to.be.equal("There are only 0 artworks in each display space, you can add more artworks.");
        })
    })
})