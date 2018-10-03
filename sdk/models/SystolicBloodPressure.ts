/* tslint:disable */

declare var Object: any;
export interface SystolicBloodPressureInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "valuenum"?: number;
  "valueuom"?: string;
  "id"?: number;
}

export class SystolicBloodPressure implements SystolicBloodPressureInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "valuenum": number;
  "valueuom": string;
  "id": number;
  constructor(data?: SystolicBloodPressureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystolicBloodPressure`.
   */
  public static getModelName() {
    return "SystolicBloodPressure";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystolicBloodPressure for dynamic purposes.
  **/
  public static factory(data: SystolicBloodPressureInterface): SystolicBloodPressure{
    return new SystolicBloodPressure(data);
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
      name: 'SystolicBloodPressure',
      plural: 'SystolicBloodPressures',
      path: 'SystolicBloodPressures',
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
