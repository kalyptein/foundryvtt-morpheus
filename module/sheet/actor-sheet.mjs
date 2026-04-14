export class MorpheusActorSheet extends foundry.appv1.sheets.ActorSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["morpheus", "sheet", "actor"],
      template: "systems/morpheus/templates/actor/actor-sheet.hbs",
      width: 600,
      height: 700
    });
  }

  async getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.

    const context = await super.getData();
    context.system = this.actor.system;

    // Get properties
    const properties = this.actor.items.filter((i) => i.type === "Property");
    const propTops = properties.filter((i) => i.system.parent === "");

    // Get inventory
    const inv = this.actor.items.filter((i) => i.type === "Item");
    const invTops = inv.filter((i) => i.system.parent === "");

    return context;
  }

}