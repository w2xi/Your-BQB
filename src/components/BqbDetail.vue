<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import imageData from '../../public/data.json'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const index = route.query.index
    const children = imageData[index].children
    const cateTitle = imageData[index].name
    const title = ref(cateTitle)

    const ret = []

    children.forEach((item,index) => {
      const idx = Math.floor(index / 3)

      if (!ret[idx]){
        ret[idx] = []
      }

      ret[idx].push(item)
    })

    const imaegs = ref(ret)

    return {
      imaegs,
      title,
      router,
    }
  },
}
</script>

<template>
  <header class="header">
    <div class="go-back" @click="router.go(-1)">{{ title }}</div>
  </header>
  <div class="bqb-wrapper">
    <div class="bqb-row" v-for="(item,index) of imaegs" :key="index">
      <div
        class="bqb-box"
        v-for="(img,idx) of item"
        :key="idx"
      >
        <img
          class="bqb-img" 
          :src="img" 
          :alt="img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 45px;
  background: #a7f0ef;
  z-index: 1;
}

.go-back:before {
  content: "";
  display: inline-block;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  height: .5rem;
  width: .5rem;
  border-width: 0 0 2px 2px;
  border-color: #333;
  border-style: solid;
  margin: 0 5px 0 15px;
  font-weight: normal;
}

.bqb-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin-top: 55px;
}

.bqb-row {
  display: flex;
  width: 100%;
}

.bqb-row:last-child {
  margin-bottom: 55px;
}

.bqb-box {
  position: relative;
  width: 33%;
  padding-bottom: 33%;
}

.bqb-box + .bqb-box {
  margin-left: 5px;
}

.bqb-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
}
</style>