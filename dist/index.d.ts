// Type definitions for fetch-plugin v2

declare class FetchPluginError extends Error {
  name: "FetchPluginError";
  url?: string;
  status?: number;
  fetchOption?: FetchOption;
  code?: "TIMEOUT" | "RETRY_EXHAUSTED";
}

interface FetchOption {
  // Standard fetch() options — passed to new Request()
  method?: string;
  headers?: Record<string, string> | Headers;
  body?: string;
  mode?: "same-origin" | "cors" | "no-cors" | "navigate";
  credentials?: "omit" | "same-origin" | "include";
  cache?:
    | "default"
    | "no-store"
    | "reload"
    | "no-cache"
    | "force-cache"
    | "only-if-cached";
  redirect?: "follow" | "error" | "manual";
  referrer?: string;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal;

  // Plugin-specific options — handled by fetch-plugin, NOT passed to Request
  timeout?: number;
  retry?: boolean | number;
  retryBackoff?: number;
  retryMaxTimeout?: number;
  onRetry?: (retryCount: number, nextTimeout: number) => void;
  fetchStart?: (
    param: { url: string; fetchOption: FetchOption }
  ) => { url: string; fetchOption: FetchOption } | false;
  fetchSuccess?: (data: any) => void;
  fetchError?: (error: FetchPluginError) => void;
}

interface JSONPOption {
  timeout?: number;
  callbackName?: string;
  callbackParam?: string;
}

interface FetchPlugin {
  setOptions(options: FetchOption): void;
  getOptions(): FetchOption;

  /** Base request — returns raw Response, no JSON assumption. */
  request(url: string, option?: FetchOption): Promise<Response>;

  getJSON<T = any>(
    url: string,
    data?: Record<string, any>,
    option?: FetchOption
  ): Promise<T>;
  postJSON<T = any>(
    url: string,
    data?: Record<string, any>,
    option?: FetchOption
  ): Promise<T>;
  putJSON<T = any>(
    url: string,
    data?: Record<string, any>,
    option?: FetchOption
  ): Promise<T>;
  deleteJSON<T = any>(
    url: string,
    data?: Record<string, any>,
    option?: FetchOption
  ): Promise<T>;
  getJSONP<T = any>(
    url: string,
    data?: Record<string, any>,
    option?: JSONPOption
  ): Promise<T>;
}

declare const _fetch: FetchPlugin;
export default _fetch;
export { FetchPluginError, FetchOption, JSONPOption };
