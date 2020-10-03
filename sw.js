/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5615bb20b76cb65b9e87eec743aee1a8"],["/about/index.html","75d958789dea37388b5af47a3dcf8cf5"],["/archives/2013/11/index.html","efdb80351ba09eb0fb6a8eb5e9098ece"],["/archives/2013/index.html","22d711ac822e1c30ceec474d5366d1d7"],["/archives/2014/01/index.html","bf8fab30b9e447139d578b6bb1836c06"],["/archives/2014/02/index.html","2295275ce200fc5560cc71e59d9efbc8"],["/archives/2014/index.html","6114de6eaf4698772dd3d14029adb447"],["/archives/2016/01/index.html","df0b89d7d8bb081324edb9d7c0d91eaa"],["/archives/2016/06/index.html","082ae332f633ae25cff6f0b174f0c841"],["/archives/2016/07/index.html","48c2d564dc2eb6b8f350aa7e4a2aa06d"],["/archives/2016/09/index.html","28e81a6371bc3395381e7c11fbe47c47"],["/archives/2016/11/index.html","0540bcb5b154f60c05f3a0d8b799d6a2"],["/archives/2016/index.html","634871473e1a9c29859095885d688200"],["/archives/2016/page/2/index.html","51662017326d59ff7c6b9bd2c093eb38"],["/archives/2017/05/index.html","dc796c4d821a5682e461ddac59445d0c"],["/archives/2017/06/index.html","9e188f8a16caa776bdf5ce3b27f61128"],["/archives/2017/07/index.html","c18b0e25f61b06fc4edfaf59ca3fa73a"],["/archives/2017/11/index.html","1561b3a0ea6f4125f0a21e609f7e9cce"],["/archives/2017/12/index.html","d0e673a35bdf8b2a69ec0d6ccc7d5923"],["/archives/2017/index.html","9ba5704ca0f6443591fd0505e30bbd2e"],["/archives/2017/page/2/index.html","f54eccb9306273293efa5c4d8bb74b75"],["/archives/2018/06/index.html","851f702220163947f088f7fc0ad990c9"],["/archives/2018/07/index.html","b0c40aa250b109b046976079eb4a4e96"],["/archives/2018/08/index.html","f3e0af038281b5f48eae4ad70e1e1c68"],["/archives/2018/09/index.html","9e510f4bfe93ef0a731a60ba161ed0e2"],["/archives/2018/10/index.html","3cb8b0a2a22cc86de704a7b822c9f1f5"],["/archives/2018/11/index.html","397eeed04a8c429f561406313b90e340"],["/archives/2018/index.html","51765cf6e39c11359a2454134efcd149"],["/archives/2018/page/2/index.html","e1da67f5c4263f4a9ff0465f5c2f9a8d"],["/archives/2018/page/3/index.html","796a1fc79141faa24ce83d65155635c2"],["/archives/2019/04/index.html","9a206da98c91f0c52e3ccfeae6cc1f05"],["/archives/2019/05/index.html","b4b5a29e9e89d4f7fee7f11b9b167e13"],["/archives/2019/08/index.html","8c9c884a47db45ff3059c3716504e9b4"],["/archives/2019/09/index.html","bb84e773254a265e7afdafed590685b5"],["/archives/2019/12/index.html","e2847cd5156bf660f5ceca569b01d39b"],["/archives/2019/index.html","5c919e5c3ae2bb75fef9e7190baa9518"],["/archives/2019/page/2/index.html","ccaa8388bfdcb11066963b92dfc1ffa3"],["/archives/2020/05/index.html","f3af0a752f398cce2d22b9de4f998bda"],["/archives/2020/06/index.html","79ff7e8e4abd00df37d770d0129b5036"],["/archives/2020/07/index.html","2b8420532c6228c0ce4a897a083b4c0f"],["/archives/2020/08/index.html","edad57d93ab1eb53df5b53d38945346c"],["/archives/2020/08/page/2/index.html","fcaa4228a0d1181f1ccdd02770ec32ba"],["/archives/2020/08/page/3/index.html","df2d435a3d04e0370aff1e9ab372c5b7"],["/archives/2020/09/index.html","c9726542d65941818d208e89b7760ad7"],["/archives/2020/index.html","f0be838bf35717e5f5ea908db2fb84ff"],["/archives/2020/page/2/index.html","ecd82d4a3111ad349312cd7c811a74be"],["/archives/2020/page/3/index.html","7d7aa463d5dc3d8e7a34e1f3a6bfd010"],["/archives/2020/page/4/index.html","b5c2a1277d5cbf0317a58b38578fa39a"],["/archives/2020/page/5/index.html","7bfd38ef5cde10d4688657de4deeaaf4"],["/archives/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/10/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/11/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/12/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/2/index.html","f55dcd4da05e5d99687b09224a91efc3"],["/archives/page/3/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/4/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/5/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/6/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/7/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/8/index.html","14fef227e53469a95f049ee6b2622490"],["/archives/page/9/index.html","14fef227e53469a95f049ee6b2622490"],["/article/11fb9e73.html","3f68768db340f202b154c9472b5795ad"],["/article/136fa9d8.html","1e308d77b27f985fd6b6a0905cd6c65f"],["/article/19718e8e.html","d7f237084ee196efb880169d544dbb3d"],["/article/1b342210.html","e38493ae45279fbcc340fdc7e726221a"],["/article/1eb9d23a.html","6d2a939779764e54d2ecb5ca5e7ba514"],["/article/228c75d3.html","6fb91d4edb7afc9f6a0825add372d73a"],["/article/23494478.html","4dadada0f5aeaf1900bef5b686dd748b"],["/article/2b3aedce.html","59b4ae0e234d77712a4c4fc069e60dd3"],["/article/2e7c5c98.html","f1b61db0d0b6f99c2c10797c35af371a"],["/article/3229fb3a.html","783bc11cd17c501249fb5bcb64f30765"],["/article/33554c5b.html","77fdfc4bcbbadad3d2432f7fa0905916"],["/article/35a56429.html","6e98fafa88cac5d3d30e49f265030967"],["/article/3aa91634.html","ab98b7cce95057e2f11995cd0706a6f2"],["/article/4562b0e.html","3cb7ffbb871e31e2b2c484cdc3f08f91"],["/article/481247b8.html","7d1bb96bd9877c57e4b72fd0e669d68d"],["/article/4c3380c8.html","cfc0e8754475354fa7e10d8335668550"],["/article/4f8b07a3.html","175027429e562aeba0cab4753c133a0e"],["/article/534bc28c.html","39a0ec910db843457adc9299e42fe800"],["/article/5692b57c.html","af7035b0a6e76003c04eba58db710697"],["/article/5b152571.html","cd2b5527898afaae023edb53634591bf"],["/article/5ca1802e.html","0eec8b8ff45368ba153b978a1ef63fc2"],["/article/5f339f98.html","26f42cf64192bc0a259793bb72a59f82"],["/article/64c8bce8.html","0b7eb4153f3e989a7804aaf6e2475034"],["/article/682814d2.html","2c4feb988bc9f7c870924ee1bb22f1d3"],["/article/6cb8c766.html","0e946bce1d1ce8ce58040b5df009e5bd"],["/article/6faab9c6.html","bcca767bc8d9fad503508d7163202cd9"],["/article/717c02c4.html","8efe01c8223d6cac3d5ccc9475692fd1"],["/article/738c5196.html","60eeca6d91aceb868a50e68e74dbafc9"],["/article/73ba8b39.html","6750dbd4ab8b734cad3dcdc39b439662"],["/article/7a5991e.html","aa376460f1861f5112ba81500fc80fcc"],["/article/7d3004c4.html","decec056e88bb92a04aedcf43a346600"],["/article/83e42b42.html","f286694a6cda14f6716f66848743f41d"],["/article/8c8ac5bf.html","1f05e9757928301c8bd33f469c63fe86"],["/article/8e989db0.html","a0709d0fb0636d4d16cb72f32f8ca3a4"],["/article/90d5d393.html","ac9b816aae6538c217a659ea45b75081"],["/article/91a5995.html","f55ba6b64dae02bd346fa1be7172f67e"],["/article/940b4a8c.html","66d10211a1804f44b148a321cf08992b"],["/article/a0bf6b98.html","f2d804b657c297824e2760413222410b"],["/article/a264b8fd.html","65ff8205e91a9744231c585668271a61"],["/article/b318b8fe.html","86e48b60433359d5d0b19f506e2d1d9c"],["/article/b73c5547.html","65d6b9ddb89d027dff0fe54dc50a80ee"],["/article/bee0f638.html","1857df00f1b5cb89e8d581bf1185cc56"],["/article/c6bff206.html","86dd412ba4fa3c715585e209848f392a"],["/article/c7063ec3.html","72a4ec17498912e2c7647f1111b6140f"],["/article/ca8b4515.html","7919a27ca9a9d302efb2a7744e8c3cd9"],["/article/cbe565ff.html","f890f360c5e291c80af83c5ad6a6b12f"],["/article/ce3b3e2.html","0bd9c4ba51699b18957a4d04a12104d7"],["/article/cf8c0bbe.html","d0d9222ff991dcde8f558a0bf8190d56"],["/article/d60bbbcf.html","34df6323d43abc32ade7768fcf9c2663"],["/article/d6505d8b.html","1db59d589a1ae7a6c2473c6f5ad23a18"],["/article/da9af306.html","64f6ccf592d41b64ed8010e2a32f6178"],["/article/e20a0ac4.html","23ce1f96c0e87e14c8ffaec7f4613312"],["/article/ef9ebd24.html","29e2abf5fb695625ee33a620f59ad8ec"],["/article/f01b987b.html","07af1a5a77155f292ddcfda3724ecec8"],["/article/f8d1ff2d.html","f82cff5e3e41c00902fe979663b89112"],["/article/f96ab8b3.html","803114d13eaad86ff773431c2673b42a"],["/article/fd541bb0.html","3c27a4c5e7394c09f170fa1ed53b3c33"],["/blogger_said/index.html","09eb956311b39f64475f027ab2433285"],["/books/index.html","4f6926bcf199ab29f672d8eb5fd85c9c"],["/categories/index.html","7b9a33d88655222e5a391e972072f698"],["/categories/价值观/index.html","53705973ebc82e4d2a84788f5f40e6c0"],["/categories/健康/index.html","05a7a8b5c8b665ab550c80b2d995e451"],["/categories/思维模型/index.html","88a16e420c6eac25c8f502876ce1b4d4"],["/categories/投资日记/index.html","cda2583fd67e4ae0e4dde2a1204009b9"],["/categories/数据分析/index.html","866773fbf0f801223dfeebb7c7e868e9"],["/categories/翻译/index.html","08b7d39f0e8963b6cebfcdb89c8a0e9e"],["/categories/英语/index.html","eb2958a3470c7c81ec8999686a3055db"],["/categories/英语/page/2/index.html","9a4f6aee54378ae3a1c06064fc8a7e9e"],["/categories/计算机/Python/index.html","19961c6774c6eff883a47d5fca677281"],["/categories/计算机/index.html","79efe267aa3a429d68958097dbe5591d"],["/categories/计算机/page/2/index.html","a57048f85aeb70816a88f6fbdbeb7898"],["/categories/计算机/工具/index.html","71b7a09036f6d6f5b3e0d324abb9e539"],["/categories/读书笔记/index.html","31dad59a65be4531f52e404b2d7fa9e7"],["/categories/读书笔记/page/2/index.html","1c1e4b5925ce109d5cd423be4d4ab724"],["/categories/转载/index.html","3610b42fa3fd3c335f198b2d34a0d8bd"],["/categories/转载/page/2/index.html","5a3746801ee0032e27ce22c0bdf80de3"],["/categories/随笔/index.html","bb632944f852cc19e005f2ead749198d"],["/categories/随笔/page/2/index.html","cc329672d6e38de52174bf431c10e06f"],["/categories/随笔/page/3/index.html","f175002e12524e669291133f14de3cfc"],["/css/style.css","867d37c9231f2fd9282fbd99e5dcdbc9"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","c1657497130ddf18875c382dd04379f7"],["/history/index.html","99d79249808f50957500e99d3de31c4e"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","1b4f42dcc45ce26e867ad8d7b709e7a5"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","9c7d434b457b5f0950a33c97fcf4642f"],["/page/10/index.html","a0c46263a6268ac5546f201216d1bdee"],["/page/11/index.html","41a4a84f07b23de3d96f0aaf51ff73ac"],["/page/12/index.html","1a84b3546e882f41ffa8d5dbec833f85"],["/page/2/index.html","84e258df797fcaea27fa3628735659f5"],["/page/3/index.html","707033e8be9ee7ed77a9cde971f241be"],["/page/4/index.html","e55ad2e36f9fe7f19f8571508aa50f52"],["/page/5/index.html","594a6efdca9ba7d8ef2da2ab5ff30057"],["/page/6/index.html","5eb5a1ad1dc68e65ef6344e76552116d"],["/page/7/index.html","ecfb73a6d8906f1152270919815de545"],["/page/8/index.html","b086a439d8f4e17ce16fa7b24ce3a0e7"],["/page/9/index.html","6bdc833855407c1b7954431ae753be4f"],["/photos/index.html","8ab1d5f33e52686c6b92b2b1fd10aafd"],["/pictures/index.html","6fce589fb3a4a31ae21e30f94ea254d1"],["/recommend/index.html","2a645a4b56a125905b9df8f25d87ad6f"],["/sw-register.js","3f8f8b7833c01ea64cc7878995213d47"],["/tags/git/index.html","309d56f75fd657bd3ec227d4bed24030"],["/tags/hexo/index.html","1b4affb39421d25384685b5b60f39920"],["/tags/index.html","53c5026dd8f13c4ce65950e0f27db976"],["/tags/中医/index.html","f159aeab7726684537a4d0d53c77c1ce"],["/tags/习惯/index.html","b7d4ff335ceaf8675fbfd1c9073aeea3"],["/tags/休息/index.html","f07d73fc5040cc2543541933996126e8"],["/tags/健康/index.html","e2834b91ae01ec15511af55425e8b6a3"],["/tags/公式/index.html","463e830803c3b52b9631b6a61e2ead56"],["/tags/写作/index.html","f39eab99a0682a94ebc6de00e7619d6f"],["/tags/区块链/index.html","900d972825cbbc742dc784d74286ed28"],["/tags/医学/index.html","2586593d93332d15fed7b2a5d0f08bef"],["/tags/原著阅读记录/index.html","c67dc5d10e77ac872397d96e11bd02c0"],["/tags/反思/index.html","24bbcf3921b6e2d5ed51e4b3b7552e12"],["/tags/同学/index.html","03eea94051178f35058523fa96842eb1"],["/tags/听力/index.html","c652a5dee0a7487d8cceb03a0dc7c3f1"],["/tags/处事/index.html","dbf0f028f3cda50288fcf082aaec7fc5"],["/tags/如何致富/index.html","dc5ac9fdec89e18b1838aca184cba88f"],["/tags/婚姻/index.html","6be8e5c7eb844bb4d7714c919a3de09c"],["/tags/学习/index.html","00b508cd6bcea6d43f8875a1221c07db"],["/tags/安全/index.html","dd352aa759730092d93502a235eb7555"],["/tags/幼年/index.html","87e9f4e795520ba2bd51aae7c7358273"],["/tags/幼年/page/2/index.html","fde86d1d6e345ac48556df3c6a9efb71"],["/tags/微信/index.html","b707c2c343a54e7dde9a48d4e1259d46"],["/tags/心理学/index.html","0a8238bbacc54fa8d07fd7b9fa3dccc6"],["/tags/思维/index.html","3b4d7a0246bfc016baef62a9591dc640"],["/tags/情绪/index.html","3eef221f1c50f416b1e640c9ea91e8bc"],["/tags/成本/index.html","a1b41b22f6e0ccac5bb1207f83425b8d"],["/tags/手机/index.html","c8e52e8934bc6b68fc607bb659b6f892"],["/tags/搜索/index.html","44194982b2fd6f7b400206ee15b1914f"],["/tags/效率/index.html","339074d6301ae1122848ba22009fff71"],["/tags/数学/index.html","7a3da0c5f1f263c443828cc0d5b5e1d2"],["/tags/数据处理/index.html","9e4135e8bc8de66164521d0ff4a0b96b"],["/tags/文学/index.html","74bcb4fca42fe5e54f42317cde3c6f06"],["/tags/方法/index.html","86ee7cb7247acfbfcd95e865478e84ed"],["/tags/旅行/index.html","59ec1a55c956a63c981e106f2dede499"],["/tags/日记/index.html","060133c4ca98874e85a74e3c83fbdb58"],["/tags/时间管理/index.html","d2fc7fbde9e93545dead8524125213b1"],["/tags/智商税/index.html","38282a902db0b20f07f483e1a1df8e5f"],["/tags/概率/index.html","2da1c8a186d8383dc201bf55e043d4e9"],["/tags/演讲/index.html","082bef87440bf847d943abdcacf1212a"],["/tags/爱情/index.html","e846009a7da86fa6100c61ae6ac0ccf2"],["/tags/生活/index.html","86660bd9f096b874cb60ffead2f050b3"],["/tags/生活/page/2/index.html","a52bbb683efd71e3698670f4a1c4498c"],["/tags/睡眠/index.html","9551fe8b44bb01bc593e9ff0c57e9546"],["/tags/科普/index.html","aa31427f1ccdce15c3f205f0814aa903"],["/tags/精力管理/index.html","945979445ff4f8fcaca4f45d17bbb2f3"],["/tags/精神生活/index.html","b151b4f1d4ec4a46cf8438845da2f329"],["/tags/经济学/index.html","434c8da7494e6d807dc46d4d9915ea6b"],["/tags/自律/index.html","165182391f5c472b8d56f6068684c154"],["/tags/观念/index.html","2ae72d44b0e77412f624621a5af69d98"],["/tags/解决问题/index.html","e0b2a9c0b4132643011d1dc48ecf0836"],["/tags/解释/index.html","c7a622ba3e46b58d06de1e94266350c8"],["/tags/记忆/index.html","bae1c1bf53d45a9bc1d64642cf0b3220"],["/tags/诗/index.html","71fcd5330b7870cdd861b69e9adb7cb0"],["/tags/财富/index.html","c59d3a20b54730c5a12873744870b025"],["/tags/阅读/index.html","7cf373a1409c207c6c1769a633f613d1"],["/tags/阅读/page/2/index.html","8a3535eaaae403b7999514a654b5508b"],["/tags/隐私/index.html","5817dea35ec5e257db9560c13cc99c83"],["/tags/题目/index.html","69695849c6a537af6fa02d748ae51611"],["/tags/饮食/index.html","de031be3bc005a9449cb02be6667f08f"],["/tools/index.html","813f71b6b59cdbb3eebf224a9b8eb930"],["/works/index.html","956c4702f6f5502f95ce5c11eabf22cf"],["/works/item1/index.html","653963223acb44dfe275fafa22494ded"]];
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
