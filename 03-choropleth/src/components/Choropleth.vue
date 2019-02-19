<template>
<svg class="Choropleth" :viewBox="viewBox">
    <path class="State" :d="statePath" />
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
        statePath() {
            console.log('Calculating state path...');
            if (!this.state) {
                console.log('    state is null...');
                return;
            }
            const projection = geoConicConformal();
            const pathGenerator = geoPath().projection(projection);
            const centroid = geoCentroid(this.state.features[0]);
            const r = [centroid[0] * -1, centroid[1] * -1];
            projection.scale(1).translate([0, 0]).rotate(r);

            const b = pathGenerator.bounds(this.state),
                  s = 0.98 / Math.max((b[1][0] - b[0][0]) / this.width, (b[1][1] - b[0][1]) / this.height),
                  t = [(this.width - s * (b[1][0] + b[0][0])) / 2, (this.height - s * (b[1][1] + b[0][1])) / 2];
            projection.scale(s).translate(t);

            return pathGenerator(this.state);
        }
    }
};
</script>

<style lang="scss">
@import '../sass/colors';

.Choropleth {
    .State {
        fill: $color-red;
    }
}
</style>
