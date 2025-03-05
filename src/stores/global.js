import { defineStore } from 'pinia';

export const useGlobal = defineStore('global', {
  state: () => ({
    currentPath: '/',
  }),
  actions: {
    setCurrentPath(path) {
      this.currentPath = path;
    },
  },
});
