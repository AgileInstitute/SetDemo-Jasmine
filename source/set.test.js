describe("set", function() {
    var set;
    beforeEach(function() {
        set = new Set();
    })

    it ("throws on null", function() {
       expect(function() { set.add(null); }).toThrow();
    });

    describe("add", function() {
        it ("can add multiple items", function() {
            set.add("foo");
            set.add("bar");
            expect(set.size()).toBe(2);
            expect(set.contains("foo")).toBeTruthy();
            expect(set.contains("bar")).toBeTruthy();
        });
        it ("only adds same item once", function() {
            set.add("foo");
            set.add("foo");
            expect(set.size()).toBe(1);
        });
    });

    describe("contains", function() {
        it ("is false when item not there", function() {
            expect(set.contains("this string is not in any set")).toBeFalsy() ;
        });
        it ("is true when string is part of Set", function() {
            var item = "string to add to Set";
            set.add(item);
            expect(set.contains(item)).toBeTruthy();
        });
        it ("is true when int is part of Set", function() {
            set.add(8);
            expect(set.contains(8)).toBeTruthy();
        });
        it ("is false when conversion would otherwise make item seem like part of Set", function() {
            set.add("8");
            expect(set.contains(8)).toBeFalsy();
        });
        xit ("is true when identical multi-dimensional Array is part of Set", function() {
            // see http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
            set.add([[1,2][3,4]]);
            expect(set.contains([[1,2][3,4]])).toBeTruthy();
        });
    });

    describe("size", function() {
        it ("starts out empty", function() {
            expect(set.size()).toBe(0);
        });

        it ("increases when an item is added", function() {
            set.add("item");
            expect(set.size()).toBe(1);
        });
    });
});
