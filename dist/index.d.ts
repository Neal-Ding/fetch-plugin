// Type definitions for fetch-plugin

interface FetchOption {
  method?: string;
  headers?: Record<string, string> | Headers;
  body?: string;
  mode?: "same-origin" | "cors" | "no-cors" | "navigate";
  credentials?: "omit" | "same-origin" | "include";
  cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
  redirect?: "follow" | "error" | "manual";
  referrer?: string;
  timeout?: number;
  fetchStart?: (param: { url: string; fetchOption: FetchOption }) => { url: string; fetchOption: FetchOption } | false;
  fetchSuccess?: (response: any) => void;
  fetchError?: (error: Error) => void;
  [key: string]: any;
}

interface JSONPOption {
  timeout?: number;
  callbackName?: string;
}

interface FetchPlugin {
  setOptions(options: FetchOption): void;
  getJSON<T = any>(url: string, data?: Record<string, any>, option?: FetchOption): Promise<T>;
  postJSON<T = any>(url: string, data?: Record<string, any>, option?: FetchOption): Promise<T>;
  putJSON<T = any>(url: string, data?: Record<string, any>, option?: FetchOption): Promise<T>;
  deleteJSON<T = any>(url: string, data?: Record<string, any>, option?: FetchOption): Promise<T>;
  getJSONP<T = any>(url: string, data?: Record<string, any>, option?: JSONPOption): Promise<T>;
}

declare const _fetch: FetchPlugin;
export default _fetch;
