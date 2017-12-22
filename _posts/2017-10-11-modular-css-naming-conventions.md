---
layout: post
title:  "Modular CSS & Naming Conventions"
date:   2017-10-11 23:35:25 -0600
categories: October
---


#### Published October 11, 2017 by David Horn


## Introduction
Imagine you are designing a website component like a navigation menu, a footer, or an image carousel. You know this will require several HTML tags and class attributes, but do you know what class names you are going to use? Would the class names make this particular website component reusable on other projects? Even if you know what class names you are going to use, you may not be familiar with CSS Naming Conventions. CSS naming can be very difficult and is fervently debated. As a result of such debate, several popular methodologies have emerged such as SMACSS, BEM, and OOCSS. This blog article is going to focus on a general modular approach to CSS naming which may help you improve your CSS naming conventions so that you may build reusable website components. 

****

## Reusable Modules
Whether it’s referred to as modules or components, you should think about CSS in terms of objects because that will help you create names for your custom classes. They can also be described as interface elements such as a modal, button, or navigation bar. We will focus on defining our modules using only class selectors. ID and element selectors are better suited for other purposes rather than creating reusable modules and CSS Specificity may add unnecessary stress while coding your stylesheets.

When thinking of CSS class names in terms of the objects they style, you will find it easier to maintain your stylesheets and debug issues. Let’s look at a simple button object example:

{% highlight css linenos %}
.btn {
   Padding: 10px 15px;
   Font-size: 1em;
   Color: #fff;
   Background: #dd8a00;
}
{% endhighlight %}

We can even split the default button object styled to allow for additional button variants such as smaller or larger buttons.

{% highlight css linenos %}
.btn {
   Padding: 10px 15px;
   Font-size: 1em;
   Color: #fff;
   Background: #dd8a00;
}
.btn-sm {
   Height: 40px;
   Width: 80px;
}
.btn-md {
   Height: 75px;
   Width: 150px;
}
.btn-lg {
   Height: 100px;
   Width: 200px;
}
{% endhighlight %}

As you can see we are defining a simple button object, then we are using variants which will be widely used throughout a web project. Since we are defining the object in the CSS class name, we could expand this concept to more complex objects as well such as a navigation bar. 

Avoid CSS class names that describe their style and appearance:

{% highlight css linenos %}
.btn-lg-blue {
   Height: 100px;
   Width: 200px;
   Background: #00f;
}
.btn-md-orange {
   Height: 75px;
   Width: 150px;
   Color: #da8000;
}
.btn-md-red-bold {
   Height: 75px;
   Width: 150px;
   Border: 4px solid #fff;
}
{% endhighlight %}

Looking at the code example above, you can see how the class names become more vague as we try to be more specific about the type of component that we are styling. When we add bold or color to the CSS class name, we cannot be specific enough without adding onto the already long class name. The boldness in the second class name was referring to the border boldness and not font boldness while the color orange was referring to the font color and not the background color. This is why we should avoid adding terms like bold and color to our class names and stick to more general descriptions such as sizes which will be used in differently from one another throughout the website. 

****

## CSS Frameworks
Let’s dive into some more CSS naming examples by looking at some CSS Frameworks. Frameworks are stylesheets available to allow for more compliant code in web design and development that reduces the overall workload for web projects to production. In this example we will be looking at the Bootstrap framework. You can download Bootstrap for free at the official website (www.getbootstrap.com/). Here is a snapshot of the Bootstrap framework’s stylesheet, bootstrap.css you can see how they named their classes for a mobile-first navigation menu website component.  

![Bootstrap Framework]({{"../assets/bootstrap-nav-component.jpeg" | relative_url}}){:class="img-blog-wide"}
<div class="text-center blog-caption">
Bootstrap Framework Navigation Component
</div>

Bootstrap’s documentation shows that the navigation menu website component is named <b>.navbar</b>. The logo or brand is named <b>.navbar-brand</b> and serves as a link to the home page. Each link in the navigation menu is a part of the <b>.nav .navbar-nav</b> unordered list. The object-oriented naming means this component can be easily reused for any number of projects. Remember, the class name should signify the type of content block that it is, you should not describe its appearance in the class name. 

****

## Conclusion
When thinking of names for your CSS classes, you should think of your HTML elements in terms of objects that are going to be styled to better suit their purpose. You should name your CSS classes in terms of what objects they are rather than most of their characteristics. If you are struggling for any ideas on how to properly name your CSS classes in a modular way, then you can refer to several different CSS framework’s documentation or you can refer to any of the naming methodologies such as SMACSS, BEM, and OOCSS as they dive deep into the subject of CSS naming conventions. Remember, taking a modular approach to CSS naming conventions can save you time in debugging and in future development by allowing you to reuse components that you are building. Modular class naming is not the only type of methodology, therefore if you did not like the modular approach for class naming conventions then there are other options that exist that you can explore. 

****

### More Blog Posts
[Exploring Navigation Patterns]({% post_url 2017-07-18-exploring-navigation-patterns %})

[Reducing HTTP Requests]({% post_url 2017-05-27-reducing-http-requests %})

[Effective Kanban for Web Design]({% post_url 2017-08-29-kanban-for-web-design %})


