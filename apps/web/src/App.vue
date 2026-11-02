<script setup lang="ts">
import { onMounted, ref } from 'vue';

const apiStatus = ref('Verification en cours');
onMounted(async () => {
  try {
    const response = await fetch('/api/health');
    if (!response.ok) throw new Error('API unavailable');
    const result: unknown = await response.json();
    apiStatus.value = typeof result === 'object' && result !== null
      && 'status' in result && result.status === 'ok'
      ? 'API disponible' : 'Reponse API inattendue';
  } catch {
    apiStatus.value = 'API indisponible';
  }
});
</script>

<template>
  <header>Hub d'ateliers</header>
  <aside role="note">Donnees factices uniquement. Aucune donnee reelle ou confidentielle.</aside>
  <main>
    <h1>Ateliers IA</h1>
    <p>Aucun module pour le moment.</p>
    <p role="status">{{ apiStatus }}</p>
  </main>
</template>

<style>
:root {
  --hub-brand: #173477;
  --hub-background: #f5f7fa;
  --hub-surface: #ffffff;
  --hub-text: #25324b;
  --hub-notice: #eaf1fb;
  font-family: sans-serif;
  color: var(--hub-text);
  background: var(--hub-background);
}
* { box-sizing: border-box; }
body { margin: 0; }
header { padding: 1.25rem 1.5rem; background: var(--hub-brand); color: var(--hub-surface); font-weight: 700; }
aside { padding: 1rem 1.5rem; background: var(--hub-notice); }
main { max-width: 72rem; margin: auto; padding: 2rem 1.5rem; }
h1 { font-size: 1.75rem; }
</style>