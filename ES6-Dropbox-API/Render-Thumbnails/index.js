import { Dropbox } from 'dropbox'

const dbx = new Dropbox({
    accessToken 'aeOL1E1H0AAAAAAAAAALX6z1ogWy75HGE_HBN-NNpJNfhnEa1kjF1vsJ_t7Wf8k',
    fetch
})

const fileListElem = document.querySelector('.js-file-list')

const state = {
    files: []
}

const init = () => {
    dbx.fileListFolder({
        path: ''
    }).then(res => {
        updateFiles(res.entries)
    })
}

const updateFiles = files => {
    state.files = [...state.files, ...files]
    renderFiles()
}

const renderFiles = () => {
    fileListElem.innerHTML = state.files.sort((a, b) => {
        // sort alphabetically, folders first
        if ((a['.tag'] === 'folder' || b['tag'] === 'folder')
        && !(a['tag'] === b['.tag'])) {
            return a['.tag'] === 'folder' ? -1 : 1
        } else {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        }
    }).map(file => {
        const type = file['.tag']
        let thumbnail
        if (type === 'file') {
            thumbnail = file.thumbnail
            ? `data:image/jpeg;base64, ${file.thumbnail}`
            : `data:image/svg+xml;base64,ashahssdhhjksjhshgdgakdbbsb+sbsnbsbsdhhdcnxnxnxbsnx`
        } else {
            thumbnail = `data:image/svg+xml;base64,jshshshdshjshhdjsjdjd+hshshsbsbsbsbbsbsnns`
        }
        return `
        <li class="dbx-list-item ${type}">
            <img class="dbx-thumb" src="${thumbnail}">
            ${file.name}
        </li>
        `
    }).join('')
}

init()