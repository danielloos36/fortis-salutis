import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Alte Gym-URL
      { source: '/gym', destination: '/training', permanent: true },

      // Alte Wix-Seiten
      { source: '/galerie', destination: '/training#galerie', permanent: true },
      { source: '/ueber-mich', destination: '/#ueber-uns', permanent: true },
      { source: '/kontakt', destination: '/#kontakt', permanent: true },
      { source: '/leistungen', destination: '/', permanent: true },
      { source: '/hausbesuche', destination: '/leistungen/hausbesuche', permanent: true },
      { source: '/blog', destination: '/', permanent: true },

      // Alte Blog-Posts
      { source: '/post/:slug*', destination: '/', permanent: true },

      // Umbenannte Kursseite
      { source: '/kurse/bjj-performance-coaching', destination: '/kurse/bjj', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
