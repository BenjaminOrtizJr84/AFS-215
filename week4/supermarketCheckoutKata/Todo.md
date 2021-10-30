 - Can create an instance of the Checkout class. 
created failing test by creating a function calling a checkout class that does
not yet exist. I then create the checkout class with just pass and then import the class into my supermarketcheckout.py file. Test is now passing. no refactoring needed.

- Can add an item price
created fail unit test by creating a function calling an attribute addItemPrice from my checkout class. However this attribute does not yet exist. I then create the addItemPrice attribute to my checkout class to get a passing test. The checkout instantiation is duplicated in test, the first function check the instance of the class is not needed because we are not calling it in our CanAddItemPrice function. So the first test is removed for refactoring.

- Can add an item 
created a failed unit test by creating a function and calling an attribute addItem from my checkout class. Howver this attribute does not yet exist. I then create the addItem attribute in my checkout class to get a passing test. For reafactoring we have duplicated the checkout class instantiation again. We will now create test ficture as all the unit test will need to work with the checkout class. We then update both tests to use the test fixture. The checkout function removed from both test and the fixture is being passed as a parameter and then call on each attribute using dot notation.

- Can calculate the current total
created a failed unit test by creating a function and calling both the addItemPrice and addItem checkout class attributes and then asserting that the calculateTotal attribute is equal to 1> However this attribute has not been created and added to my checkout class. To create my passing test I create and add the attribute calculateTotal to my checkout class and have return a value of 1 to pass. For refactoring the CanAddItemPrice and CanAddItem test are no longer needed be because they are now being called in the CanCalculateTotal test. No need for duplication. Removed. 

- Can add multiple items and get correct total
created a failed unit test by creating a function and calling the addItemPrice and addItems attrributes with a & b and 1 & 2 to be able to add multiple items then asserting the calcualted total will be equal to 3. Currently it is returning 1 and will fail. For a passing test we will add a python dictionary to the checkout class to keep track of the prices per item. Then create a total number variable that is incremented everytime and item is added. Then return this total when the calculatetotal method is called. No refactoring needed.

- Can add discount rules
created a failing unit test by creating a function and calling the addDiscount attribute with three parameters (item type, number of items required for discount, and discounted price). This attributed has not yet been created in the checkout class therefore fails. To create my passing test an empty addDiscount method was created in the checkout class with all three parameters (item, itemCount, price). For refactoring the addItemPrice is duplicated throughout the tests, added this to the test fixture so there always included and not having to be called in each of the tests. Removed addItemPrice methods fromall tests.

- Can apply discount rules to the total
created a failing unit test by creating a function and calling the addDiscount method in the checkout class. However there is not setup for this yet and a data structure will need to be created. Then we needed a running total that is updated whenever and item is added to the cart. Right now there is a calculateTotal method keepign a running total whenever an item is added. We will have to move the calculateTotal down to the calculate method because we need to know the total amount before applying a discount. The addDiscount is happening prior. There is a lot of refactoring involved at this point. Now discounts are being store in a data structure to calculate the total. WE then need to modify code to get the total after all items have been added. Need to keep track of how many of each type of item is added . We will use an dictionary of integers keyed by the item string, the integer will be count of each item added, then update the calculateTotal method to iterate over all counts in the items dictionary and calculate the total by multiplying the total number of items added by each items price and returning that value. Crazy refactoring.

- Exception is Thrown for Item Added without a Price
created failing unit test by creating a fcuntion and using pytests raise exception. The call the addItem. We then add an if statement to the addItem method to raise and exception and display a string of invalid item if the item is not in the prices object in the checkout class. No refactoring needed. 
