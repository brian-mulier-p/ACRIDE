import { defineStore } from 'pinia'

export const useOpenedFileStore = defineStore('openedFile', {
    state: () => {
        return { openedFile: {} }
    }
})