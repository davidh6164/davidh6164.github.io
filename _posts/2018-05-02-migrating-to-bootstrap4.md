---
layout: post
title:  "M"
date:   2018-05-02 23:35:25 -0600
categories: May
---


#### Published May 02 2018 by David Horn


### Contents
* 5-Tier Grid System
* Using REM Units
* New Reset: Reboot
* Cards
* Improved Column Ordering
* More Utility Classes


## Introduction 
Bootstrap 4 has a lot of changes from Bootstrap 3 without having to overhaul the syntax and without breaking websites. There are new components pushing some of the older components into the dust bin. Cards have replaced panels and thumbnails while offering a greater range of versatility. The grid system has more breakpoints to offer a wider array of designs targeting smaller devices. Let's check out some of the other changes going from Bootstrap 3 to Bootstrap 4.

****

## 5-Tier Grid System 
#### Formerly 4-Tier Grid System
The new grid system in Bootstrap 4 now uses flexbox to include vertical and horizontal column alignment options. This gives developers a way to further customize a grid layout. The new 5-tier system utilizes .sm, .md, .lg, and .xl size modifiers to introduce another breakpoint. That's right, say so-long to the .xs modifier. This does not mean that smaller devices are not supported, but that the size modifiers have been changed to increase the total number of breakpoints in the responsive design to support a wider variety of designs for smartphones and other small devices. You may believe that with the removal of the .xs modifier class that the media queries have been altered to support extra large screens rather than small screens, but that is not the case.

Bootstrap 3 relied on the 4-tier grid system which uses .xs, .sm, .md, and .lg. The media queries smallest breakpoint was at 768px in width which minimized possible designs for smartphones and did not distinguish between portrait and landscape modes. Bootstrap 4 has five breakpoints and its smallest breakpoint is now 544px. Since Bootstrap 4 has removed the .xs size modifier from the grid system, the .col class will cover all devices. 

****

## Using REM Units 
#### Formerly Pixel Units
The primary unit for font-sizing in Bootstrap 3 is pixels (px) while Bootstrap 4 has adopted the use of REM (rem). This means that all font sizes are relative to the root element. Pixels are easy to understand and simple to work with, but they lack the ability to scale with viewpoint sizing as rem does. This is because pixels are absolute lengths while REM is based off of relative lengths which specify a length relative to another length property. Pixels could be used as a fallback value for older Internet Explorer browser versions, or you could opt to use a polyfill if you are using rem units. 

Since rem units are relative to the root element, you will find that the default value for 1rem is 16px for most browsers. Bootstrap 3 had a font-size of 14px for its root element, but in Bootstrap 4 it has changed to 16px to match the browser’s default value. Rem units are different from em units because em units are relative to the font size of their own element, not the root element like rem. If you tried to use em values over rem values throughout your project you may have unexpected results. When you use rem units, all the sizes are referenced from the root font size so you will deal with less individual cases of font-sizing for your style declarations. The short story is: it is very easy to lose track of nesting and get unexpected results with em units, so use rem units. 

Some developers find an issue with using rem for font sizing because the values can be somewhat difficult to remember. It is easy to use once you know the exact value of the root element’s font size. Since Bootstrap 4 uses 16px, we will use that as our base for 1rem unit. If you need a smaller text size, say maybe 8px, then you would compare 16px to 8px which is half the value. Therefore, if you wanted a smaller text size that was similar to 8px then you would use 0.5rem. You could easily scale the font up with 1.5rem or 24px and 2rem or 32px. 

****

## New Reset: Reboot [Formerly Normalize.css]
Resets in web development have been around for several years. Web developers like Eric Meyer, Paul Irish, and Nicholas Gallagher have all used and created stylesheets with the sole purpose of resetting all browsers to look the same. This was great as browsers had their own code specifications at the time which caused design problems. There was an issue with these early resets, they did not have any base styles which would be consistent across all browsers. Instead the early reset stylesheets started clean where each element had little to no differences such as heading elements and the like. Eventually, front-end developers started to create their own base styles on top of resets which solved the issue. Some of the most popular resets created and used are normalize.css, santize.css, and now reboot.css. 

![Normalize CSS Reset]({{"../assets/bs4-cards.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
CSS Reset - Normalize.css by Nicholas Gallagher
</div>

Reboot.css is a reset stylesheet created by team Bootstrap. The new reset can be seen as an upgrade to normalize.css which was used in Bootstrap 3. For instance, box-size:border-box; is now default on all elements which eases the process of understanding the box model when it comes to all the various properties that can directly affect the sizing of elements. Also, reboot.css utilizes touch-action:manipulation; on elements to decrease the delay between touch actions and the element’s response. These are only a few adjustments that make reboot.css a better fit for the modern web.

****

## Cards 
#### Formerly Wells, Panels, and Thumbnails
Another amazing addition to Bootstrap 4 is the card component. Cards are meant to replace the functionality and design that used to be provided by panels, wells, and thumbnails in Bootstrap 3. This is partly because of the adoption of flexbox to provide easier alignment. Think of cards as content containers nested within a larger layout container which have a ton of customization possibilities. They usually have a different background color than the website’s background to help it stand out and are shaped like squares and rectangles, hence the name ‘card’. Cards in Bootstrap 4 initially come with minimal styling when compared to Bootstrap 3’s panels and thumbnails so that you can expand on the design with tons of custom properties that build upon the minimalist design. 

![Bootstrap 4 Cards]({{"../assets/css-resets.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Bootstrap 4 Cards
</div>

****

## Improved Column Ordering
Bootstrap 3 uses the classes of .col-VX-push-* and .col-VX-pull-* in which VX stands for a size modifier and you match the column size (1-12) to push a column further down the row towards the end and pull a column to the beginning of the row. This could get complex when you are pushing and pulling multiple columns to fit a certain design at certain breakpoints. Bootstrap 4 recognized the mess this could create and has offered a great solution. Now, you can use .order-first, .order-last, and .order-* to directly control the visual order of your grid’s columns. If that is not enough, you can still add size modifiers to set the column order by breakpoint such as .order-sm-6. You can also use .order-first which has an a column order of -1 and .order-last which has a column order of 13 whereas .order-* contains values 1-12. 

****

## More Utility Classes
Bootstrap 4 has additional utility classes for forms, buttons, text, and images that did not previously exist in Bootstrap 3. These utility classes are more bare and basic in design to give a subtle appearance. The purpose of this is to minimize the framework’s impact on the design to give web designers more freedom to customize the various bootstrap components. I will not go over the hundreds of utility classes here, but encourage you to check out the Bootstrap 4 documentation to view the list. 

****

## Conclusion
There are also some other major changes in Bootstrap 4 including dropped browser support for Internet Explorer 9 and iOS6. Bootstrap 4 will support IE10+ and iOS 7+, but if your website requires support for these browser versions then it is recommended you use Bootstrap 3. These are just some of the changes that have occurred with Bootstrap 4. There are too many changes to go over in detail in one blog post, so I encourage everyone to check out the official [Bootstrap 4 documentation](http://getbootstrap.com/docs/4.1/getting-started/introduction/) for all the information. 

****

### More Blog Posts
[Setup MAMP for your Local Server Environment]({% post_url 2018-04-13-setup-local-server %})

[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

[Carousel Design Patterns]({% post_url 2018-02-19-carousel-design-patterns %})
