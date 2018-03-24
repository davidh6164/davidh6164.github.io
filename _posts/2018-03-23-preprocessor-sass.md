---
layout: post
title:  "CSS Preprocessors - Why Use Sass?"
date:   2018-03-23 23:35:25 -0600
categories: March
---


#### Published March 23 2018 by David Horn


## Contents
* What is a CSS Preprocessor?
* Switching from CSS to Sass
* Advantages of Using a Preprocessor
* Setting Up & Using Compilers
* Sass Frameworks
* Basic Sass Features


## What is a CSS Preprocessor?
Preprocessors can extend the capabilities of CSS because regular CSS does not yet provide certain features that could improve your workflow. Such features include variables, mixins, operations, nesting, and more. You may be wondering which processor may be best and you will be happy to know that a handful of preprocessors exist that are favored by developers and designers so try them all out as you may prefer a different syntax or framework. 


****


## Switching from CSS to Sass
As you transition from writing plain CSS code to using a preprocessor such as Sass (Syntactically Awesome Stylesheets), you may have fears or doubts about how smoothly the transition will occur. I am writing this blog post to tell you that Sass does not have to disrupt your process or destroy your workflow. In fact, Sass may improve and hasten your overall workflow. This will allow you to streamline your styling process as you clean up your code files of repetitive lines of code without breaking your project. This blog post is intended to cover the most basic topics of switching from CSS to Sass including, but not limited to, installation, use cases, basic Sass features, and reasons on why you might want to make the switch. 

Sass syntax is an extension of CSS3, also known as SCSS or Sassy CSS, which means its syntax is similar to that of CSS. Instead of learning new code syntax to enhance the features of CSS, you can use the same CSS syntax to expand the capabilities of CSS using Sass. You can also convert normal CSS files into Sass-coded files in stages. The file extension changes from <b>.css</b> to <b>.scss</b>. You may see the old Sass file extension which was <b>.sass</b>, but is not in use anymore. 


****


## Advantages of a CSS Preprocessor 
There are many advantages to using a CSS Preprocessor whether it is SASS, LESS, or Stylus. One of the main advantages to using a preprocessor is the ability to make your CSS DRY, or help reduce the repetition of properties and their values through mixins and variables in a fashion not too dissimilar to programming languages. The DRY (Don’t Repeat Yourself) principle was first coined by Andy Hunt and Dave Thomas. The basic premise behind this coding principle is to avoid duplicating code as it can harm code readability for developers and could possible negatively impact your final product. Since CSS sometimes demands that you repeatedly code declarations and rules over and over, it is not always DRY. Preprocessors can help eliminate some of the excess coding.

Since writing CSS can become repetitive you may want to consider preprocessors. Imagine you are adding in hex color values for your primary and secondary colors in your color scheme or wanting to add a series of properties to certain elements. Normally writing out code for these purposes can be tedious and repetitive, that is one reason why a preprocessor may be attractive to developers and designers. A CSS preprocessor can enhance plain CSS capabilities and is easily compiled it into regular CSS code. 

I decided to use Sass because it seems to be a more developer-friendly preprocessor with a large fan-base that feeds its active development. This may be because Sass has been around for over a decade with plenty of documentation and use cases published. No matter what choice you make, you have made a good choice to start using a preprocessor. 


****


