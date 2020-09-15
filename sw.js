/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6df30004fcd859d8f9b8aab2fbfca71b"],["/about/index.html","da4e981823440e4a8975904f55782592"],["/archives/2013/11/index.html","f63f9e79000028f9c3d8c56b54589c2d"],["/archives/2013/index.html","60e77c493445b300edeb22394e43a11d"],["/archives/2014/01/index.html","0debda375cd837527b34a1da80727699"],["/archives/2014/02/index.html","6bffeccd641e026149d81d1e015b4f2d"],["/archives/2014/index.html","aea3368d25881c4b29d12956964cb8e3"],["/archives/2016/01/index.html","47c47e38711f08506919d909b650fc37"],["/archives/2016/06/index.html","9d181a4c3d8f22b23e597fd68a13ac5a"],["/archives/2016/07/index.html","00eeb2d994f1cc68ef0b92733ff226cd"],["/archives/2016/09/index.html","494f0a2bcf0c013b1af376dd2cad88be"],["/archives/2016/10/index.html","7c8a43dfdf6e58478a3cde37096a72af"],["/archives/2016/index.html","2ca27aecd3bc8a0f4e49914b3f1836a4"],["/archives/2017/05/index.html","49280a3e243a9b0851b3d5e789597dd1"],["/archives/2017/06/index.html","e80154499e440726007024397843f72e"],["/archives/2017/07/index.html","57ed3ffbe094b82ef42e603c7d63feed"],["/archives/2017/11/index.html","e8db9fa8871a048f6dc7a77d2179c4bc"],["/archives/2017/12/index.html","73473186afa583cedf4a9e2767315429"],["/archives/2017/index.html","030c3283613774dec5d2d34374c21bb5"],["/archives/2017/page/2/index.html","b9a3bfec4dd4da07cfb11370e93db710"],["/archives/2018/06/index.html","835ee82c9182c910dc569eef9156f1a9"],["/archives/2018/07/index.html","eb0994534e99d798ad0515ac71ba8d40"],["/archives/2018/08/index.html","331d719929d76eb014eef41f90f21920"],["/archives/2018/09/index.html","292b7099a8bb8c07ccd68fe478678b0a"],["/archives/2018/10/index.html","c3fcc5ed5301452f6ce38fe8af63f289"],["/archives/2018/11/index.html","770172651097c564feb81371f263fe54"],["/archives/2018/index.html","6ca69dc27984c192a46b0e456789c75c"],["/archives/2018/page/2/index.html","cc782652d8e55e056ef8dd993aac8ced"],["/archives/2018/page/3/index.html","704ea0f27b6dbcf10c727eab585050dc"],["/archives/2019/04/index.html","4c209303fe8f2bebcd560a9070e7fa28"],["/archives/2019/05/index.html","48b28f780e705e9fd614284f602d2487"],["/archives/2019/08/index.html","54990b818233842d2d2f903f6cf7743f"],["/archives/2019/12/index.html","8bb86f69a158b933f1443398c60fed3a"],["/archives/2019/index.html","db92dba34b22aa4c67e17ab743b0e27a"],["/archives/2020/06/index.html","2a9a5a1f1ef0ea5095ae978285dfe0ff"],["/archives/2020/07/index.html","4b94943ed163b4844c16eded7a9ed2cb"],["/archives/2020/08/index.html","81f7f676a2123dfa927496f830673d3e"],["/archives/2020/08/page/2/index.html","1970404bc1b66afe0b9e7c1fe9db8fe5"],["/archives/2020/08/page/3/index.html","f20688ada43e02bd1ee741f05acd7a53"],["/archives/2020/09/index.html","c2a28a15903ef3c46fdcbc75b5179aeb"],["/archives/2020/index.html","3e95f375219b33f05846cead3cbb2ff6"],["/archives/2020/page/2/index.html","ef68e3101d4e0009fa4e437bc09ff0a2"],["/archives/2020/page/3/index.html","3bcc7812b875b53a151e06b5326dcf20"],["/archives/2020/page/4/index.html","91d36856a37092314a7f3ace6eb9bb15"],["/archives/index.html","35e138ee7a6598990f3b8922f9096c2a"],["/archives/page/10/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/2/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/3/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/4/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/5/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/6/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/7/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/8/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/archives/page/9/index.html","a38b7387d6a6437f93f994e6697bfcd8"],["/article/11fb9e73.html","da59551b4bac05236f565b653d1ccde5"],["/article/136fa9d8.html","c356c1dfad8c75af68ea049cd35cd2f4"],["/article/19718e8e.html","38a20061959cd4320069368b98cbc6ea"],["/article/1b342210.html","feca8e5fdb6ca3409fb6a21c496fab87"],["/article/1eb9d23a.html","3054ae3d76cabb291f0562a4cb114a9a"],["/article/228c75d3.html","2cac851ebb7eadca3f2db3771f75afd2"],["/article/23494478.html","8d49825ae9dfbf3d05e7f71f83759c89"],["/article/2b3aedce.html","7af88661b1e3e8e1a35023e145f98fca"],["/article/2e7c5c98.html","a93ade24714b31d49f70429f8adacddc"],["/article/3229fb3a.html","a951921e1c77c4340638b7d83571f702"],["/article/33554c5b.html","5bc04c7580209d649d97e34484ec2c8c"],["/article/35a56429.html","5a1582cc39aa99f97d71a4464bbb1e0b"],["/article/4562b0e.html","d043694b20eb07e81fd78295fc820f43"],["/article/481247b8.html","243cbb1b5d818f62655157fa7e820a55"],["/article/534bc28c.html","544b4a2bf9c81e03633d35316672316d"],["/article/5b152571.html","0996a3519bef450933d95949f897a9bf"],["/article/5ca1802e.html","5beb629b26e5a8948037a90a0078a4f3"],["/article/5f339f98.html","08e851863a2de1cd9e58d35f6bae4aac"],["/article/64c8bce8.html","7a46b738dbfac45aa98dcc6ef2a9baa8"],["/article/682814d2.html","6a4bc62a21f7eaef02a6e93e0c74af9a"],["/article/717c02c4.html","69b9e32742b9308ca848dd6f9185b250"],["/article/738c5196.html","dec97486b6c436cc1f91b52a30183712"],["/article/73ba8b39.html","a17d0ad1b55e0492d91c92e08034bc59"],["/article/7a5991e.html","c5121f0ecb056b29c6eac1bfb579aa79"],["/article/7d3004c4.html","94853caf4c532b677cd56dea1df5802b"],["/article/83e42b42.html","35d30b93c34ced9e6af746a70f601c11"],["/article/8c8ac5bf.html","40cfedfdbc2cfaedbdc003abec4cdd88"],["/article/8e989db0.html","3121ed41d83472e3423051918fe7a4c6"],["/article/90d5d393.html","87dd90bdde127969ae368dcbe1ebf0c4"],["/article/91a5995.html","54020109f2e971d9e002342f670a24f5"],["/article/940b4a8c.html","e9e30b29e190994afd7b3268d1bd2b27"],["/article/a0bf6b98.html","49e31e55210d3c7034e553a02dfe897c"],["/article/a264b8fd.html","0b81863e432a0f53aaad2a1df11a5060"],["/article/b318b8fe.html","a29f2a577a08a4b85c16394718b45c0c"],["/article/b73c5547.html","eb3556af03e086170b30efbe038104a3"],["/article/bee0f638.html","ac3b720b18c70cf44cfabda5df87dfed"],["/article/c6bff206.html","efb274dbdab8fd6a0197b3b336231532"],["/article/c7063ec3.html","3f2a4bd89b2359eab05b7d58eed0e426"],["/article/ca8b4515.html","328da2a8dc27c10530573146bae3713e"],["/article/ce3b3e2.html","4bd907eb9ffc64555a6787a47fd047cb"],["/article/cf8c0bbe.html","2979646a8411feddfe0ce90fd01f19c5"],["/article/d60bbbcf.html","a15396f4ddc18977d3e88a09f65ccab9"],["/article/d6505d8b.html","9ab897c03fb9d611f2bcbdd6e7c372c8"],["/article/da9af306.html","72ec0177c71318479db9eda428625c78"],["/article/e20a0ac4.html","4da4101d62b6abec1db3468f09e98a33"],["/article/ef9ebd24.html","849754944f1e54432fa3f528fd5fa267"],["/article/f01b987b.html","fae7cb417f317624b0d92e6cc89da740"],["/article/fd541bb0.html","eb8ba834003b4734e698ee5ffe13c0b0"],["/blogger_said/index.html","0c01e2bc7eba840609e607e8481d21f9"],["/books/index.html","0e283dcfdede76f2a0f2097387d7b769"],["/categories/index.html","18311bfa9df58d8fd00d0b9c1b5bbe8c"],["/categories/价值观/index.html","775e2dcea4f7885e2bb36e9000ad93d6"],["/categories/健康/index.html","bc13d5b95bc663f148280e842eb1e755"],["/categories/投资日记/index.html","6cb277f953bbe422bbd6ee4004d77f65"],["/categories/数据分析/index.html","1afc8acd46243183bbaef3100aee1b85"],["/categories/翻译/index.html","cee9a6cc3a2141923e860f0cad6f22e6"],["/categories/英语/index.html","9e369570de8a2656f22acc29ca720780"],["/categories/计算机/Python/index.html","1f232a765408e7217f06d227962ef68e"],["/categories/计算机/index.html","94d2a7f703145e856b589f034c665807"],["/categories/计算机/工具/index.html","c7b21bc8aea80f32bd070e91326bbfc1"],["/categories/读书笔记/index.html","e17129b6db095cd0d69cdd1646950c4f"],["/categories/读书笔记/page/2/index.html","6ac0181aa59923476e8d4687c74d2f22"],["/categories/转载/index.html","4a4c2428197fdd56578f226b3879451c"],["/categories/转载/page/2/index.html","352db23deadb030c460d63b948db7796"],["/categories/随笔/index.html","14d79e16c9a9b747ccf62695bb4eb3cf"],["/categories/随笔/page/2/index.html","c9b6d03413b6f7ad17aa17d882593cfb"],["/categories/随笔/page/3/index.html","6504ccb3ea3049459dc5e121c0f42301"],["/css/style.css","c609a3662fa1ea2977cb8ec62ae54566"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","2149a255535e1988fb1a5ff49c23008b"],["/history/index.html","6cf1743c2230be9ae1d6de1eccbe13f8"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","6c065ff49cdc350d516d7e802159760b"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0bcaf09447df6ea85b9fb92379146b1e"],["/page/10/index.html","936f41c4c80a80bb8b79ff6ec54c0438"],["/page/2/index.html","82330f766ffe0e20e094a5869070ca33"],["/page/3/index.html","d44f0e98588ce3145867d5d293d12d75"],["/page/4/index.html","003289d46b3ae4af2bb43b646b495e10"],["/page/5/index.html","2a147ebc7661827255be224b419bfe48"],["/page/6/index.html","c143646fe39f2bee43d9d167c62cd5a4"],["/page/7/index.html","3133616eafbd98565b3b829e2a978059"],["/page/8/index.html","3f31517ffb37f85d9282ac8ba7746da9"],["/page/9/index.html","b5bd9edb421da05aba914a80eccb7caa"],["/photos/index.html","bb1c2ddec9ab6ecc92c7c8b56d273ad3"],["/pictures/index.html","21bb5d1767f71a6f14507adb31cb5e5d"],["/recommend/index.html","5846f6b61afadf1a3ed298cc21958160"],["/sw-register.js","67d7fa53642f118ef31b137ceb5b45ea"],["/tags/git/index.html","4d63e142089138e2b2f390db81386898"],["/tags/hexo/index.html","86697e59c1b6b6141d77e4504a1425f8"],["/tags/index.html","73c102c8695ef85c71a72e20a2449bf3"],["/tags/中医/index.html","3f9b45377369dd903278f496f50cb265"],["/tags/休息/index.html","cf941c16225d4c277b22625ac6077de1"],["/tags/公式/index.html","1f575431353a616f4367e31b4b38a61c"],["/tags/写作/index.html","c90735d59ab234e7b1662efb748ffbea"],["/tags/区块链/index.html","c6fc7e6e52fc21c14f02f92a9af02f79"],["/tags/医学/index.html","c4c0dd1d58b043d7fc7cc272139791fe"],["/tags/原著阅读记录/index.html","01584fd78f2d67ac51dda1c925b80064"],["/tags/反思/index.html","03b87e2240d8c76b5866d980ec9fd943"],["/tags/同学/index.html","67ec52413fede959ce3f83feff77cc8b"],["/tags/听力/index.html","bcff7e6cb09fdc404455010ac2bd673b"],["/tags/处事/index.html","8b8c8b126e5b6e76d3b0aeb6f9999d08"],["/tags/如何致富/index.html","2ce2fa4d95ff5af6d3e02533a55e57ae"],["/tags/婚姻/index.html","16d46f4c9c58a37148f697812df49e95"],["/tags/学习/index.html","243976813f6321ce34cb2402a8c8d496"],["/tags/安全/index.html","1b1b96cccc0ed5d9a3223d19df42ca64"],["/tags/幼年/index.html","119c928b6a49520827bead18a1a5153d"],["/tags/幼年/page/2/index.html","fd41089921d26244b19452c771daa407"],["/tags/微信/index.html","1f42ce87777e9903e7e177c6a66d8e21"],["/tags/心理学/index.html","888948422ffa3f8d08ae78ec4dea0884"],["/tags/思维/index.html","3f628dff5a8e166f6a09089daf4afe88"],["/tags/情绪/index.html","cdd80c798d9eea89e7cf346568212681"],["/tags/成本/index.html","1ca9bcc7b576651f46ac3ec07be0c8e0"],["/tags/手机/index.html","8c6206e9fc572f83a5cee718f0bc8fbc"],["/tags/搜索/index.html","236074f62dcec2de76fbb4dbbe6e8fbe"],["/tags/效率/index.html","44b22c2a61bdf6484181b01fbd0c566b"],["/tags/数学/index.html","eeacde4995733218650a4d006de3b585"],["/tags/数据处理/index.html","24b0eeaf89d69b2eac2b425542d85333"],["/tags/文学/index.html","00c913de87b899700aa36a0b0fd189bb"],["/tags/方法/index.html","551db1ae6a822df8a3a03fc4a6272edc"],["/tags/旅行/index.html","dd30f401809befc9bcb97dd139233545"],["/tags/日记/index.html","8df579dd705b8caab4ea3b582c28804d"],["/tags/时间管理/index.html","fa2556950f09cb2793b37ddf1c4b6ff6"],["/tags/智商税/index.html","88744c93d95736f7c7080cf044f80d21"],["/tags/演讲/index.html","a9966db627d3a671e41e7fd3c262897d"],["/tags/爱情/index.html","82a4714cd0030f02cf199b8a7f78c322"],["/tags/生活/index.html","d46403b3ac40df9d5af7e1d66309dafe"],["/tags/睡眠/index.html","8f809e7057c3bdc94ac354ab89550a26"],["/tags/科普/index.html","56699595fd47c4048177300b41568b3b"],["/tags/精力管理/index.html","77074fa4691826ffcb8c7a721257ab7c"],["/tags/精神生活/index.html","13f0ee8ccd539f3edccd5ef7684cdf57"],["/tags/经济学/index.html","41253ae46c64f6f1fb5a2360769c2b97"],["/tags/自律/index.html","d6e43bc1d9ff49a014d1caaaa8f45ea8"],["/tags/观念/index.html","a3db8f8f4d780d4ae98dd91ce7cb9a3f"],["/tags/解决问题/index.html","8ec90655832a6c50a557093a082c3e82"],["/tags/记忆/index.html","1dea538b5e60d2bfefb1086d9f2806ec"],["/tags/诗/index.html","7e7184551a63e4d815e8b319080c66d7"],["/tags/财富/index.html","f79ffb6d6828378c405fddc718ff70d8"],["/tags/阅读/index.html","42bf9df28cf150006dae1de7f5d3c273"],["/tags/隐私/index.html","74a1c4ec99ba3514692881a1de398fc8"],["/tags/饮食/index.html","005a2732172ade7e5c9d9458dfa4cfbd"],["/tools/index.html","580301cd305b8cdb173f2e18214a6be4"],["/works/index.html","84d62ac99ddc760a96989ed597bbd09c"],["/works/item1/index.html","4f5ce89ae5faac977c2da85fe9a2efd9"]];
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
