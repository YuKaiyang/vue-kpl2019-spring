<template>
  <div class="container">
    <select v-model="name">
      <option v-for="item in list" :key="item.name">{{item.name}}</option>
    </select>
    <div class="rank">
      <span>目前排名</span>
      <span class="bold font-red">{{rank}}</span>
    </div>
    <List :name="name" :data="data" />
  </div>
</template>

<script>
import List from './List.vue'

export default {
  name: 'Select',
  components: {
    List,
  },
  props: {
    list: Array,
    data: Array,
    title: String,
  },
  data() {
    return {
      name: this.list[0].name,
    }
  },
  computed: {
    rank() {
      let index = 0
      this.list.forEach((v, i) => {
        if (v.name == this.name) {
          index = `${this.title}第${i + 1}`
        }
      })
      return index
    },
  },
}
</script>

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

.font-red {
  color: red;
}
</style>
