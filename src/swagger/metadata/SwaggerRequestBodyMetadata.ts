import { SW_ContentType } from "../constant/SwaggerConstant";

export interface SwaggerMediaTypeObjectMetadata {
  // eslint-disable-next-line
  schema?: any;

  // eslint-disable-next-line
  examples?: any;
}

export interface SwaggerRequestBodyMetadata {
  description?: string;
  required?: boolean;

  // 'json' | 'xml' | 'text' | '*/*
  type?: SW_ContentType;
  ref?: Function | string;

  content?: SwaggerMediaTypeObjectMetadata;
}
