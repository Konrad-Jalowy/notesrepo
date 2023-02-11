## Java Notes
### Basic Stuff:
#### IntelliJ shortcuts
- **CTRL + ALT + S - settings**
#### Live Templates (you can create your own):
- **psvm - shortcut for public static void main method**
- **main - also public static void main shortcut**
- **sout - shortcut for System.out.println()**
- **souf - shortcut for System.out.printf();**
- **psfs - public static final String**
- **psfi - public static final int**
- **prsf - private static final**
- **St - String**
- **thr - throw new**
- **fori - for loop with int value**
- **foreach - for each loop**
- **itar - iterate over array using for loop**
#### Imports/packages:
- **package names always lowercase and unique**
- **In IntelliJ you can go to settings>tree>compact middle packages to show/hide middle packages**
- **Imports in Java:**
```java
package untitled2.project;
import java.util.Random;
public class Main {
    public static void main(String[] args) {
        Random random = new Random();
        System.out.println(random.nextInt(10));
    }
}
```
- **Integer class:**
```java
public static void main(String[] args) {
        System.out.println(Integer.toHexString(123)); //7b
        System.out.println(Integer.toOctalString(123)); //173
        System.out.println(Integer.toBinaryString(123)); //1111011
        System.out.println(Integer.parseInt("123")); //123
        System.out.println(Integer.min(123,124)); //123
        System.out.println(Integer.max(123,124)); //124
        System.out.println(Integer.sum(123, 124)); //247
    }
```
- **Import everything from the package:**
```java
import java.util.*;
```
- **Import static:**
```java
import static java.util.*;
```
- **Import static definition: Static import is a feature introduced in the Java programming language that allows members (fields and methods) which have been scoped within their container class as public static , to be used in Java code without specifying the class in which the field has been defined.**
#### Commands:
- **Compile Main.java:**
```sh
javac Main
```
- **Compile Main.java - specify out as destination (-d flag):**
```sh
javac -d out Main
```
- **Run Main.class:**
```sh
java Main
```
#### Control Structures and basics:
- **foreach loop in Java (over argv example):**
```java
for(String arg: args){
            System.out.println(arg);
        }
```
- **switch statemet as an argument to a method:**
```java
public class Main {
    public static void show(int x) {
        System.out.println(x);
    }
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
}
```
- **Convert array to string:**
```java
import java.util.Arrays;
public class Main {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(args));
    }
}
```
#### Naming conventions:
- **package names lowercase and unique**
- **Class names:**
    - **CamelCase**
    - **Noun**
    - **Starts with capital letter**
- **Interfaces:**
    - **Like classes**
    - **Nouns or adjectives, often ending with -able suffix**
- **Methods:**
    - **mixedCase**
    - **usually verbs or noun indicating return value**
- **Consts:**
    - **UPPERCASE**
    - **SEPARATED_BY_UNDERSCORE**
- **Variables:**
    - **mixedCase**
    - **starts with lowercase**
    - **dont use underscores**
    - **should be meaningful**
- **Type parameters:**
    - **single uppercase letter**
    - **types and their meaning:**
        - **E - element**
        - **K - key**
        - **T - type**
        - **V - value**
### String:
#### String inspection methods:
- **length**
- **charAt**
- **indexOf**
- **lastIndexOf**
- **isEmpty**
- **isBlank**
```java
public static void main(String[] args) {
        String hello = "Hello World";
        System.out.println(hello.length()); //11
        System.out.println(hello.charAt(0)); // 'H'
        System.out.println(hello.indexOf('l')); //2
        System.out.println(hello.lastIndexOf('l')); //9
        System.out.println(hello.isEmpty()); //false - but its always false! dont use
        System.out.println(" ".isBlank()); // true
        System.out.println(hello.isBlank()); //false
    }
```
- **Return last character function example:**
```java
public static void main(String[] args) {
        String hello = "Hello World";
        System.out.println(returnLastCharacter(hello));
    }
    public static char returnLastCharacter(String string){
        return string.charAt(string.length() - 1);
    }
```
#### String comparison methods:
- **startsWith**
- **endsWith**
- **contains**
- **regionMatches**
```java
public static void main(String[] args) {
        String hello = "Hello World";
        System.out.println(hello.startsWith("Hello")); //true
        System.out.println(hello.endsWith("world")); //true
        System.out.println(hello.contains("ll")); //true
    }
```
#### String manipulation methods:
- **indent**
- **strip**
- **stripLeading**
- **stripTrailing**
- **trim**
- **toLowerCase**
- **toUpperCase**

