const checkout = require('../walmart');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("Checkout", () => {

    it("Ok, can create an instance of a Checkout Class", () => {
        let cart = new checkout();
        assert.isDefined(cart.items, "[]");
    });

    it("Ok, can add an item", () => {
        let cart = new checkout();
        assert.equal(cart.addItem("a").name, "a");
    });

    it("Ok, can add a price to items", () => {
        let cart = new checkout();
        var shoppingList = cart.items[0]
        console.log(cart.items)
        assert.deepEqual(cart.addItemPrice("b", 10), [{name: "b", price: 10}]);
    })

    it("Ok, can calculate current total", () => {
        let cart = new checkout();
        assert.equal(cart.total());
    })

    it("Ok, can get correct total with multiple items", () => {
        let cart = new checkout();
        assert.equal(cart.multipleTotal());
    })

    it("Ok, can add discount", () => {
        let cart = new checkout();
        assert.equal(cart.addDiscount(5, "b", 10), 5);
    })

    it("Ok, can apply discount rules to total", () => {
        let cart = new checkout();
    })

    it("Ok, exception error is thrown for items without a price", () => {
        let cart = new checkout();
    })

});