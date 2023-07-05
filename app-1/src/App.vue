<template>
  <div>
    <VueContainer></VueContainer>
    <Weather></Weather>
  </div>
</template>

<script>
import Weather from './components/Weather'
import VueContainer from 'vueContainer/headerModule'

export default {
  components: {
    Weather,
    VueContainer
  }
}
</script>

<style>
</style>
