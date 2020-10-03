/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b353b035b62236ab8ef4717fba557002"],["/about/index.html","1703e4ac7937baf67ce47cba711d5918"],["/archives/2013/11/index.html","69d7abe0a8617a16e33e602617fbf19f"],["/archives/2013/index.html","548ef43ad1c69cee3334887d90856537"],["/archives/2014/01/index.html","459287892b6de71995916461d7ff3457"],["/archives/2014/02/index.html","ecf2ee948c97b4c2663e15973d269999"],["/archives/2014/index.html","ddb18a8a9d2f301ac3e874ec25029da8"],["/archives/2016/01/index.html","a216287d3eece7efee64794745dc4f3d"],["/archives/2016/06/index.html","7d36f488b1b7f437048c157af17c185a"],["/archives/2016/07/index.html","5f49ac02ee3fafccca4bff27194bf9fe"],["/archives/2016/09/index.html","af1f4b22e18697b86726dd98fe942dac"],["/archives/2016/11/index.html","e3e567219b51a67150bcc45dcae5b04f"],["/archives/2016/index.html","a90d6c79bd5a3f760b58c8456ae94895"],["/archives/2016/page/2/index.html","e7ee118de75f8e0a4e8ab13d6eb4ece2"],["/archives/2017/05/index.html","ab5959a287914cd11814221ca7269e4f"],["/archives/2017/06/index.html","7d343eeec274f4124fb9335757f41af2"],["/archives/2017/07/index.html","8ebc1dcaaa1c45a1b4c9d41bce8876ff"],["/archives/2017/11/index.html","6c3345bf718013bd26e5e7d18660381a"],["/archives/2017/12/index.html","8cef7671016d750518775e3d687de165"],["/archives/2017/index.html","980765109d8ea33aa04cfcb1dd2b90ed"],["/archives/2017/page/2/index.html","c34994e8777aa18877ed616eb2a59d07"],["/archives/2018/06/index.html","9270230f1203839eeb928c9646c32063"],["/archives/2018/07/index.html","d3e5b9cac286c7d166e1a201c4ae9044"],["/archives/2018/08/index.html","73be072fc26b7874a6eaa301f5306cb8"],["/archives/2018/09/index.html","7ff114b7fac7ebec15f1c459dad916e9"],["/archives/2018/10/index.html","420284979a19cdbd64475ca7c4f1ecf2"],["/archives/2018/11/index.html","e4d25d4a74e2f50979185419facde461"],["/archives/2018/index.html","de865c8600b972ce9579539614b94a5c"],["/archives/2018/page/2/index.html","669d8b4357b4a05aa31e1b708848e436"],["/archives/2018/page/3/index.html","641bf27859b8d4e1a53f958340d94033"],["/archives/2019/04/index.html","ed2b5910ca88af5d2963a26e8b3bba15"],["/archives/2019/05/index.html","54f9552d008cdb0a28743bb57a4bcb8a"],["/archives/2019/08/index.html","a6b3ad3f4a5df9ac5b64b34cefa6d267"],["/archives/2019/09/index.html","8a3be6b93658dde9fe99ee98c359bda9"],["/archives/2019/12/index.html","2459475c6609aa0827c6b6c4911df2ea"],["/archives/2019/index.html","0e31e6c87de6993300ca40867ed5e3f5"],["/archives/2019/page/2/index.html","ffda5c5214169c628d4d0c484193d360"],["/archives/2020/05/index.html","0f6d2c46e1ca3be3d776fa5ce73fd7f3"],["/archives/2020/06/index.html","cdd9aac85848b08902c4e65f16764b3d"],["/archives/2020/07/index.html","305a00236ed773f9b5addb4a5c1b528d"],["/archives/2020/08/index.html","578d87a0728a4e0fe4626e6af9ad1930"],["/archives/2020/08/page/2/index.html","b8b60af95a0236749d7270a9ff053482"],["/archives/2020/08/page/3/index.html","c7d627c456318b6f239c8cfe86ccf035"],["/archives/2020/09/index.html","c0e3edee7ae9fb65a3fece4a235dfd4a"],["/archives/2020/index.html","fb51f04f33c2e81cdda2248821eb7522"],["/archives/2020/page/2/index.html","9699ed5f632b0f4a7a6f6ac5bc378c0a"],["/archives/2020/page/3/index.html","b18e931c0eeb06c8c848acfac54b1abb"],["/archives/2020/page/4/index.html","fdaf05829a7125469ebf0d2ef95fcb39"],["/archives/2020/page/5/index.html","15b5e570a4ca240bd54c45b5a9b85728"],["/archives/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/10/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/11/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/12/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/2/index.html","9b690e17e197529333615771b0d4b3ee"],["/archives/page/3/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/4/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/5/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/6/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/7/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/8/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/archives/page/9/index.html","8e6426108fffea5732a8a0aa53cc9ebe"],["/article/11fb9e73.html","c21465b963f64030d4987b187579cbfc"],["/article/136fa9d8.html","e5d3a1338f1ed4372e20688f848cb000"],["/article/19718e8e.html","a66b2ff7bcd132ebd3be0dc178e9c998"],["/article/1b342210.html","b091a1dca64d2cfe69365a025afe1190"],["/article/1eb9d23a.html","bce98a06c6fd9603100b657a7e9f1b47"],["/article/228c75d3.html","bf61981a24153615189809b35e49f81e"],["/article/23494478.html","c16390f05e6b61074c8a6fb5d085cf7f"],["/article/2b3aedce.html","356d6c2d47165eefc7262922fbd0e3a1"],["/article/2e7c5c98.html","9c6cf98ade5f412914602d74fd4608cb"],["/article/3229fb3a.html","4eb78b91ad5b17019a2967496f44527b"],["/article/33554c5b.html","dbf7b1d185e02809a1b34522b9ac52d0"],["/article/35a56429.html","3432e8636e00dd3fd89fa2c57d6215ff"],["/article/3aa91634.html","d443eac718e6664dc8ff9b6a8289e7bb"],["/article/4562b0e.html","23054f5b11638380b456b7b5eb773b1a"],["/article/481247b8.html","dc19d8103c74d2bcc41295f527b910f1"],["/article/4c3380c8.html","8f3afaf9971b59641d52cf1f335a107b"],["/article/4f8b07a3.html","18c7b17a7496722ebb63223a377c395f"],["/article/534bc28c.html","e65be968a52e5d23db3984ac6f8c8b87"],["/article/5692b57c.html","550f296f49da955a968a9c6fdd5b2ae7"],["/article/5b152571.html","b0d57184d833d6bd9dd2566f8848657e"],["/article/5ca1802e.html","866301810da01dfadabd96f71b982af4"],["/article/5f339f98.html","463530b22a4371d9915022c1b12bb96c"],["/article/64c8bce8.html","d78cad90826550f69d79b4234317a950"],["/article/682814d2.html","3464f21933e8bbb79bedf6ae2974e7f4"],["/article/6cb8c766.html","3ff153749696fd2e06dcff4d691bd112"],["/article/6faab9c6.html","151d7352bd27f44db60f2c55a0452a08"],["/article/717c02c4.html","6ec5d84abf6ef0cd1b81ecd664d9d510"],["/article/738c5196.html","92a9cf15b5802871c48b419a3bda0290"],["/article/73ba8b39.html","ca2b917171fede5613e6172aa781f55f"],["/article/7a5991e.html","26a01bb2b2f25043b46064dddd31a468"],["/article/7d3004c4.html","9a4312a1987c62c2262371a8a68b3964"],["/article/83e42b42.html","061ec5a2d2aff0864a27cd3f4910a9c9"],["/article/8c8ac5bf.html","c09205fb2663a8f569fe2582241013ab"],["/article/8e989db0.html","5065788df70d67dbbd2a029c7e65913d"],["/article/90d5d393.html","d0346f9e8f221344215ae05f9d678051"],["/article/91a5995.html","ae4722c26d1a9b2ae832f6b4ee89c056"],["/article/940b4a8c.html","04896143c799c99f1795db333b6d81b2"],["/article/a0bf6b98.html","10521ea195a1b16080143ddcf9da926b"],["/article/a264b8fd.html","38b350b02cab4719e0e485df42f7f248"],["/article/b318b8fe.html","4d7b9dce4c69048dc715f9a2f7427857"],["/article/b73c5547.html","07909f0cb63cbb63d508df87d8a43f72"],["/article/bee0f638.html","8112846a36d9d1e8333cbb6bba5b418e"],["/article/c6bff206.html","4074495602300fee6db50e837a3b895f"],["/article/c7063ec3.html","a832327e328b49e82a979fd314e98bb2"],["/article/ca8b4515.html","ba6276be5d9248585ccea1c1881c7ff2"],["/article/cbe565ff.html","22ea08270d8717d5887946b1a5f6bfec"],["/article/ce3b3e2.html","39050061f80e9fbc8e495c947e36a8a5"],["/article/cf8c0bbe.html","389d53a81a2c41797a4e7bdf61ae38d9"],["/article/d60bbbcf.html","8a6ca47bc04e670ab8d74aa52600c9d9"],["/article/d6505d8b.html","4eb1096a181c5d9739392fb79583311a"],["/article/da9af306.html","1e1a49c307f21d39e467d1817467314e"],["/article/e20a0ac4.html","b0d1676cd114f0b0c6bdffc80091c033"],["/article/ef9ebd24.html","a1b2915fe145bab2f1ff65451f2e57ee"],["/article/f01b987b.html","a170093ce1eef709517502139c17c465"],["/article/f8d1ff2d.html","58a63ac2b876b3dfba32c2356475ca21"],["/article/f96ab8b3.html","7db483e1fa3cf64413f8c78fa92963ef"],["/article/fd541bb0.html","05788d4c2e81420524290314f7a1c2a6"],["/blogger_said/index.html","48582e0c0093d014598d6aec848777d3"],["/books/index.html","f13e25e38295ed8b763d2da40416744a"],["/categories/index.html","55a75c0b8e275f37d8f1293b4adc347b"],["/categories/价值观/index.html","7d7ae362fee920fb7cfdf88b647beb86"],["/categories/健康/index.html","6cece7048e417b907176e349ae254ac9"],["/categories/思维模型/index.html","c71d89fddc3f15f7ba250e08db4d5976"],["/categories/投资日记/index.html","7ec9a5e0a02c86e2d53d25619203cb84"],["/categories/数据分析/index.html","3d84526ac14a52fb195b52a5517fd927"],["/categories/翻译/index.html","a9c71e137d5fe21286b64ff92ebb78f5"],["/categories/英语/index.html","7a4d795fcd3c1fc618ee24b5e2c6c84e"],["/categories/英语/page/2/index.html","8eef5ede3a7f1119f99afc164452832e"],["/categories/计算机/Python/index.html","2e098e221e0f3e1e01f3506ba769c5c4"],["/categories/计算机/index.html","8c6c26dbfd0be53efa8fabc1f37a6696"],["/categories/计算机/page/2/index.html","5e58ce49a700752dc1a89feff8ff151c"],["/categories/计算机/工具/index.html","d221bfd0186bcfa975a3ae501ceccc9d"],["/categories/读书笔记/index.html","2b9da955083188b485ce0b0842b59b33"],["/categories/读书笔记/page/2/index.html","e3b51800e8094dd06413f2ffa4bde7a4"],["/categories/转载/index.html","2d8cb0d4f3918a6d8d931b007af334d3"],["/categories/转载/page/2/index.html","faa3f3eba49369f880d785b3c8f68988"],["/categories/随笔/index.html","be43ff0f29f2c01eb64334728cabab31"],["/categories/随笔/page/2/index.html","ac449f4588915262a7735806b38d6187"],["/categories/随笔/page/3/index.html","4d67aa7aa424f21b25727dcb6dce57e6"],["/css/style.css","ce23834e6ea0449b51f504496b340682"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","9a197738fd3c9fdf93b7872a1eea9935"],["/history/index.html","e16458412f3b537fe971ce8960ea6eb3"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","bfc43c11de3c52a37410986729721603"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","65fdd83c3c23a5d3ae4119a71d92592b"],["/page/10/index.html","d79a9bafed54e3394bea9cb8fe8e7ea1"],["/page/11/index.html","270ac2bab63712564b9550fee8541a62"],["/page/12/index.html","2df9dee0984fcca33e52261fe8ed8ed3"],["/page/2/index.html","5acb00e381f9ee256419ec124dd710d5"],["/page/3/index.html","63b00e837007e59d3b61b737acbca792"],["/page/4/index.html","8d2bda13ea2db2ed0c53d2bb42c98c1e"],["/page/5/index.html","4ce00b8da63e49701fc446011fc7544a"],["/page/6/index.html","a1f2417576bc9a84b710ded3cf45cfab"],["/page/7/index.html","404df241f4f31f4b59acab20cb3b2499"],["/page/8/index.html","29a4118cf1be97a50de1cd8edff8b38d"],["/page/9/index.html","86b6e982114a882837f33d8d0ec26d2f"],["/photos/index.html","c2089169dabf8bc8057f66a550438081"],["/pictures/index.html","c1f2a38f7ebd08a47a4fec6ef20f903a"],["/recommend/index.html","9b2128589f2e8d323cc6ad23242c504b"],["/sw-register.js","adb2706b3b5acd86f073defb2be86d28"],["/tags/git/index.html","538b2766c83cae00659651f78377ce00"],["/tags/hexo/index.html","0ec28b0a96abd2b0ed834ad1f22f804b"],["/tags/index.html","da4d72c6724b0ead7d4e48ced9baf196"],["/tags/中医/index.html","86cdb08c62d3a08429864e5eec52ba06"],["/tags/习惯/index.html","6075ad102bba7aa5094769377c48d40e"],["/tags/休息/index.html","35e55c80564533de5ce6376dbe89223f"],["/tags/健康/index.html","f7c70c8d0e2d905c95d42f0962b6c0c2"],["/tags/公式/index.html","faf0d60c7c4ed38268b1b57b0f3e4f9a"],["/tags/写作/index.html","9c2e46d8266a657363559eff48c3cd2a"],["/tags/区块链/index.html","ac48af7d6b33aecaee0c07a0fd7307c4"],["/tags/医学/index.html","d2390557848a99ccbf1c444cd01e2c85"],["/tags/原著阅读记录/index.html","c3d8b5d03a14a53a4ba77198a350828d"],["/tags/反思/index.html","17c845d6f6574d061cc27b631eb28837"],["/tags/同学/index.html","edfa28a1c846f3904628267e451d7d0c"],["/tags/听力/index.html","d37fdb0017a79b1beb673dafe6d55971"],["/tags/处事/index.html","9b422e66112c340b3d297b860046b722"],["/tags/如何致富/index.html","0d49ddf0d5c12cc3a2aeaa889422c65d"],["/tags/婚姻/index.html","7fa8595101b1da4b0b8b98b5591e52df"],["/tags/学习/index.html","7b95f0c03a6cbd3072cdfd9bdde67fda"],["/tags/安全/index.html","075446ebc40c8f7cc7479e0f94bc1b46"],["/tags/幼年/index.html","499bb364638e37ebc0cc5b2e7962e599"],["/tags/幼年/page/2/index.html","191d52df1d42d2bf5cd8591b7909a9b7"],["/tags/微信/index.html","38146ab4f3f2e2c11b940bfba5f9bb96"],["/tags/心理学/index.html","b191ea0b5a44e4ef03784d511afa34cb"],["/tags/思维/index.html","102e284ccd39d1c2e4b2c638e63ebfa2"],["/tags/情绪/index.html","bc40f67ddf9a948b6cec598b354bf73b"],["/tags/成本/index.html","03dc819150daa349e543854a336cbafb"],["/tags/手机/index.html","4065b1dc231be39f28f56ce71749fa99"],["/tags/搜索/index.html","e8449a1e3ca9a0e392936dfbff63a0f5"],["/tags/效率/index.html","611f73b8d93465c5dcd94d6d6bfe4a56"],["/tags/数学/index.html","c598b4ab4fa157608a919731b385c2a5"],["/tags/数据处理/index.html","009f086c65f73b455d8873f0d3dcc971"],["/tags/文学/index.html","7fd6a719768e78778f5c588917de5d07"],["/tags/方法/index.html","a0de730c9cff1428133a5602962c376d"],["/tags/旅行/index.html","b43037457a6c40de619018e7b7dd6f04"],["/tags/日记/index.html","4fcd2fb536cdd16cd8bacb12e22c1b39"],["/tags/时间管理/index.html","8d3055ce57c9a107510b9fc8cf64cb90"],["/tags/智商税/index.html","e943df75996b5ea109fdf15e0bfc378e"],["/tags/概率/index.html","535b74c03087c1dc9feaa1314500f2b8"],["/tags/演讲/index.html","9df48212d501d3ee87b94070b3d5b5bf"],["/tags/爱情/index.html","768ed47f9086e99c4b074040b2a02478"],["/tags/生活/index.html","2a68b808efb120a538a87174dfc9f206"],["/tags/生活/page/2/index.html","1af879c4ad5bf7290835393ed27f9f53"],["/tags/睡眠/index.html","71c6b1b46fb1409258a2d234e8f19ce0"],["/tags/科普/index.html","e434c7db62c5bc6f21c1cd7ca3d75cfc"],["/tags/精力管理/index.html","76fb17bc6541167f9470416f8d19fcea"],["/tags/精神生活/index.html","d6c3651d5fd4b88b1c69ac5e0149cf21"],["/tags/经济学/index.html","c98145ed592dc065ba99eff22d23f54b"],["/tags/自律/index.html","db048292a507970a7843e707245f08a3"],["/tags/观念/index.html","d9f6a97e84acc06290525548f8f10eff"],["/tags/解决问题/index.html","6cc7be46133f1f7c7651df18bda5558c"],["/tags/解释/index.html","c01e9a1f9b72bbc51d1fa635269e7411"],["/tags/记忆/index.html","5cbf35553922343586931acba9f7c029"],["/tags/诗/index.html","63d66c6de83ea0ac32403ee623b6477c"],["/tags/财富/index.html","c42d5098488f6f67590bd83718b63874"],["/tags/阅读/index.html","44600791c09ffd16df1b9b79687b50e2"],["/tags/阅读/page/2/index.html","7e3d623741c97e6b139ee12c4a57a7f4"],["/tags/隐私/index.html","d1273da7599df0dfc6be372b6bd6c7b9"],["/tags/题目/index.html","9323325a2d2337ca65e8d268849ddd87"],["/tags/饮食/index.html","38986e86dee1284ec4cb51d26e0986ca"],["/tools/index.html","07ed2f8602fa9ec8b1010a656a4049c1"],["/works/index.html","2983ac55d9fdccea4c9be4cccfd242f6"],["/works/item1/index.html","64a6df14c26961517573f5870a75f38d"]];
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
