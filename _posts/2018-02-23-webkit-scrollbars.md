---
layout: post
title:  "WebKit Scrollbar Styling"
date:   2018-02-23 23:35:25 -0600
categories: February
---


#### Published February, 23 2018 by David Horn


## Contents
* WebKit Pseudo-elements
* WebKit Pseudo-classes
* jQuery Plugins


## Introduction
Scrollbar styling in web design has always been unique to certain browsers and has never been adopted by the W3C standard. About 18 years ago, Internet Explorer version 5.5 recognized certain non-standard CSS properties that had to do with scrollbar styling such as <b>scrollbar-base-color</b>, but eventually Internet Explorer dropped the support for scrollbar-related properties.

Now, customizing scrollbars can be achieved with WebKit vendor specific properties for browsers such as Chrome, Safari, and Opera. These WebKit CSS properties that deal with scrollbar styling has been around since 2009 and made popular when David Hyatt was blogging about the endless possibilities for custom scrollbars.

![Scrollbar Pieces]({{"../assets/scrollbar-pieces.png" | relative_url}}){:class="post-lg-2"}

****

## WebKit Pseudo-elements
WebKit browsers are web browsers that utilize the WebKit browser engine. These browsers include Chrome, Safari, and Opera and they support the non-standard <b>::-webkit-scrollbar</b> pseudo-element and all of its variations:

* <b>::-webkit-scrollbar</b> - targets the scrollbar itself.
* <b>::-webkit-scrollbar-button</b> - targets the scrollbar directional arrows.
* <b>::-webkit-scrollbar-thumb</b> - targets the draggable scrollbar handle.
* <b>::-webkit-scrollbar-track</b> - targets the scrollbar below the scrollbar thumb.
* <b>::-webkit-scrollbar-corner</b> - targets the bottom corner where both horizontal and vertical scrollbars meet.
* <b>::-webkit-resizer</b> - targets the draggable resizing handle that appears at the bottom of windows.

These are the necessary pseudo-elements for targeting scrollbars which CSS properties can be applied to for customizing your own scrollbar design. There are also WebKit pseudo-classes that range from targeting horizontal scrollbars, vertical scrollbars, and different states of the scrollbar.

****

## WebKit Pseudo-classes
Scrollbar pseudo-classes can target scrollbars for styling under certain circumstances:

* <b>:horiztonal</b> - targets any scrollbar that has a horizontal orientation.
* <b>:vertical</b> - targets any scrollbar that has a vertical orientation.
* <b>:start</b> - targets scrollbar track pieces and buttons before the thumb.
* <b>:end</b> - targets scrollbar track pieces and buttons after the thumb.
* <b>:double-button</b> - targets buttons and track pieces that are together at the same end of a scrollbar.
* <b>:single-button</b> - targets buttons and track pieces that are alone at either end of the scrollbar.
* <b>:no-button</b> - targets scrollbars that do not have buttons on either end.
* <b>:corner-present</b> - targets scrollbars that have corners present.
* <b>:window-inactive</b> - targets scrollbars on windows that are inactive or scrollbars that are not selected.

****

## jQuery Plugins
jQuery plugins can be utilized to style scrollbars that will work across a wide range of web browsers. You can find various jQuery plugins hosted on Github or through the official jQuery plugin web page. There are plenty of options tailored for certain project needs like scrollMagic or slimScroll, go check out the [jQuery plugin](https://plugins.jquery.com/tag/scrollbar/) web page for all of the different plugin options.

****

### Conclusion
Unfortunately, Firefox, Internet Explorer, and Microsoft’s Edge browsers do not support these WebKit CSS properties therefore jQuery plugins are recommended for complete browser support. According to the Mozilla Developer Network (MDN), the CSS features will not be standardized anytime soon so you should avoid using it in your production websites due to large incompatibilities. If you are going to use CSS scrollbar pseudo-elements and classes then utilize a polyfill for increased browser support.

****

### More Blog Posts
[Generating Colors with Hexadecimal]({% post_url 2018-02-22-hex-colors %})

[Bootstrap Column Ordering]({% post_url 2017-08-07-bootstrap-col-order %})

[Custom Counters]({% post_url 2018-02-02-custom-counters %})
