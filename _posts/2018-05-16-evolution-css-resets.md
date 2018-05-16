---
layout: post
title:  "Evolution of CSS Resets"
date:   2018-05-16 23:35:25 -0600
categories: May
---


#### Published May 16 2018 by David Horn


### Contents
* Removing Browser Styles
* Handling Browser Inconsistencies
* Personal Styling Preferences 


## Introduction 
CSS resets were introduced years ago intending to solve styling inconsistencies across all major web browsers. This goal was normally obtained by removing browser styles altogether. They removed styling from commonly used HTML elements like headings, button, lists, and more. For example, heading elements may no longer have different font-sizes which would require additional styling from the web developer. Later resets adjusted their intentions to handle browser inconsistencies rather than remove them altogether. Using box-sizing is one example of handling element sizing inconsistencies. Some of the latest resets have taken it a step further by being more opinionated in common element styling rather than handling browser inconsistencies. List elements may be styled within the css reset to look similar across all browsers as well as other elements which seems to complement a design theme. There are plenty of resets out there today as a result of all the different methods.  

****

## Removing Browser Styles 
Early CSS resets removed all user agent styles (browser styles) in an attempt to handle all of the inconsistencies across web browsers. Web developer Eric Meyer released a CSS reset in 2007 known as [meyerweb reset](https://meyerweb.com/eric/tools/css/reset/) and generally removed most browser styles to allow HTML elements, CSS pseudo-classes, and the like to render the same across major browsers. Therefore, if a list element has padding applied in Chrome, but not in other web browsers, the reset would remove padding for button elements to allow them to render equally, without padding. 

<div class="text-center blog-quote">
“The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on. The reset styles given are intentionally very generic.” -Eric Meyer
</div>

****

## Handling Browser Inconsistencies 
CSS resets improved over time to handle cross-browser differences exclusively. This is different from early resets which removed all browser styles. For example, a reset would apply new padding to common elements, so that all browsers styles are consistent instead of eliminated. There are loads of examples like that. Nick Gallagher, another Web Developer, created an improved reset known as [normalize.css](https://necolas.github.io/normalize.css/) which provided consistent design across all browsers without having to remove many default styles. He also added in a popular tweak <b>box-sizing:border-box</b> to all elements which would take margin and padding into consideration for an element’s height and width. This reduces the amount of time taken to re-apply certain styles that you would have otherwise tweaked instead of removed.

****

## Personal Styling Preferences
The latest resets apply some additional styling to commonly used elements. The result of this goes further than handling browser inconsistencies, they apply styling consistent with a design theme. One example of this is Bootstrap 4’s new reset known as [Reboot](https://getbootstrap.com/docs/4.0/content/reboot/). Reboot changes the font-family applied to the body element, margins are altered for headings and lists as well as tables and forms. You could use this reset without Bootstrap, but the changes applied from this reset are better suited for Bootstrap because the theme is complemented by the reset.  

****

## Conclusion
As the tools that we use to develop websites evolve, CSS resets will continue to evolve as well. This is because the number of approaches in utilizing a reset has increased. The original approach for using a reset was to remove user agent styles to improve a website’s cross-browser compatibility in terms of design. Now, resets may try to preserve much of the user agent styles and only alter styles to make designs more consistent or add additional styling to elements that may be commonly used in several projects. Some resets may target every aspect of a website’s design while others only target a handful of elements for re-styling. Others also may add common hacks that are considered beneficial and are widely used such as box-sizing, minor responsive design helpers, or typographic defaults. When it comes to choosing a reset for a project, there is not a superior reset. There are only ones that are favorable to your project. 

****

### More Blog Posts
[Setup MAMP for your Local Server Environment]({% post_url 2018-04-13-setup-local-server %})

[Migrating to Bootstrap 4 From Bootstrap 3]({% post_url 2018-05-02-migrating-to-bootstrap4 %})

[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

