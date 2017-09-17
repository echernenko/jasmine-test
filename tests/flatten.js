describe("flatten array", function() {
    const FlattenInterface = require('../flatten');
    const arr = [1, 2, 3, "4", 5, function(){return 6;}, [7, [8, 9], 10]];
    const result = FlattenInterface(arr);
    console.log('Testing with array: ', arr);
    console.log('Getting result: ', result);

    beforeEach(function() {
        // this block runs before every it();
    });

    it("should return array of single nesting", function() {
        console.log('Checking if final array does not have nesting...');
        for (let i=0; i < result.length; i++){
            expect(Array.isArray(result[i])).toEqual(false);
        }
    });

    it("should convert function to function calls", function() {
        console.log("\nChecking if there are no function calls left...");
        for (let i=0; i < result.length; i++){
            expect(typeof result[i] === 'function').toEqual(false);
        }

    });

    it("should return integer only results", function() {
        console.log("\nChecking if every array element is integer...");
        for (let i=0; i < result.length; i++){
            expect(Number.isInteger(result[i])).toEqual(true);
        }

    });


});

