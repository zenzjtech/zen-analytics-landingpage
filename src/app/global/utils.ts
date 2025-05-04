type UtmParams = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

/**
 * Adds UTM parameters to a URL
 * @param baseUrl - The base URL without query parameters
 * @param params - Object containing UTM parameters
 * @returns Full URL with UTM parameters
 */
export const addUtmParams = (baseUrl: string, params: UtmParams): string => {
  const url = new URL(baseUrl);
  
  if (params.source) url.searchParams.append('utm_source', params.source);
  if (params.medium) url.searchParams.append('utm_medium', params.medium);
  if (params.campaign) url.searchParams.append('utm_campaign', params.campaign);
  if (params.content) url.searchParams.append('utm_content', params.content);
  if (params.term) url.searchParams.append('utm_term', params.term);
  
  return url.toString();
};