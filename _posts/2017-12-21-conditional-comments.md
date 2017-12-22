---
layout: post
title:  "Conditional Comments At A Glance"
date:   2017-12-21 23:35:25 -0600
categories: December
---


#### Published December 21, 2017 by David Horn

## Introduction
Conditional comments are comments that are conditional based on the expression specified.  It is important to note that most browsers and their various versions do not support conditional comments in HTML, but Internet Explorer versions 9 and below will. Legacy browsers do not have full support of all the modern web features, therefore to offer support for these older browser versions we will utilize conditional stylesheets. As support for older browser versions fade away, you can easily remove the conditional comment to remove the code. 

****

## Syntax
Conditional stylesheets are going to be placed in the <head> tag and look like this:

{% highlight html linenos %}
  <!-- [if IE]-->
    <link href=”hackystyles.css” rel=”stylesheet” type=”text/css”>
  <![endif]-->
{% endhighlight %}

In the example above, support for IE includes all versions up to 9. If you want to target a specific version you can specify after IE. You can use various operators to produce a more specific or generalized conditional comment:

<table class="data-table">
 <tr>
  <td>lt</td>
  <td>less than</td>
 </tr>
 <tr>
  <td>gt</td>
  <td>greater than</td>
 </tr>
 <tr>
  <td>gte</td>
  <td>greater than or equal to</td>
 </tr>
 <tr>
  <td>!</td>
  <td>not</td>
 </tr>
</table>

You can use the operators by adding them before IE. For example:

{% highlight html linenos %}
 <!-- [if gte IE 5]-->

 <![endif]-->
{% endhighlight %}

****

## Uses
Versions up to 9 of Internet Explorer support conditional comments while all other browsers and higher versions of Internet Explorer do not support HTML conditional comments. It is common to have a separate stylesheet which addresses some of the issues found in IE8 and below. One of the most common conditional stylesheets is the [HTML5Shiv](https://www.paulirish.com/2011/the-history-of-the-html5-shiv/). The purpose of the HTML5Shiv is to hack some support for HTML5 elements for old IE versions by leveraging JavaScript on certain elements. This is especially important specifically for versions 6-8 of Internet Explorer do not support unknown elements, meaning that these elements cannot hold children and cannot be styled. 

Support for version 6 and below of Internet Explorer are especially tricky to amend and therefore will require a separate stylesheet which can be called on using conditional comments. Instead of creating a separate stylesheet, you can utilize [Google’s universal IE6 stylesheet](https://code.google.com/archive/p/universal-ie6-css/). 

****

## Conclusion
You can easily support older versions of browsers including legacy browsers by utilizing conditional comments. Internet explorer versions 9 and below can be supported effortlessly with the help of conditional comments which allow scripts and stylesheets to be targeted by certain browsers and their various versions. 

****

### More Blog Posts
[Reducing HTTP Requests]({% post_url 2017-05-27-reducing-http-requests %})

[Utilizing CSS Target]({% post_url 2017-05-29-utilizing-css-target %})

[Exploring Navigation Patterns]({% post_url 2017-07-18-exploring-navigation-patterns %})


