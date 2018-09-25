<template>
	<div class='zmiti-game-main-ui lt-full' :style="{background:'url('+imgs.gameBg+') no-repeat center center',backgroundSize:'cover'}" :class="{'show':show}">
		<div class='wm-game-main-content'>
			<div class='wm-game-reel'>
				<img :src="imgs.reel1" alt="">
			</div>
			<div class='wm-game-area'>
				<div class='wm-game-wrap' :style="{height:viewH-100+'px'}">
					
					<div class='wm-game-Q'>
						<section>
							<div class='wm-game-Q-title'>
								<div ref='text'>
									<div>
										<h1>后母戊鼎</h1>
										原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作
										原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作
									</div>
								</div>
							</div>
							<div class='wm-game-Q-pic'>
								<img :src="imgs.goods1" alt="">
							</div>
						</section>
					</div>
					<div class='wm-game-Q-content'>
						222
					</div>
				</div>
			</div>
			<div class='wm-game-reel wm-game-reel1'>
				<img :src="imgs.reel1" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import './index.css';
	import {imgs,mainImgList} from '../lib/assets.js';
	import $ from 'jquery';
	import IScroll from '../../assets/js/iscroll';
	export default {
		props:['obserable','pv','randomPv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				
			}
		},
		components:{
		},
		
		methods:{

			touchstart(e){
				this.isCanMove = true;
				this.startX = e.changedTouches[0].pageX - this.transX;
				this.startY = e.changedTouches[0].pageY -this.transY;

				//return false;
			},
			
			
		},
		mounted(){

			this.scroll = new IScroll(this.$refs['text'],{
				scrollbars:true,
				//mouseWheel:true
			});

			setTimeout(() => {
				this.scroll.refresh();
			}, 1000);

			 
		}
	}
</script>