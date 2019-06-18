/* tslint:disable */

declare var Object: any;
export interface AgeInterface {
  "row_id"?: number;
  "subject_id"?: number;
  "gender"?: string;
  "dob"?: string;
  "dod"?: string;
  "id"?: number;
}

export class Age implements AgeInterface {
  "row_id": number;
  "subject_id": number;
  "gender": string;
  "dob": string;
  "dod": string;
  "id": number;
  constructor(data?: AgeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Age`.
   */
  public static getModelName() {
    return "Age";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Age for dynamic purposes.
  **/
  public static factory(data: AgeInterface): Age{
    return new Age(data);
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
      name: 'Age',
      plural: 'Ages',
      path: 'Ages',
      idName: 'id',
      properties: {
        "row_id": {
          name: 'row_id',
          type: 'number'
        },
        "subject_id": {
          name: 'subject_id',
          type: 'number'
        },
        "gender": {
          name: 'gender',
          type: 'string'
        },
        "dob": {
          name: 'dob',
          type: 'string'
        },
        "dod": {
          name: 'dod',
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
