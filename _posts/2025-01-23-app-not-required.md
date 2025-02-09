---
layout: post
date: 2025-01-23T02:04:37.176Z
title: App Not Required
categories: [Software development]
---

Many developers assume incorrectly that the best solution to a user’s problem is another app. This fails to account for the second and third order costs that users pay for an app. The true cost also includes the price paid in our finite daily attention, willpower, and time.  
A successful software solution understands these costs. Successful developers know that for a solution to be successful, it must be consistently incorporated into the routines of its users.

This is borne out in the usage data of mobile apps. According to a report by BuildFire [^2], the average mobile device user interacts with just 10 apps each day, and only 30 apps each month. A quarter of downloaded mobile apps are used once and uninstalled. The competition for yet another app is fierce. To make matters worse, the top 10 mobile apps by usage are platforms such as Facebook, Instagram, or TikTok[^3].

The software solutions we create must meet users in the spaces, habits, and apps that they are already familiar with. The more we can build into our users existing spaces, the more likely our solution is to be successful.  
The critical question that successful solutions must answer is simple - _how can we reduce the inertia of this adoption barrier for our solutions?_

## Reduce inertia with the MAYA principle

> _"The adult public's taste is not necessarily ready to accept the logical solutions to their requirements if the solution implies too vast a departure from what they have been conditioned into accepting as the norm."_
> – **Raymond Loewy**

Raymond Loewy is often referred to as the father of industrial design. His body of work included logos for Exxon, Shell Oil, and BP, as well as the livery for Air Force One, updates to the design of the Coca Cola bottle, and assisting with the interior design of NASA’s Skylab.

He called his approach to design the MAYA principle - Most Advanced Yet Familiar. He set out to design solutions to problems that were both novel, and familiar. The ideal design sits in a sweet spot where it is advanced enough to help and yet familiar enough to be accepted.

There’s a psychological phenomenon underpinning this - the _mere exposure effect_. This effect explains our tendency to like or dislike something simply because we are familiar with it.

If our solutions to the problems of our users are to be successful, they must grow out of the spaces our users are already familiar with, not apart from them. A successful solution is one that needs fewer adjustments for its users to integrate into their lives. Your onboarding shouldn’t stop at just showing the user how to use the app. Show them how to make using it effortless by integrating with an existing routine.

## Start with existing platforms

The most impactful way to apply the MAYA principle to our software solutions is to recognise that not everything needs to be its own app (mobile, desktop, or otherwise). Not every service deserves the space on our devices, or the ongoing cost paid with our attention. _The best new app is the one that integrates into the user’s existing digital spaces, instead of trying to build a new space at the cost of their attention and time._

Our digital spaces are the platforms and websites that we regularly visit. A lot of these interactions are habitual - checking your email each morning while riding the train to work, or doom scrolling facebook while waiting for a bus. The reasoning for meeting people in these spaces over trying to carve out a new one is simple. If given the choice between two solutions, we are more likely to choose and stick with the one that fits into our routines better.

By way of example, I’ve been using Safari’s reading list feature for a while. It’s a well designed feature, it delivers on the promised functionality, and it’s easy to use. However, in spite of these well rounded attributes, I struggle with actually returning to read the articles I save to it. The button to access it is hidden inside a drawer. The lack of a permanent visual cue means that more often than not I just forget it exists. My habits, not the app are the problem - I’ve also tried Omnivore with similar results.  
A better solution would be one that is both well designed, and that does not need such a large change in usage patterns in order to be successful.

### Case study: Australia Post

A good example of how to build an app free service can be found hiding within Australia’s national mail carrier, AusPost.

AusPost’s process for delivery updates, and notifications doesn’t actually need a mobile app. In fact it functions commendably well without one. This is achieved by relying on two technologies that both have decades of reliability built in - SMS, and email. When I get a package sent to a parcel locker, I get an SMS with a code to open the locker when it’s ready. Their delivery updates are sent via email. These are just frequent enough to keep me updated, and they are not interruptions in the same way a push notification is.

To complement this flow, but by no means required for it, is an amazing web app. It loads fast, looks good, and it works almost flawlessly. The web app provides the same level of access across mobile and desktop browsers. It has been well designed from head to toe (which is fantastic, considering AusPost is a government owned corporation).

Moving users from this to a mobile app, with push notifications would be step backwards. SMS delivery has decades of reliability in adverse conditions built into it. It is available to every mobile device with a valid phone number assigned to it. On the other hand, the data connection that a push notification relies on is the first thing to die when cell reception gets bad in Australia. It’s a testament to our mobile carriers that the cell site coverage is as good as it is, given the sheer size of the coverage zones.

