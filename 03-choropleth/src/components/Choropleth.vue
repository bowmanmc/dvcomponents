<template>
<svg class="Choropleth" :viewBox="viewBox">
    <g class="State">
        <path class="State" :d="computePath(this.state)" />
    </g>
    <g class="Counties">
        <path v-for="feature in countyFeatures"
              :id="`county-${feature.properties['FIPS_CODE']}`"
              :d="computePath(feature)"
              :key="`county-${feature.properties['FIPS_CODE']}`"/>
    </g>
</svg>
</template>

<script>
import { geoCentroid, geoConicConformal, geoPath } from 'd3-geo';

export default {
    name: 'Choropleth',
    data() {
        return {
            height: 1200,
            width: 960,
        };
    },
    props: [
        'state',
        'counties',
    ],
    computed: {
        viewBox() {
            return `0 0 ${this.width} ${this.height}`;
        },
        countyFeatures() {
            if (!this.counties) {
                return [];
            }
            return this.counties.features;
        },
        pathGenerator() {
            if (!this.state) {
                return null;
            }

            const projection = geoConicConformal();
            const pathGenerator = geoPath().projection(projection);
            const centroid = geoCentroid(this.state.features[0]);
            const r = [centroid[0] * -1, centroid[1] * -1];
            projection.scale(1).translate([0, 0]).rotate(r);

            const b = pathGenerator.bounds(this.state);
            // eslint-disable-next-line
            const s = 0.98 / Math.max((b[1][0] - b[0][0]) / this.width, (b[1][1] - b[0][1]) / this.height);
            // eslint-disable-next-line
            const t = [(this.width - s * (b[1][0] + b[0][0])) / 2, (this.height - s * (b[1][1] + b[0][1])) / 2];
            projection.scale(s).translate(t);

            return pathGenerator;
        },
    },
    methods: {
        computePath(feature) {
            if (!this.pathGenerator) {
                return null;
            }
            return this.pathGenerator(feature);
        },
    },
};
</script>

<style lang="scss">
@import '../sass/colors';

.Choropleth {
    .State, .Counties {
        //fill: $color-red;
        fill: none;
        stroke: $color-red;
        stroke-width: 2px;
    }
}
</style>
