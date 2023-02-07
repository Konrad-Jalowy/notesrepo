## Wordpress notes
### Theme Creation:
- **Go to wp_content/themes**
- **Create directory for your theme and go there**
- **Create 3 files:**
    - **index.php - self-descriptive**
    - **style.css - required annotations + styles**
    - **screenshot.png (optional) - screenshot for your theme**
- **Annotations for style.css (top level of the file):**
```css
/* 
Theme Name: Fake Theme
Author: Me
Version: 1.0
*/
```
- **Check if works - you can put whatever you want in index.php. Check if wordpress bloginfo() function works:**
```php
<?php
bloginfo('name');
?>
```
## Basics
### Loop over posts:
- **have_posts() and the_post() - looping over posts test:**
```php
<?php
while(have_posts())
{
    the_post(); 
    echo "Post found!";
}
?>
```
- **the_title() function:**
```php
<?php
while(have_posts())
{
    the_post(); 
    ?> <h2>Title: <?php the_title()?></h2>
    <?php
}
?>
```
- **the_content() function for post body:**
```php
<?php
while(have_posts())
{
    the_post(); 
    ?> <h2>Title: <?php the_title()?></h2>
    <p><?php the_content()?></p>
    <hr>
    <?php
}
?>
```
- **the_permalink() - link for the detail page:**
```php
<?php
while(have_posts())
{
    the_post(); 
    ?> <h2>Title: <a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
    <p><?php the_content();?></p>
    <hr>
    <?php
}
?>
```
- **single.php - a page for detail page of a post:**
```php
<?php
while(have_posts())
{
    the_post(); 
    ?> 
    <h1>Powered by single.php!</h1>
    <h2>Title: <?php the_title();?></h2>
    <p><?php the_content();?></p>
    <?php
}
?>
```
- **header.php - file for a header:**
```php
<h1>Hi from header.php!</h1>
```
- **footer.php - file for a footer:**
```php
<footer>
    <p><strong>Hello From footer.php!</strong></p>
</footer>
```
- **get_header() and get_footer() functions to output header and footer anywhere in WP:**
```php
<?php
get_header();
while(have_posts())
{
    the_post(); 
    ?> <h2>Title: <a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
    <p><?php the_content();?></p>
    <hr>
    <?php
}
get_footer();
?>
```
- **wp_head() - in our header.php file:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <?php wp_head();?>
</head>
<body>
<h1>Greetings from header.php</h1>
</body>
</html>
```
- **functions.php - adding styles:**
```php
<?php 
function load_files(){
    wp_enqueue_style('main-style-whatever', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'load_files');
```

- **Basic files and their meaning:**
    - **index.php - home page**
    - **single.php - detail post page**
    - **page.php - pages powered by it**
    - **header.php - header file accessible by get_header() function**
    - **footer.php - footer file accessible by get_footer() function**
    - **functions.php - internal functions and conf**