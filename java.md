## Java Notes
### Basic Stuff
- **psvm - shortcut for public static void main method**
- **sout - shortcut for System.out.println()**
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
#### Commands
- **Compile Main.java:**
```sh
javac Main
```
- **Run Main.class:**
```sh
java Main
```
#### Control Structures
- **for of loop in Java (over argv example):**
```java
for(String arg: args){
            System.out.println(arg);
        }
```
