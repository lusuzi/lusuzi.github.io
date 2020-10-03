/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8906453ff68c2f5743446bae97dd5c21"],["/about/index.html","bfe06b87460e136e926b7a965f4e5b62"],["/archives/2013/11/index.html","2cf9f3bde8c403390bead1b6cb4eec93"],["/archives/2013/index.html","f7a6d4d06f1444e6a73c03e6de004dce"],["/archives/2014/01/index.html","52121c7f8c54de72108ce8c6314dfd79"],["/archives/2014/02/index.html","008ea505e8590a9fc137c74500f1c650"],["/archives/2014/index.html","04c8b198e04642b2208d7e652a90de19"],["/archives/2016/01/index.html","08e1f0443310a1f9c331c03886a581fd"],["/archives/2016/06/index.html","1572c503f1398cb3bf791f65bb47af6b"],["/archives/2016/07/index.html","fa8103d728929323a978138c3075d991"],["/archives/2016/09/index.html","855bbc4a73a2d04f7a324407181a32a6"],["/archives/2016/11/index.html","381c1b245d9b3f5180ec37a8f1b3a499"],["/archives/2016/index.html","ad578aff370777ebcbcfcfbb87272d2f"],["/archives/2016/page/2/index.html","6034f3ad890c12d562bdc48f80dcb2c8"],["/archives/2017/05/index.html","0516620aff60892756a8d387ce70c21a"],["/archives/2017/06/index.html","8e53cd22cb107961106ddce18fee686c"],["/archives/2017/07/index.html","4556d9e1b4be0e7121bd0260b62afc58"],["/archives/2017/11/index.html","d41c887dfc693bd29f3d7161fec4ee0f"],["/archives/2017/12/index.html","7923564bec2040ec3b9f6e22aa892bc8"],["/archives/2017/index.html","2ea2973709107e313eb3d139fdd5187c"],["/archives/2017/page/2/index.html","86df1dbd5b37cbc8e96865993011fee5"],["/archives/2018/06/index.html","7e2e586d1ad884bc30ab75f21e089b6a"],["/archives/2018/07/index.html","094f96a990c3a3e16283092cb560eef4"],["/archives/2018/08/index.html","bc0f7d60941291cd573dbb53ddc7e037"],["/archives/2018/09/index.html","62ebf7b1c9318dd045acb58468836f52"],["/archives/2018/10/index.html","aaa600f6baa040c2278c13ce4fe73c17"],["/archives/2018/11/index.html","537249dc8aec60881d644b1930490f8c"],["/archives/2018/index.html","cee73ab45e2fd0b6539f8d1edc57dbb4"],["/archives/2018/page/2/index.html","efa66cbfc056cb757f86f4f94af856b5"],["/archives/2018/page/3/index.html","a0a33af066d6ef750575becc26acc367"],["/archives/2019/04/index.html","a1b7c223e9600f86230fda66143524ab"],["/archives/2019/05/index.html","1c8831440961ae98e34e56dfc00a6a66"],["/archives/2019/08/index.html","035fd1a615004b2f7db7c415660fcb23"],["/archives/2019/09/index.html","93d3032f362eafce41a1b5fa89146f0e"],["/archives/2019/12/index.html","f6369daffd8103910ff0c1ef5ac6746e"],["/archives/2019/index.html","6c1a386664802d352a4cbb258b8b73c2"],["/archives/2019/page/2/index.html","da975ddd6c9fe500ef08bb789786d6ac"],["/archives/2020/05/index.html","69c60ebe5ee96708966514b9247f3c42"],["/archives/2020/06/index.html","2fbd788f0fdac12d80495e11973053f1"],["/archives/2020/07/index.html","9738f37e789f099c73655d7f94dd3c70"],["/archives/2020/08/index.html","9beecb5818928019343c8ee3fa94eeed"],["/archives/2020/08/page/2/index.html","c13b82b1c0ae320d61f068076a4efb73"],["/archives/2020/08/page/3/index.html","6eb94dc1ab253d66e6a8eb28bf5a76c3"],["/archives/2020/09/index.html","002b58aca4e7107eb796027518e5ed70"],["/archives/2020/index.html","e7729f17e89dc2885529820d0b62b51d"],["/archives/2020/page/2/index.html","b547366220b7377ca9d44debf2c1553f"],["/archives/2020/page/3/index.html","7e8e3cc91028120033eb473a5231fe38"],["/archives/2020/page/4/index.html","d00e42932763fc39bddf22a64f379994"],["/archives/2020/page/5/index.html","fbfffb6dc06e8819cef257aea0d93bfe"],["/archives/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/10/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/11/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/12/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/2/index.html","667e6518acd1d70b92f94fb45ae05cc7"],["/archives/page/3/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/4/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/5/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/6/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/7/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/8/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/archives/page/9/index.html","71ba54ba3d821a384f1e0191c66277b3"],["/article/11fb9e73.html","cbaf31b498eb777bb91cdeeca8e5fdba"],["/article/136fa9d8.html","4a5b4696f4a3936dac9d66d6bef81306"],["/article/19718e8e.html","0eedce5b8ea2b4a9aaa6f4f4bd42ddd6"],["/article/1b342210.html","7f1f72512121724bb7aa33c6f6b53fb9"],["/article/1eb9d23a.html","150a9d133435482acad2aa0aac407b9f"],["/article/228c75d3.html","3d00973d25af553d40d4a0a8d35bbc0a"],["/article/23494478.html","7345e49482a88c1a45275f2f50786b60"],["/article/2b3aedce.html","45bdb98c727a0fe05e49d8f53f074958"],["/article/2e7c5c98.html","24254aaf70b19c4807bcef3d800e2da7"],["/article/3229fb3a.html","2d775e14f8b8e2bc3b00ca59d56fb0e3"],["/article/33554c5b.html","5ee0fa577007b57874f695bfebd1c4c8"],["/article/35a56429.html","2c60f118adabdc31bc80cac9d2c8dde3"],["/article/3aa91634.html","2446fee1ca2f657fe2c75e29d8eed80c"],["/article/4562b0e.html","575da587bdaf61de4b4af1d669c1d5cf"],["/article/481247b8.html","80a2d33bc008104f5536702ff9f55480"],["/article/4c3380c8.html","2debbeeb4292d41630b2dd7f7250c088"],["/article/4f8b07a3.html","db10b6e6064b42a48661dd115a979457"],["/article/534bc28c.html","6473c54c7eac74b60a39d49d22fffa50"],["/article/5692b57c.html","411379d5b73b39283847aec051b0a4b1"],["/article/5b152571.html","c7359740d1764b55f18970b914c41355"],["/article/5ca1802e.html","ad86ef8628fcec2a33230813cbddf27b"],["/article/5f339f98.html","26febb5ba34db54cfc8822c90f2973a3"],["/article/64c8bce8.html","afedb1ac1c79f368f9307aff0e412fd5"],["/article/682814d2.html","195709b971ae935bb1291c63cadb5e77"],["/article/6cb8c766.html","a6aa45aab54e718313a98c07536efa82"],["/article/6faab9c6.html","8287a66661a1ce5871a427af0a3ea1f5"],["/article/717c02c4.html","70207c2a7294e9805cfd44c702d84313"],["/article/738c5196.html","8bb0880be3eb828271591b8c188ffa20"],["/article/73ba8b39.html","4744b002fefa53379f9390760ca7340b"],["/article/7a5991e.html","f6d3a0106362b228d2db1dd19d21fe6b"],["/article/7d3004c4.html","86723e4fad7de47c623e5575bbe27219"],["/article/83e42b42.html","f52e31b310f25318a5b4aa9e7d845ed6"],["/article/8c8ac5bf.html","059bb88bc3370cf5d1893ffba5efd247"],["/article/8e989db0.html","b55fd17166dacfd0bd4e11fbd346a98e"],["/article/90d5d393.html","21b29ca6a28ec611332753c5aefe39b4"],["/article/91a5995.html","ca670c54b1d55dac8569c46b9b7aee27"],["/article/940b4a8c.html","b64a9bc9277e4eadea8c3ecd8804bc2d"],["/article/a0bf6b98.html","81b89eb696e80b2b0489ddd32faf82ec"],["/article/a264b8fd.html","2b11897c4db20d69a6efd9695808a4e4"],["/article/b318b8fe.html","309589ee263b6c64e8d6643516eac517"],["/article/b73c5547.html","4e828654bab2a0f18a83e3c51508aa62"],["/article/bee0f638.html","8afe28f193ec1fdf7498e4c94c19db2b"],["/article/c6bff206.html","8cc34ee32b0e7d21a0f63bb35d06317f"],["/article/c7063ec3.html","fa88e0f967bfe1359431a32dd74ef636"],["/article/ca8b4515.html","8f3ed0845fbb20dcdaae38576a34db98"],["/article/cbe565ff.html","cae7be77eeefeeb614455ddab0e7e2e8"],["/article/ce3b3e2.html","588a5fc56c83bd856b6e4ad3a144796a"],["/article/cf8c0bbe.html","c7a6cf02a3fc562d2043f255128c82d3"],["/article/d60bbbcf.html","5b618f90ba1197d71d05122043dca10a"],["/article/d6505d8b.html","418f3d33b0ebb351244ea76b2fb2864d"],["/article/da9af306.html","f715f03a3ebb099a24c70bffc4567f3e"],["/article/e20a0ac4.html","8205289e6db5e4d525576c8ea8ad3a2c"],["/article/ef9ebd24.html","6b606a2b1d8a7f1fb9047ae4aee9f9f9"],["/article/f01b987b.html","ec9b898cbb7a1559d603bab898060127"],["/article/f8d1ff2d.html","286fd80f862a8a798250509259b25d79"],["/article/f96ab8b3.html","cc2e80d7802996b3d8201a2cacaba7b4"],["/article/fd541bb0.html","7d73e3417c4f779c4790d88b9bef5950"],["/blogger_said/index.html","9befff0b86d6050a6e0db051a9d6bab2"],["/books/index.html","3a860e3b282001be9f600ef9d87e7043"],["/categories/index.html","963f398f4b3a58b298631e1729a43039"],["/categories/价值观/index.html","9411af48cd2ab383660dbfa4bf1f696a"],["/categories/健康/index.html","e515f1729e57d7b733f91a91415c3bbe"],["/categories/思维模型/index.html","be164648958a9e6f7f864fc81645d8e7"],["/categories/投资日记/index.html","cfc86911a91ba3ede07e0499516c0586"],["/categories/数据分析/index.html","84373a5d5381e8e8df87bceed2058b3f"],["/categories/翻译/index.html","9f509e2927e128e740e16c657ccffc02"],["/categories/英语/index.html","d633f27f40263dd33c7b182a5e461438"],["/categories/英语/page/2/index.html","d7d617006a6a094c3931452a93c076fb"],["/categories/计算机/Python/index.html","355bf9a1bb4c0e49a6302402028ac4ee"],["/categories/计算机/index.html","516b5a1e1ce08e6d28736df761e31d17"],["/categories/计算机/page/2/index.html","55a8f576a5bb6acc2b1ce21c2dcc98ac"],["/categories/计算机/工具/index.html","6e73c063f6b83af318c8161a16884bc1"],["/categories/读书笔记/index.html","385db80c21466e44e85dd79dcbad95a9"],["/categories/读书笔记/page/2/index.html","1c76fa4b809c50fd84cf8ee61dcbf834"],["/categories/转载/index.html","54fc126558514d57e837b71b214a2ccb"],["/categories/转载/page/2/index.html","3a1fbd4a3293c5a76c497ca9d3d459ad"],["/categories/随笔/index.html","eb2f218756186ea7c739e04430d78262"],["/categories/随笔/page/2/index.html","b2afb6f5302b3b7b1a7b6af9fa7b8716"],["/categories/随笔/page/3/index.html","65beab97d1a4b1e047fabefd846f8229"],["/css/style.css","1436d0b29193a216e0d573beee4502dd"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","6cf493a9a39f20dc13f3fd2942e02443"],["/history/index.html","ba001958e2e289d0011cd5ef9a5b5083"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","ec80fa75b36f7f305f61e704d9e6e456"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","356d82bd253c591423f0f62c33270111"],["/page/10/index.html","9198a7e6eb06a77b8da62b7ad620a259"],["/page/11/index.html","7872b6adbafbfd1ab53187600b7fd4da"],["/page/12/index.html","7b7c2274a17c03df850ee4e9a6f54e97"],["/page/2/index.html","cf57e8526d5b88f5745081a39897a3ed"],["/page/3/index.html","9f1ebde88398acee7dc83e9e523553a6"],["/page/4/index.html","c43e6d7ecf3083e3125d56eab3b43a00"],["/page/5/index.html","0e50fc030ca46cdac0b3de469392572d"],["/page/6/index.html","a10afca06aa6fc039e8097762792ca23"],["/page/7/index.html","bf69dbe8ea690847c420f78909af809c"],["/page/8/index.html","242f56bc1e0cc9a44c36efd4c7a08e5d"],["/page/9/index.html","4b49973500aa2039327c3172fdd0daa6"],["/photos/index.html","3c495938cb77cfc2bec227a93824c3db"],["/pictures/index.html","ab18ba086178bdc1accd041492461200"],["/recommend/index.html","78c7e1c9f75e13f40b950feafdfd4c19"],["/sw-register.js","a145d121bbb0c375eebf2e6d420256d0"],["/tags/git/index.html","6df45c4aa18ab6d55f194eff0ac3a2ef"],["/tags/hexo/index.html","e52484de3d42cedf21538eb3e3b0713b"],["/tags/index.html","c345c5e5e6b408ab74fe494794a8f8b8"],["/tags/中医/index.html","e66741233c6c54852fda60264d867564"],["/tags/习惯/index.html","8ae3dc8b6b6f5dc84acebd0e98b49448"],["/tags/休息/index.html","77a19678163f811a608e7324624216af"],["/tags/健康/index.html","449dc4a8daf4986e54b10000f758f452"],["/tags/公式/index.html","3c664d801d1fa6c37914c729e6e99c85"],["/tags/写作/index.html","0417aa5133218eb3f44269121313d4e0"],["/tags/区块链/index.html","098b1d7dcbd2c1016a1828b5174c26d5"],["/tags/医学/index.html","71f0a52a84f5a77abb213c3c8f1ac7c3"],["/tags/原著阅读记录/index.html","dbaf20a0059a0e3ed659e13cff125989"],["/tags/反思/index.html","3451cb64ea5df9668713c08dcadc600d"],["/tags/同学/index.html","99c8fce3bf0d48bd89e6559db96f857d"],["/tags/听力/index.html","bfd521249d0fd0303efa1b79e02a95a0"],["/tags/处事/index.html","f9170d7d1f679dadbf822b2770b4e17c"],["/tags/如何致富/index.html","c0e95fe36462d98ea6fabdf0d2041750"],["/tags/婚姻/index.html","774a8486818cc2d85fa0b6866b4b0f39"],["/tags/学习/index.html","4e2f01d8b9cd89320f514951185c6e15"],["/tags/安全/index.html","72e0f6e4e612fd5109ccef86b32c56cb"],["/tags/幼年/index.html","33d8178759cb337bbde5824be9607418"],["/tags/幼年/page/2/index.html","e3e20f5711e4197b3bfcc3fb7bb3e82c"],["/tags/微信/index.html","a3aff0e3864a7358be316fbba8bd0574"],["/tags/心理学/index.html","1556a69dcb4c661888420cc2b123df9b"],["/tags/思维/index.html","07c988048e7b38b556db5a9231408a41"],["/tags/情绪/index.html","3af316287642b8afb57e1df0ac207b24"],["/tags/成本/index.html","20aaeca0b6ce012046f3860f976ebdef"],["/tags/手机/index.html","83580a677a7218234a40c20988b1f361"],["/tags/搜索/index.html","6eac385c24bf1540ff2d44de6e12b62f"],["/tags/效率/index.html","bccc12a5f9c6850ed11761553e5f23e2"],["/tags/数学/index.html","57aade69987f08565ffcdad00482d375"],["/tags/数据处理/index.html","edd2fbfbe57019395ac95022e5980ad5"],["/tags/文学/index.html","0f3a28d3636e03bc9827aa6969b577c2"],["/tags/方法/index.html","44d3a0a98ea47cf68d43fd9b4476b76a"],["/tags/旅行/index.html","d016aea3d8b33347f9783d7ab0243921"],["/tags/日记/index.html","9fa8f19b29bd009eff5029cdc7262a02"],["/tags/时间管理/index.html","bb2bee36999f77018d3f7aacdad50890"],["/tags/智商税/index.html","57c60247d79bd8a88896de96ae9fbde3"],["/tags/概率/index.html","bce3f163dd2289f9de9f04499e6bb461"],["/tags/演讲/index.html","0a97224127decce3ab5b5112c2399df6"],["/tags/爱情/index.html","7b022f8c594697772e69fc618f02212c"],["/tags/生活/index.html","93086c4a4ab6243c7c1e14f276cca3a0"],["/tags/生活/page/2/index.html","cc9a72aacf08fe839698aa6b85961ba2"],["/tags/睡眠/index.html","7cd5e766c0015097fc5dafa9afb0eb7d"],["/tags/科普/index.html","215efa7abc1030712d116f54bcf7ee47"],["/tags/精力管理/index.html","29f0096fbb490ae9dad21683f22d5342"],["/tags/精神生活/index.html","27f4d52930615f83b860f49a08057880"],["/tags/经济学/index.html","d2a1942a4bef79c1a02b9ae7e94958d4"],["/tags/自律/index.html","f4cf97b5857b1c3ecb6fbf8d70e94815"],["/tags/观念/index.html","053f16d6fee804feb4773621aed6415c"],["/tags/解决问题/index.html","200497b0b4231a9d894f33ecef85c099"],["/tags/解释/index.html","a3f37ea2902dd9821771bc04fbd7ec4a"],["/tags/记忆/index.html","80c81b8c660ca580fc5b87f88e5bb445"],["/tags/诗/index.html","aac3027b1c081a5f9b8f82ece988060b"],["/tags/财富/index.html","18806a7954f22b5d4002dbf8b4c427df"],["/tags/阅读/index.html","792f5c751079cb45bb82d292b89ac342"],["/tags/阅读/page/2/index.html","5a360e60c483dabaf2147398c24f87c7"],["/tags/隐私/index.html","8de3018feef46facedad2dcee3dab9aa"],["/tags/题目/index.html","8dc843bbbaf65a3e1629c2a5905d83f8"],["/tags/饮食/index.html","398417c33cff045e10584b1b94984544"],["/tools/index.html","06659697002808242e23234b2011c2ac"],["/works/index.html","8d7012cd8fab182f2f6ddbaa32392005"],["/works/item1/index.html","2aa9e4e97e0bdfffac8f3fa6b1c2be62"]];
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
