/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5615bb20b76cb65b9e87eec743aee1a8"],["/about/index.html","dcb0b29cad66763e74f4becf695e321e"],["/archives/2013/11/index.html","68857185cecdb1571171e0d9b0cfe18f"],["/archives/2013/index.html","fbb3e26c781141aaee7f9b8c132b24e7"],["/archives/2014/01/index.html","d112a0230e28298fc7890339f2bc2694"],["/archives/2014/02/index.html","d6090b4d1dade95167ec749a3588b3d2"],["/archives/2014/index.html","4a3a1c99beb3ac1f012a0ca328016989"],["/archives/2016/01/index.html","1bd9ac68a15c8e64ded1da163d073e7f"],["/archives/2016/06/index.html","354ec553711626557ee9081f2747c5f4"],["/archives/2016/07/index.html","f07a2376a0e6c277bab279ccc0c9ad74"],["/archives/2016/09/index.html","c0ac65acdf36aa3b8a937052d451d4bf"],["/archives/2016/11/index.html","fcb7a0a1267424f6ec86d73aeb01834d"],["/archives/2016/index.html","3a7d99a44e4e931815b5632e911f3e37"],["/archives/2016/page/2/index.html","a9746870f6e0aff095a19e50b504594f"],["/archives/2017/05/index.html","5d642372877683cc0cb5e888a9e12bb3"],["/archives/2017/06/index.html","6eed1e5e541b0594e936e63afd3c707b"],["/archives/2017/07/index.html","5d361d5d27328ef03fb81b436209e6aa"],["/archives/2017/11/index.html","0cf2efbc7e3ff9d425dfeb0e2a31ae37"],["/archives/2017/12/index.html","336cb0e1046e72f7b55787aeaaa13a00"],["/archives/2017/index.html","e83f66cdf151ded687874f0d5e3fec77"],["/archives/2017/page/2/index.html","735d2ea108786d977d7280dbbbbdb9d4"],["/archives/2018/03/index.html","6243552580d1254665dfe6f5d593c66d"],["/archives/2018/06/index.html","755893410d9a7ec3d307cdd4edb1f46c"],["/archives/2018/07/index.html","d807afdb7b70fb2464fae8970e858fbe"],["/archives/2018/08/index.html","1cc056d10c453b2d0ceaa5cc749342a0"],["/archives/2018/09/index.html","60ba0b9bb791cdd7a28c773b977800cb"],["/archives/2018/10/index.html","d9f7f7dcc0dc9512cfea23f3b441d9c1"],["/archives/2018/11/index.html","4bb6fdba88f3d83a8776765e19025765"],["/archives/2018/index.html","9156707b11c3c39406012d65eca48360"],["/archives/2018/page/2/index.html","06c422ebf83dd522c93c68d020c337bf"],["/archives/2018/page/3/index.html","d5f5470725439e7d1482da34b58f34e1"],["/archives/2019/04/index.html","ad8a14332b5d2404d9cdc49d1239e72d"],["/archives/2019/05/index.html","add3047d767615a0ad09e7e188fb1642"],["/archives/2019/08/index.html","236220ff9578321160152a69de190cd6"],["/archives/2019/09/index.html","55204b25efab3639a7f220283a326a64"],["/archives/2019/12/index.html","a7542f94206f44306467ae7b6420a2c4"],["/archives/2019/index.html","be418d1ca902ac0c1adbb9260eb2d953"],["/archives/2019/page/2/index.html","a062db38a0b5eef7ee28f5cbc52d47f9"],["/archives/2020/05/index.html","ea794c27c01c98399802bc1958ed585b"],["/archives/2020/06/index.html","2fec0238426b3faab4293a4d738ef139"],["/archives/2020/07/index.html","17b31e78ddcdaecbe768c1ffa3056110"],["/archives/2020/08/index.html","f87ba18f38492ac1168fb2055691dbf2"],["/archives/2020/08/page/2/index.html","e8c2cf0112b1df3cda9d0721358849d1"],["/archives/2020/08/page/3/index.html","5d836c9bd357c97afbae6df109b787bf"],["/archives/2020/09/index.html","12bc782b25d84cc7a10cda800dabdcda"],["/archives/2020/index.html","80af587e23d7d8f061cdc861a7f39d66"],["/archives/2020/page/2/index.html","6e590b16554ba01cd406610b423245dd"],["/archives/2020/page/3/index.html","bb1a5ce347dc37e7342811e98a98b2d1"],["/archives/2020/page/4/index.html","98891e11ccd032718dcd3cced5eae9f6"],["/archives/2020/page/5/index.html","4537aff0f2b233e4cd00e7ac037c6608"],["/archives/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/10/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/11/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/12/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/2/index.html","e4d0ba14a6660950df933b2ce6855398"],["/archives/page/3/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/4/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/5/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/6/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/7/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/8/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/archives/page/9/index.html","a98b876c10cfbdbe204cdd0a5ff16ea3"],["/article/11fb9e73.html","90ddca24c18223405174309925f2198f"],["/article/136fa9d8.html","5f6824f4b479b687bcc82fda606929e5"],["/article/19718e8e.html","9cd5fd0e8637c36aa716699e8220ce4f"],["/article/1b342210.html","3bba57e46df1b56d2b67eb0ebc54d5dd"],["/article/1eb9d23a.html","d6d0590b6ac51d6440223bec0071beeb"],["/article/228c75d3.html","b6152e08649d4bf2c57d130aac6e18f0"],["/article/23494478.html","492b01ef3a1cb992829f85c397251db7"],["/article/2b3aedce.html","241b0ec51e91b653858b458b56f8d0a7"],["/article/2c2925e.html","18f445c574f5899e4a0640e4b3d878a9"],["/article/2e7c5c98.html","ac26263c8a93db8561cec72c9ff3e01a"],["/article/3229fb3a.html","00e3475ff5cd940e4004231a7f80ef3e"],["/article/33554c5b.html","a36a1d2c3636a35bb183956c71f3a4c1"],["/article/35a56429.html","29df5357a868c0d49e2e80a3c2e2b3f2"],["/article/3aa91634.html","d16cb995833bd0e33a6fb0a165a8ddc3"],["/article/4562b0e.html","1457b9e18df48c9f12359271c4016ae9"],["/article/481247b8.html","0886191d0fbe93194d9ba6425048423f"],["/article/4c3380c8.html","dc8379eb197ce141c39d8f453f062723"],["/article/4f8b07a3.html","d915185f6b77a2caa1b0160d1ed76632"],["/article/534bc28c.html","b1dee4edc100869c731636f0617bb983"],["/article/5692b57c.html","ee48a848f683bd5344a8e505293b4bae"],["/article/5b152571.html","ed66823622b1265f913fe24be7d2c7e2"],["/article/5ca1802e.html","8e060375c5ef4c54df5fee8dcafd6bd7"],["/article/5f339f98.html","d2044c8ea7cce01ab8739e8f31aab5d1"],["/article/64c8bce8.html","79d62dc8594c3ce769f2a6b3fd4dbdac"],["/article/682814d2.html","610d6d20c6c97f83e6bf96011c78e057"],["/article/6cb8c766.html","1dd51665e61e19dfe26decff1e7c11be"],["/article/6faab9c6.html","a69ccadbdcd272e4f4385b53db0e21ba"],["/article/717c02c4.html","5e2f51005726a3ddfbd6527fbf7e7441"],["/article/738c5196.html","fce6a9d4764428d13297fa9d1fd4ad69"],["/article/73ba8b39.html","09aec26542bf2990fa20db63d12a720c"],["/article/7a5991e.html","6bf09be228c56fc72026339e90fa17eb"],["/article/7d3004c4.html","09304f93572328210fbb5fbaf2a96f28"],["/article/83e42b42.html","2216c844012dc556eb9b8563df433d85"],["/article/8c8ac5bf.html","8617bb6886f6dccb929f17753714c5fa"],["/article/8e989db0.html","036ec7902959188f7a9c70ff1dfcc76d"],["/article/90d5d393.html","1f77edb7aba87cd60c9d89d1d885d848"],["/article/91a5995.html","534fb766ab41846f1ca118d27e224e40"],["/article/940b4a8c.html","8150fc275b2f9b863fb1eed2b0a7bf05"],["/article/a0bf6b98.html","96f0bd7601077bceeb05b1a48884b7b0"],["/article/a264b8fd.html","16b4890d1c80b54c1cfb02c4236a95f9"],["/article/b318b8fe.html","b6b8d52490c3809a2c3e83166241d687"],["/article/b73c5547.html","4a5ccb486908a6d0f88748000687a29a"],["/article/bee0f638.html","535de27513ba0ed95433831b7a21d33f"],["/article/c6bff206.html","52ee1375770baea1bbc430069f120311"],["/article/c7063ec3.html","329d5747103061dc68f0dd9da04b23e5"],["/article/ca8b4515.html","6593a39e5d6e272bbfb313319ef77d9a"],["/article/cbe565ff.html","9eeae3c8e727753b4f66b1f3d6c6dab6"],["/article/ce3b3e2.html","988c932aadc5746ee7f79043ef4386c8"],["/article/cf8c0bbe.html","19e7af47cfd018fbe13ce96580178c4b"],["/article/d60bbbcf.html","ddb2a9d279e44c707598520d10a84965"],["/article/d6505d8b.html","45b1309ffdba0872247bf8d71bdfaf4c"],["/article/da9af306.html","3390a37c8b2f678b0d5659c94845a279"],["/article/e20a0ac4.html","45ba707c37c4de663a5828483556b43f"],["/article/ef9ebd24.html","6ad28bf32c89c1200f268b8c87e10df7"],["/article/f01b987b.html","eb885c0d145f94cb80d1290289d0398f"],["/article/f8d1ff2d.html","fe5e258ffda03a5c8705311d1492ec5d"],["/article/f96ab8b3.html","b6064dbdbd89d3acd35fc7bf439d33cc"],["/article/fd541bb0.html","d606b2941763aaf5b45f742d1cacb347"],["/blogger_said/index.html","09eb956311b39f64475f027ab2433285"],["/books/index.html","4f6926bcf199ab29f672d8eb5fd85c9c"],["/categories/index.html","a7b9b1c8367deae6077e5847dd9e7b48"],["/categories/价值观/index.html","354443d3dab4614cb6c46e87bb5e7b0e"],["/categories/健康/index.html","db85c49731fbf138e7853517129343fc"],["/categories/思维模型/index.html","87b695b754f730dbdad3431fb68e72f9"],["/categories/投资日记/index.html","69133970936c96f6e1656fa07b6d5716"],["/categories/数据分析/index.html","bf4da5b14b0707480d3ac004cb311c8b"],["/categories/翻译/index.html","86add18521e96050abee99b6994629a1"],["/categories/英语/index.html","e5b7b51a7dee216167bf7820386e5c18"],["/categories/英语/page/2/index.html","911170356c99efebbb9e82fc5808e89a"],["/categories/计算机/Python/index.html","6d87c6b137c849e025e9fc64626bcd0c"],["/categories/计算机/index.html","4b93f387323f2f4f1080019f4a776a67"],["/categories/计算机/page/2/index.html","52573a48c49de6060b1600566c557193"],["/categories/计算机/工具/index.html","b1739f9803ef4a368aaa9a1ae3d183f3"],["/categories/读书笔记/index.html","170f77a6932c515bf2e54173b981d277"],["/categories/读书笔记/page/2/index.html","19aa7d7e26736f64c8ced608c42462bc"],["/categories/转载/index.html","8637599a324ba79dd454bfd5f66413e0"],["/categories/转载/page/2/index.html","c6d0178353bfa4cc44765a209fc0ebf7"],["/categories/随笔/index.html","6a347734805bd7ab08131e6154c8990e"],["/categories/随笔/page/2/index.html","742e090bef177671d92133169a118014"],["/categories/随笔/page/3/index.html","d768d8838c5b4ebdcfb1cc0bc9d6a05a"],["/css/style.css","7e8200e6a0a650a4a55a4b1e7d6961c7"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","c1657497130ddf18875c382dd04379f7"],["/history/index.html","99d79249808f50957500e99d3de31c4e"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","1b281aa00f8a2bacc2557bd834bd7919"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","9c7d434b457b5f0950a33c97fcf4642f"],["/page/10/index.html","7edeee84757745877d15b9afc1061f7e"],["/page/11/index.html","121975df6f1a84eb2eadc6a29ceb4ee3"],["/page/12/index.html","724f1d3d966e1c4de5f65d5876644d0a"],["/page/2/index.html","26520419e77a4c281b4e850e248a23b4"],["/page/3/index.html","f0c0de553e1fc4fd1b199e0cbc39b0c8"],["/page/4/index.html","24552fc16739f315ecc68abbe1d884ae"],["/page/5/index.html","2f3f9ec5c409f70d2004ce65147295e0"],["/page/6/index.html","202555f0beed92a3b2aea4b786e34231"],["/page/7/index.html","2595e64074847e6de96afdc4e766282d"],["/page/8/index.html","7c234c949e482aef0816859c51689070"],["/page/9/index.html","fa69a925531a4690dfbf77db4c398422"],["/photos/index.html","8ab1d5f33e52686c6b92b2b1fd10aafd"],["/pictures/index.html","6fce589fb3a4a31ae21e30f94ea254d1"],["/recommend/index.html","2a645a4b56a125905b9df8f25d87ad6f"],["/sw-register.js","6cb3b93d97be77d10f7ab65fde62d6d3"],["/tags/git/index.html","6ff081bf92235a4e19010d6fb57ee582"],["/tags/hexo/index.html","f5a6c6c77f37dcedf66bb2c3c4b009cb"],["/tags/index.html","f04b0ad21838ae94742ce8fb91e3ccd5"],["/tags/中医/index.html","619a84a0d97d94d268fd9f1d26e33070"],["/tags/习惯/index.html","1d766568bbb8b8ca16771d4ac9a14451"],["/tags/休息/index.html","44cfd63e92b95dc2eaef30db7d9432ec"],["/tags/健康/index.html","d86d696c10abb27238eaa22e2acc947f"],["/tags/公式/index.html","a2e428fe9c310435f5fff9416511c462"],["/tags/写作/index.html","73130e2cf37cfa1b5f5b12b5acd4289c"],["/tags/区块链/index.html","ea09c7568da1c123a79913c4106a2c4f"],["/tags/医学/index.html","221f1fb90ad8503b9f2f103bd14353bd"],["/tags/原著阅读记录/index.html","6b94128b1e57faeba9520d60a54b5233"],["/tags/反思/index.html","ffe1967d35fe06e30943276e71cd3cc2"],["/tags/同学/index.html","dbc36fcf05829f86f318bc8baa23ebb9"],["/tags/听力/index.html","607ac9707c6048db7a899ac6c5324c92"],["/tags/处事/index.html","72218af327c0ad2c2050846c4f371f81"],["/tags/如何致富/index.html","e0ba3d6e6e4900f348d9c1dc74490981"],["/tags/婚姻/index.html","dfbfb626a73b12df320c59bb31e85bd7"],["/tags/学习/index.html","fddce161efc7b15bf04c1d2ce970312e"],["/tags/安全/index.html","39c4dcf7899ddf885cdf5c21e3ca9bb7"],["/tags/幼年/index.html","8c68d63bf4b157d3d7d66a40f2a73a03"],["/tags/幼年/page/2/index.html","d8577821586107e884f46d82dbda780b"],["/tags/微信/index.html","6e5576c878e1f69e8ff526f7e26d28ee"],["/tags/心理学/index.html","4175a1244d14accce66c4590837f48b0"],["/tags/思维/index.html","a1ae777a2e41d3d2ebe5a6697706b51d"],["/tags/情绪/index.html","f53ec00221839c96850664e2d5a9679f"],["/tags/成本/index.html","741c7e40c5e060277652f2c5ba236725"],["/tags/手机/index.html","c1222920c3bf557337906c0924f0f9c7"],["/tags/搜索/index.html","14038c65ebd183380b730e221201fec0"],["/tags/效率/index.html","fea926381657f162352bc8dacb0ee370"],["/tags/数学/index.html","62cdc7522953ed6f1b2a6379fce0645d"],["/tags/数据处理/index.html","70485727f5098c5a9cd4a29471d5e571"],["/tags/文学/index.html","e1a70340899ea46d0fdf9d07297f6f64"],["/tags/方法/index.html","1e47a7b3f8bb22475e5eef5685ad2f6d"],["/tags/旅行/index.html","b6b146dd87810943638ab475c75279e9"],["/tags/日记/index.html","51d9923fd00659557ec8a1815ba43be0"],["/tags/时间管理/index.html","3ea5c8475056f1f7f4d0af2e40fc3d10"],["/tags/智商税/index.html","3b555f24a25f19bda152a90379f702d2"],["/tags/概率/index.html","ac683291f0a6958adc0758e06529b2ec"],["/tags/演讲/index.html","4b7e55990964fc69689c5eaef10c9499"],["/tags/爱情/index.html","936e38d2745e99ddc5e587fd0e38e198"],["/tags/生活/index.html","f07fe23435630b9802129c29459ef5fc"],["/tags/生活/page/2/index.html","48673c9de451ca8a1f75739b00b01ef0"],["/tags/睡眠/index.html","4fce28e75b3e6c1dde6c0ab71ef8888b"],["/tags/科普/index.html","eec5fffd2a2a390ab6e235fad133228f"],["/tags/精力管理/index.html","10da4f53fb1b1246cb5c27913a7abb10"],["/tags/精神生活/index.html","d74a276b4f407ecac135857e3d369667"],["/tags/经济学/index.html","e4b05b7e18d9e1b457c3b9b985bbf604"],["/tags/自律/index.html","a4f3f6239186debe0ab0534b788c8f75"],["/tags/观念/index.html","2149fb0d48fe9050623f36722eb80731"],["/tags/解决问题/index.html","4d68d73a6179417e242ddfaed0ace489"],["/tags/解释/index.html","7af4aff82f36fbb950eed96ed35be748"],["/tags/记忆/index.html","0e9a04615401c465572cad7564bbf109"],["/tags/诗/index.html","134c7374fa037b64f48c075b67fe1c58"],["/tags/财富/index.html","4cf15bde6eed80b4dd133ba2fa071871"],["/tags/阅读/index.html","5dec1ea4afa8de2a8c486ff3c8a1cd1c"],["/tags/阅读/page/2/index.html","fd3b898e544d5df97a6f90dcc76ab62e"],["/tags/隐私/index.html","b6f46a0577b383e4e0e969eff82e193c"],["/tags/项目/index.html","cb4dd8bf2201b9315b87bd6cb40dd3f3"],["/tags/题目/index.html","68746b6b45326008a03e1cc419b3d758"],["/tags/饮食/index.html","c3f3b7288ea4693284a854f66f2e5ced"],["/tools/index.html","813f71b6b59cdbb3eebf224a9b8eb930"],["/works/index.html","956c4702f6f5502f95ce5c11eabf22cf"],["/works/item1/index.html","653963223acb44dfe275fafa22494ded"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
