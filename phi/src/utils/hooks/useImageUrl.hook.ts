function useImageUrl(url: string | null): string | null {
  if (!url) {
    return null;
  }

  const strapiUrl = process.env['NEXT_PUBLIC_STRAPI_URL'];
  return `${strapiUrl}${url}`;
}

export default useImageUrl;
