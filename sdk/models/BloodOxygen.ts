/* tslint:disable */

declare var Object: any;
export interface BloodOxygenInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "valuenum"?: number;
  "valueuom"?: string;
  "id"?: number;
}

export class BloodOxygen implements BloodOxygenInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "valuenum": number;
  "valueuom": string;
  "id": number;
  constructor(data?: BloodOxygenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BloodOxygen`.
   */
  public static getModelName() {
    return "BloodOxygen";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BloodOxygen for dynamic purposes.
  **/
  public static factory(data: BloodOxygenInterface): BloodOxygen{
    return new BloodOxygen(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'BloodOxygen',
      plural: 'BloodOxygens',
      path: 'BloodOxygens',
      idName: 'id',
      properties: {
        "row_id": {
          name: 'row_id',
          type: 'number'
        },
        "itemid": {
          name: 'itemid',
          type: 'number'
        },
        "subject_id": {
          name: 'subject_id',
          type: 'number'
        },
        "valuenum": {
          name: 'valuenum',
          type: 'number'
        },
        "valueuom": {
          name: 'valueuom',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
