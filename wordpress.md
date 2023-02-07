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
- **Basic files and their meaning:**
    - **index.php - home page**
    - **single.php - detail post page**
    - **page.php - pages powered by it**