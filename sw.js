/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9958cb805a2167570f394a3c27916b0"],["/about/index.html","4f105262e9ae64e967234a7fb289ee8e"],["/archives/2013/11/index.html","07cf49da5d5ffaae85b819931c2910de"],["/archives/2013/index.html","9000b60188ee3a125af82acf83d031ac"],["/archives/2014/01/index.html","12f6cbc24dff94fb5865c68ce2b917c5"],["/archives/2014/02/index.html","b7095d69e911674a5dceb61e8a827060"],["/archives/2014/index.html","612784d04c726230e5a8616630bd1d49"],["/archives/2016/01/index.html","79081b78742bde2badede2829ffeac2b"],["/archives/2016/06/index.html","d259585af94ba4792f8e1f4136bbde5b"],["/archives/2016/07/index.html","3cf222aca2373975ca3d394b9967fcf6"],["/archives/2016/09/index.html","297cff253a9e93aee87dfa40188b943f"],["/archives/2016/11/index.html","08995aacd4341d3eb169110a30edb2a6"],["/archives/2016/index.html","c61f508aa5104722cb115944c00e4f27"],["/archives/2016/page/2/index.html","2b8f4f91ba729e4d287e07428c888d2a"],["/archives/2017/05/index.html","2a9699463456553d35963bc7183c8c84"],["/archives/2017/06/index.html","6ee085ced436a8bcbe79ffcc4e6604d8"],["/archives/2017/07/index.html","0a045175a07a1125d97d5e984b46484f"],["/archives/2017/11/index.html","8943acaf2771f4f23c012eaf624987f7"],["/archives/2017/12/index.html","f7ddae91fff51035a8be319739457f6c"],["/archives/2017/index.html","7792568e90e5c457346e5c2bf228e56a"],["/archives/2017/page/2/index.html","9cc460d5a469ebcf37143a807644261b"],["/archives/2018/03/index.html","5311b085d7034819075db377a0875d72"],["/archives/2018/06/index.html","8a988a9f2572a1471b77865e9b4fc931"],["/archives/2018/07/index.html","171064b0575ca4debe276f295aeec393"],["/archives/2018/08/index.html","5189880c854cd5a369a38c10965f05fb"],["/archives/2018/09/index.html","9b473a920a70294997cf8ac56f7a0d58"],["/archives/2018/10/index.html","31f548479fc9fa30ce346f84aaf3add6"],["/archives/2018/11/index.html","08b4a6d1868faa3efac6a69c1d7054ce"],["/archives/2018/index.html","490710891c958b973eb865960aee1071"],["/archives/2018/page/2/index.html","6ce1443cf823345c87dad78630a5a37e"],["/archives/2018/page/3/index.html","bb3337da474858c96f344fbd24b7c24f"],["/archives/2019/04/index.html","3d7b946b5792bd1e27245f99b11e57b7"],["/archives/2019/05/index.html","426854dc1fedb183f1226041cff7931a"],["/archives/2019/08/index.html","f0dcfbcc7d07082b24938476c6e1559b"],["/archives/2019/09/index.html","73bc3d6e797e0467370d94e803e4ad77"],["/archives/2019/12/index.html","852ad7716fa72b45c21ea925ad966a4a"],["/archives/2019/index.html","57846e6ac5b44871604d740e43e86f0b"],["/archives/2019/page/2/index.html","b153e405182798e06f8dcc2433c10bf1"],["/archives/2020/05/index.html","627251091188fcab4e73c91fd6d31b80"],["/archives/2020/06/index.html","fde02eaae52dce3e96b892172fe051cd"],["/archives/2020/07/index.html","4cb4d483f116f48d33c1c07a60e75016"],["/archives/2020/08/index.html","2848a7365f8029d7a9393b6521337beb"],["/archives/2020/08/page/2/index.html","fd503a2ce88f10ed94232af2549f785e"],["/archives/2020/08/page/3/index.html","55b1025b0f6db4298d3c012b516b35af"],["/archives/2020/09/index.html","78f21bfc826ede3a016430eb29ed092d"],["/archives/2020/10/index.html","74bb61033ff2d0930aafb372a216377c"],["/archives/2020/index.html","d75b99b6e707b3bb5456dd3c32ab29f3"],["/archives/2020/page/2/index.html","f112c25d5e4271860cd8ea1ec0162351"],["/archives/2020/page/3/index.html","1d56ee55cc52345ef0737e689e4e2df4"],["/archives/2020/page/4/index.html","80451f260b75ccca6112e270ba0c7ea0"],["/archives/2020/page/5/index.html","ef37f5b0abdace2f538a7dea19d4d977"],["/archives/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/10/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/11/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/12/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/2/index.html","00f867b80f3b7caab0e181cd63e34e6c"],["/archives/page/3/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/4/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/5/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/6/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/7/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/8/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/archives/page/9/index.html","c9b8adfea0550e79816b357f6a00a04b"],["/article/11fb9e73.html","069e80c031a37b34400549c3909ef6a3"],["/article/136fa9d8.html","8edfc4f8364601a9675e22e8923001a6"],["/article/19718e8e.html","5d0afeca86f5d75a3295f551fc15b45e"],["/article/1b342210.html","d8a913f63a0c14e3ffc0a0e62cd11f97"],["/article/1eb9d23a.html","5eef45754caf08b49475b48e9c30ef2b"],["/article/228c75d3.html","8bef952fad4e6c723dc2abf9c33d14e0"],["/article/23494478.html","3f3d5a382daa36da5d2a2bd5312cc5e0"],["/article/2b3aedce.html","cf36a477ad8e059e71ac871f1b535c51"],["/article/2c2925e.html","94eebad132aac4d64649b4c6432549fa"],["/article/2e7c5c98.html","0459ab03a528f6ad1fa42ba9272f6286"],["/article/3229fb3a.html","004a89186a4eef5bb7cbef6f377dcffc"],["/article/33554c5b.html","aa77c1f470d2e01d87320461ebc1b9f7"],["/article/35a56429.html","46f15b8519f8e7a7f5c15560a4776498"],["/article/3aa91634.html","08300bc65f9279f6c53996a51f7776aa"],["/article/4562b0e.html","1d1b36f85bc40ec322fa3eee5db7e1dc"],["/article/481247b8.html","2c16ee689223f142783dc771fc7d1259"],["/article/4c3380c8.html","45b2da6205081dc4cbfb816e3d375526"],["/article/4f8b07a3.html","8d8905636c8c9fd022acc276ed704d2d"],["/article/534bc28c.html","1f452d0209ee9f7df5dbe7c465292098"],["/article/5692b57c.html","a928f6c4c88516daa8fc41b84f22c8f5"],["/article/5b152571.html","eab975cb25f5dd49f2d66aa32ebac135"],["/article/5ca1802e.html","aeffebfbf41cbc1e107bddfec5e14730"],["/article/5f339f98.html","42bdfddf05db18d4be6eadd0a420fb3c"],["/article/64c8bce8.html","d7d2825c92a6f9b6a82d5072145940ea"],["/article/682814d2.html","61692d6f9332bd03644c736f74dda65d"],["/article/6cb8c766.html","fd9cfcd1820c62a5c2e3165dc4f43d27"],["/article/6faab9c6.html","e58ce4f681054b39d1a66cdfea544188"],["/article/717c02c4.html","26900e8bfb019214dbcd8a038409fdae"],["/article/738c5196.html","045cfd2e44479ff337a691a1d58bb3d7"],["/article/73ba8b39.html","d4ef45b8e953691521f6d07a231e007c"],["/article/76ff70b5.html","b8d3dc7df4911d42a4b4fed40f0f45d7"],["/article/7a5991e.html","19a8f183c3c2ade2581e9e46fdf79054"],["/article/7d3004c4.html","dbb3283a7f433f3e39aec7283a9bd904"],["/article/83e42b42.html","938a4ad61d04f4659c9e1f98ef0ef454"],["/article/85b1246.html","bed84525d7d9588483cf9bf1bdc10cc5"],["/article/8c8ac5bf.html","1dad7cd9b352f3f4c7fbe572b7b085b9"],["/article/8e989db0.html","f2ca31b47d17dc725c028063d26df87f"],["/article/90d5d393.html","0195a842848014443a65c91cd76b6496"],["/article/91a5995.html","b3fdd776c3762b546f15616e8e0ecadc"],["/article/940b4a8c.html","9d2bb7057e0c30c9838983c34e007bf2"],["/article/a0bf6b98.html","7f1def5392e4d7b3680188dfe0a6d750"],["/article/a264b8fd.html","0336086f8e667f1e065e2a7b339d8edd"],["/article/b318b8fe.html","ec475838785b4c9149b7b84e2206344d"],["/article/b73c5547.html","1f50d17205022ae2ba2f5ea6a23c295a"],["/article/bee0f638.html","67d95d47edfd784626245fce1d76ed5c"],["/article/c6bff206.html","7f3bdeca099b34b2cf2571d143fe85e0"],["/article/c7063ec3.html","ba36522f0803d81b59945b202517dada"],["/article/ca8b4515.html","cee8df2920ac7b5ae33934edc6523a73"],["/article/cbe565ff.html","49f08ac77556c50ee54b3731155cd3a7"],["/article/ce3b3e2.html","f3f35ee9cb202db9375ffbd10aaa4eba"],["/article/cf8c0bbe.html","0a89075d9bf2b08532ca08f44042e2e0"],["/article/d60bbbcf.html","5cf3b236db2f95f44b0dc01ce0b0e584"],["/article/d6505d8b.html","e30bc1f99afd59ce6ecef54df6a78315"],["/article/da9af306.html","79b5eb225e8f831899a12c6bb29b8a25"],["/article/e20a0ac4.html","07d254b6ea63a12b875c35f99cb37c5b"],["/article/ef9ebd24.html","b16f949861aa3a098624edb5dcba1798"],["/article/f01b987b.html","d3617b0930eacd8a5b7d48267d655626"],["/article/f8d1ff2d.html","ff60d4a51973e92d4e8695c65a970ba0"],["/article/f96ab8b3.html","72bef26dd16c1607093dbf7804377aca"],["/article/fd541bb0.html","0a46297bbf2c2405a6e08f75a98e48ae"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blogger_said/index.html","ba16e36bf1e45be2cb2c277bffea6b67"],["/books/index.html","742f6eda5c353d01a6b6faa78f604104"],["/categories/index.html","21e05e39c8deda6d1dd0d0c97a87bb34"],["/categories/价值观/index.html","ecbe4d5183761366e59baf2a12f30143"],["/categories/健康/index.html","c93ff9ef18fc4b9eebe227e4d9c22efb"],["/categories/思维模型/index.html","85bdd936bf976c8ac6a94a941d747911"],["/categories/投资日记/index.html","fad7b44f3d4d7b479cfd955771a89d70"],["/categories/数据分析/index.html","9b640823eafc49671647ea353badedeb"],["/categories/翻译/index.html","68644e96a65c133f0099655ec27c34a5"],["/categories/英语/index.html","0deb337d36df2b074b9086acc395e929"],["/categories/英语/page/2/index.html","8b375d5eeea8599bd656954fd0727246"],["/categories/计算机/Python/index.html","3c7bbef988ca559d1cdf5ac0a2993611"],["/categories/计算机/index.html","a2b08e87486061e9d4ff1e31f45639b4"],["/categories/计算机/page/2/index.html","078a6e8eddf2d4725078a2a7fcdb58a6"],["/categories/计算机/工具/index.html","663e9a1ccce40ff7bde830a4f46ecfa0"],["/categories/读书笔记/index.html","b00b74726d0bf0451d405a997a483f5d"],["/categories/读书笔记/page/2/index.html","a89f0df239b68b4682e7c5135b813a4f"],["/categories/转载/index.html","ea1477288267ba262c1f83a9fb0c36dc"],["/categories/转载/page/2/index.html","ae9efcabb9db6c385804b78cd0dd3b19"],["/categories/随笔/index.html","e7e6b779813feb1abed1edef5eac2402"],["/categories/随笔/page/2/index.html","43a95aa4a4dc9ae684a7864cb38ff622"],["/categories/随笔/page/3/index.html","66d33ddd795c1d38ba094097fce709b5"],["/css/style.css","af4e28fee2dafd088c4e55e5d5346a0f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","9f59935251e22309a15542865871f5fa"],["/history/index.html","96336349f28a47617a1ecaed8567a39d"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","8fdacfc879ca863ab83b1c1eb2fbc9e7"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","106f844e6db78620c799fb2f021fbdf5"],["/page/10/index.html","fbc111bce11453e607f34ce7b23a6297"],["/page/11/index.html","4ec11f07d1e27a9c817651e2c5b9dfd7"],["/page/12/index.html","cb269811881e19f447d35e28ca7d7b3b"],["/page/2/index.html","c0637e098ea83c4e4378dbca95ceee7e"],["/page/3/index.html","c831014268cf06d320bd80b2be43e14a"],["/page/4/index.html","606af707c253e3878e44306f29116033"],["/page/5/index.html","17cd6f35943f5d554e8c4b81908a4a8a"],["/page/6/index.html","b9347cc29c5dbf274702358c9e1ac52b"],["/page/7/index.html","1f5acbc92a4eb62eefaaf75864aa2452"],["/page/8/index.html","4a08fd73791f9b76dd4aa058fb30ff48"],["/page/9/index.html","49482115720d9d0f4759da7a6d193d26"],["/photos/index.html","129dbd1af6e298c6c923b661043215cb"],["/pictures/index.html","a2787cd4721bc1dcc62dd6b023761c80"],["/recommend/index.html","b90eeb26648274e8ad8ad74583a7300a"],["/sing/index.html","1229541a9d8c8cbf117f67e14fea19ae"],["/sw-register.js","c66b7d7c967700d2580fe17204a59da8"],["/tags/git/index.html","275e9794a005559b2bdc28d485a3c725"],["/tags/hexo/index.html","ee72e8454b74abc248c4a9c622a13c79"],["/tags/index.html","9e547e210c380619cfbbd7e33a13fb86"],["/tags/中医/index.html","52517f7014d2e74b27ae8b0322b190d4"],["/tags/习惯/index.html","8d312623b58827a91cbb34e31fcee4ea"],["/tags/休息/index.html","fc3a43005155154287735c9da3be26bf"],["/tags/健康/index.html","735f639be07d8b7ea197dbde8bddc2ee"],["/tags/公式/index.html","fe4bfd9e7d1a5edb44f6a2e8df4ed182"],["/tags/写作/index.html","d226b531007c88334082df5491a2ba8f"],["/tags/区块链/index.html","c9d4dcfc594cca769da9cc919bb3baec"],["/tags/医学/index.html","e5fee59bc226cad1b1c3c5c9836c5a96"],["/tags/原著阅读记录/index.html","9ae8138d2e33f28f49f0875bc92c140b"],["/tags/反思/index.html","014895eafd7637f87d2736bf7df897f8"],["/tags/同学/index.html","c33065f11eb3e52fe25e9fe3a679f1f6"],["/tags/听力/index.html","d8e9409fcf7c6204d6a05e0b228a386c"],["/tags/处事/index.html","78e4a30d9d8977c08ff0fd09734a56d1"],["/tags/如何致富/index.html","9e8e59b0c96c65d2fb36f7ea8f1606c6"],["/tags/婚姻/index.html","639dbc10ea74375f9e477348ac92952f"],["/tags/学习/index.html","f138a5afca6f16c8902ae18beb4ef25a"],["/tags/安全/index.html","53e6df3f625991f8035464c37b09a3b2"],["/tags/幼年/index.html","8c2fc438e68ff9585ed0b407ac560708"],["/tags/幼年/page/2/index.html","61fe363ddd2d79e458854784001bd2e9"],["/tags/微信/index.html","92734e47a97e59ff2bd7fb5d11b0d631"],["/tags/心理学/index.html","f07345a60e72007e3596e010def22e07"],["/tags/思维/index.html","6bd9bf98bb848cbcf70184f1499c706e"],["/tags/情绪/index.html","c6a780cb4a54651ebaa61e5dc9808ccf"],["/tags/成本/index.html","715ecac2b184b74ba21a4ea0240c4795"],["/tags/手机/index.html","35c7a2c511ab92bcd95581a43ec25b0a"],["/tags/搜索/index.html","34a1ce85460ec8620e9d89b1fb3fcdc1"],["/tags/效率/index.html","3c63f21ee91a93800e35d16c6f1bcd29"],["/tags/数学/index.html","b1ee3c72235f50525d18ba9c3e9e73be"],["/tags/数据处理/index.html","c3ad8348f11a1b51573ad2a17aa45fc5"],["/tags/文学/index.html","084e426f96718e1ffaf0f436bf359419"],["/tags/方法/index.html","3e0e0e31b0de53f16914f5569ac3f14d"],["/tags/方法/page/2/index.html","133fd07e82e178aa14470d4dc806bdce"],["/tags/旅行/index.html","e82c97b13eab4b854efdfbbd9fc5ca3b"],["/tags/日记/index.html","1f90d06a2399592052ef308a2d16d3ca"],["/tags/时间管理/index.html","57a5e31ef2415dc27febcf53d5f15550"],["/tags/智商税/index.html","f06879e8a325ed3bedb6af70767bccf8"],["/tags/概率/index.html","f62444447422f8c5b1242ecb19be6ae0"],["/tags/演讲/index.html","a3d04326cded4e035560a71352c2d02d"],["/tags/爱情/index.html","01e6291979e83d87402ca2f87278be86"],["/tags/生活/index.html","1fcee901fc0a77d2ac504170b204c895"],["/tags/生活/page/2/index.html","eec4b5f5967d4fbf418fb63642e10f97"],["/tags/睡眠/index.html","c050ba4985f32467cbbfe830496c441a"],["/tags/科普/index.html","11a1b8c5bf28a212007b1dddc748ed14"],["/tags/精力管理/index.html","042c0a1bdd7a9d75ef20bfb7574b2f67"],["/tags/精神生活/index.html","845a35088e76e45c02946a7c73753015"],["/tags/经济学/index.html","bcf109a3f71f38150db24a9b389598d4"],["/tags/自律/index.html","b883c2826a4306bacf7a18dd52ada32e"],["/tags/观念/index.html","b3f20bd5eb0ae335de986228742ec430"],["/tags/解决问题/index.html","0a6cb14b416d15a37d97d76a0322d29f"],["/tags/解释/index.html","8cd827cc2742be6690cc928f5aab3f58"],["/tags/记忆/index.html","713316e222c3d26406ea007a02733598"],["/tags/诗/index.html","2ddec55cf90c3e6513b6949e2d9bf666"],["/tags/财富/index.html","30662a91b204351f7e99134ff993ad89"],["/tags/阅读/index.html","36a3c100556a543d9cd978215164c145"],["/tags/阅读/page/2/index.html","fa6953e4b855d507af5467f098f4b490"],["/tags/隐私/index.html","48a6d8e30e0c00ce82a0e3859c396901"],["/tags/项目/index.html","d23600d09b5e192da1e3055a3039772c"],["/tags/题目/index.html","508adf1cd7cde360efbbc47f161f6088"],["/tags/饮食/index.html","362c9b8883b9a6fa67fb0a3d8e0befcb"],["/tools/index.html","5fbe62251187ee86dcfdff5161d895d9"],["/works/index.html","e074d41f64eb1ae29b04e947f5d91549"],["/works/item1/index.html","599ccbe024819f2db47a7c38f929e97d"]];
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
