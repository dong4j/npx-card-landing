This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deployment

There are several ways to deploy this application:

### 1. Deploy as a Node.js Application (Default)

By default, the project is configured to be deployed as a Node.js application with `output: 'standalone'` in `next.config.js`.

#### A. Direct Server Deployment

```bash
# On your server:

# 1. Clone the repository
git clone <your-repo-url>
cd npx-card-landing

# 2. Install dependencies
npm install

# 3. Build the application
npm run build

# 4. Start the production server
npm run start

# Optional: Use PM2 for process management
npm install -g pm2
pm2 start .next/standalone/server.js --name kokoro
```

#### B. Docker Deployment

The project includes a production-ready Dockerfile. To deploy using Docker:

```bash
# 1. Build the Docker image
docker build -t npx-card-landing .

# 2. Run the container
docker run -p 3000:3000 npx-card-landing

# Optional: Run with environment variables
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  npx-card-landing

# Optional: Run with Docker Compose
# Create a docker-compose.yml file:
# version: '3'
# services:
#   web:
#     build: .
#     ports:
#       - "3000:3000"
#     environment:
#       - NODE_ENV=production

docker-compose up -d
```

The application will be available at `http://localhost:3000` (or your server's IP/domain).

For production deployment, consider:
- Using a reverse proxy (like Nginx) in front of the Node.js server
- Setting up SSL/TLS certificates
- Configuring proper environment variables
- Setting up monitoring and logging

### 2. Deploy as Static Files

If you want to deploy to a static file hosting service, follow these steps:

1. Modify `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you have any other config options, keep them here
}

module.exports = nextConfig
```

2. Add static export configuration to dynamic routes (if any):
```typescript
// In files like app/sitemap.ts
export const dynamic = 'force-static'
```

3. Build the application:
```bash
npm run build
```

This will generate a static export in the `out` directory, which can be deployed to any static hosting service like:
- Nginx
- Apache
- GitHub Pages
- Vercel
- Netlify

Simply upload the contents of the `out` directory to your static file server's root directory.

### 3. Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
