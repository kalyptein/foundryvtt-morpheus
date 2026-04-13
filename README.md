![GitHub Release](https://img.shields.io/github/release-date/kalyptein/foundryvtt-morpheus)
![All Versions](https://img.shields.io/github/downloads/kalyptein/foundryvtt-morpheus/total)
![Latest Version](https://img.shields.io/github/downloads/kalyptein/foundryvtt-morpheus/latest/morpheus.zip)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fmorpheus)

# Morpheus Generic RPG for Foundry VTT

A baseline Foundry VTT system for customizing.

## Features

base actor
* name
* properties (key-value pairs, with a metadata-type for categorization, and a description)
* description
* bar1/bar1max, bar2/bar2max, and bar3/bar3max; set the properties to use for each resource bar, updated when changed
* should the actor have a "lock" boolean to prevent alteration?

base item
* name
* container (what contains it; max depth 10, ensure no looping)
* contains (what does it contain)
* properties (key-value pairs, with a metadata-type for categorization)
* description
* should the item have a "lock" boolean to prevent alteration?

activeeffects
* enabled flag that can be toggled
* parent (actor or item)
* property list
* description
* should the effect have a "lock" boolean to prevent alteration?


* can have a party/group actor, with actors tied to it
* it can have an inventory, which can either be independent of the characters (like a treasury or faction supply) or made up of inventory space "donated" by members (to simplify a party inventory of rations, torches, etc)



# License

**foundryvtt-morpheus** is an independent product and is not affiliated with anybody.

The software code that makes up the core of this system is published under the MIT license (see LICENSE.txt).

[3]: https://foundryvtt.com
[4]: https://github.com/Muttley/foundryvtt-morpheus/wiki/
