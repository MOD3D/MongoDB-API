/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends BaseService {
  getCliente():Observable<any>{
    return this.http.get<any>('http://localhost:4200')
  }
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiClienteGet
   */
  static readonly ApiClienteGetPath = '/api/Cliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Cliente>>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cliente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClienteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Plain(params?: {
  }): Observable<Array<Cliente>> {

    return this.apiClienteGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cliente>>) => r.body as Array<Cliente>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Cliente>>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cliente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClienteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Json(params?: {
  }): Observable<Array<Cliente>> {

    return this.apiClienteGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cliente>>) => r.body as Array<Cliente>)
    );
  }

  /**
   * Path part for operation apiClientePost
   */
  static readonly ApiClientePostPath = '/api/Cliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Plain$Response(params?: {
    body?: Cliente
  }): Observable<StrictHttpResponse<Array<Cliente>>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cliente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClientePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Plain(params?: {
    body?: Cliente
  }): Observable<Array<Cliente>> {

    return this.apiClientePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cliente>>) => r.body as Array<Cliente>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Json$Response(params?: {
    body?: Cliente
  }): Observable<StrictHttpResponse<Array<Cliente>>> {

    const rb = new RequestBuilder(this.rootUrl, ClienteService.ApiClientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cliente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiClientePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Json(params?: {
    body?: Cliente
  }): Observable<Array<Cliente>> {

    return this.apiClientePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cliente>>) => r.body as Array<Cliente>)
    );
  }

}
