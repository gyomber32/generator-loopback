/* tslint:disable */

declare var Object: any;
export interface LeftLowerLungInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "value"?: string;
  "valueuom"?: string;
  "id"?: number;
}

export class LeftLowerLung implements LeftLowerLungInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "value": string;
  "valueuom": string;
  "id": number;
  constructor(data?: LeftLowerLungInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LeftLowerLung`.
   */
  public static getModelName() {
    return "LeftLowerLung";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LeftLowerLung for dynamic purposes.
  **/
  public static factory(data: LeftLowerLungInterface): LeftLowerLung{
    return new LeftLowerLung(data);
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
      name: 'LeftLowerLung',
      plural: 'LeftLowerLungs',
      path: 'LeftLowerLungs',
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
        "value": {
          name: 'value',
          type: 'string'
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
