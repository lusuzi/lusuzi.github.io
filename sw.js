/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","64c7880c53ab5020d6ca1d5f4c27a0c3"],["/about/index.html","7fc2254722624ec7c310c7dbf123492c"],["/archives/2013/11/index.html","07a553e8dd0296778057369c4f1b7c05"],["/archives/2013/index.html","dfd7ea2e73e0f20779f826da68636a5d"],["/archives/2014/01/index.html","d27d6ac57dc87f3ed868985f227bab78"],["/archives/2014/02/index.html","cd2bccdb43ef235d78f379484456e74a"],["/archives/2014/index.html","8696b14cdc00be300d73412ab9b2e13f"],["/archives/2016/01/index.html","49fec4fae31237dc032651a1ce1cd287"],["/archives/2016/06/index.html","975cc2fbfa41ec6e05b50c8e924cd9f9"],["/archives/2016/07/index.html","78637f048f805c4815484dd8deb3ce15"],["/archives/2016/09/index.html","d88a0286f166628d99e6b11a0419c2a3"],["/archives/2016/10/index.html","afdb1d2ff13b2c90b0b6d1a725893d8f"],["/archives/2016/index.html","782b1b3005c4a7ea4373910cbf84caa7"],["/archives/2017/05/index.html","7c59ecbbce4fa3a07e59dd12b6c4555f"],["/archives/2017/06/index.html","6c6c4a930799c2cf75d0bef46719ff74"],["/archives/2017/07/index.html","63223ae81c16105c3d21c925f7dfecff"],["/archives/2017/11/index.html","1eab7a675ecd3bf510da34a3a08b0731"],["/archives/2017/12/index.html","586bc3eff54f362e9ce6493d3289e80c"],["/archives/2017/index.html","cb20a21d6a81d14fea48e6350d6d8bcd"],["/archives/2017/page/2/index.html","10a4b7b63dd40db08273d98ea76e179d"],["/archives/2018/06/index.html","4b500b5509762d8fc7c962a25375cbff"],["/archives/2018/07/index.html","53927e06f8956e8c5c2fc51905dc7af5"],["/archives/2018/08/index.html","4380f0d9a7369560abac6bc8102a6903"],["/archives/2018/09/index.html","00664becfd5372cc580980ad354f83d4"],["/archives/2018/10/index.html","e726aa42187c9a43b08bca71488a6d1c"],["/archives/2018/11/index.html","20019f5c3c93ec8a47fd40db023ff252"],["/archives/2018/index.html","e05ddedd8827706d4cafae496376bf12"],["/archives/2018/page/2/index.html","ac384645225db5724671aebfc5e704fe"],["/archives/2018/page/3/index.html","f8deef530f42015a290dec78a31354cd"],["/archives/2019/04/index.html","3ed7d0572e5565e4d6b5498fb4a3c5dd"],["/archives/2019/05/index.html","10ddbb26b43fec9fd408f862b6126c5a"],["/archives/2019/08/index.html","4cff9e6123984c2aa6bb2fdfbc4d7b5d"],["/archives/2019/12/index.html","40033d41c5e16e73998a0dae39d8bff8"],["/archives/2019/index.html","6abf5ef575f114efbfd48ae55eeb0ccb"],["/archives/2020/06/index.html","72c4f32d73133718dfffda91cc3e745d"],["/archives/2020/07/index.html","d58ea74c3bae9b973687d4da7be334a6"],["/archives/2020/08/index.html","9d8dfe6835f8360149c763c71d2678c4"],["/archives/2020/08/page/2/index.html","2c282506f10341d38b31cdc321a01e2f"],["/archives/2020/08/page/3/index.html","5bb79be6b1679ecbedf2d2a8b1b556c5"],["/archives/2020/09/index.html","601529324aa2bfbeb027d3883104a73c"],["/archives/2020/index.html","9d26972c87cba20bc32a84ba2962c414"],["/archives/2020/page/2/index.html","dac8ee8c3a536eb513fa62fe98e525f1"],["/archives/2020/page/3/index.html","164d5dbe15e440d044078e593a8c94d2"],["/archives/2020/page/4/index.html","6859d3c67698da79db1ad6e0a25ca498"],["/archives/index.html","46e85bd9b1cd3699e44aa8800eb7f07a"],["/archives/page/10/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/2/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/3/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/4/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/5/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/6/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/7/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/8/index.html","da926d8f948d4316594153595383bc40"],["/archives/page/9/index.html","da926d8f948d4316594153595383bc40"],["/articles/11fb9e73.html","fa1dacefb9f7dbf11e2c5c672a809002"],["/articles/136fa9d8.html","9efc04a59c0d01d12f6adf1e784e9df4"],["/articles/19718e8e.html","c2d9704f335165b0f3380d4668300960"],["/articles/1b342210.html","0c744d26066942be13b86f4f181f142a"],["/articles/1eb9d23a.html","ee58e0abb8ef35885d9ddc59331500cf"],["/articles/228c75d3.html","6767da1a6e9af63ad1d9427d839ddae2"],["/articles/23494478.html","12f7945c59c2ee56f7f8a9ff6f6f4878"],["/articles/2b3aedce.html","64c3bc92533628d4fe40db28e1cf8a9b"],["/articles/2e7c5c98.html","535b1215e555a80e56fe4a677a0764c2"],["/articles/3229fb3a.html","a6ba32adaf1fc0a64d217672e8808231"],["/articles/33554c5b.html","6360fca7a0473bda5a898eb9e47c1f5a"],["/articles/35a56429.html","2864998ff8d640a5bbf99c0e30172ed4"],["/articles/4562b0e.html","7524774d0ddede34a5981dbec51dfb2d"],["/articles/481247b8.html","1af62eaf7f084a102668bad8347edc3f"],["/articles/534bc28c.html","da217be08ecdb5fb9fa8fd9040413837"],["/articles/5b152571.html","dbcd9181f334c4c50714a7e8a068dd98"],["/articles/5ca1802e.html","255ab514338874a354cfcd09918d1239"],["/articles/5f339f98.html","33dac738db96efd146cb4c9bba301046"],["/articles/64c8bce8.html","6259332aa0318daaa2ffa151d8e41275"],["/articles/682814d2.html","87b248fa48867ef67640aa22c0c993da"],["/articles/717c02c4.html","309ea15df9047644f4bdf2784b6ef0f1"],["/articles/738c5196.html","272eea75d7b07a79a87b5b75641074fd"],["/articles/73ba8b39.html","df352fe0ebb761af4a51f1281f961a05"],["/articles/7a5991e.html","e84390b9c766b7603c7ecb88bf10db99"],["/articles/7d3004c4.html","70466767b28860d89bd97b2dd91a1bfc"],["/articles/83e42b42.html","f76bf6c6bdcc96dd95d44a8c0d8231d1"],["/articles/8c8ac5bf.html","e7d6263ba981f6ec72acfc94cb1ddf32"],["/articles/8e989db0.html","2df4649c49740112e6cf5faa5cf9a68a"],["/articles/90d5d393.html","9b5d5a83e3290ef033786a37c167a12c"],["/articles/91a5995.html","b756a9e8c0427c7c726c49d06426a4c5"],["/articles/940b4a8c.html","46c7feefb74ebd6212f5467530d4a141"],["/articles/a0bf6b98.html","579da52f75204b6018bc0d053a71313e"],["/articles/a264b8fd.html","982d54878ba1b6a51d2ba892481647ca"],["/articles/b318b8fe.html","57258d41388e330f54ab6c2b8d4a76f2"],["/articles/b73c5547.html","6f5cf80b83fb5e674412dcd787f17b8f"],["/articles/bee0f638.html","ff324dea891a9a90eca63df11f5b0112"],["/articles/c6bff206.html","d22229db131d9b0fe3a1672f91077355"],["/articles/c7063ec3.html","83d5cf4f3e805d3bb9c883708ba14666"],["/articles/ca8b4515.html","2d894f27dc40584a965e9d99711aa929"],["/articles/ce3b3e2.html","32d744975effb3d2dfbb0209a7962ab4"],["/articles/cf8c0bbe.html","04809f7b4d89fd8abf983c7d12fee243"],["/articles/d60bbbcf.html","ba43f0536e104b9499bac586bdb74c68"],["/articles/d6505d8b.html","cdd6bec78dfd6e049c7bb46a1c01d2de"],["/articles/da9af306.html","744250f6af0bbcd602da312fb780b45f"],["/articles/e20a0ac4.html","bcbf7377568a461bc49f00e530e59b96"],["/articles/ef9ebd24.html","cb01d783096dd9a93d7f7ae8dfac192f"],["/articles/f01b987b.html","752c91c2178fb45e067bd699de25dba5"],["/articles/fd541bb0.html","db524b5ad4cb816d3a1707577b5af14a"],["/blogger_said/index.html","8985458699fa07244d0ae2d0ace4b55e"],["/books/index.html","c78935bf18d9a31495b98d511abc859a"],["/categories/index.html","12e91f3731b67633499e7bc521881643"],["/categories/价值观/index.html","193c331dbc5f77768a40b1af9afe203a"],["/categories/健康/index.html","ce716497d4acc0d12f2b045f4ec32a2a"],["/categories/投资日记/index.html","55a5f23c2a66f65be416852d409c5ebf"],["/categories/数据分析/index.html","0ef0794f438f5a98f7e63d7d31073717"],["/categories/翻译/index.html","1db058f06d9802f56e12d5f5b4619e9e"],["/categories/英语/index.html","5b68f1c98e3c6f5fedd8dc8614c505de"],["/categories/计算机/Python/index.html","88d8df4b9d40ae447c4e7ef68b21b3b3"],["/categories/计算机/index.html","4a6bc474113ef10300bfd92a0b34a1ff"],["/categories/计算机/工具/index.html","35070e6b7b7c74b0fa7d7bf500c065d4"],["/categories/读书笔记/index.html","9a349b85ff248a03aaff0367bf69e13f"],["/categories/读书笔记/page/2/index.html","0b02c11374bb24c7511d31bb720891b4"],["/categories/转载/index.html","28a43ccd0053d6ac2d87b7b9aee6b121"],["/categories/转载/page/2/index.html","4bde262d95f18c852adba5eeb90499c8"],["/categories/随笔/index.html","607b4ea3eea72841a73e9324bcb31fc1"],["/categories/随笔/page/2/index.html","ee75f20e8e0267d7aa6c13d1ace25f27"],["/categories/随笔/page/3/index.html","fe6723ae131f1b1972ebc5736e469373"],["/css/style.css","c609a3662fa1ea2977cb8ec62ae54566"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","bc7030be95ba1f019ad144093f9776a0"],["/history/index.html","2bc497bca3d7f49a79142154e4fda7d7"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","1ea44af017747162e3568b92097a9171"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","fac8997305be99db1b9cf41faebe6779"],["/page/10/index.html","64ddf4c806163f774cc82fd4cb6372b9"],["/page/2/index.html","a9f91c4b642f0186e322861932812013"],["/page/3/index.html","90167b188396452dc7ef9267839843e2"],["/page/4/index.html","0ad95a7303e71e2f09a89627ad0730da"],["/page/5/index.html","9d52d79b75b707aa8b5e09d6ede981da"],["/page/6/index.html","dfc9d9c7b763c2aacb86d802e59ef460"],["/page/7/index.html","ec5bccb4f23f89ce5d583a4b2a5f3568"],["/page/8/index.html","110d181939d2f461bdf20b5542451a7d"],["/page/9/index.html","35f7e593ec2b7591a107b29364970269"],["/photos/index.html","dabdbd23e314e18c07e8bb41a2b84460"],["/pictures/index.html","93e2361c2543a9ac9696082d78d021d4"],["/recommend/index.html","592776d9434dbbfd2191fc10434464fe"],["/sw-register.js","28b99d036c32e5de0bebafcec56e93fe"],["/tags/git/index.html","28b41e3f826de1ad9672f76cf1c3d99e"],["/tags/hexo/index.html","392b0bee58dc591010fa018af45047b8"],["/tags/index.html","50934a9139ef01fdd3420f9121a517e7"],["/tags/中医/index.html","46e6b48bfdba3292c0397aec7497addf"],["/tags/休息/index.html","7df1c67dd6030354469903dad2612050"],["/tags/公式/index.html","9c7ccf4f5ed724990a15c1c8f6ef91cf"],["/tags/写作/index.html","ae3d49e98ef1d391f992dce1f096ed38"],["/tags/区块链/index.html","d084fb26b946a9cdc07a7b503b4fd0f6"],["/tags/医学/index.html","569e5321943158c14629287aec85240b"],["/tags/原著阅读记录/index.html","18bcbbf841827087b08a0155457a3ea7"],["/tags/反思/index.html","e82d53df33d8b3da7465ba1afd367e7c"],["/tags/同学/index.html","b7d50b1786162e00c3d9400a8223aa66"],["/tags/听力/index.html","7b4c8acd05ef3b70e8821846adb294e4"],["/tags/处事/index.html","d41231e93be6e616924e86f316852448"],["/tags/如何致富/index.html","a7adfd155d7665c6d816efd4a8c10a82"],["/tags/婚姻/index.html","ba6ab7c75b9ec49e021b85f3f4adece6"],["/tags/学习/index.html","dc61f46f5cd041703104626d6551da3c"],["/tags/安全/index.html","1caf55dd17f7a59b4dea5f87ca352a0a"],["/tags/幼年/index.html","5d706fcf8d4a3d66982e26cc08e21fd8"],["/tags/幼年/page/2/index.html","497d480af5355fce6f3bb44d5a1a613d"],["/tags/微信/index.html","d324ebafa512650c4e30c94e6b6e0bf8"],["/tags/心理学/index.html","b9204157405d3ff7f6aabb2fa7fa0499"],["/tags/思维/index.html","afb3da1f86f531a02cec652119b435f8"],["/tags/情绪/index.html","dd0634f16ea56d8253addbe311f8a41c"],["/tags/成本/index.html","d440bcbd3cc629cf64b834a233c4e65e"],["/tags/手机/index.html","a214501433fd971d82b37ed98dcf023e"],["/tags/搜索/index.html","16ea5462f1f757872b62c48c8999c78e"],["/tags/效率/index.html","d3e974246f2ab32a820799f5e66a04dd"],["/tags/数学/index.html","7183741d5e2388e9f5cf1aab2012a3f5"],["/tags/数据处理/index.html","474a642c6076a9cf5405d76ea59ccf2c"],["/tags/文学/index.html","eca21d13e9d91f61968aac9158aa0f5e"],["/tags/方法/index.html","e769305395ae4912896ec0a6c1f94d38"],["/tags/旅行/index.html","8c512358fc6652b3e83153297c4e3465"],["/tags/日记/index.html","671fc0a7fefec3a0e40b9e57c9559751"],["/tags/时间管理/index.html","c2fb3f7e28d26e18461c87795d6ff880"],["/tags/智商税/index.html","2cddb9bf6ab2e71b1ded8aea4f9d1f3d"],["/tags/演讲/index.html","e76338f5437a54c20830d906a6bb69e7"],["/tags/爱情/index.html","be2cdd063aac82e0248ab485c3f0221c"],["/tags/生活/index.html","408771c757f2ad8b769143c9248bcbf8"],["/tags/睡眠/index.html","8ae1cd15959e7f4f10b8e612ba22c110"],["/tags/科普/index.html","93af2a0528bc20aa9428142905614389"],["/tags/精力管理/index.html","844a23606d89f08c4d74ecf4545bec4f"],["/tags/精神生活/index.html","93dd4ee23420e23f2e95375b1707a955"],["/tags/经济学/index.html","346a64dab5fc560026520a9e79fe3fdf"],["/tags/自律/index.html","4052b2b57099a0cec93553b1fd6ad1fe"],["/tags/观念/index.html","17e85cda6b847f2a75a8c0446e3d7dee"],["/tags/解决问题/index.html","7d82a736869d02ad258ae9bf4d1ae256"],["/tags/记忆/index.html","10516701f67d8a82a189d9c092dc0edd"],["/tags/诗/index.html","597fb1503a51dbd399e16b2352b1fd31"],["/tags/财富/index.html","0bd5491112fddb19bbd73383af9f8c0e"],["/tags/阅读/index.html","9ba7cbdd7f1781fdeb238e4d7b27253b"],["/tags/隐私/index.html","5cedb7c026e001b17d63d31f3a60e279"],["/tags/饮食/index.html","e1d33190fe61903bd550c5797f5698a0"],["/tools/index.html","31190f8f41399e65c23c6e2fe75b98a0"],["/works/index.html","ba7e6e501a8980c9fa0272ba4fbf3944"],["/works/item1/index.html","99b4e5cd9faec83f695717a0052f8e5f"]];
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
