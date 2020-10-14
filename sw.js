/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6858a5705b3a9a0bd3243316d303377c"],["/about/index.html","5cb40a5794c4809f5e51c23e4238fe70"],["/archives/2013/11/index.html","1d88d2b461baa9a5dbe2ee2b28c1a61b"],["/archives/2013/index.html","5a7f2b1229daf0f02965a5c364e131af"],["/archives/2014/01/index.html","91f92caa66b0398b38ff2a2beb7262e6"],["/archives/2014/02/index.html","701e548d19b629ff3cccd625f269c687"],["/archives/2014/index.html","394292c436016f8a18cf9d788f02cba8"],["/archives/2016/01/index.html","21d1ef2212c9759dd0a56fbbcedc8cff"],["/archives/2016/06/index.html","95254032dba6f1dc27e3c3086ceedd76"],["/archives/2016/07/index.html","b8923dc120c807c26c7db977bc3056ff"],["/archives/2016/09/index.html","2866ec6ba3b670c89b41d3370c57b486"],["/archives/2016/11/index.html","977709f2ad32073936f2efa3c2a13d8c"],["/archives/2016/index.html","27e22c9c5a626f119aa586653a19a51b"],["/archives/2016/page/2/index.html","ccb068f35876b0b194d839d8c9219a98"],["/archives/2017/05/index.html","feb1d58d87790ab08381dfabba408005"],["/archives/2017/06/index.html","aa4df61443ff418405cda619c55de288"],["/archives/2017/07/index.html","e6d49c03f7c17404765155334a5c39cb"],["/archives/2017/11/index.html","fa86a85f76911fb0b9f6c003cd927cd8"],["/archives/2017/12/index.html","2da4000d901539e510d81a83aee0c392"],["/archives/2017/index.html","6643dab66cb615b871d06bc4bb1067d1"],["/archives/2017/page/2/index.html","a780b17f2e710c31edfbf4862b7ca9c2"],["/archives/2018/03/index.html","31ea13885fdf0e894dbd03c06ee68f31"],["/archives/2018/06/index.html","262f0bb2e707d5283b84285392f9df9b"],["/archives/2018/07/index.html","9fcf0b006170a556c43bfd23f5d4690c"],["/archives/2018/08/index.html","a51339dd5db39c1d64d8c9ca50534cba"],["/archives/2018/09/index.html","5f5b078d5624c6712e4c469b303db070"],["/archives/2018/10/index.html","4e467a9708c48d997bbd51d03da1cdc6"],["/archives/2018/11/index.html","c339691203c47ca2a593faf41d84cc18"],["/archives/2018/index.html","ccde09a98917338afd031c13ecb7d387"],["/archives/2018/page/2/index.html","db6527a1781c8c29ccc7057b6018462a"],["/archives/2018/page/3/index.html","9e623c5f1c2033900b05644b705c919c"],["/archives/2019/04/index.html","0a37bec465732d8b0cab0f28f85a878a"],["/archives/2019/05/index.html","019529cf2d78891a6bebad3fce772256"],["/archives/2019/08/index.html","d2a76ae2d2091a94016586804744e59b"],["/archives/2019/09/index.html","fd308ecd82c6fc4a13d4be8d0a840a27"],["/archives/2019/12/index.html","425c9b6d80aed24015dd0805e6a2024c"],["/archives/2019/index.html","87cc96c658b3b651052537cbed923058"],["/archives/2019/page/2/index.html","53056c911a261ffa080c0d7c92edc5ce"],["/archives/2020/05/index.html","df9f07657e393a187fb5e68743401101"],["/archives/2020/06/index.html","1381f3470a617c4b6e6f4549f3841292"],["/archives/2020/07/index.html","92a5063523814948c7f77eae5e1b0e40"],["/archives/2020/08/index.html","2ce20c3e16ad22aaba503eaf7d16cb12"],["/archives/2020/08/page/2/index.html","42e39e903e8415e3fe2c2f79bfee7cf2"],["/archives/2020/08/page/3/index.html","5b69b4b472ce240b04a47eb6167a3d4c"],["/archives/2020/09/index.html","8ce19ba794baa80ae6c7727e533df958"],["/archives/2020/10/index.html","51a1430318240b4f8fbadce5ab68b98c"],["/archives/2020/index.html","2fec93f3500fcafd24994d8a210de229"],["/archives/2020/page/2/index.html","a7849e06fbd36c5f740a7391b6e29c64"],["/archives/2020/page/3/index.html","09c398cb0c6ac1962e2e76e2d1d37805"],["/archives/2020/page/4/index.html","4d18143cc40793f7efd250b51f603c24"],["/archives/2020/page/5/index.html","268a07f48dd9fc88f848a4fb5fe2191c"],["/archives/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/10/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/11/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/12/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/2/index.html","98d8b4c8c16f30232bfa8af437579e0c"],["/archives/page/3/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/4/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/5/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/6/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/7/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/8/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/archives/page/9/index.html","2b8d19f0cd6dc84f46112e8c5dcbd290"],["/article/11fb9e73.html","03de388bcfd837a84b21c2d2f450c44c"],["/article/136fa9d8.html","a311d23a2dcb5a0c29449e353f0431d3"],["/article/19718e8e.html","0780bd4706f4f4ae1865da3ac454db50"],["/article/1b342210.html","bc019053b135c170d32d7e387b0e7226"],["/article/1eb9d23a.html","6d8a7f21d306aa3e824ab10b05295ed2"],["/article/228c75d3.html","8a4893dcc4f09ba8f442263612965181"],["/article/23494478.html","0e11703798c9cfab3025900bcdf4e22b"],["/article/2b3aedce.html","e5817f282ea602fec3b7b29a3de3cb85"],["/article/2c2925e.html","583285153919812808975e377dfbb90c"],["/article/2e7c5c98.html","17ea9818113a0bf64b756fea6bba2a7e"],["/article/3229fb3a.html","23216b8432ee6a609a0871caed0645df"],["/article/33554c5b.html","35222ad78d088710065b76bb914dfaaa"],["/article/35a56429.html","97e85cd6e0acf4caf26c00c54fd04e27"],["/article/3aa91634.html","b61a7f7e43bb355db0edf6ceeee740bf"],["/article/4562b0e.html","924cbfda3317375ba1f16a7973647801"],["/article/481247b8.html","f37543079383a9b87ebbb8334d84c948"],["/article/4c3380c8.html","363d7ed23e6477cf4dfe56380288ef17"],["/article/4f8b07a3.html","8075e3094e4f86314432aeee367da13d"],["/article/534bc28c.html","554310fbcc819e45d0012a4918377c55"],["/article/5692b57c.html","19c4901770673d1d80624a473bb97736"],["/article/5b152571.html","e352c46a58c0748e3e7e9a2b73c0a054"],["/article/5ca1802e.html","4204e0495bcd9920a08ec2227b95c255"],["/article/5f339f98.html","521a246d5eda3e207893ecb4cbf8d326"],["/article/64c8bce8.html","d4823f79360dcaf11cbda413f1618a37"],["/article/682814d2.html","61c1c2156d58cd44f9a78357fc6f6d48"],["/article/6cb8c766.html","9a7fab7db6470b97a93c3c30581d1c16"],["/article/6faab9c6.html","cb7fe7aecc2e9a1ea62f41c0ab11cedc"],["/article/717c02c4.html","7c67f0207a6790372a3bad38592599dd"],["/article/738c5196.html","9e15282c76ab43abfe9d933d7efd773b"],["/article/73ba8b39.html","0c412b5afd18c6024402f186bcb68e1c"],["/article/76ff70b5.html","0aa19103a174447f388122ffc8bc3e75"],["/article/7a5991e.html","f0cd4c28ba50482f435c5071bc79e786"],["/article/7d3004c4.html","8e87de40818095a9f850b7d453d91a20"],["/article/83e42b42.html","08b5fcf3245d33eca90b08667de70794"],["/article/85b1246.html","6a2a141e49ce389fe6cd8a469ca3d329"],["/article/8c8ac5bf.html","421aefd5a440a21c97523593257bc099"],["/article/8e989db0.html","fd35199c9c34d5d75cc255b3ab43700d"],["/article/90d5d393.html","e209c990dbd89002a0923c18ffde0621"],["/article/91a5995.html","bedfddac9d92ebaa9aaba7a2f7ec195a"],["/article/940b4a8c.html","687576e5a134be990a49f0fe24c85676"],["/article/a0bf6b98.html","ec022bbaf632613f9f9b4c7031779505"],["/article/a264b8fd.html","ddde2e52335af65140e67d131d79a081"],["/article/b318b8fe.html","c082d9688571add2a512da9f9eca41e3"],["/article/b73c5547.html","ce47ecf66283448ad9632f688532844c"],["/article/bee0f638.html","853043427de870bda5a239cd9fc88b0a"],["/article/c6bff206.html","6d4e04581890c71bd2150f312b58d8b4"],["/article/c7063ec3.html","9e4b6a3e24b124468e7b4491c9f7e51e"],["/article/ca8b4515.html","270a984a01b90799c117fd0fb6b72553"],["/article/cbe565ff.html","e7d6432f399804aabf94459ddc20d6ab"],["/article/ce3b3e2.html","5746e8185fea9e38ed239f5e03f32f48"],["/article/cf8c0bbe.html","188ee32e9a9b0302a44bbd91f61615aa"],["/article/d60bbbcf.html","ae59ed26526c8a46fec4c7a4aa13a981"],["/article/d6505d8b.html","836fad6f377a485fc8a5ef439ba83d8a"],["/article/da9af306.html","96ecf8a32a350538f9214899d91e7ff2"],["/article/e20a0ac4.html","2689a475d2479343ec7b92d96912d847"],["/article/ef9ebd24.html","e57dad7704e39587dbc88f32fe7414fa"],["/article/f01b987b.html","a37e71bf26e620bc20f640293d1c4f96"],["/article/f8d1ff2d.html","bd1c4e62f3cc6fd67327c0d8bec618ad"],["/article/f96ab8b3.html","a8cced24f30a4199d325067be6c33b04"],["/article/fd541bb0.html","449471a2d7dc8f0b63177f47b13057fb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blogger_said/index.html","9152913e29b201d93e0db7ec3e19455e"],["/books/index.html","18e7b7472486698ed66f64e373504d59"],["/categories/index.html","70555b3a316eb6055d8e48ced0bfca3a"],["/categories/价值观/index.html","73a6316076fe8edcecc7ea0a0abbe726"],["/categories/健康/index.html","b24462492d27762fe4829b0e643cb487"],["/categories/思维模型/index.html","f893dc96577b26932dd7c696c4832683"],["/categories/投资日记/index.html","5bdf2c60d6294a62d085e50ec7f3ca5c"],["/categories/数据分析/index.html","a970071230173bb1818501742eb5efcc"],["/categories/翻译/index.html","02c6ffd96e9e967300f1cc8cc0b6b739"],["/categories/英语/index.html","c74d71fe5f2f28b2ee638046b632c0d7"],["/categories/英语/page/2/index.html","69bbaca81b1cdd296a4bd312d8d1ce1f"],["/categories/计算机/Python/index.html","0e946ead2a9eab5e36d4b6df4193438e"],["/categories/计算机/index.html","4c845fd822afa90cc0f23685159a07ad"],["/categories/计算机/page/2/index.html","3fb70dc3b7629a834f7fe065fa530a65"],["/categories/计算机/工具/index.html","9ec863dba15aa57e270557355dd0b3f9"],["/categories/读书笔记/index.html","f9a561ed617fadd082f8c2da217509c4"],["/categories/读书笔记/page/2/index.html","9051ffe2210608cc5937de8127eee46d"],["/categories/转载/index.html","680746823e1f12d76dcff94b8f6c7f7b"],["/categories/转载/page/2/index.html","ef831447af4700f4059012a4a8c406e1"],["/categories/随笔/index.html","c2c232d0ad84bc244b03b6a803fc0e93"],["/categories/随笔/page/2/index.html","90f949b685f132a403e454ed80086ce8"],["/categories/随笔/page/3/index.html","4d182a0e18b83624d4f2235308e19795"],["/css/style.css","bf21ce97e36bdecce8f9baf33b3ea16f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","aefd386ef891ca22f878b42424e33206"],["/history/index.html","07d0235fcf7a07f390b3a9570a9ae6d7"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","eb34d73a73b8247db88c7c806cd5d20d"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","52d7fa9e18d7df05b2926e4cc4eb4fdb"],["/page/10/index.html","277c8fcf37eb3c908d7192ec8f245989"],["/page/11/index.html","c6c29b5d1862aa9c33015954f305556f"],["/page/12/index.html","b0d5b8e9f99580a2938e1f7b002f9541"],["/page/2/index.html","c0737e33d8e7d0389104ad297b3f69d7"],["/page/3/index.html","862c05fe70e5b31302c5a59fa82530e3"],["/page/4/index.html","0c5be7b97a3e6cd59b9af26782246648"],["/page/5/index.html","5eb80f7ea83898e81a012a38efffb77e"],["/page/6/index.html","bd899cbb26484f510880079b26b0cff6"],["/page/7/index.html","8b81fd5199e18fc5de3c120495fb53ee"],["/page/8/index.html","9dd221a73d7ceadf325d1bc550ea120d"],["/page/9/index.html","b6df38f1ae01b13955534baecaac13ba"],["/photos/index.html","15de28cbf1b62c1a3018f6df68c117db"],["/pictures/index.html","52aa7e13ade4588bbc1e5b1ccd9d6ca7"],["/recommend/index.html","b50dca652327ccc98a295f916e41b262"],["/sing/index.html","c86e27883354b160de81c49eb5f3eb34"],["/sw-register.js","96bc24362cc4ad9af4abc4ab85e79ca5"],["/tags/git/index.html","539af6f5d1f64373f6d9b6ceaaa60f12"],["/tags/hexo/index.html","215cff041e56c6a49483337de7137f85"],["/tags/index.html","eace1720b93daedc88a50975ab2bcb2b"],["/tags/中医/index.html","977f2c3569385ab33d99c202f2b6bf9c"],["/tags/习惯/index.html","3add28768780948ef553ff7603f7d8a7"],["/tags/休息/index.html","cc37c62fd5bceb647ad617c7162e9b8b"],["/tags/健康/index.html","193660b1a5b8cc7451b30f691fbe518c"],["/tags/公式/index.html","de79c3beef7e47b73d62b6e52a8aba28"],["/tags/写作/index.html","7dc0588b7e826decafafec2a9a4ecb0b"],["/tags/区块链/index.html","ddaeb10aa4c1615fff8442b55de61274"],["/tags/医学/index.html","ea6addca81fd262ac31f31a70027eef5"],["/tags/原著阅读记录/index.html","86a1f463e3b3df4a454036c6b586ed3b"],["/tags/反思/index.html","ebf27aea398a2900f90e955b6b5f7f3f"],["/tags/同学/index.html","def42728b73f40a2caacbf71db3c2247"],["/tags/听力/index.html","52e12bfd5c3ac5489d94fc692a74f84b"],["/tags/处事/index.html","287f2f8f261bfcd8f25237bb410e16eb"],["/tags/如何致富/index.html","bd675d1222f5f9f4e2b7bb40e5ed3e4b"],["/tags/婚姻/index.html","92629e41edd0aca5109d1b362402fe0d"],["/tags/学习/index.html","e9360bb5f6351d7b4fe01d29ff13c348"],["/tags/安全/index.html","de8534f5df50517235e5a012289daf5a"],["/tags/幼年/index.html","d3fcee01474b4fc87e8e834c6e775549"],["/tags/幼年/page/2/index.html","114b65e1b1d454c70d8fc60848d33b4f"],["/tags/微信/index.html","68029f95403cf1e903d819185b9e6ab0"],["/tags/心理学/index.html","e16e3184e82feb03d6295a38a2b12fde"],["/tags/思维/index.html","c84a255d8801cbbf8b833edc022d6df7"],["/tags/情绪/index.html","89499aea1dc1a58a33987d865ba47834"],["/tags/成本/index.html","c3fe298df84b15792dc23e5d3a3fb50e"],["/tags/手机/index.html","021dd409732b8364210d282ace05563b"],["/tags/搜索/index.html","a6754754721ff9b9898c12bafc2470b7"],["/tags/效率/index.html","dd552933bcf2afaf186880f9c812cbe8"],["/tags/数学/index.html","5a5faac7160bc62cb97ce371dfb604b2"],["/tags/数据处理/index.html","e33f65315f966ebfa1a4c0a268968670"],["/tags/文学/index.html","71b02c3fdadac19a101ba3f63a50e690"],["/tags/方法/index.html","13cb991430cae084735574887c9b238c"],["/tags/方法/page/2/index.html","e2287694387bd36e61a4d978f64c781c"],["/tags/旅行/index.html","85477c2a175ae5ea874273241717a76c"],["/tags/日记/index.html","c28ac7454b27b624d98fd4450d92c527"],["/tags/时间管理/index.html","122c2bdad73ba8fa57fa4f90db8fe36b"],["/tags/智商税/index.html","1cee6e3b9e206eaaeccdf22dcc48d31f"],["/tags/概率/index.html","16ea779411330abc032f4d1998bf696b"],["/tags/演讲/index.html","1170c38da91b44c9da3474739a9272d2"],["/tags/爱情/index.html","56c929d4c6ab6d471f22a8b15b640fa3"],["/tags/生活/index.html","3ade88ee57f366b39b6529a295ba68cf"],["/tags/生活/page/2/index.html","780ca214a76da6ee36614a97ec642879"],["/tags/睡眠/index.html","74c2729ff71cf2c67a9e91e8e93a2424"],["/tags/科普/index.html","488d49018215a3753f4d2a5089e2a7fe"],["/tags/精力管理/index.html","6c04fa96dbf50ffb7605bfeef58a072d"],["/tags/精神生活/index.html","b448fa1bbcc0b19987517d2d595bf360"],["/tags/经济学/index.html","fee1ff422f3bda57297a3afef5f11dc4"],["/tags/自律/index.html","2252097af945a108f49da36b06b69e0b"],["/tags/观念/index.html","a370b9e3882567424099e03442831090"],["/tags/解决问题/index.html","319e98c157a1ccff16e4e27c91b7768d"],["/tags/解释/index.html","a73aa024ae664ca5295d94334664f204"],["/tags/记忆/index.html","eb206fec12fd9ab206ad07d575516631"],["/tags/诗/index.html","036b5b551496d999a6e351c73b2fcc1b"],["/tags/财富/index.html","dcc7b6f41237966660cbe31a8a97ef72"],["/tags/阅读/index.html","1cf78bd5c0c63158a03790a951388fb2"],["/tags/阅读/page/2/index.html","1d39a569e3d03c6a747485c42195e58a"],["/tags/隐私/index.html","087f861753581ee20f391b38acf11fda"],["/tags/项目/index.html","5c6a5b36a84a0cde77f99bf8314724b1"],["/tags/题目/index.html","d0f946a6b27c052cd92e491a616ef6dc"],["/tags/饮食/index.html","f415cbe79d2d3f07bc53f92673f0a162"],["/tools/index.html","5282460b2542c4a83554a1c3dc2ebb0f"],["/works/index.html","e379e605cdf8ae0ba766849f5f86e9cc"],["/works/item1/index.html","7827b46bcd370f6f82469cf22d36f172"]];
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
