/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9ce7ab999ba186c269db683f9be39c99"],["/about/index.html","82797a12586368dc94fadae2b7865a7f"],["/archives/2013/11/index.html","c0e8162799562bfc724ca7015d9f7ae9"],["/archives/2013/index.html","b9919f3dd1bbfa1b59e5893358c37439"],["/archives/2014/01/index.html","7919661af23db46c8799c99c8cf99ac6"],["/archives/2014/02/index.html","d0fa0c4b95f3244239ea93edf57137e9"],["/archives/2014/index.html","e3d04046118776af3f697c78c335573b"],["/archives/2016/01/index.html","37ec47d13d8cb410df6b760973cd6489"],["/archives/2016/06/index.html","a40c51402161f5aa6ce0d6e7eb6db4ff"],["/archives/2016/07/index.html","9cd77cb5a46ddb8d9bb66aa9340d4e5e"],["/archives/2016/09/index.html","d708c451a0cbdc7fb6c1ba0198115b9f"],["/archives/2016/11/index.html","50eafc13337b341a57216b1ff1f735e8"],["/archives/2016/index.html","8f53b0b4f8c6e77832a93879cd7f90dd"],["/archives/2016/page/2/index.html","a6d82da1260653ac88654a58d4fa6be1"],["/archives/2017/05/index.html","755db21232e0d629bd263edfed4de7db"],["/archives/2017/06/index.html","5c421112199dc99a5eb42347dd2865c0"],["/archives/2017/07/index.html","412e71c7fe1d0a34bbbd454ea4f1b462"],["/archives/2017/11/index.html","ab1dd49191c4e60838dbb56183faa2b5"],["/archives/2017/12/index.html","8bad43b018d9f66d73ae8138f391c46f"],["/archives/2017/index.html","4cec5d4ee45b48ec4899e401584d48ab"],["/archives/2017/page/2/index.html","bb3c595bb8878ced09e1c94a57edf2ab"],["/archives/2018/03/index.html","cee89d90d84654901bdd69c716447cec"],["/archives/2018/06/index.html","f92eb316c2500d3e09642e68b1f25bd1"],["/archives/2018/07/index.html","59e2e289eaf9723db5ba810207420ead"],["/archives/2018/08/index.html","ec72cbbdc17bcfad341c21158cebcded"],["/archives/2018/09/index.html","ae21c839fcc8aca030a7e59c43b336d6"],["/archives/2018/10/index.html","890378447756ed5280dade9523d8d85b"],["/archives/2018/11/index.html","f04be306b16a1d92a587237976e57a9d"],["/archives/2018/index.html","2f041ce0f55aea4d60bac46021da575f"],["/archives/2018/page/2/index.html","422ed92769701e763eb5051abd270835"],["/archives/2018/page/3/index.html","d60f5f00a7b0f6b9e4dce36b04c01387"],["/archives/2019/04/index.html","31bc17042bf8c35feaf6fdb66923f7c5"],["/archives/2019/05/index.html","fcbdf53f6c936045d91c817fafe77ed5"],["/archives/2019/08/index.html","421959615b28d25556e76f974353f78d"],["/archives/2019/09/index.html","3a6a24343402c6c0ce5fc9de751cc2ef"],["/archives/2019/12/index.html","ebbb21750209500367e1660790ba9a34"],["/archives/2019/index.html","12d25411ab4c2eed8ab8e38f24901643"],["/archives/2019/page/2/index.html","738992c89ea1630f4d90a22e3ddc9e4f"],["/archives/2020/05/index.html","1b0835a50b88694a7337a581caf8aff3"],["/archives/2020/06/index.html","270a389177487e69f644c5d7e145df3b"],["/archives/2020/07/index.html","97184ff8c160426c589b374d168d753c"],["/archives/2020/08/index.html","8d93979942a772db6d537ada113b5c96"],["/archives/2020/08/page/2/index.html","253310d4080d88aeb310700cde7b3f62"],["/archives/2020/08/page/3/index.html","029d8c54cc64082fd477353a788e3080"],["/archives/2020/09/index.html","b6c0687cc7224c4f4c8b5a098d7d9e37"],["/archives/2020/10/index.html","186e4167d9e7fd7858cef58101c192e8"],["/archives/2020/index.html","7bd1ecdab025802d7f1eb9af23e9d484"],["/archives/2020/page/2/index.html","f4795a15acf6b209d955b40bda4b207a"],["/archives/2020/page/3/index.html","8141072c3641e8d1e1cbe2cbf8f194b9"],["/archives/2020/page/4/index.html","ad6e9ce2802a584872edfb3ba611f815"],["/archives/2020/page/5/index.html","24ebc0e595f40b105b936426bfbf32d3"],["/archives/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/10/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/11/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/12/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/2/index.html","358c2cdc4c5324fca0f976b44bdb0c81"],["/archives/page/3/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/4/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/5/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/6/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/7/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/8/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/archives/page/9/index.html","8e1c31dbae95c8d7fdbe92e62bd84d67"],["/article/11fb9e73.html","4c90e4ee5eb87093a5437b8a65f5b419"],["/article/136fa9d8.html","3b86bbf8052bae7f486926bf2139dc99"],["/article/19718e8e.html","5d757aa0573eeb78ae966a619f7407cc"],["/article/1b342210.html","ad17c7a84228f0e65922382c7f1aa54f"],["/article/1eb9d23a.html","9fd824c85b12b58564149e3ad97412dc"],["/article/228c75d3.html","bdc35a15f8d90e92b8dd797ce47d62a2"],["/article/23494478.html","600a2b842eb7ccd23c7d4698c3e9b039"],["/article/2b3aedce.html","1647f8fed1f1cefc7f070ed9bd0b14e6"],["/article/2c2925e.html","9da5c3cf81d09080204219818db22347"],["/article/2e7c5c98.html","b50902d12cb818544e3b22c79d502475"],["/article/3229fb3a.html","e757dfc5ae0c12891bccde55a668b7d0"],["/article/33554c5b.html","80a01a032f3f4f12de8a96c523e31a29"],["/article/35a56429.html","f0e664c591f8264e3ac4e9a8ee09efcf"],["/article/3aa91634.html","5e00bb5c12319bb949dfc9bf04e4527b"],["/article/4562b0e.html","fedc13b7e617843faca40b72df6672a1"],["/article/481247b8.html","9c2b08a6acbadc35b63f2cb7bd099949"],["/article/4c3380c8.html","ab1a0336b2eb83e03725d8994f6eff71"],["/article/4f8b07a3.html","0aa5b435aa64a28fced724448f14df19"],["/article/534bc28c.html","9026556c4dd408d2db13545cc548e8c8"],["/article/5692b57c.html","a45d05c19035cf828bf09a3f28589248"],["/article/5b152571.html","34069b69d55016fac0ce0ad78becc4dd"],["/article/5ca1802e.html","b05764ed2b1d1a7e8c517ccc71affc56"],["/article/5f339f98.html","8ec77cfd1d623bfbd152cdc6e8a7cb6c"],["/article/64c8bce8.html","d1015e45ac1c8b257947d73c226229d1"],["/article/6cb8c766.html","a4124586e66ef08f7373860b7f2e11cb"],["/article/6faab9c6.html","2c1f4c13960bde213548739bc8f4b37a"],["/article/717c02c4.html","9646d74ca3f448e05786f6606ae02e67"],["/article/738c5196.html","8cf3c92300ae596cbfddfff4757b113b"],["/article/73ba8b39.html","c408963b3e70aee9f375fc1fac8bffca"],["/article/76ff70b5.html","e80afb698af34bf124f04a6524b903ba"],["/article/7a5991e.html","89a0340650f493e18c138ecd9bf32869"],["/article/7d3004c4.html","4e0b8fb697e1ccd1e85965abb84e95da"],["/article/83e42b42.html","37fea440e4cce1b191c7257790105b60"],["/article/85b1246.html","cf38d8f9744da81e16cfeb320125da81"],["/article/8c8ac5bf.html","83ae387976ed28560023799b7ae26f83"],["/article/8e989db0.html","ade59e77baeec112648daeb1e3b144ba"],["/article/90d5d393.html","2f597ae04f45b0545963ffefe74990f4"],["/article/91a5995.html","bc1f407d6632b3e6852ed304e1ee61f8"],["/article/940b4a8c.html","a1354dfd761e4df2c2c6c3367cba38f8"],["/article/a0bf6b98.html","ced498e80c112c85b5b315f283436f8d"],["/article/a264b8fd.html","11b9ff15ee80a7e6f4b3c9b7b48552c8"],["/article/b318b8fe.html","79f9e55a0fe2a2c84c6137d3c8da1a58"],["/article/b73c5547.html","3c741850ac29406d0ffdedc7fc8b9ad1"],["/article/bee0f638.html","6902a7ccc46f0b2e094fd2b6198c8bcc"],["/article/c6bff206.html","2fd5de7a483e47121966b8a472a9d7f1"],["/article/c7063ec3.html","4ebc3b136fb52c47dc4e3a2b093cfd19"],["/article/ca8b4515.html","f93bea3af246b1e702ac2340c9282d48"],["/article/cbe565ff.html","4111ac2fe4db8b5ac60b0812b1970781"],["/article/ce3b3e2.html","7e575b7143814c4265250e1824772bce"],["/article/cf8c0bbe.html","caba55e604d04fb1a33e9f9a6d706816"],["/article/d60bbbcf.html","89aef47ede0f8bb52e63bd886bc874af"],["/article/da9af306.html","0699d1e3d8a6acc161310eaf7618d9a1"],["/article/e20a0ac4.html","bc4568e17d73a9c48fbb9e45a585e7f7"],["/article/ef9ebd24.html","6bc305389477acc154c92af8be5a9e4b"],["/article/f01b987b.html","089ee51ae4ad5017c11be67ea1f1b171"],["/article/f8d1ff2d.html","b2d74d48d6a9fc7f0c5875ab4e474fa1"],["/article/f96ab8b3.html","a22f3d8b39bfb37fa0b686eff02c3caf"],["/article/fd541bb0.html","a4991dab532c621906ade90134104370"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blogger_said/index.html","28bf52af7b055c839737438b579f2177"],["/books/index.html","79865a564b4058e06f3c64f169c15014"],["/categories/index.html","c47dec77a3f74fcc93ac5e0b010798fa"],["/categories/价值观/index.html","70c2b285b2c6b5347dc17a043f44c46d"],["/categories/健康/index.html","39cea53c565a478b94ab8ded88641666"],["/categories/思维模型/index.html","4e3d384d3d2dacf6719ac5c17af44b30"],["/categories/数据分析/index.html","842abbd8c6d3cfb6425f9316d2c03ec2"],["/categories/翻译/index.html","ab3930a6aa8439831288c574e3befc2b"],["/categories/英语/index.html","3d3ad1b594d268f33d875a11c39a36db"],["/categories/英语/page/2/index.html","2df68cee4a69d161c68b1d5905817a9c"],["/categories/计算机/Python/index.html","1747aeafdd221d714ea1e0fe01460243"],["/categories/计算机/index.html","38834832278018f95a8c8fe3848bdd1d"],["/categories/计算机/page/2/index.html","d94bdd963f42581c41498188d5001624"],["/categories/计算机/工具/index.html","363f60396f31b812fe00fa0778c5a104"],["/categories/读书笔记/index.html","70337bf33d6aec380f066b4030b5a9b9"],["/categories/读书笔记/page/2/index.html","f8ca4e34713c4fc1695c79d70cd74a8c"],["/categories/转载/index.html","e6de72ab7f825ea852867822aa3961f3"],["/categories/转载/page/2/index.html","174df9a731d2137b5dd3c1e9d0becd9b"],["/categories/随笔/index.html","477459f070a8a4c0ddb5e9d47096ea47"],["/categories/随笔/page/2/index.html","e933b8b2ac01abc75eaa4695e29c975e"],["/categories/随笔/page/3/index.html","0a0831b62bae92358dd790adfe84bb20"],["/css/style.css","fda95d56394656f88786055d26f4da0f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","e0143c7109c258faa82b9b280fedc731"],["/gallery/index.html","578870867f50354d0f6143d7b1929fc7"],["/history/index.html","e2f252fc5ad2e2db95bd96d2934738f4"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","eef279f50e336cf92fa398940fae6a0a"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","3a77e94ebf648680ec4f5a3e23a126f7"],["/page/10/index.html","51be0b03a947783b40efcfb1720ad5f3"],["/page/11/index.html","fe49cef58efac63200bc5e456a1c7b77"],["/page/12/index.html","18b23459cc00ba18437ae9e0744832c2"],["/page/2/index.html","f063c9634188a9b71256b9ba9ce208a6"],["/page/3/index.html","7d77453efa9dae50f0db2afacd50acbb"],["/page/4/index.html","2abee48ca7cbcdc9796d21e1fedefeb7"],["/page/5/index.html","75842bde6035bb64b61c3245e220acb7"],["/page/6/index.html","27adae2fdd925d94f517ca535f63cfca"],["/page/7/index.html","be445c018a49f3e2dc360bb84d70164c"],["/page/8/index.html","f8c86921a1947dabb44fa34caa7d027b"],["/page/9/index.html","38d6312c74bcc48fd682ed0c9705d950"],["/pictures/index.html","577a569c5729c211bc1e77c0e30c55f7"],["/recommend/index.html","3bbabd06c85b318493e7d173a3c9fe3f"],["/sing/index.html","a0ea513dc734bacb84c34259e8763595"],["/sw-register.js","bd51777c4becbf444d810783796900de"],["/tags/git/index.html","dda61240dfc1e4f786def2b9cab25baf"],["/tags/hexo/index.html","8db47618466b210bc2fbac78ed44f30e"],["/tags/index.html","af4a48b7c40a155ecf3dc81987d8e014"],["/tags/中医/index.html","c14e0107c7088b21222925e1531367ea"],["/tags/习惯/index.html","dfb49e2a1ca883709a216af348fc26c3"],["/tags/休息/index.html","2b8451a84bd47195655ba3369b67a07c"],["/tags/健康/index.html","e90292c8f2a37b7e1746aae1915a39b7"],["/tags/公式/index.html","85254248ac1c3f196948b2e6dd83970e"],["/tags/写作/index.html","641f80006ba556be4e49663c38ea606b"],["/tags/区块链/index.html","d05c67a455b7c9b84bce263b78d77d61"],["/tags/医学/index.html","6499de6632e0c4683728d1496e9ee9f0"],["/tags/原著阅读记录/index.html","ca8f76ee57a1941e05d8e6484fa0f23f"],["/tags/反思/index.html","123fb48802135966a9de3d493b99fd8d"],["/tags/同学/index.html","284a36a52e84a985e5d9f28e6c691479"],["/tags/听力/index.html","81f6e2456d49441fc414c18a4fe596d1"],["/tags/处事/index.html","96516f50ed2ba6efca77a890cf9cde4a"],["/tags/如何致富/index.html","c090bd2fa9d02e70ea516e313f448041"],["/tags/婚姻/index.html","1ca2776deaa485623822edfdd5e50250"],["/tags/学习/index.html","2bf2029e43816472dab02e10f65ed2de"],["/tags/安全/index.html","b09ac446ed9d16158137f670a1e3354a"],["/tags/幼年/index.html","53a08d3c92529702e430a3e1462ca90c"],["/tags/幼年/page/2/index.html","8537d1d6b4e0596d89f2a2f84bcf4090"],["/tags/微信/index.html","e49c865665a521e0fda7ddacfe97fbd6"],["/tags/心理学/index.html","d7da84b6c1751953c2a36b9b7e5ac56a"],["/tags/思维/index.html","fab7e9394afbafc6cb308d76ab578b83"],["/tags/情绪/index.html","cc37bf8107f6df1f0ddee481dc0e0d20"],["/tags/成本/index.html","f88e279025ea5d20ce1b2146bf52710f"],["/tags/手机/index.html","a949c7109967964d05bac50de873f301"],["/tags/搜索/index.html","4cf90869dcc6db41d42ba74de357caa3"],["/tags/效率/index.html","3fd460105dda3d57128cb6ced538a28a"],["/tags/数学/index.html","207423dde102ee16e791c6f4ea5834ce"],["/tags/数据处理/index.html","fa2f04f4cb394258fa2f37d1f7b15dad"],["/tags/文学/index.html","da278757e1d7fc0823f1c38fc3a6b457"],["/tags/方法/index.html","4dc85800f3d77c318a17f954d19c01c0"],["/tags/方法/page/2/index.html","fc1d3318cc321af6c6774671add48a9c"],["/tags/旅行/index.html","85506d8028e77f38e2ba07148ae8273a"],["/tags/时间管理/index.html","5b6cd4c02c474553b6ed16c21f2918e2"],["/tags/智商税/index.html","b0649e0903b11c9a017779f6e65444f4"],["/tags/概率/index.html","4f0a396a43a6536d7028e4c069a5b597"],["/tags/演讲/index.html","5aa44fe960eda95fbab21dd45639a891"],["/tags/爱情/index.html","0b51122103717da8af60c2e81d515916"],["/tags/生活/index.html","3f15fd89ef3fa8f436e362f54f4d8696"],["/tags/生活/page/2/index.html","a982016851167ba41a1113ff5f5afc65"],["/tags/睡眠/index.html","36c6245bcdfd0c57c35b10958fb76cf9"],["/tags/科普/index.html","ef2bbc4977db0487a56d132aebee4545"],["/tags/精力管理/index.html","2294a6a0ca7cd0106cb61868ecad50cb"],["/tags/精神生活/index.html","b22f630e04895b249c5fb55ab75e97bf"],["/tags/经济学/index.html","2fab1d841740993da9db17ced4e962e1"],["/tags/自律/index.html","80ec57f0bbafd2992bfc5afc8442b8c1"],["/tags/观念/index.html","01354d706cd618a0caff48c51401ad33"],["/tags/解决问题/index.html","b24af64576559bd769fe9ba2444d8d92"],["/tags/解释/index.html","c59c3b296809ce0d554b7b8cf8398c5b"],["/tags/记忆/index.html","c432d222393296d82f7fc1b1b62a7b35"],["/tags/诗/index.html","6dbb4e931126ab348c5844429938708a"],["/tags/财富/index.html","bfb0d4f41ece534e8c8c813732f756a4"],["/tags/阅读/index.html","0e8d984a3c62a71bc0e754725540efc2"],["/tags/阅读/page/2/index.html","0b7dfdfb6ac5a178ca5670062fb1cb25"],["/tags/隐私/index.html","ad515e98e57bc942c9eed72ff23ec568"],["/tags/项目/index.html","8e4bbf43b43f6235215f5e6836601b27"],["/tags/题目/index.html","bfe94c72a175c881b2000b9f96f18491"],["/tags/饮食/index.html","5f0e364bcee0eb6787daaa4afe684de1"],["/tools/index.html","5f65417bd15b9f529269faa3d8a050ab"],["/works/index.html","644c0d092cba17ed7da3002a6828568b"]];
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
