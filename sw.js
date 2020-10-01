/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fe20df752d20febf8bd9893c8e8add86"],["/about/index.html","cf9c63053a71ffef5a2fba52707dc83e"],["/archives/2013/11/index.html","59dd49bed5c7535630f16bbaa44a5cf7"],["/archives/2013/index.html","0496fe45134d9c56e5bae224da107989"],["/archives/2014/01/index.html","6e469568f84aea572dc07903c8df7722"],["/archives/2014/02/index.html","b387fb66245aac5950607c3fbe96667f"],["/archives/2014/index.html","a40958aa4a1e40560ccd2aa2fe58de79"],["/archives/2016/01/index.html","2358fea31c7a4b341baca4a61434f838"],["/archives/2016/06/index.html","bf392cfa42f4c9bf1b103a3020fe1366"],["/archives/2016/07/index.html","3534fefbd35c141e87dae469d201ad8b"],["/archives/2016/09/index.html","1ce5e31a9484c66780588ce807d6dddb"],["/archives/2016/11/index.html","317152c0b47551ac515a68200ef9a3e6"],["/archives/2016/index.html","9285cffb51183605abda306370674d66"],["/archives/2016/page/2/index.html","4d8934647bf8b9881243427649a3f268"],["/archives/2017/05/index.html","37288fbefeb18774d5948cf7a64fd4d1"],["/archives/2017/06/index.html","924efcaa0578758e1dfb4e04d187d77b"],["/archives/2017/07/index.html","4c29033ed6268a59e81e47bebe489971"],["/archives/2017/11/index.html","134614d87b9f70ffd96626f6e0d729ee"],["/archives/2017/12/index.html","f88fdf9ec8e10e12606a3d0d6f3d6fbb"],["/archives/2017/index.html","1ab31112840094e21012be5a1d75f5c2"],["/archives/2017/page/2/index.html","a5504c49b517d706e4e02305d46d6ae1"],["/archives/2018/06/index.html","2ccb37302944379937c494e025758fdd"],["/archives/2018/07/index.html","1f79e861bfd7420267cd81880bdcd628"],["/archives/2018/08/index.html","d64e02b9a11de2cc88a5ba8dabbb1012"],["/archives/2018/09/index.html","78364ef133f8020b4aba50fe5000aa66"],["/archives/2018/10/index.html","a74c8be44e2596782486dde41bce590d"],["/archives/2018/11/index.html","a2d24d7e0e31c8d4bb26f5e7f3b431b4"],["/archives/2018/index.html","bf98874dd4273323b9e3b7047c89651c"],["/archives/2018/page/2/index.html","00c6f389d3f76c41a378cd8a5098ac64"],["/archives/2018/page/3/index.html","d9d1771cd61d1fdc6a9eab85cbcebd02"],["/archives/2019/04/index.html","fc54296f7d872a99c5b230f3862cbde7"],["/archives/2019/05/index.html","7c61780e564a54f141bf392244c12637"],["/archives/2019/08/index.html","a61475811b5b90dbf0bcc536a708df0a"],["/archives/2019/12/index.html","3c50ad006afe738df3014d57ccaa4042"],["/archives/2019/index.html","9094d9c2d1693b716e03dee9b617b7b8"],["/archives/2020/06/index.html","6be9d03035c88a3f87256eede31c2993"],["/archives/2020/07/index.html","41d16b15bb6e54aacce968faee2fc4c4"],["/archives/2020/08/index.html","ca15575495316f76fd6e3905255b300d"],["/archives/2020/08/page/2/index.html","a9a7c24166d9dd61b8ba5e7caea6accc"],["/archives/2020/08/page/3/index.html","a571a1fb546802ebbdb8209b663d8bfe"],["/archives/2020/09/index.html","85a48dbba429844cf763caf5db3c86bb"],["/archives/2020/index.html","a4fc7d8358bec1f30a6e401ce8c55998"],["/archives/2020/page/2/index.html","5e46b0baae5db61d1f69daf8ed5c3638"],["/archives/2020/page/3/index.html","587ae943c2c96e7c0abbf20ca7c6113a"],["/archives/2020/page/4/index.html","43a0b4cfa4c913e073e7dfc21f90c6dc"],["/archives/2020/page/5/index.html","a03bcf7704f838fa8d7da97136ed60e0"],["/archives/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/10/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/11/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/2/index.html","e54c98692e487c90c88629810979e619"],["/archives/page/3/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/4/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/5/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/6/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/7/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/8/index.html","78406692117a6b7251d27f8381853d82"],["/archives/page/9/index.html","78406692117a6b7251d27f8381853d82"],["/article/11fb9e73.html","7a3b63131f32f935e43731ccd29b9542"],["/article/136fa9d8.html","a93b5f076bb22b81bfdeaaef55b26033"],["/article/19718e8e.html","8cb8246ecdec150f414ddbf9c17df007"],["/article/1b342210.html","0e2f58055f7b69ad76f6f0041da2a1a5"],["/article/1eb9d23a.html","e3b5ba61536adeaf8f77863aa645bc9d"],["/article/228c75d3.html","9ef345eabe178617ec5eb72b1938e6ef"],["/article/23494478.html","1fd81f9fe69f9e5e9eadcd9fe561ff09"],["/article/2b3aedce.html","ce2bd56425c18bdcddbdfd8747c1a978"],["/article/2e7c5c98.html","ec9f81f8555433904d781c4e5f801a5d"],["/article/3229fb3a.html","73d26176c7cc4170f210cd3a4ebf04af"],["/article/33554c5b.html","65cfbc43522bb0e3d1ad17c1c3091034"],["/article/35a56429.html","a8cfa5294c21edba9f6e16fd45a02825"],["/article/3aa91634.html","563354d6bc886b2594aa979d14acdca0"],["/article/4562b0e.html","ccb467946e5b7e9421f2dc7e1e917a88"],["/article/481247b8.html","c023c7c131bd2456926cce6b2f20ea25"],["/article/534bc28c.html","e2e92c57de6463f54768352b44708454"],["/article/5b152571.html","7b6bdd9867d628fa54863be5db9b70f9"],["/article/5ca1802e.html","aacc547519e79c621e4699e979dea3c0"],["/article/5f339f98.html","76cabcd522bdd068361419d2ca88d85a"],["/article/64c8bce8.html","0f2da3231f7ab14344c435249691aa40"],["/article/682814d2.html","7881de09b90990022453326d2f44790a"],["/article/6cb8c766.html","d99d1ec025318915a1a4ce6919c47c91"],["/article/717c02c4.html","13f707037176c03866b04120ff89d1ea"],["/article/738c5196.html","10b0f609720ee84e87f07f65f1c8337c"],["/article/73ba8b39.html","649bd2b58841408fa60ed3143d0a54b2"],["/article/7a5991e.html","0ce617f6a75c066e0547811fb5ef1e02"],["/article/7d3004c4.html","5d8963777d69d494e7f60c4e444613bd"],["/article/83e42b42.html","0c8b89eef6c9dd51151d5be63d659be6"],["/article/8c8ac5bf.html","adf6973bcc452279cb3b4a3fb6c7f4cc"],["/article/8e989db0.html","3f5cce1689db37dd29a9cfa9fc4621b2"],["/article/90d5d393.html","36cf1fb78e57251d7adf78b828807d46"],["/article/91a5995.html","5030bab9c982d23e285ffd4abae8e17e"],["/article/940b4a8c.html","11662c1036ffba1d36e0afb7578636de"],["/article/a0bf6b98.html","75e9eac92c02a6b6f5e600c5a32175e5"],["/article/a264b8fd.html","0b9ad3efabe3b077704d996dcaab8fe6"],["/article/b318b8fe.html","63745a653042ff146ac9670c39252464"],["/article/b73c5547.html","9e4c17b454f7b03d89420bef45e5715c"],["/article/bee0f638.html","5bb410c65c98a7838f9a605e6d14d673"],["/article/c6bff206.html","3ad4c67d4416e090f82bc3d2257ea6b7"],["/article/c7063ec3.html","8103e2fecf64c27bae8632c647db832a"],["/article/ca8b4515.html","6f8180924e748e5c251474bc530b882c"],["/article/cbe565ff.html","9ae2ccdd02d09242fe7eb87db577d86c"],["/article/ce3b3e2.html","e662e8947e1eb4000ed30e58a6a3897c"],["/article/cf8c0bbe.html","c0bbd339fd1a2b4214c9478a8e99d365"],["/article/d60bbbcf.html","21da526e17fba01f6a1e22d4f48c9f9c"],["/article/d6505d8b.html","9ec6c535981452ababbda7c32c3aa3c3"],["/article/da9af306.html","ab354f72cfcb3af38274f30b1ff5b92b"],["/article/e20a0ac4.html","d45be95f6c4a3ad9ce6f529fcfb3d2eb"],["/article/ef9ebd24.html","4aa2f1842f4e46aa125df41daa2915dd"],["/article/f01b987b.html","b73534efe379382cc3cd6294ded74a8e"],["/article/f8d1ff2d.html","7a1e4bd7b28956f85086c2ca659cbafe"],["/article/f96ab8b3.html","723a8d2d349548bd9e2374614d86ca06"],["/article/fd541bb0.html","c4cbb8ef39e8eb5435b2f89036591447"],["/blogger_said/index.html","892030fe92daa1022aaaeba8a6334807"],["/books/index.html","d648c03e6c9a7b632342719653e60b9b"],["/categories/index.html","af8dfa211f003e5c357bb7d95f375096"],["/categories/价值观/index.html","1eb9e5c75fd6d2bdb1e9f351c8607238"],["/categories/健康/index.html","e254620e203e8e4a0e24f04895b41d4e"],["/categories/投资日记/index.html","216383ae841dbb1c68c4f8ef1db00150"],["/categories/数据分析/index.html","b4aae10cd2572fc90332587989472dec"],["/categories/翻译/index.html","b9486c91b7c5010795c7b133cee8622c"],["/categories/英语/index.html","db79bd6c2207ae39398d5dd2b9a7b23d"],["/categories/英语/page/2/index.html","418db624ef06a59548a6c502aeae1a87"],["/categories/计算机/Python/index.html","1cce9fe95c78f85bcf3b199b9e1d69b6"],["/categories/计算机/index.html","0122dbfb301a9bf548578e736f2d2c17"],["/categories/计算机/工具/index.html","ba26da04b9c35da3ef88a0c6cb349db3"],["/categories/读书笔记/index.html","a5f0d3295e0600379f6052b07ac3341f"],["/categories/读书笔记/page/2/index.html","f4ee2f68fdca9d24e515df69537895e5"],["/categories/转载/index.html","d7a868d6b973b8e8e8e4da422541d1d3"],["/categories/转载/page/2/index.html","bf915ff534c2af40572b00b2f8dc97c8"],["/categories/随笔/index.html","43e736a5d9d2be9c766e6d942a0bd41e"],["/categories/随笔/page/2/index.html","e49c3fb8efa21aaec933535a972eb124"],["/categories/随笔/page/3/index.html","b38348e0684df9abd26089e226035931"],["/css/style.css","707a0ea11d082d9df64a31917767292c"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","f673bdc808ebd571f07d4ff07b53177f"],["/history/index.html","4401d9593ed275bf7bb08ddfa9d70edd"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","ffd6fdf010f093e8056a7d06c29930f7"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0068dc60c91e16dc151c596396cc050b"],["/page/10/index.html","56f8b63d07809404369817ba66689f82"],["/page/11/index.html","59d44e186737edf36392b2f29dfa7d5c"],["/page/2/index.html","25efedbb81ac1604e37596ce899d2a82"],["/page/3/index.html","7b5061364e0443fd82312ecb159ee054"],["/page/4/index.html","cb9b650cdd108b39cb5dd2c32c53c9f2"],["/page/5/index.html","b440a986cc0bd7bbd24c0e97cbb2d563"],["/page/6/index.html","7d8172e24567755e684f075ae0d18f0a"],["/page/7/index.html","87fea569e215e186fe9e148ec1dac628"],["/page/8/index.html","b8d494df7a0e64c824cdd35a1b333eab"],["/page/9/index.html","8502d6c44bc7120634b68dab316a47e3"],["/photos/index.html","f92a92cb0e49235749376a499136ce27"],["/pictures/index.html","5b013b7a3789ecb7796e6f050026b99b"],["/recommend/index.html","4feef2cce7a9cd106289eed63146435e"],["/sw-register.js","78fcbcab8bd320878b916d62e27fa82a"],["/tags/git/index.html","4b13304973030d44311af23d2582ffc9"],["/tags/hexo/index.html","be383fcf2949355cf7744938675c1c38"],["/tags/index.html","4e36edcc71a67c9106201dada5fa9d1d"],["/tags/中医/index.html","4c8de6a8c37264814b6f421ac3f6e802"],["/tags/习惯/index.html","89d564230b0fba0f1a680d11af93facb"],["/tags/休息/index.html","145110ad6cf853f5c3a493705661125a"],["/tags/健康/index.html","e004fbf2b7e0e10021279f1d3b0adc4b"],["/tags/公式/index.html","c1a229268b8bf2373c4790511f2e39c6"],["/tags/写作/index.html","de459cfc7112047bb18d91a4d2bfaa80"],["/tags/区块链/index.html","be7d620b6f3767f302515fa7d1aafd76"],["/tags/医学/index.html","af172aaff71df5088db1ee21aa7df83f"],["/tags/原著阅读记录/index.html","dde774430834d2b4213c2df8e5c728b4"],["/tags/反思/index.html","824e77a4c0f3a587aa394703477d3b16"],["/tags/同学/index.html","3ec0a4c69bdca9224ff45d3de1ddefd0"],["/tags/听力/index.html","aede6bfaa0dc577a7f6c15e3cac16356"],["/tags/处事/index.html","1acaa203fb0487e12f72d5facc5089fe"],["/tags/如何致富/index.html","a4f1305bdd742c1e20442c57766ef7bd"],["/tags/婚姻/index.html","2a178a7e394a25d1fb952ca7f563ee11"],["/tags/学习/index.html","b47fd24254840b770c3bf655146a91d8"],["/tags/安全/index.html","f87345e600b7a1c069b62a6223397d5d"],["/tags/幼年/index.html","3134950b9178e6212214f21cdfe90dad"],["/tags/幼年/page/2/index.html","251a03f2f893c9cb3b317f80c74ee000"],["/tags/微信/index.html","9b1b1f249204e8035e494f93cd9f30a4"],["/tags/心理学/index.html","e071c8b3dcaa9dd9253e954f55bc47f6"],["/tags/思维/index.html","610447b88b5d92c22f913201ca5bd817"],["/tags/情绪/index.html","dce858af19ed5712f91db4d17ee578bf"],["/tags/成本/index.html","22791c99940add24e32e37450d4a292b"],["/tags/手机/index.html","8bec40b5f7ea61930f2b8568e2c7f9bb"],["/tags/搜索/index.html","db8ac4a16c53f7e4f126540b3808c16f"],["/tags/效率/index.html","775914ea448ce4ae102b1edb7629e189"],["/tags/数学/index.html","9153ae93eadb8d9a00900529e3576159"],["/tags/数据处理/index.html","b687f24d65f86f9b3c15acefa246ae14"],["/tags/文学/index.html","1a883b66ba1f70c649ea21093bde0acd"],["/tags/方法/index.html","1cf8b2a29d96360d3a15daf06ee60520"],["/tags/旅行/index.html","a5de56263accc7975c20adc259cd387d"],["/tags/日记/index.html","9ec399a18a8e2802022be12ac1f0a7a0"],["/tags/时间管理/index.html","afadb30073b6c235910d685d5aacd978"],["/tags/智商税/index.html","74de310eacee2f812bd9239f8c624ed8"],["/tags/演讲/index.html","ad1ff0faa81eaddb458eeb9b40475c8e"],["/tags/爱情/index.html","576df5a656015ffd271c850e4e8fdf29"],["/tags/生活/index.html","576c3effdbb1ef6a21146c4ee6db048c"],["/tags/睡眠/index.html","b34e84703c7aab82b2f1e31867df96f7"],["/tags/科普/index.html","9bcda019a5df69b014298aea4c881c07"],["/tags/精力管理/index.html","60eaf4fe066c0181da95e9e76b57a518"],["/tags/精神生活/index.html","5bddf480fe916925f4fb83da20e0653f"],["/tags/经济学/index.html","97a50412ded347f632f36cf37b46ce67"],["/tags/自律/index.html","9895a44a45c0d0f75b21427cbfa470dc"],["/tags/观念/index.html","f0df882efe0ba8778360fb44ffec084e"],["/tags/解决问题/index.html","116b13e3faedece37611275e5600f597"],["/tags/记忆/index.html","c07ddf056c61791b5b464ee86f12f700"],["/tags/诗/index.html","1fb2ced370b49f547f5300be4cb4d02a"],["/tags/财富/index.html","7a0f1ef2eb8726cd7d59ef273c9dd1e0"],["/tags/阅读/index.html","f61a1ced27df020b42f65f1fc01e26ab"],["/tags/阅读/page/2/index.html","4c67d51940f62a4e383eca2400b93285"],["/tags/隐私/index.html","f793a0bfbcfaf8f0aa0124df7d7ff491"],["/tags/饮食/index.html","4ce5c2f1570eddee289060386dcb2778"],["/tools/index.html","daae39722f4de26841e461ac39c4907e"],["/works/index.html","5008824f02be5ca6cd9d62fc7e7485f3"],["/works/item1/index.html","2527483e19625400386ddd5083be7eae"]];
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
