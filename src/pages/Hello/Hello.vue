
<template>
	<div class="index">
		<div class="index-container">
			<div class="index-block" >
				<img class="building" src="../../img/building.png" alt="">
				<h1 class="typing-text">基于大学生的书籍共享平台 (*^__^*) </h1>
			</div>
			<div class="intro1">

			</div>
			<div class="intro2">
				111
			</div>
			<div class="intro3" @click="toTop()" v-show="iftopShow">
				<img src="../../img/top.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

import './Hello.css'



// 全局组件
// Vue.component('todo-item', {
// 	props:['todo'],
// 	template: '<div><li>{{todo.text}}</li></div>'
// })

export default {
	name: 'hello',
	data () {
		return {
			iftopShow:false
		}
	},
	components:{

	},
	methods: {
		toTop(){
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
			this.iftopShow = false;
		},

	},
	computed:{
	},
	watch:{

	},
	mounted:function () {
		const t = this;
		setInterval(function changetop(){
			if(document.body.scrollTop>0){
				t.iftopShow = true;
			}
			if(document.body.scrollTop==0){
				t.iftopShow = false;
			}
		} ,900);
	},
}
</script>

<style scoped>

</style>
