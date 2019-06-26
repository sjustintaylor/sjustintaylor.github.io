---
layout: post
title: "Git tricks: Split a branch off into a new repository"
author: Justin Taylor
categories: [blog, tricks]
excerpt_separator: <!--more-->
---

Let's split an existing branch off into its own repository.

<!--more-->

Recently I started a new project and without giving it much thought, I put both the server and the client app in the same repo. Once I actually started developing the server I started to question the choice to mix the repo like this.
To fix this I split the server branch off into its own repo. This is easily accomplished.
First I created the new repo on github. Then it was a matter of pushing the server branch to the new repo with the following command:

```bash
git push https://github.com/accountname/new-repo.git +original-branch:master
```

This pushes the whole commit history from the original branch onto the master branch of the new repo. A little tidying up and I had successfully fixed the projects.
