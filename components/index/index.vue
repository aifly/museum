<template>
	<div :style="{background:'url('+imgs.indexBg+') no-repeat center bottom',backgroundSize:'cover'}" class="lt-full zmiti-index-main-ui "  :class="{'show':show}">
		<h4></h4>
		<div class='wm-index-index'>
			<img :src="imgs.index" alt="">
		</div>
		<div class='wm-index-title'>
			<img :src="imgs.title" alt="">
		</div>
		<div class='wm-index-task-btn' v-tap='[initGame]'>
			<img :src="imgs.getTaskBtn" alt="">
		</div>
		

	</div>
</template>

<script>
	import './index.css';
	import Vue from 'vue';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				showMasks:false,
				viewW:window.innerWidth,
				mynumber:"",
				mynumberinfo:"",
				userinfo:{},
				showQD:false,//显示签到提示
				menus:window.menus,
				
			}
		},
		components:{
		},
		
		methods:{

			 initGame(){
			 	this.obserable.trigger({
			 		type:'initGame'
			 	})
			 },

			imgStart(e){
				e.preventDefault(); 
			},
			 
	 
		},
		mounted(){


			var {obserable} = this;

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			});

			var s = this;

			 
		}
	}
</script>