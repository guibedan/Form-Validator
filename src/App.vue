<script setup>
import Cad from './views/Cad.vue'
import Home from './views/Home.vue'

import { reactive, provide } from 'vue';

// Defina o estado global usando reactive
const globalState = reactive({
  minhaVariavel: 'cad',
});

// Forneça o estado global para que os componentes possam acessá-lo
provide('globalState', globalState);
</script>

<template>
  <div>
    <!-- Use v-if para condicionalmente renderizar Cad ou Home -->
    <Cad v-if="globalState.minhaVariavel === 'cad'" />
    <Home v-else />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1c0e28;
  }
</style>
