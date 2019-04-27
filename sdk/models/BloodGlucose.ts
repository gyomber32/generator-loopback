/* tslint:disable */

declare var Object: any;
export interface BloodGlucoseInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "valuenum"?: number;
  "valueuom"?: string;
  "id"?: number;
}

export class BloodGlucose implements BloodGlucoseInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "valuenum": number;
  "valueuom": string;
  "id": number;
  constructor(data?: BloodGlucoseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BloodGlucose`.
   */
  public static getModelName() {
    return "BloodGlucose";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BloodGlucose for dynamic purposes.
  **/
  public static factory(data: BloodGlucoseInterface): BloodGlucose{
    return new BloodGlucose(data);
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
      name: 'BloodGlucose',
      plural: 'BloodGlucoses',
      path: 'BloodGlucoses',
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
