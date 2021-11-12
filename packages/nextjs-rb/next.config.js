module.exports = {
  publicRuntimeConfig: {
    wp_api_url: process.env.NEXT_PUBLIC_WP_API_URL,
    wp_contact_url: process.env.NEXT_PUBLIC_WP_CONTACT_URL,
    wp_project_url: process.env.NEXT_PUBLIC_WP_PROJECT_URL,
    base_url: process.env.NEXT_PUBLIC_BASE_URL,
    ga_id: process.env.NEXT_PUBLIC_GA_ID,
    author_email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
  },
  images: {
    domains: ['localhost'],
  },
};
