<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/rating">评价</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header'

//  const ERR_OK = 0
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created () {
//      this.$http.get('/api/seller').then((responce) => {
//        responce = responce.body
//        if (responce.errno === ERR_OK) {
//          this.seller = responce.data
//        }
//      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
</style>
