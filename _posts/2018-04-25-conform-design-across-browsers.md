---
layout: post
title:  "Conforming Design Across Browsers"
date:   2018-04-25 23:35:25 -0600
categories: April
---


#### Published April 25 2018 by David Horn


### Contents
* How Websites Are Rendered
* Rendering Engines
* Rendering Modes
* User-agent Stylesheets



## Introduction 
You may have noticed that your web design appears slightly different in various web browsers. As a web designer, it is important to learn how browsers interpret code and apply their own styles. Once you understand how browsers can alter your design you can make best-practice decisions to conform your design across all browsers. There are six major web browsers in terms of user-base: Internet Explorer, Safari, Opera, Firefox, Chrome, and Microsoft Edge. We will focus on these browsers and how they affect style sheets, have varied CSS property support, and how you can avoid some common design pitfalls between browsers. 

I can only scratch the surface of how web browsers render websites and it is worth diving deeper when you have the time. Tali Garsiel and Paul Irish have created an extensive [primer](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) dedicated to understanding how web browsers operate and I recommend checking it out.

****

## How Websites Are Rendered
We all know that a web browser’s main function is to serve up content, but we may not know how it is done. Browsers display content by requesting it from a specified server. The server is found by using a URI or Uniform Resource Identifier. URI's can be a locator, but are not always. URL or Uniform Resource Locator refers to this specific subset of URI's which your browser commonly uses to access a website by requesting the files found at the URL. If it is an HTML file, the file gets parsed along with any linked files such as stylesheets, scripts, and images. The code can be rendered several different ways depending on factors such as rendering engines and rendering modes.

****

## Rendering Engines
Different web browsers use different rendering engines to display content. Microsoft's Edge and Internet Explorer uses Trident, while Mozilla Firefox uses Gecko. Other popular browsers such as Safari use WebKit and Google Chrome uses Blink, a fork of WebKit. Opera uses Blink also uses the Blink rendering engine. Knowing that several types of browser rendering engines exist will help you understand how certain browsers offer varied CSS property support. No browser and their previous versions support all CSS3 properties, you will have to find out which properties are supported. I personally use [Can-I-Use](http://www.caniuse.com/) to figure out browser support. You may come across a property that requires a vendor prefix for browser support, we will discuss vendor prefixes in a different blog post.

<div class="text-center blog-quote">
Tip: Remember that you should always test your design across all of the major web browsers to ensure a consistent visual experience for all of your users. 
</div>

![Can I Use Browser Support]({{"../assets/browser-support.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Can I Use offers browser support detection
</div>

****

## Rendering Modes
Rendering can be defined as the displaying of content for a user. When a website is rendered, you are seeing the results of the code files. There are several rendering modes which are based on doctype declaration. Your doctype declaration should be located at the very top of your HTML document. It is an instruction to the web browser about what version of HTML the page is written in and how to render the code. In HTML5, there is only one doctype declaration:

{% highlight html linenos %}
<!DOCTYPE html>
{% endhighlight %}

When a web browser chooses a rendering mode based on the doctype declaration it is using a process known as doctype sniffing. Depending on if there is a doctype or not will determine in what mode the browser renders the requested web page. The rendering modes were based off the introduction to W3C web standards. When web standards were first introduced, websites did not adhere to any standard and browsers had to adapt to accommodate both the web standard and any other existing websites that did not follow any standard. This was to prevent any existing website from breaking visually. 

If there is a doctype declaration then the browser renders the web page in standards mode, which means it follows the code specifications set by the W3C. The lack of a doctype declaration causes the web browser to render the web page in quirks mode, where it does not necessarily follow the W3C specifications and it may follow some of its own rules which vary by browser.  In the past, web browsers and designers did not necessarily follow any specifications which can cause compatibility issues.

Today, Quirks mode is not as big an issue as web browsers and web designers are becoming more compliant towards the W3C standards. Despite this fact, the declaration is a critical line of code for any HTML document. Quirks mode can cause older browser versions to render web design layout differently than standards mode. 

****

## User-agent Stylesheets
Browsers add their own default styling to basic HTML elements such as <p>, <h1>, <button>, and <input>. These default styles added by the browser are known as user-agent styles. It is important to note that there are other origins of style properties including the user's stylesheet, and the web author's stylesheet, but we will not focus on the differences between the origins of styles in this blog post. Instead, we should take a look at the browser's default style sheet. 

We know that web browsers use different rendering engines, so we can safely assume that the browser's default style sheet may also be different. When you are testing your web design in various browsers, you should note these differences as different styles could be applied to different elements depending on the browser you are viewing the web design on. You can easily find user-agent styles using Chrome DevTools if you are unfamiliar with them or cannot easily distinguish which elements are being affected by what style properties. These properties may slightly alter your web design, but if it is not noticeably different then you could leave the properties alone. If you want to remove some of the user-agent styles then you could directly apply properties and values to the same elements using the same CSS declaration as the user-agent stylesheet. 

![Chrome Developer Tools]({{"../assets/user-agent-styles.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Under Armor website with Chrome user-agent styles
</div>

****

## Conclusion 
When it comes to core attributes of the web today including user interface and code specifications, most browsers adhere to a similar standard. A web browser’s interface is not specified by any formal specification, yet through imitation it has become universal amongst all web browsers. The same could be said with the adherence to following the W3C code specifications across web browsers. There are a handful of rendering engines used by most web browsers which causes web browsers to have different levels of support for CSS3 properties and apply their own styles to websites as users navigate to a website. Once you understand the subtle differences between web browsers and how they render your website, you should be able to shape your web design to offer a rich visual experience for all of your users on all web browsers.

****

### More Blog Posts
[Exploring Navigation Patterns]({% post_url 2018-07-18-exploring-navigation-patterns %})

[Setup MAMP for your Local Server Environment]({% post_url 2018-04-13-setup-local-server %})

[Chrome DevTools 101]({% post_url 2017-07-25-chrome-devtools-101 %})
