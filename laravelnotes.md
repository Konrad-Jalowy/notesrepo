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