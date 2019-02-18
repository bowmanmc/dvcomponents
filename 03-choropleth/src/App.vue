<template>
<div id="app">
    <Choropleth />
</div>
</template>

<script>
import Choropleth from './components/Choropleth.vue';

export default {
    name: 'app',
    components: {
        Choropleth
    }
}
</script>

<style lang="scss">
@import './sass/colors';
@import './sass/typography';

@import '~normalize.css/normalize';

body, html, #app {
    height: 100%;
    min-height: 100%;
}

#app {
    background: $color-red;
    color: $color-light;
    font-family: $fontstack;
    padding: 1.0em;
    text-align: center;
}
</style>
