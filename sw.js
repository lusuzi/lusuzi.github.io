/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fe20df752d20febf8bd9893c8e8add86"],["/about/index.html","0193bda49145eb9705a0703b007c25aa"],["/archives/2013/11/index.html","4cea07edd60b1e9e9179f20c1eae88b4"],["/archives/2013/index.html","49ad46b82f451e44afea331b33e5aff3"],["/archives/2014/01/index.html","aab896ab9408c7e789cb68b784d504c6"],["/archives/2014/02/index.html","d771d82cc345e7de44e9940c194ee735"],["/archives/2014/index.html","41b61be0999a4fdc7acaf59015ac77e9"],["/archives/2016/01/index.html","72fcef30854342abccb1adae49a5f29a"],["/archives/2016/06/index.html","d799570d2f78dd967051757bed309a9a"],["/archives/2016/07/index.html","0a8a71a515886f1addbf19766b0cf5fa"],["/archives/2016/09/index.html","76d1cf2102a5a8295e6d732af621153b"],["/archives/2016/10/index.html","799f19bee8e9b1f5c831d3af4c1ac49f"],["/archives/2016/index.html","2d6a1ba6146e7ff639bc85ae6fb79f3a"],["/archives/2016/page/2/index.html","2d2de106d33802063c3349823d172734"],["/archives/2017/05/index.html","d2a80cd9c0f9f653144f42aab82c3d61"],["/archives/2017/06/index.html","a01e674925e285764e8dfcc6fcb55870"],["/archives/2017/07/index.html","54620b61505c6071a220b533e93a8cbb"],["/archives/2017/11/index.html","9b5771f80de391a51f1f58556e6f097b"],["/archives/2017/12/index.html","3554a9f022902e891a6fb7aaa45b39f3"],["/archives/2017/index.html","4e165780f559b61b6ff5ed28eebafa36"],["/archives/2017/page/2/index.html","0ba956db24a1c285ba1fed0abcaa6e1c"],["/archives/2018/06/index.html","042e026b31253b78d8d3adf2fe8e6f7c"],["/archives/2018/07/index.html","dbe4fd484e4cac7b1740404b392cfa44"],["/archives/2018/08/index.html","49a422508539b1c35fc2215651ad249c"],["/archives/2018/09/index.html","7191341aa64b89992d99215b108c421a"],["/archives/2018/10/index.html","e66b325fa39441dd3c76966761404c69"],["/archives/2018/11/index.html","cb8b2ebf4598bdc3adba958a35bbc4fc"],["/archives/2018/index.html","dd5696e490306238b17854b5b56729a0"],["/archives/2018/page/2/index.html","a2a25ee7311a917947a4953f6f4f7734"],["/archives/2018/page/3/index.html","887bc3f7f8965c1b1dcbacfdda723a8e"],["/archives/2019/04/index.html","a564ff718f56a4777a1f7ef1054849e4"],["/archives/2019/05/index.html","122513cd52690d9503d2b02839efa82e"],["/archives/2019/08/index.html","c46c7f1644e40cf0c5632f37b3cfecec"],["/archives/2019/12/index.html","018343091ca5631073079b076e2f7ecf"],["/archives/2019/index.html","f925dcc4ec962bf166b62377e43e475d"],["/archives/2020/06/index.html","e834658a8bac7540e00558c24bc2d906"],["/archives/2020/07/index.html","2a49a09478410e608b40334b98d307b9"],["/archives/2020/08/index.html","4341cdbd52a77ec182497ad06b9557c6"],["/archives/2020/08/page/2/index.html","dcaa7f12fe996b3520598ab6c9f1e202"],["/archives/2020/08/page/3/index.html","d18c68f82a3aa127c68deb9b9a193240"],["/archives/2020/09/index.html","a65780097e75de4d61920c3a004d306f"],["/archives/2020/index.html","eb6f43bb2aca31bcf020631fc011f2e9"],["/archives/2020/page/2/index.html","01a66f100d7bf95a6165c29803441f92"],["/archives/2020/page/3/index.html","3648b843585bb25c5aafb923a69dd6f0"],["/archives/2020/page/4/index.html","e5b1c175b1cb3cab35d7620f7fd4383b"],["/archives/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/10/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/11/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/2/index.html","774cd982f09b91338edaa92a8edd2a12"],["/archives/page/3/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/4/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/5/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/6/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/7/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/8/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/archives/page/9/index.html","cde997cca43479c5a81d56e3c3cb45de"],["/article/11fb9e73.html","01b3a276abb70067c3cc0c404811437d"],["/article/136fa9d8.html","a723f3e4b34180d2e2dc0d550e32032d"],["/article/19718e8e.html","55a48925076563b7967bd7406693828a"],["/article/1b342210.html","59a33b020a0964809bd5cecf3cd74d8d"],["/article/1eb9d23a.html","54a361e3a4d9bb2481440df5b1e27879"],["/article/228c75d3.html","2662aa0d0c2857ca4df1e15a29fa5431"],["/article/23494478.html","931a2b47938bc410412a57a4c263a703"],["/article/2b3aedce.html","7e0d0a57c114752433d8f81351e1764d"],["/article/2e7c5c98.html","23024ffd10def7b39b3dada163489b52"],["/article/3229fb3a.html","0ddafdce76d2f68e2ef9ecf6b2a9edea"],["/article/33554c5b.html","a6fd320bd7e10ebde7bf82520c6c2e51"],["/article/35a56429.html","a3ebb7a2efc59bbc2d19695bcde907c7"],["/article/4562b0e.html","45ddc5eb1fadb90804db21415582495a"],["/article/481247b8.html","ddb86cd5c553da52db8de97c6790722c"],["/article/534bc28c.html","2ca60c2164a167d42b82548e7df61ea7"],["/article/5b152571.html","d887f2e1211c16175393585a5c7f49f1"],["/article/5ca1802e.html","140a4f12168f471422d2e281112e039d"],["/article/5f339f98.html","39ed371b2ba66e8d2772a953c1f17d9c"],["/article/64c8bce8.html","1b6f2470057b553145606ccb40e6865f"],["/article/682814d2.html","32b2f0b59fc9eb16d8f2143094cf65d9"],["/article/6cb8c766.html","89a8c3f9c76d3c054e89aeb68f28e74f"],["/article/717c02c4.html","d74b0899f18c7b3315a0c4dc4058aecc"],["/article/738c5196.html","edde2cad178d8aba6e59509853a940c1"],["/article/73ba8b39.html","0d4b346af9b8f0590bf58e33ac120d01"],["/article/7a5991e.html","51320e12a6baa8e532f8dd0152e95a31"],["/article/7d3004c4.html","0d0291421a64d97ae8cf892a53134019"],["/article/83e42b42.html","0e9127bdf7c5415b7d42373294f9e21f"],["/article/8c8ac5bf.html","afb53a8a38612a74c66646added154b3"],["/article/8e989db0.html","8d9f90c17f419185e0ecebd01f6d2d87"],["/article/90d5d393.html","c04f5ff2de714de05d11bd55dbc42cc9"],["/article/91a5995.html","628c05fe5716e0a966278eef128090fb"],["/article/940b4a8c.html","ce07ee351997f2655e8c2b90ede5aa2b"],["/article/a0bf6b98.html","ca078515653dac15c8752e71ed27d7e2"],["/article/a264b8fd.html","bb6d1677ff9fa5d91799451649bd41fb"],["/article/b318b8fe.html","c771ef85b7bf851a8e90dd9e22afa308"],["/article/b73c5547.html","337b16d7b9c72583f61723e14a682666"],["/article/bee0f638.html","2fa671f86ca62da3417ce30408d60d0a"],["/article/c6bff206.html","e573c32595057ab810a4b20c027b0fc2"],["/article/c7063ec3.html","6b6a2a750dc85ff21972c87ab08557dd"],["/article/ca8b4515.html","8c8e7f0410e71f6682f7b4454f852f99"],["/article/cbe565ff.html","835c3d774f612daa2045757754f8322c"],["/article/ce3b3e2.html","fe9c0acfb79e338116aa3ea74d6fd4e2"],["/article/cf8c0bbe.html","bd0c2cda86a296b3aca9a7c8f4a0c2ee"],["/article/d60bbbcf.html","f620d1f74b7d289787e4fbed34ed020a"],["/article/d6505d8b.html","b3efcdcc32d7ab76c863e15acf656632"],["/article/da9af306.html","8b011bab15b0381ae747dd710c210c22"],["/article/e20a0ac4.html","f9d4525c60a63a97a52c68e8fc337f1e"],["/article/ef9ebd24.html","83ee960c7fd13f593d79e56dba0b6c0a"],["/article/f01b987b.html","90199690c645788114f1f1a5a67833c9"],["/article/f8d1ff2d.html","b18188f15b47d8eccd0f374f1d44106f"],["/article/fd541bb0.html","03000cf927230b64d805ee9487f95f11"],["/blogger_said/index.html","892030fe92daa1022aaaeba8a6334807"],["/books/index.html","d648c03e6c9a7b632342719653e60b9b"],["/categories/index.html","af8dfa211f003e5c357bb7d95f375096"],["/categories/价值观/index.html","fc935c6b94efdd34b51bb6602f0a22b0"],["/categories/健康/index.html","b23741112a1f76ae4aa4f3eeb3a73d77"],["/categories/投资日记/index.html","fff1ad2e87687afefe59c821336dd0dd"],["/categories/数据分析/index.html","0b4f4ba6133a88ab44509e67e7d0bc23"],["/categories/翻译/index.html","accd35878c8d52cdd75c5f536e7a63a4"],["/categories/英语/index.html","e736c99afdd2bab3795ad4129261b1a3"],["/categories/英语/page/2/index.html","7311c3fd286603a773bac08aadeb7300"],["/categories/计算机/Python/index.html","9e12b008b769004309bee6f81773119c"],["/categories/计算机/index.html","4e4eff63c61bd40cfb758647e393e999"],["/categories/计算机/工具/index.html","77cd66bdd672b9422544f31c096ba1b3"],["/categories/读书笔记/index.html","1047e573c244a7eb3d654b29e62d9625"],["/categories/读书笔记/page/2/index.html","883ec868f4919131dec128da2251ee8f"],["/categories/转载/index.html","f7912b77d21a083943f4e7ab92f2c6be"],["/categories/转载/page/2/index.html","529c9259a5cc84055483a89142401cce"],["/categories/随笔/index.html","8963dcdedebbd904657da6d6e6cd1cab"],["/categories/随笔/page/2/index.html","dfbcdc53da86ddd3620e42fa46f0ff47"],["/categories/随笔/page/3/index.html","71661e63fab68b73e64eebfd45799e87"],["/css/style.css","16a810943733ffe5933be832285f2a8c"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","5e25a978232a800685e4588ef4d14859"],["/history/index.html","4401d9593ed275bf7bb08ddfa9d70edd"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","e3a4f87ea5f5769b7e02f43b611ad36c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0068dc60c91e16dc151c596396cc050b"],["/page/10/index.html","be276e6fa550f07e26dbeb4f4d009df2"],["/page/11/index.html","579c27c57acc99a66383b375cc9e2b43"],["/page/2/index.html","dab96bf261826f7e03e1141b068bee68"],["/page/3/index.html","e5d55207e21dd8105a17a2da031a47f8"],["/page/4/index.html","01d5ccad03bdef443d9e6c870fad1ba7"],["/page/5/index.html","ae94169c91066a26068932fd919d10f7"],["/page/6/index.html","15e1f11df59b3d5bdd771cf6e1bbb762"],["/page/7/index.html","99a93e684a012653e315d0d603d5b819"],["/page/8/index.html","de6c8b6ff0c6dea4b1854197eba7aab2"],["/page/9/index.html","9ccc680bc0438f652370e05c718b2aff"],["/photos/index.html","f92a92cb0e49235749376a499136ce27"],["/pictures/index.html","5b013b7a3789ecb7796e6f050026b99b"],["/recommend/index.html","4feef2cce7a9cd106289eed63146435e"],["/sw-register.js","c89d37ada1acebb0979c8da8d4240c97"],["/tags/git/index.html","bc57861caac43c8fa628d0b88e277be1"],["/tags/hexo/index.html","dace662ae916c82725ecc0e03dce6486"],["/tags/index.html","1bb07ab384c229f8ff7af81d5607a364"],["/tags/中医/index.html","e17a718aa3f55fabc1cc4d5f36e4c274"],["/tags/习惯/index.html","eb26e7d798b576d6e793a632c394d761"],["/tags/休息/index.html","59a75e7baac238db9a064a932abcba6b"],["/tags/健康/index.html","c2c34a4925dfe87456860bdb6e887f1e"],["/tags/公式/index.html","0e218b4334ad1f86bfdb50fc010d92c0"],["/tags/写作/index.html","109edf6c126411737ba430d00c611791"],["/tags/区块链/index.html","495150f0242ee5999045895f151a77ee"],["/tags/医学/index.html","0646bad1adcf44d3b7a478f4973e199e"],["/tags/原著阅读记录/index.html","86e695bff13c2cac514999068f4980e7"],["/tags/反思/index.html","af843b4239b75f34e26c9f086d366c37"],["/tags/同学/index.html","297819c73f9d16cfca7bb569264a1a2a"],["/tags/听力/index.html","8207203b7e5bc308325bcf3e64150da7"],["/tags/处事/index.html","d4acad28ccfd16ed1a7fdead8b51e142"],["/tags/如何致富/index.html","36813e1096794bcd1abd34f626daae79"],["/tags/婚姻/index.html","13e1874ae990dddfe9977a535ff8de22"],["/tags/学习/index.html","5b5abdfcde20a72b4c62627ac156e33f"],["/tags/安全/index.html","a5b9889afdbb7039ee2280f59cebbe91"],["/tags/幼年/index.html","668faee9776f5eeb38a806e670ace130"],["/tags/幼年/page/2/index.html","943d219535ee10c4695b10642f6538a3"],["/tags/微信/index.html","0bf0d3447d2cafd20337a72868f037a9"],["/tags/心理学/index.html","7bb5f8629e4812bed6766e46a418fe0c"],["/tags/思维/index.html","675fc9f42b7d6a8cce1e2049fb82152d"],["/tags/情绪/index.html","aac0888fb47f2d3b443cc63d8582e884"],["/tags/成本/index.html","e12e1615a832442c8d3f17c2a2520b0b"],["/tags/手机/index.html","e4569d29a4b8aca4edb642dd4e83d036"],["/tags/搜索/index.html","c0528f94da4cc30ea969d31810f8f70f"],["/tags/效率/index.html","f257c949136489efb70d0733e17aefce"],["/tags/数学/index.html","7b5df562810cc5201906ac347ec8bb8a"],["/tags/数据处理/index.html","bf03aeeb7943680d354e079d31f03889"],["/tags/文学/index.html","8250ed2a4e3dc628357495ac58171c13"],["/tags/方法/index.html","c4c963a49f371055d4a0055e6959bd3e"],["/tags/旅行/index.html","9b2ec94c207f2a4f43d4a9515c71a78b"],["/tags/日记/index.html","d9553aa8dd45163a402624a273980627"],["/tags/时间管理/index.html","1f72e9b5fae91acf25b00afeffc52a56"],["/tags/智商税/index.html","61cfd3eabb0e9d2edf1965e6178889ee"],["/tags/演讲/index.html","1260202637f459e15326eea4e411657d"],["/tags/爱情/index.html","15aad333613002f1be85b7896e84b9be"],["/tags/生活/index.html","d60de3df02794ec94aac294f6ea8aa74"],["/tags/睡眠/index.html","50c516b755a7beb971c45219504fb7fc"],["/tags/科普/index.html","a07778d6b6ac013c9ee4e74ab924c3b0"],["/tags/精力管理/index.html","557b7bbe8a3e2f3f5cec3825aa1455a8"],["/tags/精神生活/index.html","9419fa52108fc26f84e28b924566af13"],["/tags/经济学/index.html","fb332fe6a02fd0022b471f68f9e44326"],["/tags/自律/index.html","3e844a9bc0c3c61b089028dc3819abbe"],["/tags/观念/index.html","b9dca0d74b0da2a07764af657ad068bd"],["/tags/解决问题/index.html","5537adfd408a234a5f5d191ac05bd989"],["/tags/记忆/index.html","60178b2bd5a6b618d9fb8bc884180b6e"],["/tags/诗/index.html","68c8c7b69db165e4e98820c639d1c12d"],["/tags/财富/index.html","b47664b022967d7c71d2aaf92aeb66ae"],["/tags/阅读/index.html","0c9768c541878729b0e37bbe8864d354"],["/tags/阅读/page/2/index.html","0fbc0c45a938ce0aeb494fe2afe04c6b"],["/tags/隐私/index.html","904cc38ec2378f0477d1a6a56a08a513"],["/tags/饮食/index.html","9870f8eef104fc91e2dfbd624818a429"],["/tools/index.html","daae39722f4de26841e461ac39c4907e"],["/works/index.html","5008824f02be5ca6cd9d62fc7e7485f3"],["/works/item1/index.html","2527483e19625400386ddd5083be7eae"]];
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
