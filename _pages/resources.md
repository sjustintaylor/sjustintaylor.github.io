---
layout: page
title: Resources Master List
author: Justin Taylor
permalink: /resources/
---

Here's my master list of free resources, starting with self hostable SaaS tools.

# Services

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

## Tools

- [BeeKeeper Studio](https://www.beekeeperstudio.io/get-community) - If you don't need the heavy weight of DBeaver when interacting with a database, BeeKeeper Studio is good alternative. It's lightweight, fast, and has a clean UI.

## CSS Frameworks

- [Pollen](https://www.pollen.style) - A set of CSS variables for you to use when building a site. Imagine tailwind, but without the need for a preprocessor (you can drop Pollen into a raw html+css project and just send it if you wanted to)
- [PicoCSS](https://picocss.com) - A minimalist css framework that comes with classless and class-light variants. It works extremely well as a drop in source of sane styles (This site was built in part with PicoCSS).
