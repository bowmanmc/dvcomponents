
const STATE_URL = '/data/state.oh.json';
const COUNTY_URL = '/data/county.oh.json';

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
};
