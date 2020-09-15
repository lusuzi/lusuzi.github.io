/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6df30004fcd859d8f9b8aab2fbfca71b"],["/about/index.html","958f12dbc7032949bf29cf343607bd4f"],["/archives/2013/11/index.html","4c7f76bba52582962af7111742134d83"],["/archives/2013/index.html","dae719581c13fc97bfcec38c17cbbe03"],["/archives/2014/01/index.html","e6a399fcaaf8ebbbd35652b16a122957"],["/archives/2014/02/index.html","03d12aa089fdbe71280e0f940283bf40"],["/archives/2014/index.html","36d8ac12de1c64e64a8bfc97907e584a"],["/archives/2016/01/index.html","be836e4446f4ec2715463fdc238fa4eb"],["/archives/2016/06/index.html","20601b1f362b812d3993f2ce18c1e180"],["/archives/2016/07/index.html","e37c35ff481ffc4ce5d09840e8032328"],["/archives/2016/09/index.html","d7f74e2b1d800d0cbed784f500874a30"],["/archives/2016/10/index.html","c9f05d61cc2cc9ff7d9cdff8875d43b1"],["/archives/2016/index.html","44d967a02f8fb018e9a7ac837d8dadbf"],["/archives/2017/05/index.html","b18aae9a6c3043374b26a35440d3cdc2"],["/archives/2017/06/index.html","1e629ce4e66aed4c9a09ed1585416371"],["/archives/2017/07/index.html","e6989ce4b40fd11b8395e0eee78bf4c1"],["/archives/2017/11/index.html","0e84f66ce22a8a3fa4e7f09b183d294a"],["/archives/2017/12/index.html","d1c745bd28b91928240f175325bba5b7"],["/archives/2017/index.html","d9f32f907bd4351a687a3b4b2ad54116"],["/archives/2017/page/2/index.html","9f9abf2f676fab81fc00df893612d6aa"],["/archives/2018/06/index.html","9d9c7103a3c9068e549423f2e3ff4dce"],["/archives/2018/07/index.html","8fa4de2e984d21d7c861b8eb558a4a76"],["/archives/2018/08/index.html","0fdb96ca985319634fee6d6c2749f39c"],["/archives/2018/09/index.html","f582e1055652e0e7c3637c72a8d9b677"],["/archives/2018/10/index.html","58fe2a6f9bec9fc9a5888f9f0877927e"],["/archives/2018/11/index.html","dfb912bf6a1690d4c67b363dbfdc9f69"],["/archives/2018/index.html","3d8d558c2495582dee1f71bb5931298f"],["/archives/2018/page/2/index.html","e1dac3e0efa7ad18bbad11bad730347a"],["/archives/2018/page/3/index.html","c464bc2bbea6e978eb1cd56358761285"],["/archives/2019/04/index.html","e7e6c56b81a7641428f3af56951cca61"],["/archives/2019/05/index.html","a49cb279c10b30005caa7befe562578d"],["/archives/2019/08/index.html","4f9abebbd3ec456c9b3ce48890027785"],["/archives/2019/12/index.html","e17dc670cd1e314fb0893add4348f69d"],["/archives/2019/index.html","03a903ac7a6baea37313bcd4b0b521a4"],["/archives/2020/06/index.html","835383d0c558d24ee914b03d9a21f84b"],["/archives/2020/07/index.html","7a229123dccf1afa2b22f31ac3648622"],["/archives/2020/08/index.html","e50c0690f47edb9ac2eeda72224c1b24"],["/archives/2020/08/page/2/index.html","222c234a09c2bc6b88490146c1dde104"],["/archives/2020/08/page/3/index.html","ead5f8c4af5b8a0daeb0e230b46f4acd"],["/archives/2020/09/index.html","dbf57b61459395d7f23e6c6016619a94"],["/archives/2020/index.html","9287673b09dce81e206f3218f6d392cb"],["/archives/2020/page/2/index.html","3a69a8ed7d241c83886c2b9de9fb056e"],["/archives/2020/page/3/index.html","dac4d5c94a3d74f452b3c2a9dcc1fd81"],["/archives/2020/page/4/index.html","08affa16cbece282d9e30b2b4932c02b"],["/archives/index.html","cf9c4fa2f8a52e9fdf8c89d366a8c4f5"],["/archives/page/10/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/2/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/3/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/4/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/5/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/6/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/7/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/8/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/archives/page/9/index.html","f958e3d6f3b3c37a78042a0565c79d3d"],["/articles/11fb9e73.html","7723509a42b7205c5e9aa3eddecc95c3"],["/articles/136fa9d8.html","d4a8646311df4cc26023c3cae32a1b17"],["/articles/19718e8e.html","dfa436cbcb50d7ee964feeec03a25f98"],["/articles/1b342210.html","9c42ccfea88cb6ae20f43008d545da26"],["/articles/1eb9d23a.html","3d39e60e68adc8310dc4c4a7f8f5719f"],["/articles/228c75d3.html","20d5ff40d829a08059c663572e346acf"],["/articles/23494478.html","02895a3ba16e55fd9cfb1ba9c0504d1a"],["/articles/2b3aedce.html","d3fd5da76f8f1e1670a2f34a1b4e1b71"],["/articles/2e7c5c98.html","520dc7a99f2cd88f29da21a4a52ed048"],["/articles/3229fb3a.html","bf4a66dded2aa80ff6fbae742d8fc5f4"],["/articles/33554c5b.html","bcd9dde52e3381d065107c94cb1e027e"],["/articles/35a56429.html","4ab3da6287427379b309251885fceb47"],["/articles/4562b0e.html","6ae1e3d4d97dd9812f5ae5273fb8c0ca"],["/articles/481247b8.html","8948e60322c0e60ae510bc90825289d8"],["/articles/534bc28c.html","6a1208e25d9fb629495973d9f6d27ace"],["/articles/5b152571.html","94a8f492e9e25f20f8bcfa73e8fb81fb"],["/articles/5ca1802e.html","8e9071ab39f35e97bff8afdbea012069"],["/articles/5f339f98.html","ab2977768503fdc32ab2f6493a69b5aa"],["/articles/64c8bce8.html","3960dff3da3f3d7be8f5060ad340b658"],["/articles/682814d2.html","f9e4a02f12fea9f0743134ebbdb32cd4"],["/articles/717c02c4.html","9114aae9fe618c8642e8e93549556026"],["/articles/738c5196.html","c7c52bfc51f7102be98e35bb8b9e3c76"],["/articles/73ba8b39.html","22f326aab34e7433d336f40b04a9aab7"],["/articles/7a5991e.html","e97c613a3138cfd42385c16925e9fd9a"],["/articles/7d3004c4.html","846ffc769122f99d32b4ea44b1851256"],["/articles/83e42b42.html","93533e1ef5dce50636d86c9c92e55d19"],["/articles/8c8ac5bf.html","fa664aefcd30a6b9057ed4b63f6d6bc1"],["/articles/8e989db0.html","b581c0efd7782b6ea5ce2cbfe82af7f9"],["/articles/90d5d393.html","b099ee1878f46977984abc4531937073"],["/articles/91a5995.html","868047c89e9a0c5f49797dfb5d17cb4c"],["/articles/940b4a8c.html","35d3a011a29ce31b22f6fabfffc6681a"],["/articles/a0bf6b98.html","f95a961cbab7e106c8370bb7c8a61f4a"],["/articles/a264b8fd.html","40943ae950c6bdc3267dd749786f33a2"],["/articles/b318b8fe.html","f3024513df1738e890d34bda3dfb3acd"],["/articles/b73c5547.html","5a59c4ab39281d63983e2ac9f8e28819"],["/articles/bee0f638.html","9df5b436bb33a6848e8d71f3f8ddd96a"],["/articles/c6bff206.html","b0044456b1f2a4059c7d0f8d5abe0acd"],["/articles/c7063ec3.html","ec8cf021067d5af10573f575bef8258c"],["/articles/ca8b4515.html","b687421b77264c05c276f7d832a56e4b"],["/articles/ce3b3e2.html","317af5f754a0ade412133037f5b4107a"],["/articles/cf8c0bbe.html","9cf652c771a4205273c41289b12f0883"],["/articles/d60bbbcf.html","48df74c837c2ab84f3acd87c5ad91cb0"],["/articles/d6505d8b.html","5473368537d5f045230a021328ae74b6"],["/articles/da9af306.html","56a6c1655c7cbeee9886dbb9c67f4a03"],["/articles/e20a0ac4.html","2c7c974c440e4f085fb8453920b2de61"],["/articles/ef9ebd24.html","27bc5a56e08ed760e1047f7f8c25e797"],["/articles/f01b987b.html","99e341726a6c6a87b7b34b92f2508c6d"],["/articles/fd541bb0.html","cb9ace99a572fcae8e8273343b80e14f"],["/blogger_said/index.html","0c01e2bc7eba840609e607e8481d21f9"],["/books/index.html","0e283dcfdede76f2a0f2097387d7b769"],["/categories/index.html","18311bfa9df58d8fd00d0b9c1b5bbe8c"],["/categories/价值观/index.html","3ec97b681d3b6fb06b78fb8b5000cf72"],["/categories/健康/index.html","1edd36c8afcef1dfcff53600feda8607"],["/categories/投资日记/index.html","eac81f71d998ef8e2831f2c83d3c0bbd"],["/categories/数据分析/index.html","a77460b55e0d90a4ff16a60a260d014a"],["/categories/翻译/index.html","10e6c12e4705978a17010a9d6a274153"],["/categories/英语/index.html","5cb7b7c17047fea1d1cd2825d752b90c"],["/categories/计算机/Python/index.html","6c428d7c450de05cb2bdb2520495bcd1"],["/categories/计算机/index.html","673bbdd5271aa0161918eff55e713132"],["/categories/计算机/工具/index.html","08ca31b580797b369740374ba9d9991b"],["/categories/读书笔记/index.html","35fb464bed2e3425fa461e7e08add7ef"],["/categories/读书笔记/page/2/index.html","7efdae66c6cd648bd8a008289af13c22"],["/categories/转载/index.html","7dceac60d9c8f2eb3899cf74d4a50063"],["/categories/转载/page/2/index.html","aeb8d1d5b186718eed7d4e171d93ede2"],["/categories/随笔/index.html","16574bf778d79c64dff6f3586485fab8"],["/categories/随笔/page/2/index.html","1e8958a68ccea72fb165e3c1f053e486"],["/categories/随笔/page/3/index.html","0f5fa51562df36a4481fb656c4880ea1"],["/css/style.css","c609a3662fa1ea2977cb8ec62ae54566"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","2149a255535e1988fb1a5ff49c23008b"],["/history/index.html","6cf1743c2230be9ae1d6de1eccbe13f8"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","7fbf874dffb15f2ef29db481dfc6e6e5"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0bcaf09447df6ea85b9fb92379146b1e"],["/page/10/index.html","58cd3649105005b6072be55a09060631"],["/page/2/index.html","4b1553a6438f4ad8b018cc7abdf38c99"],["/page/3/index.html","6579480df28520e14d029e97b2b4e187"],["/page/4/index.html","9d4565c3a81408e3bbc0cd0a623d88f4"],["/page/5/index.html","06040f91feae2919c2271e29bc2ee2b9"],["/page/6/index.html","841bd65dc504a3ffa94769b12ba4467d"],["/page/7/index.html","587bec48db536010c9a044b1e73141e1"],["/page/8/index.html","c0f190c1622bc44809503affc0792487"],["/page/9/index.html","e9d26a7b495953e2e4205e40b3383283"],["/photos/index.html","bb1c2ddec9ab6ecc92c7c8b56d273ad3"],["/pictures/index.html","21bb5d1767f71a6f14507adb31cb5e5d"],["/recommend/index.html","5846f6b61afadf1a3ed298cc21958160"],["/sw-register.js","9013597454bd3bea4cca3e35699f721d"],["/tags/git/index.html","0556af061c9d6da2cadac34ee98ea699"],["/tags/hexo/index.html","8d8b322936111336bd4ec9f973320b10"],["/tags/index.html","73c102c8695ef85c71a72e20a2449bf3"],["/tags/中医/index.html","84baa208bfac9aec37436b9ed506c376"],["/tags/休息/index.html","8b047f5539ce632b2c3059250474a2fc"],["/tags/公式/index.html","81afc4367841f4e0e74146b23ec30c6d"],["/tags/写作/index.html","856fe147d8a293b58e81bff47411a8ba"],["/tags/区块链/index.html","0f6fb798a759b3e3b004613063cef332"],["/tags/医学/index.html","d113f3cb82fe1a230aaa49dfa4b31ef5"],["/tags/原著阅读记录/index.html","ee3abc8710e1c3129514843cd64d6ea5"],["/tags/反思/index.html","9457cceb8fa7d3b0a63a72f2dce77341"],["/tags/同学/index.html","8674c713384c208f9ec08075f90e37ab"],["/tags/听力/index.html","bbef9f2f5ef55fa76a587c5f1bf274b1"],["/tags/处事/index.html","0b161dc55f0c11a95b9c1e1e9bd275ed"],["/tags/如何致富/index.html","d81837fe6097702ef32c619ffecb3234"],["/tags/婚姻/index.html","4301da3be268ec89e7d2b0b47a14949b"],["/tags/学习/index.html","4ce1ad905ed9f58e14ac1c42e63ffdcb"],["/tags/安全/index.html","f9b3a18c7acb17615487f3abfe03b597"],["/tags/幼年/index.html","a12611e874f0c9371b97c64f3235949c"],["/tags/幼年/page/2/index.html","9bd9caae434392dc8f7285516b795486"],["/tags/微信/index.html","5317be6db26be36cb82c36cd0f05b64d"],["/tags/心理学/index.html","cbbf70a6a8ba788c160b8bf864194f6b"],["/tags/思维/index.html","b23b12de9bff0739672b33d404fbdcf9"],["/tags/情绪/index.html","bfe092bf3c030ac62ebe3847feecf75e"],["/tags/成本/index.html","726eec31775c6ae1b87eda13db7d83e8"],["/tags/手机/index.html","4eefa59051b6ecf74e508b473f8027e6"],["/tags/搜索/index.html","c8d7881cd4fb7377e44820ec72d6b0c8"],["/tags/效率/index.html","21792e5f298b42b6747cfe0a9a4758ba"],["/tags/数学/index.html","7b7e6678565514902dd6109881931506"],["/tags/数据处理/index.html","cb98b7d05e66d525d0d024c1bc5674d5"],["/tags/文学/index.html","52bea0fb389fc18dc431ee942994bcb2"],["/tags/方法/index.html","e2fed7445a02a3656195cfeb648b3cd8"],["/tags/旅行/index.html","2a43b4829068cbcc2169cfcd09effa8c"],["/tags/日记/index.html","eb1f164cfa69d50f3137f0b837e2dd69"],["/tags/时间管理/index.html","769ac0c935485fa744cadb6313c76c63"],["/tags/智商税/index.html","8b05aa2f0608d4a25d05164a884f4fd4"],["/tags/演讲/index.html","6c252220aac39323fea9141c2e227f05"],["/tags/爱情/index.html","36aec789f9c51807b0790b0578503fae"],["/tags/生活/index.html","de8cc58c12192c8954b28731a5129db2"],["/tags/睡眠/index.html","77091df7aaa875e1d49dfcbc21f140c2"],["/tags/科普/index.html","a21ad56ac8112101d7c8e013c6094542"],["/tags/精力管理/index.html","699c23710c6d05f292c022fe336fcf83"],["/tags/精神生活/index.html","fc1713f5c015674d0ca34cfe320a2811"],["/tags/经济学/index.html","a8accefdd650d12d62d3e9bf7e55eb49"],["/tags/自律/index.html","d94ff4269b6f40b6baa69f03d83478e5"],["/tags/观念/index.html","b16e6812e77679773f0d0d71533f370e"],["/tags/解决问题/index.html","f07dc2a38ccd4768123b3c86fdca3e01"],["/tags/记忆/index.html","9bf4f80579220473bac4512c650b84d0"],["/tags/诗/index.html","a5dbf62803f548725eff7adecc5bed13"],["/tags/财富/index.html","63f17dbb5c13f37e77d60adb298838b8"],["/tags/阅读/index.html","4b14db275df120db4a2aef239292d3a5"],["/tags/隐私/index.html","61781ab27b159985fd18f9ca3a7f644b"],["/tags/饮食/index.html","22c9e25f190273e1d7b942aa060ef5bf"],["/tools/index.html","580301cd305b8cdb173f2e18214a6be4"],["/works/index.html","84d62ac99ddc760a96989ed597bbd09c"],["/works/item1/index.html","4f5ce89ae5faac977c2da85fe9a2efd9"]];
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
