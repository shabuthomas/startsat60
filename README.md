# Starts-at-60 Code Challenge

Done for Starts-at-60

## Before using

- Please make sure that you have:
 - node.js installed (https://nodejs.org/)
 - run npm install in your root project folder
## Usage

To run the project, please use a command line the following:
 - npm start
    - It will run the server at port 3000.

## How to run , 
 - go to http://localhost:3000/
 - Enter No: of random points to generate
or
- go to http://localhost:3000/pi?points=VALUE 
    ( replace VALUE with an integer)
    
# Description of Starts-at-60 Code Challenge

Introduction
In this test you'll be generating a rough estimate of the mathematical constant pi (π).

You can use any programming language you feel comfortable with, just know that Starts at 60 uses TypeScript for its day-to-day work and we're strong proponents of the functional programming paradigm.

You may also make a visual or console application, use whatever feels right.

This test should take between 1 to 3 hours to solve, depending on your skill set and choice of language.

Instructions
Imagine a circle that fits perfectly inside a square, with the circumference of the circle perfectly touching the inner sides of the square. In other words, the diameter of the circle is equal to the side length of the square. The ratio of the area of this circle to the area of the square is equal to π / 4.

It just so happens that, thanks to this mathematical property, if you generate a number of random points inside the square the number of points that end up in the circle divided by the number of points found in the square would be approximately equal to π / 4. This is a process known as Monte Carlo simulation and can be used to estimate pi.

You should write a program that:

Takes the number of random points to generate as input
Randomly generates the provided number of points inside a 100 by 100 unit grid
Counts the number of points that ended up inside a 100 by 100 unit square, if the square is positioned at the centre of the grid
Counts the number of points that ended up inside a circle with a 100 unit wide diameter, if the circle is positioned at the centre of the grid
Outputs the estimate of pi either visually or to the console, remembering that the last two steps gave you the information to solve for π based on the equation above
Remember that this will only estimate the value of pi, so depending on the amount of random points entered it will be closer or further away from the real value of pi.

Submission
Please email your final source code to XXX with the subject line 'Programming test - <Your name>'.

# Thank You, enjoyed doing this

