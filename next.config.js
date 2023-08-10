/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["img.clerk.com", "images.clerk.dev", "uploadthing.com", "placehold.co"],
    }
}

module.exports = nextConfig
