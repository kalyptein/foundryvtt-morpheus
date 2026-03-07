export class MorpheusItemSheet extends ItemSheet {

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["morpheus", "sheet", "item"],
      template: "systems/morpheus/templates/item/item-sheet.hbs",
      width: 500,
      height: 400,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "description"
        }
      ]
    });
  }

  /** @override */
  async getData() {
    const context = await super.getData();

    context.system = this.item.system;
    context.item = this.item;

    return context;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    if (!this.isEditable) return;

    // Example button listener
    html.find(".test-button").click(this._onTest.bind(this));
  }

  async _onTest(event) {
    event.preventDefault();
    console.log("Morpheus item test button clicked", this.item);
  }

}