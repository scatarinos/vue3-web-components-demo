import { defineStore } from "pinia";

export const useElementStore = defineStore({
  id: "element-state",
  state: () => ({
    showMore: false,
  }),
  actions: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
});
