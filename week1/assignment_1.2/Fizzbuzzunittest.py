import pytest

def fizzBuzz( value ):
    return str(value)

def checkFizzBuzz( value, expectedReturnValue ):
    returnValue = fizzBuzz(value)
    assert returnValue == expectedReturnValue

def test_returns1With1PassedIn():
    checkFizzBuzz(1, "1")

def test_returns2With2PassedIn():
    checkFizzBuzz(2, "2")
