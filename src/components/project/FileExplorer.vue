<template>
  <li v-if="this.fileName.length > 0">
    <button @click.prevent="selectFile" v-text="this.fileName"/>
  </li>
  <li v-if="this.isDirectory && this.subFiles.length > 0">
    <ul>
      <FileExplorer v-for="file in nextLevelFiles" :key="file.fullPath" :full-path="file.fullPath"
                    :is-directory="file.isDirectory"
                    :sub-files="this.subFiles.filter(subFile => subFile.fullPath !== file.fullPath && subFile.fullPath.startsWith(file.fullPath))"/>
    </ul>
  </li>
</template>

<script>
import {useOpenedFileStore} from "@/openedFileState";
import {mapStores} from "pinia";

export default {
  name: 'FileExplorer',
  props: {
    fullPath: String,
    isDirectory: Boolean,
    subFiles: Array
  },
  computed: {
    /**
     * @returns {string}
     */
    fileName() {
      return this.fullPath.split('/').slice(-1)[0];
    },
    nextLevelFiles() {
      return this.subFiles.filter(subFile => new RegExp("^" + this.fullPath + "/?[^/]+$").test(subFile.fullPath))
    },
    ...mapStores(useOpenedFileStore)
  },
  methods: {
    selectFile() {
      this.openedFileStore.$patch({
        openedFile: {
          fullPath: this.fullPath,
          isDirectory: this.isDirectory
        }
      })
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul ul ul {
  margin: 0;
  padding: 0 0 0 10px;
}
</style>
