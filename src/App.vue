<template>
  <div id="app">
    <h1>KPL2019春季赛</h1>
    <Select :listE="topE" :listW="topW" :data="data"/>
  </div>
</template>

<script>
import Select from './components/Select.vue'

const listE = [
  'eStarPro',
  'RNG.M',
  'EDG.M',
  'VG',
  'QGhappy',
  'BA黑凤梨',
  'TOPM',
]
const listW = ['RW侠', 'GK', 'Hero久竞', 'WE', 'XQ', 'YTG', 'TS', 'JC']

const data = [
  { time: '20190306T180000', Hero久竞: 3, QGhappy: 1 },
  { time: '20190306T200000', BA黑凤梨: 3, 'EDG.M': 1 },
  { time: '20190307T180000', eStarPro: 3, TOPM: 0 },
  { time: '20190307T200000', JC: 1, 'RNG.M': 3 },
  { time: '20190308T180000', RW侠: 3, TS: 0 },
  { time: '20190308T200000', 'EDG.M': 3, YTG: 1 },
  { time: '20190309T150000', BA黑凤梨: 2, WE: 3 },
  { time: '20190309T180000', 'RNG.M': 3, XQ: 2 },
  { time: '20190309T200000', GK: 3, Hero久竞: 1 },
  { time: '20190310T150000', 'EDG.M': 3, VG: 0 },
  { time: '20190310T180000', GK: 3, TOPM: 0 },
  { time: '20190310T200000', RW侠: 3, eStarPro: 0 },
  { time: '20190313T180000', TS: 1, WE: 3 },
  { time: '20190313T200000', BA黑凤梨: 1, 'RNG.M': 3 },
  { time: '20190314T180000', 'EDG.M': 3, TOPM: 2 },
  { time: '20190314T200000', XQ: 3, Hero久竞: 2 },
  { time: '20190315T180000', WE: 3, QGhappy: 0 },
  { time: '20190315T200000', eStarPro: 3, YTG: 2 },
  { time: '20190316T150000', GK: 2, XQ: 3 },
  { time: '20190316T180000', VG: 1, RW侠: 3 },
  { time: '20190316T200000', eStarPro: 3, JC: 0 },
  { time: '20190317T150000', QGhappy: 1, TOPM: 3 },
  { time: '20190317T180000', TS: 3, XQ: 0 },
  { time: '20190317T200000', Hero久竞: 3, 'RNG.M': 0 },
  { time: '20190320T180000', JC: 1, GK: 3 },
  { time: '20190320T200000', eStarPro: 3, VG: 1 },
  { time: '20190321T180000', BA黑凤梨: 2, YTG: 3 },
  { time: '20190321T200000', RW侠: 3, 'EDG.M': 0 },
  { time: '20190322T180000', TS: 0, Hero久竞: 3 },
  { time: '20190322T200000', 'RNG.M': 3, eStarPro: 1 },
  { time: '20190323T150000', RW侠: 3, XQ: 0 },
  { time: '20190323T180000', VG: 2, GK: 3 },
  { time: '20190323T200000', 'RNG.M': 2, QGhappy: 3 },
  { time: '20190324T150000', TOPM: 1, YTG: 3 },
  { time: '20190324T180000', BA黑凤梨: 1, GK: 3 },
  { time: '20190324T200000', JC: 2, Hero久竞: 3 },
  { time: '20190327T180000', XQ: 3, 'EDG.M': 1 },
  { time: '20190327T200000', eStarPro: 3, WE: 2 },
  { time: '20190328T180000', RW侠: 3, Hero久竞: 0 },
  { time: '20190328T200000', 'RNG.M': 1, TS: 3 },
  { time: '20190329T180000', 'EDG.M': 3, WE: 2 },
  { time: '20190329T200000', JC: 1, QGhappy: 3 },
  { time: '20190330T150000', GK: 3, TS: 1 },
  { time: '20190330T180000', TOPM: 1, WE: 3 },
  { time: '20190330T200000', BA黑凤梨: 0, RW侠: 3 },
  { time: '20190331T150000', Hero久竞: 3, VG: 1 },
  { time: '20190331T180000', JC: 0, XQ: 3 },
  { time: '20190331T200000', QGhappy: 2, eStarPro: 3 },
  { time: '20190403T180000', GK: 3, YTG: 2 },
  { time: '20190403T200000', 'RNG.M': 3, RW侠: 1 },
  { time: '20190404T180000', QGhappy: 1, VG: 3 },
  { time: '20190404T200000', WE: 1, Hero久竞: 3 },
  { time: '20190405T180000', XQ: 2, eStarPro: 3 },
  { time: '20190405T200000', 'RNG.M': 3, 'EDG.M': 0 },
  { time: '20190406T150000', VG: 3, TOPM: 1 },
  { time: '20190406T180000', YTG: 0, WE: 3 },
  { time: '20190406T200000', JC: 3, BA黑凤梨: 2 },
  { time: '20190407T150000', RW侠: 3, GK: 2 },
  { time: '20190407T180000', JC: 2, TS: 3 },
  { time: '20190407T200000', 'EDG.M': 2, QGhappy: 3 },
  { time: '20190410T180000', WE: 3, VG: 1 },
  { time: '20190410T200000', BA黑凤梨: 1, eStarPro: 3 },
  { time: '20190411T180000', YTG: 3, TS: 1 },
  { time: '20190411T200000', 'EDG.M': 2, Hero久竞: 3 },
  { time: '20190412T180000', JC: 2, VG: 3 },
  { time: '20190412T200000', QGhappy: 1, GK: 3 },
  { time: '20190413T150000', YTG: 0, 'RNG.M': 3 },
  { time: '20190413T180000', BA黑凤梨: 3, TOPM: 2 },
  { time: '20190413T200000', eStarPro: 3, Hero久竞: 1 },
  { time: '20190414T150000', 'EDG.M': 1, GK: 3 },
  { time: '20190414T180000', JC: 2, WE: 3 },
  { time: '20190414T200000', YTG: 3, XQ: 2 },
  { time: '20190417T180000', VG: 2, TS: 3 },
  { time: '20190417T200000', RW侠: 3, TOPM: 0 },
  { time: '20190418T180000', YTG: 3, Hero久竞: 1 },
  { time: '20190418T200000', BA黑凤梨: 2, QGhappy: 3 },
  { time: '20190419T180000', TS: 3, TOPM: 1 },
  { time: '20190419T200000', VG: 3, XQ: 0 },
  { time: '20190420T150000', GK: 3, eStarPro: 2 },
  { time: '20190420T180000', QGhappy: 3, RW侠: 2 },
  { time: '20190420T200000', 'EDG.M': 3, JC: 1 },
  { time: '20190421T150000', TOPM: 0, Hero久竞: 3 },
  { time: '20190421T180000', WE: 0, 'RNG.M': 3 },
  { time: '20190421T200000', XQ: 1, BA黑凤梨: 3 },
  { time: '20190424T180000', JC: 3, YTG: 2 },
  { time: '20190424T200000', eStarPro: 3, TS: 1 },
]

let topE = []
let topW = []
listE.forEach(key => {
  let win = 0
  let count = 0
  data.forEach(obj => {
    count += obj[key]
    if (obj[key] == 3) {
      win++
    }
  })
  topE.push({
    name: key,
    win,
    title: key + '-east',
    count,
  })
})
listW.forEach(key => {
  let win = 0
  data.forEach(obj => {
    if (obj[key] == 3) {
      win++
    }
  })
  topW.push({
    name: key,
    win,
    title: key + '-west',
  })
})

topE.sort((a, b) => {
  if (b.win == a.win) {
    return b.count - a.count
  } else {
    return b.win - a.win
  }
})
topW.sort((a, b) => {
  if (b.win == a.win) {
    return b.count - a.count
  } else {
    return b.win - a.win
  }
})

export default {
  name: 'app',
  components: {
    Select,
  },
  data: function() {
    return { topE, topW, data }
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
</style>
