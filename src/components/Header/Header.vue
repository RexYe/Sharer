
<template>
	<div class="headerWrapper">
		<div class="nav-top">
			<div class="nav-top-container">
				<div class="logo">
					<img src="../../img/logo.png" >
				</div>
				<div class="search-div">
	        <input type="text" name="" value="" placeholder="搜索">
					<a href="#"><img src="../../img/search.png" alt=""></a>
	      </div>
				<div class="left-menu">
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/shop">商城</router-link></li>
					<li><router-link to="/aboutme">关于我们</router-link></li>
				</div>
				<div class="clear">
				</div>
			</div>
		</div>
	</div>

</template>
<script>
import Vue from 'vue'
import './Header.css'
export default {
	name: 'header',
	data () {
		return {

		}
	},
	login(){

	},
	methods: {

	}
}
</script>

<style scoped>

</style>
