/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","adde5260acc68f869934965c6b96afa8"],["/about/index.html","76e875a5200da0b6ce652247ad4d14f1"],["/archives/2013/11/index.html","3ab35a6726c75e26758b1a880a0609b4"],["/archives/2013/index.html","7e4d11200e4dd5917a0b787fb562cc29"],["/archives/2014/01/index.html","f892f7ff9b521026e4878a150989e365"],["/archives/2014/02/index.html","c39973f9b8d7446c1eae6f2cd13ec85b"],["/archives/2014/index.html","c125807689b490bd1a8148947986c1db"],["/archives/2016/01/index.html","f15e68123987499af4b1d7922fae35e2"],["/archives/2016/06/index.html","3074950dc2957e0d7ad3175b6cabed44"],["/archives/2016/07/index.html","fc63d233333cc3a63795962c49f4e9aa"],["/archives/2016/09/index.html","a71b865c45d2f59bd5384fb4dba981fc"],["/archives/2016/10/index.html","1e3e0c343dbb4e25422c8501c8b0ba38"],["/archives/2016/index.html","24c838a8a44c8e15102bed564bf6486a"],["/archives/2017/05/index.html","49dfc52eeb103455f7811c797dcc2aa4"],["/archives/2017/06/index.html","9f0a5d48be9e35337e3ea6a4ed9d8674"],["/archives/2017/07/index.html","17ebc08f0780b5cfaf930e9ce45c02f0"],["/archives/2017/11/index.html","c01814003eb39b215ca4e6c0013be4ea"],["/archives/2017/12/index.html","78659a79c27f5894587976b350d39114"],["/archives/2017/index.html","7173539b6c8a7d4d3d50976549c0cc62"],["/archives/2017/page/2/index.html","66d1faf5ae1325c9ae1f45ca8d9e8d31"],["/archives/2018/06/index.html","08c4889fdf730b01daa7892ff18ad480"],["/archives/2018/07/index.html","6a647fd9b9dced884a50b2b95cbdbafa"],["/archives/2018/08/index.html","8477b0edf5c6c06b26e6a228353da39f"],["/archives/2018/09/index.html","650ff998480cc6cf85acedb269f1d02d"],["/archives/2018/10/index.html","aa2f4c79f1b98a867e525a18db134bd2"],["/archives/2018/11/index.html","c9538a07e3a5c819d7340b8e1feefffb"],["/archives/2018/index.html","f0076172886c0d51f5adbdf85665ea2d"],["/archives/2018/page/2/index.html","6c5a2cfb03a0f700b28e708ce4f1a347"],["/archives/2018/page/3/index.html","f1f8f2ac39475430b2cd7c0f0d9fbfeb"],["/archives/2019/04/index.html","0f3a710509f0ccaee82a0a2cd9028d6d"],["/archives/2019/05/index.html","dd5c8042a96563d98ddafb8008c4eef8"],["/archives/2019/08/index.html","7405332d0e0f31d68855c88da4137703"],["/archives/2019/12/index.html","377827ef402a00cbcf2076bda564ff9a"],["/archives/2019/index.html","f24cba9c97ff4839cad822d95f372f6c"],["/archives/2020/06/index.html","5c35ad8dfaccff5f076755b2a9e4d420"],["/archives/2020/07/index.html","ff6d79572cc72c796e4dc2d13c45e077"],["/archives/2020/08/index.html","97ff5c75605b8bb620cde65e60d42d2f"],["/archives/2020/08/page/2/index.html","f0db43f49014a313d3d80e10c9e97c62"],["/archives/2020/08/page/3/index.html","0f5a31f6062053793a6bf7da9101a5c9"],["/archives/2020/09/index.html","61b3b37c5354e4743f632cf719857e00"],["/archives/2020/index.html","1f3e31d362547bfe7fb198542927c204"],["/archives/2020/page/2/index.html","b6fc02302ea1de6c96502e1a6d3482a3"],["/archives/2020/page/3/index.html","9db92e03278df2c30fdb4d6a438dbb35"],["/archives/2020/page/4/index.html","ed9413f6a995d5cff7fd7a6be423bab3"],["/archives/index.html","e27287f2523149c395b6d46965c3805e"],["/archives/page/10/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/2/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/3/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/4/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/5/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/6/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/7/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/8/index.html","3e6f165c44613861927725ae590c26f9"],["/archives/page/9/index.html","3e6f165c44613861927725ae590c26f9"],["/articles/11fb9e73.html","8a36dc3aa3f876548dc693c32240f51c"],["/articles/136fa9d8.html","ab430ddd3d66167b9445af3317b7ff31"],["/articles/19718e8e.html","ce9a110a6dc8dbad5cae1ab705fbde60"],["/articles/1b342210.html","c338e27209ded8bab59b58ec6cbfc1ac"],["/articles/1eb9d23a.html","02ecf6281331a17846e7e47e6a4fb0fb"],["/articles/228c75d3.html","461ad3e69eac369828bc264fb171600c"],["/articles/23494478.html","f33f213a7e38a8161c5d285e2cc61d8a"],["/articles/2b3aedce.html","86ae2296cf8f2e229a55a6f2edd6208f"],["/articles/2e7c5c98.html","ff663331015c0d0c790fc094c92a92b1"],["/articles/3229fb3a.html","563d985b6c2ca5f2c6e89b2e5e412dcc"],["/articles/33554c5b.html","490a7e30dbcc2d564f1f9b0854155d96"],["/articles/35a56429.html","4bd539b1ec303a94605facf9e00918d8"],["/articles/4562b0e.html","16272f4a689cfa177cc6c629dfdd4644"],["/articles/481247b8.html","ecd5f05680922bef0af34a662c61be4a"],["/articles/534bc28c.html","731a6609121a4b07d537654b8e6872aa"],["/articles/5b152571.html","484b9dfdfebef67e1989232323d4dbde"],["/articles/5ca1802e.html","9b365b49b41b0f166e13eba9fa10ee7a"],["/articles/5f339f98.html","589c5726e7c2e8e3e1d5a457f21f40f3"],["/articles/64c8bce8.html","72d52ea92a30b7c4610252bbe77b3cfe"],["/articles/682814d2.html","dec58599850c402d8cf6f4b887993f96"],["/articles/717c02c4.html","6477df1142fc0294b6d0531428017442"],["/articles/738c5196.html","1fff008e97fc518f7a3d8598205d10a7"],["/articles/73ba8b39.html","4bc54ec61915679c48b7a9319c529b13"],["/articles/7a5991e.html","60719f1592c400eb57b21ec42cefb19f"],["/articles/7d3004c4.html","b718bb642684cb614dd18d06ba2e0cc4"],["/articles/83e42b42.html","c8c73fc966e59d90edddbaba8022a073"],["/articles/8c8ac5bf.html","d1211d185916999e52724924b64a49a9"],["/articles/8e989db0.html","c735b1d8ca60f7afb6133ec0b4b8a8cf"],["/articles/90d5d393.html","f3f00b5d6da3d4eb8e156c5df7c2a8fa"],["/articles/91a5995.html","543d71d101d36525e03ed08e4c996fba"],["/articles/940b4a8c.html","d1eb6e629ee0e8e717ac82a93446c40c"],["/articles/a0bf6b98.html","0f1f8ce8977e28abb0c89b3ce3597025"],["/articles/a264b8fd.html","89e9b3903d19a094f4d5d3b4c3fb8878"],["/articles/b318b8fe.html","a6a301a29218bfc1e1131ed02ef9a436"],["/articles/b73c5547.html","98343bbf56c4665f357b543ea4cb5629"],["/articles/bee0f638.html","2f2a9f385b4cb1fce1e0aa8a7ce3e3bc"],["/articles/c6bff206.html","08eb656243568b2d4b4541c27ba34fbc"],["/articles/c7063ec3.html","ad58db9f842f7027ce22407106928a51"],["/articles/ca8b4515.html","4ca8fb1d8423ef0457f3c4e074010c23"],["/articles/ce3b3e2.html","2dcea7864626e0c6c588b49520bd18d1"],["/articles/cf8c0bbe.html","20081364730970a726edebdb8f7bc60c"],["/articles/d60bbbcf.html","7aa1b007593779f8c38a729367bb7e86"],["/articles/d6505d8b.html","0f6fee86c5c53cb2ae4db5be0677a55f"],["/articles/da9af306.html","541606347f59ba0004f63f0a6ac3ace6"],["/articles/e20a0ac4.html","7612769d54c6ed6ab962720c6ed78a9f"],["/articles/ef9ebd24.html","4b8ec9016c853ba73835570de7d4654a"],["/articles/f01b987b.html","f17f8fa0c58ea8732651db741cb656fd"],["/articles/fd541bb0.html","a1b142abf72b9845b68e920e4be34287"],["/blogger_said/index.html","b20a7c08f5996ab09b330c8aae76b716"],["/books/index.html","2e99395529aeee7c4047bb0b590c586b"],["/categories/index.html","18d4a8a64844f0515bef69872d0b889a"],["/categories/价值观/index.html","79f3b018f1b22e94d087660db8b106ac"],["/categories/健康/index.html","b99c50cf419f3aee59222b85ab0b830a"],["/categories/投资日记/index.html","95ce1180e441ef3aa361f783199fb770"],["/categories/数据分析/index.html","4db353bb6bb1c30b5e885b1ec19bd601"],["/categories/翻译/index.html","53e5cbc8e1b5685ff9e23054c0e66fd5"],["/categories/英语/index.html","ca1a2f372a97c584ada2d746a0bb8879"],["/categories/计算机/Python/index.html","b73189c97587a7fc5296255efd2b00f2"],["/categories/计算机/index.html","c39fedc56c211ed7af898c7990678231"],["/categories/计算机/工具/index.html","f46fe845dd493e57ada1ed64ec04d3b5"],["/categories/读书笔记/index.html","3401d83b05a1331824655fc073ddcf7b"],["/categories/读书笔记/page/2/index.html","c70ba2d840c463865b613b9e6e7d2f85"],["/categories/转载/index.html","0865ecba1a943d82b6d86e04027788cf"],["/categories/转载/page/2/index.html","d0ecb2aa34c156e1a595a67762fac41f"],["/categories/随笔/index.html","541b1d4e42d5b22f78e737840be2958f"],["/categories/随笔/page/2/index.html","a6944e7d910580d4b2a4a675a7a2266f"],["/categories/随笔/page/3/index.html","16814061f19b610bf16dce869440ed36"],["/css/style.css","c609a3662fa1ea2977cb8ec62ae54566"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","4959841debb55d91fa35f3af92f4572f"],["/history/index.html","865caa5dbd29e7da3b867fb36b29f079"],["/images/avatar.jpg","3eef8aa45c947a2f51a71092a35cde6b"],["/images/avatar1.jpg","879377db18a3c0e2cb0db36fd3c6d956"],["/images/logo.png","eb3b97cc9aab0a766885b56683d4747b"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","5a741f9c78bb21ef4db6752e59087115"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","3a71760e87b900cadbbfbe7b783e6b12"],["/page/10/index.html","37d4ce4d72f5905458f56205db59a76d"],["/page/2/index.html","5f7a0257906941eab5bd1b738bd65de8"],["/page/3/index.html","c2ceb9cd8eee40015f20090e4dc85b1d"],["/page/4/index.html","abe74fe650bc76a9a3436ce6014b5a00"],["/page/5/index.html","1ba08602d8281cae9ecd9a57de6b8606"],["/page/6/index.html","3be4bc49c47b6f7166d7714b04a75e3d"],["/page/7/index.html","951c8d978a87e57b7759e49cba2e5b6b"],["/page/8/index.html","e10affd748387d8664d9282622271567"],["/page/9/index.html","31379d5b5af930d2b66907d2600dbcdf"],["/photos/index.html","928f3b44b50594d37456ac5f3a534465"],["/pictures/index.html","4ff6bc5e8b4ea0196272300ceedda590"],["/recommend/index.html","3449489b0d4b919137a6d06703eb8cf3"],["/sw-register.js","7ea3d747d1b05fb719ea317da4df60ab"],["/tags/git/index.html","4e24ad63d679b66a9048c9a6b5999e92"],["/tags/hexo/index.html","02f4a329ad1f7aac0bd48a68c83c652a"],["/tags/index.html","09e6d981e520a967263c01b270e00e56"],["/tags/中医/index.html","fb0531432b832e83d25f2bfdbfee8c60"],["/tags/休息/index.html","e6ae26632b7c2e07c5c55ef010f04c96"],["/tags/公式/index.html","78d768ecdbd79f34ac0ca2d92ab0dcff"],["/tags/写作/index.html","d2290f8c05ae71b36876ca992056260f"],["/tags/区块链/index.html","7f5539d5626dcc36b8844727b1907584"],["/tags/医学/index.html","9dd6e4f785ad63c3027096f7c21d2ed4"],["/tags/原著阅读记录/index.html","246fd156609c777a7868e9a78c14e2e0"],["/tags/反思/index.html","a4f034d90ed2c84ccc751c8547cdad69"],["/tags/同学/index.html","2f8cc2da5d36c040d739e98282fccd69"],["/tags/听力/index.html","9e7cac22df29fa9769a1044ec2064391"],["/tags/处事/index.html","31a2a32479fd4e381c82c61867863c48"],["/tags/如何致富/index.html","9695e8ca477902d30c5d5dc4a9876c58"],["/tags/婚姻/index.html","9219420b083e28ebecab10cf621b6fae"],["/tags/学习/index.html","bd10f8345f6f8837bbb5f8ba857d084c"],["/tags/安全/index.html","72079f402df198be0f94b24ab3edc952"],["/tags/幼年/index.html","97b77a1118a059171b2842b30c678ab1"],["/tags/幼年/page/2/index.html","24ec2acd5b36c796347dea1c3368f413"],["/tags/微信/index.html","33a1ceb67f2c9e9d5f2abe660c4b670a"],["/tags/心理学/index.html","d3cbe633a786429aec9e54668e8251ba"],["/tags/思维/index.html","7cda189739a012d63509da9c8e92ea45"],["/tags/情绪/index.html","577c3f42bd9abc6833ab08aad5f0dca3"],["/tags/成本/index.html","bd8bd4b998c1a53454c3ed0a25ff9fd2"],["/tags/手机/index.html","1cce6cd9f4378ba539b43aaf65a5c714"],["/tags/搜索/index.html","5973e5b12711cdab87adb9f7c3c9a887"],["/tags/效率/index.html","72ce4b546ef8d4383e1257b7dec6c2dc"],["/tags/数学/index.html","9b0aed7bb2fd2ea85847fc1ef758b472"],["/tags/数据处理/index.html","a49c875dbdf0d9bae37de23a3119792b"],["/tags/文学/index.html","c25204c8d19d6bbd820514b38fdc8185"],["/tags/方法/index.html","b8093a108c087e19f51804647a23bf18"],["/tags/旅行/index.html","a39b7ef80206a1f46565f6558204873c"],["/tags/日记/index.html","7203dd1969840e9e9287f61ad4899276"],["/tags/时间管理/index.html","2ed768828b04bda9f4fa389f77754318"],["/tags/智商税/index.html","d42ce959d24b0be36a1db07e242c5c87"],["/tags/演讲/index.html","1fa161a547d08ce190b843401f6fb61e"],["/tags/爱情/index.html","d8f25ea8db9af0b0c7a4919877923506"],["/tags/生活/index.html","6a80a113403e03a5cdebd124a295c7c9"],["/tags/睡眠/index.html","d55d39b8e00f37d51095c9a4d835e4d7"],["/tags/科普/index.html","a751e2ad1e6cf7cfa60a1c2db314a16b"],["/tags/精力管理/index.html","ee61a418cc740b979865893cd0dd09de"],["/tags/精神生活/index.html","cad8effed6a958dc7476b9f39b9f8395"],["/tags/经济学/index.html","f0dc86a5c8e94969bd04d00999e5aed4"],["/tags/自律/index.html","3f3cb33d7fe84f2bf977f66554f62a76"],["/tags/观念/index.html","3b527d95fa0b823b4dc812d0203e175a"],["/tags/解决问题/index.html","91941db4fe4f4b91b3e14b1c13f938f2"],["/tags/记忆/index.html","1d61452b674e780da1d7f257bed6f031"],["/tags/诗/index.html","2a4a79e7f2d5491e68fe893addb4cf71"],["/tags/财富/index.html","d1b2ea678f2f36ddd214f6fa6b0bf590"],["/tags/阅读/index.html","d83939cf7c2c6f4bc7beedc9bb95fc7a"],["/tags/隐私/index.html","642972d5446b640ac162a56d261eb289"],["/tags/饮食/index.html","0075c2b545851554ec90f6cb5f6cdc1b"],["/tools/index.html","adb9d14a6afed9d8318da18e6ead31a5"],["/works/index.html","fc435b1ea2e2a2061aa9842129080348"],["/works/item1/index.html","ea35667c9687ac51a650f3eacaa2e3d2"]];
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
