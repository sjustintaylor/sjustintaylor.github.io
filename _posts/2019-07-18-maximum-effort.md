---
layout: post
title: "Maximum Effort - A Pomodoro Timer"
author: Justin Taylor
categories: [blog, side-projects]
tags: [webdev, side-project]
excerpt_separator: <!--more-->
---

Rather than get lost in the rewrite of my budget app server, I decided to dive back into frontend work for a short project. The project I settled on was a pomodoro style timer.

<!--more-->

You can see the final project live [here](http://angry-goblin.surge.sh) or checkout the code [here](https://github.com/sjustintaylor/maximum-effort)

Over a cup of coffee I sketched the basic UI, and determined that the tool would have the following features:

- The user can set work and break lengths
- The user can pause, resume, and reset the timer
- The timer would play an alert sound when a timer completed to notify the user
- The timers must be accurate

Step one was to start the UI. I settled on using vanilla everything. It's a dead simple app, and using Vue or React would be a heinous amount of overkill. So, onwards. I created all the components, and styled them with Sass and a BEM naming convention.

From prior experience, I knew that Javascript's timers drifted over time as they are not guaranteed to be accurate. If we're going to do a thing, we might as well overdo it. A little googling turned up a self adjusting variant of Javascript's setInterval by [Andrew Duthie](https://andrewduthie.com/2013/12/31/creating-a-self-correcting-alternative-to-javascripts-setinterval/). Sweet. My first try at working this into my code failed. In fail forward learning exercise, I added too much state management and dom manipulation to the timer function. It was brittle, and there was no way to add in the break timer.
Rewrite two resulted in a general purpose timer that took two callbacks, one to execute every interval, and one to execute on timer completion. It could stop, resume, and reset. Perfect. State management was handled by the click events, and most of the DOM manipulations were abstracted to a set of general purpose functions.

The sound was actually the easiest thing to implement. I added a hidden `audio` element to the page. From there playing a noise was as simple as invoking the `play()` method of that element. I wrapped it in a function and added it to the final callbacks for the work and break timers.

What I learnt:

- Front load the work and create reusable, flexible classes. This was something that bit my first attempt at the timer class
- Not everything requires a framework.
- HTML has a quotes element, `<q></q>`
