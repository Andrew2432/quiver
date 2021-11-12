function useAuthorSlug(): string {
  return process.env['NEXT_PUBLIC_AUTHOR_SLUG'] ?? '';
}

export default useAuthorSlug;
