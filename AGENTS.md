# Conventions du socle

- Utiliser TypeScript strict, ESM, pnpm et Vue 3 avec script setup uniquement.
- Interdits : Vue 2, Options API, Vuex, Express et axios.
- Commandes : corepack pnpm dev, typecheck, test, build.
- Chaque route API declare un schema Zod. Utiliser fetch pour HTTP.
- Un contributeur de module travaille uniquement dans modules/<id>.
- Aucun import entre modules, aucun acces direct a process.env dans un module.
- Les futurs modules recevront logger, config, llm et eventuellement db via ctx.
- Ne pas ajouter de dependance sans revue du mainteneur.
- Donnees factices uniquement ; aucun secret dans le front ou le depot.
- Ne pas construire de base de donnees tant qu'un module n'en a pas besoin.