/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7ba7513d8d1729f037ceaae47e87d3b7"],["/about/index.html","c848cd6bf6dfbed5f8a5f9d4caf0e61d"],["/archives/2013/11/index.html","0202038041abfc0d04a144d921f9680d"],["/archives/2013/index.html","72c1bf4995700917229b41c8ad7d905d"],["/archives/2014/01/index.html","6fb2a90193f378b72f328a9c7c1dc65d"],["/archives/2014/02/index.html","f9123fd66e09e954bd4daf1e0f7a9db9"],["/archives/2014/index.html","a5988c42609efc40011d9cb016c9c49a"],["/archives/2016/01/index.html","4881f3ff9fb9637f786cf480bb4b2369"],["/archives/2016/06/index.html","600e9ff7e846775396498aac268409c2"],["/archives/2016/07/index.html","5c4e712f3ce52eda381f6f2e9b45af06"],["/archives/2016/09/index.html","1f84f0b2342cc424c76615e84d8d8915"],["/archives/2016/10/index.html","7bcceb60daf9c6843e5d0d5d6e95c060"],["/archives/2016/index.html","f70fd5f3402168c7ac96b6384ac97d61"],["/archives/2017/05/index.html","43c2184ed896f68d3762018c397b9329"],["/archives/2017/06/index.html","4273b1c1dd50527b565e2dc0eb2d3198"],["/archives/2017/07/index.html","fe0ed9788cab09ad351f752b626d014c"],["/archives/2017/11/index.html","fec82bc0de960caad47fd6f2350db041"],["/archives/2017/12/index.html","26624b4a600b51b153b12486391287d2"],["/archives/2017/index.html","de23ec18c2b9b32ba134b9f2c8b9791c"],["/archives/2017/page/2/index.html","ed0549d3c406619d2f8b7176cf1e62f9"],["/archives/2018/06/index.html","cf2481535c3c2309fcbf8cd739d0ed2d"],["/archives/2018/07/index.html","de1f231692ce48b8ede76ec6ea05ce87"],["/archives/2018/08/index.html","0428feeef125308eae41d85f0b16fc12"],["/archives/2018/09/index.html","34caf78c03deca5a0f1553698ea57806"],["/archives/2018/10/index.html","9b56256e761a8c563feaee121eef459d"],["/archives/2018/11/index.html","60533cbbd8006f3239f76022fcfed27a"],["/archives/2018/index.html","2a924ddeff8dc248d0a89eb01b315578"],["/archives/2018/page/2/index.html","ee85b35eb682a1e4d535f6f30d68d5d1"],["/archives/2018/page/3/index.html","534aee7339e73022e62c60dad257b531"],["/archives/2019/04/index.html","dd123001bd2263a99ba420be05875522"],["/archives/2019/05/index.html","f828dad6e5667808f57d816b146e0053"],["/archives/2019/08/index.html","f43fada4d8e009a2aeaad7746564788a"],["/archives/2019/12/index.html","c2e605bb752bf19421aab13fe4314209"],["/archives/2019/index.html","8301e11f76184058f61b969a04c40a15"],["/archives/2020/06/index.html","d8980f5cb2ef8e1235e9f12dca36a29d"],["/archives/2020/07/index.html","7356bff14627139dfe465c9501429580"],["/archives/2020/08/index.html","2e49c5c3a4a2c29cd403d14f3d09d7af"],["/archives/2020/08/page/2/index.html","00fd1cfae3a5d73628d475af077b5fab"],["/archives/2020/08/page/3/index.html","31b8fbc1566a7b6876293c407b353fe6"],["/archives/2020/index.html","e3049814fbac4b8ae08f88f510c3bb82"],["/archives/2020/page/2/index.html","4107f7a3276cd5e3e1d7fc8c0257150d"],["/archives/2020/page/3/index.html","457b343546f195fe8afbc74132a2545c"],["/archives/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/2/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/3/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/4/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/5/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/6/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/7/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/8/index.html","be055bb7848d7d1f176da142c0053f89"],["/archives/page/9/index.html","be055bb7848d7d1f176da142c0053f89"],["/article/11fb9e73.html","1538511c262025f6fc27470483eb3fe9"],["/article/19718e8e.html","ccdcaaff654070a5d8c5b14d726769f0"],["/article/1b342210.html","df05510e9735c1da8f4066e3b39ffeb5"],["/article/1eb9d23a.html","e39d446b7fc4c0b43ef61cd1f44595f5"],["/article/228c75d3.html","69cc504cc2b045c8babd8ca81b8f95aa"],["/article/2b3aedce.html","e8990652726fa70b82aabb63fd6da612"],["/article/2e7c5c98.html","735a3c30d72854d8e9fdb01adf5f4dbd"],["/article/3229fb3a.html","a6962cfae9be454aea047f4b9f5d27ed"],["/article/33554c5b.html","c7d5b7ce6cedf9f450616f5edf4f3437"],["/article/35a56429.html","0b694e6f62d64f3c5b61c2ef8815c9c4"],["/article/4562b0e.html","8d8df93125a9435f2f96c6c73578f60d"],["/article/481247b8.html","cde4e7b5b26461ac1000a2498275ba42"],["/article/534bc28c.html","aee214e1c528c864796ecafcc7417845"],["/article/5b152571.html","da8f126acc924bf16bda0d6a88553179"],["/article/5ca1802e.html","12dd3b35f322f2f8dd4a3515de00aeee"],["/article/5f339f98.html","6a0b229f86be1dd3226c97a1b16c7388"],["/article/64c8bce8.html","41aba79ea32a77809562f860dea01f92"],["/article/717c02c4.html","9f1ea7e97531b9c5e4d9d043efe410c1"],["/article/738c5196.html","212e21037bc35cf0ddb99e3365a69129"],["/article/73ba8b39.html","c64a34c0f828e12ffe1e42a1852d568e"],["/article/7a5991e.html","0ca37f1595bf6e6c8fbc2bcb9dafd0b0"],["/article/7d3004c4.html","4b859a2e0b9238762e95a88209e06a6a"],["/article/83e42b42.html","4e075ed2b84f7d82cf0e0655b7ddc2db"],["/article/8c8ac5bf.html","b774bd0143039c68f6d204c981a4e8f5"],["/article/8e989db0.html","fd01f3c4541f769f6574b4fc6f88cffa"],["/article/90d5d393.html","208edab5f0d8c9167faf64f51f782c86"],["/article/91a5995.html","6bb599b902a4964052b200f4fd736809"],["/article/940b4a8c.html","291efc9140528edefa5df03c8370ad25"],["/article/a0bf6b98.html","40fe5ef66ef9d676ab51a60375f72736"],["/article/a264b8fd.html","9f44fb4d9d2564340d44935f8b7fc6bb"],["/article/b318b8fe.html","0908beec1734cf2d9c69d72168f17c70"],["/article/b73c5547.html","8c2cbfbd40d98141bddf9b28ed18ef91"],["/article/bee0f638.html","50d471f03c0a9bdcf8eeed8c9c65aeb7"],["/article/c7063ec3.html","d9d487d06dcb6c3252b6d1522ce24412"],["/article/ca8b4515.html","1a41e6beedfa55d45c977dea0850b44b"],["/article/ce3b3e2.html","71c86dd69539f87be40bd589c74c1a86"],["/article/cf8c0bbe.html","bef8834b3d21b0081beb045812fa4350"],["/article/d60bbbcf.html","789e7b72c27453d6bfb49468550a762b"],["/article/d6505d8b.html","482fe645e206addae16e7da9b79016af"],["/article/da9af306.html","2f4169bac760347e09b205a5af7883a1"],["/article/e20a0ac4.html","07190608a788e8bf8779d810c9d6d5ce"],["/article/ef9ebd24.html","649ce60c72f887b3c2598d7d68ad6e6f"],["/article/f01b987b.html","a95e4ed25225b982c55ea37a6e57a1fd"],["/article/fd541bb0.html","50a2269f4f5f159f4e59f79bf718aebb"],["/blogger_said/index.html","fd5af4a2690ca44d7199df35946e4677"],["/books/index.html","06478fba567ffda554c9d3da30336b2b"],["/categories/index.html","0d28d1b067f32e46fddc18826f0bc91b"],["/categories/价值观/index.html","27e580bbc872eafbd342613cd0623e0f"],["/categories/健康/index.html","076c27df2a819044f50c5090e7a83545"],["/categories/投资日记/index.html","f8d030d91de624e272c00a70de954861"],["/categories/数据分析/index.html","d1bbcd6dba27a38fd95a27b1e8120d97"],["/categories/翻译/index.html","d7ccb5ecfe4e42936c10a15eb473d342"],["/categories/英语/index.html","bb1ed630aedf700be8e142db2f373f03"],["/categories/计算机/Python/index.html","4fa9f93c287a3f0763ff43be84bcfa5d"],["/categories/计算机/index.html","d9a7b2f66c6168ea9e149c5aa3de2d99"],["/categories/计算机/工具/index.html","6e8b0d89a157ac1fdfe4d320f089386f"],["/categories/读书笔记/index.html","3964f76d1862de8d9c493c42dd57e4ac"],["/categories/转载/index.html","ed63e1a0b4f4474000a1aee5120c4c55"],["/categories/随笔/index.html","01cd2e752e664edb74ddeadb98167411"],["/categories/随笔/page/2/index.html","ab3b4844b057adbc9b885f6e69226223"],["/categories/随笔/page/3/index.html","bdc4a170be26edc9ff3e68f3edd9e208"],["/css/style.css","33d1181816e7bddd2eceff6171f3f155"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","b2467fe48af61b5a7545db2a47457199"],["/history/index.html","c59970ffe00851b0b041725402ead544"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","b1773e3aef50bba333b0a78c9ca3ee91"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","f8c9d4c7dc3bd0add4aef5099c806af6"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","c51b71c411ce82e1fbd1bccc8b5a38b5"],["/page/2/index.html","f55f5d6d3c27c07dce9170c8c7e8c7f4"],["/page/3/index.html","242f41dcc389fc3b4ccf7acbff7fc469"],["/page/4/index.html","0164e5bcd45f14d8bde48013c2c5ddf6"],["/page/5/index.html","08f995476116380ba8c15463b9f940b8"],["/page/6/index.html","f5916d5a6db4a139fc3839b632ca067d"],["/page/7/index.html","208a1561d080d87768b26e7ee625e29f"],["/page/8/index.html","8a1e7548f14eb4d468c768f74fc8bbaa"],["/page/9/index.html","846bf0965fa54f894d62ef43237ae3c0"],["/photos/index.html","ac1bf08096d1fecd0aff1d2994a6ff21"],["/recommend/index.html","483ff33617068ac20ad9908a652f7291"],["/sw-register.js","c5b955f7183871b649290fb2894c9227"],["/tags/git/index.html","32af12add3e015aca911e83d53358884"],["/tags/hexo/index.html","dd4e58cc0712681040484dc95850ac09"],["/tags/index.html","6ecdaa83bf61ffe1a854ccc2a1e3d15b"],["/tags/中医/index.html","4adfc840e3d544d6cae95d589ddcfce1"],["/tags/休息/index.html","363f33b6545e8e74850d69874a7b9695"],["/tags/写作/index.html","ee00ccb93adb28565b57813a16ba1eb2"],["/tags/区块链/index.html","d46c00540d9f3043dd39795428797363"],["/tags/医学/index.html","5ae787e101fc4a0e01aaa1b68cd9ab6f"],["/tags/原著阅读记录/index.html","ecdc47560f0cec7c0f04b5e1a8f83f6b"],["/tags/反思/index.html","ae037884d5089a03622fbcbbde1d59f2"],["/tags/同学/index.html","bec7774834a6de9acd89797fcfad31b3"],["/tags/听力/index.html","f107691f28beed9e1c65242c01581ef1"],["/tags/处事/index.html","a209b32eb1d784cdff6c6e0ef7d4bf60"],["/tags/如何致富/index.html","f4a6999665f64def505b37c397466b40"],["/tags/学习/index.html","ab73b2c36b28bc59551e99af4fd5fcfc"],["/tags/安全/index.html","153048bcd1107b0e833139c522baa9ed"],["/tags/幼年/index.html","2fddd56931ed772a00dd08591f5f7b47"],["/tags/幼年/page/2/index.html","c98c9a9412a3a1c7ca874db8657a9faf"],["/tags/微信/index.html","5e90ad26930b2cce30f576deedcbcd7e"],["/tags/心理学/index.html","7938c6e2583d5acb1f9b0b39f85ea1d3"],["/tags/思维/index.html","a79b48212678300fa77cfb2260e0141d"],["/tags/情绪/index.html","b76a10a9bd82ea0ef9a36bd7593e4650"],["/tags/成本/index.html","8b510f54e5e4abc2fc31272a2fdfa77e"],["/tags/手机/index.html","3be68fc5e9dd4a02006f497b822ba991"],["/tags/搜索/index.html","0193b0413f1041fc24002e976a01e342"],["/tags/效率/index.html","a72cb433068e2a683bd55a59f93899b3"],["/tags/数学/index.html","a64806a1b8ec0fc5a1eab16fba42632b"],["/tags/数据处理/index.html","1d206c93d9faf9702acf9774eb3c0fdf"],["/tags/文学/index.html","5ece896538327eb5a3bd1cb902009eb5"],["/tags/方法/index.html","d5387b62145eefb03a12d04e8e777a4c"],["/tags/旅行/index.html","c226bc91f6e3c5059932b3603f594e4e"],["/tags/日记/index.html","ffb2cccce40261585d01e6a9f8ec4406"],["/tags/时间管理/index.html","60b5355fd7ae7b4ecf4a6c4aefa4f68a"],["/tags/智商税/index.html","05dbc5a7716b3a6eac1a38c00f56df60"],["/tags/演讲/index.html","f170e3e9463f8d45bc323fa354bb788f"],["/tags/爱情/index.html","2128d11823be42238d0bd70d8ee94543"],["/tags/生活/index.html","3d48a63794613ffd4627cac048e44dc0"],["/tags/睡眠/index.html","f6c645a2e04ada77e299e5f00c70c072"],["/tags/科普/index.html","9b4aa00de690ba3252dcf11ad6305ca5"],["/tags/精神生活/index.html","f751db39784e6d263dfca43227658e76"],["/tags/经济学/index.html","caa4550f218035d93a562279a518220a"],["/tags/自律/index.html","f7d99625c3183422922f2a60def26193"],["/tags/观念/index.html","a2466b8b2c2b5a6faf3363ccc9ec89c9"],["/tags/解决问题/index.html","2983f71e208f5df71ae8412997bddd45"],["/tags/记忆/index.html","81dc10ed0bf9cfe1a7743dfe63fa2d1f"],["/tags/诗/index.html","6be7e09fca73315da74fe24ec1103892"],["/tags/财富/index.html","f2e64eafb86fe0e2d2825a9d0b7a5bd7"],["/tags/阅读/index.html","18804c303c3f470f36c36180ba2f5bea"],["/tags/隐私/index.html","552582d14a265e0632439d0c1f2fe923"],["/tags/饮食/index.html","95ab116db4b91abdd705da69e99ecca3"],["/works/index.html","c024a9d61596b1f01999ec8d5be9d948"],["/works/item1/index.html","e4ace13643941c1410d8439a41c30691"]];
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
