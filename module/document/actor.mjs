export class MorpheusActor extends Actor {

  prepareDerivedData() {
    super.prepareDerivedData();

    const system = this.system;

    if (system.attributes?.hp) {
      system.attributes.hp.max = system.attributes.hp.value + (system.attributes.endurance ?? 0);
    }
  }

}