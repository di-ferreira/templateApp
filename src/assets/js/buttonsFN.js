const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

const maxResBtn = document.getElementById('maxResBtn');

const changeMaxResBtn = (isMaximizedApp) => {
    if (isMaximizedApp) {
        console.log(maxResBtn.title);
        maxResBtn.title = 'Restaurar';
        console.log(maxResBtn)
        maxResBtn.classList.replace('maxBtn', 'resBtn');
    } else {
        maxResBtn.title = 'Maximizar';
        maxResBtn.classList.replace('resBtn', 'maxBtn');
    }
}

maxResBtn.addEventListener('click', () => {
    ipc.send('maxRestore');
});

ipc.on('isMaximized', () => {
    changeMaxResBtn(true);
});

ipc.on('isRestored', () => {
    changeMaxResBtn(false);
});

closeBtn.addEventListener('click', () => {
    ipc.send('closeApp');
});

minimizeBtn.addEventListener('click', () => {
    ipc.send('minimize');
});
