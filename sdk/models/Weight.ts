/* tslint:disable */

declare var Object: any;
export interface WeightInterface {
  "row_id"?: number;
  "itemid"?: number;
  "subject_id"?: number;
  "valuenum"?: number;
  "valueuom"?: string;
  "id"?: number;
}

export class Weight implements WeightInterface {
  "row_id": number;
  "itemid": number;
  "subject_id": number;
  "valuenum": number;
  "valueuom": string;
  "id": number;
  constructor(data?: WeightInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Weight`.
   */
  public static getModelName() {
    return "Weight";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Weight for dynamic purposes.
  **/
  public static factory(data: WeightInterface): Weight{
    return new Weight(data);
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
      name: 'Weight',
      plural: 'Weights',
      path: 'Weights',
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
