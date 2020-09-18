/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fe20df752d20febf8bd9893c8e8add86"],["/about/index.html","ad19e2c92107388bbb118d7743bd8dc1"],["/archives/2013/11/index.html","1f74640ee042ffccb7fc9a8cf229dfc6"],["/archives/2013/index.html","16fc33d9e3baf9696faeaafbae00bc37"],["/archives/2014/01/index.html","120236fb7ea8c8784872a89d7f4cb9b5"],["/archives/2014/02/index.html","cc2e96c64d4480772a3cabf375fa7e6e"],["/archives/2014/index.html","7a7a5a9e21ab394950606882ed7751d6"],["/archives/2016/01/index.html","374d9ce127250f29517f18d9a10ebe8f"],["/archives/2016/06/index.html","bda09e8dfa14dce35699bc70582de8b5"],["/archives/2016/07/index.html","b9f9c638a386ab4cb529f99a10163a81"],["/archives/2016/09/index.html","0b31c4c8ff441a4f3a48a26f1f9b71bb"],["/archives/2016/10/index.html","023850c3047c988c2cd623fc3fb50b8f"],["/archives/2016/index.html","01a3538da7ae4304aa3d8692d2cf84d9"],["/archives/2017/05/index.html","f5e559c37e761fecfc284ca76aed605b"],["/archives/2017/06/index.html","17f46499cf567f67db2462c372e04ae6"],["/archives/2017/07/index.html","4a06c2803e2e143f9f10e980d278a9a6"],["/archives/2017/11/index.html","3d261ec65f874ea0a38dc7ff919c7cb4"],["/archives/2017/12/index.html","434f18ff6d863e836b5d2afb4b5bab94"],["/archives/2017/index.html","35858db98c165cc5bc34f9ff61506eca"],["/archives/2017/page/2/index.html","ac4bb04634d5964c8692824a4b118f05"],["/archives/2018/06/index.html","76c48a44eabad932953daf6de486047b"],["/archives/2018/07/index.html","749aeab62d730235e8cc5c8ae1c74aee"],["/archives/2018/08/index.html","0c0bad5f1b27aa669f66caf7287a057a"],["/archives/2018/09/index.html","2637a3ac80927a696e8678b5998c3d22"],["/archives/2018/10/index.html","7535ff16c16c85ada78f3efde6556bd4"],["/archives/2018/11/index.html","68b13184a844a366f4b71118ec15060a"],["/archives/2018/index.html","06eb484837302265de951fe69821928d"],["/archives/2018/page/2/index.html","6f9f9e9ad11fd50d67b7dc736db7f747"],["/archives/2018/page/3/index.html","459f3c9f9e321965b208b4088183cc1b"],["/archives/2019/04/index.html","09703e7b756dab07ec4d80807e09bcb8"],["/archives/2019/05/index.html","e1b75f4dc2e2dbc13c0cb2e5d311cb79"],["/archives/2019/08/index.html","c87092b331a6318837fdfce1ef22200e"],["/archives/2019/12/index.html","ea0ef9114ca7083bce37176390ff8006"],["/archives/2019/index.html","f119ce85e517357b41b83c090752ee8a"],["/archives/2020/06/index.html","34bf26fa96b8d40177a6dcd88ca58373"],["/archives/2020/07/index.html","95f82ddce6f28c8d25fbf316dc100cbd"],["/archives/2020/08/index.html","35659e562c9fc5d06e7f52da44e77e26"],["/archives/2020/08/page/2/index.html","24d95c34142761dc2bbfd9970170e42e"],["/archives/2020/08/page/3/index.html","0741d713713d7fcdf27a83cdefa1a6cf"],["/archives/2020/09/index.html","01ee075981b75b380a97d293553df9ed"],["/archives/2020/index.html","2f243bd0fdeece615a8d25d49cb22968"],["/archives/2020/page/2/index.html","c1e23275513e8719fbb2304d63279863"],["/archives/2020/page/3/index.html","9c5ba2cdd2d430d4cd634730bcb67a55"],["/archives/2020/page/4/index.html","427243e03d558f86da820ac912ea6a33"],["/archives/index.html","351dc28ab25e5f46e38decf1caa6f8d6"],["/archives/page/10/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/2/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/3/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/4/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/5/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/6/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/7/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/8/index.html","3beac76b689a6ad92121865722ecacf0"],["/archives/page/9/index.html","3beac76b689a6ad92121865722ecacf0"],["/articles/11fb9e73.html","1846c4996d98d8e2eb524e3c6cf36a3f"],["/articles/136fa9d8.html","9da411899b501c1e8534730daad75712"],["/articles/19718e8e.html","1b13d52bc4a6acca3e8b1c14d0071331"],["/articles/1b342210.html","f508a20bc2be08e5206c8d01f2877f2f"],["/articles/1eb9d23a.html","f743f48d4a3b097a6e0d4abdd1834b9f"],["/articles/228c75d3.html","0b6185f5263e151c19e4623373635cae"],["/articles/23494478.html","0d4b70339041e972c9f0fc048c766d73"],["/articles/2b3aedce.html","09663bb5e3432e015cbb672377a15efc"],["/articles/2e7c5c98.html","32cea92d97b5f02c3cb95afeb3a77695"],["/articles/3229fb3a.html","f42f183f99f5c88ad94eddf510fbd49d"],["/articles/33554c5b.html","6722f400f1edc0b9eb673934d3d1c3da"],["/articles/35a56429.html","c545fc54715a2660863ccc1f92253d4a"],["/articles/4562b0e.html","14c007d3845cf05ea8d9f1aafca42a6a"],["/articles/481247b8.html","91ef0579b8c9fe68a26e5d284a23c153"],["/articles/534bc28c.html","5507e63c44b867b0047995c751d14179"],["/articles/5b152571.html","8523a772352bff343d00ce47914e01a0"],["/articles/5ca1802e.html","9e2ee8b1a09765ed0193afc86cc509ec"],["/articles/5f339f98.html","c3ec4df2884cac71ef4030a0a652ff77"],["/articles/64c8bce8.html","ae42201645ed84f5037152cbe189a6a7"],["/articles/682814d2.html","a46e039fa7c3ee874ad0858986d1e3cd"],["/articles/717c02c4.html","6176d735dc0928c40bd77f74f8eb7ff7"],["/articles/738c5196.html","c003341e35997ca98c337777a4610eb0"],["/articles/73ba8b39.html","a08c434767582646d12ce90a81a65fef"],["/articles/7a5991e.html","b1660ccfbf23d69783b6436ec216f3b6"],["/articles/7d3004c4.html","e5e3da9b04eb176b41f44ab42abf391e"],["/articles/83e42b42.html","b1269036a5806951f4542c8fb16a4dc4"],["/articles/8c8ac5bf.html","735a02c870b9160308454adfad537ed4"],["/articles/8e989db0.html","9945c91bd5b7ab11c49c2c021237caca"],["/articles/90d5d393.html","c00160016844e353fb1861ceb5e2bb1f"],["/articles/91a5995.html","cbc5ef330fb617be9049ee2b2b0367a2"],["/articles/940b4a8c.html","0a6e43f051c5e263f72eb9adfee7e239"],["/articles/a0bf6b98.html","2021fcbc60491d29ae522b6a84f18e3f"],["/articles/a264b8fd.html","8c32c310ec62db69cf4c2374219dc0dc"],["/articles/b318b8fe.html","e11fe632e2dd49a3ccce88c280cbb897"],["/articles/b73c5547.html","2f97b829b4c2fdfa28a28cb6d4ac47da"],["/articles/bee0f638.html","ae344a6c76ac6a856a211d78069ac177"],["/articles/c6bff206.html","6acb972a58ff922307d2f20255225725"],["/articles/c7063ec3.html","29701d827b6c407717a99b495a9baf53"],["/articles/ca8b4515.html","a1d0c971aee8f2c0811e4ab5624a9fb4"],["/articles/ce3b3e2.html","8a1d0bab7ee0cd247931631d581b94eb"],["/articles/cf8c0bbe.html","b137ab1817bbf6af9157e9692b615f97"],["/articles/d60bbbcf.html","8af44cb1a70606cbf9bb1edc657f1212"],["/articles/d6505d8b.html","6615aab81b5f699675b3050a5cda1a74"],["/articles/da9af306.html","47c966ea3fb445051d83d52f33631493"],["/articles/e20a0ac4.html","67b321a1f3f3ca834b1f16e2b32d8554"],["/articles/ef9ebd24.html","c0069a8b06110495829082b32b75677b"],["/articles/f01b987b.html","dfb93a6fb5d2c0917350341cf06246f5"],["/articles/fd541bb0.html","3034f3e416f762849e655496eb72aa47"],["/blogger_said/index.html","892030fe92daa1022aaaeba8a6334807"],["/books/index.html","d648c03e6c9a7b632342719653e60b9b"],["/categories/index.html","f1c78302fa13ee47c94c4a3e0638c825"],["/categories/价值观/index.html","b0f7e0976f8fea3db4bd4c9a433acbe3"],["/categories/健康/index.html","57790639df74db40aeeb667ad073621a"],["/categories/投资日记/index.html","c7950db85497ff2a78f6836ebe40e45b"],["/categories/数据分析/index.html","25be6b686b0c79cc8c76b97a4171a784"],["/categories/翻译/index.html","88e8905469cf2e7d75faa4548318fc38"],["/categories/英语/index.html","fec840bdb5df3641d7fa8b64fdff6cbe"],["/categories/计算机/Python/index.html","e36533a39a41f568e771c19b5632dedf"],["/categories/计算机/index.html","ec9995a8b7cd586add64fbf2280cb280"],["/categories/计算机/工具/index.html","d6d31a487bdc3ac0d9512ca66a52e259"],["/categories/读书笔记/index.html","f3de9e7d13429e0b4860df3643bcf453"],["/categories/读书笔记/page/2/index.html","6a6c5faf3ef371a23e4ab72d33e6d233"],["/categories/转载/index.html","f4314619141800a80240eacec107c6fa"],["/categories/转载/page/2/index.html","0e360663c8f3e11de550ea0a1e9ac14b"],["/categories/随笔/index.html","2c6ab47807b1bf9e3639b60bb2db86ae"],["/categories/随笔/page/2/index.html","f8903b0d060a8bef175edb7fca392b39"],["/categories/随笔/page/3/index.html","dfff74a48f99b2af60e87c3891c8bc70"],["/css/style.css","1d896b3ebe8eea894e323da5cf1ee6a8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","5e25a978232a800685e4588ef4d14859"],["/history/index.html","7056358ee9ca3fe865178a111e014250"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","4ab81933c5e6f864ae413e8c4b9857c7"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0068dc60c91e16dc151c596396cc050b"],["/page/10/index.html","e54b7517364e3a0705bcc47a27e1b6ee"],["/page/2/index.html","ece3dcbf7117d87056710117635de851"],["/page/3/index.html","6a2638dea321332f6e3227e768fbbd78"],["/page/4/index.html","31b9bb7a49b9b0e59df41ecd8c6d6ffd"],["/page/5/index.html","6111074d51000d1611d717eeaad2df60"],["/page/6/index.html","be3940bd2c0d6e60bd1882147105a229"],["/page/7/index.html","963dc83124cb48769f9a867c03133272"],["/page/8/index.html","d16a8e68e881ee792a6d4cfed93c03b7"],["/page/9/index.html","8730c9807ed7a21cfa7edb82374f39d1"],["/photos/index.html","f92a92cb0e49235749376a499136ce27"],["/pictures/index.html","5b013b7a3789ecb7796e6f050026b99b"],["/recommend/index.html","4feef2cce7a9cd106289eed63146435e"],["/sw-register.js","21c1d42e588fc6a08654bc0d16bcc81b"],["/tags/git/index.html","c4d130c3ce22c11a851c2730df60e981"],["/tags/hexo/index.html","b74baca044e50aeb2c25d273927f54b7"],["/tags/index.html","0e3a2081f566107e424d1fafe146fdbd"],["/tags/中医/index.html","57dcf457a74662896b5495e2ff1f5eb1"],["/tags/休息/index.html","379473633cf8de48c59b3eeabd52647a"],["/tags/公式/index.html","4445ffd5223320ac66dd6d5daabfdbbd"],["/tags/写作/index.html","5c06fe4429b427ab2571a3187da1b8e9"],["/tags/区块链/index.html","67dcb522b72441d2381bd545365c4914"],["/tags/医学/index.html","c156783be63c905b07089f109c5d5310"],["/tags/原著阅读记录/index.html","f80fff8ee9dea63aa49cd7a4fd234061"],["/tags/反思/index.html","0b0f4cc42f85a65549058f9a7a7325f9"],["/tags/同学/index.html","b3eaae4354bbfaf8fd058452b7f7f1ba"],["/tags/听力/index.html","f0faefc6db54f7539a07a7550ee6dcb1"],["/tags/处事/index.html","290d2dddfb57ba46626fa945d2ce31a0"],["/tags/如何致富/index.html","7703414089941ef8e6f866fc72abb003"],["/tags/婚姻/index.html","ea1a765d7d8e6b120050d03db571e27a"],["/tags/学习/index.html","423d71b6c44dbaa9e55e1ea472e6cf83"],["/tags/安全/index.html","710ba8d42bbaad1cd8dd3b5cb963ba90"],["/tags/幼年/index.html","0d4d9cca5c51f6cd9aa2b977b9b7c01d"],["/tags/幼年/page/2/index.html","fabf5a545b47455c27fe51c11385b152"],["/tags/微信/index.html","98059a3c122388ebf40cf35b276faf6c"],["/tags/心理学/index.html","58c6cd462b2fd5eef85fe0ce7e4ceaad"],["/tags/思维/index.html","53c4a651b032c94ef9afcca088972658"],["/tags/情绪/index.html","5e39cdbccceb0f126740d0524295ecbe"],["/tags/成本/index.html","d1f8418cc9dee686f97fc39815462b52"],["/tags/手机/index.html","4e001db3ae68dc361af57d7a8bae3b4c"],["/tags/搜索/index.html","8772770a1bbc259a6ae4abf7538ee0f5"],["/tags/效率/index.html","969dacf6cd5a5f01ec16b2460ca6d01b"],["/tags/数学/index.html","c16e97b1e76fffc676f821581eb1eec7"],["/tags/数据处理/index.html","1b4f10ae0022aacf815f414869dc5517"],["/tags/文学/index.html","c72f5bb8d02eda2ff762ad4bed1d434a"],["/tags/方法/index.html","532f49f8cc6342aa56a7bccf0aceae7e"],["/tags/旅行/index.html","7d1d56b48672bbf52e79fd93d0bee9e3"],["/tags/日记/index.html","84bf58540106daa7686f04300a86e1e2"],["/tags/时间管理/index.html","f0edd5b7707eac9b1db4a4b201ea7bfb"],["/tags/智商税/index.html","5c2574fa6ee8ac54c7d2f0b79da2dcec"],["/tags/演讲/index.html","c5804da00df8f652dad5d566248c55a6"],["/tags/爱情/index.html","f16a6ec841ccf40b2c78bbad100d06d8"],["/tags/生活/index.html","c23c525c7bda242a3150dddf7d9d1e01"],["/tags/睡眠/index.html","8ba3184e66be7bc08b00fbeeab791cbc"],["/tags/科普/index.html","50b3a2c54443ee3ae5702088474f8548"],["/tags/精力管理/index.html","a79b8e8f415a5d8af67d803c41edea33"],["/tags/精神生活/index.html","834643c69a4396e587150ad329a210df"],["/tags/经济学/index.html","399baa2c087101f12bec7939144db1d9"],["/tags/自律/index.html","133d64a47320f2fde309944c0107adc0"],["/tags/观念/index.html","1a002c30f2dae642ae9dd0deec272be0"],["/tags/解决问题/index.html","2a33c644c3f03233e4be71a373deae7e"],["/tags/记忆/index.html","fdbba4b5061baa61587dd64887d9813e"],["/tags/诗/index.html","da04c413399c30b9767db65d21ea1b9a"],["/tags/财富/index.html","3d5180b252767b192dd20d3d4da133a2"],["/tags/阅读/index.html","68634c56bd45aba2fe229ef10ebbed7f"],["/tags/隐私/index.html","9fba4ea514078b8af106bacee8cd45fd"],["/tags/饮食/index.html","5137af4c4bbbf86c22278e8e1a02c21f"],["/tools/index.html","daae39722f4de26841e461ac39c4907e"],["/works/index.html","5008824f02be5ca6cd9d62fc7e7485f3"],["/works/item1/index.html","2527483e19625400386ddd5083be7eae"]];
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
