---
layout: post
title:  "CSS Animations: Transitions"
date:   2017-10-31 23:35:25 -0600
categories: October
---


#### Contents
* Why Use Transitions?
* Transitions
* Duration & Easing
* Coding Examples
* Browser Support
* Debugging



****

## Introduction
As web designers, we may know that animations can enhance a web design, but we may not be familiar with how exactly all of these animations are coded and then applied to various components. Since CSS animation browser support has increased in recent years, it has become easier to add simple animations by using <b>transitions</b>. Transitions are the most widely used method for applying animations. There are more ways to add animation to a web design, but those will be covered in later blog posts. 

****

## Why Use Transitions?
Transitions are faster than comparable JavaScript animations, because transitions are natively handled by the browser. JavaScript also requires more lines of code to produce a similar effect when compared to CSS3 transitions. Animations have different states or waypoints which define how they are designed at any given time. Transitions make use of the start and end waypoints or initial and active states.

****

## Transitions
Transitions are an animated effect that can be triggered when attached to an event. In CSS, this event could be hover, active, focus, and target. These events can be specified by using <b>pseudo-classes</b>. By making use of the start and end waypoints or initial and active states, the browser will render the animation between the two defined states without the designer having to define individual states between the initial and active states. For instance, an element that is initially blue and 100px in height and width can smoothly animate to an orange element that is larger when hovered over.

{% highlight css linenos %}
.circle {
  border-radius:50%;
  background: blue;
  height: 100px;
  width: 100px;
  transition: all 0.5s ease-in-out; 
}

.circle:hover {
  background: orange;
  height: 200px;
  width: 200px;
}
{% endhighlight %}

Using the transition property you can decide which elements get smoothly animated and with what type of easing. In the code example above, I decided to apply a transition to all possible elements, with a half second duration, and ease-in-out which stands for ease in and ease out. 

It is important to keep in mind that not every element can be animated, only certain CSS properties can be animated such as font-size, background-color, height, width, and directional offset(left, right, top, bottom) properties. The list is long and there is one compiled which you can visit by clicking the link: [CSS Animatable Properties](http://oli.jp/2010/css-animatable-properties/).

****

## Duration & Easing
Transition-duration is a part of the transition property. This property specifies how long the animation should occur which is measured in milliseconds or seconds. The default value for transition-duration is zero, therefore no animation will take place by default. You can also list out multiple durations by separating each value with a comma. Each duration will be applied to each corresponding property specified in the transition-property. Transition-property holds the list of CSS properties that should be animated. In the coding example above, you can see I used the transition shorthand property and gave transition-property a value of all. The all value allows you to select all possible CSS properties to animate. 

Transition-timing-function controls the easing, or a sort of acceleration curve, which alters the speed of the animation over the same duration of time. There are various values for this property such as linear, ease, ease-in, ease-out, ease-in-out, and cubic-bezier. [Cubic-bezier](http://cubic-bezier.com/#.17,.67,.83,.67) is the acceleration curve value. Each transition-timing-function value has as similar cubic-bezier value. For example, ease-out starts off quickly, then decelerates through the end of the animation effect. The cubic-bezier value equivalent for ease-out would be cubic-bezier(0, 0, 0.58, 1). Knowing this, we could create very specific acceleration curves which could be tailored to individual animations to make them smoother in their execution. We will take a more in-depth look at cubic-bezier curves in a later blog post. 

****

## Browser Support 
CSS animations have become better supported in recent years. According to Can I Use(https://caniuse.com/#search=transitions), CSS Transitions are widely supported amongst popular browsers and their various versions. This means you can feel free to use transitions in your projects without much worry for JavaScript fallbacks. You may have to use a vendor prefix for older browser versions so keep that in mind. 


****

## Debugging
Debugging animations can be relatively simple with the help of Chrome Dev Tools(http://davidcodes.net/july/2017/07/25/chrome-devtools-101.html). One of the features of Chrome Dev Tools is the ability to inspect animations. The animations panel provides tools to easily change the timing-function of an animation and which property is being animated. There are also many tools online that are free which can aid you in your animation creation.  I personally recommend Lou Verou’s [Cubic-bezier](cubic-bezier.com) tool which is great for illustrating acceleration curves that you can customize. 

****

## Conclusion
CSS Transitions are quickly becoming the most popular choice for adding simple animations. Transitions are widely supported among web browsers which means you do not have to code some of your animations in JavaScript. This reduces overall lines of code for your web project and still allows you to create smooth animations. There are also plenty of online tools which can help you alter timing functions and debug shifty animations. 



