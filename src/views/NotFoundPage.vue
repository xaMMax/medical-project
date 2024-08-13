<template>
  <div>
    <h1>404 - Сторінку не знайдено</h1>
    <p>На жаль, сторінка, яку ви шукаєте, не існує.</p>
    <router-link to="/">Повернутися на головну</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
