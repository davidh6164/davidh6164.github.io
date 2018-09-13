---
layout: post
title:  "Improving Browser Support with Vendor Prefixes"
date:   2018-04-27 23:35:25 -0600
categories: April
---


#### Published April 27 2018 by David Horn


### Contents
* What Are Vendor Prefixes?
* Should I Prefix?
* Hand Author Prefixes
* Autoprefixer Tool




## Introduction 
What Are Vendor Prefixes?
There are certain CSS properties that start with a sort of browser prefix attached. You may have seen them when browsing through code. Lines of the same CSS property re-written, but with different prefixes. Some of these prefixes include:

* -webkit- for chrome and safari.
* -moz- for firefox.
* -ms- for internet explorer and edge.
* -o-  for opera.

These prefixes are called Vendor Prefixes. They allow browsers to support experimental CSS properties such as color-adjust, object-fit, and grid without having to break w3c specifications if the property is formally implemented differently later on. The web industry is rapidly developing and companies that offer web browser software know that the specification could change from draft to final specifications. 

<div class="text-center blog-quote">
"If the final definition of a property is different, browsers can add a new CSS property without breaking pages that depend on the old specification."
</div>


****

## Should I Prefix?
In the list above are several of the popular vendor prefixes you will need to get familiar with as they correspond to the widely used browsers today. Without vendor prefixes, you could not offer the best browser support possible. This is because visitors to your website may not be using the latest version of chrome, firefox, or any other browser. Previous browser versions may require a vendor prefix or even an older syntax version of certain properties. Even if your users are using the latest browser version, the properties which you may be using could be experimental which requires a vendor prefix. It is difficult to know exactly which CSS properties need vendor prefixes in order to ensure the best browser support. Which is why I recommend using some sort of tool whether its a reference tool to check for properties and their vendor prefixes or automation tools for filling in the vendor prefixes for you. 

****

## Hand Author Prefixes
Hand authoring refers to the editing of code files through a text editor such as Sublime, Atom, or Brackets. A mistake could be made as all the prefixes have to be added in manually, but it is the simplest approach. If you are using the transform property and other properties with mixed browser support, then you will have to add the duplicates of the property with all of the vendor prefixes.


{% highlight css linenos %}
.class-item {
   -webkit-transform: scale(1.1);
   -moz-transform: scale(1.1);
   -ms-transform: scale(1.1);
   -o-transform: scale(1.1);
   Transform: scale(1.1);
}
{% endhighlight %}

As you can see, it may be easy to leave out a vendor prefix unintentionally. At least there are some compiled lists online of which properties need vendor prefixes such as [Should I Prefix](http://shouldiprefix.com/) and [Can I Use](https://caniuse.com/) to use as reference tools. This is where automation tools can help ease the process of applying vendor prefixes correctly. There are plenty of autoprefixer tools out there, you can even find some plugins for your specific text editor. There are also JavaScript libraries such as [Lea Verou’s -prefix-free](http://leaverou.github.io/prefixfree/) which will read your CSS style sheet and apply vendor prefixes as the web page is loaded, but that could slow things down. The one tool I want to look at is [Autoprefixer Online](https://autoprefixer.github.io/). 


****

## Autoprefixer Tool
The Autoprefixer Online tool is as easy as copying and pasting your code into the text box and then copying and pasting the results back into your style sheet. The browser support data comes from Can I Use and dictates which properties get which vendor prefix. With this method, you can forget about writing any vendor prefixes as Autoprefixer will take care of it for you. You can even filter through browser versions to tailor together your own set of browser support.

![Autoprefixer Online Tool]({{"../assets/autoprefixer-tool.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Autoprefixer's Online Tool
</div>

Looking at the image above, we can see that all of the necessary vendor prefixes are added in for you. Of course there are easier ways to use the Autoprefixer tool in production, but this is the simplest method to get started using Autoprefixer. 

****

## Conclusion
There are plenty of ways to add vendor prefixes to your code, but some ways are easier than others. Hand authoring vendor prefixes could lead to mistakes and a loss in browser support which is why I recommend using some sort of prefixing tool. There are plenty of great prefixing tools out there, but Autoprefixer seems to stand out as the best in terms of implementation and ease of use whether you are using plugins for your text editor, using with preprocessors, using with build tools, using a script, or copying and pasting into the browser. Once you start implementing Autoprefixer, you can forget about hand authoring any vendor prefix. You can also filter the browser support to increase or decrease the range of browser versions supported through vendor prefixes. Also, running your code through Autoprefixer can remove unnecessary vendor prefixes and even add older syntax versions of properties for improved browser support. Now you can forget about vendor prefixes and when to apply them!


****

### More Blog Posts
[Bootstrap Column Ordering & Hiding]({% post_url 2017-08-07-bootstrap-col-order %})

[Modular CSS & Naming Conventions]({% post_url 2017-10-11-modular-css-naming-conventions %})

[Chrome DevTools 101]({% post_url 2017-07-25-chrome-devtools-101 %})
