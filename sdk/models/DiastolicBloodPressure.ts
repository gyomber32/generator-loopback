/* tslint:disable */

declare var Object: any;
export interface DiastolicBloodPressureInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "valuenum"?: number;
  "valueuom"?: string;
  "id"?: number;
}

export class DiastolicBloodPressure implements DiastolicBloodPressureInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "valuenum": number;
  "valueuom": string;
  "id": number;
  constructor(data?: DiastolicBloodPressureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DiastolicBloodPressure`.
   */
  public static getModelName() {
    return "DiastolicBloodPressure";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DiastolicBloodPressure for dynamic purposes.
  **/
  public static factory(data: DiastolicBloodPressureInterface): DiastolicBloodPressure{
    return new DiastolicBloodPressure(data);
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
      name: 'DiastolicBloodPressure',
      plural: 'DiastolicBloodPressures',
      path: 'DiastolicBloodPressures',
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
