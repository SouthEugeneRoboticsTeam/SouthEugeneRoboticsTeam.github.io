---
permalink: /tutorials/programming/python/methods/
title: Methods
---

## Introduction

Methods, or functions, are the basic building blocks of code. While we know methods come from libraries, we are going to learn how to make our own methods. If you remember from the last lesson, methods are like variables except instead of storing values they store blocks of code. That code can then be called to run the code in the same way we called `time.Sleep(1).`

## Step 1: Defining your method

In Python, we define a method using the `def` keyword. If we take our code from the last lesson, we can turn our countdown timer into a method by adding:

```python
import time

i = 10
def countdown:
    while i > 10:
        print i
        i = i - 1
        time.Sleep(1)
    print "Ready for takeoff!!!"

countdown()
```

What this does is it puts the code into the method `countdown` to be used by the program later. After the method has been defined, we can call this method simply by putting `countdown()` at the bottom of our code.

## Step 2: Parameters

Certain methods take certain values, and in programming, these values are called `parameters.` These are just ways to give a method a value to act on, much in the same way we gave `time.Sleep(1)` a value of 1 to make it sleep for 1 second, we can also add a way to input values into our methods for it to use. For our code, we can add a `cdtime` parameter to our method so that it knows how long to countdown. This also means we no longer need the `i` variable.

```python
import time

def countdown(cdtime):
    while cdtime > 0:
        print cdtime
        cdtime = cdtime - 1
        time.Sleep(1)
    print "Ready for takeoff!!!"

countdown(10)
```

What we've done here is added a `parameter` to tell `countdown` how many seconds it should run. Now when we call `countdown()` whatever value we give it is the amount of time it will countdown. For example, if at the bottom we wrote `countdown(100)` we would be giving the method `countdown` a `cdtime` of 100 meaning that it would countdown from 100 to 0.

## Step 3: Adding Multiple Parameters

Methods can take more than just 1 `parameter` at a time to perform a number of different tasks. All we need to do to define more that one `parameter` is add a comma between the names of each one. For example we can add a second `parameter` to our `countdown` method to determine what message it prints by writing:

```python
import time

def countdown(cdtime, message):
    while cdtime > 0:
        print cdtime
        cdtime = cdtime - 1
        time.Sleep(1)
    print message

countdown(10, "Ready for takeoff!")
```

Notice that now we have added a parameter to print whatever message we give `countdown`, we now need to define that message when we call `countdown`. To see how a function works, try messing around with the parameters, change `cdtime` and `message` to whatever you want. If you're stuck and need an example, write `countdown(20, "This is my message for liftoff!")`. This will make `countdown` wait 20 seconds and print the message, "This is my message for liftoff!" Keep in mind your message has to be in quotes.

## Step 4: Calling Methods

Now you've probably noticed that we we are only calling `countdown` once at the bottom of our code, but we can call it twice and with 2 different parameters each time. To call `countdown` twice, write

```python
import time

def countdown(cdtime, message):
    while cdtime > 0:
        print cdtime
        cdtime = cdtime - 1
        time.Sleep(1)
    print message

countdown(10, "Ready for takeoff!")
countdown(5, "Ready for takeoff number two!")
```

This should give you an example of how we can call the same function multiple times without having to write the same piece of code over and over again. So now you can think of a method as a way of storing useful code that can be called later as many times as you want. Now you can mess around with the `countdown` method as much as you want and change the times each one counts down and the message simply by changing what `parameters` you give it!

## Extra Resources

If you enjoyed this exercise and want more resources to continue learning below are
links to some great resources:

### [Coding Bat](http://codingbat.com/python)

### [Code Academy](https://www.codecademy.com)

### [Python: The Hard Way](https://learnpythonthehardway.org/book)

### [Learn Python](http://www.learnpython.org)
