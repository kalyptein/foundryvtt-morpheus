export class MorpheusActor extends Actor {

  /** @override */
  static async create(data, options={}) {

    data.prototypeToken = data.prototypeToken || {
      actorLink: false,
      displayBars: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
      bar1: { attribute: "bar1" },
      bar2: { attribute: "bar2" },
    };

    return super.create(data, options);
  }

  /** @override */
  prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: 
    // - data reset (to clear active effects),
    // - prepareBaseData()
    // - prepareEmbeddedDocuments() (including active effects),
    // - prepareDerivedData()
    super.prepareData();
  }

  /** @override */
  prepareBaseData() {
    super.prepareBaseData();

    // this._prepareDerivedData();
  }

  /** @override */
  prepareEmbeddedDocuments() {
    super.prepareEmbeddedDocuments();
  }

  /** @override */
  prepareDerivedData() {
    super.prepareDerivedData();

    const system = this.system;
    const items = this.items;

    // Get properties
    const properties = items.filter((i) => i.type === "Property");

    // Set bar values
    this._setBarValues(properties, 0, system.bar1);
    this._setBarValues(properties, 1, system.bar2);
  }

  /** @override */
  getRollData() {
    const data = super.getRollData();

    return data;
  }

  _setBarValues(props, i, barProp)
  {
    barProp.value = null;
    barProp.max = null;
    const valName = this.system.barProperty.value[i]
    const maxName = this.system.barProperty.max[i]
    const barPropVal = props.find(p => p.name === valName)
    if (barPropVal) {
      barProp.value = barPropVal.system.value;

      const barPropMax = props.find(p => p.name === maxName)
      if (barPropMax) {
        barProp.max = barPropMax.system.value;
      }
    }
  }
}