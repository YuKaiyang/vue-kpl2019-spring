<template>
  <div class="container">
    <select v-model="name">
      <option v-for="item in list" :key="item.name">{{item.name}}</option>
    </select>
    <div class="rank">
      <span>目前排名第</span>
      <span class="bold">{{rank}}</span>
    </div>
    <List :name="name" :data="data"/>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  name: "Select",
  components: {
    List
  },
  props: {
    list: Array,
    data: Array
  },
  data: function() {
    return {
      name: this._props.list[0].name
    };
  },
  computed: {
    rank: function() {
      let index = 0;
      this._props.list.forEach((v, i) => {
        if (v.name == this.name) {
          index = i + 1;
        }
      });
      return index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  width: 150px;
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
}

.bold {
  font-weight: bolder;
}

.rank {
  margin-bottom: 20px;
}
</style>
