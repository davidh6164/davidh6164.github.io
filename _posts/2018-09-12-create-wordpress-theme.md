---
layout: post
title:  "Create a WordPress Theme"
date:   2018-09-12 12:35:25 -0100
categories: September
---


#### Published September 12 2018 by David Horn



### Purpose
To learn how to create one’s first custom WordPress theme.



### Contents
* What is WordPress?
* Installing WordPress
* Design Your Own Theme



## What is WordPress?
WordPress is a Content Management System famous for its blogging capabilities. Since its inception, it has expanded to support a variety of other features including building an online marketplace.You can select from a number of free or purchasable themes, but if you want your website to stand out you should create your own custom WordPress theme. Before you try to download and install WordPress you should check out my blog post about installing and setting up a local server environment using MAMP.


****

## Installing WordPress
Go to the [WordPress downloads page](https://wordpress.org/download/) to download the latest version of WordPress. After the download finishes, unzip the folder and place the contents of this unzipped folder into the directory of your local server environment. 

Next, start up your local server environment. In this case I am using MAMP. Since this version of MAMP does not come with phpMyAdmin installed, I installed SQLYog as well. If you have not done so, install SQLYog if you on Windows or SequelPro if you are on Mac. 

<div class="text-center blog-quote">
Tip: If you are having issues starting up your MAMP local server environment, then try resetting your Apache and MySQL ports by editing your MAMP preferences. Once that is completed you can now try restarting the MAMP local server environment.
</div>  

You can access your databases by logging into your SQL program and accessing host <b>localhost (or 127.0.0.1)</b> with the username and password <b>root</b>. Once you are logged in you can access your databases and create new ones. Create a new one and give it a name related to your WordPress theme.

Now it is time to configure your WordPress settings in the <b>wp-config-sample.php</b> file of your WordPress directory. Before you start making any of the changes below, save a separate copy titled <b>wp-config.php</b>. Next, change the database name, username, and password. The database name should match the name you just gave your new database and use <b>root</b> for both your database username and password. You may also have to edit the database host value as well. The text lines in the file should match the text below:

{% highlight php linenos %}
/** The name of the database for WordPress */
define('DB_NAME', 'yourDatabaseName');
/** MySQL database username */
define('DB_USER', 'root');
/** MySQL database password */
define('DB_PASSWORD', 'root');
{% endhighlight %}

Make sure your database host value matches your MySQL connection. If you are using a custom port and not the default port of 3306 such as 8889 for example, then you will have to include that in the database host value like such: <b>localhost:8889</b> to properly connect the MySQL database for your wordpress theme.There is a few more lines of code you must edit and that is the table prefix and the various authentications. Find the table prefix and change it from: 

{% highlight php linenos %}
$table_prefix  = 'wp_';
{% endhighlight %}


To anything that contains a combination of letters, numbers, and underscores. This is for security purposes. Here is an example listed below:

{% highlight php linenos %}
$table_prefix  = 'sh3782_39fshgltt';
{% endhighlight %}

Next find and replace your authentication phrases <i>“put your unique phrase here”</i> to the generated code from [WordPress’ key generator webpage](https://api.wordpress.org/secret-key/1.1/salt)

After you save this file you have successfully set up WordPress. Open up your browser to your localhost, you should be redirected to <b>localhost/wp-login.php</b> and you can now login to your WordPress account!


****

## Design Your Own Theme
Applying a theme to a WordPress website is simple. Once the theme folder is in the appropriate directory, it will appear in the admin panel. The great thing about designing your own WordPress theme is that you can design using any framework or CSS preprocessor that you prefer. Your WordPress theme and all of its contents can be found in the <b>wp-content > themes</b> directory. Here you can find some default WordPress themes such as <b>twentyfifteen</b>. Create a new folder here and give it a name, this is the directory for your own theme. For example purposes my theme directory is titled <i>“yourDatabaseName”</i>. The main components of any WordPress theme is an <b>index.php</b> file and a <b>style.css</b> file. 

<div class="text-center blog-quote">
Tip: you must place your <b>index.php</b> template file and
your <b>style.css</b> stylesheet in the same directory.
Sub-directories in theme folders are meant for the use
of sub-themes. 
</div>

If you ever get confused, the file path for your theme and it’s files are as follows: <b>WordpressX.X.X > wp-content > themes > yourDatabaseName -> index.php, style.css</b>. You can now edit these files to build out your theme’s layout and home page. 


****

### More Blog Posts
[Setup MAMP for your Local Server Environment]({% post_url 2018-04-13-setup-local-server %})

[Let's Discuss UI: Image Overlays]({% post_url 2018-04-06-image-overlays %})

[Optimize Images For The Web]({% post_url 2018-09-11-optimize-images %})

