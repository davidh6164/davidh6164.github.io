---
layout: post
title:  "Utilizing CSS Target"
date:   2017-05-29 23:35:25 -0600
categories: May
---


#### Published May 29, 2017 by David Horn


## Contents
* Browser Support
* Fragment Identifiers
* Default Jumping Behavior
* Lightbox
* Image Gallery
* Sliding Navigation Menu
* Yellow Fading Technique
* Targeting All Elements

****

## Introduction

Psuedo-classes are great for targeting a certain aspect or state of an entire element. The :target pseudo-class is a great way to style HTML elements when they are called upon by using their ID. This is useful for a sliding navigation menu, image gallery, lightbox, and more. You can then optionally add some JavaScript to enhance the functionality of the code.

****

## Browser Support

According to  [Can I Use](http://caniuse.com/#search=%3Atarget), the :target selector and other advanced CSS3 selectors are widely supported amongst the most popular web browsers and their various versions. This selector can add some progressive enhancement to your website because it adds some aesthetic appeal without having to be vital to the website’s design.

****

## Fragment Identifiers

You can begin to utilize this particular pseudo-class with the help of hash URLs, or fragment identifiers. Fragment identifiers target a specific portion of the webpage which is an HTML element with an ID attribute value that matches the URL. A common instance is when a user clicks an anchor tag with a <b>href</b> attribute value that matches an HTML element’s ID attribute value:

{% highlight html linenos %}
<a href="#news">News</a>

<div id="news">Latest News</div>
{% endhighlight %}

****

## Default Jumping Behavior

Normally the browser would scroll the page until the element is at the top of the browser window. This is the default jumping behavior for hash tag links in HTML. You cannot prevent this default behavior with CSS, but you can prevent this behavior using jQuery. Start by targeting all the hash tag links and prevent their default behavior using preventDefault then use pushState to change the URL to include the hash tag link at the end without the jumping behavior:

{% highlight javascript linenos %}
$("a[href^=#]").on("click", function(e) {
  e.preventDefault();
  history.pushState({}, "", this.href);
});
{% endhighlight %}

The original article can be found over at [CSS-Tricks]() titled "On :target" by Chris Coyier. 

****

## Lightbox

Lightboxes in web design can be described as a large image with a dark background for the purpose of enlarging a thumbnail or smaller image and darkening the background to increase the visibility for users when they interact with the image. Lightboxes are not limited to images but can include videos as well. In the past, these had to be created with JavaScript and was popularized by JavaScript libraries that specialized in these features, but with :target you can hide the lightbox container by default and then call it into view or change its current state when it is called upon with a hash tag link.

First, set your <b>img</b> tag in an anchor tag with the <b>href</b> set up with an ID selector.

{% highlight html linenos %}
 <a href="#lightbox1">
    <img src="http://i.onionstatic.com/avclub/4415/31/16x9/1200.jpg" class="thumbnail">
  </a>
{% endhighlight %}

Next, we are going to add another <b>img</b> tag nested within an anchor tag with the <b>href</b> set to a blank ID selector. Also give it an ID that matches the first anchor tag's link location. For my example I used lightbox1.

{% highlight html linenos %}
<a href="#" class="lightbox" id="lightbox1">
    <img src="http://vignette4.wikia.nocookie.net/americandad/images/1/1c/AmericanDad203.png/revision/latest?cb=20070624014703" class="lightbox-img">
    <figcaption>Lightbox caption</figcaption>
</a>
{% endhighlight %}

Setting the second anchor tag to a blank ID selector, you allow the lightbox to be closed by the user on click. Finally, you add the CSS code which changes the CSS properties of a selector with the pseudo-class :target on it.

{% highlight css linenos %}
.lightbox {
  display:none;
}
.lightbox:target {
  display:block;
}
{% endhighlight %}

By setting the lightbox's display to none, then changing the display property value to block allows the image to appear when it is targeted (or clicked). 

You can view my [CSS-only Lightbox](https://codepen.io/davidh6164/pen/WjpyMr) Codepen project to test the code.

****

## Image Gallery

The image gallery design is similar to the other :target hacks. The CSS property values we will be changing for the Image Gallery include the offset and transform-translate properties.

First, add some images and add the class of <b>target</b> which will reveal the images when they are targeted along with their various ID's of one, two, three and four.

{% highlight html linenos %}
<section class="gallery-wrap">
<div class="gallery">
  <article id="one" class="target">
    <figure>
      <img src="http://nerdist.com/wp-content/uploads/2017/02/Futurama-Mobile-Game.jpg" class="gallery-item" alt="Futurama Photo 1">
    </figure>
  </article>
  <article id="two" class="target">
    <figure>
      <img src="https://uploads.scratch.mit.edu/users/avatars/390/8124.png" class="gallery-item" alt="Futurama Photo 2">
    </figure>
  </article>
  <article id="three" class="target">
    <figure>
      <img src="https://pmcvariety.files.wordpress.com/2016/06/futurama.jpg?w=670&h=377&crop=1" class="gallery-item" alt="Futurama Photo 3">
    </figure>
  </article>
  <article id="four" class="target">
    <figure>
      <img src="http://i.onionstatic.com/avclub/5545/41/16x9/960.jpg" class="gallery-item" alt="Futurama Photo 4">
    </figure>
  </article>
  </div>
</section>
{% endhighlight %}

Add a <b>div</b> container to nest the images inside so that we can utilize overflow:hidden. This allows the images to be easily hidden from view without traveling across the viewport.

{% highlight css linenos %}
.gallery {
  overflow: hidden;
}
{% endhighlight %}

You set the item out of view by using the offset properties (top, right, bottom, left) and using transform:translateX(), transform:translateY(). The z-index property is necessary to overlap the other images. Do not forget to use the positioning property with the z-index property or the z-index property will not work. You can optionally add a transition to time the transformation to appear more animated with smoother movement across the viewport.

{% highlight css linenos %}
.target {
  position: absolute;
  top: 0px;
  transform:translateX(-1000px);
  height: 400px;
  width: 700px;
  left: -400px;
  margin-left: 50%;
  transition: all 0.75s ease-in-out;
  z-index:1;
  opacity:0;
}
.target:target {
  transform:translateX(0px);
  z-index: 100;
  opacity:1;
}
{% endhighlight %}

You then have a series of buttons styled which call on the various items to apply different values to these same properties with the particular ID value that matches the fragment identifier or Hash URL in the anchor tag. 

{% highlight html linenos %}
<ul class="gallery-btns">
      <a href="#one"><li class="gallery-btn">1</li></a>
      <a href="#two"><li class="gallery-btn">2</li></a>
      <a href="#three"><li class="gallery-btn">3</li></a>
      <a href="#four"><li class="gallery-btn">4</li></a>
    </ul>
{% endhighlight %}

You can view my [CSS-only Image Gallery](https://codepen.io/davidh6164/pen/YVZPve) Codepen project to test the code.

****

## Sliding Navigation Menu

A sliding navigation menu is a great feature to remove the navigation portion of the website from the view until the user is ready for the navigation to appear. This is beneficial when viewing a website on a mobile device, because of the limited size of the browser window. You provide can provide a better design and increase interactivity from your users with features like this.

First, let's create an open button for the menu. Make sure you assign an ID to the button that will call the navigation menu when targeted.

{% highlight html linenos %}
<a href="#nav" aria-label="Open Navigation" id="open-nav"><i class="fa fa-bars"></i>MENU</a>
{% endhighlight %}

Next, create the navigation menu itself. Assign the ID to the navigation menu that we assigned for the open menu button. Don't forget to include the close button in the navigation menu. It will be designed similar to the open menu button, with a blank ID assigned to its link location.

{% highlight html linenos %}
        <nav id="nav">
		<a href="#" aria-label="Close Navigation" id="close-nav"><i class="fa fa-times"></i></a>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
			<li><a href="#">Learn More</a></li>
		</ul>
	</nav>
{% endhighlight %}

Now, style the navigation menu out of view using the same properties used in the previous examples: Offsets and Transformations. You can optionally style the open and close buttons as well.
    
{% highlight css linenos %}
#open-nav {
  margin-top: -75px;
  padding-right: 20px;
  float:right;
  font-size: 44px;
  position: relative;
  color: dodgerblue;
}
#close-nav {
  margin-left: 4%;
  font-size: 44px;
  color: white;
}
#nav {
  text-align: center;
  position: fixed;
  height: 350px;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: dodgerblue;
}
#nav:not(:target) {
  top: -100%;
  transition: all 0.75s ease-in-out;
}
#nav:target {
  top: 0;
  transition: all 0.75s ease-in-out;
  padding: 10px;
}
{% endhighlight %}

