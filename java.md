## Java Notes
### Basic Stuff:
#### IntelliJ shortcuts
- **CTRL + SHIFT + S - settings**
#### Live Templates:
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
