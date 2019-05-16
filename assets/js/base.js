var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	arrow: './assets/images/arrow.png',
	title: './assets/images/title2.png',
	index: './assets/images/index.png',
	indexBg:'./assets/images/index-bg.jpg',
	getTaskBtn: './assets/images/get-task-btn.png',
	gameBg:'./assets/images/game-bg.jpg',
	reel1:'./assets/images/reel1.png',
	right:'./assets/images/right.png',
	wrong:'./assets/images/wrong.png',
	kuixinghe:'./assets/images/kuixinghe.png',
	zhukedading:'./assets/images/zhukedading.png',
	muzhizhuan:'./assets/images/muzhizhuan.png',
	
	haichuancanti:'./assets/images/haichuancanti.png',
	zhugewuhou:'./assets/images/zhugewuhou1.png',
	tongchema:'./assets/images/tongchema.png',
	taotiewenjue:'./assets/images/taotiewenjue.png',
	jinzhuque:'./assets/images/jinzhuque.png',
	yubingtiejian:'./assets/images/yubingtiejian.png',
	kehuagaiguan:'./assets/images/kehuagaiguan.png',
	tongbenma:'./assets/images/tongbenma.png',
	goujianjian:'./assets/images/goujianjian.png',
	tongan:'./assets/images/tongan.png',
	longwenmeiping:'./assets/images/longwenmeiping.png',
	fuhejian:'./assets/images/fuhejian.png',
	konglongdanhuashi:'./assets/images/konglongdanhuashi.png',
	wxBtn:'./assets/images/wm-btn.png',
	restartBtn: './assets/images/restart-btn1.png',
	guobaoxizun: './assets/images/guobaoxizun.png',
	qianfuzhuang: './assets/images/qianfuzhuang.png',
	xianrenbenma: './assets/images/xianrenbenma.png',
	qiantangtiepao: './assets/images/qiantangtiepao.png',
	wenjingshuiping: './assets/images/wenjingshuiping.png',
	yushimo: './assets/images/yushimo.png',
	zishagaihu: './assets/images/zishagaihu.png',
	tip: './assets/images/tip2.png',
	person: './assets/images/person.png',
	qishiqi: './assets/images/qishiqi.png',
	longpao: './assets/images/longpao.png',
	reel2:'./assets/images/reel2.png',
	send:'./assets/images/send.png',
	goods1:'./assets/images/goods1.png',
	resultBg:'./assets/images/result-bg.png',
	anhui:'./assets/images/anhui1.jpg',
	xianyang:'./assets/images/xianyang.jpg',
	beijingminsu:'./assets/images/beijingminsu.jpg',
	qiwenhua:'./assets/images/qiwenhua.jpg',
	chaohushi:'./assets/images/chaohushi.jpg',
	dongguanshi:'./assets/images/dongguanshi.jpg',
	fuzhou:'./assets/images/fuzhou.jpg',
	gansusheng:'./assets/images/gansusheng.jpg',
	guizhousheng:'./assets/images/guizhousheng.jpg',
	hainansheng:'./assets/images/hainansheng.jpg',
	hubeisheng:'./assets/images/hubeisheng.jpg',
	huizhou:'./assets/images/huizhou.jpg',
	jincheng:'./assets/images/jincheng.jpg',
	chengdu:'./assets/images/chengdu.jpg',
	linyishi:'./assets/images/linyishi.jpg',
	maanshanshi:'./assets/images/maanshanshi.jpg',
	pingxiang:'./assets/images/pingxiang.jpg',
	quanzhou:'./assets/images/quanzhou.jpg',
	fuzhoushi:'./assets/images/fuzhou.jpg',
	shiyanshi:'./assets/images/shiyanshi.jpg',
	tonglingshi:'./assets/images/tonglingshi.jpg',
	xuchang:'./assets/images/xuchang.jpg',
	yangzhou:'./assets/images/yangzhou.jpg',
	yunnansheng:'./assets/images/yunnansheng.jpg',
	heyuanshi:'./assets/images/heyuanshi.jpg',
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
		content: '战国时期，1982年出土。高28.3厘米，长46.0厘米。由头颅，体、盖分铸而成。首颈结合，有一项圈合缝自然遮掩，盖为一扁嘴长颈禽，禽颈反折，嘴紧贴背上，巧成半环形盖钮。两翅平展，羽翎均以绿松石铺填。通体以粗细相间的金、银丝嵌饰的几何云纹。纹理间以绿松石和孔雀石镶饰。',
		image: imgs.guobaoxizun,
		key: 'qiwenhua',
	}, {
		title: '千佛幢',
		content: "北齐文物。通高198厘米，顶宽90厘米。幢身呈等边八棱形，每面以平面剔地手法雕凿125个佛龛，每龛1佛，共计千佛。佛像均结珈趺坐于仰莲须弥座上，手施禅定印，高肉髻，面相方圆饱满，或交领袈裟，或圆领大衣，表情或文静慈祥，或面带微笑。",
		image: imgs.qianfuzhuang,
		key: 'xuchang'
	}, {
		title: '缂丝花青地云龙海水江崖纹龙袍',
		content: "缂丝龙袍是一件清朝年间制作的缂丝龙袍，其最大特点是以青蓝色丝线缂织万字纹地，捻金线缂织金龙九条，彩线缂织海水江崖、出水八宝纹饰，纯金扣按传统服饰规矩分布于右前襟，衣缘饰海水行龙团龙纹，两袖口各置海水行龙纹。十二章纹与暗八仙纹饰混于云气纹中散于衣纹各处。",
		image: imgs.longpao,
		key: 'beijingminsu'
	}, {
		title: '青釉胡人骑狮器',
		content: '晋代。通高 18.9 厘米，长 14.2 厘米。胡人浓眉大眼，两眼圆睁，高鼻大耳，络腮胡须，髭须上翘。头戴网纹卷沿高筒帽，帽中间饰有凹弦纹，帽后两带交叉下垂，左手楸狮耳，右手执便面于胸前，目视前方。卧狮怒目，张口，獠牙外露，颌下有须，长尾呈树叶状下垂，尾巴上卷。',
		image: imgs.qishiqi,
		key: 'linyishi'
	}, {
		title: '“丁未夏日时大彬制”鼓腹圆柄曲流卧底圆钮紫砂盖壶',
		content: '壶高8.8厘米、口径5.8厘米，系明墓随葬品。壶为紫泥夹砂胎，胎色紫褐，手感温润，造型为溜肩、圆腹、三弯流，平底内凹。算珠形盖纽。壶盖玉壶身合缝严密，流、口部中线与执把成一线。壶底阴刻竖排双行楷书刻款：“丁未夏日 时大彬制”。',
		image: imgs.zishagaihu,
		key: 'jincheng'
	}, {
		title: '西汉玉仙人奔马',
		content: '高7厘米，长8.9厘米。新疆和田羊脂玉，玉马呈昂首挺胸奔腾状，作成雄性，张口露齿，膛目，竖耳，胸至腹部饰双翼，四蹄腾空踏于云板之上，云头与马腿、蹄、尾相连，背骑羽人，肩与臀部饰羽翅，人面兽耳，长发，一手扶马颈，一手拿灵芝。',
		image: imgs.xianrenbenma,
		key: 'xianyang'
	}, {
		title: '清“道光十五年佛山造六千司马斤”前膛铁炮',
		content: '通长276厘米，内膛径16厘米，外膛径50厘米。前装滑膛铁炮，前细后丰，炮身分六节合铸而成，铸造较粗糙，上有5道箍环，两侧有圆柱形炮耳，尾部有圆钮，炮身第二节正背两面均铸有相同的铭文十二行共119个字。该铁炮体量大，铭文清晰，制造地点、年代以及出土地点明确，对于鸦片战争前清政府海防研究具有重要的历史价值。',
		image: imgs.qiantangtiepao,
		key: 'dongguanshi'
	}, {
		title: '“镇馆之宝”唐代昆山片玉石磨',
		content: '石磨为昆山玉质地，高29.9cm，口径20cm，底径45cm。此石磨整体呈浅铁红色，形制与现代石磨相似，由上下两部分组成。上半部分为圆柱形，上阳刻“昆山片玉”四字，下半部分磨心高于磨流外沿，外璧作弧腹内收，壁上刻开窗卷草纹一周，饼形足稍凹，上刻纵向曲线纹一周。',
		image: imgs.yushimo,
		key: 'huizhou'
	}, {
		title: '元青花梅纹净水瓶',
		content: '元青花在中外文化交流史中也占有重要地位，受到世界人民的喜爱和赞赏，影响之广泛、深远、持久，无一器物可与之比肩。据统计，青花瓷的全球存世量仅四百多件，土耳其伊斯坦布尔、伊朗德黑兰、埃及开罗以及美国、英国、日本等国家的博物馆收藏有二百余件，国内考古出土和博物馆收藏二百余件。',
		image: imgs.wenjingshuiping,
		key: 'pingxiang'
	}, {
		title: '南宋剔犀如意云纹三层六出葵形盒 ',
		content: '通高15.7厘米，盖高2.8厘米，首层外壁高2.3厘米，中层外壁高5.31厘米， 底层外壁高5.3厘米，直径15厘米。木胎，六边葵形，三层一盖，有子母口，盖底扣合严密，平底，浅足根。盖面外围饰八个如意云纹；中层与底层外壁对称，每边内有如意纹与灵芝纹各二对。器外表髹棕褐色漆，表面光亮。器内髹黑色漆，光亮。它是全世界迄今为止发现最早的有纪年的雕漆制品。',
		image: imgs.kuixinghe,
		key: 'fuzhoushi'
	}, {
		title: '铸客大鼎',
		content: '通高113厘米，口径87厘米，是战国晚期楚国青铜饪食器，也是迄今为止东周时期最大最重的青铜圆鼎。圆口平唇、圜底、双耳、蹄足，鼎口平沿处刻铭文十二字，前足膝部和左腹下外壁各刻“安邦”二字。',
		image: imgs.zhukedading,
		key: 'anhui'
	}, {
		title: '东晋孟府君墓志砖',
		content: '这套墓志砖共分5块，每块砖长35厘米，宽17厘米，厚5厘米，每块砖大小相同，上面镌刻的文字也相同，出土时分别放置在墓葬甬道的四个角和棺床前，墓志砖上面镌刻的二十九个铭文。',
		image: imgs.muzhizhuan,
		key: 'maanshanshi'
	}, {
		title: '宋代海船残体',
		content: '此展品为宋代文物，残长24.2米，残宽9.15米，载重量200吨，出水时便只有下甲板的部分。尖头方尾，尖底，船身扁阔，平面近似椭圆形，舷侧板为三重木板，船底板为二重木板，共有十三个隔舱，为典型的福建尖底海船。',
		image: imgs.haichuancanti,//---------------------
		key: 'quanzhou'
	}, {
		title: '《蜀丞相诸葛武侯祠堂碑》碑',
		content: '此碑简称“唐碑“。此碑目前位于武侯祠大门与二门东侧碑亭中，有砖砌碑亭保护，雄伟肃穆。此碑由碑帽、碑身组成，无碑座。通高367厘米、宽95厘米、厚27厘米。碑帽为半圆形，高90厘米，下部同碑身同宽，两侧弧形边缘鎸纹饰，以折枝花饰为主，余镌云纹图案。碑身长方形，高277厘米，镌刻碑文，碑文分序和铭两部分，楷书，共22行，每行约50字。',
		image: imgs.zhugewuhou,
		key: 'chengdu'
	}, {
		title: '东汉铜车马',
		content: '“1975年，东汉铜车马出土。原物为一车一马，青铜铸造，总长1.12米，通高0.88米。马由首、尾、颈、足、躯、耳等11段装配而成。整辆车由大约300个零部件组成。铜车马具有古代辎车的特点。“其车厢很严密，顶棚完全封起来的，在古代，这种辎车要么是女性乘坐，要么是用来装货物。”',
		image: imgs.tongchema,
		key: 'guizhou'
	}, {
		title: '饕餮纹爵',
		content: '爵为直壁平底，菌形单柱，柱顶饰涡纹，三角锥足，腹部饕餮纹，上下一周连珠纹，经弦纹作界栏，饕餮纹以鼻梁为基准线，两边为对称的目纹，通高23厘米，流到尾长18.9厘米。',
		image: imgs.taotiewenjue,
		key: 'tongling'
	}, {
		title: '西汉铜鎏金朱雀',
		content: '“西汉鎏金铜朱雀”，是一件鎏金的青铜神鸟，1996年出土。在中国传统文化中，朱雀为吉祥之鸟，古代四大图腾之一，史书上只见有其画，而实有其立体形状者，极为罕见。朱雀饰件的出土，让我们目睹古人想象中神鸟之雄姿，领略到其文化内涵之神韵，此朱雀同属国家一级文物。',
		image: imgs.jinzhuque,
		key: 'chaohushi'
	}, {
		title: '玉柄铁剑',
		content: '春秋。剑长约31、身长19.8、宽3.1、格宽2.45、玉片长4.5、宽3.3、榫孔径0.1厘米。剑身铁质，剑锋，有从，中起脊，截面呈菱形，嵌入玉质剑格中。茎为扁平长方形，玉质，乳白色，受沁有黑斑，质地细腻，半透明。茎的两端有凹榫分别与剑格和剑首的母榫套合相连，其套合连接处的中间用玉销钉加以固定。剑茎、鞘珌通体饰云纹，内凹外弧的长方形玉片凹面光素，弧面饰阴刻云纹。',
		image: imgs.yubingtiejian,
		key: 'shiyanshi'
	}, {
		title: '元•龙泉窑刻花盖罐',
		content: '龙泉窑荷叶盖罐，通高32厘米，口径25.2厘米，底径19厘米，腹围102厘米。罐身圆润，胎体厚重，胎质灰白，色泽明亮，制作规整。此罐造型别致，口沿、底足露胎处有火石红，外施梅子青釉，短颈、圆肩、鼓腹，腹部刻缠枝莲花以及“美酒清香”四字，盖中央隆起，有瓜蒂形钮，边沿平缓起伏成荷叶卷曲状。龙泉窑荷叶盖罐虽承宋风，而又有新意，从造型和纹饰都体现一种时代风格。',
		image: imgs.kehuagaiguan,
		key: 'anhui'
	}, {
		title: '铜奔马',
		content: '东汉，通高34.5厘米，长45厘米，宽13.1厘米，重7.3千克。造型矫健精美，作昂首嘶鸣、疾足奔驰状。塑造者摄取了奔马三组腾空、一足超越飞鸟的刹那瞬间。让飞鸟回首惊顾，更增强奔马疾速向前的动势。其全身的着力点集注于超越飞鸟的一足上，精确地掌握了力学平衡原理，具有卓越的工艺技术水平。铜奔马被认为是东、西方文化交往的使者和象征，被确定为中国旅游的标志。',
		image: imgs.tongbenma,
		key: 'gansusheng'
	}, {
		title: '越王勾践剑',
		content: '春秋晚期。1965年湖北江陵望山1号墓出土。长55.7厘米，宽4.6厘米。剑身中脊起棱，饰黑色菱形花纹。正面近格处有“越王勾践，自作用剑”的鸟篆铭文。剑格正面嵌蓝色琉璃，背面绿松石。',
		image: imgs.goujianjian,
		key: 'hubeisheng'
	}, {
		title: '战国牛虎铜案',
		content: '战国牛虎铜案，出土于江川李家山墓葬群中墓坑最大，随葬品最多的24号墓。器物主体为一头大牛，站立状，牛角飞翘，背部自然下落成案，尾部饰一只缩小了比例的猛虎，虎做攀爬状，张口咬住牛尾；大牛腹下中空，横向套饰一只站立状小牛。大牛与小胡用模铸造，一次成型，小牛则另铸再焊接于大牛腹下。作为滇国的一件祭器，牛虎铜案在力学和美学上都达到了极高水平，几近完美。',
		image: imgs.tongan,
		key: 'yunnansheng'
	}, {
		title: '元代霁蓝釉白龙纹梅瓶',
		content: '霁蓝釉白龙纹梅瓶通体施霁蓝釉，高43.5厘米，口径5.5厘米，最大腹径25.3厘米，底径14厘米。整个外碧通体着蓝釉，腹部刻画的一条白龙追逐着一颗火焰宝珠为白釉，龙环绕瓶身一周，呈s形。此瓶由五节坯胎粘接而成，但在口径和近底部的两道接痕不易被发现，制作工艺十分精良，是元代瓷器的代表作，也是元蓝釉瓷器中的珍贵艺术品。',
		image: imgs.longwenmeiping,
		key: 'yangzhou'
	}, {
		title: '“越王亓北古”错金铭文青铜复合剑',
		content: '越王亓北古剑通长65.2厘米，格宽5厘米。此剑为复合剑；剑圆茎上有平行箍两圈，上有错金纹饰，刃一侧微残（有小缺口）。剑格正、背皆有错金鸟虫书铭文，正面有铭文一行10字，左右两边各5字，对称分布，做“戊（越）王亓北古”；背面亦10字在左右两边对称分布，作“自乍（作）元用之”；圆形剑首环列错金鸟虫书铭文12字“台戊（越）王亓北自乍（作）元之用之佥（剑）”。',
		image: imgs.fuhejian,
		key: 'hainansheng'
	}, {
		title: '恐龙蛋化石',
		content: '河源恐龙博物馆馆藏有18100多枚恐龙蛋化石，为世界馆藏恐龙蛋化石之最，荣获吉尼斯世界纪录。原中国科学院副院长于光远先生题词说：“河源恐龙，世界奇迹。”',
		image: imgs.konglongdanhuashi,
		key: 'heyuanshi'
	}
];
window.museums = [
	{
		image:imgs.hubeisheng,
		name:'湖北省博物馆',
		key:'hubeisheng'
	},{
		image:imgs.beijingminsu,
		name:'北京民俗博物馆',
		key:'beijingminsu'
	},{
		image:imgs.qiwenhua,
		name:'齐文化博物院',
		key:'qiwenhua'
	},{
		image:imgs.yunnansheng,
		name:'云南博物馆',
		key:'yunnansheng'
	},{
		image:imgs.maanshanshi,
		name:'马鞍山市博物馆',
		key:'maanshanshi'
	},  {
		image: imgs.linyishi,
		name: '临沂市博物馆',
		key: 'linyishi'
	}, {
		image: imgs.xuchang,
		name: '许昌博物馆',
		key: 'xuchang'
	},{
		image: imgs.xianyang,
		name: '咸阳博物院',
		key: 'xianyang'
	}, {
		image: imgs.jincheng,
		name: '晋城博物馆',
		key: 'jincheng'
	}, {
		image: imgs.dongguanshi,
		name: '东莞市鸦片战争博物馆',
		key: 'dongguanshi'
	},{
		image: imgs.huizhou,
		name: '惠州博物馆',
		key: 'huizhou'
	},{
		image: imgs.pingxiang,
		name: '萍乡博物馆',
		key: 'pingxiang'
	},{
		image: imgs.fuzhoushi,
		name: '福州市博物馆',
		key: 'fuzhoushi'
	},{
		image: imgs.anhui,
		name: '安徽博物院',
		key: 'anhui'
	},{
		image: imgs.quanzhou,
		name: '泉州海外交通史博物馆',
		key: 'quanzhou'
	},{
		image: imgs.chengdu,
		name: '成都武侯祠博物馆',
		key: 'chengdu'
	},{
		image: imgs.guizhousheng,
		name: '贵州省博物馆',
		key: 'guizhou'
	},{
		image: imgs.tonglingshi,
		name: '铜陵博物馆',
		key: 'tongling'
	},{
		image: imgs.chaohushi,
		name: '巢湖市博物馆',
		key: 'chaohushi'
	},{
		image: imgs.shiyanshi,
		name: '十堰市博物馆',
		key: 'shiyanshi'
	},{
		image: imgs.anhui,
		name: '安徽中国徽州文化博物馆',
		key: 'anhui'
	},{
		image: imgs.gansusheng,
		name: '甘肃省博物馆等你',
		key: 'gansusheng'
	},{
		image: imgs.yunnansheng,
		name: '云南省博物馆',
		key: 'yunnansheng'
	},{
		image: imgs.hainansheng,
		name: '海南省博物馆',
		key: 'hainansheng'
	}, {
		image: imgs.yangzhou,
		name: '扬州博物馆',
		key: 'yangzhou'
	}, {
		image: imgs.heyuanshi,
		name: '河源市博物馆',
		key: 'heyuanshi'
	}
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

 var musics = {
	music: {
		src: './assets/music/bg.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	}
}