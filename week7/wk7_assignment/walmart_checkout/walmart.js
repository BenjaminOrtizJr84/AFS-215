class Checkout {
    constructor() {
        this.items = [];
        this.discounts = [];
    }

    addItem = (item) => {
        let check = true;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == item) {
                check = false;
                errMsg = "Item already exists";
                throw Error(errMsg);
            }
        }
        if (check) {
            this.items.push({ name: item });
            return this.items[this.items.length - 1];
        }
    };

    addItemPrice = (name, price) => {
        this.addItem(name);
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == name) {
                this.items[i] = { name: name, price: price };
                return this.items;
            } else {
                errMsg = "Item does not have a price";
                throw Error(errMsg);
            }
        }
    }

    total = () => {
        let total = 0;
        this.items.map((price) => {
            total += price
            return total
        });
    };

    multipleTotal = () => {
        let total = 0;
        this.items.map((price) => {
            price - discount
            return total
        })
    }

    addDiscount = (discount, name, price) => {
        this.addItem(name);
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == name) {
                this.items[i] = { name: name, price: price - discount };
                console.log(this.items)
            } else {
                errMsg = "Item does not have a price";
                throw Error(errMsg);
            }
        }
        return this.items[0].price
    }

    
}

module.exports = Checkout;