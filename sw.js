/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ead3d3d0c44eb5303dbaf26afa2c371d"],["/about/index.html","acf8a268090ab17bb63d0b9d6043cff8"],["/archives/2013/11/index.html","8f537fd6f870e65f5ccea2cf490a6ae7"],["/archives/2013/index.html","042cb96e8b0d12c07d047466af59cf37"],["/archives/2014/01/index.html","9a937719a8dc36a01c79cad2f2817378"],["/archives/2014/02/index.html","fa30ed3a5440c7d319bfd904dc18eb8e"],["/archives/2014/index.html","5b70ca39a60d4900a921844a5c1b9b7e"],["/archives/2016/01/index.html","f01b2339b4007200770b3ad2198f3f7d"],["/archives/2016/06/index.html","124a44efde948034b8a3e1283136e5b3"],["/archives/2016/07/index.html","7ac75e30ef1d46f4b21c0e74eaef8d0f"],["/archives/2016/09/index.html","3b69df02713239557d11887e4384f2aa"],["/archives/2016/10/index.html","31eac5c97226163c326cd029d455b39c"],["/archives/2016/index.html","ef0b1f6f95bb0dc4fb97876f0593154d"],["/archives/2017/05/index.html","64ba855446bc42b19d77507893be5674"],["/archives/2017/06/index.html","918a26d8739c2a75e2fc0478aa9372de"],["/archives/2017/07/index.html","44216b3b3a2d54dc0983fa0de5fb8267"],["/archives/2017/11/index.html","9e0845148965ce313dfd47eb4ea900a7"],["/archives/2017/12/index.html","22979c5b29ff20f38fef22bec4accfb6"],["/archives/2017/index.html","5583eade381c5d09fbd38a46d2b748ba"],["/archives/2017/page/2/index.html","824ee78f45c723606421c5258b9d50cb"],["/archives/2018/06/index.html","50aa2c2ffdba62712d587f828403703c"],["/archives/2018/07/index.html","af59b240a515ba43ff47c5bf5e8f1bf8"],["/archives/2018/08/index.html","f1603ac0af76f63b09fbd4376a172a6b"],["/archives/2018/09/index.html","a70907843b8209de8dbbef36a4c44962"],["/archives/2018/10/index.html","e2354f5312e036b39d07be88b2190724"],["/archives/2018/11/index.html","3f9c9566a0685c951131ce4b2ed579f0"],["/archives/2018/index.html","54162c2d3657db83843c916f52eef05e"],["/archives/2018/page/2/index.html","971fdcf8241327cc232d9f574098fafa"],["/archives/2018/page/3/index.html","751616a6f96660df0e8fde0c6d14bfd2"],["/archives/2019/04/index.html","c346ab80d2bd87e0751f5398719381ad"],["/archives/2019/05/index.html","8d8cb79c95e6326e36bffbfdecfe86f1"],["/archives/2019/08/index.html","7def0190f5034b73cf006d3c5e8de8e6"],["/archives/2019/12/index.html","530f2ccbb81dbf69f4a37de0b6899e38"],["/archives/2019/index.html","7d1cd05b383f8ec5e1c09107cd899ae7"],["/archives/2020/06/index.html","93db1abd6df8e5c53c9257c6e3649a46"],["/archives/2020/07/index.html","6b51393b408a8bfd569dcf1711fce880"],["/archives/2020/08/index.html","c26907194a0f99f00ec728725a5f658a"],["/archives/2020/08/page/2/index.html","670ad5955e567a27728cc84151bda696"],["/archives/2020/08/page/3/index.html","6132d44dbf0e4f9e09b538af7a11cca8"],["/archives/2020/index.html","0b136e2142198e82a91c65f7a2557aa1"],["/archives/2020/page/2/index.html","1d702694d4fe1e28d5ba3616589f933b"],["/archives/2020/page/3/index.html","589d3631e26fa67ef6a673f322f5d7a3"],["/archives/2020/page/4/index.html","98664dca0bcba00dcdddabd94130f4ab"],["/archives/index.html","4670f8247c4ddb2c5c00a611815548ef"],["/archives/page/10/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/2/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/3/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/4/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/5/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/6/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/7/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/8/index.html","14fd659ff737d44c8113966020aa614e"],["/archives/page/9/index.html","14fd659ff737d44c8113966020aa614e"],["/article/11fb9e73.html","e61be1bc8287c0d83b60fcf6dc40d4d0"],["/article/136fa9d8.html","575cb4c1d872f3dd9f787aa146d0e495"],["/article/19718e8e.html","755f77de391fd499f495a5e49e100a47"],["/article/1b342210.html","b22d4cdd4e9042be2dd62aa914b2bb83"],["/article/1eb9d23a.html","a24f477b2a6c3ffc92707fe59f2e1e0c"],["/article/228c75d3.html","d57e1207afdbdfe438a2f8c775b16970"],["/article/2b3aedce.html","c342be23f362d3b35512c146951213a9"],["/article/2e7c5c98.html","b51ac2dd49a70e3b3e23033acdb70217"],["/article/3229fb3a.html","044fc2fdca9ce4aa82cb00e7002ce6ee"],["/article/33554c5b.html","0017fa26de7c639f2c2d1803e583ff01"],["/article/35a56429.html","257fa5ba86787f2eb56b0d01750451d0"],["/article/4562b0e.html","5df415ad9deca94d2a0626acaa80f278"],["/article/481247b8.html","10a5638da17902188dc3b1e9e7044c8b"],["/article/534bc28c.html","5e6fb2a377e55b15c1b1fc3f1824b158"],["/article/5b152571.html","b1236d719c2aae9b3c956a16d3c06d0f"],["/article/5ca1802e.html","5edbd8f119f707f65579c16e1562b516"],["/article/5f339f98.html","672d37eca88b7720a2b1fe15d9473f6b"],["/article/64c8bce8.html","b67f16a3d7c97718651ce148d6884e66"],["/article/717c02c4.html","0769e218a7b99466af946ac30c00dfe2"],["/article/738c5196.html","bde55207d12cd3984f20c03f22dd27ac"],["/article/73ba8b39.html","e9428adf82e0778c55d2f4429a8a30b9"],["/article/7a5991e.html","e64bc81c42b7058aa3d98e747872af72"],["/article/7d3004c4.html","5e155906f29758e5eed2a313a5bfd420"],["/article/83e42b42.html","38b14f6d379a37e8b6224b108bdbd05f"],["/article/8c8ac5bf.html","99725faf1cfbc82422008ebef3f5a9a4"],["/article/8e989db0.html","430f2e30c75988c4462f15644c976d93"],["/article/90d5d393.html","cbe999f6eddee7d3efcc5c0d04ed4a4d"],["/article/91a5995.html","1e3e3ce0f3b33a5b1bfebae8b01a4860"],["/article/940b4a8c.html","ec80f6fb63c678ae1b35ddd0247dfac4"],["/article/a0bf6b98.html","7d3d958ef8af27ca857b3c8f03fa843a"],["/article/a264b8fd.html","d1716c5dddeeb398960df42f17e5788f"],["/article/b318b8fe.html","c308376e731127b276260c931e320cc6"],["/article/b73c5547.html","b3c760cdf5085824c4d65aa518d90c45"],["/article/bee0f638.html","21887461891a6ffb3ec02b0dd78c9cdb"],["/article/c6bff206.html","92666d15a984913f39f83bd6835dffd5"],["/article/c7063ec3.html","0444a9a0a6c742dae269c21de5af5a7e"],["/article/ca8b4515.html","7014b45818230ca497a5899d7e2608e1"],["/article/ce3b3e2.html","6e2b096acd61f4644e769291855c79ed"],["/article/cf8c0bbe.html","769170e367abc548425900ed965e0a64"],["/article/d60bbbcf.html","d287c1a9e21048f591b297052a53689a"],["/article/d6505d8b.html","958f81887237cdc304d62f0212b6f031"],["/article/da9af306.html","4884ae8288e2bd82ba723cd9d17a1e62"],["/article/e20a0ac4.html","ce3b0004bb93a538ae3d27aea40879af"],["/article/ef9ebd24.html","19041b399794eea426074864b83d78b9"],["/article/f01b987b.html","dac8929e5bd94ea5fbc3a25ea8395d3a"],["/article/fd541bb0.html","1d35f56b8770923ba56b20f8bd8a719b"],["/blogger_said/index.html","70e1004fe84b94c472d5e0ba1efc1fd5"],["/books/index.html","6f851aa6415d6de0309f40efbde30c74"],["/categories/index.html","10ba3b72997a9eb14375db5e5fb41d44"],["/categories/价值观/index.html","abb712bed0a1b538e1b7ca3140be4b67"],["/categories/健康/index.html","847aec693ee1737cfa9174ff93be2be4"],["/categories/投资日记/index.html","ff658b257da88d79c528c449c9185190"],["/categories/数据分析/index.html","a389b718099018663ad685b8f8af44b6"],["/categories/翻译/index.html","4b08b47971637c11cdd8739febb8311e"],["/categories/英语/index.html","b157c311f645f4619a569926a8caeb98"],["/categories/计算机/Python/index.html","055ab876eaecea4b5af2b807ab6e4e1e"],["/categories/计算机/index.html","dde5bf7c5d39095ab8fa2ec11d2565fc"],["/categories/计算机/工具/index.html","2d472e3fa4fca32928794d4340c41339"],["/categories/读书笔记/index.html","7cbeda0776e9d66e5cf5e9084a22475c"],["/categories/读书笔记/page/2/index.html","2ad97a26216747a114707ef200247b63"],["/categories/转载/index.html","a126aabc80cf54f202703f74faa16f6e"],["/categories/转载/page/2/index.html","2e2be7488d04cb118712049a3ae01671"],["/categories/随笔/index.html","a382ad33f66511b03c74c47f80a6c2cd"],["/categories/随笔/page/2/index.html","44eabe992a6e07b7ad2ac652c2b25d4c"],["/categories/随笔/page/3/index.html","d0b4e0f1ae8c0ac9aca4f318afeb7644"],["/css/style.css","de5db92d050e561c401ecdde37e9561c"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","bf9071f05250c83b2c33002befd5b0c5"],["/history/index.html","83ebd7972074c00dedc11e66c19b5f54"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","03c99fae3ea90dc1e280e2d202d7a0c5"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","791bee689931f0dd1819c862db0440d3"],["/page/10/index.html","4de39a032b504ca9c9eefa77f95328ea"],["/page/2/index.html","e06437b3a584856e886080be375605a0"],["/page/3/index.html","5f7004aadbfd8654f98525eb7f5a3a54"],["/page/4/index.html","e65a5a4e5a1c0739ef06a7fee9939a2c"],["/page/5/index.html","cfe69d030f65fe345f7fa5939c17deb5"],["/page/6/index.html","22e89cf31399ab9630d1637508caffc4"],["/page/7/index.html","cccffc171d2037023696e0034e2cca16"],["/page/8/index.html","29763f480c6f2f3104d835d9d42223ee"],["/page/9/index.html","db1a639a08de14b96cc9454bd20d4d83"],["/photos/index.html","fc22955f02ada1fcd8f6257744074ccc"],["/recommend/index.html","9771eb2c03eccb1b97d074ce1f853f2f"],["/sw-register.js","3121a98370d88135040e0e17f931ca0e"],["/tags/git/index.html","ebbef5e2df206afa33c0f0dab9bab6f4"],["/tags/hexo/index.html","b6b0ea5d0d212e2caf1443421fe52993"],["/tags/index.html","550b5eba8447bcfd8daf3893a3e5e8d4"],["/tags/中医/index.html","a9812ef3286e1a93cf1695fecba144d9"],["/tags/休息/index.html","8796a55adc565437dbdd4c609daeab95"],["/tags/公式/index.html","46a4d01c895749195bf1e467308a0367"],["/tags/写作/index.html","bb77b2747356191b99fbcafd74746dac"],["/tags/区块链/index.html","f7a3c72209f0d3965ef0c70eb68b4469"],["/tags/医学/index.html","5109e86b89f359755ebdcfda557729e2"],["/tags/原著阅读记录/index.html","c917983f0674aaa4a4158d6a4d86fbbf"],["/tags/反思/index.html","9e854f354d753a6e32f5853794f911c4"],["/tags/同学/index.html","82a195cdd67a843b58cd7a27e5263b7e"],["/tags/听力/index.html","3207168dada3e14832f316c1bc34a6ef"],["/tags/处事/index.html","23d65d16c3e5b6687cf9fb6176293876"],["/tags/如何致富/index.html","54ea5cac5fc7fbff0fec2dff58164b10"],["/tags/学习/index.html","b3ab273a6966bb4afb009f083517a759"],["/tags/安全/index.html","02d46b97dc757fe767babddd405aaa05"],["/tags/幼年/index.html","6959d2900f7348ecffd458ed8fa49c4f"],["/tags/幼年/page/2/index.html","0b7e215260284048e279724fb016b9d7"],["/tags/微信/index.html","0a9d3d31c628c3f244c6ea265bc2ef60"],["/tags/心理学/index.html","fc44ab8508a333ead57fad9600906d89"],["/tags/思维/index.html","ce995a89480ce1db2186a74235489ec7"],["/tags/情绪/index.html","154d210f5cf3162a801aeee8815db5e3"],["/tags/成本/index.html","0711c4059101e1aa2c75b57625715b19"],["/tags/手机/index.html","87aa534b507b5ad97a140fcaaf43b853"],["/tags/搜索/index.html","4da888190a3d5057a4f4c74e431095a9"],["/tags/效率/index.html","3f0223a26e24ff6b7f286fe545a4c0ac"],["/tags/数学/index.html","e5a38180e5be7d9a1a60036952751920"],["/tags/数据处理/index.html","aab966db22c1bdb93a4c1d56251d0951"],["/tags/文学/index.html","2481f78573357dbdc3da41b95b3d5076"],["/tags/方法/index.html","c98db7b6653ec648fce6a9bbc04e5140"],["/tags/旅行/index.html","9073d9bf9143a1fe1516653c57c0e01a"],["/tags/日记/index.html","05d777c17557da81e35f74b9d7f50a10"],["/tags/时间管理/index.html","25800af53814ee60b340471aa8b88b55"],["/tags/智商税/index.html","84234f296e59ed4d1ade2345461e433a"],["/tags/演讲/index.html","a2e2b5450bae05e4c8943dad518371ba"],["/tags/爱情/index.html","43cc0fd774070c2f989db79581c958a0"],["/tags/生活/index.html","29503cdb6c33e059c4ed9b97ee222088"],["/tags/睡眠/index.html","5cad2c85a0e8759e62e22cb468cab2bc"],["/tags/科普/index.html","d9313f59da7dffef35ec481d47c0e5fb"],["/tags/精力管理/index.html","a426f581e1e545d108a2e6c02d9f531c"],["/tags/精神生活/index.html","6a33643434a33a1456b7c94789155294"],["/tags/经济学/index.html","da1ed4618ddf2a8b97e1a638590297ea"],["/tags/自律/index.html","4571720e85468027e17b24ce24ef9192"],["/tags/观念/index.html","4d992710cc90fa0bd9194d64001d310b"],["/tags/解决问题/index.html","38d6f2aaa939d253e96c852f7c646da5"],["/tags/记忆/index.html","bf54e3b9da45bdcff5e8b2b4f747d886"],["/tags/诗/index.html","bc54b77b00466bf495386274f6900bb4"],["/tags/财富/index.html","43603dc6d6af6ed07adb60bbb537bc7b"],["/tags/阅读/index.html","f611b91308fbccdf6df7aebc686b6749"],["/tags/隐私/index.html","f153aa697e78eee3051353a805b82444"],["/tags/饮食/index.html","84fd6613e170c6523ee436579d2c9142"],["/works/index.html","6a9f0aad8a4c3e92994740dc72a06e8e"],["/works/item1/index.html","2d461cb7fcc25bc6a4881baad19a51a2"]];
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
