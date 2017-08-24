<template>
  <div id="app">
    <Header1 />
    <!-- <div>{{this.text}}</div> -->
    <transition mode='out-in' :name="transitionName">
    <router-view class='child-view'></router-view>
    </transition>
    <Footer1 />
  </div>
</template>

<script>
import Header1 from '../components/Header/Header'
import Footer1 from '../components/Footer/Footer'
import '../app/app.css'

export default {
  name: 'app',
  components: {
    Header1,
    Footer1
  },
  data(){
    return {
      text:'',
      transitionName:'slide-left',
    }
  },
  methods:{
    changeComputed(){

    }
  },
  watch:{
    '$route'(to,from){
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  computed:{
    appComputed(){

    }
  },
}
</script>

<style>

</style>
