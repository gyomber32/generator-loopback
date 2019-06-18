/* tslint:disable */

declare var Object: any;
export interface LeftUpperLungInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "value"?: string;
  "valueuom"?: string;
  "id"?: number;
}

export class LeftUpperLung implements LeftUpperLungInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "value": string;
  "valueuom": string;
  "id": number;
  constructor(data?: LeftUpperLungInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LeftUpperLung`.
   */
  public static getModelName() {
    return "LeftUpperLung";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LeftUpperLung for dynamic purposes.
  **/
  public static factory(data: LeftUpperLungInterface): LeftUpperLung{
    return new LeftUpperLung(data);
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
      name: 'LeftUpperLung',
      plural: 'LeftUpperLungs',
      path: 'LeftUpperLungs',
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
