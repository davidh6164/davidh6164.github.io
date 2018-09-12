---
layout: post
title:  "Optimize Images For The Web"
date:   2018-09-11 12:35:25 -0100
categories: September
---


#### Published September 11 2018 by David Horn

### Purpose
To learn how to effectively reduce the file size of images to increase the loading speed of websites. 

### Contents
* Image Alternatives
* Right Format
* Right Quality 
* Compression Types
* Compression Tools
* Using HTML5 srcset 


It is exceedingly common to see images used in website designs today. Optimizing the images you deploy can reduce loading times for users and they will thank you for it. Increasing your website’s performance can increase your website's SEO rating as well. Since images occupy a large portion of layout space, it is important that they should not appear to take long to load for your website's visitors. If any assets still take long to load, try to utilize one of several alternatives for deploying media from your website. Not only is file size an issue with image optimization, but creating responsive images can be an issue as well. Using HTML and some JS, we can create a more responsive layout with an ideal image size chosen depending on the viewport size of our users. Get ready to optimize images for your web design. 

****

## Image Alternatives
An image is not always necessary for your website’s design. You can achieve many aesthetic effects using CSS, whether you want to add an image overlay using text, overlay linear-gradients, or add shadow. If you do decide to use an image it is important to know that the text you add can only be indexed by search engines if it is coded as part of the design rather than overlaying text as part of the image itself. More importantly to consider, text edited onto images become unscalable, unselectable and overall less accessible to your website’s visitors. 

****

## Right Format
Before we talk about the various image formats we should talk about the two image graphic types: vector and raster images. Vector images are composed of lines and points that create an image while raster images are composed of individual pixels each with an encoded value within a grid.

Unfortunately, there is no single format that is best for an image. Although, the <b>.webp</b> format seems to be promising for the future [according to Google developers](https://developers.google.com/speed/webp/docs/compression). Some estimates say that <b>.webp</b> can save web developers up to 30% of file space when compared to <b>.jpeg</b> There are several different file formats that you will utilize for images that have their own features that make them best for certain scenarios. These features deal with animation, transparency, and quality of the image.

 <b>PNG</b>
 <b>.png</b> is an image format that supports transparency and lossless compression (for more on compression types see below). It allows for the designer to define an alpha channel for the image and mask the transparency. An image will be preserved with the highest resolution using this format. This format supports lossless compression.

 <b>JPEG</b>
 Screenshots and photos are best served using the <b>.jpeg</b> format as it… If your image does not require transparency then you may be able to save some file space without sacrificing too much of your image’s appearance. When the image’s quality is slightly reduced, the file size is greatly reduced. There is no apparent change in overall appearance which makes this format best for most images. This format supports lossy compression.

 <b>GIF</b>
 The universal choice when it comes to image animation. 

 <b>SVG</b>
 <b>.svg</b> is a great image format for all sorts of icons. Since <b>.svg</b> images are vector images, they are resolution independent. This means that no matter how users scale the site, the image will stay in pristine quality. If you were to scale a raster image the graphic could become blurry or pixelated. Also, <b>.svg</b> can be embedded as markup on a webpage or as an external image asset. 

****

## Compression Types
In general. There are two stages in an image compressor: lossy and lossless. Lossy compression will modify parts of the image that the human eye does not notice and reduces the total number of colors to save bytes. Lossless compression will keep the image quality identical to the source image. This can bloat file sizes causing designers and developers to seek different alternatives. 

****

## Compression Tools
It is important to make sure your web server has GZIP compression configured as it reduces every file’s transfer size. You can easily check using [Check GZIP Compression](https://checkgzipcompression.com/) an online tool which will give you information about your website’s file size and if GZIP compression is configured correctly. You can also use TinyPNG for additional compression tools for both your PNG and JPEG images. 

****

## Using HTML5 srcset
As websites are becoming more responsive to the devices they are viewed on, so to should the images that accompany them. You could alter the dimensions of images and display them depending on the user’s viewport size through <b>srcset</b>. It is an HTML5 attribute that allows the developer to choose which image to load depending on the user’s viewport. Where support fails you can use a polyfill to keep it in check. You can easily test if <b>srcset</b> is working by using Chrome DevTools. Open the Network Inspector and refresh your web browser to generate a list of all the assets that were downloaded to make up the webpage. If you disable your cache for testing purposes it can speed up the process. Since browsers download any images before it interprets the page’s CSS and JS, it would be beneficial to utilize an HTML solution. 

****

## Conclusion
In conclusion it is best to take the time to find the right format for the images you will be using in your website. Using the incorrect image format is a common issue when it comes to improving performance. If images are too large in dimensions, not compressed, or have too high of quality, they can become large in file size which will impact your website’s loading time and SEO rating. Before you ship your website live, test your website and see if its speed can be increased. 

****

### More Blog Posts
[Chrome DevTools 101]({% post_url 2017-07-25-chrome-devtools %})

[Generating Colors with Hexadecimal]({% post_url 2018-02-22-hex-colors %})

[Improving Web Accessibility using ARIA]({% post_url 2018-07-05-web-accessibility %})

