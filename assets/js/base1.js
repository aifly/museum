var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	title: './assets/images/title.png',
	index: './assets/images/index.png',
	indexBg:'./assets/images/index-bg.jpg',
	getTaskBtn: './assets/images/get-task-btn.png',
	gameBg:'./assets/images/game-bg.jpg',
	right:'./assets/images/right.png',
	wrong:'./assets/images/wrong.png',
	reel1:'./assets/images/reel1.png',
	reel2:'./assets/images/reel2.png',
	send:'./assets/images/send.png',
	goods1:'./assets/images/goods1.png',
	guobaoxizun:'./assets/images/guobaoxizun.png',
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
		title: '“国宝”牺尊',
		content: '战国时期，高28.3厘米，长46.0厘米。1982年出土于稷下街道商王墓地。|仿牛形，昂首竖耳，偶蹄。由头颅，体、盖分铸而成。首颈结合，有一项圈合缝自然遮掩，盖为一扁嘴长颈禽，禽颈反折，嘴紧贴背上，巧成半环形盖钮。两翅平展，羽翎均以绿松石铺填。通体以粗细相间的金、银丝嵌饰的几何云纹。纹理间以绿松石和孔雀石镶饰。',
		image:imgs.guobaoxizun,
		key:'qiwenhua',
	},{
		title: '千佛幢',
		content: "北齐文物。通高198厘米，顶宽90厘米，许昌市微型机电厂出土。|幢身呈等边八棱形，每面以平面剔地手法雕凿125个佛龛，每龛1佛，共计千佛。佛像均结珈趺坐于仰莲须弥座上，手施禅定印，高肉髻，面相方圆饱满，或交领袈裟，或圆领大衣，表情或文静慈祥，或面带微笑。｜幢顶也是八棱形，仰莲承托。8个立面，1面刻字已模糊不清，其余7面有佛教故事：维摩文殊问疾图、游说传经图、三世佛、十方佛、文殊和普贤护法图、十六罗汉图和六组佛造像。座缺。｜千佛幢的发现，反映了印度佛教在中国的传播及中国文化兼容并蓄、有容乃大的优秀品质。",
		image:imgs.qianfuzhuang,
		key:'xuchang'
	},{
		title: '缂丝花青地云龙海水江崖纹龙袍',
		content: "蓝色缂丝花青地云龙海水江崖纹龙袍，清代，现藏于北京民俗博物馆。|北京民俗博物馆馆藏缂丝龙袍，是一件清朝年间制作的缂丝龙袍。其最大特点是以青蓝色丝线缂织万字纹地，捻金线缂织金龙九条，彩线缂织海水江崖、出水八宝纹饰，纯金扣按传统服饰规矩分布于右前襟，衣缘饰海水行龙团龙纹，两袖口各置海水行龙纹。十二章纹与暗八仙纹饰混于云气纹中散于衣纹各处。缂丝是工艺最为复杂的织造法，图案需以小梭换色挖织而成，因分界处纬线分离，如镂刻之象，所以又称“刻丝”，是汉族传统丝绸艺术品中的精华。《清通志·器服略》谓：“皇帝龙袍，色明黄，领袖俱石青片金缘，绣文金龙九，列十二章，间以五色云，领前后正龙各一，左右及交襟处行龙各一，袖端正龙各一，下幅八宝立水裾左右开。”《清史稿·志七十八·舆服二》亦载︰“龙袍，色用明黄。领、袖俱石青，片金缘。绣文金龙九。”|缂丝花青地云龙海水江崖纹龙袍是北京民俗博物馆服饰类等级最高的藏品。",
		image: imgs.longpao,
		key: 'beijingminsu'
	},{
		title: '青釉胡人骑狮器',
		content: '晋|通高 18.9 厘米，长 14.2 厘米|临沂王羲之故居发掘（2003年）|一胡人浓眉大眼，两眼圆睁，高鼻大耳，络腮胡须，髭须上翘。头戴网纹卷沿高筒帽，帽中间饰有凹弦纹，帽后两带交叉下垂。身着圆圈、十字形纹衫裤，足穿网纹履，端坐于狮背上。左手楸狮耳，右手执便面于胸前，目视前方。卧狮怒目，张口，獠牙外露，颌下有须，长尾呈树叶状下垂，尾巴上卷，狮身印有圆形斑纹，蓖划鬃毛，通体施青釉。如意剑首，柄上配剑环，云纹剑体，外侧铭文为“匪鉴斯镜，以妆尔容”，保存完好。',
		image:imgs.qishiqi,
		key:'linyishi'
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
	}, {
		image: imgs.hainansheng,
		name: '海南省博物馆',
		key: 'hainansheng'
	}, {
		image: imgs.linyishi,
		name: '临沂市博物馆',
		key: 'linyishi'
	}, {
		image: imgs.xuchang,
		name: '许昌博物馆',
		key: 'xuchang'
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