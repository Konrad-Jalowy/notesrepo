## Edge-cases examples:
### Case 1:
- **Will it complie?**
```java
while(false){
    break; //could be some really distracting stuff here
}
```
- **Short answer: NO**
- **while(false) in unreachable statement under any condition**
- **such unreachable statements are illegal in java.**
- **you can give some condition to while that might be false but not a condition that will always be false making the loop unreachable under any circumstances**
- **you can give conditions that will always be true though: famous while(true) loop**
- **illegal, unreachable condition:**
```java
while(1>10){
    break;
}
```
- **completely legal always-true condition:**
```java
while(1<10){
    break;
    }
```
### Case 2:
- **What will this function return?**
```js
function test(){
    return
    {
        name: "KJ"
    }
}
let obj1 = test();
```
- **Short answer: undefined**
- **This code is not executed as programmer intended because:**
    - **semicolon not used**
    - **newline between return and object literal**
    - **ASI (Automatic Semicolon Insertion) makes the whole block unreachable by adding semicolon after return before obj literal**
    - **return; returns undefined in JavaScript**
- **Will it be okay?**
```js
function test2(){
    return
    {
        name: "KJ"
    };
}

let obj2 = test2();
console.log(obj2.name);
```
- **as for now: NO. ASI still gets stupid because of the newline**
- **this is fine though, semicolon or not:**
```js
function test3(){
    return{
        name: "KJ"
    }
}
let obj3 = test3();
console.log(obj3.name);
```
### Case 3:
- **Will the echoed username be capitalized or not?**
```php
$username = "uSERNAME";
ucfirst($username);
echo $username;
```
- **Short answer: NO**
- **ucfirst method doesn not modify the contents of the variable. It simply returns a new string that here goes nowhere**

### Case 4:
- **Will the output of puts and echo in the examples below be the same or different (if so, how)?**
```php
$username = "uSERNAME";
echo ucfirst($username);
```
```rb
username = "uSERNAME"
puts username.capitalize
```
- **Short answer: NO**
- **PHP will echo USERNAME making the first letter uppercase, as the method name suggests**
- **Ruby will capitalize and puts will output Username - all letters must be lowercase, except the first, that must be capitalized**
- **A way to create capitalize method in PHP:**
```php
$username = "uSERNAME";
function capitalize($str) {
	return ucfirst(strtolower($str));
}
echo capitalize($username);
//Username
```
### Case 5:
- **Will it compile and run?**
```php
for(;;){
	echo "Hello World";
	break;
}
```
- **Short answer 1: NO, because PHP is interpreted language :)!**
- **Short answer 2: YES, this code is absolutely fine!**

### Case 6:
- **Will it compile?**
```c
int main()
{
    for(;;){
    printf("Hello, World!\n");
    break;
        }
    return 0;
}
```
- **Short answer: YES, as long as you included all libraries needed at the top, like stdio.h**
### Case 7:
- **Do I need a semicolon here or something?**
```vb
Public Module Program
	Public Sub Main(args() As string)
		Console.WriteLine("Hello, World!")
	End Sub
End Module
```
- **Short answer: NO**
### Case 8:
- **Is this an example of bitwise operator, logical operator, non-existing operator or some other operator?**
```vb
Public Module Program
	Public Sub Main(args() As string)
		Console.WriteLine("Hello " & "World!")
	End Sub
End Module
```
- **Short answer: concatenation operator. Like dot in PHP, Fortran etc or plus sign in many programming languages**

### Case 9:
- **Will the output of those 2 operations be the same?**
```js
parseInt("16px");
Number("16px");
```
- **Short answer: NO**
- **parseInt will get the job done and return 16 from this string**
- **Number will fail returning NaN (Not a Number)**

### Case 10
- **Is this code ok? If theres a problem, whats the problem here?**
```vb
Public Module Program
	Public Sub Main(args() As string)
	  Dim array1 As Integer() = New Integer() {1, 2, 3, 4, 5}
	  array1(0) = 6
		Console.WriteLine(array1[0])
	End Sub
End Module
```
- **Short answer: NO!**
- **Problem is array1[0] - square brackets**
- **To access array elements by index you use () instead of [] in VB**
- **Using array(idx) you can get or set array values**
### Case 11
- **Which of the following codes (if any) is any different in output from others and what is the difference/problem if any?**
```rb
puts 65.chr
```
```c
#include <stdio.h>

int main()
{
    printf("%c", 65);

}
```
```py
print(chr(65))
```
```cpp
#include <iostream>

using namespace std;

int main()
{
    cout<< chr(65);

    return 0;
}
```
```php
echo chr(65);
```
```vb
Public Module Program
	Public Sub Main(args() As string)
		Console.WriteLine(chrw(65))
	End Sub
End Module
```
- **Short answer: CPP CODE**
- **Instead of chr() you should use char()! Example of good code that compiles and provides correct output:**
```cpp
#include <iostream>

using namespace std;

int main()
{
    cout<< char(65);

    return 0;
}
```
### Case 12
- **Ignoring some syntax differences and handling input/output, is there any logic difference between the codes listed below?**

