function useImageUrl(url: string | null): string {
  if (!url) {
    return '';
  }

  const strapiUrl = process.env['NEXT_PUBLIC_STRAPI_URL'];
  return `${strapiUrl}${url}`;
}

export default useImageUrl;
