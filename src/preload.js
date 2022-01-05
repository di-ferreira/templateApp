const config = require("./config");
const pathUrl = config.url;

window.addEventListener('DOMContentLoaded', () => {
    console.log(pathUrl)
    containerWeb.src = pathUrl;

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})