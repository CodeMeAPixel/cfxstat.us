# Security

## Reporting Vulnerabilities

Do not open public GitHub issues for security vulnerabilities. Report to:

[hey@codemeapixel.dev](mailto:hey@codemeapixel.dev) with subject "Security Vulnerability Report"

Include description, reproduction steps, impact, and suggested fix if available.

## Best Practices

### Deployers

- Keep Cloudflare credentials secure
- Use environment variables for sensitive data
- Regularly update dependencies: `bun update`

### Contributors

- Never commit secrets or API keys
- Use `.env` files for sensitive data (added to `.gitignore`)
- Check for XSS and injection vulnerabilities in PRs

## Dependencies

Key dependencies are regularly updated:
- @tanstack/react-start
- tailwindcss
- lucide-react
- @cloudflare/vite-plugin

## Dependency Scanning

```bash
bun audit           # Check for vulnerabilities
bun audit --fix     # Fix vulnerabilities
```

## Environment Variables

Do not expose:
- Cloudflare API tokens
- Service credentials
- Database connection strings

Use Cloudflare Workers Secrets:
```bash
wrangler secret put SECRET_NAME
```

## Deployment

- Authenticate: `wrangler login`
- Review changes before deploying
- Enable Cloudflare DDoS protection
- Enforce HTTPS

## Updates

- Monitor GitHub security advisories
- Enable Dependabot alerts
- Test dependency updates before committing

## Disclosure

1. Allow reasonable time for fixes before public disclosure
2. Don't access other users' data
3. Avoid destructive testing
4. Act in good faith

## Contact

- Email: [hey@codemeapixel.dev](mailto:hey@codemeapixel.dev)
- GitHub: [CodeMeAPixel/cfxstat.us](https://github.com/CodeMeAPixel/cfxstat.us)

---

Last Updated: February 2026
