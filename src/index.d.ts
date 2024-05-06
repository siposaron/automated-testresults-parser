import TestResult from "./models/TestResult";

declare interface ParseOptions {
  type: string;
  ignore_error_count?: boolean;
  files: string[];
}

declare interface ParseFromUrlOptions {
  type: string;
  ignore_error_count?: boolean;
  urls: string[];
  headers?: Headers;
}

export function parse(options: ParseOptions): TestResult;
export async function parseFromUrl(options: ParseFromUrlOptions): TestResult;

export namespace parser { }