## Set Up & Using Compilers 
There are several ways to get started using a preprocessor which will depend on your skill level. First, you will need a compiler to read and convert your preprocessor code into plain CSS code. I choose to use a third-party application such as [Koala](http://koala-app.com/) because it has an easy-to-use GUI that is great for beginners and is completely free. This will ultimately speed up the process and prevent any hitches. More advanced developers may opt to compile their code from the command line which I will not cover here. I listed a few other popular compiler applications below for your convenience: 

* [CodeKit - $34](https://codekitapp.com/)
* [Prepros - Unlimited Trial or $29](https://prepros.io/)

I personally use Koala because it offers great preprocessor support including Less, Sass, Compass, and CoffeeScript. Koala is completely free with no trials or ads. It is also very easy to use. To get started you just drag and drop a folder into the Koala window which will add your project. You could also click on the plus icon in the top left corner and select your project folder. The files will be output into the project’s file directory by default. You can change the output path by right-clicking on the file and select "Set output path" or click the edit icon near the output path. For more documentation check out the Koala app website. 

<div class="text-center blog-caption">
    Tip: Keep in mind that although text editors can come pre-packaged with an addon that highlights and recognizes SASS and SCSS syntax, they probably will not compile preprocessor code into plain CSS code which is what makes a compiler important. 
</div>


****


## Sass Frameworks
Much like a CSS Framework, Sass Frameworks are used similarly and offer many of the same benefits with the added ability to code using preprocessors. There are literally dozens of Sass frameworks out there and I have created a small list of some options to check out below:

* [Compass SASS Framework](http://compass-style.org/)  
* [Bourbon SASS Framework](https://www.bourbon.io/) 
* [Sierra SASS Framework](http://sierra-library.github.io/)
* [Scooter SASS Framework](http://dropbox.github.io/scooter/)

I haven’t tried any of these Sass frameworks at the time of publishing this blog post, but I intend to check them all out later down the road and encourage everyone to do the same if you have not already. 


****

## Basic Sass Features
There are plenty of great features that Sass and other preprocessors offer. Some of the features include mixins, variables, nesting, import, extend, and operations. 

### Variables
You can store property values in a variable which can be reused later. The benefit of this is if you have specific values that you fail to remember, you can basically name the specific value with a variable that you can easily recall.

Sass example:
{% highlight css linenos %}
$primary-color: #ff8d00;
$secondary-color: #3d3d3d;
$font-stack: 14px/1 “Lato”, sans-serif;

Body {
   Color: $primary-color;
   Font: $font-stack; 
}
Nav {
   Color: $secondary-color;
}
{% endhighlight %}

CSS example:
{% highlight css linenos %}
Body {
   Color: #ff8d00r;
   Font: 14px/1 “Lato”, sans-serif;
}
Nav {
   Color: #3d3d3d;
}
{% endhighlight %}

### Mixins
You can include a bunch of properties and their values into one group and then easily recall these properties and their values for later use. The example below is the same example found on the Sass official website.

Sass example:
{% highlight css linenos %}
@mixin border-radius($radius) {
   Border-radius: $radius;
}
.content-box {
   @include border-radius(10px);
}
{% endhighlight %}

CSS example:
{% highlight css linenos %}
.content-box {
   Border-radius: 10px;
}
{% endhighlight %}

### Nesting
Similar to how nesting works in HTML, you can nest CSS declarations within one another to reduce the repetition and length of those declarations. You can also visually see how the elements are nested in HTML with your CSS code, neat! 

Sass example:
{% highlight css linenos %}
.custom-table {
   tr {
      Padding: 10px 0;
   }
   td {
      Padding: 0 20px;
   }
}
{% endhighlight %}

CSS example:
{% highlight css linenos %}
.custom-table tr {
   Padding: 10px 0;
}
.custom-table td {
   Padding: 0 20px;
}
{% endhighlight %}

### Import
Normally, with CSS the @import rule allows you to split your CSS code into multiple files. This creates additional HTTP requests which can slow down your website’s loading speed. Sass combines all of the CSS files into one when you use the @import rule to reduce the number of HTTP requests. 

### Extend
Extend is another excellent feature that lets you share properties from one selector rule to another using the @extend rule.

Sass example:
{% highlight css linenos %}
.btn {
   Border: 1px solid #fff;
   Padding: 10px;
}
.danger {
   @extend .btn;
   Background-color: #ff0000;
}
.success {
   @extend .btn;
   Background-color: #008000;
}
{% endhighlight %}

CSS example:
{% highlight css linenos %}
.btn, .danger, .success {
   Border: 1px solid #fff;
   Padding: 10px;
}
.danger {
   Background-color: #ff0000;
}
.success {
   Background-color: #008000;
}
{% endhighlight %}

****

## Conclusion
As you can see, preprocessors can be a powerful tool which can expand the capabilities of plain CSS. There is no one-size-fits-all for preprocessors, and you may find that the preprocessor that works best for you may not work best for the next person in their development or design process. The examples and features covered here only scratch the surface of what makes a preprocessor a worthwhile learning experience. 

****

### More Blog Posts
[Effective Kanban for Web Design]({% post_url 2017-08-29-kanban-for-web-design %})

[Utilizing CSS Target]({% post_url 2017-05-29-utilizing-css-target %})

[Custom Counters]({% post_url 2018-02-02-custom-counters %})
