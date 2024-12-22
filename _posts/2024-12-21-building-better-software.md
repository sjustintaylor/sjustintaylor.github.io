---
layout: post
date: 2024-12-21T02:04:37.176Z
title: Building better software
categories: [Principles, Software development]
---

> "_Technology always develops from the primitive, via the complicated, to the simple._"  
> — **Antoine de Saint-Exupéry**

This post has come about from several weeks of reflection on tech debt. Specifically, the mistakes we made that resulted in a codebase that was hard to navigate, difficult to update, and ran slowly. There was no single person to blame, and in some part it was due to a remote team with poor communication.

There’s plenty of technical failures that led to this moment. Instead of talking about the specific aspects for the project, I went a level deeper. I was interested in the substrate beneath the surface level technicalities of the project. What could I learn from this so that it does not happen again?

After some research, a common theme emerged. Code quality, typically considered to be a measure of how well a project has managed complexity, is also a reflection of the decision making skills of the developers writing the code. Our habits, and the discipline we exercise determines the results we get in our code. This decision making is vital. We can make better design choices when starting a project to encourage the kinds of results we want to see.

## Built with habitual excellence

> "_It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent._"  
> – **Charlie Munger**

The first step for better code is _to not make the codebase worse_. This is true for new projects, and for existing projects. Anything that gets merged into production is never getting “_fixed_”, regardless of the good intentions of the author. Truly disposable and short lived code is relatively rare, and should be separated from evergreen code with a hard barrier - in a separate repository for instance.

Any change to a system should appear as if it were part of the original design. This means making hard decisions, and choosing the path that will occasionally take longer to complete. To sum it up, “_death before hacks_”. Successfully achieving this is not an end goal. Rather it is a process built on discipline, and a set of principles for code quality and software architecture that must be consistently adhered to.

Do not heed the siren’s song of a quick hack. It will drown you, and the project if you listen to it. Your standards and principles as a developer are the nautical maps that show you the way. That idea for a quick hack “to fix later”? That’s the beam from a lighthouse cutting through a storm to warn you of a submerged hazard. Sail around it, or your vessel will run aground. The very best captains follow their charts, and trust the disciplined running of their ships to guide them - they know that dangerous shortcuts will only cut them short.

### The currency of discipline is willpower

> "_In the absence of willpower the most complete collection of virtues and talents is wholly worthless._"  
> – **Aleister Crowley**

The price for consistently applying principles and discipline to your project is paid with willpower. Willpower is both a skill that can be learned, and a muscle to be exercised. Like a muscle, your willpower can fatigue, and break down without a rest. Without practice, the best intentions to write a maintainable project are worthless.

If you intend to write better code, maximising the amount of willpower for decisions that matter is a good place to start. The good news is that there’s a way to gain an easy amount of leverage to achieve this - by making use of the power of habit.

Habits are the original timesaving life hack - literally. Put simply, they are unthinking, skilled routines - the blueprints for the things we do repeatedly. They are present in some form in all mammals, and for good reason - they allow us to pay attention to the things that matter for staying alive.

They are also rather simple. Habits run on a loop of reinforcement - a **cue** that triggers a **routine** that results in a **reward** of some kind.  
The more we repeat a routine like this, the stronger the habit becomes. It’s hard to put a stop to a habit, but by changing any one part of the loop, we can easily morph the habit into something else, if desired.

When it comes to helping us with disciplined coding and willpower maximisation, our habits are essentially a free throw. Because they run almost entirely autonomously, they only impact our willpower reserves when we’re establishing them, or fighting to change them. Once embedded, we run through the habit routine without ever spending conscious thought.

It is simple to learn what well structured code and projects looks like. It is a lot harder to maintain the discipline to consistently write them. When you start any new routine, it always takes some conscious effort to complete. The more you do it, the easier and more automatic it becomes - excellence in any field is a habit.

Consider the initial setup phase of a greenfield project. If you are leveraging habit and willpower maximisation, you will already have a process. Instead of wasting time thinking about how to structure a ReactJS app, you’ll grab the template you keep updated for these situations. Instead of wondering which architectural flavour of the month to use for the app, you already have one planned and roughed out in the template.

On the flip side, if you have no standard approach, no template, and only a hazy idea as to architectural pattern, you’re going to burn willpower and time repeatedly making decisions _that should only be made once_.

If our projects are always bespoke one offs where we are constantly solving the same problems in different ways, we will never get better. Our projects must be engineered to minimise conscious expenditure of willpower and to reward disciplined behaviour.
Remove the need to make the same low value decisions over and over again (such as “how am I going to structure this react app”, or “what package will I use for a job queue”). Turning these decisions into blueprints that can run without much effort is a force multiplier that costs little beyond the initial learning curve.

### Easy wins for willpower conservation

> _"One change always leaves the way open for the establishment of others."_  
> – **Niccolo Machiavelli**

Developers have a wealth of easy wins for conserving their decision making muscles. The easiest win available is properly setting up automated tooling. This cuts down a swathe of repetitive tasks that dull the mind and sap willpower. With each interminably boring task automated, the door is open for a developer to spend more effort on what actually matters - shipping features.

Using a well integrated linter and code formatter, building a CI pipeline that makes basic checks for pull requests, or automating manual tasks with scripts are all prime examples of this. It’s understood by great developers that this kind of leverage is what allows them to work at an advantage to other projects. They prioritise setting these tools up, and making them effortless. If they can be made to run “_like magic_”, then they should. A great tooling setup is like ambient background magic - it just works.

