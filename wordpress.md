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