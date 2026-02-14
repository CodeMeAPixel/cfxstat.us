# Cloudflare Workers Deployment

Deploy to Cloudflare Workers.

## Prerequisites

1. Cloudflare account at https://dash.cloudflare.com
2. Workers enabled on your account
3. Wrangler CLI installed globally: `npm install -g wrangler`
4. Domain registered (for production deployment)

## Setup Steps

### 1. Authenticate with Cloudflare

```bash
wrangler login
```

This will open a browser to grant Wrangler access to your Cloudflare account.

### 2. Configure wrangler.jsonc

Update `wrangler.jsonc` with your account ID:

```json
{
  "account_id": "your-account-id",
  "routes": [
    { "pattern": "cfxstat.us", "custom_domain": true }
  ]
}
```

### 3. Deploy

```bash
bun run deploy
```

The site will be available at `https://cfxstat.us`.

## Environment Variables

Set secrets:

```bash
wrangler secret put VARIABLE_NAME
```

Access in code:

```typescript
const value = process.env.VARIABLE_NAME
```

## Monitoring

View logs:

```bash
wrangler tail
```

Or in the Cloudflare dashboard at https://dash.cloudflare.com.

## Custom Domain

1. Register domain with Cloudflare
2. Update `wrangler.jsonc` with routes
3. Redeploy: `bun run deploy`
4. Verify in Cloudflare dashboard

## Performance

Cloudflare Workers provides:
- Global edge network
- Automatic compression
- HTTP/2 and HTTP/3
- Free SSL

## Troubleshooting

### 401 Unauthorized
Run `wrangler login` again to re-authenticate.

### Build fails

```bash
bun install
```

### Site not loading

Check the Cloudflare dashboard for errors.

### Custom domain not working

Verify domain is using Cloudflare nameservers and Workers route is configured.

## Rollback

In the Cloudflare dashboard: Workers > Deployments > select and rollback.

## Local Testing

```bash
bun run build
bun run preview
```

Visit `http://localhost:3000`

## Resources

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [TanStack Start Deployment](https://tanstack.com/start/latest/docs/framework/react/guide/deploying)
