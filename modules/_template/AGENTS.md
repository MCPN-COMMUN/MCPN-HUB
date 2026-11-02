# Regles d'un module

Ce modele est reserve et n'est pas encore fonctionnel.

- Travailler uniquement dans le dossier du module, jamais dans apps ou packages.
- Ne jamais importer un autre module.
- Vue 3 avec script setup, TypeScript strict et schemas Zod sur les routes.
- Utiliser uniquement des donnees factices, jamais de donnees confidentielles.
- Aucun secret, process.env, pilote de base ou connexion directe dans un module.
- Passer par le futur ctx pour logger, config, llm et db.
- Utiliser les futurs composants et jetons de @hub/ui, sans couleur en dur.
- Toute nouvelle dependance necessite une revue du mainteneur.