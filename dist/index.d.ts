// Type definitions for fetch-plugin v2

declare class FetchPluginError extends Error {
  name: "FetchPluginError";
  url?: string;
  status?: number;
  fetchOption?: FetchOption;
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
  fetchStart?: (
    param: { url: string; fetchOption: FetchOption }
  ) => { url: string; fetchOption: FetchOption } | false;
  fetchSuccess?: (data: any) => void;
  fetchError?: (error: FetchPluginError) => void;
}

interface JSONPOption {
  timeout?: number;
  /** Custom callback function name. Auto-generated if omitted. */
  callbackName?: string;
  /** Query parameter name for the callback. Default: "callback". */
  callbackParam?: string;
}

interface FetchPlugin {
  setOptions(options: FetchOption): void;
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
