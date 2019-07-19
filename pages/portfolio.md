---
layout: post
title: "Portfolio"
author: "Justin"
permalink: /portfolio/
---

My latest pieces of work.

- [Maximum Effort](https://github.com/sjustintaylor/maximum-effort). A live version can be found [here](http://angry-goblin.surge.sh). Created as a refresh of my frontend knowledge while working on my Budget App server. Maximum Effort is a pomodoro style work/break timer. To allow me to work quickly on such a simple tool it is built with vanilla everything. The most interesting part of it was creating a timer that didn't drift with every interval (JS timers aren't guaranteed to be accurate, and usually end up drifting by 100s of milliseconds). My solution self adjusts to a sub 15ms accuracy, executes a supplied function every interval, and executes another supplied function on the final interval. This allows me to update the dom, and transition from the work timer to the break timer. On the completion of each period, the app plays a sound to let the user know that a timer has finished.
- [Budget App (Ongoing)](https://github.com/sjustintaylor/budget-app). Building a better solution for my budget than a spreadsheet has been a goal for a while. After working through QUT's IT Systems Design unit in semester 1 2019, I finally had the tools to design an app of this size. The frontend app will be built with Vue.js and Auth0.
- [Budget App Server (Ongoing)](https://github.com/sjustintaylor/budget-app-server). The API server that powers the Budget App. It's built with Koa.js, MySQL, and Auth0.
- [Typewriter](https://github.com/sjustintaylor/typewriter). A markdown editor with autosaving, live preview, and support for multiple files. It's live on surge.sh [over here](https://irate-panda.surge.sh/). Built with Vue.js and the Showdown markdown converter. I wrote a post about it [here.]({{ site.baseurl }}{% post_url 2019-05-17-typewriter-prototype %})
