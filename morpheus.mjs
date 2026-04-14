import loadTemplates from "./module/templates.mjs";
import { MorpheusActor } from "./module/document/actor.mjs";
import { MorpheusItem } from "./module/document/item.mjs";

import { MorpheusActorSheet } from "./module/sheet/actor-sheet.mjs";
import { MorpheusItemSheet } from "./module/sheet/item-sheet.mjs";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

// A hook event that fires as Foundry is initializing, right before any
// initialization tasks have begun.

Hooks.once("init", () => {
  console.log("Morpheus | Initializing");

  CONFIG.Actor.documentClass = MorpheusActor;
  CONFIG.Item.documentClass = MorpheusItem;

  loadTemplates();
  
  foundry.documents.collections.Actors.unregisterSheet("core", foundry.appv1.sheets.ActorSheet);
  foundry.documents.collections.Actors.registerSheet("morpheus", MorpheusActorSheet, { makeDefault: true });

  foundry.documents.collections.Items.unregisterSheet("core", foundry.appv1.sheets.ItemSheet);
  foundry.documents.collections.Items.registerSheet("morpheus", MorpheusItemSheet, { makeDefault: true });
});

