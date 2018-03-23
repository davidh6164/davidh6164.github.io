---
layout: post
title:  "Create A Parallax Effect Using CSS"
date:   2018-03-22 23:35:25 -0600
categories: March
---


#### Published March 22 2018 by David Horn


## Contents
* Syntax & Browser Support
* JavaScript Options
* Examples & Uses
* Avoid Scroll Hijacking



## Introduction
There are a number of common web design tasks which had relied on JavaScript, but as of recently these certain tasks can now be handled using minimal lines of CSS code. The specific task that I want to discuss today is the Parallax Effect. A parallax effect is where images appear to scroll at a different rate than the surrounding page content thus creating an optical illusion. Since JavaScript has been the previous approach for creating the parallax effect you can find plenty of JavaScript libraries covering this effect, but I am going to show you how to replicate it using only CSS. 


****

## Syntax & Browser Support
There are multiple ways to create a parallax effect, whether you are using large background images or layering multiple elements along the z-axis, you can recreate the effect using only CSS. In this example, I am going to show how to create a basic parallax effect with background images. 

First, create a container element which will serve as a sort of frame for the image with set dimensions. Go ahead and set a min-height value so the image can be properly displayed. Next, we will be adding values for various background properties to help create the parallax effect. Set the background-attachment to fixed, this will set the image in place within its container element. Then set background-position to center, this will center the image within its element. Also set background-repeat to no-repeat, this will prevent the image from repeating along the x or y-axis. Finally, set background-size to cover, this will spread the image out across its container element. The code is provided below for your convenience. 

{% highlight html linenos %}
<div class="bg-1"> </div>
{% endhighlight %}

{% highlight css linenos %}
.bgimg-1 {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/img/image.jpg");
  min-height: 80vh;
}
{% endhighlight %}

The background options, or properties that affect background-image are well supported by modern web browser versions and can be used freely without the worry of many vendor prefixes. It is also wise to use a fallback color in case the image fails to load. 

You can create more complex parallax effects using multiple elements stacked on top of the z-axis. It requires transforms, perspective, and scaling CSS properties, but won’t be covered here. 

****

## JavaScript Options
As browser support for various CSS3 properties widens, the ability to implement different web design features using only CSS rather than JavaScript increases. That being said, there are still users who use older web browsers that you may wish to support that do not support certain CSS3 properties. These users can be supported by using JavaScript instead. There are plenty of great JS libraries that allow you to implement the Parallax Effect such as [Simple Parallax Scrolling](http://pixelcog.github.io/parallax.js/) , [Matthew Wagerfield’s Parallax.js](http://matthew.wagerfield.com/parallax/) , or [Dixon & Moe’s Rellax](https://dixonandmoe.com/rellax/). There is plenty of documentation for each JS library on their respective website. 


****

## Examples & Uses
There are many reasons why a web designer would want to implement a Parallax Effect on an image or series of images. The primary reason is to blend both the user’s ability to scroll and visual design. The result is a unique piece that engages visitors and draws their interest further down the page. 

![Firewatch Parallax]({{"../assets/parallax-1.gif" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Parallax Effect with Layers - Firewatch Video Game.
</div>

Garden Estudio’s website takes advantage of the parallax effect to create a tasteful landing page. It seems a lot of websites take advantage of a large image or clever hacking of a carousel component for their landing page, but Garden Estudio creates a very engaging landing page regardless. The website entices users to scroll down further. 

![Garden Estudio Parallax]({{"../assets/parallax-2.gif" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Parallax Effect with Layers - Garden Estudio.
</div>

New York Times found an ingenious use for the parallax effect and displaying their online articles. In the example below, you can see how beautifully the article’s artwork is displayed with layers sliding along the x-axis as the user scrolls down. 

![NY Times Parallax]({{"../assets/parallax-3.gif" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Parallax Effect with Sliding Layers - NY Times. 
</div>

The Redwood Credit Union created a fantastic storyline where the website flips between different images as the user scrolls up or down. The only downside is the scrollbar becomes hijacked which slows the rate of scrolling and leaves the user guessing on how far along the website they are. 

![Redwood CU Parallax]({{"../assets/parallax-4.gif" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Parallax Storyline - Make Your Money Matter by Redwood Credit Union.
</div>


****

## Avoid Scroll Hijacking 
Scrollbar functionality can be manipulated by web designers/developers to behave differently by adding animations on scroll, fixed scroll points, or controlling when the user can scroll which is known as “Scroll Hijacking”. The design of the scrollbar may vary slightly between web browsers and operating systems, but are styled similarly and function identically. When the scrollbar is styled or its functionality changes or is “hijacked”, it can leave users infuriated. This is because scrollbars are not often thought of as part of a website by users, but rather as a part of the web browser software. It is my opinion that scroll hijacking can make users feel confused and eventually disappointed because they expected a uniform experience with the scrolling feature, but feel lost. Ultimately, scroll hijacking is a controversial web design aspect that is often paired with the parallax effect and should be taken into careful consideration for the sake of the users. 

The [Apple Mac Pro web page](https://www.apple.com/mac-pro/) is just one example of bad parallax scrolling and scroll hijacking. The web page replaced the scrollbar with fixed scroll points and rapid scrolling could cause the animations to flip through back and forth all while loading very slowly.

****

## Conclusion
As you can see, there are many different ways to apply the parallax effect in web design with great visual results. Rather than relying on JS, you can utilize CSS for creating the parallax effect, but it may be helpful to use JS as a sort of polyfill for older web browser versions for certain users. It may be tempting to alter the scrollbar in some fashion or change the scroll functionality, but if you do you can cause usability issues. The parallax effect can create stunning designs whether its for a landing page or showcasing an article online. 

****

### More Blog Posts
[Exploring Navigation Patterns]({% post_url 2017-07-18-exploring-navigation-patterns %})

[Carousel Design Patterns]({% post_url 2018-02-19-carousel-design-patterns %})

[Custom Counters]({% post_url 2018-02-02-custom-counters %})
