<template>
  <div id="app">
    <h1>KPL2019秋季赛</h1>
    <div class="page-content">
      <Select :list="topE" :data="data" title="东部" />
      <Select :list="topW" :data="data" title="西部" />
    </div>
  </div>
</template>

<script>
import Select from './components/Select.vue'
import { data2019A } from './data'

const listE = ['eStarPro', 'QGhappy', 'XQ', 'EDG.M', 'TES', 'RNG.M', 'VG']
const listW = [
  'RW侠',
  'GK',
  'Hero久竞',
  'WE',
  'AG超玩会',
  'YTG',
  'TS',
  'DYG.JC',
]

let topE = []
let topW = []

function cal(arr, tar) {
  arr.forEach(key => {
    let win = 0
    let count = 0
    data2019A.forEach(obj => {
      if (obj[key] == 3) {
        win++
      }
      if (obj[key] != null) {
        count += obj[key]
        Object.keys(obj).forEach(k => {
          if (k != 'time' && k != key) {
            count -= obj[k]
          }
        })
      }
    })
    tar.push({
      name: key,
      win,
      title: key,
      count,
    })
  })

  tar.sort((a, b) => {
    if (b.win == a.win) {
      return b.count - a.count
    } else {
      return b.win - a.win
    }
  })
}

cal(listE, topE)
cal(listW, topW)

export default {
  name: 'app',
  components: {
    Select,
  },
  data() {
    return { topE, topW, data: data2019A }
  },
}
</script>

<style>
#app {
  font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.page-content {
  display: flex;
  justify-content: space-around;
}
</style>