This doesn’t have to stop at tooling though. Examine your business processes with a people and purpose over process frame. Are there easy wins to be had, such as scheduling all meetings in the afternoons to give people uninterrupted working time? Can meetings be eradicated by using email, or asynchronous videos?

It is only by prioritising willpower conservation that great software projects are able to ship better features faster. Decision making is not wasted making many small decisions, but is instead spent in the broader pursuit of shipping features for users.

## The system designs of William of Ockham

> "_That's been one of my mantras - focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it's worth it in the end because once you get there, you can move mountains._"  
> – **Steve Jobs**

Better software therefore can be seen as the product of better decision making. Habits and willpower are only part of the equation for better decisions. It is possible to engineer our projects to encourage good habits, conservation of willpower, and disciplined coding. The only question is how. To answer this, we will examine two guideposts - Ockam’s Razor, and the Lindy effect, as they apply to system design choices.

### Shaving away complexity

> "_The belief that complex systems require armies of designers and programmers is wrong. A system that is not understood in its entirety, or at least to a significant degree of detail by a single individual, should probably not be built._" (Wirth, 1995) [^1]

“_Entities must not be multiplied beyond necessity_” is the typical paraphrasing of William of Ockham’s famous razor. The simplest design that fulfils all the criteria is usually the best option. The razor can be used to shave away numerous ills commonly encountered in software development.

Instead of building a massive Gordian knot of a project, the razor is an exhortation to design with a bias towards small and loosely joined pieces of technology. The result will be easier to understand and easy to modify. Equally important, it will encapsulate tech stack choices. This is long term thinking in design. When the stack it was built with inevitably becomes considered legacy code, they will be easier to refactor out without a major rebuild effort.

A second order effect of the razor is summed up in Tim Berners-Lee’s rule of least power. For any given project, choose the least powerful language that is still suitable for the task. His example was that of the machine readability of html vs a Java applet. The rule refers not to the theoretical power of the language, but more so to the ease to which it can be used by its developers. Programming a web app in Rust that’s compiled to WASM is neat…but you should use Javascript, HTML, and CSS unless you truly need the features of Rust for your product’s features.

### Longevity as a measure of robustness

> "_Shopify is now one of the world's largest and oldest Rails apps. It’s never been rewritten and still uses the original codebase, though it has matured considerably over the past decade. All of Tobi’s original commits are still in the version control history._" (Shatrov, 2018)[^2]

The second guidepost for better software designs is commonly known as the Lindy effect - the longer a thing exists and is in use, the longer it can be expected to exist. The longevity of any given tool, framework, design pattern, or idea can be seen as a measure of the thing’s suitability and robustness.

Better software is not built by using the latest hot new toy. It’s built with modern, mature, reliable and well understood frameworks that have proven themselves over the course of many years, and many varied projects.

Javascript frameworks often feel like they’re a dime a dozen, with the lifespan of a mayfly. Other frameworks such as Ruby on Rails, ASP.NET, and Spring have not only survived for decades, but proven themselves in large enterprise deployments as mature, modern solutions.

There are a few reasons why these frameworks persist and thrive over decades of use in the changing web application space. The core is that they enable their developers to ship features instead of solving the same class of problem over and over again. They bring a wealth of out of the box solutions to the common needs of a modern web app. Rails, for example, provides a set of built in solutions such as database ORM, job queue, and management of reactive webpages. These are all solutions to commonly encountered problems for web apps.

These frameworks have something else in common that allows their developers to ship features faster - they provide an idiomatic way to write and think about code. Less time is wasted thinking about things that should be a solved problem - such as project file structures. Less time is wasted choosing a package for handling simple tasks such as sending a transactional email - there’s a recommended and rock solid package for it in the framework already. These frameworks enable developers to get to work designing and shipping high quality features.

There’s another benefit to having an idiomatic approach to projects like this. It makes it easier to join a project, and make meaningful contributions faster. Instead of hoping the next project wrote documentation, developers can rely on the knowledge they already possess. They can get up to speed and start shipping features faster. And that, after all, is the result we’re paid for.

# Recap

> _Simplicity is the ultimate sophistication._  
> (Apple Computers Inc, 1977)[^3]

The project outcomes that are under our control are almost entirely determined by how we make decisions. Better software starts with developers who have the discipline, principles, and self control to enact the hard decisions. As luck would have it, these attributes are not something you’re born with. They can be learned. Habits can be leveraged to conserve and amplify our limited willpower, so that it isn’t wasted on meaningless minutiae.

Our projects can be designed better to encourage this. It’s really easy to write good code if the project is designed to encourage good habits, such as using a framework that has idiomatic ways to accomplish tasks. Time isn’t wasted on thinking about minutiae - developers can simply get to work.

# References

[^1]: Wirth, N. (1995). A plea for lean software. _Computer_, 28(2), pp.64–68. doi:https://doi.org/10.1109/2.348001.
[^2]: Shatrov, K. (2018). E-Commerce at Scale: Inside Shopify’s Tech Stack - Stackshare.io. _Shopify_. [online] 8 Aug. Available at: https://shopify.engineering/e-commerce-at-scale-inside-shopifys-tech-stack.
[^3]: Apple Computers Inc (1977). _Simplicity is the ultimate sophistication: Introducing Apple II, the personal computer_. [four-color brochure] Available at: https://www.computerhistory.org/collections/catalog/102637933 [Accessed 18 Dec. 2024].
