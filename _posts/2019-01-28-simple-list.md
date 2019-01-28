---
layout: post
title: "Progress on a simple to do list app"
author: Justin Taylor
categories: [blog, side-projects]
tags: [webdev, side-project]
excerpt_separator: <!--more-->
---

In the aftermath of my budget app prototype, I decided to learn Vue.js. By building a to do list app called Simple List.

<!--more-->

# Project Goals:

-   Write a design document
-   Figure out how unit tests work
-   Learn the basics of Vue.js

# Project overview

There are two lists: to be done, and completed. The app has two screens: add new item, and list view. Item persistence is provided by local storage. Events are transmitted from the items up to the root Vue instance via an event bus. Styling is mostly done with site wide scss, and a few fragments of scoped scss.

# What I've got so far:

Thus far I've made a draft version of the app. It's fulfilled two out of the three goals (design document, and Vue.js). I'll be figuring out Jest and tweaking some of the features. Mostly I'll be making it look better, as it's a bit spartan at the moment. You can see a [beta version here](http://hacktivate-robots.surge.sh) and the draft design document can be [found here](https://github.com/sjustintaylor/simple-list/blob/master/design%20docs/design%20document.md). The project repository is [here](https://github.com/sjustintaylor/simple-list).  
Early user feedback has also highlighted a non intuitive part of the user interface (the clear completed items button), so I'm going to be changing/rethinking the way the app deals with that. It's possible that I could do away with it, and just not save completed items to local storage. That way the items would disappear at the end of the session.  
Also on the cards is rolling the app into a PhoneGap wrapper. This would help me test out the app in everyday use, and see if it can be improved to the point where it might make a good candidate for the Google Play store.
