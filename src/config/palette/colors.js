import css from '../palette/conf.css'

let root = document.documentElement

let palette = 4;
export let palletName = 'Dark blue'

export const setColorID = (id) => {
        palette = +id;

    switch (palette) {
        case 1:
            root.style.setProperty('--bg-color-1', '#eff6f6');
            root.style.setProperty('--bg-color-2', '#00b1d8');
            root.style.setProperty('--bg-color-3', '#062750');
            root.style.setProperty('--bg-color-4', '#030b26');

            root.style.setProperty('--text-dark', '#030b26');
            root.style.setProperty('--text-middle', '#00b1d8');
            root.style.setProperty('--text-light', '#eff6f6');

            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.93)');
            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.53)');

            palletName = 'Dark blue'
            break;
        case 2:
            root.style.setProperty('--bg-color-1', '#eff6f6');
            root.style.setProperty('--bg-color-2', '#000000');
            root.style.setProperty('--bg-color-3', '#333333');
            root.style.setProperty('--bg-color-4', '#3c3c3c');

            root.style.setProperty('--text-dark', '#f4f4f4');
            root.style.setProperty('--text-middle', '#ffffff');
            root.style.setProperty('--text-light', '#f4f4f4');

            root.style.setProperty('--bg-color-4', 'rgba(255, 255, 255, 0.33)');
            root.style.setProperty('--bg-color-4', 'rgba(255, 255, 255, 0.23)');

            palletName = 'Dark grey'
            break;
        case 3:
            root.style.setProperty('--bg-color-1', '#f8f9fa');
            root.style.setProperty('--bg-color-2', '#ebedef');
            root.style.setProperty('--bg-color-3', '#adb5bd');
            root.style.setProperty('--bg-color-4', '#212529');

            root.style.setProperty('--text-dark', '#060809');
            root.style.setProperty('--text-middle', '#ffffff');
            root.style.setProperty('--text-light', '#ebedef');

            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.93)');
            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.53)');

            palletName = 'Light grey'
            break;
        case 4:
            root.style.setProperty('--bg-color-1', '#D0E1F9');
            root.style.setProperty('--bg-color-2', '#4D648D');
            root.style.setProperty('--bg-color-3', '#283655');
            root.style.setProperty('--bg-color-4', '#1E1F26');

            root.style.setProperty('--text-dark', '#1E1F26');
            root.style.setProperty('--text-middle', '#D0E1F9');
            root.style.setProperty('--text-light', '#eff6f6');

            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.93)');
            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.53)');

            palletName = 'Blueberry'
            break;
        case 5:
            root.style.setProperty('--bg-color-1', '#ffb3c1');
            root.style.setProperty('--bg-color-2', '#be576a');
            root.style.setProperty('--bg-color-3', '#7c2840');
            root.style.setProperty('--bg-color-4', '#590d22');

            root.style.setProperty('--text-dark', '#800f2f');
            root.style.setProperty('--text-middle', '#ff758f');
            root.style.setProperty('--text-light', '#fff0f3');

            root.style.setProperty('--bg-color-4', 'rgba(0,0,0,0.93)');
            root.style.setProperty('--bg-color-4', 'rgba(0,0,0,0.53)');

            palletName = 'Strawberry'
            break;
        default:
            root.style.setProperty('--bg-color-1', '#eff6f6');
            root.style.setProperty('--bg-color-2', '#00b1d8');
            root.style.setProperty('--bg-color-3', '#062750');
            root.style.setProperty('--bg-color-4', '#030b26');

            root.style.setProperty('--text-dark', '#030b26');
            root.style.setProperty('--text-middle', '#00b1d8');
            root.style.setProperty('--text-light', '#eff6f6');

            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.93)');
            root.style.setProperty('--bg-color-4', 'rgba(0, 0, 0, 0.53)');

            palletName = 'Dark blue'
            break;
    }
}
