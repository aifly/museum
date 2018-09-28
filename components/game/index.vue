<template>
	<div class='zmiti-game-main-ui lt-full' :style="{background:'url('+imgs.gameBg+') no-repeat center center',backgroundSize:'cover'}" :class="{'show':show}">
		<div class='wm-game-main-content'>
			<div class='wm-game-reel'>
				<img :src="imgs.reel1" alt="">
			</div>
			<div class='wm-game-area'>
				<div class='wm-game-wrap' :style="{height:viewH-100+'px'}">
					
					<div class='wm-game-Q'>
						<section  v-if='culturalRelicsList[current]'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<label></label>
							<label></label>
							<label></label>
							<label></label>
							<div class='wm-game-Q-title' ref='title'>
								<div ref='text' :style='{width:titleWidth+"px"}'>
									<transition-group name='fade' tag='div'>
										<div v-for='(cul,i) in culturalRelicsList' :key='i' v-if='i===current'>
											<h1>{{cul.title}}</h1>
											<div>
												<section v-for='(text,i) in cul.content.split("|")' :key="i">
													{{text}}
												</section>
											</div>
											<h3 style="height:50px;"></h3>
										</div>
									</transition-group>
								</div>
							</div>
							<div class='wm-game-Q-pic' :style="{height:titleWidth+'px'}">
								<img :src="culturalRelicsList[current].image" alt="">
							</div>
						</section>
					</div>
					<div class='wm-game-Q-content'>
						<div class='wm-game-Q-C' >
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<label></label>
							<label></label>
							<label></label>
							<label></label>
							<div v-if='!showResult' class='wm-game-result-C' ref='result' >
								<ul>
									<li v-for='(item,i) in questionLen' :key="i">
										<img :src="imgs.resultBg" alt="">
										<img  v-if='resultArr[i] === true' class='wm-game-cultural-pic' :src="culturalRelicsList[i].image" alt="">
										<img  v-if='resultArr[i] === false' class='wm-game-cultural-pic wrong' :src="imgs.wrong" alt="">
									</li>
									<li style="height:10px;"></li>
								</ul>
							</div>
							<div v-if='!showResult' class='wm-game-main-place' ref='game' :class='{"active":changing}'>
								<ul>
									<li>
										<div ref='museums' v-if='i%2===0' v-for='(m,i) in museums' :key='i' v-tap='[choose,m,i]'>
											<span :style='{width:(m.width||0)+"px",height:(m.height||0)+"px"}'>{{m.name}}</span>
											<img @touchstart='touchstart' :src="m.image" alt="" @load='imgLoaded($event,m,i)'>
											<img @touchstart='touchstart' class='wm-result-img' v-if='m.isRight' :src="imgs.right" alt="">
											<img @touchstart='touchstart' class='wm-result-img ' v-if='m.isRight===false' :src="imgs.wrong" alt="">
										</div>
									</li>
									<li>
										<div ref='museums' v-if='i%2!==0' v-for='(m,i) in museums' :key='i'  v-tap='[choose,m,i]'>
											<span :style='{width:(m.width||0)+"px",height:(m.height||0)+"px"}'>{{m.name}}</span>
											<img @touchstart='touchstart' :src="m.image" alt="" @load='imgLoaded($event,m,i)'>
											<img @touchstart='touchstart' class='wm-result-img' v-if='m.isRight' :src="imgs.right" alt="">
											<img @touchstart='touchstart' class='wm-result-img ' v-if='m.isRight===false' :src="imgs.wrong" alt="">
										</div>
									</li>
								</ul>
							</div>
							<div v-if='!showResult && culturalRelicsList[current]' class='wm-game-time' >
								<div>
									<div>{{(current+1<10?'0'+(current+1):current+1)+" / "+ questionLen.length}}</div>
								</div>
								<div ref='send'>
									<div :style="{height:100+'px',width:width+'px'}" class='zmiti-text-overflow'>
										<span>{{culturalRelicsList[current].title}}</span> 派送中... <img :src="imgs.send" alt="">
									</div>
								</div>
								<div>
									<div>
										{{time}} s
									</div>
								</div>
							</div>
							<section v-if='showResult' class='wm-result-page'>
								<div class='wm-result-person'>
									<div><img :src="imgs.person" alt=""></div>
									<div>
										<div>
											60秒正确投送了{{rightCount}}个博物馆
										</div>
										<div>您是{{level}}！</div>
									</div>
								</div>
								<div class='wm-result-btns'>
									<div><img :src="imgs.wxBtn" alt=""></div>
									<div>
										<a :href="href"><img :src="imgs.restartBtn" alt=""></a>
									</div>
								</div>
								<div class='wm-share'>
									<span v-tap='[showShare]'>分享成绩</span>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
			<div class='wm-game-reel wm-game-reel1'>
				<img :src="imgs.reel1" alt="">
			</div>
		</div>
		<div class="wm-game-loading lt-full" v-if='showTip' v-tap='[clearTip]'>
			<transition name='fade'>
				<span v-if='!showInfo&&countdown===3'>{{countdown}}</span>
			</transition>
			<transition name='fade'>
				<span v-if='!showInfo&&countdown===2'>{{countdown}}</span>
			</transition>
			<transition name='fade'>
				<span v-if='!showInfo&&countdown===1'>{{countdown}}</span>
			</transition>
			<transition name='fade'>
				<span v-if='!showInfo&&countdown===0'>{{countdown}}</span>
			</transition>
			<div v-if='showInfo'><img :src="imgs.tip" alt=""></div>
		</div>
		<div class="wm-mask lt-full" v-if='showMask' v-tap='[showShare,false]'>
			<img :src="imgs.arrow" alt="">
		</div>
	</div>
