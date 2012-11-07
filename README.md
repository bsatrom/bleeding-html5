# Bleeding Edge of HTML5 - Demo Script

## EcmaScript

Modules and Classes have yet to be implemented in any of the browsers, but a number of ES6 Features have landed in the Nightly Versions of Firefox.

We'll take a look at default & rest parameters, and the new for..of syntax.

### Default Parameters

Let's take a look at Default Parameters first. 

1. Open FirefoxNightly and verify that your version (Listed in About) is 16 or higher.
2. Open The FireBug console, then switch to multi-line mode (arrow icon in the lower-right).
3. Enter the following into the console window, then click run

		function f(a = 0, b = a*a) {   		return [a, b]; 		}

		console.log(f(2, 16)); // Returns [2, 16]
		console.log(f(2)); // Returns [2, 4]Notice that, in the first example, the values we pass in are preserved. In the second log, the value of `a*a` is provided for the missing `b` parameter.
### Rest Parameters

Rest parameters are part of the "`arguments` killing" features of ES6, along with default parameters. Rest parameters allow you to assign an indeterminate number of parameter values in a first-class array.

Defining a rest parameters object is simple, we just use an ellipsis (`…`) immediately followed by the name of the variable. In the function itself, this object will be a first-class array (as opposed to the array-like-but-not-exactly `arguments` object. 

1. Add the following in the console window:

		function f(a, b, ...others) {  		return others.concat(a, b);		}
		
		console.log(f(1, 2, 3, 4, 5)); // Returns [3, 4, 5, 1, 2]; 

Finally, let's look at for..of.

### [for..of](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...of) 

The `for..of` syntax is designed to allow you to iterate over ONLY iteratable objects in a collection, as opposed to all property values on an object. To show you what I mean, let's run through a quick example.

1. First, let's take a look at the existing for..in syntax. Type the following in the console window

		var arr = [ 3, 5, 7 ];
 		
		for (var i in arr) {
   			console.log(i);
		}
 
	Run the sample. Everything looks ok, but let's modify the sample to include a new, custom property:

		var arr = [ 3, 5, 7 ];
		arr.foo = "hello";
 
		for (var i in arr) {
   			console.log(i);
		}
 
	Now, you'll notice that the "foo" property is output, in addition to our array values.

2. Let's try using for..in now:

		for (var i of arr) {
   		console.log(i);
		}

	When you run this code, you'll notice that only the array values are being output. Nice!

## CSS

## JavaScript APIs

## HTML & The DOM
