<template>
  <ul>
    <li @mouseover="this.tooltip = openedFile"
        @mouseout="this.tooltip = undefined"
        v-for="openedFile in openedFilePaths"
        v-text="openedFile.split('/').slice(-1)[0]"
        :key="openedFile.fullPath"/>
  </ul>
  <div id="fullpath-tooltip" v-if="this.tooltip !== undefined" v-text="this.tooltip"/>
  <textarea v-model="this.content"/>
</template>

<script>
import {useOpenedFileStore} from "@/openedFileState";
import {mapStores} from "pinia";

export default {
  data(){
    return {
      openedFilePaths: new Set(),
      tooltip: undefined,
      content: ''
    }
  },
  computed: {
    ...mapStores(useOpenedFileStore),
  },
  mounted() {
    this.openedFileStore.$subscribe((mutation) => {
      const openedFilePath = mutation.payload.openedFile.fullPath
      this.content = openedFilePath + " file content"
      this.openedFilePaths.add(openedFilePath)
    })
  }
}
</script>

<style scoped>
#fullpath-tooltip {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
</style>
