---
layout: post
title:  "Customizing Counters"
date:   2018-02-02 23:35:25 -0600
categories: February
---


#### Published February 2, 2018 by David Horn

## Introduction
There are only a handful of CSS properties which directly target the styling such as list-style-type, list-style-image, and list-style-position. If you wish to style the counter or numbering of lists in a more customized way, then you should use counter-increment.

****

## How it works
Create a class for a list element, apply counter-increment CSS class to list items, then customize the counter using the CSS pseudo-element of ::before on the list items. Do not forget to set the list-style-type to none.

For the sake of example I will declare my list class .custom-list. Next is to remove the list-style-type styling. You may need to adjust the margin and padding to suit your styling needs.

{% highlight css linenos %}
  .custom-list {
   list-style-type: none;
  }
{% endhighlight %}

Now, I will apply the counter-increment property to the custom list items with a custom name that will be utilized with the ::before psuedo-element. The value of the counter-increment property is not a specific value, you could place any value and it will serve as a name for your customized counter. This value will be required as a value within the content property’s counter( ) value for customized list items. 

{% highlight css linenos %}
 .custom-list li {
   counter-increment: custom-list-numbers;
}
.custom-list li::before {
   content: counter(custom-list-numbers);
}
{% endhighlight %}

****

## Examples
![Custom List 1]({{"../assets/custom-counter-1.PNG" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Customized Counter Example 1
</div>

****

## Browser Support
CSS Counters are well supported by modern browsers and some of their previous versions. It looks like browser support will only improve from this point so it is safe to use. There is an experimental psuedo-element which would allow designers to target the list item counters known as ::marker. Unfortunately, the ::marker pseudo-element is not well supported, but in the future this will become more widely known and available for use. As of today’s date, it is considered experimental and should not be used.

****

### More Blog Posts
[Reducing HTTP Requests]({% post_url 2017-05-27-reducing-http-requests %})

[Utilizing CSS Target]({% post_url 2017-05-29-utilizing-css-target %})

[Exploring Navigation Patterns]({% post_url 2017-07-18-exploring-navigation-patterns %})


