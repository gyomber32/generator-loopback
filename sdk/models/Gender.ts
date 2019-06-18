/* tslint:disable */

declare var Object: any;
export interface GenderInterface {
  "row_id"?: number;
  "subject_id"?: number;
  "gender"?: string;
  "dob"?: string;
  "dod"?: string;
  "id"?: number;
}

export class Gender implements GenderInterface {
  "row_id": number;
  "subject_id": number;
  "gender": string;
  "dob": string;
  "dod": string;
  "id": number;
  constructor(data?: GenderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Gender`.
   */
  public static getModelName() {
    return "Gender";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Gender for dynamic purposes.
  **/
  public static factory(data: GenderInterface): Gender{
    return new Gender(data);
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
      name: 'Gender',
      plural: 'Genders',
      path: 'Genders',
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
