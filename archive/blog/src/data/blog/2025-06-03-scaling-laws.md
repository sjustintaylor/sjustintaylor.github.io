---
title: The scaling laws of software design
author: Justin Taylor
pubDatetime: 2025-06-03T02:04:37.176Z
slug: "scaling-laws"
description: At my usual Saturday rock climbing/brain trust meeting, the topic of software complexity came up. It occurred to me that the square/cube scaling law applies equally well to software engineering as it does to living things.
draft: false

tags:
  - software-engineering
  - complexity
  - architecture
---

At my usual Saturday rock climbing/brain trust meeting, the topic of software complexity came up. It occurred to me that the square/cube scaling law applies equally well to software engineering as it does to living things. After all, the micro-services based system design for a Netflix scale video streaming service looks alien compared to a monolithic design of a web based email client.

The square/cube law was vividly, if a bit grotesquely, summed up by the Scottish scientist J.B.S. Haldane – “_You can drop a mouse down a thousand–yard mine shaft; and, on arriving at the bottom, it gets a slight shock and walks away, provided that the ground is fairly soft. A rat is killed, a man is broken, a horse splashes._”

The slightly more scientific definition from Wikipedia is as follows:

> “_When an object undergoes a proportional increase in size, its new surface area is proportional to the square of the multiplier and its new volume is proportional to the cube of the multiplier._”

The speed at which volume increases with surface area explains why we cannot simply scale something up (beyond a certain point). The increase in volume when doubling a creature’s size brings issues with circulation, weight, and oxygen supply – doubling the size of a human would give them 8 times the weight and only 4 times the muscle and skeleton to support it. They would also be getting half as much oxygen per kilogram to survive.

The effects of this can also be seen in architecture – the largest habitable building in the world for several centuries was the Lincoln Cathedral at 147 meters. Construction was constrained at this limit owing to the need for lower sections of the building to support the entirety of the building above it. It wasn’t until the switch from load-bearing walls to steel frame and curtain wall construction that we could build stable structures higher than that. The more complex processes required to produce materials such as steel, and to model the forces at play are what allowed this advancement. Without this radical shift in project complexity management, we would not be able to manipulate the immense forces of gravitational weight and wind to achieve this.

## The Square/Cube law of software complexity

The mammals of Haldane’s vivid mineshaft example, and limits of construction are not the only place we can see this scaling law in action. Software projects are equally subject to its silent and inexorable effects. If anything, it’s worse in a software project simply because the effects are less visible. Any developer who’s ever been asked something along the lines of “_why is this taking so long?_” has experienced its effects.  
Returning to our Wikipedia definition of the square/cube law, we can restate it for software as follows:

> “_When a software project undergoes a proportional increase in scope, the new feature set surface area is proportional to the square of the multiplier and the new implementation complexity is proportional to the cube of the multiplier._”

Feature set surface area is relatively straight forward – it’s the desired outcome from adding new functionality. Take a PDF export feature for a time tracking app – the end user sees one or two new buttons to export and download a well designed PDF file of their weekly tracked time.  
The implementation complexity behind that is a lot more expansive than one might guess. Who hasn’t had a non–technical ideas person say something uninformed like “_It’s just a simple feature, how hard could it be?_”. Behind our simple PDF export feature is a multitude of implementation details:

1. Designs for the UI changes to be made.
2. Architectural designs for adding the backend support for PDF generation.
3. Setting up an S3 bucket to store generated PDFs for fast retrieval. Ideally with something like Terraform so the infrastructure can be rebuilt in a hurry if needed.
4. At least one new API route must be written, secured, and tested. It’s got to connect to both the database, and the new S3 bucket for PDF storage.
5. The frontend client must be updated to add the new UI elements
6. Somewhere along the line, developer docs should be written to retain the knowledge of this new system for new developers who may need to work on it.
7. QA must test and pass the new feature, and anything they find must be fixed.
8. User facing docs to educate the users on this new feature must be written and disseminated.

What appears to be something small (“export a pdf”) results in the cubic growth of implementation complexity – the scaling law in action.  
Software complexity is never about _just_ the code we write. For any non–trivial functionality, there is a vast depth of concerns and problems that must be solved in order to launch a working feature. This is the implementation complexity part of the above software scaling law.

