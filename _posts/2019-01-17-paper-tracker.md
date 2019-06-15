---
layout: post
title: "Paper Tracker - A budgeting app prototype"
author: Justin Taylor
categories: [blog, side-projects]
tags: [webdev, side-project]
excerpt_separator: <!--more-->
---

A prototype budgeting app that implements the envelope method of personal budgeting.

<!--more-->

~~[You can check it out here](https://paper-tracker.sjustintaylor.com.au)~~. The EC2 instance has been brought offline due to technical issues.

This project was started with several goals in mind. First, I wanted to make something more interesting than a to do list (not knocking them as a learning tool, just not inspired by them). Second, the project had to utilize git as if I was part of a team. Third, the project had to use some form of web components.

I decided to create a prototype of an idea that had been bouncing around my mind for quite sometime. It's always a bit janky to use a spreadsheet for budgeting, and I was interested in a tool with more flexibility, while retaining the simplicity and ease of use. The initial design was drawn with pen and paper, and refined several times.
Feedback on the first design was mostly positive. However, the consensus was that it didn't use color effectively, and was too unintuitive. I went back to the drawing board with a hachet, and pruned away or simplified every element in the original design. Color was reworked (and remains something that I need to focus on for future projects).

The front end ui was built with Riot.js. It was chosen because it's immediately accessable to anyone who knows html and javascript, and is perfect for small to medium sized projects. I decided not to go with React or Vue.js simply because at the time, I was not confident in my ability to figure them out _and_ finish the project on time. Working with Riot has been informative, and I'm confident that the knowledge I've gained will translate over to React or Vue.

The server was built on Koa.js 2, a replacement for Express that uses async/await instead of callbacks. I tried to keep the amount of middleware to a minimum. The user authentication was handled with JSON web tokens and bcrypt for password hashing. While signups are not currently implemented, the user login follows the basics for security.

My usage of Git was based on [this article by James Chambers](https://jameschambers.co/writing/git-team-workflow-cheatsheet/). The basic workflow I followed was as follows:

1. Create a new branch for the feature. Checkout the _branch_
2. Implement the feature, adding and committing to the _branch_
3. Fetch, and then Rebase the branch back onto _master_
4. Merge the _feature branch_ onto _master_ and then delete it.

The biggest error I felt I made in my use of git was not using a _dev_ branch. Instead I was merging back onto master and pushing that out to github. I did eventually realise and rectify this during a refactor of the app's scss code.

During the construction of the app, I learned a few important lessons. The project should have been contained within a single repository (whereas I split it into app and server). This led to unnecessary delays when deploying to AWS. While a minor error, the use of a _dev_ branch would have kept my repos cleaner. The largest error I made was not planning the underlying architecture of the server and app. This led to a need to rewrite large portions of the app's components to work with the server. Had I mocked up an API with Postman, this would have been largely avoided. In addition, the first draft of my app's scss was monolithic and tightly coupled. In the rewrite of the components, I refactored the scss code into a more modular and reusable framework. Very little of the current scss is specific to this app, and I plan on reusing several parts of it for another project.

Overall, working on this project has increased my knowledge of Git, Javascript ES6, UI/UX design, and what it takes to deploy a node app to AWS. Paper Tracker took about a month to complete, and I'm reasonably happy with the result given my lack of experience building a server and a frontend app of this size.
