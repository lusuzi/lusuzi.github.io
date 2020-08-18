/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f93d74541af544cff460415e176a8fef"],["/about/index.html","fd4cfdd22127b361850c27160bc5ede2"],["/archives/2013/11/index.html","9212f8561c17574888ccdd0e5a198a34"],["/archives/2013/index.html","eab2691653b88b2a857154f8a80123b1"],["/archives/2014/01/index.html","caae8f40655834d9f5e78309ab62c07e"],["/archives/2014/02/index.html","ddfd21cb8ca2193b73289d8eb6542884"],["/archives/2014/index.html","4e661e493f7665a0b7383b37550d3f82"],["/archives/2016/01/index.html","92eb3db68589196c70f7b09679c8e380"],["/archives/2016/06/index.html","ee26108705e4178692a711c235616c83"],["/archives/2016/07/index.html","9f590e04aa1d6f4075992e36b6862577"],["/archives/2016/09/index.html","fcd90795b566ff5dc87836aa8ee0c16a"],["/archives/2016/10/index.html","7c743e7898baec1caf3d1dc15335e83d"],["/archives/2016/index.html","89579f19fb3714626d844204b2dd334a"],["/archives/2017/05/index.html","376a55f7d63e295715d09be6e0e283d1"],["/archives/2017/06/index.html","3e63be18634527c32b548c64333e5dca"],["/archives/2017/07/index.html","b69217ffcdb5ace325a3f9d96fed4ead"],["/archives/2017/11/index.html","129ef89e968071607917ad177e8358e5"],["/archives/2017/12/index.html","8ec66de188cfa50daacd681cfc22559d"],["/archives/2017/index.html","e6ea54159f1f3b69f428c22ca28bb316"],["/archives/2017/page/2/index.html","b4b12f6ae4a315d9e8139a885169c4fe"],["/archives/2018/06/index.html","47e7dd1022f26aac78c5eb9e2558bda1"],["/archives/2018/07/index.html","56f994381568c4de9839ff1b51977783"],["/archives/2018/08/index.html","86bf794e09b1756a55acbffa50343067"],["/archives/2018/09/index.html","df8c74616168c8d51d798787afd02c53"],["/archives/2018/10/index.html","0e40870b88221472d9c0dba84ff0b2e0"],["/archives/2018/11/index.html","7e62b6fbc6db3c800bef16e977ce6ace"],["/archives/2018/index.html","fb7d448e5c54e71809917abb316790a0"],["/archives/2018/page/2/index.html","8e617426c282fdc3bd83774ba4ee522d"],["/archives/2018/page/3/index.html","63cefc885bf18a10bbe300f8c27cf05c"],["/archives/2019/04/index.html","d2ad200b7f81b6cb7e6beddca47cbc2a"],["/archives/2019/05/index.html","11618c27030dcf7dceae3ba33f021cd0"],["/archives/2019/08/index.html","40c86319d4de358dd8ba49b3fc7e8499"],["/archives/2019/12/index.html","dca860ce4966bc3ed8d8d2842b470b27"],["/archives/2019/index.html","7ae3d6b851a2e2d5d68d89833762a0d6"],["/archives/2020/06/index.html","588c0b371ad950542de1e2f7a8ffc488"],["/archives/2020/07/index.html","1776b7b9b182d231dccd37e700d1bba5"],["/archives/2020/08/index.html","0dd53b8f5f5ac56cd2333cf42b6c071d"],["/archives/2020/08/page/2/index.html","44df679aaadad5704e39e92fa6a4376b"],["/archives/2020/08/page/3/index.html","07f77916c0da63e6e966abd06abd4750"],["/archives/2020/index.html","1b1af334b548fa78cec7e57caaf40fd1"],["/archives/2020/page/2/index.html","179122f2576f9599525cf5a318b81ed5"],["/archives/2020/page/3/index.html","400414500620ec60122c7fa8bf39a83a"],["/archives/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/2/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/3/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/4/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/5/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/6/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/7/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/8/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/archives/page/9/index.html","663626ff5adeebe3b3d32a3a3876b884"],["/article/11fb9e73.html","7946deb0255df570d72bbc81d63e7b7a"],["/article/19718e8e.html","a732890753b50eb7e782b97c36fa6d37"],["/article/1b342210.html","bf356c71098beb1002fcfa7992456655"],["/article/1eb9d23a.html","ecd1315c3020f8cc0f93ff2a59e10d25"],["/article/228c75d3.html","7d58c9f9a93bcbf64818581ed5885c75"],["/article/2b3aedce.html","010374ae32773c0f52203f96895114ad"],["/article/2e7c5c98.html","6e2ee6eb8b9d828a47e67ce34593e2da"],["/article/3229fb3a.html","cde024cf091adb10403607a6aae6b270"],["/article/33554c5b.html","61866cb575af68ecd96a952d03220e31"],["/article/35a56429.html","b86a95cc8ce4010af93a75bc1fa6bf21"],["/article/4562b0e.html","2e20fec05edb0020482e45e38f0282fe"],["/article/481247b8.html","ca8bb9f03c442b6987596618ee97fe41"],["/article/534bc28c.html","a811c34c7ae267b3d3c8902882ff5035"],["/article/5b152571.html","1b485f63abe24ceccff6dbb647d1ab18"],["/article/5ca1802e.html","8ca79424c1b336243da788c4781e5f94"],["/article/5f339f98.html","ffab599f5388d806ea5d525cd5ccb315"],["/article/64c8bce8.html","74640402e7a41265849a7238aa806c16"],["/article/717c02c4.html","f2de48e674ae430876a76a3eb965c221"],["/article/738c5196.html","ae11718b96791cd35ad10afe19165506"],["/article/73ba8b39.html","49ebea83ab16fbc0fa42b534d597b43b"],["/article/7a5991e.html","83c10d990384fa914f270f1d59d78e60"],["/article/7d3004c4.html","cd5e81fde5c5d816cfe8fafef4b2b66e"],["/article/83e42b42.html","199599eae10b9bfc66b5f2ae6e91fafa"],["/article/8c8ac5bf.html","0fa2b0f210a63ca44bfd8ba6645b4817"],["/article/8e989db0.html","a1420bbae3006451b7f1e639d48b446c"],["/article/90d5d393.html","a4235805fed9fdcdbc2b0e788317f7f4"],["/article/91a5995.html","a329a2d971a235e4778fa40c381f2951"],["/article/940b4a8c.html","1696b7c59217e53c28455e9f09460463"],["/article/a0bf6b98.html","bd5ee229094f778b6902ae76b86d2051"],["/article/a264b8fd.html","25cbd9bf78f674b5ce44d51d83c1024e"],["/article/b318b8fe.html","e143ffe3d8c1f4cc5efcedf88c0b8a67"],["/article/b73c5547.html","cd0b607e651ae8ecf9a31ebdcfc7805b"],["/article/bee0f638.html","19405093de44638c8060a14adcb6e2b9"],["/article/c7063ec3.html","7c2b5bce01024399e0a8b43481d3cc91"],["/article/ca8b4515.html","c291d0f3a949ff4ee7d5f43eee530f57"],["/article/ce3b3e2.html","1e4db7135ab8ce6b4f5a52568d89470e"],["/article/cf8c0bbe.html","cb24984a0ccd2ae6278c8d3c70d06ca0"],["/article/d60bbbcf.html","f15d3d32d7964b64439a98e85ce3a30f"],["/article/d6505d8b.html","d4bf46cb728f1b624c73bdfacfd1ef24"],["/article/da9af306.html","1c4c36e0420e48309b8d7a1b2648812f"],["/article/e20a0ac4.html","90fb7f6a362eb285d5b3028895b6c5d0"],["/article/ef9ebd24.html","443f47a0091e11343888f5996f6dc0f1"],["/article/f01b987b.html","f1d7c2d425f0ac64d197937682e3cf0d"],["/article/fd541bb0.html","e7a091c97b36c40b7ce8d82356c54201"],["/blogger_said/index.html","3ded5f527de4631daadf7e4a88896e24"],["/books/index.html","b4504bc5ee7c6c6726057ac5e93d5344"],["/categories/index.html","369cce41adefc5d3048c622cefdfe55c"],["/categories/价值观/index.html","6d92afa98f9018cc321db01ab2ef717c"],["/categories/健康/index.html","e6212bac86a99741640c1b1a81c68ff4"],["/categories/投资日记/index.html","ed6346acf2eac6d08c5f0dd79dc07c7f"],["/categories/数据分析/index.html","07e81dac1acf00762ce2df80e827d87d"],["/categories/翻译/index.html","44d2e47ef0cf868af620f5b092585a8f"],["/categories/英语/index.html","2f74ba9d095697066cf1977cf47660ba"],["/categories/计算机/Python/index.html","7751b2f1097d42346e0483abaa453dda"],["/categories/计算机/index.html","9dd78fc08612caf225680d64d4ce712a"],["/categories/计算机/工具/index.html","685c84e07320df06563331e13144d697"],["/categories/读书笔记/index.html","84e45dacfaade7e48697e054e6c8c274"],["/categories/转载/index.html","bb9181acbcac503cb66af90af6a9853a"],["/categories/随笔/index.html","ec4c7349541421f174e08a658e643ec5"],["/categories/随笔/page/2/index.html","3568f1a424dd30bb6280ad06349b6172"],["/categories/随笔/page/3/index.html","d23f872bd42e6edaa38af78d212530fa"],["/css/style.css","de5db92d050e561c401ecdde37e9561c"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","f0add432343680955b9480eab5c2b5f9"],["/history/index.html","f2483b8aaf9db08257a405bff48c5f52"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","6f83c30c6efb5fe53b05fe6087cdbe63"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","88fe38b1fe5c7c9528c82c75d249acc2"],["/page/2/index.html","c3112266f38ebd1256c7fbc4cab019d7"],["/page/3/index.html","30597f3716ea50c5b42729f5b8433d2e"],["/page/4/index.html","ed8dff5b78c1765def8bb80e3d4094bb"],["/page/5/index.html","1ac25276fb55c8ec3558d16642a8e127"],["/page/6/index.html","2ebff4e5a9ebeb481800dee902056957"],["/page/7/index.html","01912e8ec18f0448eebf4c8c6187d1a7"],["/page/8/index.html","728dda5aede53999e9b58c7d4565bda7"],["/page/9/index.html","e24c02574252a51f537e0ef97ad75391"],["/photos/index.html","5089b3e2dd6273bc09a18f4dd3738297"],["/recommend/index.html","161ff138c976e1424e613d5293c7c073"],["/sw-register.js","6af01a8348a6683b3794e8d51905d6f6"],["/tags/git/index.html","c65e122e3d9f270c89dcc53b2c5c2660"],["/tags/hexo/index.html","65725fc55091c0148670c6e43f14549a"],["/tags/index.html","ca92821d64cff8b6b075973ef60f76fc"],["/tags/中医/index.html","4cdd646a51601fecd3329a3735edb506"],["/tags/休息/index.html","11280afc8beb1a4b56c9993e1d1b2142"],["/tags/写作/index.html","fe58ce8fe5d8848d061399bd7e60988b"],["/tags/区块链/index.html","14d42c35d2421dfcc74d2bdba42e544e"],["/tags/医学/index.html","25d6c0b4bbd8bba19a453e9ffec1ecc4"],["/tags/原著阅读记录/index.html","c977f16ad5cba2a94f0284eca247a7a3"],["/tags/反思/index.html","03a6c2680ee19dc584c0983f1573db36"],["/tags/同学/index.html","427f1ae43211155c743e0398b3cc4a79"],["/tags/听力/index.html","82ceca997e79f5ec2fc618bf49fe99ba"],["/tags/处事/index.html","ea161352b9660091790649e2effa39f4"],["/tags/如何致富/index.html","115b95d6107ddc28052e51b06a0fdc55"],["/tags/学习/index.html","429b7cadc2676bbada434c597181438d"],["/tags/安全/index.html","64a8bebe00a5a1090d5b95bc09c2ca89"],["/tags/幼年/index.html","15cf86e139e6f59ae27cd41dfa1ac628"],["/tags/幼年/page/2/index.html","5ac6ee4eedea54142ee7a9135722e0f3"],["/tags/微信/index.html","d9fbf93635d4efd396e7389a463e9a94"],["/tags/心理学/index.html","541ae189b843e53bc535fa9da62975c0"],["/tags/思维/index.html","701ee6510a5dc504fb54e92dfca7ac91"],["/tags/情绪/index.html","996f4d5be7e2f404e20ba4c8bba70657"],["/tags/成本/index.html","25987391d2ec294c2b00bcdf9794c814"],["/tags/手机/index.html","1ebbd7eb64d6337b793b61e254993202"],["/tags/搜索/index.html","fceb3f3fa0a789fa4e6380e69e9ba870"],["/tags/效率/index.html","9d46b17f09dd2f01e8d0f44e88a2d886"],["/tags/数学/index.html","430054ad37b150946cd78fc37c60ee4c"],["/tags/数据处理/index.html","33b5e7637f187a9d8451c3d491cf15c0"],["/tags/文学/index.html","54bbe2ae67d7a1066bdd7cd114547cff"],["/tags/方法/index.html","73267be46344a0cb3351e9cfa8d7e097"],["/tags/旅行/index.html","faa61a6b79775a4d5a945fb42da2e85c"],["/tags/日记/index.html","17f0d058686702f8d1b638e5c6d79c54"],["/tags/时间管理/index.html","8e704cce2c1faf7729aefa190d2d024b"],["/tags/智商税/index.html","edc6d30245dedee099299f5bdc35a457"],["/tags/演讲/index.html","ac5eff76bcf972fa3f816863b153d6af"],["/tags/爱情/index.html","3138b79de5149e38a730db736f4a64cd"],["/tags/生活/index.html","1ec646be791880df55332991ed14a6f4"],["/tags/睡眠/index.html","3abe6937bf85b57efad443a8f163b147"],["/tags/科普/index.html","4762425f05eadbcbc8fc9048b3cff372"],["/tags/精神生活/index.html","3ccfef1f198f4b9df78e4a05439032bc"],["/tags/经济学/index.html","8560d848e7540862dac17ba50de2c9e9"],["/tags/自律/index.html","0b5b11968dc06becac0a5ad3cc4ae37a"],["/tags/观念/index.html","19dfb9ed706a27fb69bac7a9ed233b1e"],["/tags/解决问题/index.html","efe20d19296a2603a34f66a63cd860b4"],["/tags/记忆/index.html","83cb23731ab656989ad28af9f67c0c41"],["/tags/诗/index.html","16892ef720897e7e1f44a11fa798ce92"],["/tags/财富/index.html","93960de681961bb8bf16a9d894e643cb"],["/tags/阅读/index.html","110c5e7e38b28accd495169e2073b791"],["/tags/隐私/index.html","af3672bd1fdaa64843f80377b0c5ba82"],["/tags/饮食/index.html","3c54a81f77e8858612aa83235476bf7f"],["/works/index.html","25612e2f93bf95731758103f512b3095"],["/works/item1/index.html","dac6fc665c87cb45a43f28dcc89d6b49"]];
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