Using the :not pseudo-class allows you to add styling to the navigation menu without including the particular styling in your other selectors. You could assign the styling without using the :not pseudo-class as well.

You can view my [CSS Sliding Navigation Menu](https://codepen.io/davidh6164/pen/oLAXVm) Codepen project to test the code.

****

## Yellow Fading Technique

Highlighting newly revealed content to a web page is a simple design feature that is wonderful in adding readability to a user's experience. A certain [37signals article](https://signalvnoise.com/archives/000558.php) pioneered a great design feature that highlights a recently added element of the webpage that has appeared dynamically. You can imitate this feature using :target, animation and @keyframes.

****

## Targeting All Elements

You can easily target all of the elements by using a universal selector that applies to all targeted elements. You do not have to use the universal selector * with :target. You only use :target.


****


## Conclusion

The :target selector can be used as a design hack to imitate interactivity that could previously only be provided by JavaScript. Some clever design hacks include a sliding navigation menu, image gallery, lightbox, highlighting revealed content and more. You can always add some JavaScript to enhance the functionality of the code.

****

### More Blog Posts
[Understanding Git & VCS]({% post_url 2017-09-26-understanding-git-and-vcs %})

[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

[Conditional Comments At A Glance]({% post_url 2017-12-21-conditional-comments %})


