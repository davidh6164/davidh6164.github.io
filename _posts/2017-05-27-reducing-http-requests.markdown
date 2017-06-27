---
layout: post
title:  "Reducing HTTP Requests"
date:   2017-05-27 23:35:25 -0600
categories: May
---

#### Contents
* Combining CSS & JS Files
* Using a CDN (Content Delivery Network)
* Avoiding Bad Requests
* Using Image Sprites
* Sprite Cow
* Web Font Implementation 
* Base64 Encoding Images
* DataURI Encoding?
* Using SVG

****

#### Introduction

The essential steps for a web page being displayed is important to understand how HTTP requests work and why reducing them may help increase your website’s loading speed. What are the steps for a web page being displayed? The basic steps include: request, response, building and rendering.

1. You type in the URL of a website into your browser then you hit Enter, this is the request process.
2. The web browser receives the web page resources to build the web page for you to view, this is the response process.
3. The web browser then starts to build the web page using the resources, this is the building process.
4. Then, the web browser renders the web page to display to the user. 

All of these steps have separate components and go into more detail, but this is the gist of how a web page is displayed. Once you have the basics of how a web page is displayed, then you can move on to how to reduce the total number of HTTP requests to improve the web page loading speed to retain web visitors.

****

#### Combining CSS & JS Files

The best way to utilize CSS is to use it in an external stylesheet called by the link tag in HTML. You should avoid inline CSS, @import rule and using the style attribute in HTML when add CSS code to your HTML documents due to security reasons and increased web page load time. 

It is very common if you are building a theme for a CMS such as WordPress or Magento or if you are using a CSS framework like Bootstrap, to have multiple CSS files. This is because core files and any additional files you may be working on are usually split up during the production process. This is fine, but do not forget to combine these files once you are ready to push your code to a web server.

When you have multiple style sheets the browser has to make individual requests for each file and download them individually. You should combine them to reduce the number of requests and increase web page loading time.  You can easily combine style sheets by using the copy & paste method. For example, if you have three different files such as:
* main.css
* bootstrap.css
* animations.css

Then you would combine them all in a new file titled something similar to the title below:
* style.css 
* main.css, bootstrap.css & animations.css combined, but not in this order. 
I would recommend placing your framework code before your own code to best utilize the cascading of Cascading Style Sheets. 

The same can be said for JS files, just use the example above switching out CSS for JS file extensions. 

****

#### Using a CDN (Content Delivery Network)
A Content Delivery Network is a series of web servers spread across a wide geographical area that can serve up your website’s assets faster to your users than your web server could. Loading your website’s assets from servers closer to your users is the main reason why those assets will load faster. This is useful when using frameworks and libraries as well such as Bootstrap and jQuery. Smaller websites won’t find much use for exporting most of their web assets to a CDN, but larger websites that handle lots of data will surely benefit. 

****

#### Avoiding Bad Requests

