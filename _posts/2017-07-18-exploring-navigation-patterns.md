---
layout: post
title:  "Exploring Navigation Patterns"
date:   2017-07-18 23:35:25 -0600
categories: July
---


#### Contents
* Top Navbars (Horizontal Navbars)
* Search Forms
* Internal Navigation Links
* Vertical Navigation Menus
* Pagination
* Breadcrumbs
* Footer Navigation

****

## Introduction

Navigation design patterns are one aspect of User Interface design. These patterns are also a part of a website’s usability and that user’s experience. Navigation patterns offer a layout familiar to users that allow them to easily navigate throughout the website. Site navigation can be considered the foundation for an effective website. Consider the Top Navbar pattern,  users instinctively know that words that are scrawled across the top are internal links to different web pages of a website. Pagination is used to display pages of search results on famous search engine websites such as Google and Bing. There are more navigation design patterns in web design, as I introduce some of these patterns we shall look at some examples of how they are implemented in the real-world. 

****

## Top Navbars (Horizontal Navbar)

CSS Frameworks have popularized the Top Navbar design that appears in various forms. Navbars are usually placed near or at the top of the viewport because the bottom of the viewport is viewed as more obtrusive. These patterns are normally placed beside or below the website header. For more complex navbars, utilize Dropdown Menus which add sections with more options to the navbar. You can easily place 6-10 links with the option to utilize Dropdown Menus on a navbar. The biggest drawback being that it would be hard to exceed the limit of 10 links on a navbar. 

Sticky Navbars are one form of Top Navbars that is either fixed to the top of the viewport, or soon becomes fixed to the viewport once the header is scrolled out of view. This provides a better User Experience if web pages exceed an average length in height. CSS Tricks utilizes a Slide-out Top Navbar displaying the different categories of content with icons and text. 

![Top Navbar]({{"../assets/top-navbar.png" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Top navbar navigation pattern
</div>

****

## Search Forms

Search Forms are text input fields coupled with a submit button which directs users to a Search Results webpage. When users are searching through websites with a lot of content, they expect to see a search option in a prominent area of the layout such as the navbar or navigation menu. A common design pattern is including a search bar and button in the upper-right hand corner. By offering a search option you can improve the User’s Experience by helping direct users to the content they are choosing. An expandable input field coupled with a search button can save space in the layout. Facebook, Youtube, Gmail and ESPN among many other popular websites have prominent Search Forms to help guide users through massive amounts of web content.

ESPN utilizes a magnifying glass icon to represent their Search Form with the text input field hidden until the icon is clicked. Once the icon is clicked, then the text input field is revealed. Once the text input field is revealed, an X close icon is also revealed at the same time to allow users to collapse the text input field. Consider implementing a Search Form for larger websites. 

![ESPN Search Form]({{"../assets/search-form.jpeg" | relative_url}}){:class="post-md-4"}
<div class="text-center blog-caption">
Search form navigation pattern - ESPN
</div>

****

## Internal Navigation Links

Internal Navigation Links are great for long-scrolling websites. If the website has a lot of text content on one webpage then consider using a small list at the top of the content to provide anchor links to different sections of the website. Use this in combination with Sticky Navigation Menus for long-scrolling website to provide a better User Experience.

This feature should not draw much attention away from the text content in terms of its design and importance. A simple list of links is a great, yet simple solution. This design can be viewed on almost every Wikipedia webpage. Amazon uses this design to display user’s product reviews by star-rating. This is also great for online books and longer blog posts. 

![Amazon Reviews Internal Links]({{"../assets/internal-links.jpeg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Internal links navigation pattern - Amazon Reviews
</div>

****

## Vertical Navigation Menus

If you have a website with a large catalog of items that should be easily accessed by users then you should use the Vertical Navigation Menu. The large number of navigation links to various web pages would not be idealistically displayed on a horizontal Top Navbar. 

The Vertical Navigation Menu should be displayed on either the left or the right side. Now there is room to list plenty of links and even identify different sections of links. This UI design appears in a variety of forms including Slide-out Navigation Menus and in combination with the Top Navbar, especially for mobile designs. Slide-out Navigation Menus can provide additional viewport space that would otherwise be consumed by a navigation menu in some form. 

![Vertical Navigation Menu]({{"../assets/vertical-menu.jpg" | relative_url}}){:class="post-lg-2"}
<div class="text-center blog-caption">
Vertical navigation menu navigation pattern
</div>

****

## Pagination

Pagination is a form of secondary navigation. Numbered buttons are laid out horizontally to signify the number of pages that can be cycled through usually in a related section. Sometimes arrow icons are also provided for users to cycle forwards or backwards one web page at a time. Search Results webpages make great use of the Pagination design pattern. The Bootstrap Framework offers Pagination as one of the components in their framework. Below is how they appear by default.

![Pagination]({{"../assets/pagination.jpeg" | relative_url}}){:class="post-md-4"}
<div class="text-center blog-caption">
Pagination navigation pattern
</div>

****

## Breadcrumbs
Breadcrumbs are a form of secondary navigation. This type of navigation should be used in addition to other forms of navigation such as a Vertical Navigation Menu or a Navbar. When a website has multiple levels in its hierarchy, then they can help orient users as to what webpage they are viewing and where exactly they are in the website. The breadcrumbs not only tell users where they are at in the website, but also serve as links so that users could navigate backwards or up various levels instead of navigating endlessly. 

![Breadcrumbs]({{"../assets/breadcrumbs.jpeg" | relative_url}}){:class="post-md-4"}
<div class="text-center blog-caption">
Breadcrumbs navigation pattern
</div>

Breadcrumbs are usually formatted as a horizontal list of text links that appear just below or beside the main navigation. There are either symbols or icons between these text links to help denote the hierarchy. This form of navigation is great for blogs and other large websites, but can backfire on smaller websites because they can cause confusion for the users. Online stores such as Helly Hansen make great use of breadcrumb navigation to discern the various categories of products and where in the hierarchy they are on the website. You can easily browse for more Men’s products or go back to the Shop webpage or view the homepage. 

****

## Footer Navigation
Footer Navigation is another form of secondary navigation. As always, do not rely on a secondary form of navigation as your main form of navigation because it will not work. The Footer Navigation includes a list of links that would otherwise not fit in the website’s main navigation design or to repeat the main navigations links. This is useful if you utilize the navbar design pattern, but not the Sticky Navbar feature. If your web pages are long, then you should consider repeating your main navigation links in your Footer. The Footer Navigation is a sort of simplified site map which allows users to easily find sections of the website. Keep in mind that most websites have some sort of Footer Navigation, even if it is just text links that are the same as the main navigation. Consider what users are looking for when they visit the website. Check out the Marvel App website, in their footer displayed with a dark navy blue background, you can see their text links for their Footer Navigation is broken down by sections with titles. Icons are utilized as well for Social Media and for booking demos. 

![Marvel App Footer Navigation]({{"../assets/footer-nav.jpeg" | relative_url}}){:class="post-md-4"}
<div class="text-center blog-caption">
Footer links navigation pattern - Marvel App
</div>

****

## Conclusion
Navigation design patterns are the foundation to a website that incorporates a range of web pages. Design patterns offer layouts familiar to users that allow them to easily navigate a website. Websites tend to use more than one type of navigation design pattern. Consider mobile designs and the different patterns that help users navigate easily. A website might utilize the Top Navbar pattern for desktops and switch to a Vertical Navigation Menu pattern for mobile devices. In addition to this, the website would also utilize a Footer Navigation pattern. Giving users options and different ways to navigate through a website ensures more users can use the website and navigate easier.