```go
package main

import "fmt"

func main() {
	var i int
	fmt.Print("Type a number: ")
	fmt.Scan(&i)
	switch i {
	case 1:
		fmt.Print("One")
	case 2:
		fmt.Print("Two")
	case 3:
		fmt.Print("Three")
	default:
		fmt.Print("Unknown")
	}
}
```
```js
let num = parseInt(prompt("Enter a number"));
switch (num){
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
    default:
        console.log("Unknown");
}
```
```py
num = int(input("Enter a number: "))
match num:
    case 1:
        print("One")
    case 2:
        print("Two")
    case 3:
        print("Three")
    case other:
        print("Unknown")
```
- **Short answer: YES**
- **In go and python, unlike most languages (like JS), break is default after hitting a matching case.**
- **There is no fallthrough in cases for Python**
- **In go, break is default but there is fallthrough keyword so you can specify it**
- **In JS, just like many languages, you must break out of the case because it will fallthrough by default**

### Case 13
- **Will this code compile/run? Why/why not?**
```java
public class Main {

    public static void main(String[] args) {
        for (int i = 1 ; i < 6; i++) {
            show(switch(i) {
                case 1 -> i + 1;
                case 2 -> i * 2;
                case 3 -> i + 10;
                case 4 -> i + i * i;
                case 5 -> i * 8;
                default -> i;
            });
        }
        public static void show(int x) {
            System.out.println(x);
        }
    }
}
```
- **Short answer: NO. Not because of switch**
- **Swich as a parameter is absolutely fine and ok. The problem is method nested within a method.**
- **Correct version that will run below. Switch used like this is fine**
```java
public class Main {

    public static void main(String[] args) {
        for (int i = 1 ; i < 6; i++) {
            show(switch(i) {
                case 1 -> i + 1;
                case 2 -> i * 2;
                case 3 -> i + 10;
                case 4 -> i + i * i;
                case 5 -> i * 8;
                default -> i;
            });
        }

    }
    public static void show(int x) {
        System.out.println(x);
    }
}
```
### Case 14:
- **Will those code produce output that the programmer intended? Will those two codes run any different?**
```js
var array = [1, 2, 3, 4, 5]
for(var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}
```
```js
let array = [1, 2, 3, 4, 5]
for(var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}
```
- **Short answer 1 and 2: NO, NO**
- **If programmer intended to iterate over array, he/she will be sadly disappointed. They will get 5 (last value), 5 times**
- **Using let or var to declare array doesnt make any difference nor does it solve the problem. But its good to avoid var under any circumstances**
- **The problem here is using var inside the loop. Thats something that should be changed. Changing var i to let i solves the problem**
- **Version that is correct. Used var for array to emphasize where actually problem is, although using var is EVIL**
```js
var array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}
```
### Case 15:
- **Will those functions "run"? Are they the same in output? Can such a function, without any parameters (empty brackets) take parameters?**
```js
function sum1(){
    let cnt = 0;
    arguments.forEach((arg) => {
        cnt+=arg;
    });
    return cnt;
}

function sum2(...args){
    let cnt = 0;
    args.forEach((arg) => {
        cnt +=arg;
    });
    return cnt;
}
console.log(sum1(1,2,3));
console.log(sum2(1,2,3));
```
- **Short: Function 1 is wrong, but empty brackets have nothing to do with it**
- **arguments is array-like object and should be converted to array using Array.from before using forEach, which is array method**
- **You can have variadic number of arguments in function without rest operator, with empty brackets, but you must convert arguments object, present in standard functions (not in arrow ones), if you want to use array methods on it**
- **Example of correct code:**
```js
function sum3() {
    cnt = 0;
    args = Array.from(arguments);
    args.forEach((arg) => {
        cnt += arg;
    });
    return cnt;
}

console.log(sum3(1,2,3));
```
### Case 16:
- **Will it even compile? Will it run at least once?**
```java
public class Main {

    public static void main(String[] args) {
        do {
            System.out.println("Hello world!");
        } while (false);
    }
}

```
- **Short answer 1: suprisingly YES. Although editor might issue a warning**
- **Will it run: Since do-while checks the condition AFTER executing do block and since it compiles, YES, it will run, output hello world, check the always-false condition and then, since condition is false, it will break out of the loop. EZ**

