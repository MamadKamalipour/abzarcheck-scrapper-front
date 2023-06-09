import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { IRequestOption } from '@utils/Request/RequestType';

export interface IBaseApiResponseBody {}

export interface IBaseApiRequestBody {}

export interface IApiMutationParams<
  R extends IBaseApiResponseBody,
  T extends IBaseApiRequestBody,
> {
  builder: EndpointBuilder<BaseQueryFn<IRequestOption<T>>, any, any>;
  query(arg: T): IRequestOption<T>;
  transformResponse?(data: R): any;
}
