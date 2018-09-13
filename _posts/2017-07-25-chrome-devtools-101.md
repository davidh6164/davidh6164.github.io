---
layout: post
title:  "Chrome DevTools 101"
date:   2017-07-25 23:35:25 -0600
categories: July
---


#### Published July 25, 2017 by David Horn


## Contents
* Color Picker
* Inspect Animations
* CSS & JS Coverage Tool
* Capturing Screenshots
* Visual Shadow Editor (for Box & Text Shadows)
* Empty Cache and Hard Reload
* Easing Editor


****

## Introduction
There are many features and tools within Chrome DevTools, it is just a matter of figuring out which of these could work for you and when. Some of the tools and features include Inspecting Animations, Coverage Tool, Screenshot capturing and editors for shadow, color and speed curves. The Google Chrome Browser allows designers to inspect and debug web designs effortlessly. This blog post will attempt to cover some of the more basic tools and features intended for Web Designers. 

****

## Color Picker 
You can activate the Eyedropper tool to pick colors off of websites and local files, choose colors, and to input hex codes. Another neat feature is you can add RGBA values or hex codes with an alpha value which allows you to add opacity to the color. To activate this tool, click the box just to the left of a CSS color property value (wherever a color appears in CSS whether it is color, background-color, border-color, etc.) and now the Google Chrome DevTools Color Picker is open. This is excellent for debugging a web design’s color. 

![Top Navbar]({{"../assets/final-color-picker.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Los Chingones Website
and Chrome DevTools Color Picker
</div>

****

## Inspect Animations 
Inspecting animations is simple with Chrome DevTools. You can open the animations panel which provides tools to slow down animations and see which CSS properties are being animated such as Opacity and Transform. Opening the Animations panel is as easy as clicking the  (three dot icon) above the Event Listeners option in the bottom right-hand corner. If you follow along the option pane that says Elements, Console, sources, network, timeline, Security, and Audits then you will find the icon at the far right. 

![Top Navbar]({{"../assets/final-inspect-animations.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
 Image of Zenman Website  
and Chrome DevTools Inspect Animations pane
</div>

****

## CSS & JS Coverage Tool
The CSS & JS Coverage Tool allows developers and designers to find used vs. unused CSS & JS code. If you are wondering how much code is used when users access and interact with your website, then you can use this tool to help reduce your asset’s file sizes. Start by opening up the Coverage pane near the Animations pane. Click on the   (three dot icon) left of the panes. Press record, refresh and then use the website as you would suspect a user would then pause the recording. There should be a table of resources with columns for URLs, file type, and a green/red color bar illustrating the amount of used and unused code. You can click on one of the URLs for the assets and reveal the file’s code in the Sources panel with an in-depth view of which lines of code executed. 

![Top Navbar]({{"../assets/final-coverage-tool.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
 Image of Klik Denver Design Agency Website
and Chrome DevTools Sources panel and Coverage pane
</div>

****

## Capturing Screenshots
Capturing full page screenshots can be useful and a time-saver as it’s accomplished in the browser. Another way would be to take individual screenshots of a web page and then paste the screenshots together using an Image Editor. To clarify, a full page screenshot is a screenshot that captures a web page from top to bottom including the range of scrolling space. As of version release 59, the Google Chrome browser has the option included. 

First, open Responsive Design Mode. Observe the small option menu icon to the right that will provide a dropdown menu when clicked. There will be two particular options that we are interested in: Capture Screenshot and Capture Full Size Screenshot. 


![Top Navbar]({{"../assets/final-capture-screenshot.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
 Image of Vanamco Ghostlab Website
and Chrome DevTools Capture Screenshot option
</div>

****

## Visual Shadow Editor 
There is a Visual Shadow Editor that appears in the Styles pane when either the CSS Box shadow or Text Shadow properties are used in a stylesheet. You can click the small box next to the property values to open the Visual Shadow Editor. The editor allows the changing of the X & Y offset values, Blur values, Spread values and the shadow direction (inset/outset).

![Top Navbar]({{"../assets/final-visual-shadow-editor.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
 Image of Urban Ape (Portfolio of Jack Freeman) Website 
and Chrome DevTools Visual Shadow Editor
</div>

****

## Empty Cache and Hard Reload
Empty Cache and Hard Reload is a useful feature when updating a live website and you need the latest changes to be visible to you. This is a useful feature because browsers cache as much front end resources as possible such as JavaScript files, CSS stylesheets and images. The primary reasoning for browsers caching resources is to improve loading time for users. When changes are made to a live website, it is not immediately visible due in part due to caching. This can be troublesome if you are working on a live website, but can be remedied by using the Empty Cache and Hard Reload option which will clear the browser’s cache for a specific page. You can access this option by opening Chrome DevTools CTRL+SHIFT+i then right-clicking the Refresh icon in the browser. You should see a dropdown menu appear with three options. You will not be able to access these options without opening opening Chrome DevTools first. 

![Top Navbar]({{"../assets/final-clear-cache-reload.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
 Image of Lexus Website and Chrome DevTools Empty Cache & Hard Reload
</div>

****

## Easing Editor
If there is a speed curve value (linear, ease-in, ease-out, ease-in-out, cubic-bezier) in the CSS stylesheet for a transition, animation-timing-function or other property, then you can open the Easing Editor by clicking the small purple icon next to the property value. The Easing Editor allows you to preview what the speed curve looks like, preview other and you can also graphically alter the values to better suit the animation. 


![Top Navbar]({{"../assets/final-easing-editor.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
 Image of Machios Food Website and Chrome DevTools Empty Cache & Hard Reload
</div>

****

## Conclusion
Remember, there are many features and tools within Chrome DevTools.  The Google Chrome Browser allows designers to inspect and debug web designs effortlessly. Check out the Google Developer Documentation for additional information about DevTools. You should also check out DevTips(https://umaar.com/dev-tips/126-css-tracker/) which you can visit to read short posts about Chrome’s features. I hope this blog post covered some of the more basic tools and features intended for Web Designers. 

****


### More Blog Posts
[Effective Kanban for Web Design]({% post_url 2017-08-29-kanban-for-web-design %})

[Conditional Comments At A Glance]({% post_url 2017-12-21-conditional-comments %})

[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})



