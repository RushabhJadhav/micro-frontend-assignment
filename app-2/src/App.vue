<template>
  <div id="app">
    <app-header></app-header>
    <search-module class="main"></search-module>
    <!-- <div id="react-container"></div> -->
  </div>
</template>

<script>
// import React from 'react';
// import ReactDOM from 'react-dom';
import Search from "search/searchModule";
import Header from './components/Header';
// import Footer from 'footer/footerModule';

export default {
  components: {
    'search-module': Search,
    'app-header': Header,
  },
  // mounted() {
  //   const container = document.getElementById('react-container');
  //   ReactDOM.render(<Footer />, container);
  // }
}
</script>

<style>
.main {
  width: 50%;
  margin: auto;
}
</style>
