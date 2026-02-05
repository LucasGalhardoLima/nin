export const getApiBaseUrl = () => process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const getSiteBaseUrl = () => process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');
