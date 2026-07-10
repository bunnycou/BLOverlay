# Beer League Overlay
JavaScript + HTML + CSS Project Made for [Beer League](https://beer-league.games/) Casters!

Hosted at [bloverlaygh.carrotbyte.net](https://bloverlaygh.carrotbyte.net)

## How to use

Download the [`BeerLeagueWeb.json`](BeerLeagueWeb.json) for OBS (The URLs need to be changed from bloverlay to bloverlaygh)

### OR Setup without BeerLeagueWeb.json

Add the following URLs as browser sources to different scenes

`https://bloverlaygh.carrotbyte.net/lol/starting.html` - Starting Soon Screen\
`https://bloverlaygh.carrotbyte.net/lol/intro.html` - Intro Screen (POTW)\
`https://bloverlaygh.carrotbyte.net/lol/draft.html` - Draft Screen\
`https://bloverlaygh.carrotbyte.net/lol/game.html` - In Game Overlay\
`https://bloverlaygh.carrotbyte.net/lol/scores.html` - Score Display Screen\
`https://bloverlaygh.carrotbyte.net/lol/ending.html` - Stream Over Screen


The Score Display Screen has dead space intended for you to fill. 
There is dead space in Intro and Draft as well which can be filled by webcams or this fancy [BL logo](assets/bl.png) 
(browser source for logo is `https://bloverlaygh.carrotbyte.net/assets/logo.html`)

## **IMPORTANT FOR ALL SETUPS** - After you get the scenes

Then add an OBS browser dock with the URL `https://bloverlaygh.carrotbyte.net/lol/data.html`

This will add a window in OBS that gives fields for entering the information that needs to be displayed on screen

Don't forget the [Beer League stinger transition](assets/BLStinger.webm) (set transition at frame 60!!)