### Case 17:
- **Is this code correct? What does it do?**
```py
for x in [chr(i) for i in range(ord('a'),ord('z')+1)]: False or (1+1==2) and (lambda y: print(y))(x)
```
- **Short answer: Correct. Prints letters from a to z**
- **Super confusing and obfuscating! Its a combination of some features such as:**
    - **short-circuting with both or and and... Hard to explain, easy to wrap your head around after some practice**
	- **completely unnecessary lambda that can be replaced with print(x)**
	- **for loop one liner (print)**
	- **list comprehension**
	- **range object and chr and ord functions since Python does not have a letter-range, unlike those unpopular and shitty langs such as PHP, meh!**
- **Deobfuscation:**
	- **Hello world in lambda:**
	```py
	(lambda x,y : print(x + " " + y))("Hello", "world!")
	```
	- **For-loop one liner:**
	```py
	for num in [1,2,3]: print(num)
	```
	- **Range from 1 to 9:**
	```py
	for num in range(1,9+1): print(num)
	```
    - **short-circuting - or:**
    ```py
    (1>2) or print("Hello world!")
    ```
    - **short-circuting - and:**
    ```py
    (1<2) and print("Hello world!")
    ```
	- **List comprehension - you can google it!**
	- **chr and ord just like in any programming language**
	- **another look at the code and it reads like English!**

### Case 18:
- **Take a look at example of Ruby code below**
```rb
puts 65.chr
```
- **Ruby has a neat and nice syntax and built-in utilities, functions, methods. Can I replicate and use it in JavaScript as below? If so, which way of calling this function is correct one?**
```js
Number.prototype.chr = function() {
    return String.fromCharCode(this);
}
console.log(65.chr);
console.log(65.chr());
```
- **Yes, you can add functions to prototypes like that**
- **The function itself is ok**
- **Neither of these two ways is a good one for calling such function on numeric type**
- **Example of how to make it work (not nearly as neat as in Ruby, but stil...):**
```js
Number.prototype.chr = function() {
    return String.fromCharCode(this);
}
console.log((65).chr());
```
### Case 19:
- **Are those codes the same? Is there any odd one? If so, which one?**
```php
foreach( Range(1,10) as $num){
    echo "$num\n";
}
```
```java
public class Main {
    public static void main(String[] args) {
        int[] array = new int[]{21,22,23,24,25,26,27,28,29,30};
        for ( int num: array) {
            System.out.println(num-20);
        }
    }
}
```
```py
for num in range(1,10):
    print(num)
```
- **Both Java nad PHP will produce output with numbers from 1 to 10 here**
- **In python mismatched tab and space indentation - EZ to spot.**
- **Just kidding. In Python, youll get numbers from 1 to 9. Heres numbers from 1 to 10 in Python:**
```py
for num in range(1,10+1):
    print(num)
```
### Case 20:
- **Which of those codes will not compile/run and which will, and if any, what would be output?**
```php
<?php
printf("%d", printf("Hello World"));
```
```c
#include <stdio.h>

int main()
{
    printf("%d", printf("Hello World"));

}
```
```java
public class Main {
    public static void main(String[] args) {
        System.out.printf("%d", System.out.printf("Hello World"));
    }
}
```
- **Java will not compile**
- **In PHP and C, first Hello World gets printed, then 11 (length of the string returned by printf function)**

### Case 21:
- **Are all codes below an example of code that will be executed in a script/program immediately, without needing to be called in any way, going with normal program flow and is it correct/has no errors? If any, can you name all these errors?**
```php
call_user_func(function() { echo "Hello world"; });
```
```js
(function(){
    console.log("Hello World");
})();
```
```py
(lambda msg : print(msg))("Hello World")
```
```php
(function() { echo "Hello World"; })();
```
```js
true && console.log("Hello World");
```
```py
if __name__ == '__main__':
    print("Hello World")
```
```js
{ 
    let a = 45;
    let b = "yolo";
    console.log("hi"); 
}
```
```py
true && print("hello world")
```
```java
public class Main {
    public static void main(String[] args) {
        do {
            System.out.println("Hello World");
        } while(false);
    }
}
```
- **Short answer: python short circuting is wrong.**
- **In Python short circuting (last example) true is some unknown variable (True is what Python uses for truth) plus && is invalid operator, Python uses and keyword. Example below would work:**
```py
True and print("hello world")
```
- **call_user_func is older PHP IIFE. There is newer syntax, more JS-like**
- **short circuting in js, absolutely fine**
- **using lambdas as IIFE in python fine, just as if __name__ == '__main__' block, this code will run, its just a safeguard from running while imported**
- **using brackets in JS for creating scope makes those variables invisible outside the scope but the main point is will hello world run - yes it will. I wonder why people use IIFEs over blocks TBH**
- **do-while(false) will work as IIFE in Java. There are, people say, less hacky ways to create IIFE in Java, but who cares, do-while(false) gets the job done and looks somewhat neat while being Java code**