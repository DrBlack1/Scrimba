// http://dropbox.github.io/dropbox-sdk-js/Dropbox.html

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
        path: '',
        limit: 20
    })
        updateFiles(res.entries)
}

const updateFiles = files => {
    state.files = [...state.files, ...files]
    renderFiles()
    getThumbnails(files)
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

const getThumbnails = async files => {
    const paths = files.filter(file => file['.tag'] === 'file')
    .map(file => ({
        path: file.path_lower,
        size: 'w3h32'
    }))
    const res = await dbx.filesGetThumbnailBatch({
        entries: paths
    })
    const newStateFiles = [...state.files]
    res.entries.forEach(file => {
        let indexToUpdate = state.files.findIndex(
            stateFile => file.metadata.path_lower === stateFile.path_lower
        )
        newStateFiles[indexToUpdate].thumbnail = file.thumbnail
    })
    state.files = newStateFiles
    renderFiles()
    }

init()