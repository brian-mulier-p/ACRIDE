<template>
  <main>
    <div id="project-explorer">
      <ProjectExplorer/>
    </div>
    <div id="text-editor">
      <Editor/>
    </div>
  </main>
</template>

<script>
import ProjectExplorer from './components/project/ProjectExplorer.vue'
import Editor from './components/editor/EditorWindow.vue'

export default {
  name: 'App',
  components: {
    ProjectExplorer,
    Editor
  },
  data() {
    return {
      textContent: ''
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

main {
  background-color: dimgrey;
  width: 100vw;
  height: 100vh;
  display: flex;
}

#project-explorer {
  flex-grow: 1;
  height: auto;
  display: inline-block;
  padding: 2px;
  background: lightgrey;
  border-right: 3px solid black;
}

#text-editor {
  flex-grow: 4;
  height: 100%;
  display: inline-block;
}
</style>
