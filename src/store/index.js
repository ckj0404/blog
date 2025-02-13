import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    fetchPosts({ commit }) {
      // 模拟获取博客文章数据
      const posts = [
        { id: 1, title: '我的第一篇博客', content: '欢迎来到我的博客！' },
        { id: 2, title: '第二篇文章', content: '这是一篇示例文章。' }
      ];
      commit('setPosts', posts);
    }
  }
});
