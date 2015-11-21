(function () {
	var gen = function (color) {return [color, function () {return "<span class='" + color + "'>" + this + "</span>";}]};
	var genico = function(icon) {return [icon, function (){return this + '<i class="material-icons right">' + icon + '</i>'}]};
	[gen("red"), gen("green"), gen("orange"), gen("gray"), gen("del"), genico("done"), genico("clear"),
		["processing", function () {return this + '<div style="zoom: 0.8;" class="mdl-spinner mdl-js-spinner is-active right"></div>';}],
		["right",      function () {return "<span class='right'>" + this + "</span>";}]
	]
	.forEach(function (value) {return String.prototype.__defineGetter__(value[0], value[1]);});
	String.prototype.id = function (id) {return "<span id='" + id + "'>" + this + "</span>"}
	String.prototype.link = function (url) {return "<a href='" + url + "'>" + this + "</a>"}
})();
function icon(icon){return '<i class="material-icons">' + icon + '</i>'}
var conf = {
	article_title: "Jack Works's Todo list",
	items: [{title: "哥德尔艾舍尔巴赫",progress: [764, 982, 982], group: "books"},{
			title: "失控".link("https://github.com/programthink/books/blob/master/README.wiki#107-其它"), progress: [353, 1027, 1027], group: "books"},{
			title: "Borland 传奇".link("https://github.com/programthink/books/blob/master/README.wiki#106-it-公司"), progress: [276, 507, 507], group: "books"},{
			title: "暗时间".link("https://github.com/programthink/books/blob/master/README.wiki#107-其它"), progress: [91, 174, 179], group: "books"},{
			title: "猜想与反驳".link("https://github.com/programthink/books/blob/master/README.wiki#88-科学哲学"), progress: [10, 62, 722], group: "books"},{
			title: "Doom 启示录", progress: [7, 30, 433], group: "books"},
	{
		title: "魔戒",
		content: ["霍比特人".done.green,
			"魔戒同盟".processing.orange,
			"王者归来",
			"精灵宝钻"
		],
		progress: [204, 706, 2004],
		group: "books_details"
	},{
		title: "网易云课堂 - 计算机网络之网尽其用".link("http://mooc.study.163.com/course/HIT-1000002010?tid=1000003008"),
		content: [
			"第 1 章: 计算机网络概述 (上)".done.green,
			"第 1 章: 计算机网络概述 (下)".orange.processing,
			"第 2 章: 计算机网络应用 (上)".gray,
			"第 2 章: 计算机网络应用 (下)".gray
		],
		progress: [11, 17, 39],
		group: "netease"
	},{
		title: "edX 课程",
		content: {
			headers: [["课程", "进度", "状态"]], 
			body: [
				["6.004.1x", "Welcome to 6.004.1x!".green, ""],
				["6.004.2x", "6.004.1x".gray,""],
				["IELTSx", "Starts 11/27".red, icon("clear").orange],
				["IT.1.1x", "What is this course about?".gray, ""],
				["Think101x", "A taste of things to come".gray, ""],
				["Louv1.1x", "Basic programming concepts".gray, ""],
				["Louv1.2x", "Introduction to Louv1.2x - ".gray + " require Louv1.1x".red, icon("clear").red],
				["CloudIntro.x", "Welcome from the Instructor".gray, ""],
				["HTML5.1x", "Why accessibility is important".green, ""],
				["HTML5.2x", "Starts 12/01 && HTML5.1x".red, icon("clear").red],
				["LFS101x.2", "Introduction/ Learning Objectives".green, ""],
				["DEV204x", "Introducing C#".orange, ""],
				["FP101", "List Comprehensions".green, ""],
				["PH525.1x", "Getting Started".gray, ""],
				["60240013x", "Different Kinds of Combinations".orange, ""]
			]
		}
	},{
		title: "网易云课堂 - CS 大一".link("http://study.163.com/curricula/cs/grade-1.htm"),
		content: [
			"程序设计入门 - Python",
			"程序设计入门 - C 语言 > " + " C 语言程序设计进阶".gray,
			"程序设计入门 - Java > " + " Java 语言程序设计进阶".gray,
			"计算机专业导论之思维与系统",
			"计算机专业导论之语言与算法",
			"计算机专业导论之学科与专业",
			"工科数学分析(1) > " + " 工科数学分析(2)".gray.processing
		],
		progress: [0, 7, 10]
	},{
		title: "计算机科学",
		content: [
			"计算机体系结构",
			"计算机网络原理",
			"数据结构",
			"算法导论",
			"计算机组成原理",
			"图形学",
			"人工智能",
			"数据库系统",
			"编译原理",
			"操作系统",
			"网络协议"
		]
	}, {
		title: "数学",
		content: [
			"微积分",
			"线性代数",
			"数值分析",
			"概率统计",
			"复变函数",
			"高等数学",
			"离散数学".link("#comb").processing,
			"抽象代數",
			"拓扑",
			"《什么是数学》",
			"《数学之美》"
		],
		progress: [0, 0, 2]//book only
	}, {
		title: "语言",
		content: [
			"English".processing.orange,
			"Esperanto",
			"Latin"
		]
	}, {
		title: "计算机语言",
		content: [
			"JavaScript".done.green,
			"Python".processing,
			"Node.js".processing,
			"C++",
			"Bash",
			"HTML 5 API".processing,
			"Go",
			"Dart",
			"Swift",
			"C#".processing,
			"Lisp",
			"ECMAScript 2015".processing,
			"R".processing,
			"Haskell".processing
		]
	}, {
		title: "思维、逻辑、社会、设计、玄学",
		content: [
			"黑客与画家".done.green.id("book_hackers_and_painters"),
			"批判性思维工具",
			"哥德尔艾舍尔巴赫".processing,
			"不确定状况下的判断",
			"影响力:科学与实践",
			"给大家看的设计书",
			"可笑的思维谬误：批判性思考与查错神经",
			"乌合之众",
			"提问的智慧".done.green.id("book_smart_questions"),
			"浪潮之巅"
		],
		progress: [2, 3, 10]
	}, {
		title: "一些奇怪的东西",
		content: [
			"魔戒".processing,
			"DND规则",
			"1984",
			"美丽新世界",
			"三体".done.green
		]
	}, {
		title: "听起来很厉害的样子，说不定会去拜读",
		content: [
			"重构",
			"代码整洁之道",
			"代码大全2",
			"数学之美",
			"Rework中文版",
			"高效程序员的45个习惯".gray.del,
			"自私的基因",
			"失控".processing,
			"万物由来",
			"黑客攻防技术宝典（Web实战篇）".processing.red,
			"白帽子讲Web安全",
			"Web前端黑客技术揭秘",
			"SQL注入攻击与防御",
			"JavaScript DOM编程艺术"
		],
		progress: [0, 1, 14]
	}, {
		title: "Done!",
		content: [
			"提问的智慧".done.green.link("#book_smart_questions") + " 2015/??/??",
			"黑客与画家".done.green.link("#book_hackers_and_painters") + " 2015/??/??",
			"Uno".done.green + " 2015/08/18",
			"我们的征途，是星辰大海！ - Bilibili 专题".done.green.link("http://www.bilibili.com/topic/245.html") + " 2015/10/4",
			"平面国".done.green + " - 2015/11/08",
			"三体".done.green + " - 2015/11/09"
		]
	}],
	motto: "——在一群出色的人中间，常常误以为自己也是其中一员，然后忘了努力"
}
setInterval(function (){
	$(".page-ribbon").css("background", rgb(~~(Math.random()*255), ~~(Math.random()*255), ~~(Math.random()*255)))
}, 2000);
function rgb(r,g,b){
	return "rgb(" + r + "," + g + "," + b + ")";
}