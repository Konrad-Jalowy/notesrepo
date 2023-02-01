## Create Laravel Bootsrap project:

> composer create-project --prefer-dist laravel/laravel:^9.0 laravel9-bootstrap5-vite
**create laravel bootstrap project**
> php artisan serve
**run the app**
> composer require laravel/ui
**install laravel ui**
> php artisan ui bootstrap
**create bootstrap scaffolding**
> php artisan ui bootstrap --auth
**create bootstrap scaffolding with auth**
### package.json for project:
<pre>
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
</pre>
### vite.config.js for project:
<pre>
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
 </pre>
 ### resources/js/app.js for project:
 <pre>
 import './bootstrap';

import '../sass/app.scss'
  </pre>

### welcome.blade.php for vite:
<pre>
@vite(['resources/js/app.js']) 
</pre>

> npm run build
**run vite**