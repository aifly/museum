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
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<label></label>
							<label></label>
							<label></label>
							<label></label>
							<div class='wm-game-Q-title'>
								<div ref='text'>
									<div>
										<h1>后母戊鼎</h1>
										<div>
											原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作
										原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作
										</div>
										<h3 style="height:50px;"></h3>
									</div>
								</div>
							</div>
							<div class='wm-game-Q-pic'>
								<img :src="imgs.goods1" alt="">
							</div>
						</section>
					</div>
					<div class='wm-game-Q-content'>
						<div class='wm-game-Q-C'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<label></label>
							<label></label>
							<label></label>
							<label></label>
							<div class='wm-game-result-C' ref='result'>
								<ul>
									<li v-for='(item,i) in questionLen' :key="i">
										<img :src="imgs.resultBg" alt="">
									</li>
									<li style="height:10px;"></li>
								</ul>
							</div>
							<div class='wm-game-main-place' ref='game'>
								<ul>
									<li>
										<div ref='museums' v-if='i%2===0' v-for='(m,i) in museums' :key='i'>
											<span :style='{width:(m.width||0)+"px",height:(m.height||0)+"px"}'>{{m.name}}</span>
											<img :src="m.image" alt="" @load='imgLoaded($event,m,i)'>
										</div>
									</li>
									<li>
										<div ref='museums' v-if='i%2!==0' v-for='(m,i) in museums' :key='i'>
											<span :style='{width:(m.width||0)+"px",height:(m.height||0)+"px"}'>{{m.name}}</span>
											<img :src="m.image" alt="" @load='imgLoaded($event,m,i)'>
										</div>
									</li>
								</ul>
							</div>
							<div class='wm-game-time'>
								<div>
									<div>{{current+" / "+ questionLen.length}}</div>
								</div>
								<div ref='send'>
									<div :style="{height:100+'px',width:width+'px'}">
										<span>后母戊鼎</span> 派送中... <img :src="imgs.send" alt="">
									</div>
								</div>
								<div>
									<div>
										{{time}} s
									</div>
								</div>
							</div>
						</div>
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
				time:60,
				questionLen:new Array(10),
				current:1,
				width:0,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				museums:window.museums,
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
			imgLoaded($event,m,index){
				console.log($event.path[0].clientHeight);
				m.width = this.$refs['museums'][index].offsetHeight;
				m.height = 40;
				this.museums = this.museums.concat([]);
			}
			
			
		},
		mounted(){

			this.scroll = new IScroll(this.$refs['text'],{
				scrollbars:true,
				//mouseWheel:true
			});

			this.resultScroll = new IScroll(this.$refs['result'],{
				zmitiV:true
			});
			this.gameScroll = new IScroll(this.$refs['game'],{
				zmitiV:true
			})

			setTimeout(() => {
				this.scroll.refresh();
				this.resultScroll.refresh();
				this.gameScroll.refresh();
			}, 1000);

			this.width = this.$refs['send'].offsetHeight;
			 
		}
	}
</script>