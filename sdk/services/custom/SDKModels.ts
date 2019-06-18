/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Age } from '../../models/Age';
import { BloodGlucose } from '../../models/BloodGlucose';
import { BloodOxygen } from '../../models/BloodOxygen';
import { DiastolicBloodPressure } from '../../models/DiastolicBloodPressure';
import { Gender } from '../../models/Gender';
import { LeftLowerLung } from '../../models/LeftLowerLung';
import { LeftUpperLung } from '../../models/LeftUpperLung';
import { RightLowerLung } from '../../models/RightLowerLung';
import { RightUpperLung } from '../../models/RightUpperLung';
import { SystolicBloodPressure } from '../../models/SystolicBloodPressure';
import { TobaccoUse } from '../../models/TobaccoUse';
import { Weight } from '../../models/Weight';
import { Height } from '../../models/Height';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Age: Age,
    BloodGlucose: BloodGlucose,
    BloodOxygen: BloodOxygen,
    DiastolicBloodPressure: DiastolicBloodPressure,
    Gender: Gender,
    LeftLowerLung: LeftLowerLung,
    LeftUpperLung: LeftUpperLung,
    RightLowerLung: RightLowerLung,
    RightUpperLung: RightUpperLung,
    SystolicBloodPressure: SystolicBloodPressure,
    TobaccoUse: TobaccoUse,
    Weight: Weight,
    Height: Height,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
