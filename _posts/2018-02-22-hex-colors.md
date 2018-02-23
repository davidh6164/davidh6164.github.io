---
layout: post
title:  "Generating Colors with Hexadecimal"
date:   2018-02-22 23:35:25 -0600
categories: February
---


#### Published February, 22 2018 by David Horn


## Contents
* Hex Codes
* 6-digit Hex Codes
* 3-digit Hex Codes
* 8-digit Hex Codes



## Introduction
The way we communicate with each other is different from how we communicate with computers and hexadecimal colors are no different. Hexadecimal color values are legible representations of their binary values which are supported by all web browsers. Hexadecimal colors range from about 16 million colors, opening up more options for color schemes and palettes. The syntax for a hexadecimal color includes a hash tag or octothorpe <b>#</b> to start followed by a series of letters and numbers.

****

## Hex Codes
For example, the hexadecimal value <b>#FF8D00</b> would be the color orange. Hexadecimal colors can be in 3-digits, 6-digits, or 8-digit values. Since decimal numbers run from only 0-9, letters A-F replace the values of 10-15 respectively. We will go through the differences between each of the value types.

****

## 6-digit Hexadecimal Colors
The colors in hexadecimal are specified by the first two characters representing red, the second two characters representing green, and the last two characters representing blue. Integers between 00 - FF describe the intensity of the color.  This would appear as <b>#rrggbb</b>.

****

## 3-digit Hexadecimal Colors
Since hexadecimal colors are specified with six digits, some of these codes can be shortened if their corresponding color value <b>rrggbb</b> is the same. For example, the color white in hexadecimal is <b>#FFFFFF</b>, but we can shorten that to <b>#FFF</b> since the red-red-green-green-blue-blue values are the same. Another example, is <b>#F03</b> or <b>#FF0033</b> which represents the color pink. Since there are two of the same digits in each red, green, and blue hex code values, you can shorten the hex code to include only one of each red, green, and blue hex code values. Therefore, <b>#FF0033</b> can be shortened to <b>#F03</b>.

****

## 8-digit Hexadecimal Colors
Using 8-digit hexadecimal colors, you can add alpha transparency values to your colors. This is very similar to rgba() color values. The syntax would be <b>#rrggbbaa</b>. Unfortunately, only Safari, Firefox, and Chrome support this feature. Microsoft’s Internet Explorer does not support this feature as well as the their Edge browser currently according to [Can-I-Use](https://caniuse.com/#feat=css-rrggbbaa).

****

### Conclusion
Besides the limited browser use of 8-digit hex codes, you can still take advantage of 3-digit and 6-digit hex codes which enjoy a wide range of support among the web browsers. Eventually, web browsers will gain more widespread support for alpha transparency hex code notation, but for now you should use the rgba() syntax and use fallback colors as well as polyfills.

****

### More Blog Posts
[Carousel Design Patterns]({% post_url 2018-02-19-carousel-design-patterns %})

[Chrome DevTools 101]({% post_url 2017-07-25-chrome-devtools-101 %})

[Bootstrap Column Ordering]({% post_url 2017-08-07-bootstrap-col-order %})
