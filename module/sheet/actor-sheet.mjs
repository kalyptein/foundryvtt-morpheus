export class MorpheusActorSheet extends ActorSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["morpheus", "sheet", "actor"],
      template: "systems/morpheus/templates/actor/actor-sheet.hbs",
      width: 600,
      height: 600
    });
  }

  async getData() {
    const context = await super.getData();
    context.system = this.actor.system;
    return context;
  }

}