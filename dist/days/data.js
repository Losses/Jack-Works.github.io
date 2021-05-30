function getDayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0).getTime();
    var diff = now.getTime() - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
}
const fill = (arr) => arr.map(([a, b, c]) => (c ? [a, b, c] : [a, '', b]));
const Data = {
    title: '测绘文明',
    weekMessage: 'これが未来だと言うならいっそ、遣り切れない明日を手放して',
    motto: '那你为什么不现在就去做呢？',
    data: [
        {
            title: 'Ingress / 清明上河图',
            progress: { max: 654, current: 286 },
        },
        {
            title: `2021 年 ⸺ 循环、?? 与 ?? 之年 ⸺ ${getDayOfYear()} of 365`,
            content: {
                body: fill([
                    ['哆啦 A 梦：大雄的新恐龙', '2020/1/5'],
                    ['心灵奇旅', '2020/1/9'],
                    ['Rhythm doctor', '2021/3/7'],
                    ['魔戒：护戒同盟', '2021/4/26'],
                    ['魔戒：双塔奇兵', '2021/5/8'],
                    ['魔戒：王者归来', '2021/5/16'],
                    ['少女终末旅行', '2021/5/29'],
                ]),
            },
        },
        {
            title: `2020 年 ⸺ 原理、旋律与冷漠之年`,
            content: {
                body: fill([
                    ['2048', '2020/07/02'],
                    ['Ori and the blind forest', '2020/11/29'],
                ]),
            },
        },
        {
            title: `2019 年 ⸺ 分布、魔术与突变之年`,
            content: {
                body: fill([
                    ['流浪地球', '2019/02/09'],
                    ['数学也荒唐', '2019/02/26'],
                    ['夏目友人帐 ～缘结空蝉～', '2019/03/08'],
                    ['企鹅公路', '暴风雨、噩梦、发烧', '2019/05/19'],
                    ['罗小黑战记', '又是一个神秘的大球', '2019/09/07'],
                ]),
            },
        },
        {
            title: '2018 年 ⸺ 解离、叹息与终结之年',
            content: {
                body: fill([
                    ['追踪引力波：寻找时空的涟漪', '2018/03/02'],
                    ['目隐都市的演绎者', "Let's「daze」 心を消さないで", '2018/04/01'],
                    [
                        'Ready Player One',
                        '不了解圈子文化的人因为利益入侵一个圈子，只能带来毁灭。现实世界已经见过不少了吧。',
                        '2018/04/14',
                    ],
                    ['海上钢琴师', '2018/04/18'],
                    ['阳炎炫乱 1~7', '「来吧。 KAGAROU DAZE」', '2018/05/09'],
                    ['未完的传说', '我们不能活在尚未来临的日子里，为了追求自身构想的幻影而丧失了现在。', '2018/08/27'],
                ]),
            },
        },
        {
            title: '2017年 ⸺ 幻想、魔法与冷静之年',
            content: {
                body: fill([
                    [
                        '大设计',
                        '[人择原理](https://zh.wikipedia.org/wiki/%E4%BA%BA%E6%8B%A9%E5%8E%9F%E7%90%86)',
                        '2017/1/4',
                    ],
                    [
                        '[吉屋出租 (Rent)](http://www.bilibili.com/video/av1882979/)',
                        '525, 600 minutes, how do we measure, measure a year',
                        '2017/1/16',
                    ],
                    [
                        '图利的猫：史上最著名的116个思想悖论',
                        '“不要总是用难以抉择的道德问题刁难别人，因为当他在此类问题下积累了足够的经验，你会发现他变得毫无道德可言”⸺ Giles Lee',
                        '2017/1/23',
                    ],
                    ['你一生的故事', '强烈推荐', '2017/1/27'],
                    ['Arrival (2016)', '本来就没有自由意志', '2017/1/25'],
                    ['魔鬼的牧师', '书信集？', '2017/1/26'],
                    [
                        '图解 HTTP',
                        '的确解释了 HTTP 协议，但……是这本书太浅显了还是 HTTP 协议本来就这么简单？',
                        '2017/2/13',
                    ],
                    [
                        'Harry Potter And The Cursed Child',
                        '熊孩子们真会玩！_另外心疼 HPMOR 作者关于时间转换器和变形术的二设_',
                        '2017/2/23',
                    ],
                    ['漫画数据库', '没完全明白', '2017/2/24'],
                    ['哈利波特与被诅咒的孩子', '翻译爆炸！', '2017/3/8'],
                    ["点石成金(Don't make me think)", '虽然有点太老，但是说的有道理', '2017/3/10'],
                    ['语言学的邀请', '有道理，但是略水，主要观点在最后几页重新概括了一下', '2017/3/15'],
                    ['自私的基因', '2017/3/21'],
                    ['哥德尔、埃舍尔、巴赫⸺集异璧之大成', '第二遍看', '2017/3/26'],
                    ['盲眼的钟表匠', '2017/5/11'],
                    ['精灵宝钻', '迷人的神话', '2017/5/19'],
                    ['魔鬼出没的世界', '“正是科学的光芒告诉了我们并不是人类大众生来便背着枷锁”', '2017/6/9'],
                    ['设计心理学', '2017/6/19'],
                    ['星际穿越', '2017/6/27'],
                    ['人类群星闪耀时', '他完全生活在一个只用旋律和节拍来计量时间的环境里。', '2017/6/?'],
                    ['自控力', '没什么用？', '2017/7/4'],
                    ['1984', '“自由就是二加二等于四，承认了此理，其他便会迎刃而解。”', '2017/7/5'],
                    [
                        '[悖论：思维的魔方](https://www.coursera.org/learn/bei-lun)',
                        '很有意思，但学了之后记住的不多',
                        '2017/7/31',
                    ],
                    ['巫师、外星人与星舰', '非常棒的书', '2017/8/19'],
                    [
                        '[星际穿越(基普·索恩)](https://www.amazon.cn/gp/product/B010N3J626)',
                        '看过星际穿越电影的一定要去看这本书',
                        '2017/9/8',
                    ],
                    ['你的灯亮着吗？发现问题的真正所在', '完全不得要领', '2017/9/9'],
                    [
                        '美丽新世界',
                        '“我不要舒适。我要神，我要诗，我要真实的危险，我要自由，我要善良，我要罪孽”',
                        '2017/9/10',
                    ],
                    ['弹丸论破 3', '希望だ 絶望だ', '2017/9/23'],
                    ['未来简史', '对未来的预测过于乐观，后半本提出的人文主义的发展和它的未来很有意思', '2017/10/6'],
                    ['计算进化史', '从希尔伯特开始，一段精彩的历史', '2017/10/16'],
                    ['我们', '“不止如此，我确信我们会胜利。因为理性必胜。”', '2017/10/17'],
                    ['寻梦环游记 (Coco)', '“然后第三次死亡来的比第一次早。”', '2017/12/9'],
                    ['[CS173](https://courses.engr.illinois.edu/cs173/fa2017/)', '2017/12/14'],
                ]),
            },
        },
        {
            title: '2016年 ⸺ 艺术、科学与平淡之年',
            content: {
                body: fill([
                    ['哥德尔、埃舍尔、巴赫⸺集异璧之大成', '2016/03/06'],
                    // ['果壳中的宇宙'.link('https://www.amazon.cn/gp/product/B01931SPYE'), '"宇宙的目的是什么？"', '2016/07/02'],
                    [
                        'CS 50'.link('http://open.163.com/special/opencourse/cs50.html'),
                        '**极好的入门课程**我很后悔 5 年前有人推荐我去看而我没有看完',
                        '2016/07/07',
                    ],
                    [
                        '失控'.link('https://github.com/programthink/books/blob/master/README.wiki#107-其它'),
                        '凯文凯利精准的预见了十余年之后的今日',
                        '2016/08/05',
                    ],
                    // ['Programming Languages Part A'.link('https://www.coursera.org/learn/programming-languages/'), 'Hooray！是函数式！', '2016/08/28'],
                    [
                        'Hamilton (Musical)'.link('http://www.bilibili.com/video/av4891480'),
                        'Who lives, who dies, who tells your story',
                        '2016/11/19',
                    ],
                    ['魔戒', '冷灰中热火苏醒，暗影中光明跳荡', '2016/12/05'],
                    ['霍比特人：意外之旅', '2016/12/05'],
                    ['清醒思考的艺术', '不如看维基百科', '2016/12/28'],
                ]),
            },
        },
        {
            title: '2015年 ⸺ 懵懂、失望与觉醒之年',
            content: {
                body: fill([
                    ['提问的智慧'.link('#book_smart_questions'), '2015'],
                    ['黑客与画家'.link('#book_hackers_and_painters'), '2015'],
                    [
                        '我们的征途，是星辰大海！ ⸺ Bilibili 专题'.link('http://www.bilibili.com/topic/245.html'),
                        '2015/10/04',
                    ],
                    ['平面国', '2015/11/08'],
                    ['三体', '消灭人类暴政，世界属于三体!', '2015/11/09'],
                    ['暗时间', '2015/12/03'],
                    [
                        '哈利波特与理性之道'.link('http://hpmor.lofter.com/'),
                        '严肃地对待荒谬，荒谬地对待严肃',
                        '2015/12/10',
                    ],
                    ['A Very Potter Musical'.link('http://www.bilibili.com/video/av1409326/'), '2015/12/14'],
                ]),
            },
        },
    ].filter((x) => x),
};
export default Data;
//# sourceMappingURL=data.js.map