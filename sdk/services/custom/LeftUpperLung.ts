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
import { LeftUpperLung } from '../../models/LeftUpperLung';
import { SocketConnection } from '../../sockets/socket.connections';


/**
 * Api services for the `LeftUpperLung` model.
 */
@Injectable()
export class LeftUpperLungApi extends BaseLoopBackApi {

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
   * @param {string} lul The lul measurement value of the database.
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
  public addLul(lul: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/LeftUpperLungs/LUL";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof lul !== 'undefined' && lul !== null) _urlParams.lul = lul;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param {string} lul The lul in the database. Values are given by using the value types: Diminished, Clear, Coarse, etc.
   *
   * @param {number} quantity Quantity the user wants to generate.
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * OK
   */
  public getLul(lul: any = {}, quantity: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/LeftUpperLungs/LUL";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof lul !== 'undefined' && lul !== null) _urlParams.lul = lul;
    if (typeof quantity !== 'undefined' && quantity !== null) _urlParams.quantity = quantity;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `LeftUpperLung`.
   */
  public getModelName() {
    return "LeftUpperLung";
  }
}
