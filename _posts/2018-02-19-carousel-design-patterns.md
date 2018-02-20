---
layout: post
title:  "Diving into Carousel Design Patterns"
date:   2018-02-19 23:35:25 -0600
categories: February
---


#### Published February 19,2018 by David Horn


## Contents
*Basic Carousel
*Carousel Captions & Overlay
*Carousel Controls
*Carousel Indicators
*Carousel Timers
*Multi-Item Carousels
*Video Carousels


****

## Introduction

A carousel is a component that is useful for cycling through elements. Another name for a carousel is slideshow. Carousels are great for when you want to show your users a set of media without the need of scrolling a web page. The user’s attention can be directed towards the carousel component which utilizes animations to transition between each carousel item. Media on websites are becoming more common as the average user has a faster internet connection and a faster home computer.

  Carousels are designed by arranging a set of items on a horizontal line where each item slides into view. You can optionally add carousel indicators which tells the user what carousel item they are viewing, or carousel controls which gives users control on how they view carousel items. There are plenty of variations to customize a carousel component.


****

## Basic Carousel

Creating a basic carousel component is relatively simple. Start by creating a element which will serve as a container for the various parts of a carousel component. The carousel container houses the container for slide items, individual slides, and any optional customizations such as the addition of indicators, controls and timers.

	Next, create another element nested within the carousel container which will serve as a container for the carousel slide items. Individual slide items will be placed within this container, but optional customizations will not be placed within the slide container. Those are placed within the carousel container as a sibling element of the slide container.

Now individual slides can be added in this carousel slide container which is nested inside the carousel container. Individual carousel slides can be added in by creating elements within the carousel slide container.


![Basic Carousel]({{"../assets/carousel-controls.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Lonely Planet Homepage - Basic Carousel
</div>

****

##CSS Carousel
You can create a basic carousel without javascript, by utilizing the CSS pseudo-class of checked and the HTML input type of radio. When the carousel controls are clicked, the next set of carousel controls comes into view along with the next carousel item. You can use opacity and transform properties to create the transition animation between items.

****

##JS Carousel
You can create a more complex carousel using javascript, which is better for improved transition animations or complex designs. There are plenty of frameworks and libraries which ease the pains of creating a beautiful carousel. Some examples include: [Slick.js](http://kenwheeler.github.io/slick/), [Flickity.js](https://flickity.metafizzy.co/), [Siema.js](https://pawelgrzybek.com/siema/), and [Glide.js](http://glide.jedrzejchalubek.com/).

****

## Carousel Captions & Overlay
	Captions can be added as an overlay or outside of the carousel container. The more creativity you can add to your carousel, the more engaging it will appear to your users. View the image examples of carousels above and below to discover some unique styles to apply to captions for your carousels.

	You can also add filters as overlays to the carousel items by using CSS filters or by using the background property with a Red-Green-Blue-Alpha (RGBA) color value. In addition to using a RGBA color value, you can use linear-gradients to create a more color specific filter for the carousel items.


![Carousel Captions]({{"../assets/carousel-captions.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Marvel Comics Webpage - Carousel with Captions
</div>

****

## Carousel Controls
 	If the user wants to view the rest of the items on the list, he or she must click one of the navigational controls such as an arrows pointing both left and right. The image example above from the website Lonely Planet, shows how you can also use sides of each carousel item as carousel controls to navigate left or right within the carousel component.

Once one of the controls is clicked, the next item is revealed depending on the animation. Typically, a transform or opacity animation reveals the requested item and brings the item into focus. Users may cycle through the items which is why it is called a carousel.


![Carousel Controls]({{"../assets/basic-carousel.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Android Homepage - Carousel with controls
</div>

****

## Carousel Indicators
	Carousel indicators serve as a sort of pagination for the carousel. They let you know what carousel item you are viewing and offer a quick jump back to any one of the carousel items. Carousel indicators range from colored bullets to thumbnail images which allows for a wide array of customization. Not all carousels are designed to include some variation of carousel indicators, but the option is available as they are commonly understood by users, helping them navigate through the carousel with ease.

![Carousel Indicators]({{"../assets/carousel-thumbnails.jpg" | relative_url}}){:class="post-lg-2"}

****

## Carousel Timers
	Carousel timers are a part of the carousel component that relay the amount of time to view each carousel item. These range from simple circle timers, line timers, and other design methods that could possibly indicate some sort of time that is elapsing while viewing the carousel.

****

## Multi Item Carousels
	Carousels can do more than display one item at a time, you can display several items simultaneously. This may be suitable if you have categories for your users to engage in, or if you wish to show a number of items that are for sale.

![Multi Item Carousels]({{"../assets/multi-item-carousel.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Disney Games - Multi Item Carousel
</div>

****

## Video Carousels
	Media for a carousel component are not limited to images and text, you can include video into your carousels as well. This is great for showcasing products or highlighting certain features.

![Video Carousel]({{"../assets/video-carousel.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Steam Borderlands 2 webpage - Video Carousel
</div>

****

## Conclusion
Carousels are intended to colorfully display information to visitors and engage them through animations. Add a combination of features to your carousel that will complement your design and creatively convey your message. There are plenty of different methods for creating your own carousel or slideshow component whether you are using javascript or CSS only. Frameworks and libraries can ease the pains of creating your own carousel from scratch.

****


### More Blog Posts
[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

[Understanding Git & VCS]({% post_url 2017-09-26-understanding-git-and-vcs %})

[Bootstrap Column Ordering]({% post_url 2017-08-07-bootstrap-col-order %})
