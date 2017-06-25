---
layout: post
title:  "Utilizing CSS Target"
date:   2017-05-29 23:35:25 -0600
categories: jekyll update
---

#### Contents
* Browser Support
* Fragment Identifiers
* Default Jumping Behavior
* Lightbox
* Image Gallery
* Sliding Navigation Menu
* Yellow Fading Technique
* Targeting All Elements

----
****

#### Introduction
Psuedo-classes are great for targeting a certain aspect or state of an entire element. The :target pseudo-class is a great way to style HTML elements when they are called upon by using their ID. This is useful for a sliding navigation menu, image gallery, lightbox, and more.

----
****

#### Browser Support
According to  [Can I Use](http://caniuse.com/#search=%3Atarget), the :target selector and other advanced CSS3 selectors are widely supported amongst the most popular web browsers and their various versions. This selector can add some progressive enhancement to your website because it adds some aesthetic appeal without having to be vital to the website’s design.

----
****

#### Fragment Identifiers
You can begin to utilize this particular pseudo-class with the help of hash URLs, or fragment identifiers. Fragment identifiers target a specific portion of the webpage which is an HTML element with an ID attribute value that matches the URL. A common instance is when a user clicks an anchor tag with a href attribute value that matches an HTML element’s ID attribute value:

```html
<p>some html code</p>
```

----
****

#### Default Jumping Behavior
Normally the browser would scroll the page until the element is at the top of the browser window. This is the default jumping behavior for hash tag links in HTML. You cannot prevent this default behavior with CSS, but you can prevent this behavior using jQuery. Start by targeting all the hash tag links and prevent their default behavior using preventDefault then use pushState to change the URL to include the hash tag link at the end without the jumping behavior:

----
****

#### Lightbox
Lightboxes in web design can be described as a large image with a dark background for the purpose of enlarging a thumbnail or smaller image and darkening the background to increase the visibility for users when they interact with the image. Lightboxes are not limited to images but can include videos as well. In the past, these had to be created with JavaScript and was popularized by JavaScript libraries that specialized in these features, but with :target you can hide the lightbox container by default and then call it into view or change its current state when it is called upon with a hash tag link.

----
****

#### Image Gallery
The image gallery design is similar to the sliding navigation menu, you set the item out of view by using the offset properties (top, right, bottom, left) or using transform:translateX(). You then have a button styled which calls on the item to apply different values to these same properties with the particular ID value that matches the fragment identifier or Hash URL in the anchor tag. 

----
****

#### Sliding Navigation Menu
A sliding navigation menu is a great feature to remove the navigation portion of the website from the view until the user is ready for the navigation to appear. This is beneficial when viewing a website on a mobile device, because of the limited size of the browser window. You provide can provide a better design and increase interactivity from your users with features like this.

----
****

#### Yellow Fading Technique
A certain [37signals article](https://signalvnoise.com/archives/000558.php) pioneered a great design feature that highlights a recently added element of the webpage that has appeared dynamically. We will imitate the feature using CSS :target selector and animations.

----
****

#### Targeting All Elements
You can easily target all of the elements by using a universal selector that applies to all targeted elements. You do not have to use the universal selector * with :target. You only use :target.


