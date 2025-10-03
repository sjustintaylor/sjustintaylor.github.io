---
title: Captain’s Log - A game design idea
author: Justin Taylor
pubDatetime: 2025-10-02T01:04:37.176Z
slug: "captains-log-game-design"
description: "In which I relax by playing around with an idea for a nautically inspired 2D mobile game"
draft: false
tags:
  - game-design
  - creativity
  - captains-log
---

While writing my last post, I promised myself I’d explore a game design idea for the next one. You know, as a treat for managing to post consistently for a few months. 

My starting point for this adventure was [Kenney’s Pirate Pack](https://kenney.nl/assets/pirate-pack). If you want to make games and haven’t heard of Kenney, he’s worth checking out. He produces a titanic amount of high-quality art assets and releases them under a CC0 license.

His pirate pack has the essential art I’d need for the core gameplay in a 2D top-down sailing game. This was perfect. I could kitbash the rest of the game with Kenney’s other asset packs without too much drama.

## An idea takes shape
Visual inspiration in hand, I spent some time considering the kinds of games I wanted to play. I mostly play games on my iPad. It’s just easier to pick up for a casual or short session. I’ve long wanted a diet strategy game similar to the space trading games I played when I was younger. EV Nova, Endless Sky, and even the OG, Space Trader, on Palm OS. 

These games all had a common thread - they provided a sandbox of layered and interwoven systems that let the player write their own story. For EV Nova and Endless Sky, there are a handful of randomly selected storylines you can work through, but they aren’t mandatory. You can just as easily skip them and become a space privateer, or a merchant. 

Rather than just build a clone of these classics, I pushed myself to explore further for a keystone mechanic to set my theoretical (at the moment) game apart.

### The core game concept emerges
Unlike the classics of the 2D space trading genre, my nautical setting has a distinct difference - time. It takes time to sail between ports. It takes time for a captain’s orders to be carried out, and to see an effect (taking in sail doesn’t immediately stop a ship for instance). The delay presents players with a challenge as they make strategic decisions. It also makes travel between ports more meaningful than just “jumping” instantly between planetary systems. 

The more I thought about it, the more interesting it became. An in-game economy is likewise affected by time - it takes time for news to travel between islands for instance. This presents an element of risk for players who rely on news to make trading decisions. 

It was an intriguing idea, but I was unsure if this would translate into actual fun. There was only one way to find out - a cheap and dirty prototype. I opened my code editor, created a simple web page, and fired up Claude Code. This prototype is entirely disposable, so code quality is meaningless here. A good prototype for this would be simple - a rectangle to stand in for the ship, two order types (speed and direction), and some buttons to issue orders. 

#### A quick and dirty prototype
With about two hours LLM code sh!tting (technical term of art), I had the answer. The orders-based mechanic has a kernel of fun in it. There was something satisfying about getting the timing right for the ship speed and turning so that it hit the moving target. It was also pretty funny when I got it wrong and overshot - it resulted in a flurry of adjustment orders. Imagining a captain losing their sh!t on deck was a pretty humorous image. 
![](src/assets/images/2025-09-03-captains-log-1.jpeg)
**It’s a good prototype**

Even with this kernel of fun, the mechanic would need careful tuning and playtesting to get the balance right. Luckily, there’s plenty of parameters that can be tweaked - order timing, order effect magnitude (the turn order is currently fixed at 30 degrees for instance), and the influence of the sailing physics can all be twiddled. The potential is there for a great game mechanic for a casual game though.    
If you want, you can try the prototype [here](https://sjustintaylor.me/covert-grizzly/). Fair warning - it only works on a larger screen such as a tablet or desktop. It’s also rather janky and a bit gross. I did create it entirely with an LLM in 2 hours after all.
![](src/assets/images/2025-09-03-captains-log-2.jpeg)
***My glorious prototype***

### Where do we go from here?
The Space Trader genre of 2D game provides a rich field of ideas for game mechanics. With the core concept of “*time as a first-class antagonist*”, these ideas take on a more unique appearance. 

The orders mechanic can be refined further - different orders taking different times to execute (bringing in sail taking longer than turning the ship’s wheel for instance). With sailing now being more involved and meaningful, combat could be explored - how might the mechanic work to make aiming and firing cannons fun, while still having to direct the ship in battle?

We haven’t even begun to dig into ideas such as diegetic maps/navigation, trading, an in-game time cycle, ports, missions, reputation, skills, crew and resource management, and emergent systems such as weather or sea monsters. There’s clearly plenty to explore in this space, if I get the time.

## Concluding thoughts
I would be remiss if I didn’t mention that my inspiration/confirmation for time as a mechanic was in no small part due to Sam Sorenson’s novel wargame [Cataphract](https://samsorensen.blot.im/cataphracts-design-diary-1). In it, players issue orders via a discord channel, and the wargame plays out in near real time. The limited information and time constraint produces a game that described as complete chaos and brilliant by its players. It was from this that I drew my own time constraint inspiration.

I’ve got at least one more disposable prototype to create. In my current prototype, the turn orders are relative to the ship’s bearing. A change to make the orders absolute, based on an 8-point compass rose might make things feel more “nautical” - the captain plots a path on the map, and issues a bearing to turn to. 