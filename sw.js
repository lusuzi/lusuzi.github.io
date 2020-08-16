/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","21775902a6b59700aab3ecaae5b68b51"],["/about/index.html","4ee8f20bfc9961cb102ec2bec983cf84"],["/archives/2013/11/index.html","caffcce6398ec3fd461198c74c50b1ae"],["/archives/2013/index.html","709dcf163830896a94e3464edd351fd3"],["/archives/2014/01/index.html","974afcd51119fdce7360e867469f2c00"],["/archives/2014/02/index.html","ed75384022465498cba92d9eb290645d"],["/archives/2014/index.html","2fa4f4edc0d229bfd2b6819c547a2509"],["/archives/2016/01/index.html","495eec8536c1133f19ba7b499dacf891"],["/archives/2016/06/index.html","eeef1f055387c9313dfa30abb4e95a34"],["/archives/2016/07/index.html","66f5db58a6e5db7e16712e2364c6cbc3"],["/archives/2016/09/index.html","f85807a2e8fa3710dacb4d9473b8d4e8"],["/archives/2016/10/index.html","1a219e561b1c9c6e33581f92f9da1a81"],["/archives/2016/index.html","771f18d791584b8c25fb6ddc5431a98d"],["/archives/2017/05/index.html","088d54bf9082e91f1f323dcd9e8574e9"],["/archives/2017/06/index.html","e893f596b965d59a8abd3a19ad539829"],["/archives/2017/07/index.html","02573e955561385987106aacd88a048e"],["/archives/2017/11/index.html","36d16970b6bed298d58be0e78be05dea"],["/archives/2017/12/index.html","3b5052680231d314ac2f1e6fbb86be2f"],["/archives/2017/index.html","68407fa881fb6452ee83136c361a124d"],["/archives/2017/page/2/index.html","8c4e1a54ad63afac708c041d35e786a8"],["/archives/2018/06/index.html","1b9c78898ec4f56dced10d0b93bb2cbe"],["/archives/2018/07/index.html","0ce97465021d1fa15ea9ec3ad774db46"],["/archives/2018/08/index.html","d99089c9635b5ef4c5373bb0dcb18782"],["/archives/2018/09/index.html","c4eeae7c83f0b9f720091b3da4cd959f"],["/archives/2018/10/index.html","e11f46a7c89cb49e1a8d1a01b32f4540"],["/archives/2018/11/index.html","2ac29e3171608972750c55409cf3b9ac"],["/archives/2018/index.html","8a29da9bf3aaae312563ba99f39decd6"],["/archives/2018/page/2/index.html","52c214e745a0f30629d3bda4664f95a5"],["/archives/2018/page/3/index.html","bc43242bae89e953f6e0197a7f49af69"],["/archives/2019/04/index.html","117b1090bd60cb034c8a4d0cce7a37f2"],["/archives/2019/05/index.html","1bd59ebf197071b6b24ffefdea18e28a"],["/archives/2019/08/index.html","d2081fcc430e7709f8185134072fc008"],["/archives/2019/12/index.html","cd848587bede5300c3e3b22c48b70059"],["/archives/2019/index.html","497674b36cb3d399f2d2ee94303a478f"],["/archives/2020/06/index.html","dee172f05bf214bfc715df9dbe048e3b"],["/archives/2020/07/index.html","1e4fef9286c19a84b39b8c2ff89b4416"],["/archives/2020/08/index.html","5790d07fa1db4de28eaf1e1f87eef342"],["/archives/2020/08/page/2/index.html","0f5a95f50ac24d1ecfa0cb96aa60ec84"],["/archives/2020/08/page/3/index.html","d1f96458c91e4b960bf64474d0228104"],["/archives/2020/index.html","8e8dd3f9dcdfc9454c584e1a5d0de640"],["/archives/2020/page/2/index.html","033a0973d1fd9a5507cb0ce4beed5551"],["/archives/2020/page/3/index.html","7d1dc1ac9e37c577b6e82b6d3e4ead57"],["/archives/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/2/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/3/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/4/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/5/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/6/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/7/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/8/index.html","b73770d5885d4721f70c6d4031ef633d"],["/archives/page/9/index.html","b73770d5885d4721f70c6d4031ef633d"],["/article/11fb9e73.html","4388e76725076bd4c84896a4629adbc2"],["/article/19718e8e.html","88f9509280f7df74c2f29202c4e75d53"],["/article/1b342210.html","fa805b158e35bcdd71f4fef0c6520748"],["/article/1eb9d23a.html","b4082d5734a54b8ece40b235b727ea44"],["/article/228c75d3.html","6ad6cb0293c42bf505b848a619322f12"],["/article/2b3aedce.html","62f6283e7b8008c307c2073ed9aafe01"],["/article/2e7c5c98.html","c024fc7e1409172e9ef5cdefab4c1011"],["/article/3229fb3a.html","0e6ab6bfb157a26488d48cf788694784"],["/article/33554c5b.html","36641a097526ed8ed54443b72ac90d6c"],["/article/35a56429.html","fdec8c0f0ced1acab742146c2d70fc27"],["/article/4562b0e.html","c39979dd94f56d37a319df4e2feda9d7"],["/article/481247b8.html","0b6c8863dfc51f492750da768ec8aeb3"],["/article/534bc28c.html","a5628152c53456edb472f523e106e5d0"],["/article/5b152571.html","2a659028cc11e43d50641cfef73a73de"],["/article/5ca1802e.html","201ff5ec4bac47c362638010c7bc16ec"],["/article/5f339f98.html","aaac946820cbcef35c824654afcc8705"],["/article/64c8bce8.html","de37ef4531ec69405f35c3113847230b"],["/article/717c02c4.html","eda2824e6894c5d6755fd1ad69dd4e29"],["/article/738c5196.html","c0c7eada74da68d88d13cb49fd908791"],["/article/73ba8b39.html","32e9e084652550a5ff3bb0e90bf1b7fb"],["/article/7a5991e.html","2d022271e912af73a130f243dcf02e53"],["/article/7d3004c4.html","94f2eb5bf94858132bee327a41e63249"],["/article/83e42b42.html","7ecd4c3ada80ab52d159f2acf4cdddd1"],["/article/8c8ac5bf.html","6692c321ea0f89127a4a37bbe3fb4460"],["/article/8e989db0.html","bbe190d8f905a6a74cd659e176a6392b"],["/article/90d5d393.html","6d149aa9b5272770732e4850e0d76d45"],["/article/91a5995.html","c6d63757ffeeac9fe7e8b1d1e4f988d2"],["/article/940b4a8c.html","8b3b49733ce68cb4b5f61903725a6386"],["/article/a0bf6b98.html","53a26e885a75671c8590b6e34fbeed90"],["/article/a264b8fd.html","e118ac9ced7dfca81d4f2d5e6935c3b1"],["/article/b318b8fe.html","1b19f2595a112bf2d73f07bd808b8a0f"],["/article/b73c5547.html","02700399dfd67a24cdcbe3c8eb588dd3"],["/article/bee0f638.html","14f6676d350e9258082d8f744e491fa8"],["/article/c7063ec3.html","58d51d1c6577a5088b4c4cfafd71c5c7"],["/article/ca8b4515.html","4b8fdca8f0d1562fca2028c2502522e6"],["/article/ce3b3e2.html","7b6da4953766b04b35fafa08c9529477"],["/article/cf8c0bbe.html","ef74304d994aab26eaa4b7b2f03ba2fa"],["/article/d60bbbcf.html","faab3a282e8b33ac47d307bd00105794"],["/article/d6505d8b.html","b7954bb832c24b79314777a8c92498bc"],["/article/da9af306.html","3322f57c861d3ef0aa8a0da220f10f38"],["/article/e20a0ac4.html","ad02132fe72232cd64829b8d3b14a7a1"],["/article/ef9ebd24.html","36ff5bd47b9369d66f86b13055e2f5db"],["/article/f01b987b.html","34bb115dc584605b2942364b26a4b710"],["/article/fd541bb0.html","c5449492e75933ea1a8f58524c6c73f0"],["/blogger_said/index.html","ea87ea1c4360839a0ce5b5cde2be70f4"],["/books/index.html","c9332b49d4c7cd6b4ccbe4ef44761ced"],["/categories/index.html","b30c25911b6ddf22648b69276e55cd1a"],["/categories/价值观/index.html","b255804a307aaafe1fd28705e3fdbeb6"],["/categories/健康/index.html","8c65f57ac4e7f688fcc12a9f283bee38"],["/categories/投资日记/index.html","4d84b8807dde6c37b8edd1250e8a57fa"],["/categories/数据分析/index.html","67fb08285b9b37b2d99c75dc3afd9675"],["/categories/翻译/index.html","fb19d8e3ffdc9978f4247df49e3d5a0c"],["/categories/英语/index.html","1ff946c88254ed0a61fd5be0b2e56b5b"],["/categories/计算机/Python/index.html","2403186a39a5f586a2b074b07121d02f"],["/categories/计算机/index.html","34a61280ff53940522a001f91cfe5942"],["/categories/计算机/工具/index.html","4237eee6ca4a0fb1ef6a34a48ac40c52"],["/categories/读书笔记/index.html","3f5d402714a7bb216baaa799017e0ced"],["/categories/转载/index.html","02f84f6577b9777eb689a26b97dbf58a"],["/categories/随笔/index.html","6ccb45b4cd89cbb70c092a7d6c8bad26"],["/categories/随笔/page/2/index.html","c9ca5224462c8d496b632517712fa7c6"],["/categories/随笔/page/3/index.html","51d6dfe506da3251c5c4e87e56ff4a5c"],["/css/style.css","33d1181816e7bddd2eceff6171f3f155"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","450b2faa97873affbf20ef961664688f"],["/history/index.html","10e95170ee9c140bd49e8d4f5e0e4648"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","0b886609699a364db23904a1e0b207d0"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","f8c9d4c7dc3bd0add4aef5099c806af6"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","31e945dcf5a78a856370132c70785e73"],["/page/2/index.html","04280c18d8b34a057a8355b6fd4822bd"],["/page/3/index.html","8bcb1a1a96f21973364e802619fec308"],["/page/4/index.html","3ab1c9f9a70be67c6e20b31f395c3981"],["/page/5/index.html","34575b7d65219274573fa192cd1b7d82"],["/page/6/index.html","f97d20aac079817830a2f8497f9f4db9"],["/page/7/index.html","e12efe56abecb980e0ae1354c08d8d01"],["/page/8/index.html","c06301aede5dba1b2bbdea427bc0c830"],["/page/9/index.html","98b6d7e34dda1efeedab0c0db9f92dfd"],["/photos/index.html","db7d5d746d20740332c368e31e5acf27"],["/recommend/index.html","1e6a0fed8af05343e4511e01833617e6"],["/sw-register.js","c7308d47141c6f8e2e99e9cebcbcd676"],["/tags/git/index.html","58d35ef249b8255348dcf3715a806a52"],["/tags/hexo/index.html","7dea6750fd2202374e1015b6ab5c1812"],["/tags/index.html","0558e9b68e528d838ecd74245be7d74e"],["/tags/中医/index.html","69431abef78ccb34cc245cb4762125cd"],["/tags/休息/index.html","fd809d88cfd9c08a317a83349684a513"],["/tags/写作/index.html","0315f11128487b40b279534b4f08de10"],["/tags/区块链/index.html","472cfcb01e08ed812684de9471b16bff"],["/tags/医学/index.html","ed24706ccdc426e5328813a7e9f90c42"],["/tags/原著阅读记录/index.html","51fde94de7fb855775dce71759e9694a"],["/tags/反思/index.html","d27a05593a0f44b85ca6afd5e3e35bb4"],["/tags/同学/index.html","6fc052d31623f3ffb85260a29b5df65c"],["/tags/听力/index.html","1b54fa8f0d1a9304af392dbdcc01154d"],["/tags/处事/index.html","5792040ce08f79c169608d1f73b15092"],["/tags/如何致富/index.html","c0c1006cf4b5b1f45393516e872927fb"],["/tags/学习/index.html","b700ff5a4130dae2b4232333c3a9f6ca"],["/tags/安全/index.html","82e40abf6d80c5571622d2e0b91a132c"],["/tags/幼年/index.html","721fe25005f04107be125ad25ae21c0d"],["/tags/幼年/page/2/index.html","e2b023291125448cd6d82660caf9abf4"],["/tags/微信/index.html","f65960d8f065f8de6a65b7c08faa96fc"],["/tags/心理学/index.html","200223047c4af50eeb294adf57266441"],["/tags/思维/index.html","a947dc33b665fe873c4650a3182e6ae0"],["/tags/情绪/index.html","e07cc9822ce7da02b52220bfe77c5a85"],["/tags/成本/index.html","c1e3080cacbeb9849a9839dba7d8a195"],["/tags/手机/index.html","6bf8540acf705d6f23625753a298c273"],["/tags/搜索/index.html","13978751ac5b0437ae8cdc2eaf500d09"],["/tags/效率/index.html","af198ba596d3bbfee8d32a440d738a67"],["/tags/数学/index.html","4e17a8d5d7c5334fd1ae2adfb6526ba7"],["/tags/数据处理/index.html","b558f929e98cb7ef3a3a05a5e03f50c4"],["/tags/文学/index.html","db696450c7c97d57a50924d93cee67a0"],["/tags/方法/index.html","019ddf62dea24279517de62bb6c141ef"],["/tags/旅行/index.html","33cc86f9fd07428c5658b6491d49af4d"],["/tags/日记/index.html","bb096570db131ec525104c9c02521ba2"],["/tags/时间管理/index.html","3d0b690ba034c1064c7058c603fbdd70"],["/tags/智商税/index.html","c84e21871d88345862cb8ca4bfa93d05"],["/tags/演讲/index.html","d5a8cf3be724ab48abf79bf403de2f27"],["/tags/爱情/index.html","024ccb1410b5348a3a089610d3a5718c"],["/tags/生活/index.html","e401ca6aa967e1634a030c5375ca6e7a"],["/tags/睡眠/index.html","abc297dd88873e21bd6bcac4ec41b12f"],["/tags/科普/index.html","66d6fcc6805ebe5772e84776f8603a24"],["/tags/精神生活/index.html","85cc9818b6b7d10ecac9fd1f57ca83d2"],["/tags/经济学/index.html","d90ee7f4265c6b1baeb9c3e69f4b2a38"],["/tags/自律/index.html","57100dd00e2254ba5e6a7a3c2334c909"],["/tags/观念/index.html","7d01e96f9a54db5cb6850f309adb8210"],["/tags/解决问题/index.html","ee002b20ede96c0afce816b461d9aea4"],["/tags/记忆/index.html","04b8ccc51e43d2673c5ff90944dc2291"],["/tags/诗/index.html","1ebadc8771792d7646367d592123580a"],["/tags/财富/index.html","cb8aaad568ab1f1c262fedee1e2f57aa"],["/tags/阅读/index.html","dfeeab872efca0ba9e4df9f687a94135"],["/tags/隐私/index.html","70f0d805960217bc37e3cb581f9625fa"],["/tags/饮食/index.html","6b7d53c09ddc635ff9a079030ff7fef8"],["/works/index.html","0034f1b4aa2ad69f48e8161a34d36fbf"],["/works/item1/index.html","eae7c48d98831c2be9fe5b56dedb95f4"]];
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
