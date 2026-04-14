export class MorpheusActor extends Actor {

  /** @override */
  static async create(data, options={}) {

    data.prototypeToken = data.prototypeToken || {
      actorLink: false,
      displayBars: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
      bar1: { attribute: "barVal1" },
      bar2: { attribute: "barVal2" },
      bar3: { attribute: "barVal3" }
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
    let bar = this._setBarValues(properties, 0);
    system.barVal1 = bar[0];
    system.barMax1 = bar[1];
    bar = this._setBarValues(properties, 1);
    system.barVal2 = bar[0];
    system.barMax2 = bar[1];
    bar = this._setBarValues(properties, 2);
    system.barVal3 = bar[0];
    system.barMax3 = bar[1];
  }

  /** @override */
  getRollData() {
    const data = super.getRollData();

    return data;
  }

  _setBarValues(props, i)
  {
    let result = [null, null];
    const valName = this.system.barProperty.value[i]
    const maxName = this.system.barProperty.max[i]
    const barProp = props.find(p => p.name === valName)
    if (barProp) {
      result[0] = barProp.system.value;

      const barPropMax = props.find(p => p.name === maxName)
      if (barPropMax) {
        result[1] = barPropMax.system.value;
      }
    }

    return result;
  }
}