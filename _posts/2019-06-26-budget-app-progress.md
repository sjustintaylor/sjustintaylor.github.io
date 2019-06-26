---
layout: post
title: "Budget App 2.0 Progress"
author: Justin Taylor
categories: [blog, side-projects]
tags: [webdev, side-project]
excerpt_separator: <!--more-->
---

What's that? Justin's making another attempt at a personal budget app? Fantastic, how's that going for him?

<!--more-->

Pretty good as it turns out. This time round I'm using the skills I learned last semester in IT Systems Design. So now I've started with a better design. I've got a mockup, a database schema, and an API spec. Right now I'm working on the server, since that was one of the areas that I rushed the last time. This time it's more thought out, and ya know, better.

Still the same concept though - create envelopes for budget items, record expenses. It's got savings goals as well, because features.

The mockup is hiding over [here](https://www.figma.com/proto/KbxflIcoHQkN4uZ1tdPt9vvk/Hi-Fi-Prototype?node-id=49%3A2424&scaling=min-zoom). It's basically done, at least until I start working on the client app (I'll probably realise I've farked up some part of it once I start coding it).  
For the server I'm using Koajs again, because it's easier than express. Data is stored in a MySQL compatible database (at the moment that's MariaDB, but production will use AWS Aurora). Authentication and securing the Api will be done with Auth0. So far the middleware for the authentication is in place, but it's just a placeholder.

The api for paper tracker basically just exposed the database schema and it was left to the client to do the heavy lifting. This time round I'm doing as much of the processing on the server as possible. The end result will be a lightweight, fast loading, and responsive client. It's also forced me to really think about my database schema. The ER diagram hasn't changed majorly since I laid it done (just some datatypes), and I'm confident it's correct. Of course, that doesn't stop me from doubting everything everytime my SQL knowledge hits a wall (It's gotten way better by the way).

One of the particularly thorny problems was how to handle envelope deletion while still retaining transaction integrity (as in where did my money go). I eventually settled on a `true/false` flag for envelopes. It preserves envelope names, and I don't need to rework my foreign key constraints. Some googling around suggests that this is correct, as it preserves the integrity of the user's transactional data.
