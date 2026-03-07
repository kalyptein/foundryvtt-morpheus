import { MorpheusActor } from "./module/document/actor.mjs";
import { MorpheusItem } from "./module/document/item.mjs";

import { MorpheusActorSheet } from "./module/sheet/actor-sheet.mjs";
import { MorpheusItemSheet } from "./module/sheet/item-sheet.mjs";

Hooks.once("init", () => {
  console.log("Morpheus | Initializing");

  CONFIG.Actor.documentClass = MorpheusActor;
  CONFIG.Item.documentClass = MorpheusItem;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("morpheus", MorpheusActorSheet, { makeDefault: true });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("morpheus", MorpheusItemSheet, { makeDefault: true });
});