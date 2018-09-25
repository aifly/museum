<template>
	<div :style="{background:'url('+imgs.indexBg+') no-repeat center bottom',backgroundSize:'cover'}" class="lt-full zmiti-index-main-ui "  :class="{'show':show}">
		<h4></h4>
		<div class='wm-index-index'>
			<img :src="imgs.index" alt="">
		</div>
		<div class='wm-index-title'>
			<img :src="imgs.title" alt="">
		</div>
		<div class='wm-index-task-btn'>
			<img :src="imgs.getTaskBtn" alt="">
		</div>
		

	</div>
</template>

<script>
	import './index.css';
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

			closeInfo(){
				this.mynumber = '';
				this.mynumberinfo = '';
			},

			imgStart(e){
				e.preventDefault(); 
			},
			close(){
				this.showQD = false;
			},
			menuClick(index){
				var {obserable } =this;
				
				switch (index) {
					case 0:
					case 1://签到
					case 2:
					case 6:
					case 4:
					case 7:
					if(!window.openid){
						return;
					}
					window.location.href = this.menus[index].href+'?openid='+window.openid;
					break;
					case 3:
						this.mynumberinfo = '我的房间号是：'	
						this.mynumber = this.userinfo.roomnumber||'未分配';
					break;
					/* case 4:
						this.mynumberinfo = '我的座位号是：'	
						this.mynumber = this.userinfo.seatnumber||'未分配';
						
						
					break; */
					case 5:
						obserable.trigger({
							type:'showSearch',
							data:false
						})
					break;
					
					break;
					case 8:
						obserable.trigger({
							type:'showSearch',
							data:true
						})
					break;
				}
			}
	 
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