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
- **forelse - foreach with code block to do when there is no records to display:**
```php
@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
```
- **foreach with continue and break in blade:**
```php
@foreach ($users as $user)
    @continue($user->type == 1)
 
    <li>{{ $user->name }}</li>
 
    @break($user->number == 5)
@endforeach
```
- **isset and empty directives:**
```php
@isset($records)
    // $records is defined and is not null...
@endisset
 
@empty($records)
    // $records is "empty"...
@endempty
```