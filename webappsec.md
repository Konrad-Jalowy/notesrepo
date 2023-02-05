## Web App Security Notes:
### Command Injection and Code Injection:
- **Not as popular as other injection attacks**
- **Attacker must know what system his targeting**
- **Relies on unsanitized user input passed to command execution**
- **Leads to remote code execution**
- **To perform attacker needs:**
    - **find unsanitized input passed to command execution**
    - **have knowledge of the system executing command**
- **Command injection is NOT code injection. Code injection allows an attacker to perform only what the code (say PHP) can perform**
- **Command injection allows an attacker to use system commands**
- **Also knows as Arbitrary Code Execution**
- **Functions leading to command injection or code injection (PHP example):**
    - **exec()**
    - **shell_exec()**
    - **passthru()**
    - **system()**
    - **Backtick operators**
    - **/e flag in preg_replace()**
    - **include keyword**
- **Functions for mitigations (PHP example):**
    - **escapeshellcmd() - only protects from adding another commands to input by escaping semicolons etc...**
    ```php
    $path = 'path; rm -rf /';
    $files = shell_exec(escapeshellcmd('ls '.$path));
    // Executes `ls path\; rm -rf /`;
    ```
    - **escapeshellarg() - makes one argument out of the input which protects from Command Injection well**
    ```php
    $path = 'path; rm -rf /';
    $files = shell_exec('ls '.escapeshellarg($path));
    // Executes `ls 'path; rm -rf /'`;
    ```
    - **preg_replace() - can filter out unwanted characters**
    ```php
    $command = $_GET['cmd'];
    $command = preg_replace('/[^a-zA-Z]/', '', $command);
    ```
    - **creating a whitelist**
    ```php
    $allowed = array('home', 'edit', 'delete', 'add');
    $command = $_GET['cmd'];
    $command = preg_replace('/[^a-zA-Z]/', '', $command);
    $key = array_search($command, $allowed, TRUE);
    if ($key) {
        $command = $allowed[$key];
    }
    else {
        $command = 'home';
    }
    ```
    - **using safe autoloader**
        - **make autoloader that uses special directory**
        - **check if file_exists() before autoloading**
        - **sanitize input**
        - **use whitelist**
        - **all classes for autoload have some prefix and the code makes it impossible to load class without this prefix**
        ```php
        $class = "Prefix_" . ucfirst(strtolower($command));
        $run = new $class;
        ```
    - **allow_url_include should be off - this allows to include fopen**
- **Rails example of command injection vulnerable code**
```rb
    <%= form_tag("/search1", method: "get") do %>
        <%= label_tag(:search, "Search:") %>
        <%= text_field_tag(:search) %>
        <%= submit_tag("Submit") %>
    <% end %>
    <% if(params[:search]) %>
    <%= `find . -iname #{params[:search]};` %>
    <% end %>
```
- **PHP example of command injection vulnerable code**
```php
<? if($_POST['filename']) {
              $command  = "ls -ltr ".$_POST['filename']."";
              $result = exec($command);
              print("The command was: ".$command."<br/><br/>");
              print("The result was: ".$result."");

          } 
```

