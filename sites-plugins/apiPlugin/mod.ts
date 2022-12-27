
export interface apiPayload {
  urlArgs: string;
  userAgent: string;
  requestUrl: string;
  headers: any;
}

const YEXT_API_KEY = "46061e82e51fa0626dbee0492d929fe1"; 
const API_BASE = "https://api-sandbox.yext.com/v2/accounts/me/";
const VER = "20210714";

function buildApiUrl(path: string, params?: Record<string, string>) {
  const result = new URL(path, API_BASE);
  result.searchParams.append("api_key", YEXT_API_KEY);
  result.searchParams.append("v", VER);
  for (const k in params) {
    result.searchParams.append(k, params[k]);
  }
  return result.toString();
}

export function apiPlugin(data: any) {
  
  let customData =  {
    "requestUrl": "https://testsite.dotsquares.com.pagescdn.com/location4-best-buy-union-square.html"
  };

  return customData;
  
}
