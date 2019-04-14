<template>
  <div class="container">
    <div class="lists">
      <div v-for="item in list" :key="item.time">
        <div class="time">{{item.timeB}}</div>
        <div class="inline">
          <span class="head">{{name}}</span>
          <span :class="{win: item[name] == 3}">{{item[name]}}</span>
        </div>
        <span class="dash">-</span>
        <div class="inline" v-for="(value,key) in item" :key="key+value">
          <template v-if="key != name && key != 'time' && key != 'timeB'">
            <span class="head">{{key}}</span>
            <span :class="{win: value == 3}">{{value}}</span>
          </template>
        </div>
      </div>
    </div>
    <div class="count">
      <span>胜 {{count.win}}</span>
      <span class="dash">:</span>
      <span>负 {{count.lose}}</span>
      <div>
        <span>净胜局</span>
        <span class="dash">:</span>
        {{count.score}}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "List",
  props: {
    data: Array,
    name: String
  },
  computed: {
    list: function() {
      const res = [];
      this._props.data.forEach(obj => {
        for (let key in obj) {
          if (key == this.name) {
            obj.timeB = moment(obj.time).format("YYYY-MM-DD H点");
            res.push(obj);
          }
        }
      });
      return res;
    },
    count: function() {
      let win = 0;
      let lose = 0;
      let score = 0;
      this.list.forEach(obj => {
        for (let key in obj) {
          if (key == this.name) {
            if (obj[key] == 3) {
              win++;
            } else {
              lose++;
            }
            score += obj[key];
          } else if (key != "time" && key != "timeB") {
            score -= obj[key];
          }
        }
      });
      return { win, lose, score };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline {
  display: inline-block;
}
.head {
  display: inline-block;
  width: 80px;
  text-align: start;
}
.win {
  font-weight: bolder;
  color: #ffd862;
}

.container {
  background-color: #797575;
  color: #fff;
  padding: 20px 0;
}
.lists {
  height: 294px;
}
.dash {
  display: inline-block;
  width: 20px;
  font-weight: bolder;
}
.count {
  margin-top: 20px;
}
.time {
  position: absolute;
  left: 34%;
}
</style>
