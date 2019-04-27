/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiastolicBloodPressure } from '../../models/DiastolicBloodPressure';
import { SocketConnection } from '../../sockets/socket.connections';


/**
 * Api services for the `DiastolicBloodPressure` model.
 */
@Injectable()
export class DiastolicBloodPressureApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {number} diastolicBloodPressure The diastolic blood pressure measurement value of the database.
   *
   * @param {object} data Request data.
   *
   * This method does not accept any data. Supply an empty object.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public addDiastolicBloodPressure(diastolicBloodPressure: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/DiastolicBloodPressures/diastolic";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof diastolicBloodPressure !== 'undefined' && diastolicBloodPressure !== null) _urlParams.diastolicBloodPressure = diastolicBloodPressure;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {number} diastolicBloodPressure The diastolic blood pressure in the database. Values are given by using the value (e.g.: 76 or 104).
   *
   * @param {number} quantity Quantity the user wants to generate.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * OK
   */
  public getDiastolicBloodPressure(diastolicBloodPressure: any = {}, quantity: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/DiastolicBloodPressures/diastolic";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof diastolicBloodPressure !== 'undefined' && diastolicBloodPressure !== null) _urlParams.diastolicBloodPressure = diastolicBloodPressure;
    if (typeof quantity !== 'undefined' && quantity !== null) _urlParams.quantity = quantity;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `DiastolicBloodPressure`.
   */
  public getModelName() {
    return "DiastolicBloodPressure";
  }
}
