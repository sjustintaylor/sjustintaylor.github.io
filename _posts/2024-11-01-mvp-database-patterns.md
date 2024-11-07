---
layout: post
date: 2024-11-01
title: Database Patterns
categories: [Database patterns, Software Design Toolkit]
---

The data model you choose for an application is not something that can easily be undone later. Especially if there’s production data. Getting the schema wrong not only makes your life harder as the developer, but it has a pervasive, and far reaching effect on how the business logic is written by defining a path of least resistance. It takes discipline to not just take this path when dealing with a complex model.

To address that, I’m creating a set of standard patterns for my own use. They cover common features that I’ve implemented wrong in the past and learned from.
These patterns are intended for small hobbit scale apps, or for fledgling MVP projects. Their requirement sets are simplistic, and they deliberately omit complexity in favour of being extensible and easy to work with.

# The Pattern Master List

- [Memberships and invitations]({% post_url 2024-11-02-memberships-and-invitations %})
