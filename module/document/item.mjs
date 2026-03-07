export class MorpheusItem extends Item {

  /** @override */
  prepareDerivedData() {
    super.prepareDerivedData();

    const system = this.system;

    // Example derived field
    if (system.quantity && system.weight) {
      system.totalWeight = system.quantity * system.weight;
    }
  }

}