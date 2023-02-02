## Create Laravel Bootsrap project:
```sh
composer create-project --prefer-dist laravel/laravel:^9.0 laravel9-bootstrap5-vite
```
**create laravel bootstrap project** 
```sh
php artisan serve
``` 
**run the app**
```sh 
composer require laravel/ui
```
**install laravel ui**
```sh
php artisan ui bootstrap
```
**create bootstrap scaffolding**
```sh
php artisan ui bootstrap --auth
```
**create bootstrap scaffolding with auth**
### package.json for project:
```json
{
    "private": true,
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "development": "mix",
        "watch": "mix watch",
        "watch-poll": "mix watch -- --watch-options-poll=1000",
        "hot": "mix watch --hot",
        "prod": "npm run production",
        "production": "mix --production"
    },
    "devDependencies": {
        
        "@popperjs/core": "^2.11.6",
        "axios": "^1.1.2",
        "bootstrap": "^5.2.3",
        "laravel-vite-plugin": "^0.7.2",
        "lodash": "^4.17.19",
        "postcss": "^8.1.14",
        "sass": "^1.56.1",
        "vite": "^4.0.0"
    }
}
```
### vite.config.js for project:
```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/app.js',
        ]),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
});
 ```
 ### resources/js/app.js for project:
 ```js
 import './bootstrap';

import '../sass/app.scss'
```

### welcome.blade.php for vite:
```php
@vite(['resources/js/app.js']) 
```

npm run build </br>
**run vite**
