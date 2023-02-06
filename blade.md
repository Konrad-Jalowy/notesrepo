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
- **@csrf - shorter syntax for csrf field**
```php
@csrf
```
- **can directive example**
```php
@can('delete', $note)
<form action="{{route('deleteNote', $note->id)}}" method="POST">
        @csrf
        @method('DELETE')
<button>Delete</button>
</form>
@endcan
```
