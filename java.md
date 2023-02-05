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
- **Import everything from the package:**
```java
import java.util.*
```
#### Commands:
- **Compile Main.java:**
```sh
javac Main
```
- **Run Main.class:**
```sh
java Main
```
#### Control Structures:
- **foreach loop in Java (over argv example):**
```java
for(String arg: args){
            System.out.println(arg);
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

#### Classes
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