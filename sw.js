/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7ba7513d8d1729f037ceaae47e87d3b7"],["/about/index.html","c848cd6bf6dfbed5f8a5f9d4caf0e61d"],["/archives/2013/11/index.html","a0fd0fef5fe15486611e3a543f82e5a3"],["/archives/2013/index.html","b35bf7991fd25dd72eeb4ba1fef50a68"],["/archives/2014/01/index.html","ebd488528c8387af22e877fcb1b75649"],["/archives/2014/02/index.html","957533818b6d6c74e5c712112d02eafb"],["/archives/2014/index.html","d17fb73814f94f94c565f9791edabca7"],["/archives/2016/01/index.html","ec456aaf46e52e64a1a8b29d1cefa411"],["/archives/2016/06/index.html","1b1df3d8a955c406c844c97435a4bbec"],["/archives/2016/07/index.html","7789968ec76c56f3923fbea8ba213852"],["/archives/2016/09/index.html","af5b1f927665ddde42b1de3d1ccf9cbc"],["/archives/2016/10/index.html","404c66208fc707440fd5142de521e9c6"],["/archives/2016/index.html","b30aa710b26a454b276f094e5a1ac529"],["/archives/2017/05/index.html","8b1c8b17a6d67efac93d1a1745e8dc79"],["/archives/2017/06/index.html","50d8cfdc60350252ddf4ec34b4647744"],["/archives/2017/07/index.html","a2c5c786a469fec49a4704aa73752413"],["/archives/2017/11/index.html","f7d5f93e9a6369150ab28e30e9566f88"],["/archives/2017/12/index.html","71da37885dd3a2ec6a29e34b39e78ff9"],["/archives/2017/index.html","f4e725fcb9d97beab625eb19b5f92f77"],["/archives/2017/page/2/index.html","002703c139195950a93253ea365a991d"],["/archives/2018/06/index.html","4ca46bedc8561a869a5c38cd68db5e09"],["/archives/2018/07/index.html","a41ecd64014b5f3a9186153e55b95ab4"],["/archives/2018/08/index.html","1463978e53dba931f768a1f5fdd95f4a"],["/archives/2018/09/index.html","0b6244a1592fdcad7012ec963a62a805"],["/archives/2018/10/index.html","da1fd1b25bb70198901e86ebb109724c"],["/archives/2018/11/index.html","a6e08fccf5805e06846b3b52fb9cb15b"],["/archives/2018/index.html","b8ee083e6e95b255d0f5c62bd1d65df9"],["/archives/2018/page/2/index.html","ee40d0fd6623e7b505a92ff508b9d2a7"],["/archives/2018/page/3/index.html","9c9d859a68abe78b4614d0bd8bb4c890"],["/archives/2019/04/index.html","6c008ff5fcacea7e1e611310b2ad2d05"],["/archives/2019/05/index.html","e442e596152d65feefa36de70b8f22df"],["/archives/2019/08/index.html","2e9225a7b29ea4f895a265424ea7c352"],["/archives/2019/12/index.html","70aa1bdf5966b17c6c63e5166b2883b5"],["/archives/2019/index.html","a99b7f14913790e5d7a889158a619e53"],["/archives/2020/06/index.html","a0386366a3d098afc43735f3ce2ed312"],["/archives/2020/07/index.html","2fd131bfd0d2345837d7f0b91ec492cc"],["/archives/2020/08/index.html","5f6ae246f7244636af96b7d7631d7f2d"],["/archives/2020/08/page/2/index.html","c65c7475202980e003a921ddaca92935"],["/archives/2020/08/page/3/index.html","3be7d410474b0faaf4ec752ee156f58d"],["/archives/2020/index.html","20e71c07ad6876f2b15cf6ef8e536468"],["/archives/2020/page/2/index.html","06a00e0822566c57ce95200b9e9e1099"],["/archives/2020/page/3/index.html","f5521c79960bb8a3fbe7d03dccb573a1"],["/archives/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/2/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/3/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/4/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/5/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/6/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/7/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/8/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/archives/page/9/index.html","f81df5ce6f9a50aa58015f3862833f26"],["/article/11fb9e73.html","6a02faf892efbcd1ea91d94d5994f464"],["/article/19718e8e.html","cadd6e132b56712770cf6c96ba08d656"],["/article/1b342210.html","1bce6a711397facdcf0df5f7e79964c3"],["/article/1eb9d23a.html","48ca668c525d7d075467760ce52a37fe"],["/article/228c75d3.html","c25217ada70a5212b02a34b69e3b8811"],["/article/2b3aedce.html","953ecb8d947ef31ee2b73c5ff2e93596"],["/article/2e7c5c98.html","eea09d4af91e9f363fca023116755444"],["/article/3229fb3a.html","d76332b352a0ba890a896021203d6cc1"],["/article/33554c5b.html","c5f8e2396318822b1e116dc1812f76a4"],["/article/35a56429.html","1f5836ff2b457535102085b54d39618f"],["/article/4562b0e.html","6d7459fd08033679e3000dffcebcad79"],["/article/481247b8.html","b63a9c33109ccb883e95aad98791e754"],["/article/534bc28c.html","76a5d2a481640fccbacebb59f5491e1a"],["/article/5b152571.html","0b3d59a294ed052d410ec984cb975647"],["/article/5ca1802e.html","599f01a5f30f5796cbc8acc0ea961c13"],["/article/5f339f98.html","b232f68c831a4fbddc6feff6063e5567"],["/article/64c8bce8.html","5f2a7d36205580ff733283085866437c"],["/article/717c02c4.html","32f012b7e4154bc53a27a2e0f5ddae4e"],["/article/738c5196.html","311daa963dd12fa4baf86dc0cfb2192a"],["/article/73ba8b39.html","478b15e5624b813c4cae4385e589d530"],["/article/7a5991e.html","3747333552996606884e24792a194509"],["/article/7d3004c4.html","24b4b285d3b5c7610c14cea3cb4f32c7"],["/article/83e42b42.html","c7a0ea6ce8e817c527753ed5d9b74f37"],["/article/8c8ac5bf.html","342c3de1e3830e9922c52c5fc924c558"],["/article/8e989db0.html","17f88066cc84d02baa28a38784ff3100"],["/article/90d5d393.html","0b5928ab61093c50c4f0445c520052c1"],["/article/91a5995.html","6e306d757ac3c12d12fb1da29ae1f496"],["/article/940b4a8c.html","37446c2295623a0a4f59e50bc5d2202f"],["/article/a0bf6b98.html","50dec8e26e5e450c5b91322f684e5674"],["/article/a264b8fd.html","f9e5ab3374acd485754fa29c00e09485"],["/article/b318b8fe.html","e98b2d546fb2b234624e95fd47ded644"],["/article/b73c5547.html","400c3b6c3b6cb6a037357aeaadf3957d"],["/article/bee0f638.html","712c70603d73f15c02cc52d1f7da52da"],["/article/c7063ec3.html","227d5d12cb8e0d0e9546b31c4641d39e"],["/article/ca8b4515.html","6c282f561fa15cdd4cc68cb22303ac3d"],["/article/ce3b3e2.html","6b111e8ceb1036a02cebb5ef0cd97044"],["/article/cf8c0bbe.html","2f48c8fdcd2b07ac12bd97f06696f101"],["/article/d60bbbcf.html","83bfd1f88fc4986388646953f963ebb0"],["/article/d6505d8b.html","52e65a4981f79778863259df08754880"],["/article/da9af306.html","335f678ef81d4bbe7166025c663352bd"],["/article/e20a0ac4.html","a244d9b3bb31f0c3cc2303fdb4b8ea27"],["/article/ef9ebd24.html","fefbfaed27010b49598e8cb9ebc4a2c0"],["/article/f01b987b.html","caca9144480937f80438e6fa8614c681"],["/article/fd541bb0.html","7647a707d3bfbc0d4d7e7cf418857d2d"],["/blogger_said/index.html","fd5af4a2690ca44d7199df35946e4677"],["/books/index.html","06478fba567ffda554c9d3da30336b2b"],["/categories/index.html","0d28d1b067f32e46fddc18826f0bc91b"],["/categories/价值观/index.html","cabad3dbe114d341c3dee12638b1e290"],["/categories/健康/index.html","7b6e30eb478e0756dab639cf4a15734c"],["/categories/投资日记/index.html","f09e09c5c2bbcc4f195f3525cfb27e7b"],["/categories/数据分析/index.html","ea34444c31a5dc2bcd76c18263fba19f"],["/categories/翻译/index.html","bea4ef9ecc7b2641b8d408b23cc17491"],["/categories/英语/index.html","4f8d4c0d3dd59e2557ff27a816e0346e"],["/categories/计算机/Python/index.html","acc305d2fbc42644a5a1d32f8d2c8f15"],["/categories/计算机/index.html","703cdcddbed543440af8786a40494cc5"],["/categories/计算机/工具/index.html","62a5514902a84b74aa3c706325d44d65"],["/categories/读书笔记/index.html","bb0b4683bff781fd19beba9f263c28d3"],["/categories/转载/index.html","afee6cfd59acc5ee08b5bd24cf0ee5a0"],["/categories/随笔/index.html","46d28c658001b616ce3e698f51ead84c"],["/categories/随笔/page/2/index.html","7f386a8df3ab3a68972f63476b098dc5"],["/categories/随笔/page/3/index.html","48e44d97e356c7757ed695957ba8a9ac"],["/css/style.css","33d1181816e7bddd2eceff6171f3f155"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","52963ed1eac9f1cdd9629fd62ad60cf6"],["/history/index.html","c59970ffe00851b0b041725402ead544"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","01b0dd036b8caae56236eb4c23dfe7b7"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","f8c9d4c7dc3bd0add4aef5099c806af6"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","c51b71c411ce82e1fbd1bccc8b5a38b5"],["/page/2/index.html","786670a602ebb33632f0d00e487d1c75"],["/page/3/index.html","047d666b0734124d00982210f92bdd84"],["/page/4/index.html","b5b4944aecfb08e2479294ef997c535b"],["/page/5/index.html","3a6ed87e5f469d7cf1263adfe865a2a0"],["/page/6/index.html","7fd3419995dd80d171fa0e124294b885"],["/page/7/index.html","e2ea8926487f0e1c7a3421bc7801c192"],["/page/8/index.html","a5f9fcc24fb2594064a0386909fc8330"],["/page/9/index.html","09cbcb3dc983b34e486b456573b78b9c"],["/photos/index.html","ac1bf08096d1fecd0aff1d2994a6ff21"],["/recommend/index.html","483ff33617068ac20ad9908a652f7291"],["/sw-register.js","50dc47992ec8bffa7b69bc07b9428c14"],["/tags/git/index.html","352f97227951f1e363a9413c32cab3f2"],["/tags/hexo/index.html","0adaaa2ac4022f4281c735bb2e082fb2"],["/tags/index.html","6ecdaa83bf61ffe1a854ccc2a1e3d15b"],["/tags/中医/index.html","ddd37db87e0db4a2803f04be70e71c66"],["/tags/休息/index.html","95984308b38ab2b4e54a82bfac1e13bc"],["/tags/写作/index.html","084d5dafd9180b22b5d3c39d172adbdd"],["/tags/区块链/index.html","2078be36d7be86e0332036f97fb73c90"],["/tags/医学/index.html","e6f904b40400a5cff9e34aaaee693adf"],["/tags/原著阅读记录/index.html","71e2d7ed96237b01f2d5bae4efd7d551"],["/tags/反思/index.html","c665f861f3ea511e07b49f7d57c7cd85"],["/tags/同学/index.html","544a831cee740a2721f5ffc79ea585ff"],["/tags/听力/index.html","dd000dbd1e58abce5181b469292851b1"],["/tags/处事/index.html","5fb85f04d9301b39b74e99b3cb98ad50"],["/tags/如何致富/index.html","71f23dd4fa2f0cb47e275db36db4679d"],["/tags/学习/index.html","5ee95657d78062468ee2b9701fa84947"],["/tags/安全/index.html","2c9da1cb467372aa2a0ea944933785d5"],["/tags/幼年/index.html","c189c01732b56644ca40c431fb8c8952"],["/tags/幼年/page/2/index.html","7cd5619e861f28c176d07f878fd62615"],["/tags/微信/index.html","fdf7685b505e77a57cbb1d985588c54f"],["/tags/心理学/index.html","0620d10559d52ac973149aa9507af48c"],["/tags/思维/index.html","e2e4cb68bd1ba506a714341b5603d19d"],["/tags/情绪/index.html","7bced32228af82b7d999e2cf6f757050"],["/tags/成本/index.html","1ed76b238b2ada8165b9517a1e268071"],["/tags/手机/index.html","c9ed4249b2c968d3bf6a3934cbd0be9f"],["/tags/搜索/index.html","9a1064260e10cbc110bb94f287e5b158"],["/tags/效率/index.html","721b390e5aa5cef4eab8baf510c78bea"],["/tags/数学/index.html","9a2e4acc55d24555de4ebad3995da9d0"],["/tags/数据处理/index.html","df34c34e2492bae00eb8ac0b8b8f5143"],["/tags/文学/index.html","9f7fad35b73b82036372b97475e1679d"],["/tags/方法/index.html","b1593c1475f66b9f0a04f543ad2139ea"],["/tags/旅行/index.html","ffd713df18b15e61fe91e6e353e91e2c"],["/tags/日记/index.html","a5d42a51e727c2acfbcc0aaa794a9ca4"],["/tags/时间管理/index.html","113f7d476c0e3b1f9bde4bfeaf7d1f48"],["/tags/智商税/index.html","be62e9462007bc8c3507c60b5dbc8682"],["/tags/演讲/index.html","0ab1a67e38de05c7b58c726f139429bd"],["/tags/爱情/index.html","bdb4e017e1d07e86000c9a70380b188f"],["/tags/生活/index.html","0e233f0043c03e258fcaa1a2cca06632"],["/tags/睡眠/index.html","27d596186a2b3bacf7c0b9042447b2b1"],["/tags/科普/index.html","bac18dcbb3fa2c87e38865eb67b4ef46"],["/tags/精神生活/index.html","4754b2426fc95809502d00ae0c1a2aba"],["/tags/经济学/index.html","a6febfe9fe68738940a4094edf01b0c8"],["/tags/自律/index.html","65adb8d06f424d43e6e98da4ea91ea92"],["/tags/观念/index.html","73fa4aea0c7f4f6a4b1517ce60882ef7"],["/tags/解决问题/index.html","80ea875041f502c9d4062db3ebbc67a6"],["/tags/记忆/index.html","453ce1c8f4221e8380d94d5fc824515a"],["/tags/诗/index.html","df2c898621ac4f1477db8964bcab20ca"],["/tags/财富/index.html","3074bfe13719b9dba580b7bdbf69ab5d"],["/tags/阅读/index.html","09dd7bef72edf7d8aa1d9b32e794d710"],["/tags/隐私/index.html","01ec65c07c60a865d89cf334d5b77324"],["/tags/饮食/index.html","e6046227187099d8f522afb72431f062"],["/works/index.html","c024a9d61596b1f01999ec8d5be9d948"],["/works/item1/index.html","e4ace13643941c1410d8439a41c30691"]];
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
