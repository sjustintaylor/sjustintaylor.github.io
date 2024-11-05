---
layout: page
title: Free & Open Source Resources
author: Justin Taylor
permalink: /resources/
---

Here's my master list of free and open source resources, starting with self hostable SaaS tools.

# Open Source Services

## Authentication

- [LogTo](https://logto.io) - An authentication provider for apps. It's less of a pain to use than Auth0, especially for small projects that don't need enterprise features.

## Secrets management

- [Infisical](https://infisical.com) - A secrets manager for your apps. This centralizes your secret environment values, and allows you to swap them out easily. Your apps can always call to get the latest values. Essential for growing teams or large apps.

## Databases

- [PostgreSQL](https://www.postgresql.org/) - My first pick for a traditional server based SQL database, since it can do pretty much everything (including providing pub/sub, and a job queue).
- [MariaDB](http://mariadb.com) - MySQL with better licensing. If you don't need the array of features PostgreSQL has, it's a solid choice, and it's relatively easy to use.
- [SQLite](https://www.sqlite.org) - The OG file based database. If you need an embedded SQL database for a native app, this should be the first choice. It’s open source but closed to contribution due to project goals (it’s a core goal that the code be completely clean from copyright infringements).
- [LibSQL](https://github.com/tursodatabase/libsql) - A SQLite fork that’s open for contributions. Powers [Turso.tech](https://turso.tech). If you ever wanted to move off that onto self hosted infrastructure, this is the tool.

# Programming

## CSS Frameworks

- [Pollen](https://www.pollen.style) - A set of CSS variables for you to use when building a site. Imagine tailwind, but without the need for a preprocessor (you can drop Pollen into a raw html+css project and just send it if you wanted to)