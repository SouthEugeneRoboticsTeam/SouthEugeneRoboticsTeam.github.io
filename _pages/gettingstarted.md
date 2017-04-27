---
permalink: /gettingstarted/
title: Getting Started
---

## Installing Everything You Need

To get started, first go [click this link](https://atom.io) to download a program called Atom. This is what you will be using as an IDE or integrated development environment (basically where you will write all your code). Once the download is complete, click [here](https://www.python.org/downloads/) to head on over to Python's website and click where it says `Download Python 2.7.13`. If you're on Windows and it asks to install Python to your path, just select `Install for all users`. After the download has completed, open Atom, select `New File` and save it to your `Desktop` as `countdown.py`. One this is done you're ready to start writing code!

## Step 1: Variables

Variables in any programming language are places to store information. Think of it as a box you can put stuff into and get back out later. An example if a variable in Python can be see with the following statement:
```python
i = 10
```
What this is doing is telling the program that `i` has a value of `10`. To put it into perspective, if you took `i` and added it to `10` you would get `20`. Now that we know what a variable is in terms of programming, we can put it into use.

## Step 2: Methods

At this point, your code should only have one line:
`i = 10`.
Thats ok because now were going to learn about methods which are like tools that can use that variable. A method is pretty much a variable except it stores prewritten code from somewhere else that your program can use. An example of a method would is a `print` statement. What `print` does is it "prints" the output of your code to your screen so you can receive output from your code. To try print out in your code simply write this to your code.
```python
i = 10
print i
```
If you're using a Mac, run your code by opening a program called `terminal` or if you're on windows open the `start menu` and type `cmd` and hit enter. Once open, type `cd ~/Desktop` and hit enter. Then type `python countdown.py` and hit enter again. If everything worked correctly, you should be seeing the value your program is printing which is the value we set `i` to earlier. Pretty cool right? To run your code again, just type `python countdown.py` again and press enter. Now that we have a basic understanding of methods, we can move on to making it do more than just printing.

## Step 3: Looping

Now were going to look at `while` loops. A `while` loop is basically just a way for a piece of your code to run over and over again. Here's how you add it to your code:
```python
i = 10
while True:
    print i
```
Now if your run this code, it should just print `10` and keep going forever. To stop this code, press `Ctrl-c` on your keyboard. Also, it it important to note that the indentation in the above code is important as it is how python identifies which parts of the code are affected by the while loop. Now that we have a loop, lets change the variable.

## Step 4: Changing the Variable

To modify the variable during the while loop, add this to your code:
```python
i = 10
while True:
    print 10 - i
    i = i - 1
```
What this does is it takes what you had stored as `i` earlier and it each time it runs it takes `i`, subtracts 1, and then sets that value to be `i`. Now if you run your code it should countdown put keep going forever. To fix this, we need to add a condition to make the loop stop.

## Step 5: Stopping the loop

To stop the loop, we need to add something to the while loop to tell it when to finish. we can do this by writing:
```python
i = 10
while i > 0:
    print 10 - i
    i = i - 1
```
This will mean that the loop will stop running as long as `i` is less that 0. Now if you run your program, it should countdown from 10 to 1. But it is still too fast to be an actual countdown, so to fix this we need to add a library.

## Step 6: Libraries

What are libraries? Well if you think about methods like a tool, then a library is like a toolbox. A library is essentially where many methods are stored and can be called by your code to perform different tasks. To add a library to your code, you first need to `import` it. The library we are going to use is called the time library. We can get this library by adding `import time` to the very top of our program. Once this is done we are going to use the `Sleep` method from this library. What this library does is it waits or "sleeps" for the amount of time you tell it to. We can add the sleep method to our code in the `while` loop by writing `time.Sleep(1)` which is pretty much telling our code "from the `time` library, use the `Sleep` method and tell it to wait 1 second." After this has been added to your code, it should look like this:
```python
i = 10
while True:
    print i
    i = i - 1
    time.Sleep(1)
```
Now if you run it it should take 1 second between each time it prints i. To change how long it waits, simply change the number we are giving the `Sleep` method. IE `time.Sleep(2)` will wait 2 seconds instead of 1.

## Step 7: Adding a Message

Now that we're almost done, we can add a final message to our program. to do this all we need to do is place a print statement outside of the while loop so that when the while loop is done, it will print the message. To do this all we need to write is:
```python
i = 10
while True:
    print i
    i = i - 1
    time.Sleep(1)
print "Ready for takeoff!!!"
```
And thats it! Your program should be ready to test and if you run it now, you should see that after it counts down to 1 it prints "Ready for takeoff!!!" and then stops.

## Extra Resources

### If you enjoyed this exercise and want more resources to continue learning below are links to some great resources:

# [Coding Bat](http://codingbat.com/python)
# [Code Academy](https://www.codecademy.com)
# [Python: The Hard Way](https://learnpythonthehardway.org/book/)
# [Learn Python](http://www.learnpython.org)
