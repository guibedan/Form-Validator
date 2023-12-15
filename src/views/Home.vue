<script setup>
</script>

<template>
  <body>
    <h1 class="test">Bem Vindo!</h1>
    <a href="https://github.com/guibedan/Form-Validator" target="_blank" class="testR">Repositório</a>
  </body>
</template>

<style scoped>
  body {
            display: flex;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            background-color: #1c0e28;
        }
        .test > h1 {margin-top: 500px;}
        .test, .testR {
            font-size: 50pt;
            color: #00ff88;
            font-family: noto sans semibold;
        }

        .testR {
            font-size: 30pt;
            cursor: pointer;
        }

        .testR:hover {
            color: #30fc9d;
        }
</style>
