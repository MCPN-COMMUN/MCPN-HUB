# MCPN Hub

Socle minimal du hub des ateliers IA : monorepo pnpm, Vue 3 avec script setup,
TypeScript strict et API Fastify avec validation Zod. Aucune base ni integration IA.

## Demarrage

Node >= 22.12 et pnpm 10.20.0 (version fixee dans package.json).
Node 24 LTS recommande pour les nouveaux environnements.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Sous PowerShell, utiliser `corepack.cmd` si la politique d'execution bloque les scripts.
Le web affiche son URL au demarrage (port 5173 par defaut).
L'API ecoute sur http://127.0.0.1:3000/api/health.

```sh
corepack pnpm typecheck
corepack pnpm test
corepack pnpm build
```

## Organisation

- `apps/web` : shell Vue 3 + Vite.
- `apps/api` : serveur Fastify, journalisation Pino et route de sante Zod.
- `packages/shared` et `packages/ui` : emplacements reserves au code commun.
- `modules/_template` : emplacement reserve au futur modele de POC.

Les modules, leur auto-decouverte, ctx, le theme partage, la CI, le lint et le
deploiement seront ajoutes ensuite. Le dossier _template n'est pas encore copiable.
Le build compile les deux applications ; il ne constitue pas encore un deploiement
unifie. Ne pas exposer ce serveur sur Internet sans restriction d'acces.

Ne jamais versionner de secrets ni utiliser de donnees reelles ou confidentielles.
Le lockfile est versionne ; les dependances installees et les builds sont ignores.