#### Other useful String methods:
- **substring**
- **join**
- **concat**
- **replace**
- **repeat**
#### Examples:
- **substring method example:**
```java
public static void main(String[] args) {
        String groups = "kj : kj adm cdrom sudo dip plugdev lpadmin lxd sambashare" ;
        int startIdx = groups.indexOf(":");
        String kjGroups = groups.substring(startIdx+1);
        System.out.println(kjGroups.trim());
    }
```
- **replace method example:**
```java
public static void main(String[] args) {
        String groups = "kj : kj adm cdrom sudo dip plugdev lpadmin lxd sambashare" ;
        int startIdx = groups.indexOf(":");
        String kjGroups = groups.substring(startIdx+1);
        kjGroups = kjGroups.trim();
        kjGroups = kjGroups.replace(" ", ",");
        System.out.println(kjGroups); // 'kj,adm,cdrom,sudo,dip,plugdev,lpadmin,lxd,sambashare'
    }
```
- **replace (like many methods) is overloaded with different variants. example:**
```java
public static void main(String[] args) {
        String groups = "sudo:x:27:kj\n";
        groups = groups.replace("\n", "");
        groups = groups.replace(":x:", ":");
        System.out.println(groups); // sudo:27:kj


    }
```
- **join method example:**
```java
public static void main(String[] args) {
        String date = String.join("/", "17", "12", "1992");
        System.out.println(date); // 17/12/1992
    }
```
- **concat method example:**
```java
public static void main(String[] args) {
        String hello = "";
        hello = hello.concat("Hello").concat(" ").concat("World!");
        System.out.println(hello); //Hello World!
    }
```
- **repeat method example:**
```java
public static void main(String[] args) {
        System.out.println("-".repeat(25));
        // -------------------------
    }
```
#### Basic Regex String Methods:
- **replaceFirst**
- **replaceAll**
#### Examples
- **replaceFirst:**
```java
public static void main(String[] args) {
        String groups = "sudo:x:27:kj\n";
        groups = groups.replace("\n", "");
        groups = groups.replaceFirst(":x:", ":");
        System.out.println(groups); //sudo:27:kj
        groups = groups.replaceFirst(":[0-9]+:", ":");
        System.out.println(groups); //sudo:kj

    }
```
### Arrays:
- **Declare, initialize and print the array:**
```java
public static void main(String[] args) {
        int[] myArray = new int[]{1,2,3,4,5,6,7,8,9,10};
        System.out.println(Arrays.toString(myArray));
    }
```
- **Fixed-size array:**
```java
public static void main(String[] args) {
        int[] myArray = new int[10];
        System.out.println(Arrays.toString(myArray));
        //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
```
- **Custom IntelliJ live-template soutar with cursor position specified:**
```java
System.out.println(Arrays.toString($END$));
```
- **Arrays as parameters: find minimum element example:**
```java
private static int findMin(int[] array) {

        int min = Integer.MAX_VALUE;

        for(int i=0; i<array.length; i++) {
            int value = array[i];

            if(value < min) {
                min = value;
            }
        }

        return min;
    }
```
- **Arrays as return type and runtime-known size of array:**
```java
private static int[] readIntegers(int count) {

        int[] array = new int[count];
        //SOME CODE HERE
        return array;
}
```
- **Interesting way to reverse an array in a loop:**
```java
private static void reverse(int[] array) {

        int maxIndex = array.length -1;
        int halfLength = array.length / 2;
        for(int i=0; i< halfLength; i++) {
            int temp = array[i];
            array[i] = array[maxIndex -i];
            array[maxIndex - i] = temp;
        }
    }
```
#### java.util.Arrays:
- **Arrays.sort (in-place):**
```java
public static void main(String[] args) {
        int[] myArray = new int[]{3,2,1,4,6,5,8,10,7,9};
        System.out.println(Arrays.toString(myArray));
        Arrays.sort(myArray); //void, changes original array
        System.out.println(Arrays.toString(myArray));
    }
```
- **Arrays.fill:**
```java
public static void main(String[] args) {
        int[] myArray = new int[10];
        System.out.println(Arrays.toString(myArray));
        //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        Arrays.fill(myArray, 1);
        System.out.println(Arrays.toString(myArray));
        //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
```
- **Arrays.copyOf:**
```java
 public static void main(String[] args) {
        int[] myArray = new int[10];
        Arrays.fill(myArray, 1);
        int[] myArray2 = new int[10];
        myArray2 = Arrays.copyOf(myArray, myArray.length);
        System.out.println(Arrays.toString(myArray));
        //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        System.out.println(Arrays.toString(myArray2));
        //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
```
- **Arrays.binarySearch:**
```java
public static void main(String[] args) {
        int[] myArray = new int[]{3,2,1,4,2,3};
        Arrays.sort(myArray);
        if(Arrays.binarySearch(myArray,2)>=0){
            System.out.println("2 found in array");
        }
    }
```

