<template>
	<div class="footerWrapper">
		<div class="nav-bottom">
			<div class="nav-bottom-container">
        <div class="info">
          Sharer 1.0.0
        </div>
        <div class="footer-social">
					  <a href="#"><img src="../../img/vu-wechat.png" alt="" v-on:mouseover="wechatdispaly()" v-on:mouseleave="wechatnone()"></a>
      			<a href="https://github.com/RexYe"><img src="../../img/social-github.png" alt=""></a>
						<div class="wechat-div">
							<img src="../../img/wechat.jpg" alt="" v-show="wechatseen">
						</div>
        </div>
			</div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import './Footer.css'
export default {
	name: 'footer',
	data () {
		return {
			wechatseen:false,
		}
	},
	methods: {
		wechatdispaly(){
			this.wechatseen = true
		},
		wechatnone(){
			this.wechatseen = false
		}
	},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
