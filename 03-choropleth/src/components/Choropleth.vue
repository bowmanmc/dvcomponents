<template>
<svg class="Choropleth" :viewBox="viewBox">
    <g class="Counties">
        <path v-for="feature in countyFeatures"
              :fill="getFillColor(feature.properties['FIPS_CODE'])"
              :id="`county-${feature.properties['FIPS_CODE']}`"
              :d="computePath(feature)"
              :key="`county-${feature.properties['FIPS_CODE']}`"/>
    </g>
    <g class="State">
        <path class="State" :d="computePath(this.state)" />
    </g>
</svg>
</template>

<script>
import { extent } from 'd3-array';
import { geoCentroid, geoConicConformal, geoPath } from 'd3-geo';
import { scaleLinear } from 'd3-scale';
import { interpolateYlOrRd } from 'd3-scale-chromatic';

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
        'data',
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
        ohioData() {
            // Filter this.data for Ohio data and key by county fips code
            const OHIO = '39';
            if (!this.data) {
                return {};
            }
            const results = {};
            this.data.forEach((county) => {
                if (county.State === OHIO) {
                    results[county.County] = county;
                }
            });
            // Stick the data extent(min/max rate) on there
            results.rateExtent = extent(Object.keys(results), d => Number(results[d].Rate));
            return results;
        },
        rateScale() {
            if (!this.data) {
                return null;
            }
            const { rateExtent } = this.ohioData;
            return scaleLinear().domain(rateExtent).range([0, 1]);
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
        getFillColor(fips) {
            if (!this.ohioData) {
                return 'none';
            }

            const countyData = this.ohioData[fips];
            const color = interpolateYlOrRd(this.rateScale(countyData.Rate));
            return color;
        },
    },
};
</script>

<style lang="scss">
@import '../sass/colors';

.Choropleth {
    .State {
        fill: none;
        stroke: $color-red;
        stroke-width: 2px;
    }
    .Counties {
        fill: none;
        stroke: $color-red;
        stroke-width: 1px;
    }
}
</style>
