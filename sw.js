/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","05b4ea21dbf6c0c6149a92f745712da6"],["/about/index.html","75e9b4af789e0e4f48a4e7cb8c7ca2a0"],["/archives/2013/11/index.html","9356a9300b7fc6f4ab068fc252074d0a"],["/archives/2013/index.html","87b79bf451c8f48c4db1cbe6123ceac0"],["/archives/2014/01/index.html","1c3ac5544121fd612362d4ae6b2761b0"],["/archives/2014/02/index.html","51008a74dfcfc2b5f8c997e0e26a2ce2"],["/archives/2014/index.html","c676c52e919fd8f28ae7e3ba69905d4a"],["/archives/2016/01/index.html","394b8f16c4b224a2da7258162bcd4e2b"],["/archives/2016/06/index.html","e05dc1ed08dcb853ba93584fc452828d"],["/archives/2016/07/index.html","631a422400bd7be9b8e6042edb35002b"],["/archives/2016/09/index.html","680d20604900345cfecc885bc69e4f57"],["/archives/2016/11/index.html","5625a868f259d210af3bb64b61ed4797"],["/archives/2016/index.html","77471f14738fcd12882da2ed13003321"],["/archives/2016/page/2/index.html","7f77420f2ab4fb3a2fe1a017c242947c"],["/archives/2017/05/index.html","f7cc22e31ae0442bda7bed0cf2a10b41"],["/archives/2017/06/index.html","f3f41912b97b76cc9028ed5125ca52d2"],["/archives/2017/07/index.html","115f2d4f5ce7df0185f2c09bed4c368b"],["/archives/2017/11/index.html","febe0e65a82757d08e1bfb2b8183a107"],["/archives/2017/12/index.html","b171b5184f1ef74aedd2b3725f9456c0"],["/archives/2017/index.html","92c299a521bc10b2527b326a7e551344"],["/archives/2017/page/2/index.html","ae16b949ef2b97d28e06c305e0b68cde"],["/archives/2018/06/index.html","dd75e7a55bd06b9d71d0591741992d9d"],["/archives/2018/07/index.html","5ae102bb4f4d30f90b72ed9382a0cb04"],["/archives/2018/08/index.html","b079136a1fe2a032c7a9810530745645"],["/archives/2018/09/index.html","f446256689fa0f3b523359fb3383e56e"],["/archives/2018/10/index.html","bc8968833ef4aa7580bbf9d968b9ab19"],["/archives/2018/11/index.html","bfe526d569d9a7ab559cb0e2c89888fa"],["/archives/2018/index.html","557e270c309ab053a6a3a09c8dcf9b0d"],["/archives/2018/page/2/index.html","78c39e9b92623b9e8bc405ab90f381f0"],["/archives/2018/page/3/index.html","6ad94b7efaadb93c58407b25c980d9a6"],["/archives/2019/04/index.html","d602cab138524f7e4ee75facecd402b7"],["/archives/2019/05/index.html","7eece82bef33014a2ca5ea6e464f34ad"],["/archives/2019/08/index.html","42d406a628566c3cdbd35dcf593d37a6"],["/archives/2019/09/index.html","234d3d76284726c35729f6314bb4f59a"],["/archives/2019/12/index.html","dc4894bb9885dc2f4c43b36030297fbb"],["/archives/2019/index.html","bbf925e89a301f833fc5c13521052f55"],["/archives/2019/page/2/index.html","8ee4a0878128fba1c8c9d5e8e7e963cb"],["/archives/2020/05/index.html","c2b19a414aa20e663b6953be77078281"],["/archives/2020/06/index.html","3952cfa9d3995cce15cfc8b700d47858"],["/archives/2020/07/index.html","f5d69e35d0bdae3f890677a1a8c40428"],["/archives/2020/08/index.html","6779d7cb2db659ae01b937106a791ada"],["/archives/2020/08/page/2/index.html","c08c1d4ae012f755ae642c029938fa92"],["/archives/2020/08/page/3/index.html","5fd9317f6f3f294e936fe58baa08e16b"],["/archives/2020/09/index.html","a2a9d03e9bb54e7adcd99288046fcde3"],["/archives/2020/index.html","3659505a899a2a4a0f3e562b6d5ea04a"],["/archives/2020/page/2/index.html","c96987c719842c16489f47514416075e"],["/archives/2020/page/3/index.html","6cc8855a7baec56d2df0249f240fd1cd"],["/archives/2020/page/4/index.html","64ed75825a4ca908ed2a55cd2ea3ca15"],["/archives/2020/page/5/index.html","9ea4687beac4717d442a55fe213d011e"],["/archives/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/10/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/11/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/12/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/2/index.html","abc2e7f3552a5a5cc2247eb7ea0d4d1c"],["/archives/page/3/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/4/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/5/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/6/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/7/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/8/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/archives/page/9/index.html","eedc76a8a31529248ba8c7e66b2999f3"],["/article/11fb9e73.html","b2b43bfcee5b21a27dd8439a2c2ed342"],["/article/136fa9d8.html","bb2cc8440ce54f3cafc5064f5e4ff81f"],["/article/19718e8e.html","156bdf0643bc2beb217568004b5710d2"],["/article/1b342210.html","70c54c7dc85648442bde88d2cb96e2bb"],["/article/1eb9d23a.html","60535d7cae76fa0656ef3c25524c6541"],["/article/228c75d3.html","ffd1f69620879faae71d87184d141107"],["/article/23494478.html","f48ca0db6adfb5db27519ede6dd1d25a"],["/article/2b3aedce.html","3e0e656942a0185b649a1d1aed25456d"],["/article/2e7c5c98.html","996e83f8af4ccfdc88d7085f8abcbdd2"],["/article/3229fb3a.html","22150f6f5f6459f07724ed4b82065615"],["/article/33554c5b.html","3b2bdac7e700b1ca66767b33b653dbeb"],["/article/35a56429.html","cc4207a75f36ac1b4a543b2babe483ac"],["/article/3aa91634.html","0d54e8a4725b8f6a641d4fe81ceff85b"],["/article/4562b0e.html","a9cd037c82689426279b6aacd0cb7afb"],["/article/481247b8.html","5dc27b2cc8879f53b015c9719439b47e"],["/article/4c3380c8.html","b4a6d4f444e84ba5710a4315327cb973"],["/article/4f8b07a3.html","800bda02ba83aafa8309cdd87e2087c9"],["/article/534bc28c.html","220392147988d6c3890e20563135e3ab"],["/article/5692b57c.html","6d49a087d7a618e016bd9a0b9713352d"],["/article/5b152571.html","72be465b7d18fbd0b78fe365cdaad65e"],["/article/5ca1802e.html","5d7c8994a49698e04a8781e59d5fbbdd"],["/article/5f339f98.html","c9c663352134fd07801e3c76161329c6"],["/article/64c8bce8.html","c100d839fc2e46ad7bf7bf166f26f9f9"],["/article/682814d2.html","9e173dc1d9d4172667b2848f37b9b355"],["/article/6cb8c766.html","ed0b210a6d6c2d2bc84391dfd1c99ab4"],["/article/6faab9c6.html","00afadce592640b7f384ff29ed3ba0f8"],["/article/717c02c4.html","4a89dfbdd9eaace04f9453edfac9fd65"],["/article/738c5196.html","76e99830e3189bac0f02aaddd689a0fe"],["/article/73ba8b39.html","e26697e81d48d8811b6f6470c79099bd"],["/article/7a5991e.html","bcdd3605485099f9f465de370e88ef34"],["/article/7d3004c4.html","e92bd8754555fd5343a5a4c9b3d17443"],["/article/83e42b42.html","853c6f55296c5fc3afd5c19a5e0d7172"],["/article/8c8ac5bf.html","568c570a985a2e5f7a99011cae96ed73"],["/article/8e989db0.html","0de3ec24b72539c6f45677d5cdbc29db"],["/article/90d5d393.html","dff6bf41059cf9bab5ae5be59ecc5f9c"],["/article/91a5995.html","0e1d7b7a434a50c71944d005f0fc4bdb"],["/article/940b4a8c.html","f3ddeb26f0f5cfc533e001104b60b3ba"],["/article/a0bf6b98.html","84141649aadd1fb716538e6292bb0cf3"],["/article/a264b8fd.html","be2beade32ef782942361032061cf0db"],["/article/b318b8fe.html","88bc6036d9be12b8b1380b9c769dbd4f"],["/article/b73c5547.html","efb027810245048235237650e2488b51"],["/article/bee0f638.html","3e71500e1d0e1460986abb4da26988bb"],["/article/c6bff206.html","bee56f6ed777808addeaa5f1cd117001"],["/article/c7063ec3.html","cf80e282c6ecbb502822b904cc710820"],["/article/ca8b4515.html","abd3bb6ebd91a4353e1cb652549aefcf"],["/article/cbe565ff.html","998ac2dbf16d36670b604685078531c2"],["/article/ce3b3e2.html","f2f63deec21fffd0a12346db1b25fda4"],["/article/cf8c0bbe.html","13db608dc55fd8fc27ce26006b7f3f3f"],["/article/d60bbbcf.html","9502b2a943c85814992bca58787a1491"],["/article/d6505d8b.html","1d1e1ec1ad726bd889d53681f68e518f"],["/article/da9af306.html","2e4254d9caf3081f6c27a78322bc5065"],["/article/e20a0ac4.html","d07e1e09ba4d1826c6812867ff741369"],["/article/ef9ebd24.html","b22dcc5e0c3a593c65cf0a2149b22ff9"],["/article/f01b987b.html","6ae8a3d2134f8905227ec4b9b0ceef89"],["/article/f8d1ff2d.html","de40ac28ad5c6f4298be7500cddc201c"],["/article/f96ab8b3.html","57454992d9e6e3ee0c1c835c080de90e"],["/article/fd541bb0.html","5ab2388d8a2af118b10e6da5f3432304"],["/blogger_said/index.html","29ef488d00c62ce74441852248163da8"],["/books/index.html","d7164df05f670519494265935f99223a"],["/categories/index.html","5d74c9f4f09596936240407b8862696d"],["/categories/价值观/index.html","f2898412e84249d81fde9590fae4b286"],["/categories/健康/index.html","4a4cf63c36e26e0ff4a95822d99da2f3"],["/categories/思维模型/index.html","95ae2bbd146b0448ddb5c6f74d16265f"],["/categories/投资日记/index.html","fec1429cfc160cee9f92c3b53b6a70d8"],["/categories/数据分析/index.html","27f22f604e571a5207b2bda1e65de11a"],["/categories/翻译/index.html","9fb58e7394f3ded6fce8d2a26b318037"],["/categories/英语/index.html","c0965147174b0cfd5e2af9617e45e0d4"],["/categories/英语/page/2/index.html","bac954f7470bc71e30f6f49d07ac0dd7"],["/categories/计算机/Python/index.html","ebe4e611580ce222ce6b58b197efd557"],["/categories/计算机/index.html","2b71e45bdb2f1cfe7131c2d7ef95cf22"],["/categories/计算机/page/2/index.html","37839b19484b800240ef3f776f1c27f3"],["/categories/计算机/工具/index.html","010023161f237ae6271baa5af85ff5dc"],["/categories/读书笔记/index.html","6990f677c6808c4f99a063b79c554978"],["/categories/读书笔记/page/2/index.html","50fb64e3303bc3ff7c5d49d6debebb39"],["/categories/转载/index.html","fd8c57885fca6ce678ef178f2a9b2ab3"],["/categories/转载/page/2/index.html","5e9766493dc891db9ac49e52474230e2"],["/categories/随笔/index.html","b2245123aadaf74f354e0ae4165fb94e"],["/categories/随笔/page/2/index.html","0f559d633399e8ed1ead2e4f48bd1a28"],["/categories/随笔/page/3/index.html","954efec5b84f6a2429a739ee7ddc87e5"],["/css/style.css","5c55a1ef79c4b92dbec14a61207ea571"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","a908660b2002ac25bfbe870f1d0ebd69"],["/history/index.html","2e9ae3c505de623f2e3ad222672c1e06"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","eb0e5b24ef056b38a26ae2b012d00a29"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","42f794ea36c74cc28e4bb30d9f671c4c"],["/page/10/index.html","45bc832c67bb13a951acfea0df86bb7a"],["/page/11/index.html","c9107c76efd6a023138f89eec1deba85"],["/page/12/index.html","83daa7f2a45722918070ebde7bf079ef"],["/page/2/index.html","4def0aa27f1fff6a63d839c2201404ba"],["/page/3/index.html","f9d9436e40096c05797f205981ca12d4"],["/page/4/index.html","32af73a266fc97e80f09fb35c38d2aa7"],["/page/5/index.html","6236cd083c0fd82cd875341125dbc24a"],["/page/6/index.html","0d6232b8690f5394bc27d355e8c44184"],["/page/7/index.html","df1f38c23ecda2660e410bc48e4a0e65"],["/page/8/index.html","4efc261fc3c796e39d582e12b0aa1c4d"],["/page/9/index.html","231cd7542cd7acd0463b0992d1a41e85"],["/photos/index.html","1eef9f2b576effe6bd1f294d10cac28f"],["/pictures/index.html","eeb6cc6315a60055356ae6bcadbdbbf3"],["/recommend/index.html","13f4e2391b2db5cbeb92f3c28c75823f"],["/sw-register.js","2572b700648f86ff270a5a797eaef952"],["/tags/git/index.html","9926b6674bdd9245b41015ae66eda82c"],["/tags/hexo/index.html","e736b4d4de686a9580e5a9192b8b833f"],["/tags/index.html","c4eebf2d92273876fecf282c9244f8cf"],["/tags/中医/index.html","d8b35ee2efe43eff02b080e040565499"],["/tags/习惯/index.html","9814e29c0907f7d4ff172218b1da5d00"],["/tags/休息/index.html","2962d97bd3ac9a8dce7430279591ab41"],["/tags/健康/index.html","f85f4de6ea58ce1996c2fc1b8f51fa90"],["/tags/公式/index.html","a5885c68b957998018c8a7a5f84b65ac"],["/tags/写作/index.html","930c2f107d6d8f578ea3e19192bbca47"],["/tags/区块链/index.html","6ff58c323a9607e590a1e2ae8c3ad984"],["/tags/医学/index.html","c1131b685828ace6328cba79e63afd0b"],["/tags/原著阅读记录/index.html","afa833e713044e1bf6ec925662896ca1"],["/tags/反思/index.html","994aead9e0b262e76688920e379d166a"],["/tags/同学/index.html","6ea77bf17d2271249fdbee3dd64411c3"],["/tags/听力/index.html","a431c418df0ab4aa7d4286428b63efa5"],["/tags/处事/index.html","61ad202205b27ca8f126bccb56ed3241"],["/tags/如何致富/index.html","d27fcb040e23c23a7f380aaa3cbaae13"],["/tags/婚姻/index.html","d6764f5ba49596045a6e19d68ebec1b2"],["/tags/学习/index.html","dc0472b3b3c58c92b36a4168d0c218b6"],["/tags/安全/index.html","e05e2aa0c31cbf51469ac4f925663e80"],["/tags/幼年/index.html","732124c3ea20aff87d02706d4635a5ba"],["/tags/幼年/page/2/index.html","9426167a6e00219f462f4b7e2b88b5a7"],["/tags/微信/index.html","9c54c94ba650318e72bb8e14d8569d2f"],["/tags/心理学/index.html","1f41488a92d50288e5472db9291513ce"],["/tags/思维/index.html","ccf43c7e4fa585c6086e1f92cc639cb9"],["/tags/情绪/index.html","65d4e2b8895626da8f502e038661c7e2"],["/tags/成本/index.html","d540aed9b6672ba40d675ce0412491b6"],["/tags/手机/index.html","1200086e6e15e6d4f41e9e2627117535"],["/tags/搜索/index.html","98e69fc3a8a5990540b3f538a6a9031d"],["/tags/效率/index.html","15e518db526adbf8e6434cb0673d3c60"],["/tags/数学/index.html","eea317313a62dcd0b80f6574a5f54b82"],["/tags/数据处理/index.html","301769f75b2aa24571db42a0e245a435"],["/tags/文学/index.html","4ca50e4296f1aa1a44b3a80b8d330257"],["/tags/方法/index.html","7c6a53f5a6176d35219c77c0dc627fbf"],["/tags/旅行/index.html","3cdd9f70cc86dfec94d11ebe0c7dd6f0"],["/tags/日记/index.html","8d0a22cc206c3d9724739f95c5776c88"],["/tags/时间管理/index.html","22cd59b8e4071360e1766d4f9bef1848"],["/tags/智商税/index.html","f494f7c1a362073ddd0207bea0c3ff17"],["/tags/概率/index.html","f03d76986401efa5818360a240d47402"],["/tags/演讲/index.html","7849708475d2495a2735713b38c640dc"],["/tags/爱情/index.html","c9c366080758cb6e9b85feb1e42574f9"],["/tags/生活/index.html","fcf6e5f4736591c0b3e631a578e6ceff"],["/tags/生活/page/2/index.html","15e2f95e80a7df31ec313855126645a9"],["/tags/睡眠/index.html","c48c171f6a10ee1b68941028cc9d3ab8"],["/tags/科普/index.html","b7b5152efa0f9dd93279465bd62646c4"],["/tags/精力管理/index.html","e21810530fe9b70a934c6af8ee9f3714"],["/tags/精神生活/index.html","301fdacedaf401f46ca8f73b47a64a1b"],["/tags/经济学/index.html","5c1a93063e6f172e55666cce33bf1457"],["/tags/自律/index.html","843429cd704f26e02bfb01bcd5545cf6"],["/tags/观念/index.html","e15de9b976a0f90d4520b9b12ff06320"],["/tags/解决问题/index.html","e399846ac8b4c4e973a6271c1bd475e8"],["/tags/解释/index.html","7b6ae3fce8d31319a786ccfaa58cb51f"],["/tags/记忆/index.html","de608cf5c32c9e4bb7a414d0c40006df"],["/tags/诗/index.html","74c632f7d241ca93f54859c8b7869193"],["/tags/财富/index.html","20e7028d41ec162b915d3fce16fddc01"],["/tags/阅读/index.html","ca5b6eaea379530a5bdc019f568cd813"],["/tags/阅读/page/2/index.html","d0747370992764fbad5bee9e6b03063d"],["/tags/隐私/index.html","ca96c704ba17f4ee0ee720b0354d2366"],["/tags/题目/index.html","86965b0c54aa6958200c871e82c24b8e"],["/tags/饮食/index.html","fc0827f40fdcd8f8bd5a04a3a1df4727"],["/tools/index.html","bb953b0f979adc59cc9f26cd16731f81"],["/works/index.html","41d1dea43e6bf50e9d254c333c75e169"],["/works/item1/index.html","4eee00f25bfbd04647facedae8581b7f"]];
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
