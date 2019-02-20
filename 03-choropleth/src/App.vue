<template>
<div id="app">
    <div class="explanation">
        <h1>Ohio Choropleth</h1>
        <h2>2017 County Unemployment Rates</h2>
        <p>
            This data was downloaded from the Bureau of Labor Statistics
            website <a href="https://www.bls.gov">www.bls.gov</a>.
        </p>
    </div>
    <div class="map">
        <Choropleth v-bind:state="state"
                    v-bind:counties="counties"
                    v-bind:data="data" />
    </div>
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
            data: null,
        };
    },

    created() {
        DataApi.getCounty().then((counties) => {
            this.counties = counties;
        });
        DataApi.getState().then((state) => {
            this.state = state;
        });
        DataApi.getUnemploymentData().then((data) => {
            this.data = data;
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
    display: flex;
    flex-direction: column;
    font-family: $fontstack-body;
    padding: 1.0em;

    .explanation {
        h1, h2 {
            color: $color-heading;
            font-family: $fontstack-heading;
        }

        h1 {
            font-size: $fontsize-lg;
        }

        h2 {
            font-size: $fontsize-md;
        }

        p {
            color: $color-txt;
            font-family: $fontstack-body;
        }

        a {
            color: $color-blue;
        }
    }

    .map {
        flex: 1;
        max-width: 768px;
    }
}
</style>
