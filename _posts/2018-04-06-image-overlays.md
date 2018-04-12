---
layout: post
title:  "Let's Discuss UI: Image Overlays"
date:   2018-04-06 23:35:25 -0600
categories: April
---


#### Published April 06 2018 by David Horn


## Contents
* Reasons To Apply Overlays
* Color Overlays
* Gradient Overlays
* Image Filters
* Text Overlays
* Element Overlays
* Codepen


## Reasons To Apply Overlays
As web designers we all use images to enhance a design. Images are a great addition to websites, but the increasing reliance of images to create wonderful designs has left a decreasing amount of space for text content. It has become a balancing act to juggle both images and text. New innovations are emerging all the time with image overlays seeming to have fused both image and text content by placing text over an image.

<div class="text-center blog-quote">
“Good design is visually appealing on one device, great design is visually appealing on any device.”
</div>

Certain overlays can improve the readability of your text whether it’s large headings or single word statements by adding a transparent colored background. This is especially important when you consider all of the possible devices that visitors will be using to access your website, small and large. I want to discuss some of the more popular variations including color overlays, gradient overlays, text overlays, blur filters, and inset box-shadow for fading.

****

## Color Overlays
You can add a layer of color to your images to complement your website’s color scheme or to increase readability. The photo truly becomes a background image as other content is layered over and becomes more clear. If we take a look at [Lobagola’s Bed & Breakfast website](http://www.lobagola.com) we can see how the color yellow is used to coincide with the overall web design and to make the text more prominent for the website’s viewers. 

![Lobagola Overlay]({{"../assets/overlay-img-1.png" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Color Overlay on Lobagola Bed & Breakfast
</div>

Notice the color of the text overlay. Typically with a text overlay, you would want to limit your font color options to white, but with a color overlay and bold font you can see how the options begin to widen up. You can create a color overlay by using the ::before pseudo-element and applying a background-image linear-gradient. You will place the same color for both required gradient values to create a simple color overlay.

{% highlight css linenos %}
.img-1 {
   background: url(‘http://www.image-url.com/image.png/’) no-repeat;
   background-size: cover;
}
.img-1::before {
   content: “ “;
   position: absolute;
   top: 0px;
   left: 0px;
   background-image: linear-gradient(#ff8d00, #ff8d00);
}
{% endhighlight %}

****

## Gradient Overlays
Gradient overlays are similar to color overlays, with the exception being that you can add multiple colors to your overlay. These colors could range in width or height as gradient has some room for customization. You could set start and stop points for colors, change the direction of the gradient, and alter the style of gradient including linear or radial. You can create some great effects that seamlessly blend your background images to the website’s background. The [Clearstream](http://www.clearstream.tv/) website uses a gradient overlay for their image with a pink color that drags on and transitions into blue towards the right end of the web page.

![Clearstream Overlay]({{"../assets/overlay-img-2.png" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Gradient Overlay on Clearstream
</div>

Without the use of some sort of color overlay, the logo and small icons would be hard to see. A dark overlay color or several colors that match your website’s color scheme will allow content that is overlaid on top to pop out. 

{% highlight css linenos %}
.img-2 {
   background: url(‘http://www.image-url.com/image.png/’) no-repeat;
   background-size: cover;
}
.img-2::before {
   content: “ “;
   position: absolute;
   top: 0px;
   left: 0px;
   background-image: linear-gradient(to bottom right, #2a2a2a, #3d3d3d);
}
{% endhighlight %}


****

## Image Filters
You may be familiar with CSS filters such as applying grayscale, contrast, opacity, and sepia(reddish-brown color) to your image. There are also several more filters in CSS but only one in particular that I want to discuss, the blur filter.

Image blurs can be combined with a little trick to create a clever design. The trick is to create a background image then overlay the same image on top. You want to blur the background image enough to avoid drawing the users attention to the background, but you still want to make out shapes and objects in the image. Taking a look at [Fancred](http://fancred.com)’s website you will notice the background image is the same image that is then overlaid on top. The differences being size and clarity to create an immersive landing page.

![Fancred Overlay]({{"../assets/overlay-img-3.png" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Image Blur on Fancred
</div>

{% highlight css linenos %}
.img-3 {
   background: url(‘http://www.image-url.com/image.png/’) no-repeat;
   background-size: cover;
}
.img-3::before {
   content: “ “;
   position: absolute;
   top: 0px;
   left: 0px;
   background-image: linear-gradient(#ff8d00, #ff8d00);
}
{% endhighlight %}

The next design pattern is all about fading the edges of an image to the background of your website, albeit won’t be with a CSS filter. You can apply an inset box-shadow that match the color of the edges of your image to fade the image to the background color of your website. If you take a look at the image below, you can notice how using the same color of the background, you can apply an inset box-shadow to fade the edges of an image seamlessly. The image below is from [Du Haihang’s Chinese New Year Celebration Project 2015](https://thefwa.com/cases/celebrating-chinese-new-year-2015).

![Chinese New Year Overlay]({{"../assets/overlay-img-4.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Du Haihang’s Chinese New Year Celebration Project 2015 image fading
</div>

{% highlight css linenos %}
img-4 {
    background-image: url('http://images.com/image.png');
    width: 500px;
    height: 300px;
    box-shadow: 0 0 8px 8px #3d3d3d inset;
}
{% endhighlight %}

****

## Text Overlays 
There are several reasons to add some sort of overlay to an image and improving readability is one of them. You do not want your users eyes to strain as they attempt to read the text spread across an image. This becomes even more important when your website is being viewed on a smaller screen where the text becomes much smaller and possibly less legible. Readability is important because it determines how well the user can view and understand written text by discerning between individual letters or characters from one another. 

![Otter Surfboards Overlay]({{"../assets/overlay-img-5.png" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Otter Surfboards text overlay
</div>

Placing large text on top of full-page images has become a common design pattern in web design as of lately and for good reason. You can showcase your branding in a landing page manner which envelopes the user in a more immersive visual experience. Compare the image above with the image below and notice the subtle differences between both seemingly similar designs. See how one is easier to read than the other, yet both provide equally creative and unique experiences. The image above is from [Otter Surfboards](https://ottersurfboards.co.uk/) and the image below is from [Aquatilis Expedition](https://www.awwwards.com/sites/aquatilis-expedition).

![Aquatilis Expedition Overlay]({{"../assets/overlay-img-6.png" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Aquatilis Expedition text overlay 
</div>

****

## Element Overlay
Laying an element over an image is very similar to text overlay. You can create a somewhat transparent colored rectangle and place some text inside the element. You could use clip-paths or SVG paths to create other shapes as well. You could also combine your overlay design with CSS pseudo-classes such as :active, :focus, and :hover to create animated effects. 

Overlays come in all sorts of variations as they are only limited by your creativity. Beyond enhancing your web design, certain overlays can improve the readability of your text whether it’s large headings or single word statements which is important to your users. Images have their purpose and can further express your creative intent as does typography. Both remain an important aspect of web design so it is important to strike a balance between images and text. 

****

## Codepen
You can check out all the code and live examples of custom counters at [Codepen](https://codepen.io/davidh6164/).

****

### More Blog Posts
[Chrome DevTools 101]({% post_url 2017-07-25-chrome-devtools-101 %})

[Carousel Design Patterns]({% post_url 2018-02-19-carousel-design-patterns %})

[Custom Counters]({% post_url 2018-02-02-custom-counters %})
