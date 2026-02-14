# Contributing

Guidelines for contributing to this project.

## Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for everyone.

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeMeAPixel/cfxstat.us.git
   cd cfxstat.us
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the dev server:
   ```bash
   bun run dev
   ```
   Visit `http://localhost:3000`

4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Guidelines

### Code Style

- Biome for formatting and linting
- `bun run lint` to check
- `bun run format` to auto-format

### TypeScript

- All code should be properly typed
- No `any` types unless absolutely necessary with a comment explaining why
- Run `bun run build` to verify TypeScript compilation

### Components

- Single-responsibility components
- Use Lucide React for icons
- Tailwind CSS for styling
- Proper TypeScript types for all props

### Commits

Follow the Conventional Commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, missing semicolons, etc.)
- `refactor:` - Code refactoring without feature changes
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Build process, dependencies, etc.

Example:
```
feat(links): add support for custom link categories
fix(ui): correct hover state color on link cards
docs(readme): update installation instructions
```

## Making Changes

### Adding New Features

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly: `bun run dev` and `bun run build`
4. Run linting: `bun run lint` and `bun run check`
5. Commit with conventional format
6. Push and create a pull request

### Customizing Link Categories

To add or modify link categories:
1. Edit [src/data/categories.ts](src/data/categories.ts)
2. Follow the existing structure for consistency
3. Use available color options from the color map in [src/components/layouts/LinkHubContent.tsx](src/components/layouts/LinkHubContent.tsx)

### Adding Colors

To add new background colors:
1. Add entries to `bgColorMap` and `glowColorMap` in [src/components/layouts/LinkHubContent.tsx](src/components/layouts/LinkHubContent.tsx)
2. Use Tailwind CSS color classes
3. Ensure the glow effect complements the background

## Testing

- Test your changes locally before submitting
- Verify responsive design works on mobile, tablet, and desktop
- Check that deep linking works: navigate using hashes like `#community` and `#community/github`
- Test pagination when categories have more than 8 links

## Deployment

The project deploys automatically via Cloudflare Workers. To deploy manually:

```bash
# Authenticate with Cloudflare
wrangler login

# Deploy to staging
bun run deploy -- -e staging

# Deploy to production
bun run deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Reporting Issues

Found a bug? Have a feature request?
1. Check [GitHub Issues](https://github.com/CodeMeAPixel/cfxstat.us/issues)
2. Provide clear description and reproduction steps
3. Include your environment (OS, Node version, browser)

## Project Structure

```
src/
├── routes/              # File-based routes
├── components/          # React components
├── data/                # Monitored endpoints
├── types/               # TypeScript types
├── utils/               # Utilities
└── styles.css           # Global styles
```

## Questions?

Email: [hey@codemeapixel.dev](mailto:hey@codemeapixel.dev)

## License

By contributing, you agree your contributions will be licensed under the same license as the project (see [LICENSE](LICENSE)).
