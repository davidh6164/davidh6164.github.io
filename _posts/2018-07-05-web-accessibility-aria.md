---
layout: post
title:  "Improving Web Accessibility using ARIA"
date:   2018-07-05 23:35:25 -0600
categories: July
---


#### Published July 05 2018 by David Horn

### Purpose
Broad scope introduction into web accessibility. Introduction to assistance technologies for accessing the web. Using HTML5 attributes and diving into ARIA.


### Contents
* Assistive Technologies
* ARIA


Web accessibility for people with disabilities is largely underdeveloped. This is probably due to the fact that it is not a requirement, according to United States law, for websites to have a greater range of accessibility with the exception of most government and school websites. Still, it leaves businesses with the option to provide features that will permit at least a significant portion of the world’s population to effectively navigate and pull information from a website. Websites should be only considered properly developed and designed when all of their intended audience can access their website, including people with disabilities. There is more than one type of disability that may affect individuals that could impair their ability to navigate the internet. Some of these disabilities include cognitive, visual, motor, and hearing disabilities. With these disabilities in mind, a web developer can make more conscious decisions that would affect a user-base. For example, when considering visually-impaired users, it is understandable that these users may be using screen readers. This makes text content invaluable for a website to convey their message as any visual design will fail to resonate with these users. This means alt attributes for img tags are a necessity because your visually-impaired users cannot see these images, but could still understand the message you are trying to convey with text describing the image being read through a screen reader. When considering ways to improve your website’s accessibility, one should follow the four principles of web accessbility: Perceivable, Operable, Understandable, and Robust (POUR). Perceivable in the sense that your users are able to gather information. Operable as in the website should work for a wide range of users with varying technologies to access a website. Understandable as in the various layers of information provided makes sense to your user-base. Robust as in it works on a wide range of software and hardware with minimal technical issues.

<div class="text-center blog-quote">
“The power of the Web is in its universality.
Access by everyone regardless of disability is an essential aspect.” -Tim Berners-Lee
</div>  

****

## Assistive Technologies
When developing and designing websites, it is important to keep in mind how your users can access and navigate through your website. There are many assistance technologies that exist to aid users in their ability to utilize a computer. Screen readers, screen magnifiers, voice recognition software, selection switches, and more. [JAWS](https://www.freedomscientific.com/Products/Blindness) is a great company that provides plenty of various assistive technology software such as a screen reader and hardware including braille boards. If any reader knows of other great assistive technology and companies please send me a message. Even one’s keyboard can be used as an assistive technology if a person does not own a mouse or cannot use a mouse. Not only do assistance technologies exist, but certain configuration options are sometimes available within hardware to improve accessibility to one’s personal computer. An example of this is changing the contrast options on one’s computer display to increase the readability of one’s screen. When considering how your users will access your website, you need to consider all possible options and provide the necessary code in anticipation of your users using different options. 

![JAWS Assistive Technology]({{"../assets/assistive-tech.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
JAWS Assistive Technology
</div>

****

## ARIA
Similar to alt attributes, role attributes are important to improve web accessibility by adding semantics to media. They are a part of a set of attributes meant to enhance web accessibility, this set of attributes is called ARIA. It stands for Accessible Rich Internet Applications and not only do they provide additional semantic information for ambiguous elements, but they also make certain features of your website more accessible in this manner. It is important to remember that ARIA is not supported by older browsers. You should use the safe ARIA practices outlined below to allow it to degrade gracefully. 

Before actually using ARIA attributes, use a native HTML element or attribute with the additional semantics and behavior built in as opposed to re-purposing another element. Most commonly, div elements are used because they do not have any additional semantics and behavior compared to other elements. You can add all sorts of ARIA attributes to modify the div element. These ARIA attributes can be safely added inline, or directly to your HTML document. If the element relies on scripting for interaction, then it is best to change the ARIA attribute values using JavaScript. For example, a collapsible dropdown menu may have the ARIA attribute of aria-expanded. The value could be true or false and it is only changed back and forth using JavaScript instead of using inline declarations. Some of the more common ARIA attributes include: aria-hidden, aria-expanded, aria-label, aria-disabled, and aria-controls. The aria-hidden attribute enables the developer to hide elements from assistive technologies. The aria-controls attribute defines the controls of interactive components and aria-label is used to add labels to elements that do not already have a label visible. ARIA attributes can greatly improve the accessibility of your interactive widgets as well as your media. You can always use the HTML W3C validation tool or the WebAIM tool to check your code of any accessibility and code issues. You submit your code or run a website link through the one of the online tools and the tools provide results in a test format with various warnings and errors to alert you to any potential issues in your code. Remember that adding ARIA to your HTML elements will not modify the behavior or design of elements that are not accessed using assistive technology, the sole purpose of ARIA is to increase web accessibility for assistive technology. In the next blog post we will go in-depth into using ARIA practically, troubleshooting possible issues and improving the accessibility to web components that are commonplace in web designs today.  

****

### More Blog Posts
[Evolution of CSS Resets]({% post_url 2018-05-16-evolution-css-resets %})

[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

[Setup MAMP for your Local Server Environment]({% post_url 2018-04-13-setup-local-server %})

