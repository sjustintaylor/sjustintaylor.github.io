---
layout: post
date: 2025-04-05T02:04:37.176Z
title: Zombie subscriptions
---


I recently had what I’m terming a “zombie subscription” experience. I had forgotten to cancel a service for a to-do app. The service renewed and charged my card without notice before or after the transaction. I’ve since requested and received a full refund from the service, but the incident got me thinking about UX design. After all, if you do not explicitly design an experience then users will experience whatever the easy option happens to be. This is not how a service wins repeat business and positive word of mouth referrals.

## Why it matters

> "*People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum or average of every moment of the experience.*"
> – [Laws of UX: Peak-end rule](https://lawsofux.com/peak-end-rule/)

Customer acquisition is a non-zero cost for most businesses. By not properly considering the user departure experience, the business is both wasting some of this cost, and risking incurring more costs. Worse, it throws away an opportunity for goodwill and referrals. It risks leaving the business with a former user who has nothing good to say, and every reason to bring that up whenever the business is mentioned.

### Chargebacks

Returning to my zombie subscription example, a simple renewal notice would have removed the need for me to contact their support (lower customer support bills sounds like a good idea). It would also have almost entirely removed the risk of my submitting a chargeback. If that had happened, they’d have lost the $25 AUD non-refundable dispute fee, and if I’d won, the amount they’d charged me as well. Regardless of whether they win, the dispute would increase their chargeback ratio, thus risking the loss of their ability to process payments at all.

The cost to send a single email with AWS SES is $0.00009. Stripe and other payment processors offer this service as a feature (if you turn it on). The cost benefit analysis is so heavily weighted in favour of being considerate of your users that it’s crazy not to do this. Not spending a fraction of a cent so you can risk paying almost $75 AUD when you lose a chargeback is shortsighted in the extreme.

### Goodwill is invaluable

> "*Goodwill is the only asset that competition cannot undersell or destroy.*"
> – **Marshall Field**

Unlike the financial benefits of avoiding a chargeback, the second good reason to have a user friendly off-boarding experience is intangible. Acquiring a customer via the goodwill and referrals of your current and former users is worth exponentially more than acquiring a customer via a cold channel such as an online advert.

If your off-boarding is well designed, former customers are more likely to remember you exist. They are more likely to recommend your service when it would be a good fit for their friends and colleagues. They are also less likely to disseminate negative press about your service. In a few instances, the former customer may return (if their departure was due to their own financial circumstances changing for instance). 

## What should have happened

The design of UX for anything should start from the basic understanding that humans are imperfect. Something as simple as a renewal notice prior to charging the customer’s card costs almost nothing to send. The return on investment for such a notification is invaluable to a business both in avoiding chargebacks, and in the intangible goodwill it preserves.  
The notification needn’t be complex. A simple email with the amount and the expected charge date would have been sufficient. The risks for the business vastly outweigh the amount of money they might have been able to claw out of my bank account.   
If the burning of any goodwill you had, and the risk of a chargeback are really worth less than the subscription price you might have been able to hold on to, perhaps your app isn’t valuable enough to justify the cost in the first place.
