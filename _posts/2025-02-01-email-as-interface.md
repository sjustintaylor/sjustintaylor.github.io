---
layout: post
date: 2025-02-01T02:04:37.176Z
title: Email as a user interface
categories: [Principles, Software development]
---

Email is one of the internet’s foundational user interfaces. Almost everyone on the internet who might use a service can be assumed to have one. After all, they’re a basic necessity for signing up or holding an account online.

Entire businesses have started out as email only - Craigslist began life as an [email list run by a guy named Craig](https://www.craigslist.org/about/mission_and_history). Today, writers can quickly and easily use Substack or Ghost to publish articles and get paid for them. Services routinely use email to provide asynchronous and non-urgent notifications to their users.

> “_Email as the interface is a great fit for prototyping and building out a laser-focused product that can easily integrate into people’s everyday usage._”
> – **[Matt Swanson](https://mdswanson.com/blog/2013/07/21/email-as-the-interface.html)**

As an interface for user interaction however, email is often overlooked. With a little design, it is perfect for prototyping services that would otherwise need to launch with [yet another app](https://sjustintaylor.me/app-not-required/). Consider for a minute - you can reasonably assume that your target users already have an email account. Emails already fit neatly into an existing space in your users’ lives (so your service won’t have the friction of carving out a new space). Best of all, it’s asynchronous, allowing them to deal with it when they please.
Even the extreme simplicity of email is a blessing in disguise - it forces you to focus on the core service. The constraints it imposes encourage creativity, and result in a better product.

## The building blocks of email first

There are two elements to consider when building an email based service - the interactions and the triggers. The interactions are the operations the user can perform on the emails they receive. The triggers are how your service initiates an email flow. The problem your service solves will need to understand both in order to compose an effective solution.

### Interactions

Unless your service is a newsletter, you likely need something more than just standard content delivery. Emails support 4 basic types of user interactions that you can use to solve user problems, and elicit user action. These interactions are the consumption of content, delivery of attachments, user response via links, and user response via reply.

Consumption of content is the most obvious - user reads the email. This works exceedingly well for newsletters. But it can be useful for other services. For example, the todo list app TeuxDeux will email you a summary of your daily tasks each morning.

[Jon Fuller’s Apple Health Report](https://sep.com/blog/emaii-a-different-kind-of-user-interface/) service is a good example of how to build an attachment based interaction. Users email their data export as an attachment. A few minutes later, the service responds with an analysis in an attachment for them to use.

For more complex operations, a service usually needs more sophisticated interactions. There’s two options for this. The first is to build emails with links in order to gather these responses. These can be simple - Jira or Github’s “accept invite” emails, or more complex - review services that let users click on a star rating in the email (with each star being a different link).
The second option is to leverage email replies. CRMs build on this - reply to the email, and it gets added to a support ticket to be addressed shortly. It can be more complex - travel planning apps such as TripIt allow you to forward email confirmations for flights and hotels to see them added to your itinerary automagically.

### Triggers

Unless your email service is a newsletter, you’ll likely implement some combination of both scheduled and reactive triggers to connect with users.

Scheduled services are common - an email course, or sales funnel use emails delivered at regular intervals. It can be as simple as a service running on a cron job each day. More complex scheduling can be designed by integrating users’ response (via clicking on a link, or replying) to adjust schedules

Reactive services are those that respond to an external action of some kind. The source of the event can be almost anything, from the basic (an sms, or email), to the exotic (a home automation sensor, or GPS location event)

Reactive triggers operate on the same principle as a standard webhook. However, they can be more transport agnostic. RPC, WebSockets, or even an RS232 serial connection can be used to trigger an email (useful for a home automation with an IoT sensor).

Using low-code tools such as Zapier, you can compose complex flows for prototyping and personal use. Imagine an email service that emails a summary of changes from a shared google doc. Or a daily summary of your calendar. The potential here is limited only by your imagination.

## Recap

Email as a user interface is a powerful and often overlooked base for software services. Despite its limitations, it provides a set of flexible tools to support a core service. The interactions extend beyond just reading content - users can reply to your service’s emails, send and receive attachments, and click links to execute actions. Email first services can be reactive, in response to an event, or scheduled (like a weekly newsletter, or daily task summary).

With careful design, and leveraging of low-code tools such as Zapier, we can effectively use email as a platform for prototyping services. Entire businesses have started this way - Craigslist being just one example. With an email user interface, your next service can be built faster, and be more useful to its users than building another app.
