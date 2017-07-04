var conf = {
	items: [
		//{title: 'Borland 传奇'.link('https://github.com/programthink/books/blob/master/README.wiki#106-it-公司'), progress: [331, 507]},
		//{title: '猜想与反驳'.link('https://github.com/programthink/books/blob/master/README.wiki#88-科学哲学'), progress: [10, 62, 722]},
		//{title: 'Doom 启示录', progress: [7, 30, 433]},
		//{title: '怎样阅读一本书' + '第五章 如何做一个自我要求的读者'.comment, progress: [17, 114]}, 
		//{
		//	title: '哥德尔、埃舍尔、巴赫——集异璧之大成' + ' - 重读'.italic,
		//	progress: []
		//},
		{ title: '"我庄严宣誓我没干好事"' },
		{ title: 'Ingress 清明上河图系列任务', progress: [120, 654] },
		/*{
			title: '思维、逻辑、社会、设计、玄学',
			content: [
		//		'批判性思维工具',
		//		'不确定状况下的判断'.processing,
		//		'影响力:科学与实践',
		//		'给大家看的设计书',
		//		'可笑的思维谬误：批判性思考与查错神经',
		//		'乌合之众',
		//		'浪潮之巅'
			]
		},
		{
			title: '一些奇怪的东西',
			content: [
				'DND规则'.processing,
		//		'1984',
		//		'美丽新世界',
			]
		},*/
		//{
		//	title: '听起来很厉害的样子，说不定会去拜读',
		//	content: [
		//		'重构',
		//		'代码整洁之道',
		//		'代码大全2',
		//		'数学之美',
		//		'Rework中文版',
		//		'高效程序员的45个习惯'.gray.del,
		//		'万物由来',
		//		'黑客攻防技术宝典（Web实战篇）'.processing.red,
		//		'白帽子讲Web安全',
		//		'Web前端黑客技术揭秘',
		//		'SQL注入攻击与防御',
		//		'JavaScript DOM编程艺术'
		//	]
		//},
		{
			title: '2017年',
			content: {
				headers: [['有趣的事物', '评判一番', '恰好的时间']],
				body: [
					['大设计', '人择原理'.link('https://zh.wikipedia.org/wiki/%E4%BA%BA%E6%8B%A9%E5%8E%9F%E7%90%86'), '2017/1/4'],
					['吉屋出租 (Rent)'.link('http://www.bilibili.com/video/av1882979/'), '525, 600 minutes, how do we measure, measure a year', '2017/1/16'],
					['图利的猫：史上最著名的116个思想悖论', '“不要总是用难以抉择的道德问题刁难别人，<br>因为当他在此类问题下积累了足够的经验，<br>你会发现他变得毫无道德可言”<br>—— Giles Lee', '2017/1/23'],
					['你一生的故事', '← 强烈推荐', '2017/1/27'],
					['Arrival (2016)', '本来就没有自由意志', '2017/1/25'],
					['魔鬼的牧师', '书信集？', '2017/1/26'],
					['图解 HTTP', '的确解释了 HTTP 协议，但……<br>是这本书太浅显了还是 HTTP 协议本来就这么简单？', '2017/2/13'],
					['Harry Potter And The Cursed Child', '熊孩子们真会玩！<br>' + '另外心疼 HPMOR 作者关于时间转换器和变形术的二设'.gray.del, '2017/2/23'],
					['漫画数据库', '对我这个数据库恐惧者好像很不错<br>' + '虽然还是没完全明白'.gray.del, '2017/2/24'],
					['哈利波特与被诅咒的孩子', '翻译爆炸！', '2017/3/8'],
					['计算机文化', '好像不适合我，看了一百页，弃了', '2017/10/3'],
					['点石成金(Don\'t make me think)', '虽然有点太老，但是说的有道理', '2017/3/10'],
					['语言学的邀请', '有道理，但是感觉略水，主要观点在最后几页重新概括了一下', '2017/3/15'],
					['自私的基因', '2017/3/21'],
					['哥德尔、埃舍尔、巴赫——集异璧之大成', '第二遍看，还是会觉得是神书呢', '2017/3/26'],
					['盲眼的钟表匠', '2017/5/11'],
					['精灵宝钻', '迷人的神话故事', '2017/5/19'],
					['魔鬼出没的世界', '正是科学的光芒告诉了我们并不是人类大众生来便背着枷锁', '2017/6/9'],
					['设计心理学', '----', '2017/6/19'],
					['星际穿越', '好棒啊啊啊啊啊啊啊啊', '2017/6/27'],
					['自控力', '一个朋友推荐我去看的，好像没什么用？', '2017/7/4']
				].map(([a, b, c]) => c ? [a, b, c] : [a, '', b])
			}
		},
		{
			title: '2016年',
			content: {
				headers: [['有趣的事物', '评判一番', '恰好的时间']],
				body: [
					['哥德尔、埃舍尔、巴赫——集异璧之大成'.link('#book_geb'), '这句话没有在自指', '2016/03/06'],
					//			['万万没想到——用理工科思维理解世界'.link('https://www.amazon.cn/gp/product/B015DLP55A'), '相信我，这真的只是一本博客集', '2016/05/20'],
					//			['拆掉思维里的墙'.link('https://www.amazon.cn/gp/product/B009P4OW6U'), '基本全是鸡汤 建议别看', '2016/06/15'],
					//			['果壳中的宇宙'.link('https://www.amazon.cn/gp/product/B01931SPYE'), '"宇宙的目的是什么？"', '2016/07/02'],
					['CS 50'.link('http://open.163.com/special/opencourse/cs50.html'), '极好的入门课程'.bold() + '<br>我很后悔 5 年前有人推荐我去看而我没有看完', '2016/07/07'],
					['失控'.link('https://github.com/programthink/books/blob/master/README.wiki#107-其它'), '凯文凯利精准的预见了十余年之后的今日', '2016/08/05'],
					//			['LAHW@Coursera'.link('https://www.coursera.org/learn/ruhe-xuexi/home/welcome'), '至少我现在知道好好睡觉的重要性了', '2016/08/18'],
					//			['Programming Languages Part A'.link('https://www.coursera.org/learn/programming-languages/'), 'Hooray！是函数式！', '2016/08/28'],
					['Hamilton (Musical)'.link('http://www.bilibili.com/video/av4891480'), '谁人来讲述我们的故事？', '2016/11/19'],
					['魔戒', '有两种人，看过魔戒的，和准备看魔戒的', '2016/12/05'],
					['霍比特人：意外之旅', '咕噜。', '2016/12/05'],
					['清醒思考的艺术', '此书介绍的思维谬误的数量让我觉得不如看维基百科的相关条目', '2016/12/28']
				].map(([a, b, c]) => c ? [a, b, c] : [a, '', b])
			}
		},
		{
			title: '2015年',
			content: {
				headers: [['有趣的事物', '评判一番', '恰好的时间']],
				body: [
					['提问的智慧'.link('#book_smart_questions'), '2015'],
					['黑客与画家'.link('#book_hackers_and_painters'), '2015'],
					['我们的征途，是星辰大海！ - Bilibili 专题'.link('http://www.bilibili.com/topic/245.html'), '2015/10/04'],
					['平面国', '怎么想象高维空间？', '2015/11/08'],
					['三体', '消灭人类暴政，世界属于三体!!', '2015/11/09'],
					['暗时间', '2015/12/03'],
					['哈利波特与理性之道'.link('http://hpmor.lofter.com/'), '严肃地对待荒谬，荒谬地对待严肃', '2015/12/10'],
					['A Very Potter Musical'.link('http://www.bilibili.com/video/av1409326/'), '2015/12/14'],
				].map(([a, b, c]) => c ? [a, b, c] : [a, '', b])
			}
		}]
}
var vm = new Vue({
	el: 'body', data: {
		article_title: '测绘文明',
		weekMsg: '哪怕是霍格沃茨最小的学生，他也不会叫他们做出错误的选择。',
		motto: '——探索，继续前行',
		hitokoto: null,
		items: []
	}
})
var final
conf.items.forEach((v, i) => {
	final = i * 150
	setTimeout(() => vm.items.push(v), final)
})
/*$.get('https://apis.vola.xyz/hitokoto', title => 
	setTimeout(
		() => vm.items.unshift({title: title.replace(/\n/g, '<br>'), content: 'Hitokoto powered by hitokoto service'}),
		150//final
	)
)*/
