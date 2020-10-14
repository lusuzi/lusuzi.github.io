/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a1d147b7259f9fdff9283fd6804a49dd"],["/about/index.html","54ce0d4ac39ad5ecde6eab457827523f"],["/archives/2013/11/index.html","489d1694b87ec409f9ac73ad81642121"],["/archives/2013/index.html","39ea407901fe6372502da74ba9db7d88"],["/archives/2014/01/index.html","194b1ea0d76218de6347bf37658bdb73"],["/archives/2014/02/index.html","203a0d36065ea18362f8824313368aad"],["/archives/2014/index.html","d2cacc4f782f75d1bb877df6fe243ec5"],["/archives/2016/01/index.html","fc962ba753468d63ec3967b14d4a5aa8"],["/archives/2016/06/index.html","d2c2a9305cfff1bd9a1009eeb3fc684a"],["/archives/2016/07/index.html","62fd22cc9343b21cf6bf60d2b092196e"],["/archives/2016/09/index.html","d6811fe2980cf71caa0aaf9ab100d800"],["/archives/2016/11/index.html","36ed835c6f155026078b2a42fd0c31d8"],["/archives/2016/index.html","1406f38348a999d22ce4db0027f37f4b"],["/archives/2016/page/2/index.html","d9627bdef4f35d3a6c4662ddb219cde0"],["/archives/2017/05/index.html","f07d5088d68ab0905cc52a4dd56bdd9a"],["/archives/2017/06/index.html","c733073929c59e19475f4a8ad72ab13a"],["/archives/2017/07/index.html","5bc5e99d5ae1a09c79867344b008c9f3"],["/archives/2017/11/index.html","0ca85e79579b270f7f9feb4f82b3288b"],["/archives/2017/12/index.html","d78a43910cc08cbba9dd162c2f7005fc"],["/archives/2017/index.html","eb4f74b26db37cb3a09b6d494a8ca2bb"],["/archives/2017/page/2/index.html","83d92878ca565c36d1b10cc147733874"],["/archives/2018/03/index.html","c442c9f668ce2d0e382135b818a43ecb"],["/archives/2018/06/index.html","755599ae020dabb945503e936df19d6f"],["/archives/2018/07/index.html","539b6904893ada6c8dffbdef483bffb0"],["/archives/2018/08/index.html","d92ff6f47cbaca7a9ca6598b3228d7c0"],["/archives/2018/09/index.html","a3d0d658769db44f42cca37de286fcee"],["/archives/2018/10/index.html","ab71982e89a81156e877fca7ca7eeaff"],["/archives/2018/11/index.html","53f275416f03d3064b5694301bed1dd4"],["/archives/2018/index.html","bffe130ae3a13c1d04cebe8ccab89e34"],["/archives/2018/page/2/index.html","dfe2a9cbd2cac14d9056ab65eb74ce64"],["/archives/2018/page/3/index.html","bdc082787123e12f0680b37037d17563"],["/archives/2019/04/index.html","b92f2a42e22c7ec93fbeeffa6e38b401"],["/archives/2019/05/index.html","3f75ac9bdd8291aaecf285fabaad2666"],["/archives/2019/08/index.html","8e4b911b9a0013f089d0500abdb8ea5e"],["/archives/2019/09/index.html","ac25bcbec6d293715eb60c061cbfdbfb"],["/archives/2019/12/index.html","906758f60a235922059c7ccde0687ec3"],["/archives/2019/index.html","61d7437dd51cb81796e429ee08e4e03a"],["/archives/2019/page/2/index.html","6bcbd32273c64a3b1b36325bb72d169c"],["/archives/2020/05/index.html","7c6b48ca23025789e607b65c467f7685"],["/archives/2020/06/index.html","9f662fb9aa3c66c2a2c3acc5d58c7c64"],["/archives/2020/07/index.html","26f76cfe0f84577b6fcede5b1acd0eea"],["/archives/2020/08/index.html","367f7a7c14f42b589296a40d743c384e"],["/archives/2020/08/page/2/index.html","b5deec84e3d8973c741f0c4255b7c718"],["/archives/2020/08/page/3/index.html","f59383ef6dbb95246982aa17aa86cbf1"],["/archives/2020/09/index.html","b58e93f770f4dbe5c712fead33f80ced"],["/archives/2020/10/index.html","830f2facc5cc0f9e6faeea5bb937c210"],["/archives/2020/index.html","5ae7397d1f92e9337c7d63463b9d049c"],["/archives/2020/page/2/index.html","137c50956e2412237b190e5b9cddc5bb"],["/archives/2020/page/3/index.html","a5ac2e984dc70fc5d4ac65124c8c503c"],["/archives/2020/page/4/index.html","f25cd73a24238c6aa45ad2a57aae661a"],["/archives/2020/page/5/index.html","54eb5271e12d0263bb68b70c53a9422c"],["/archives/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/10/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/11/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/12/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/2/index.html","8f6de2e7f1ecbe04b8bb87a3f893cc8b"],["/archives/page/3/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/4/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/5/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/6/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/7/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/8/index.html","79f718890d7c1c9412633a59e3870fa8"],["/archives/page/9/index.html","79f718890d7c1c9412633a59e3870fa8"],["/article/11fb9e73.html","a17577f5b57483393f9f757931ecf8d2"],["/article/136fa9d8.html","53b80973c16fa48e5b8e32bd9539950f"],["/article/19718e8e.html","2dd3f54bd1d0336e6aede732ccb9d63f"],["/article/1b342210.html","6c99c7f3b5a8592e1cc207f6f80d86a9"],["/article/1eb9d23a.html","f26b3e5b92d142e7a3d4584623449071"],["/article/228c75d3.html","e9a026c95d4b3c3db8571d3c4e10024a"],["/article/23494478.html","0005eb128c08149029c9e65dc20e2531"],["/article/2b3aedce.html","67ff3cd95d5c35126f61a997375fd4b9"],["/article/2c2925e.html","f451c0bd9736b8d252b8a91720c45223"],["/article/2e7c5c98.html","53cd15b60cf982387fc9e862a9f8f42b"],["/article/3229fb3a.html","846f5ee87aebba763539fe939d9a71c2"],["/article/33554c5b.html","a7875e917ec373b260f8785c1612067c"],["/article/35a56429.html","f4469e250c0c75144388b4bb0839e669"],["/article/3aa91634.html","40da411211dc62a154ed1b5fbe251fb5"],["/article/4562b0e.html","65cb048211a9783fec22eb822871b91f"],["/article/481247b8.html","01050e0df41f27e31942768b8b335df9"],["/article/4c3380c8.html","50d48d314f6252e0430c90218d2baa4f"],["/article/4f8b07a3.html","f749e339990394fe772aa7c3fa6f2837"],["/article/534bc28c.html","797b49d3eca38bcdbba6013c3cd69c1d"],["/article/5692b57c.html","eabd545250194d0c531284ce18cd2473"],["/article/5b152571.html","47941ef3b5f95a55dc04fb825d73a391"],["/article/5ca1802e.html","1610b5108d6d196ca91d19976d90951b"],["/article/5f339f98.html","ff58583818c3043bb2dbf201ce196ac8"],["/article/64c8bce8.html","454675d564074412f081f37c2940e55b"],["/article/682814d2.html","89847805c7ddb769f1815ad78c73ba40"],["/article/6cb8c766.html","891adb10cbeef319c960164e13e925f4"],["/article/6faab9c6.html","8dd7512f735358edabb0eec81153677b"],["/article/717c02c4.html","7501c2fc4552e82d686cf62203b1efa5"],["/article/738c5196.html","4ca860e1c8a07f079419a21c13a30c8b"],["/article/73ba8b39.html","cc96d6e9a3e59dc923190de011419d82"],["/article/76ff70b5.html","56551dad318be9c7c861bbe51b49f0bd"],["/article/7a5991e.html","1b438ef7a76a6e642c39dedbad0d9007"],["/article/7d3004c4.html","8656adc3f5d0a1d74e89f5103ae7a0cc"],["/article/83e42b42.html","0db1b84bc54bf266b250223ba20b01b2"],["/article/85b1246.html","351397f1a6fa992115f91b004de96d7a"],["/article/8c8ac5bf.html","cf20c5ae98808d2e3068f6884f5b7da1"],["/article/8e989db0.html","6155d0c0e54810c74a286a8022f68274"],["/article/90d5d393.html","e7fa906e1ab0c4ea3e38d50e525a9d10"],["/article/91a5995.html","b87971a1ef6bb6ff0b20ce8bc005015e"],["/article/940b4a8c.html","0171a4f3e63720f3137c43f28574cf09"],["/article/a0bf6b98.html","5ea8b6a3f8a771b3d21b41c9c2468493"],["/article/a264b8fd.html","7bf25765f1b0137a13b427259dffd49d"],["/article/b318b8fe.html","ed582f50d86a265040e5dc0644463621"],["/article/b73c5547.html","7c70f99b765aab8b5db1cd3a53e8d47b"],["/article/bee0f638.html","937897eef5b94ac56d23ea55c6300f33"],["/article/c6bff206.html","55fdac1ac2ada3c875d6683f6aeac97f"],["/article/c7063ec3.html","6bd62cf07494aabcc79cd89aa0cb76d3"],["/article/ca8b4515.html","546d6fa11904007292751685ff18ed3f"],["/article/cbe565ff.html","d72cd814fe9a77b1ac3af478cde8aeeb"],["/article/ce3b3e2.html","4d48a6935392b382b86cba735d7f6c50"],["/article/cf8c0bbe.html","2dc3a54c85e1336da01a089bb013cbbc"],["/article/d60bbbcf.html","ead5803ad86e01e5a9cd94e8b74ac2c0"],["/article/d6505d8b.html","c88dda7f987ebaa10a7659c5d1ea87a7"],["/article/da9af306.html","1cab399e4496684713e58f1e2a0c0935"],["/article/e20a0ac4.html","4673105fc3618ee5b2ddb4d2cac8869b"],["/article/ef9ebd24.html","17b3a8985365e6e0f6a9ec5ca68ec42d"],["/article/f01b987b.html","14cc9dc60bebe6f63ea31c1eff7ca60f"],["/article/f8d1ff2d.html","00db4b63ce9d71ce3782e4cd02a149bb"],["/article/f96ab8b3.html","ee77026f3b561f51158449b4bb97da65"],["/article/fd541bb0.html","791105c124c6391fc20d76a147399727"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blogger_said/index.html","5b3d50e82dbbd169322cfcf6e60862af"],["/books/index.html","39437079f8150386b4cf14d32dc6f1fd"],["/categories/index.html","3a766a1312a2fd1f9cddff3c7cef2fe5"],["/categories/价值观/index.html","a2e3751f26db382ee99b6637782dc5ab"],["/categories/健康/index.html","25ea5a9e06f15d8d33a58fbc23470f09"],["/categories/思维模型/index.html","3811ad766e12700327f028aa266d9a41"],["/categories/投资日记/index.html","5fe5d0ffd1f171469968b7bade72dbf6"],["/categories/数据分析/index.html","3b8b312b80b62f2a0602c71086883b4e"],["/categories/翻译/index.html","8a8700190bb68692f04bd876379bbc5c"],["/categories/英语/index.html","c636672e32f96887bf7bf192e1996f8f"],["/categories/英语/page/2/index.html","f19df43dbe0bf6e01eada7598b1ef79c"],["/categories/计算机/Python/index.html","7e3964dc91a8a39927741e0e88c65ff2"],["/categories/计算机/index.html","ba13d3094d2da3093c90fc96788d08e7"],["/categories/计算机/page/2/index.html","618d83e19497f7960f90c7dfbc2e8245"],["/categories/计算机/工具/index.html","c50d6e92385034f7f46670cd205843c2"],["/categories/读书笔记/index.html","7240ba12c386d4b87c532876fd80cf5b"],["/categories/读书笔记/page/2/index.html","af349241fe0999e610d7d401ce8678e9"],["/categories/转载/index.html","226d21dbc51f3a0d7c2df85d34c6dfc0"],["/categories/转载/page/2/index.html","829437f777c86670812ac8f5ff64aadf"],["/categories/随笔/index.html","4d6a74bdc345bcf492dccb5e4e29433b"],["/categories/随笔/page/2/index.html","292243771622c187b2919e04347878e4"],["/categories/随笔/page/3/index.html","522a099b419a5388eba19482ab772307"],["/css/style.css","af4e28fee2dafd088c4e55e5d5346a0f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","3432fb25b69b795f81d58709e04d93be"],["/history/index.html","dc4d3702dcbee060f41f00f6f00b5cf8"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","f644af7766728ce858b6804c13932725"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","56632471735671407089c35a167ddc68"],["/page/10/index.html","9610163ca9e08a9852650b790cc365b4"],["/page/11/index.html","517bd420d04845c3f0dd51d2c73e6a6d"],["/page/12/index.html","b8bc8bc878bf925632cffdd32a8abc32"],["/page/2/index.html","14efe552cdc7b75e009b9a35fa8b0466"],["/page/3/index.html","a236edfe1d45226ca75293e3e09b0e93"],["/page/4/index.html","1b34d16cac586e098fd150c84150f0c5"],["/page/5/index.html","5c828e989be79ccf7dca2bee96f6698e"],["/page/6/index.html","9b1780333773a4b7d16b42f1c1f35a2b"],["/page/7/index.html","ee7140d23d2f5794ef58fcc27efdefd2"],["/page/8/index.html","ced7f1b653b91fd6c9b21cee13404db8"],["/page/9/index.html","40c3c305dc1cfa39e403529c258edfbf"],["/photos/index.html","49c20e9fd67222ea501f42d3c4a7dd8e"],["/pictures/index.html","06f33066a1e5e50a37cfc07d6b1d7aad"],["/recommend/index.html","3f111e19e8fe355d8b4bb590ffe6002d"],["/sing/index.html","30fbd43d6206de4f163457b0d9b1b3e2"],["/sw-register.js","21e43e335a6d455d1002fd88ea7a59ce"],["/tags/git/index.html","4f34f1b1adab9f8add674a77f271b9e6"],["/tags/hexo/index.html","a4c7c7ffc2dd6606d2f679b8383552d7"],["/tags/index.html","a4bf5d28aaa64cdeab56b643f452d332"],["/tags/中医/index.html","fe7b3ec0a6c9e63bf2b544a8c1a3892d"],["/tags/习惯/index.html","004e40210a15991fb920cf517836387f"],["/tags/休息/index.html","7356abce8ccf3f6a72148ed3ac186a82"],["/tags/健康/index.html","6d9971165a596648b739b02f0d0b9356"],["/tags/公式/index.html","b53e14bd7bb0e5c8f09d9b18f6e97dce"],["/tags/写作/index.html","d85919465421097d291f25ff77c87858"],["/tags/区块链/index.html","8ea78a54de62910550222dc142e530a4"],["/tags/医学/index.html","0dd7277514bc7efb441daf9cd1905ee6"],["/tags/原著阅读记录/index.html","3de117036600118cbbfcfd7996374bf8"],["/tags/反思/index.html","9d2f7cd9df33fc491ec681e48ef794d5"],["/tags/同学/index.html","c091e8f99852beffcb6dca8a299e3cf6"],["/tags/听力/index.html","82afd7c07e2f69ca9107e0274f6a16ac"],["/tags/处事/index.html","f4278ebdcb21ad20fd280a990376aa84"],["/tags/如何致富/index.html","6707dec663096277d6a9d9080b709d71"],["/tags/婚姻/index.html","2a65993a44007b964836b8a1d31eeeb8"],["/tags/学习/index.html","ef81c4fca6dda8d7d9d53e2b467b9dee"],["/tags/安全/index.html","67555b8af039fbc71ab0a0d4f84ee7ee"],["/tags/幼年/index.html","b02ed2d44332566b3e0acf45a63833f5"],["/tags/幼年/page/2/index.html","2dbaa68ee561dd14ae7ccfd82ae648b6"],["/tags/微信/index.html","6b28d9db6b938e9f0b706284c8db9222"],["/tags/心理学/index.html","c92ceb8030ba62ee2928e418ebcd39f5"],["/tags/思维/index.html","280d805971e866c47f12c2d0bb20db52"],["/tags/情绪/index.html","b4940ff40f3cef908d368b941b5a4875"],["/tags/成本/index.html","1d75fc29b6643ff47daeb1bcecfdb235"],["/tags/手机/index.html","3d66e7407e8748f6aed27ea55c470b4b"],["/tags/搜索/index.html","e44560f579477209db25574f972bc550"],["/tags/效率/index.html","69035a5acdb632ab60914180a497b6ee"],["/tags/数学/index.html","4a2af43bc291fda39c67bda431974d35"],["/tags/数据处理/index.html","a567d33b178f7888e10f771ac876396d"],["/tags/文学/index.html","b1d07f7c670c24293117ee503dba6bc8"],["/tags/方法/index.html","ec444e36c1ffe522c9999992d9f66f1e"],["/tags/方法/page/2/index.html","bea3330aae32923749a23a2180364d29"],["/tags/旅行/index.html","361fd8d715e961a05fe7de5c321fcffb"],["/tags/日记/index.html","180ed2e317c5c55e88d505e740090207"],["/tags/时间管理/index.html","5d05a1606cb865b062319b081b912353"],["/tags/智商税/index.html","bb692721c0193330c745df438282be9c"],["/tags/概率/index.html","e8234f0e2393aca25e7d48bbcd1eb8f3"],["/tags/演讲/index.html","c0e9db03b5bcd36169d7b27a58fb58d6"],["/tags/爱情/index.html","6b379c63cc1ecfd6d7c33262374de479"],["/tags/生活/index.html","eff6cd82579485027ea9ef3a4f1d2e51"],["/tags/生活/page/2/index.html","834503d464005bf48a9b5c5255d07b20"],["/tags/睡眠/index.html","1969e147c1bbc314714285332e061b41"],["/tags/科普/index.html","ce04dbe94c9ec4fa39bb82ebfb22353e"],["/tags/精力管理/index.html","2ebfe30639cb7d7a6029cee0d5cb0c50"],["/tags/精神生活/index.html","48251f8b0b7023ae55ff388c5fed5725"],["/tags/经济学/index.html","9571af025f7e6753d002398811b8423a"],["/tags/自律/index.html","0053bc4596dc825b300c986a3de0ea89"],["/tags/观念/index.html","98bbc71bdd851a2a58a4afb14983fd52"],["/tags/解决问题/index.html","b76008cd7bb8264aab4325182a28150f"],["/tags/解释/index.html","09b78235620e9c73d4c5f2ae1c091deb"],["/tags/记忆/index.html","f86f13c4f68467051d17da4ba691cca6"],["/tags/诗/index.html","4806b37a7041410497139c54d6e8206d"],["/tags/财富/index.html","d718bfc37127ae2ee84dbdb54a081544"],["/tags/阅读/index.html","54998bdd1b6bc05c77dbfa8092463d38"],["/tags/阅读/page/2/index.html","58f91af4797e38fb0e0c98243314ccd2"],["/tags/隐私/index.html","1281b514cb39bfb707c0126457bab2c6"],["/tags/项目/index.html","8bedcfae30e2197741f230ee913c26c5"],["/tags/题目/index.html","01b1fb4a4c1c4fc5074521ffb87d129b"],["/tags/饮食/index.html","651f2cbe86fff9a26113f4bb1f6404b0"],["/tools/index.html","dc79fc3010bff301d7b2f844b60869f1"],["/works/index.html","edf71fdd61272e295812da69e6cc4509"],["/works/item1/index.html","3ce289f43d95de9a2c1eb35643d24998"]];
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
