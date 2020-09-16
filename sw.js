/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fe20df752d20febf8bd9893c8e8add86"],["/about/index.html","87a9d1ce9e06237e065e25acfc146671"],["/archives/2013/11/index.html","544a3a8a1ee3d24de8abcfb56eee3b63"],["/archives/2013/index.html","9ebd80f5acc91554f7ddf83508a1fa65"],["/archives/2014/01/index.html","ff262896835d205fb48d683550bdcb61"],["/archives/2014/02/index.html","50ed9963b30cf8e84d3707a43f138a2a"],["/archives/2014/index.html","47d259598c39715847da3282e19423bb"],["/archives/2016/01/index.html","a7bf2381f8ed1276ee93deb34c7fac03"],["/archives/2016/06/index.html","854e709508d118d544936b10bf75a83c"],["/archives/2016/07/index.html","4a4d66ac8ee15f7d36a67e909a557991"],["/archives/2016/09/index.html","45364b58d874e7420960476130ac8402"],["/archives/2016/10/index.html","4d919b474a850940043a7bdbbceadddd"],["/archives/2016/index.html","5620faed47e40f6450c8e01995f70220"],["/archives/2017/05/index.html","51492bec9a35373d4a5f8ce11258e07e"],["/archives/2017/06/index.html","e081024e2c15821fddce1e531366a692"],["/archives/2017/07/index.html","e90efae1b329fa1d80bd54b6ece9144e"],["/archives/2017/11/index.html","3b954718bd2b0fdd78b24def46202e60"],["/archives/2017/12/index.html","056a326bcd4402c2f3400b12eb63c2ff"],["/archives/2017/index.html","c737f3b3f7466b2d0115aeaa2a4d894f"],["/archives/2017/page/2/index.html","98ec80101801233ebb1df2906d3ed1e2"],["/archives/2018/06/index.html","09abfdd8b72579f57573e8fcb616ef81"],["/archives/2018/07/index.html","9fa7a0a565073346d01deb6b345a0b71"],["/archives/2018/08/index.html","4b1cd8ac75a7195de1bcdca5d6c20e18"],["/archives/2018/09/index.html","0557904ce0dcffdfad87e47c328bfade"],["/archives/2018/10/index.html","cc1ab08a97ce5561ca36b151e85c567b"],["/archives/2018/11/index.html","e1575b1df30d19168d544d1459c77a6c"],["/archives/2018/index.html","90227ec8b5ad264f7278f342786536b0"],["/archives/2018/page/2/index.html","b39f77163d108685c5ea25519f55cc46"],["/archives/2018/page/3/index.html","43dc3b3da2d82348fc7b814e9674e604"],["/archives/2019/04/index.html","bc5b1810aee22a219f3bfc0e5a880346"],["/archives/2019/05/index.html","772efa04980f41062c751f49e52c4215"],["/archives/2019/08/index.html","0aac91969cce81e25c7794614cef000d"],["/archives/2019/12/index.html","177c57eaca957863ddad20443f4956ba"],["/archives/2019/index.html","0246dc9749398067b5f6c8e89b9ff442"],["/archives/2020/06/index.html","cdd1a0c82f5f5c2bf8d62cafaf1840f3"],["/archives/2020/07/index.html","2a80b101b9536dced73f667b109bdf38"],["/archives/2020/08/index.html","ce640627cec02804c2014a8a9f61b7ee"],["/archives/2020/08/page/2/index.html","789405c2916df9a08de5775feb98beb6"],["/archives/2020/08/page/3/index.html","c672dc11676ac48222bc02b3bbeac8ac"],["/archives/2020/09/index.html","89022c678f1aa9a6b83ad4466b941225"],["/archives/2020/index.html","e3d03fcaac2aa1a972bbe5fed4a97d0d"],["/archives/2020/page/2/index.html","038693167c653ef7cc8e835cdef59aaa"],["/archives/2020/page/3/index.html","d518a745d2ba64e7dcad228fde7183f2"],["/archives/2020/page/4/index.html","7821ef29c9a3c3ccadb7f6637216080a"],["/archives/index.html","351dc28ab25e5f46e38decf1caa6f8d6"],["/archives/page/10/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/2/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/3/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/4/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/5/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/6/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/7/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/8/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/9/index.html","3beac76b689a6ad92121865722ecacf0"],["/articles/11fb9e73.html","c3a4c20eac002d8698c996bdc62da3d3"],["/articles/136fa9d8.html","013db895295d4051ba1f9148fde286ae"],["/articles/19718e8e.html","cd732bddae413a9f660a3d4fcd04aca0"],["/articles/1b342210.html","0212fb1688ac260d5254fb30d3a4e3ab"],["/articles/1eb9d23a.html","1c5fa166f43396aaa7c47069088b493d"],["/articles/228c75d3.html","74ba5d85c6cd57db2599fac714ef1158"],["/articles/23494478.html","83d7618f76fbe51512f86e935b7480b0"],["/articles/2b3aedce.html","58080852ac2e36443ad8bba8901d7434"],["/articles/2e7c5c98.html","447672e4e8ee7413f1526a40eb1d1ead"],["/articles/3229fb3a.html","dbb990c727e166c6dee509a8cbe70cd1"],["/articles/33554c5b.html","659c04830edcba66bb34f0935ccb667d"],["/articles/35a56429.html","eb171fb32d6c4af96e87f9a1f5ae8f35"],["/articles/4562b0e.html","411b38ba226a37a0053054e2d67e5745"],["/articles/481247b8.html","2d89119ccd4469caf9715940a504d0f1"],["/articles/534bc28c.html","f2ff8366f4b5508d034284cb532e1c3f"],["/articles/5b152571.html","7c4a59433e81e9953b251fedb5f3a353"],["/articles/5ca1802e.html","d3bff31f32438ac460265bd7ac4972f3"],["/articles/5f339f98.html","5bbb85f3260a3be5e754e0b06a562ff2"],["/articles/64c8bce8.html","ae94d97e8e196e1c2082578c0906bdc1"],["/articles/682814d2.html","72506b96ffa3dfb35e09bd21b68fdf51"],["/articles/717c02c4.html","ad8a120f834a271f4db290d188e40283"],["/articles/738c5196.html","9b5ebe44047c1480cbb0053ff5f88168"],["/articles/73ba8b39.html","94410974d74a327091ceb666e127cac9"],["/articles/7a5991e.html","c5d26597eb9de4e9b4c549092fa95e56"],["/articles/7d3004c4.html","dfee734bfe4dd80902665c9776dbcc0f"],["/articles/83e42b42.html","d14de46152aef1cf6bf56d9282f3554f"],["/articles/8c8ac5bf.html","fc447d9c8e7ce19a7bc26719856f6ba8"],["/articles/8e989db0.html","0955e20f911c3aad1fd3ebf88e63d2c3"],["/articles/90d5d393.html","26e16d392b0efb95fc07818c067666ad"],["/articles/91a5995.html","71e2e2464806be192567b132290c7c63"],["/articles/940b4a8c.html","d552b8accb4175cb89b4765b94014252"],["/articles/a0bf6b98.html","e5ebe3b8efebacf58aba7b30dfe62968"],["/articles/a264b8fd.html","63d086206ec1407eb77d046a882ec384"],["/articles/b318b8fe.html","ec967ce6bd6aa3359871f31f0e51e009"],["/articles/b73c5547.html","3e86fc2fd7f1e2f0d259f8fb738f26e8"],["/articles/bee0f638.html","012acf819cadc98bd89d8c27a7661c48"],["/articles/c6bff206.html","63ebd904b6716137425481c142bf4113"],["/articles/c7063ec3.html","8259d0b7d449e8ac31fea66d162e8d81"],["/articles/ca8b4515.html","caf99d75006fa955649ba78027ab2440"],["/articles/ce3b3e2.html","2d908b060bcea531552cf91e1aa1a43d"],["/articles/cf8c0bbe.html","4c7f49823b17e961ee5c354acd7c135d"],["/articles/d60bbbcf.html","d76a35d082c44c1ec0f3b813bf5dbc2f"],["/articles/d6505d8b.html","9c066c4bdff26a9b5a5bfd4fc0788271"],["/articles/da9af306.html","48538b3da9e763bb29eb6d3156d6b6a7"],["/articles/e20a0ac4.html","7bb327d0ef208c958c546767fefed20b"],["/articles/ef9ebd24.html","908f6202ab5aa88b62a59f94bbb4c906"],["/articles/f01b987b.html","055419f9a05502415031440950e8d6b3"],["/articles/fd541bb0.html","e51a1326626618c8f04a413d54bd2c7f"],["/blogger_said/index.html","892030fe92daa1022aaaeba8a6334807"],["/books/index.html","d648c03e6c9a7b632342719653e60b9b"],["/categories/index.html","f1c78302fa13ee47c94c4a3e0638c825"],["/categories/价值观/index.html","5f712e3f00ab8dc1e79620f77d904ace"],["/categories/健康/index.html","f9a4b16f4d103a55757b00d40fe7a84c"],["/categories/投资日记/index.html","30c227544f085a76e3235fe3ef02ba62"],["/categories/数据分析/index.html","5dec2e7a45e1df1038917e7f452149e7"],["/categories/翻译/index.html","e7d34938f97a3739e4801e4d95327919"],["/categories/英语/index.html","9c908193a4e02d650b1887b7deb06880"],["/categories/计算机/Python/index.html","ad50f582a481d43a81e118f99853e9f6"],["/categories/计算机/index.html","98415a3abea290228eb954a41662ad5e"],["/categories/计算机/工具/index.html","a8eea58e102cd73bfd5532cfd5db2858"],["/categories/读书笔记/index.html","3da4362e9ef965ed1f73787f384353ad"],["/categories/读书笔记/page/2/index.html","9d10739e7f021a65b872d0f9b5f34260"],["/categories/转载/index.html","40cf4410c96f2bb5922bb1d396350129"],["/categories/转载/page/2/index.html","bc5db6185f4abb5a257c22e118d2447c"],["/categories/随笔/index.html","c0be22e49e9675416a8d2cc402949937"],["/categories/随笔/page/2/index.html","cf06acefcb2937bb7fdfd5169e0fa635"],["/categories/随笔/page/3/index.html","f37f5fc66cae017dfeee531c9f25beb2"],["/css/style.css","206f0f0de207b7a4b69fe22791fa34c1"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","5e25a978232a800685e4588ef4d14859"],["/history/index.html","7056358ee9ca3fe865178a111e014250"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","13c43284e164e60fe8f57bc711225fef"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0068dc60c91e16dc151c596396cc050b"],["/page/10/index.html","aa1bef746bd9827a08a5b54442900dd1"],["/page/2/index.html","43bd2e7ede1cbd29b6a04ecccb869801"],["/page/3/index.html","d0922a751dabe0cf90a3338f0f057a54"],["/page/4/index.html","37b191c49488acfbc657a8997eed9965"],["/page/5/index.html","be6b204a3777a76c6fc2905faa5ae49b"],["/page/6/index.html","e4017b4b8138f8a72d1e5de690804fe6"],["/page/7/index.html","455ee10c3c127566b9f5eeeb4fb3dc1e"],["/page/8/index.html","22d967f43bb0748fdf20183ddd64ba1a"],["/page/9/index.html","8324be9bad581ec39b454f84d205a299"],["/photos/index.html","f92a92cb0e49235749376a499136ce27"],["/pictures/index.html","5b013b7a3789ecb7796e6f050026b99b"],["/recommend/index.html","4feef2cce7a9cd106289eed63146435e"],["/sw-register.js","7e3ceccf3248d606c9fad3eacc30cc1c"],["/tags/git/index.html","7f921e59d1b1b1cdca285cd3eee457dd"],["/tags/hexo/index.html","2b83b5fc3131095cf1272403af30099b"],["/tags/index.html","0e3a2081f566107e424d1fafe146fdbd"],["/tags/中医/index.html","0928a9a0d4495077769574b8d42a3523"],["/tags/休息/index.html","4ba70249caed56598c63da84a156579c"],["/tags/公式/index.html","c88a7a5715421c48678f1b67f7e9c706"],["/tags/写作/index.html","41c1e2bc1230be4f69bf02d6ddf38459"],["/tags/区块链/index.html","c658949c05bf4996e74e7ca6d94f7371"],["/tags/医学/index.html","b47bc7f0af0a5497548267cadec56577"],["/tags/原著阅读记录/index.html","9924e8795ff030dd43cb2e63c4c2ae96"],["/tags/反思/index.html","52497095ef866e693edca2da2604c6f3"],["/tags/同学/index.html","ad3f7a8ce1ed782a407cf9c9eadec80e"],["/tags/听力/index.html","33d2ceb4422f0cc7e43ade4daeb9c955"],["/tags/处事/index.html","b45236579824554aa29e2636dac4fd7a"],["/tags/如何致富/index.html","e3070d10753801590bd17495a79d4cb9"],["/tags/婚姻/index.html","f62af2007f25428f081de4a37663dae6"],["/tags/学习/index.html","2efb4f111225524bc26f3136b23078ef"],["/tags/安全/index.html","4175268886129ab7f8b55302eb369d8e"],["/tags/幼年/index.html","b6944fd00deef55c8ffcf4b46cd9f332"],["/tags/幼年/page/2/index.html","4cf38062a6cb4ec23fb6b5d86fa7ee71"],["/tags/微信/index.html","3ce13089917775c3504e5b47e302da62"],["/tags/心理学/index.html","11b1ae7296974780752cae5de14e1961"],["/tags/思维/index.html","0ff0a31c18584fa1f80847cf89978bf8"],["/tags/情绪/index.html","4a474206e97666c110110ac11022e13f"],["/tags/成本/index.html","55a42d714d755d52d0ac874731c3d239"],["/tags/手机/index.html","d348ad82b4c9b1d3eb55cd0218d18e70"],["/tags/搜索/index.html","b09fd3becc473625545bfd16ccb960af"],["/tags/效率/index.html","a8dfb41d7f3505e180b08026d1785753"],["/tags/数学/index.html","3fb625f3cf1521637640da47801873a7"],["/tags/数据处理/index.html","97f645e9ea8092a873af93e3c991666e"],["/tags/文学/index.html","3464862a9dbd261af2ad812287c8eb54"],["/tags/方法/index.html","8cf8c78e14e40d049e6b3416eee4fb6d"],["/tags/旅行/index.html","6352d0efd4b5afeaef02b12485ac8e84"],["/tags/日记/index.html","fa8555357a20b70d90ad3d5fc4db5e98"],["/tags/时间管理/index.html","628775abbf43e111d1405c4bbd87a247"],["/tags/智商税/index.html","8e2cce6c0f2f85508e06d3837fb14a89"],["/tags/演讲/index.html","7e12c50d3cdeaed7df55a95b14765fab"],["/tags/爱情/index.html","69fd14a71379c52559ab5b66cb46296d"],["/tags/生活/index.html","144514ef9b804a427f1f8c467329b78f"],["/tags/睡眠/index.html","9179958f6004def9d50ee9df07b101ec"],["/tags/科普/index.html","42e89e3ff1c07ab7aa48c2b059604272"],["/tags/精力管理/index.html","adc8c7e8c10f08a6440df168bb5a1310"],["/tags/精神生活/index.html","54a839cc5669a8db58f63f1a83f9360c"],["/tags/经济学/index.html","1c277303f97e3df5bba7b248e89b2729"],["/tags/自律/index.html","0d249dfe2093cdc68d706ecb55a0d35a"],["/tags/观念/index.html","4c6ab3d029f46de66f75a825f93b205b"],["/tags/解决问题/index.html","2eb9e3f9ad990fc2e48034357c657970"],["/tags/记忆/index.html","ea9feeb6e9eca5b6a3072d05c601d1f6"],["/tags/诗/index.html","3e4ed001b3b6ff5dbceda0512ef9c363"],["/tags/财富/index.html","b794582ba889f20498375a2bee383a2b"],["/tags/阅读/index.html","084d396dcee5bed451f556962a809984"],["/tags/隐私/index.html","548e5608d1da2b4e3ff1e464da259ae4"],["/tags/饮食/index.html","a36daed0e996f9a7c439fcf29d7d96f5"],["/tools/index.html","daae39722f4de26841e461ac39c4907e"],["/works/index.html","5008824f02be5ca6cd9d62fc7e7485f3"],["/works/item1/index.html","2527483e19625400386ddd5083be7eae"]];
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
