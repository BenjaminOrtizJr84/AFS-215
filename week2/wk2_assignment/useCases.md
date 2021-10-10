- Can I Call FizzBuzz (X)
- Get "1" when I pass in 1 (X)
- Get "2" when I pass in 2 (X)
- Get "Fizz" when I pass in 3 (X)
- Get "Buzz" when I pass in 5 (X)
- Get "Fizz" when I pass in 6 (a multiple of 3) (X)
- Get "Buzz" when I pass in 10 (a multiple of 5) (X)
- Get "FizzBuzz" when I pass in 15 (a mutliple of 3 and 5) (X)

--------------

- Step 1: Can I Call FizzBuzz

def test_canCallFizzBuzz():     <!-- Failing Test -->
    fizzBuzz(1)

--------

def fizzBuzz ( value ):     
    return
                                <!-- Passing Test -->
def test_canCallFizzBuzz():  
    fizzBuzz(1)

---------

<!-- No Refactoring Needed -->

- Step 2: Get "1" when I pass in 1

def fizzBuzz ( value ):     
    return
                                <!-- Failing Test -->
def test_canCallFizzBuzz():  
    fizzBuzz(1)

def test_returns1With1PassedIn():
    returnValue = fizzBuzz(1)
    assert returnValue == "1"

---------

def fizzBuzz ( value ):     
    return "1"
                                <!-- Passing Test -->
def test_canCallFizzBuzz():  
    fizzBuzz(1)

----------

def fizzBuzz ( value ):     
    return "1"

def test_returns1With1PassedIn():   <!-- Refactoring -->
    returnValue = fizzBuzz(1)
    assert returnValue == "1"

- Step 3: - Get "2" when I pass in 2

def fizzBuzz ( value ):     
    return "1"

def test_returns1With1PassedIn():   <!-- Failing Test -->
    returnValue = fizzBuzz(1)
    assert returnValue == "1"

def test_returns2With2PassedIn():
    returnValue = fizzBuzz(2)
    assert returnValue == "2"

------------

def fizzBuzz ( value ):     
    return str(value)

def test_returns1With1PassedIn():   <!-- Passing Test -->
    returnValue = fizzBuzz(1)
    assert returnValue == "1"

def test_returns2With2PassedIn():
    returnValue = fizzBuzz(2)
    assert returnValue == "2"

-------------

def fizzBuzz( value ):
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue           <!-- Refactoring -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

- Step 4: Get "Fizz" when I pass in 3

def fizzBuzz( value ):
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue           <!-- Failing Test -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

-----------

def fizzBuzz( value ):
    if value == 3:
        return "Fizz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue           <!-- Passing Test -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

------------

<!-- No Refactoring Needed -->

- Step 5: Get "Buzz" when I pass in 5

def fizzBuzz( value ):
    if value == 3:
        return "Fizz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Failing Test -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

-----------

def fizzBuzz( value ):
    if value == 3:
        return "Fizz"
    if value == 5:
        return "Buzz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Passing Test -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

------------

<!-- No Refactoring Needed -->

- Step 6: Get "Fizz" when I pass in 6 (a multiple of 3)

def fizzBuzz( value ):
    if value == 3:
        return "Fizz"
    if value == 5:
        return "Buzz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Failing Test-->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

-------------

def fizzBuzz( value ):
    if (value % 3) == 0:
        return "Fizz"
    if value == 5:
        return "Buzz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Passing Test-->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

------------

<!-- No Refactoring Needed -->

- Step 7: Get "Buzz" when I pass in 10 (a multiple of 5)

def fizzBuzz( value ):
    if (value % 3) == 0:
        return "Fizz"
    if value == 5:
        return "Buzz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Failing Test-->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

def test_returnsBuzzWith10PassedIn():
    checkFizzBuzz(10, "Buzz")

----------


def fizzBuzz( value ):
    if (value % 3) == 0:
        return "Fizz"
    if (value % 5) == 0:
        return "Buzz"
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Passing Test-->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

def test_returnsBuzzWith10PassedIn():
    checkFizzBuzz(10, "Buzz")

---------

def fizzBuzz( value ):
    if isMultiple(value, 3):
        return "Fizz"
    if isMultiple(value, 5):
        return "Buzz"
    return str(value)

def isMultiple( value, mod ):
    return (value % mod) == 0

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Refactoring-->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

def test_returnsBuzzWith10PassedIn():
    checkFizzBuzz(10, "Buzz")

- Step 8: Get "FizzBuzz" when I pass in 15 (a mutliple of 3 and 5)


def fizzBuzz( value ):
    if isMultiple(value, 3):
        return "Fizz"
    if isMultiple(value, 5):
        return "Buzz"
    return str(value)

def isMultiple( value, mod ):
    return (value % mod) == 0

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Failing Test -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

def test_returnsBuzzWith10PassedIn():
    checkFizzBuzz(10, "Buzz")

def test_returnsFizzBuzzWith15PassedIn():
    checkFizzBuzz(15, "FizzBuzz")

-----------

def fizzBuzz( value ):
    if isMultiple(value, 3):
        if isMultiple(value, 5):
            return "FizzBuzz"
        return "Fizz"
    if isMultiple(value, 5):
        return "Buzz"
    return str(value)

def isMultiple( value, mod ):
    return (value % mod) == 0

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue        <!-- Passing Test -->

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")

def test_returnsFizzWith3PassedIn():
    checkFizzBuzz(3, "Fizz")

def test_returnsBuzzWhen5PassedIn():
    checkFizzBuzz(5, "Buzz")

def test_returnsFizzWith6PassedIn():
    checkFizzBuzz(6, "Fizz")

def test_returnsBuzzWith10PassedIn():
    checkFizzBuzz(10, "Buzz")

def test_returnsFizzBuzzWith15PassedIn():
    checkFizzBuzz(15, "FizzBuzz")

------------

<!-- No Refactoring Needed -->