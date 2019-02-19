<template>
<div id="app">
    <Choropleth v-bind:state="state" v-bind:counties="counties" />
</div>
</template>

<script>
import Choropleth from './components/Choropleth.vue';
import DataApi from './DataApi';


export default {
    name: 'app',

    components: {
        Choropleth,
    },

    data() {
        return {
            state: null,
            counties: null,
        };
    },

    created() {
        DataApi.getCounty().then((counties) => {
            this.counties = counties;
        });
        DataApi.getState().then((state) => {
            this.state = state;
        });
    },
};
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
    background: $color-bg;
    color: $color-txt;
    font-family: $fontstack;
    padding: 1.0em;
    text-align: center;
}
</style>