#### Basic String tasks
- **println (sout) prints String + newline**
- **empty println (sout) prints newline**
- **print prints text without newline**
- **printf (souf) prints text with specified format**
- **java.util.Scanner - class for Scanner (getting input etc)**
- **new Scanner(System.in) - scanner for reading user input**
- **sc.nextLine() - read line from input**
- **sc.nextInt() - reads next integer**
- **Integer.parseInt(str) - can also parse String to int**
- **example:**
```java
public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name:>");
        String name = sc.nextLine();
        System.out.printf("Your name is %s", name);
    }
```
- **example 2:**
```java
public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input a number:");
        int number = sc.nextInt();
        System.out.printf("Your number is %d", number);
        System.out.println();
        System.out.printf("Your number times 2 is %d", number*2);
    }
```
### Classes
- **OOP - object oriented programmind**
- **Objects have:**
    - **State**
    - **Behaviour**
- **Class - blueprint for an object**
- **Inheriting class - extends keyword**
```java
public class Eagle extends Bird {}
```
- **Overriding methods - @Override annotation**
```java
@Override
public void eat(int amount)
{
    System.out.println("The eagle is eating " + amount + " units of food");
}
```
- **Overloading - same method name, multiple implementations**
    - **Ways to overload a method:**
        - **Number of parameters:**
        ```java
        add(int, int)
        add(int, int, int)
        ```
        - **Data type of parameters:**
        ```java
        add(int, int)
        add(int, float)
        ```
        - **Sequence of parameters:**
        ```java
        add(int, float)
        add(float, int)
        ```
- **Method overloading by changing return type of the method CANNOT be done in Java**
- **Constructor overloading - creating many constructors with different parameters**
- **Constructor example in Java:**
```java
public class Account {
    public Account(){
        System.out.println("Constructor called");
    }
}
```
- **Constructor chaining - calling one overloaded constructor from the other**
- **You chain constructors by calling this() inside a constructor:**
```java 
public class Account {
    private double balance;
    private String name;
    public Account(double balance, String name){
        this.balance = balance;
        this.name = name;
    }
    public Account(){
        this(0, "Unknown customer");
    }
}
```
- **Static class variables - used for variables shared between the instances. They are not final - they can be modified. Example:**
```java
class Dog {
    public static String name;
    public Dog(String name){
        Dog.name = name;
    }
    public void printName(){
        System.out.println(name);
    }
}
public class Main {
    public static void main(String[] args) {
    Dog dog1 = new Dog("Nelson");
    Dog dog2 = new Dog("Lexi");
    dog1.printName(); //returns Lexi
    dog2.printName(); //returns Lexi
    }
}
```
- **POJO - Plain Old Java Object:**
    - **Has instance fields**
    - **Few, if any, methods other than getters and setters**
    - **Also called bean, JavaBean or DTO (Data Transfer Object)**
- **Record - new type for such POJOs. Example of creation:**
```java
public record Student(String id, String name, String dateOfBirth, String classList) {
}
```
- **Record used as normal class would be in terms of syntax**
- **Records are immutable**
- **IS-A relationship - class Dog inherits form Animal: Dog is an animal**
- **Calling parent class constructor using super():**
```java 
public class Dog extends Animal {
    private String name;
    public Dog(String name){
        super("My animal");
        this.name = name;
    }
}
```
- **Overriding toString method in JAVA:**
```java
@Override
public String toString() {
    return this.name;
}
```
- **Overridden method can:**
    - **Implement completely different logic, overriding the parent behaviour**
    - **Just call parent method - redundancy, parent methods are available for children**
    - **Call parent method and include some other code extending parent method behaviour**
- **Static methods cannot reference class using this context - seems obvious.**
- **Since main entry point of the Java program is psvm, main class cannot have non-static methods/fields to be used in psvm referenced by this**
- **Main classname is just a convention but psvm is required. Main class is not static. In theory it can have non-static fields but its weird. Example from stackoverflow:**
```java
public class MainClass {
    int value;

    public void printValue() {
        System.out.println("" + value);
    }

    public static void main(String[] args){
        MainClass o = new MainClass();
        o.printValue();
    }
}
```
- **java.lang.Object - each class intrinsically extends it. Methods:**
    - **toString**
    - **equals**
    - **clone**
    - **hashCode**
- **Method is considered overridden if it follows these rules:**
    - **same name and arguments**
    - **same return type or return type is subclass of the return type of the parent class**
    - **it cant have lower access modifier**
- **Abstract classess:**
    - **Cannot be instantiated directly**
    - **Can have 0 or more abstract methods**
    - **Cannot be private or final**
    - **Abstract class extending another abstract class inherits all of its abstract methods**
    - **The first concrete class must provide implementations for all abstract method inherited from abstract class**