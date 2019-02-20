import { tsvParse } from 'd3-dsv';


const STATE_URL = '/data/state.oh.json';
const COUNTY_URL = '/data/county.oh.json';
const UNEMPLOYMENT_URL = '/data/2017-unemployment.tsv';


const fetchJson = (url) => {
    const p = new Promise((resolve) => {
        fetch(url).then((response) => {
            const j = response.json();
            return j;
        }).then((result) => {
            resolve(result);
        });
    });
    return p;
};

export default {

    getCounty() {
        return fetchJson(COUNTY_URL);
    },

    getState() {
        return fetchJson(STATE_URL);
    },

    getUnemploymentData() {
        const p = new Promise((resolve) => {
            fetch(UNEMPLOYMENT_URL).then((response) => {
                const txt = response.text();
                return txt;
            }).then((txt) => {
                const result = tsvParse(txt);
                resolve(result);
            });
        });
        return p;
    },
};
