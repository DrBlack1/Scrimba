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
        return `
        <li class="dbx-list-item ${type}">${file.name}<li>
        `
    }).join('')
}

init()