---
layout: post
title: "Typewriter - a markdown renderer"
author: Justin Taylor
categories: [blog, side-project]
excerpt_separator: <!--more-->
---

I've finished the prototype for a markdown editor that I've been low key working on for a month or so. You can find a live copy of the latest version [here](https://irate-panda.surge.sh/). The repo is over [here](https://github.com/sjustintaylor/typewriter)

<!--more-->

So far it's been a proof of concept, a thing that I set out to make and actually finish. I had originally planned to add user login and file sync (with a microservice on aws). However time constraints with uni cut the project down from my grand first vision. That said, I have learned quite a lot about how to add a Vuex store to a Vue.js project. Now there's a tool that I was needlessly apprehensive about using. As usual, getting started with it was the hardest thing. Once I got rolling, it slotted in perfectly and solved several issues my original design had. Even integrating the Ace editor was painless.

Currently the tool saves your work in the browser's local storage (courtesy of a vuex plugin, which was basically plug in and forget). The preview pane renders the contents of the editor, and the editor has syntax highlighting. There's a functioning file browser, and the user can create, rename, and delete files. I accomplished all of my basic goals for the project.

Working on this has sparked my imagination. Personally I could use a tool like this for my other hobby of writing fiction, with a few tweaks to the design naturally. I've started working on an improved version with remote file sync, two editor panes side by side, a drafts function that preserves a history of the document, mobile friendly styling, folders and projects, and a service worker so that the app works seamlessly even if the internet drops out (my primary complaint with google docs, really. It interrupts you when it can't phone home).
