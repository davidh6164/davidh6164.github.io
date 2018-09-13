---
layout: post
title:  "Setup MAMP for your Local Server Environment"
date:   2018-04-13 23:35:25 -0600
categories: April
---


#### Published April 13 2018 by David Horn


## Contents
* Why Use a Local Server?
* Setting Up MAMP



## Why Use a Local Server?
As web designers, your job can require interacting with projects that utilize back-end code. Websites that publish blog posts, post articles, sell products, or sell merchandise usually have some back-end language at work which could come in the form of a CMS. CMS stands for Content Management System and provide an admin panel to assist in your website’s design and content. Wordpress and Magento are just two of the many Content Management Systems out there which use PHP, a back-end language.

In order to start designing a theme for a CMS, you need to set up a local server environment. This allows you to use PHP offline. Any HTML file can be a PHP file by merely changing the file extension from .html to .php. If you try to open the PHP file your web browser will only reveal plain text. This is because you need a server to interpret the PHP code. A local server environment can fill this void as a testing ground which can be set up with a server stack. A server stack is a collection of software used to complete the task of setting up and maintaining a server. All you need to know is that the server will interpret your back-end code. Some of the most common server stacks include:

* LAMP/MAMP/WAMP - Linux/Mac/Windows, Apache, MySQL, PHP
* MEAN - MongoDB, ExpressJS, AngularJS, NodeJS
* LEMP - Linux, NGINX, MySQL, PHP

There are also some other leaner or simplified options including Meteor, Spring, Ruby on Rails, and Django which I recommend for everyone to check out, but I will not cover them in this blog post. The server stack I want to focus on is the WAMP stack. 



****

## Setting Up MAMP
You could install and set up the separate parts of the MAMP stack, that is: Apache and MySQL or you could install a program that will do it for you. I prefer the latter approach for testing purposes unless I need complete server customization. I will only be covering how to install and set up [MAMP](https://www.mamp.info/en/downloads/). Once you download and install MAMP, you should start it up and see a screen similar to the image below.

![MAMP Software]({{"../assets/mamp-setup.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
MAMP website and software
</div>

Next, click on Start Servers and both the Apache and MySQL boxes should glow green. You can now click on Open Start Page and should be taken to a localhost URL. If you are not taken to a web page that looks similar to the image below then you may have an issue with your installation. If you are having issues with your installation then I recommend looking for a solution on [Stack Overflow](https://stackoverflow.com/questions/31307482/mamp-issues-server-not-found).

![MAMP Installation]({{"../assets/mamp-installed.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
MAMP installed successfully
</div>

Now that you have your local server setup you can run your PHP code through to be interpreted correctly. You can see your new local website by visiting your localhost URL. If that does not work, then the commonly used port 80 was already in use was setup using a different port. The localhost URL would followed by the port that was opened during the MAMP installation process. It could be a few different ports:

* Localhost
* Localhost:81
* Localhost:8888

Open your .php files and start inserting PHP code into your HTML code by using the proper opening <? php and closing ?> tags. You can now see your PHP code in action or utilize a CMS such as Wordpress or Magento and create or test your own theme. You can find out how to do this in my other blog posts.

****

### More Blog Posts
[CSS Preprocessors - Why Use SASS?]({% post_url 2018-03-23-preprocessor-sass %})

[Carousel Design Patterns]({% post_url 2018-02-19-carousel-design-patterns %})

[Image Overlays]({% post_url 2018-04-06-image-overlays %})
