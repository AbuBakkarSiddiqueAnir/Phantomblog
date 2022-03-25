<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span> Toggle Editting Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <blog-card :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";

export default {
  components: { BlogCard },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        console.log();
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
        console.log(payload);
      },
    },
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }
    input[type="checkbox"] {
      position: relative;
      -webkit-appearance: none;
      border: none;
      background: #fff;
      outline: none;
      width: 65px;
      height: 20px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 16px;
      top: 0;
      left: 2px;
      background: #303030;
      transform: scale(1.3);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type="checkbox"]:before {
      background: rgb(46, 136, 53);
      left: 42px;
    }
  }
}
</style>