</template>

<script>
	import './index.css';
	import {imgs,mainImgList} from '../lib/assets.js';
	import $ from 'jquery';
	import Vue from 'vue';
	import IScroll from '../../assets/js/iscroll';
	export default {
		props:['obserable','pv','randomPv','nickname','headimgurl'],
		name:'zmitiindex',
		data(){
			return{
				countdown:3,
				imgs,
				show:false,
				time:60,
				showTip:true,
				showMask:false,
				changing:false,
				showInfo:true,
				questionLen:new Array(10),
				current:0,
				width:0,
				viewW:window.innerWidth,
				viewH:window.innerHeight,
				resultArr:[],
				museums:window.museums,
				culturalRelicsList:window.culturalRelicsList,
				rightCount:0,
				canTap:true,
				href:window.location.href,
				showResult:false,
				titleWidth:0,
				level:'草根'
			}
		},
		components:{
		},

		watch:{
			current(val){
				if(val>0){
					this.changing = true;
					setTimeout(()=>{
						this.changing = false;
					},500)
				}
			}
		},
		
		methods:{

			clearTip(){
				if(!this.showInfo){
					return;
				}
				this.showInfo = false;


				var t = setInterval(()=>{
					this.countdown--;

					if(this.countdown<=0){
						clearInterval(t);
						this.showTip = false;
						this.t = setInterval(()=>{
						this.time--;
						if(this.time<=0){
							clearInterval(this.t);//
							this.showResult = true;
							for(var i =0 ;i<this.questionLen.length+1;i++){
								this.resultArr.push(i);
							}
						}
					},1000)
					}
				},1500)

				if(this.countdown<0){
					
				}


			},

			showShare(flag = true){
				this.showMask = flag;
			},

			choose(m,i){
				if(this.canTap){
					this.canTap = false;
					var time = 0;
					if(this.resultArr.length>=this.questionLen.length){
						this.resultArr.push(1);
						this.canTap = false;
						time = 1000;
						return;
					}

					if(m.key  === this.culturalRelicsList[this.current].key){
						m.isRight = true;
						this.rightCount++;
						if(this.rightCount<=10){
							this.level = '大师';
						}
						if(this.rightCount<=9){
							this.level = '达人';
						}
						if(this.rightCount<7){
							this.level = '骨干';
						}
						if(this.rightCount<4){
							this.level = '精英';
						}
						this.resultArr.push(true)
					}else{
						m.isRight = false;
						this.resultArr.push(false);
					}
					this.museums = this.museums.concat([]);
					setTimeout(() => {
						this.current++;
						this.current = Math.min(this.current,this.questionLen.length-1);
						m.isRight = null;
						this.museums = this.museums.concat([]);
						setTimeout(() => {
							setTimeout(()=>{
								this.scroll.refresh();
							},1000);
							if(this.resultArr.length<this.questionLen.length){
								this.canTap = true;
							}else{
								this.showResult = true;
							}
						}, 100);
					}, 1000);

	
				}
			},

			touchstart(e){
				e.preventDefault();
			
			},
			imgLoaded($event,m,index){
				//alert($event.target.height);
				m.width =$event.path ? $event.path[0].clientHeight :$event.target.height;//$event.target.height;
				//alert(m.width);
				m.height = 40;
				this.museums = this.museums.concat([]);
			},
			init(){

				
				
				window.ss = this;
				var arr = window.culturalRelicsList.concat([]);
				this.culturalRelicsList = [];
				for(var i = 0; i<this.questionLen.length;i++){
					
					var index = (Math.random()*this.questionLen.length)|0;
					this.culturalRelicsList.push(arr.splice(index,1)[0]);
				}


				setTimeout(() => {
					this.scroll = new IScroll(this.$refs['text'],{
						scrollbars:true,
						//mouseWheel:true
					});
					
					this.$refs['result'] && (this.resultScroll = new IScroll(this.$refs['result'],{
						zmitiV:true
					}));
					this.$refs['game'] && (this.gameScroll = new IScroll(this.$refs['game'],{
						zmitiV:true
					}));
					setTimeout(() => {
						this.scroll.refresh();
						this.$refs['result'] && this.resultScroll.refresh();
						this.$refs['game'] && this.gameScroll.refresh();
					}, 1000);

					this.$refs['send'] && (this.width = this.$refs['send'].offsetHeight);
				}, 100);
			}
			
			
		},
		mounted(){


			this.titleWidth = this.$refs['title'].offsetHeight;

			this.obserable.on("initGame",()=>{
				this.titleWidth = this.$refs['title'].offsetHeight;
				this.show = true;
				this.init();
			})
			

		

			 
		}
	}
</script>