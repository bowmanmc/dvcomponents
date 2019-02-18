
export const calculatePoint = (Config, val, i) => {
    const radius = Config.width / 2;
    const numMonths = 12;
    const ptX = radius * (
        1 - (Math.max(val, 0) / Config.maxValue)
        * 1 * Math.sin(i * Config.radians / numMonths)
    );
    const ptY = radius * (
        1 - (Math.max(val, 0) / Config.maxValue)
        * 1 * Math.cos(i * Config.radians / numMonths)
    );
    return [ptX, ptY];
};