Within your HTML or CSS files you might notice a request for an asset or web page that does not exist. When the request is made for one of these that does not exist, then the browser wastes time checking to load these resources which it cannot successfully load. These failed requests by your browser will return the HTTP 404 Not Found Error if it is an entire web page that was trying to be viewed.The number of bad requests will slow down your web page loading speed. There is an easy way to check for any bad requests, and that is using the [Varvy pagespeed online tool](https://varvy.com/pagespeed/) to search for these bad requests. 

****

#### Using Image Sprites

If you have multiple small images being used frequently in your website’s design, your browser is downloading them individually as six different HTTP requests. You can combine this into one request using image sprites. The image sprite can easily be created with any image editor program or by using Sprite Cow. For my image sprite, I am using 144px width by 132px height icons which I will combine along the vertical axis. The image sprite should by 864px width by 132px height. 

{% highlight html linenos %}
<div class="futurama-sprite"></div>
<div class="futurama-sprite image-zoidberg"></div>
<div class="futurama-sprite image-bender">
</div>
<div class="futurama-sprite image-amy">
</div>
<div class="futurama-sprite image-hermes">
</div>
<div class="futurama-sprite image-fry">
</div>
<div class="futurama-sprite image-leela">
</div>
{% endhighlight %}

You can use the background CSS properties to use your image sprite effectively. First use the background property to set the background-image with the image sprite then set the background-repeat property to no-repeat. This class will be reused with an additional class being added to the HTML element depending on the icon you want to reveal to users.

{% highlight css linenos %}
.futurama-sprite {
  background: url("https://s23.postimg.org/i72a9cb6z/futurama-sprite.png") no-repeat;
  height:132px;
  width:864px;
}
{% endhighlight %}

Next, we are going to create individual CSS classes for each icon in the image sprite, in this example I am using Futurama characters therefore my CSS classes will reflect each Futurama character icon I am using. Set their height and width to their original icon size, in this case that is 144px width by 132px height.

{% highlight css linenos %}
body {
  padding: 25px;
}
.futurama-sprite {
  background: url("https://s23.postimg.org/i72a9cb6z/futurama-sprite.png") no-repeat;
  height:132px;
  width:864px;
}
.image-zoidberg, .image-bender, .image-amy, .image-hermes, .image-fry, .image-leela {
  height: 132px;
  width: 132px;
  margin: 25px 0;
}
.image-zoidberg {
  background-position: 0 0;
}
.image-bender {
  background-position: -144px 0;
}
.image-amy {
  background-position: -288px 0;
}
.image-hermes {
  background-position: -432px 0;
}
.image-fry {
  background-position: -576px 0;
}
.image-leela {
  background-position: -720px 0;
}
{% endhighlight %}

Depending on the icon you want to show, the background-position values will be different for each icon class. The math depends on how big your icon is. For example, if I want to show the third icon, I need to switch the position of the image to -432px 0. 

Using background-position you can show any portion the image sprite, you can alter the positioning of the image sprite for example by using background-position: -432px 0; this would pull the image sprite to the right along the horizontal axis by 432px. Remember the height and width of the class controls the “window” that the image sprite appears through.

Here is a simple [Codepen project to illustrate the code](https://codepen.io/davidh6164/pen/WOXrbd)

#### Sprite Cow
Sprite Cow will take your uploaded image sprite and will display code of your selections for icons. The output code will include height, width and background-position values. I recommend you check out Sprite Cow because it will minimize the effort you will need to put forward to successfully use image sprites. Click on the Show Example button if you would like to test how it works. CSS Tricks has a [great video](https://css-tricks.com/video-screencasts/105-using-spritecow/) which shows how to use Sprite Cow, step by step. 

****

#### Web Font Implementation

When adding additional fonts to your website it would be ideal to host the font yourself, but another option is to use third-party hosts for fonts such as Adobe’s Typekit or Google Fonts which is a free service. If you wanted a wider variety of fonts and want to host the fonts yourself you could also check out Font Squirrel. Self-hosting the fonts requires having the font files on your web server while using third-party fonts involves calling for the font files from a third-party web server which could have potential downsides. Some third-party fonts offer their services for free while others require either a payment or subscription. When using third-party fonts its best to keep the total number of fonts to a minimum. 

****

#### Base64 Encoding Images

Base64 encoded images are images that are turned into code recognizable by HTML. This is great for smaller images that would require additional HTTP requests. This will increase your web page loading speed by reducing your total amount of requests. By default, base64 images are not indexed by Google and other search engines. You can index an image separately using OpenGraph meta tags, but there are some images that only serve aesthetic purposes and would be great to encode from png or jpeg to base64. Here is an example of using OpenGraph meta tags for indexing an image:

{% highlight html linenos %}
<meta property=”og:image” content=”http://www.davidcodes.net/assets/img/park.jpg”>
{% endhighlight %}

Don’t forget to base64 encode smaller images only, if you try to encode larger images you will bloat the file size of your HTML files, defeating the purpose of using this method to increase your web page loading speed. To encode your images with base64 you can use an online tool such as [b64](http://b64.io/). This will turn your image into code which you can copy and paste into the img tag of HTML within the src attribute like any other image. 

{% highlight html linenos %}
<img src=”facebook-icon.png”>
<img src=”data:image/png;base64, iVgErf74tgjqQfjcobiAAjgojKjlfj6443ffFFFFtojGfGGmnX”>
{% endhighlight %}

****

#### DataURI Encoding

DataURI is another type of encoding that can encode in base64 format as well as ASCII and UTF-8 formats. From what I have read, images must be in base64 format if it is going to be encoded. As with base64 encoding its best to encode small images such as icons only as this can bloat the file size of your HTML documents. 

As with the base64 encoding, you are going to upload your images to an online encoding tool such as WebSemantic’s [DataURI tool](https://websemantics.uk/tools/image-to-data-uri-converter/). This is will also output a line of code which you can copy and paste into your img tag’s src attribute:

{% highlight html linenos %}
<img width="16" height="16" alt="social media icon" src="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQedM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlfrMQiB0UjIQA7" />
{% endhighlight %}


****

#### Using SVG

There are several different ways to implement SVGs onto your website. You can use .svg format images or you can use inline SVG code in place of of an img tag. The SVG format is great for website logos. If you decide to use SVG as an image, you should not base64 encode them because it will be render blocking. Here is an example of using SVG as an image:

{% highlight html linenos %}
<img src=”logo.svg” alt=”My Logo” class=”logo-class”>
{% endhighlight %}

Using SVG as an image limits ability to be manipulated with CSS and JS. Using inline SVG you can not only prevent an HTTP request, but you can also manipulate the image easier. Manipulation meaning adding interaction such as different colors for different cursor states such as hover and click. Here is an example of inline SVG:

{% highlight html linenos %}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65">
  <path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
  <path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
</svg>
{% endhighlight %}


According to [Can I Use](http://caniuse.com/#feat=svg-html5) SVGs have great support by major browsers and their previous versions so I do not think a fallback would be necessary. Inline SVG code can also bloat your HTML documents so limit what you convert to inline SVG to icons and logos. As with encoded images, the browser does not cache inline SVG images. You can open any SVG image with a text editor to reveal the inline SVG code to add to your HTML documents and you can also convert images into SVG format using any popular image editor. 

The SVG code that these image editors produce is not optimized and should be optimized with a tool such as [SVG Optimizer](http://petercollingridge.appspot.com/svg-optimiser) by Peter Coolidge or [Jake Archibald’s SVG Optimizer](https://jakearchibald.github.io/svgomg/). Upload your SVG images and save the new code that is produced. 

****

#### Conclusion

Complex and detailed photos are best suited for JPEG format as base64 encoding or inline SVG code will really bloat your HTML documents in an attempt to save HTTP requests which ultimately fails to improve your web pages loading speed. Base64 and Inline SVG are great for small icons and logos as they retain resolution and file size, but saves an HTTP request. Also, remember that Inline SVG and Base64 encoded images do not get cached by the browser and do not get indexed by search engines.


