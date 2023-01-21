<template>
  <ul id="root-folder">
    <FileExplorer full-path="/" :sub-files="this.allFiles" is-directory/>
  </ul>
</template>

<script>
import FileExplorer from "@/components/project/FileExplorer.vue";

export default {
  name: 'ProjectExplorer',
  components: {
    FileExplorer
  },
  data() {
    return {
      allFiles: [],
    }
  },
  mounted() {
    this.allFiles = [
      {fullPath: '/titi', isDirectory: true},
      {fullPath: '/titi/titi', isDirectory: false},
      {fullPath: '/titi/toto', isDirectory: true},
      {fullPath: '/titi/toto/titi', isDirectory: true},
      {fullPath: '/toto', isDirectory: false}
    ]
  }
}
</script>

<style scoped>
#root-folder {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
