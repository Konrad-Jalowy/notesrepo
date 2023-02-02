# Laravel Notes
## Laravel Basic Commands
- **php artisan serve** - start server
- **php artisan route:list** - list routes
- **php artisan route:list --path=api** - list api routes (or any given path)
- **php artisan make:migration create_flights_table** - create migration for table named flights 
- **php artisan migrate** - migrate 
- **php artisan migrate:rollback** - rollback previous migration
- **php artisan migrate:rollback --step=3** - make 3 rollbacks
- **php artisan migrate:refresh** - rollback previous migration and then migrate
- **php artisan migrate:refresh --seed** - rollback previous migration, migrate and use all seeders
- **php artisan migrate:fresh** - drop all tables in database and then migrate
- **php artisan migrate:fresh --seed** - drop all tables in DB, migrate and use all seeders
- **php artisan make:model YourModelName -c -m** - create model with migration and controller
- **php artisan make:model YourModelName -a** - create model, migration, seeder, factory and resource controller
- **php artisan make:model Task -mfs** - create model with migration, factory and seeder
- **php artisan db:seed --class=TaskSeeder** - run seeder
- **php artisan make:controller HomeController --invokable** - create invokable controller 
- **php artisan make:controller TaskController** - create standard controller

## Laravel imports
### Important imports
- **use Illuminate\Http\Request;** - request
- **use Illuminate\Support\Facades\Validator;** - validator
### Migration and DB imports
 - **use Illuminate\Support\Facades\Schema;** - Schema class. Has methods create (takes table name and callback taking blueprint) and it has method dropIfExists. Both static, of course...
 - **use Illuminate\Database\Schema\Blueprint;** - this is the Blueprint class injected to callback to Schema::create. Example 
 <pre>public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        });
    } </pre>
- **use Illuminate\Database\Migrations\Migration;** - this is used to return new class extends Migration (whole anonymous class that 
has 2 public void methods - up and down: thats how Laravel migrations look like)
- **use Illuminate\Database\Eloquent\Factories\Factory;** - Factory class. Has public method definition in which you specify what 
you expect factory to do each time its run. Example factory class:
<pre>
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => Str::random(10),
        ];
    }
}
</pre>
### String helpers
- **use Illuminate\Support\Str;** - nice tool. For example: ***Str::random(10)*** gives random 10-char string.
## Varia
- **Nowadays migrations in Laravel are anonymous classes** - return new class extends migration { (...) } is something you see after creating migration
- **$table->id();**  - thats how you create primary key in laravel (inside callback to Schema::create inside function up). simple.
- **Schema::dropIfExists('tasks');** - this drops table if such exists. hmmm. might prove useful in some other areas (like custom artisan commands)

## Larvel packages
- **composer require guzzlehttp/guzzle** - guzzle http client
- **composer require laravel/ui** - laravel ui package

## Laravel controllers
- **Invokable single action controller using external API and passing the context to view**
<pre> 
public function __invoke(Request $request)
    {
        $response = Http::get('https://dummyjson.com/products/categories');
        $categories = $response->json();
        return view('welcome', compact('categories'));
    }
</pre>