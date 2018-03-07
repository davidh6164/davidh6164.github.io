---
layout: post
title:  "Accordion Design Patterns"
date:   2018-03-06 23:35:25 -0600
categories: March
---


#### Published March 6 2018 by David Horn


## Contents
* A Word on Design Patterns
* Accordion Basics
* Constructing an Accordion
* Animating Accordions
* Purposes For An Accordion


## A Word on Design Patterns
In web design, certain common design solutions are often thought of as design patterns because they share common characteristics that can be easily applied to any design. If an individual decides to create a new solution for an upcoming project, then there is some risk involved. This new solution could become time-consuming as unknown difficulties in its implementation may appear. Rather than recreating something that already exists, you should use a design pattern. Design patterns can be tweaked, offering the possibility for creative and unique designs. It is the visual design and how a user may interact with a design pattern that determines its effectiveness. 


****

## Accordion Basics
Web pages that display a lot of content may take awhile to scroll through. The constant need to scroll through a web page may cause the user to become disinterested. This content could be creatively condensed without removing any of it at all. This is where an accordion proves useful. An accordion, in web design, is a collapsible and expandable display of content with multiple headings which usually serve as buttons. If there is a web page full of headers and paragraphs, or a navigation menu with lots of links, then that sort of content may benefit from an accordion. 

The accordion design has been given its name due to the concept being the same as the accordion instrument. An accordion instrument expands and contracts as does an accordion web design component. Each section is given a heading with a collapsed body of content that will open when a button or content heading is clicked. 

![Heineken FAQ Accordion]({{"../assets/heineken-faq.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Heineken - FAQ Accordion
</div>

****

## Constructing an Accordion
The most common approach would be to nest several content and heading elements within a parent element. CSS would then be used to create styling between active and inactive states. JavaScript would listen for user events such as when a heading is clicked to reveal the corresponding content to match the heading. Remember, an accordion must have several content titles, expandable content containers, and some sort of indication letting users know which content heading is expanded and which content heading is collapsed. You could also take advantage of what HTML5 has to offer by using the radio input type to construct an accordion using the CSS :checked pseudo-class to serve as the functionality. 

![Delonghi FAQ Accordion]({{"../assets/delonghi-faq-desktop.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Delonghi - FAQ Accordion 
</div>


****

## Animating Accordions
Content titles serve as sub-headings and buttons for accordions. When clicked, these titles will expand or collapse related content. This animation is accomplished through a combination of CSS animation classes which change the display of chosen elements. Once an element is chosen, it moves into the active state. The difference between active and inactive states could be opacity, height, width, and more. 

Let’s take a look at the Beats by Dre product overview web page. There is a vertically-oriented accordion being utilized for the purpose of dynamically displaying information about some of their products. There are icons to indicate to the user whether or not the content below a heading is expanded. Also, the content that is expanded becomes highlighted through the use of the color grey against the white background. It is simple, yet complements the overall web design well and fulfills its purpose. 

![Beats Product Accordion]({{"../assets/beats-productOverview.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Beats By Dre - Product Overview Accordion
</div>


****

### Purposes For An Accordion
Whether it is paragraphs, bullet points, images, or links, accordions can dynamically display content to fit all sorts of designs creatively. Accordion design patterns are not limited to text content, but can serve as an interactive navigation menu or image gallery. Context is very important. An accordion that will serve as a navigation menu will most certainly be implemented and designed differently than an accordion that will serve as an FAQ web page. Not every web design will get use of an accordion design pattern, but that does not mean that they are not useful, it just depends on the project. The accordion may be right if it fits the look and feel of the web page. The theme must be complemented by the design pattern rather than feel like a burden to the user. The design pattern should make navigating through the website easier. 


****

### More Blog Posts
[Exploring Navigation Patterns]({% post_url 2017-07-18-exploring-navigation-patterns %})

[Carousel Design Patterns]({% post_url 2018-02-19-carousel-design-patterns %})

[Custom Counters]({% post_url 2018-02-02-custom-counters %})
