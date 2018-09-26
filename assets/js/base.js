var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	title: './assets/images/title.png',
	index: './assets/images/index.png',
	indexBg:'./assets/images/index-bg.jpg',
	getTaskBtn: './assets/images/get-task-btn.png',
	gameBg:'./assets/images/game-bg.jpg',
	reel1:'./assets/images/reel1.png',
	reel2:'./assets/images/reel2.png',
	send:'./assets/images/send.png',
	goods1:'./assets/images/goods1.png',
	resultBg:'./assets/images/result-bg.png',
	anhui:'./assets/images/anhui.jpg',
	anhuizhongguohuizhouwenhua:'./assets/images/anhuizhongguohuizhouwenhua.jpg',
	beijingminsu:'./assets/images/beijingminsu.jpg',
	chaohushi:'./assets/images/chaohushi.jpg',
	dongguanyapianzhanzheng:'./assets/images/dongguanyapianzhanzheng.jpg',
	fuzhou:'./assets/images/fuzhou.jpg',
	gansusheng:'./assets/images/gansusheng.jpg',
	guizhousheng:'./assets/images/guizhousheng.jpg',
	hainansheng:'./assets/images/hainansheng.jpg',
	hubeisheng:'./assets/images/hubeisheng.jpg',
	huizhou:'./assets/images/huizhou.jpg',
	jincheng:'./assets/images/jincheng.jpg',
	linyishi:'./assets/images/linyishi.jpg',
	maanshanshi:'./assets/images/maanshanshi.jpg',
	pingxiang:'./assets/images/pingxiang.jpg',
	quanzhouhaiwaijiaotongshi:'./assets/images/quanzhouhaiwaijiaotongshi.jpg',
	shiyanshi:'./assets/images/shiyanshi.jpg',
	tonglingshi:'./assets/images/tonglingshi.jpg',
	xuchang:'./assets/images/xuchang.jpg',
	yangzhou:'./assets/images/yangzhou.jpg',
	yunnansheng:'./assets/images/yunnansheng.jpg',
	//baoming:'./assets/images/baoming.png',
	//yibaoming:'./assets/images/yibaoming.png',
	
}
 var arr = [];


 for (var attr in imgs) {
 	arr.push(imgs[attr]);
 }
window.culturalRelicsList = [//文物列表
	{
		title: '后母戊鼎',
		content: '原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作原器1939年3月在河南安阳出土，是商王祖庚或祖甲为祭祀其母戊所制，是商周时期青铜文化的代表作',
		image:imgs.goods1,
		key:1,

	}
];
window.museums = [
	{
		image:imgs.anhui,
		name:"安徽博物馆",
		key:'anhui'
	},{
		image:imgs.hubeisheng,
		name:'湖北省博物馆',
		key:'hubeisheng'
	},{
		image:imgs.jincheng,
		name:'晋阳博物馆',
		key:'jinyang'
	},{
		image:imgs.pingxiang,
		name:'萍乡博物馆',
		key:'pingxiang'
	},{
		image:imgs.yunnansheng,
		name:'云南博物馆',
		key:'yunnansheng'
	},{
		image:imgs.quanzhouhaiwaijiaotongshi,
		name:'博物馆',
		key:'quanzhouhaiwaijiaotongshi'
	},{
		image:imgs.maanshanshi,
		name:'马鞍山市博物馆',
		key:'maanshanshi'
	},{
		image:imgs.yangzhou,
		name:'扬州博物馆',
		key:'yangzhou'
	},{
		image:imgs.huizhou,
		name:'惠州博物馆',
		key:'huizhou'
	},{
		image:imgs.hainansheng,
		name:'海南省博物馆',
		key:'hainansheng'
	},
];
 


 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();