### Case study: A better reading list app

Let’s return to my failures with the Safari reading list for a second. I already have a process for reading long form content. I use it almost everyday. It’s my email account. Like most people, I’m subscribed to several email newsletters.

An ideal reading list app could function as a browser extension, with an “_add to reading list_” button (same as Safari’s reading list). It gets configured once, and then it unobtrusively becomes part of the fabric of the browser. As I add items to my reading list, it emails them to me. With tools such as gmail’s “+” aliasing, I can even create an automated workflow for the articles.

Best of all, reading the articles doesn’t require a new habit. I already check my emails regularly. The reading list now exists in a space I already inhabit, with a process and a habit I already have. The inertia for starting, and the friction to regularly use it is reduced almost to zero. After it’s set it up, I would be using it the same as I already do for Safari’s reading list feature. The difference is that I’d actually read the stuff I add to the list. It’s fused to an existing habit, an existing attention spend, and an existing platform (Apple Mail).

There’s another side benefit here too - it archives a copy of the articles. Dead links are no longer a concern. The content is saved to my mailbox and I can print it, export it, or forward it to friends.

## Creating a new space

It’s not always possible to integrate into an existing platform or space to solve the problem you’re tackling. Some requirements necessitate a dedicated app - for instance:

1. **Complex workflows** - The Adobe suite benefits from native apps in order to orchestrate complex work such as rendering video or editing images. While some of these can be accomplished inside platforms such as a browser, it is often a better fit for a native app.
2. **First class offline support** - Stable persistent storage is not always available to a web app, or platform plugin. If your solution needs offline support, a native app is likely a better option.
3. **Hardware integration** - The Briar Project messaging app depends on integration with a device’s bluetooth and wifi radios. If your app requires tight integration with hardware APIs, a native app is often the only solution.
4. **Security** - Banking apps benefit from being able to completely control the environment in which they run to secure user funds.

When a dedicated app is required, there still every reason to connect it to a user’s existing spaces when possible. This helps lower the adoption barrier, and keeps your work in line with the MAYA principle.  
A simple example would be offering social logins such as Facebook, or Google. Changing the way in which your app sends notifications is another. Any notification that isn’t time critical should be an email. Not only does this connect to the user’s email spaces, but it also respects and conserves their attention. Save their attention for when it really matters, and let them handle your updates in their own time.

## Existing platforms to integrate into

So far, this discussion has touched on two bedrock technologies of the digital world - email and SMS. These are far from the only technologies to consider when looking to integrate into the existing digital spaces of your users.

A large number of platforms, such as Slack, Discord, Facebook, or Google’s Workspaces provide support for plugins. The AI image generator MidJourney [^1] is built as a Discord bot. They leverage the years of engineering paid for by the Discord team in order to focus on their core offering.

Another ubiquitous platform is the web browsers we use to access the internet. Browser extensions are now a web standard, making it even easier to support multiple browsers. Instead of building a separate app, we can instead integrate into the fabric of a platform that’s used daily by users.

## Recap

The cost paid by users for a software solution is not just financial. Users pay multiple times, first financially, and then with their attention and willpower. Solutions that minimise these second order costs are more likely to be successfully adopted by users.
By applying Raymond Loewy’s Most Advanced Yet Acceptable (MAYA) principle, we define a framework for design decisions. If our solutions are to feel familiar, they must build into and on top of the user’s existing digital habitats. A solution that doesn’t need an app to solve the user’s problem is likely to be more popular than one that requires a shift in habits. AusPost did this with an SMS based delivery notification UX. We can do it by building into the platforms our users already inhabit.  
We have a wealth of options for this. Major platforms such as Facebook, Slack, and Discord offer support for plugins or integrated apps. Almost everyone on the internet has access to an email account. The original meta-platform, the humble web browser now offers extensions that allow apps to extend it.  
Even when our software requires a dedicated app to solve its target problem, we can still leverage the MAYA principle. Integration with the user’s digital spaces such as email for update notifications are a simple starting point available to almost every app.

## Footnotes

[^1]: I’m neither for or against AI. It’s not nearly as useful as LLM proponents would have you believe. MidJourney does make a good example here though.
[^2]: McCormack, L. (2024). _Mobile App Download and Usage Statistics (2019) - BuildFire_. [online] BuildFire. Available at: https://buildfire.com/app-statistics/ [Accessed 2 Jan. 2025].
[^3]: Backlinko (2024). _Most Popular Apps (2024)_. [online] Backlinko. Available at: https://backlinko.com/most-popular-apps.
