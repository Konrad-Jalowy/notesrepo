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

## Laravel imports
### Migration imports
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

## Varia
- **Nowadays migrations in Laravel are anonymous classes** - return new class extends migration { (...) } is something you see after creating migration
- **$table->id();**  - thats how you create primary key in laravel (inside callback to Schema::create inside function up). simple.
- **Schema::dropIfExists('tasks');** - this drops table if such exists. hmmm. might prove useful in some other areas (like custom artisan commands)