It would be easy to go with the reflexive, yet incorrect takeaway that simpler software is always better. After all, simple pieces of software individually require less – less documentation, less support, less design, etc. However, the point Haldane was making in his essay [_On being the right size_](https://www.phys.ufl.edu/courses/phy3221/spring10/HaldaneRightSize.pdf) was that there are unique advantages and disadvantages **at every size** of creature from insects to elephants. The same is true for software. Unlike evolution’s random walk, we have the opportunity to explicitly design where and how complexity is leveraged in the software we build.

> "_All warm–blooded animals at rest lose the same amount of heat from a unit area of skin, for which purpose they need a food–supply proportional to their surface and not to their weight.…In fact a mouse eats about one quarter its own weight of food every day, which is mainly used in keeping it warm_"  
> – J.B.S. Haldane, [On being the right size](https://www.phys.ufl.edu/courses/phy3221/spring10/HaldaneRightSize.pdf)

Being deliberate about these choices is one of the keys to better software. Needlessly complicating the code wastes developer time and cognitive capacity. Contrived simplicity wastes infrastructure resources and increases time required to setup a deployment correctly. There is no magic solution that works at every size for software, just as there is no magic physiology that works at every size of warm blooded creature.

## User authentication at a micro, and macro scale

A useful example of the differences at a macro and micro scale is a basic element of most software – user authentication. For such as conceptually simple feature (“As a user I want to authenticate against my profile so I can access my protected resources”), it can quickly turn into a deep pit of technicalities and complexity, even for small personal projects.

### Micro–scale

At the micro–scale is the personal project. On a [recent exploration of AdonisJS](https://github.com/sjustintaylor/nanoblog), I wanted to keep this as simple as possible. Adonis provides built-in utilities for a simple email/password user authentication that builds on session cookies. It’s pretty close to plug and play.  
The entire user authentication system was constructed by:

1. Selecting session auth when running the project generator CLI.
2. Creating login/logout/register views so the frontend has something to render.
3. Adding the authentication middleware to the routes I wanted to protect.

Total setup from zero to protected routes _for the entire project, including frontend_ took me half a day, and that was in part due to needing to learn about the framework as I went. I’ve had projects where it’s taken me more time to get Auth0 working in just the frontend for a React app. And then one inevitably winds up having to fiddle around getting serverside auth setup for the Auth0 token verifications.

The total complexity for the drop in email/password authentication is low. The documentation required is low. Email & password authentication is well understood by users, and the AdonisJS auth is a built-in option from the framework’s team.  
Any dev who’s used Adonis will be immediately familiar (and their docs are good enough that even devs who aren’t familiar will have few difficulties picking it up). All I need to do to document it is add a few links to the readme – to the relevant Adonis docs, and to the views I created to explain how it currently works.

### Macro–scale

Compare that to my initial plan for the nanoblog project – passkey auth with email recovery. Along with my learning goals for the project (explore AdonisJS), I had a limited amount of time. After some brief research into setting up passkey auth, it became apparent that implementing it would become a time sink.

There are no drop in libraries for passkey auth in Adonis. I would have to write my own authentication middleware and session guard. The DB schema is now entirely custom, and significantly more complex per user – instead of just 2 fields (email, password hash) – I now have to contend with 9 fields.  
Passkey as a single factor for authentication (to replace passwords) is also relatively new. The documentation requirement for new developers just tripled. Education for users just expanded, and while passkeys are flawless on Apple’s devices, the same cannot be said for Android devices as a whole.

Apart from the value in learning about passkeys, the only benefit here is that the markup for the frontend’s views got slightly simpler. Since the goal of the project was not specific to passkeys, I opted to use the simpler email/password option.

## Concluding thoughts

Software at every scale brings different advantages. Understanding how to identify when we are reaching the limits of our current approach is vital to building and maintaining complex software.
Martin Fowler has a solid observation on [teams that succeeded with micro–service architecture](https://martinfowler.com/bliki/MonolithFirst.html) – they were the ones that started with a monolith, and only moved to micro–services when the need became apparent.  
This gives us a good rule of thumb for complexity management – the team that succeeds is the one that starts with simple architecture, and only evolves it as the need to manage increasing complexity of requirements becomes apparent.

### Warning signs

There are two good warning signs to watch out for when working on a project. Both are symptoms of poor management of the effects of the scaling law.
The first is a steadily decreasing rate at which new features can be added or bugs fixed in the project. The root cause for this is typically due to the project’s code complexity beginning to saturate an individual developer’s cognitive capacity. This can be due to poor code quality (duplicated and poorly organised code), or having outgrown the original architectural pattern. Either way, it’s a sign that the process for managing complexity must shift.  
The second sign is an increase in the time required to onboard a new developer to the project. Like the first sign, this can be due to poor code quality, poor documentation, or other poor decision making. It can also be due to the system having grown large enough that it cannot be reasoned about as a whole anymore. Regardless, at this point it’s time to consider new approaches to meet the effects of the scaling law at play in the project.

### Learn from others

> “_By reading, you learn through others' experiences, generally, a better way to do business_”  
> – Jim Mattis

If we are to understand and manage the relationship between feature functionality, and the volume of work required to implement it, we cannot simply sit back and hope for the best. As Jim Mattis put it we must learn from others experiences, both their successes, but more importantly their failures. In the absence of studying other people’s projects, our only option is to unknowingly commit the same mistakes ourselves.  
It is incumbent upon us to know our craft and our industry – study and experiment with new ideas and old. Having both knowledge of software engineering, and of the business domain we work in allows us to create solutions that both properly manage the effects of the scaling law and achieve the results for which we are paid.

#### Further reading

- Ousterhout, J. K. (2021). _A philosophy of software design_ (2nd ed.). Yaknyam Press.
- Benner, T. (2023). _Naming Things_. Leanpub.com; Leanpub. https://leanpub.com/naming-things
  - Better naming of things in software development is an easy win to help manage cognitive load for a project.
- Anything written by [Martin Fowler](https://www.martinfowler.com/architecture/) on software architectures, in particular:
  - [Conway’s law](https://martinfowler.com/bliki/ConwaysLaw.html)
  - [Monolith first](https://martinfowler.com/bliki/MonolithFirst.html)
