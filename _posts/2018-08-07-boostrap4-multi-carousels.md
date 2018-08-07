---
layout: post
title:  "Bootstrap 4 Multi-Item Carousels"
date:   2018-08-07 12:35:25 -0600
categories: August
---


#### Published August 07 2018 by David Horn

### Purpose
Understand the different possible design implementations for multi-item carousels and showing how to create multi-item carousels using Bootstrap 4.


### Contents
* Default Carousels
* Design Examples
* Utilizing Grid
* Displaying Multiple Slides

## Default Carousels
Bootstrap 4 carousels are single slides by default only revealing one piece of content per slide. Using carousels developers and designers can dynamically display media for users such as images and video and add various customizations such as carousel indicators, captions, controls, and more. Animation customization can be done just as easily if you want to slow the animation down or change the animation altogether. 

![Bootstrap 4 Default Carousel]({{"../assets/bootstrap-default-carousel.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Bootstrap 4 Default Carousel
</div>

Let’s take a look at the [Bootstrap 4 Documentation](https://getbootstrap.com/docs/4.0/components/carousel/) to see how to setup a basic carousel:

{% highlight html linenos %}
 <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
 </div>
{% endhighlight %}

As you can see a carousel is constructed using containers to house the carousel, the “inner” carousel, and the carousel items. The items are placed one after the other in the inner carousel container and all, but the active item are displayed at one time normally. 

You can get creative and add your own overlays or filters, additional captions and text, as well as using image thumbnails as carousel indicators to create a sort of Thumbnail Carousel. Heck, you can even utilize the CSS clip-path property for even more design options. This is fine for out of the box customization, but wouldn’t it be neat if more carousel items could be displayed at one time? This tweak could make carousels even more adaptable for various web designs opening the possibilities for even more customization. Let’s take a look at some design examples below. 

****

## Design Examples
Image Carousels are not always a necessary design component. Sometimes all your website needs is a static hero image or a large full width image instead of multiple rotating images. It depends on your design needs, you may not need an carousel component for your landing page. It would be nice to display multiple items or categories in a dynamic manner though, let's take a look at some examples below.

On any Amazon product page you will find a section with a carousel titled “Sponsored products". This is great for previewing several item listings for customers who are viewing on larger screens. Even if the user is viewing the product web page on their smartphone it can be shrunk to size without losing much readability because there is minimal text content. 

Let’s take a look at Disney’s game web page which displays even more items in their image carousel. We saw this design last time in my previous blog post, [“Diving Into Carousel Design Patterns”](http://davidcodes.net/february/2018/02/20/carousel-design-patterns.html) where we explored the possibilities of dynamically displaying categories for your website’s content.

![Disney Games Carousel]({{"../assets/multi-item-carousel.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Disney Games Multi-item Carousel
</div>

The last example I want to look at is an example I created myself on [codepen](https://s.codepen.io/davidh6164/debug/rrwPGR/vWMRwaaRnbEr) which gives product previews for multiple jackets. As you can see, the range of design and even the scope of a carousel’s purpose can be vast. Now that we covered several different design examples, let’s take a look at the several different ways developers code a multi-item carousel. 

![David Codes Codepen]({{"../assets/david-multi-carousel.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
David Codes Codepen Multi-item Carousel
</div>

****

## Utilizing Grid
You can easily add a grid within each carousel item to show multiple items per carousel slide. In my codepen design example I added four items per slide to create a multi-item carousel. This is just one of several ways and you may find that this way may not work for your design needs as all of the items per slide are rotated at once. 

****

## Displaying Multiple Slides
If you wish to display multiple carousel slides at once to rotate them individually, then you will need to add some jQuery code that alters the carousels. Since we are using Bootstrap 4 the code required to change the carousels will be different from the code in Bootstrap 3 such as the slide animation and so forth. I didn’t create the following code, but the original author has been hard to pinpoint so I will post my findings of how to change a bootstrap 4 carousel into a multi-item carousel: 

{% highlight js linenos %}
  $('.multi-item-carousel').carousel({
  interval: false
});
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
.carousel-inner .carousel-item-right.active,
.carousel-inner .carousel-item-next {
  transform: translateX(33.33%);
}

.carousel-inner .carousel-item-left.active, 
.carousel-inner .carousel-item-prev {
  transform: translateX(-33.33%)
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left{ 
  transform: translateX(0);
}
{% endhighlight %}

First, you can prevent the default carousel rotation. Then, create a copy of the next carousel slide to be displayed next to the current carousel slide. Finally, you can create another copy of the third item in rotation to display a total of three items at once in a carousel. That is all there is to do to create a multi-item carousel. Remember, carousels can be unconventional and its customizability allows for an ever widening range of designs and implementations as the web evolves. As a web designer, you shouldn’t always add every possible design component that is considered modern, rather you should utilize any design component that fits best for your design requirements.  

****

### More Blog Posts
[Effective Kanban for Web Design]({% post_url 2017-08-29-kanban-for-web-design %})

[Evolution of CSS Resets]({% post_url 2018-05-16-evolution-css-resets %})

[Setup MAMP for your Local Server Environment]({% post_url 2018-04-13-setup-local-server %})

