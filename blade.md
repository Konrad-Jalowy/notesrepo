## Blade Notes
- **interpolation in blade:**
```php
{{ $task->name }}
```
- **foreach loop:**
```php
 @foreach ($tasks as $task)
 <li>{{ $task->name }}</li>
 @endforeach
 ```
 - **CSRF token in a form:**
 ```php
 {{ csrf_field() }}
 ```
 - **method spoofing in a form:**
 ```php
{{ csrf_field() }}
{{ method_field('DELETE') }}
```
