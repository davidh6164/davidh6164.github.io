---
layout: post
title:  "Bootstrap Column Ordering & Hiding"
date:   2017-08-07 23:35:25 -0600
categories: August
---


#### Published August 7, 2017 by David Horn


## Introduction
CSS Frameworks exist to ease the pain of web development and design such as browser inconsistencies, layout, slow production time, and responsiveness across all browsers and device sizes. Consider how Bootstrap utilizes normalize.css, respond.js, and HTML5Shiv polyfills and resets. [Normalize.css](http://necolas.github.io/normalize.css/) is a CSS reset that makes browsers render elements more consistently across all web browsers. [Respond.js](https://cdnjs.com/libraries/respond.js/) is a CSS media query polyfill for older web browser versions. HTML5Shiv is a polyfill which allows older versions of Internet Explorer to recognize unknown HTML5 elements and to allow CSS styles to be applied to these elements. Bootstrap is widely used and is very popular amongst web designers and developers because of its great solutions towards the complexities of web development and design. In this blog post, we are going to be taking an in-depth look at Bootstrap’s column ordering and hiding classes which are essential to building a clean responsive web design. In Bootstrap, column ordering allows web designers to change the order in which columns appear on different screen sizes. While column hiding allows designers to toggle the visibility of a column to help compliment the web design across multiple device sizes.

****

## Column Ordering
Let's briefly discuss Bootstrap’s grid system and how it works to get a clear understanding on how column ordering works. Grids create a layout by housing columns in a series of rows. Rows are then placed within a Container for proper spacing and alignment. Content is finally placed within the columns nested within a row and container. The predefined grid classes such as <b>.container-fluid</b>, <b>.row</b> and <b>.col-xs-12</b> make it easy to tap into Bootstrap’s grid. Bootstrap’s grid system scales up or down twelve columns and is a great layout tool to build mobile-first responsive web designs. Column ordering in Bootstrap is the ability to alter the order in which columns appear. This is great for tweaking designs for specific viewport sizes.

Bootstrap 3’s documentation says this about column ordering: 

<blockquote>
<b>“Easily change the order of our built-in grid columns with .col-md-push-* and .col-md-pull-* modifier classes.”</b>
</blockquote>

Since the Bootstrap framework is mobile-first as part of its responsive web design, you will need to order your columns as you would want it to appear on mobile. If you do not order your columns as you would on mobile, then Bootstrap’s column ordering classes will not work. When this is accomplished, you will then apply the modifier classes <b>col-VX-push-*</b> and <b>col-VX-pull-*</b>. Where <b>VX</b> is equal to a Bootstrap recognized viewport size such as: <b>xs, sm, md, lg</b>. You apply the push modifier class to the initial column you wish to swap places with the pull column. The pull modifier class is applied to the latter column that you wish to swap places with the push column. 

![Bootstrap Grid Columns]({{"../assets/bootstrap-grid.PNG" | relative_url}}){:class="post-sm-4"}
<div class="text-center blog-caption">
Bootstrap’s grid with different size columns
</div>

Taking a look at the image above, we can see a simple grid layout being displayed for medium sized devices and up. As an example, I am going switch the order of the two top columns in the first row by adding the column ordering modifier classes: <b>.col-sm-push-6</b> to the first column and <b>.col-sm-pull-4</b> to the second column. Once these classes are applied, then you can refresh to see the new column order changes. The first column now appears as the second column, and what was originally the second column becomes the first column in order. 

![Bootstrap Grid Column Order]({{"../assets/col-order.PNG" | relative_url}}){:class="post-sm-4"}
<div class="text-center blog-caption">
Bootstrap’s grid using Column Push and Pull Modifier Classes
</div>

****

## Column Hiding 
Column hiding in Bootstrap allows web designers to hide content by taking advantage of CSS’ visibility property. You can apply column hiding classes in a similar fashion as the column ordering classes. When you find a column you want to hide you can apply the hidden modifier class <b>.hidden-VX</b> where <b>VX</b> is equal to any of the recognized Bootstrap viewport sizes: <b>xs, sm, md and lg</b>. These hidden modifier classes are not limited to use on columns and can be used to hide any element for any viewport size. Column hiding can be a good tool to use to create the best responsive web design for a website. 

****

## Conclusion
Bootstrap’s Column Ordering and Hiding are two features that help create a better responsive web design. Even if you decide not to use the Bootstrap framework, these two features can be modified and adapted to your own project to improve on your website’s web design across all browsers and viewport sizes.  

****

### More Blog Posts
[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

[Understanding Git & VCS]({% post_url 2017-09-26-understanding-git-and-vcs %})

[Exploring Navigation Patterns]({% post_url 2017-07-18-exploring-navigation-patterns %})
