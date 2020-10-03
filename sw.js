/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fe20df752d20febf8bd9893c8e8add86"],["/about/index.html","1748da6ff5983f569b1fafddbe9a0636"],["/archives/2013/11/index.html","ef70aeac3a847ca43a1bd212672b91c2"],["/archives/2013/index.html","8d8fbb476f761f709de5932298b293b9"],["/archives/2014/01/index.html","2877a1dd66fa92a511a8af82c0c69869"],["/archives/2014/02/index.html","efaff8b73de393ebdc390c2ca9260ea5"],["/archives/2014/index.html","a180b14e00e691c34ebb22585cef46f7"],["/archives/2016/01/index.html","8d70c81167e78e47c211d00623c5e221"],["/archives/2016/06/index.html","3be28b022ae431d95b6b210a876961c3"],["/archives/2016/07/index.html","6653055f71a63ac7d1a59fc2b78039f1"],["/archives/2016/09/index.html","64f2e86a8d07bbf4d182ea7ddb5f324d"],["/archives/2016/11/index.html","5d71f484ab2f892cfb6d364e36f46aaf"],["/archives/2016/index.html","dacd53a13f64c21a4385818004189e49"],["/archives/2016/page/2/index.html","1a57c380bb2a0506981ba2edb4f1c710"],["/archives/2017/05/index.html","10d1b5485bdd287e9b90ac981a7a0ad7"],["/archives/2017/06/index.html","56ff9368d1782c2b0feda87bfc4f7ced"],["/archives/2017/07/index.html","7b5f18a8b620777cc06abb72e0ca9749"],["/archives/2017/11/index.html","0e6913907e77577d3743af8f9e33769b"],["/archives/2017/12/index.html","23c3b836b61f25ce6a9274ba1cdc6826"],["/archives/2017/index.html","bbde58ff996718da1a784086bd835ae6"],["/archives/2017/page/2/index.html","de9fffa214de07c3c5cbc870b0411079"],["/archives/2018/06/index.html","7bc3976898063ea5391cbbf28d6a5a8d"],["/archives/2018/07/index.html","e94b4bfbd1a7ef985cfbca88bfc3b0f7"],["/archives/2018/08/index.html","d594d010b79511f578790ea1aacca3ea"],["/archives/2018/09/index.html","abac08a01942821abcaf79fef5d90d81"],["/archives/2018/10/index.html","d84266d522ec5dc26e5226a25709bb70"],["/archives/2018/11/index.html","b5f4e50d8432cff3d5b56b0f6dbfdf7f"],["/archives/2018/index.html","668e78788e10d4dad557044d9634fad8"],["/archives/2018/page/2/index.html","9ddeb87dadc8edb4bfbea4668627fb74"],["/archives/2018/page/3/index.html","727c39bf85d74aa711ed3717f45969a3"],["/archives/2019/04/index.html","92eb53a4789d05aeae2b1a95c4660075"],["/archives/2019/05/index.html","a41e78eb54a3f13863fb96ef8a54ed80"],["/archives/2019/08/index.html","3ef7f9f7cf40042e480a6f34dd1cf683"],["/archives/2019/09/index.html","c57498b34e3fc1c0941b35c3319a89b1"],["/archives/2019/12/index.html","07bef04307e89618f042277226607c59"],["/archives/2019/index.html","1dd1068181991ee28e0794d21f59dee1"],["/archives/2019/page/2/index.html","b13f24fe4a5753c2b5143bba9e670a03"],["/archives/2020/05/index.html","efc12bb98e9d8004b45c488d7e5585f1"],["/archives/2020/06/index.html","1c39074f8d31504aaca2c032e0293136"],["/archives/2020/07/index.html","eb2991856a637bfcc9b73e6c453ded83"],["/archives/2020/08/index.html","93816d893f9466c1acc8755262c95b32"],["/archives/2020/08/page/2/index.html","fef095982a04011b1c2a2e7864fd31bb"],["/archives/2020/08/page/3/index.html","e4feddde1c1ae6cc65d722626458970c"],["/archives/2020/09/index.html","1349b3491de04995d2324440010545f6"],["/archives/2020/index.html","2369e4ecf86d82024d935cbfa385168f"],["/archives/2020/page/2/index.html","f25784e3795f962afb60874e8ab19d05"],["/archives/2020/page/3/index.html","1066afe994ccc4d944eea8fab8c46a8e"],["/archives/2020/page/4/index.html","a0941d00fb04d866558402dfa855d08e"],["/archives/2020/page/5/index.html","049b8b9a6670738fd138d5a2bc2556d6"],["/archives/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/10/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/11/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/12/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/2/index.html","394d073821a2adbac13d64065a07b336"],["/archives/page/3/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/4/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/5/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/6/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/7/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/8/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/archives/page/9/index.html","e6f0493d52fcdc764eb9642b5cb43a3c"],["/article/11fb9e73.html","57e43891197bdb82431cca38164c957b"],["/article/136fa9d8.html","fbc4d22feb85f4566e467df927c8ac85"],["/article/19718e8e.html","a512018a014692012a8189bdb25e7839"],["/article/1b342210.html","e925e9cad3fff34d483cf4bda3e13bdb"],["/article/1eb9d23a.html","a2c4b3e9156961ab55b1e74c549a7f0d"],["/article/228c75d3.html","dbfa11be18a954670cfddeff7283e899"],["/article/23494478.html","f3240bf93ddea0b493fc07ff8a27a5dc"],["/article/2b3aedce.html","1e51ff44c653bd730a68eafbe7c6d2c8"],["/article/2e7c5c98.html","2c05521895fbd7be9c1dfac100aa2c20"],["/article/3229fb3a.html","a5287b72dd5ccc5903c0d6529e978da6"],["/article/33554c5b.html","a2e194f1232fa0fa9aa44587aa057c6b"],["/article/35a56429.html","b497b75068ad57329111af961de5b9e9"],["/article/3aa91634.html","15cf59837754202369d282b33bc3491b"],["/article/4562b0e.html","60d54b6b01bf83b0e5a4577ab55f09c6"],["/article/481247b8.html","309b8dd2c25e95eddc037b85c21efaa9"],["/article/4c3380c8.html","fc6ecd47a91e638c2d49366c5fc341cf"],["/article/4f8b07a3.html","0cbe656f960df6fe540ae6cce18196e5"],["/article/534bc28c.html","35e8cd645baf56a24daf9a46588c3a43"],["/article/5692b57c.html","b87f2ba2a379ab3c6286701b280aa005"],["/article/5b152571.html","ecc4a19c92f531832e46b2e2f72d74c6"],["/article/5ca1802e.html","569fc1c99d1cbe26df79e3b969382e98"],["/article/5f339f98.html","2c2b432a1100768d067fa0cd0eec96c0"],["/article/64c8bce8.html","cba49b529e4da3c39135d4eb46953900"],["/article/682814d2.html","01670d97fb8d66c0947cb6e1364be5c9"],["/article/6cb8c766.html","875e6cd65c53fc86a777b43a535899df"],["/article/6faab9c6.html","9760a16d15862b88b7007fa97d32bdb7"],["/article/717c02c4.html","35da9b719dca9ec6712935817834f1f4"],["/article/738c5196.html","0314a862a10029261e647408ad4ce623"],["/article/73ba8b39.html","ca8e131375bfe376497b9c81bd0ffc10"],["/article/7a5991e.html","cd6ff037add924eed63889827489dc45"],["/article/7d3004c4.html","05a2d2e13d614d3e24faa540e7b0d1e8"],["/article/83e42b42.html","be8befb522d9581dd54567cace2192b5"],["/article/8c8ac5bf.html","34ec3b2ead952efa929c0da0e870257f"],["/article/8e989db0.html","bc73f9d73f779f44663f9c72ee289fff"],["/article/90d5d393.html","4474fd7e67bd73dedc298eae54e00abc"],["/article/91a5995.html","3ce95c240dc0dd6aeb33ce3bb7e75a07"],["/article/940b4a8c.html","1ffc2b05dd82677ed823b5245287c9bc"],["/article/a0bf6b98.html","8b988f9d9d93156c38a51d11fb04ffe6"],["/article/a264b8fd.html","c971fa8361db4a32ad153671a37ca30b"],["/article/b318b8fe.html","de7df3d5672de5e9289abeb9079038f9"],["/article/b73c5547.html","6a78c66a92c6324952e8344de035782d"],["/article/bee0f638.html","5428039af2a81d1d546d1f3ff9d73880"],["/article/c6bff206.html","4cd53d42583e169ebe7a4c355ee08351"],["/article/c7063ec3.html","5ddf7e209eaad49235414be24a58b1d8"],["/article/ca8b4515.html","8d04b45e340423cfa83e424590461bfa"],["/article/cbe565ff.html","87082e800e0d1d5d4cb43498b49a0869"],["/article/ce3b3e2.html","300d9e39ab2a3f553616134e46914800"],["/article/cf8c0bbe.html","dfea56e5dc30c98ff7ad7ecff3171235"],["/article/d60bbbcf.html","9ce37f88abdaef0481ac992fd8c53c71"],["/article/d6505d8b.html","a0f999625ab21e6e81a8ce1b713d18d6"],["/article/da9af306.html","7365c4823b540ac3e085cd7c13f08a76"],["/article/e20a0ac4.html","8facb5eae7fd753522e6cc9a52d642cc"],["/article/ef9ebd24.html","068166a15eff49e3bacbb06725ff5dcd"],["/article/f01b987b.html","1f04de2332ee1f886e45288fc496046a"],["/article/f8d1ff2d.html","1d3249438aa79c7ff05b569f456222c3"],["/article/f96ab8b3.html","5a9cfbc56b22a4e9bfe30bd029cc56c5"],["/article/fd541bb0.html","586a051e752c88b63f59cb13f32edc20"],["/blogger_said/index.html","892030fe92daa1022aaaeba8a6334807"],["/books/index.html","d648c03e6c9a7b632342719653e60b9b"],["/categories/index.html","74b94fb9a55b8c4a652c0dc968596da6"],["/categories/价值观/index.html","d194b371a7a142508d1f8513cd985a1a"],["/categories/健康/index.html","a92aab9b11b56a462d570bab4d84167f"],["/categories/思维模型/index.html","c8f5809d74649186acd67d96f7a90efc"],["/categories/投资日记/index.html","743a5026df41a95cb286bd664815c000"],["/categories/数据分析/index.html","19964122ce9c48502327f9866f3e9f8a"],["/categories/翻译/index.html","e5611ed1de75b54d73b9d36ccada0926"],["/categories/英语/index.html","391c744dca1841a926bde603631a6e98"],["/categories/英语/page/2/index.html","8c614fdb0ee99d05f2b9650a2f76ab8d"],["/categories/计算机/Python/index.html","36abb32d003e293e26637a6f17d1d240"],["/categories/计算机/index.html","5aff2eff3ec67488fa4754b2df2e6964"],["/categories/计算机/page/2/index.html","2da97e8699438def036240b84ba57f72"],["/categories/计算机/工具/index.html","abd1c7421b65f560f839f63537847c4c"],["/categories/读书笔记/index.html","bf1fe1c4b0911cda5447d8f56c3e21e5"],["/categories/读书笔记/page/2/index.html","145e5ffe322eab4e717a7a43e75e7e6d"],["/categories/转载/index.html","ae42642e9267971665cef8a98e5173ca"],["/categories/转载/page/2/index.html","fe577245492b54958e7eca4437a5fb9c"],["/categories/随笔/index.html","cd6c5d3792756973672ce6a89687131e"],["/categories/随笔/page/2/index.html","4d619f0990a36a714dd04b2776544844"],["/categories/随笔/page/3/index.html","41097da99abd6e2d01d8aad9b7c57278"],["/css/style.css","afe9e47c09d97cd2820d96fdbc3f3eb7"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","f673bdc808ebd571f07d4ff07b53177f"],["/history/index.html","4401d9593ed275bf7bb08ddfa9d70edd"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","8c662e133055aa1822c2927f500b4b07"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","2191fc85c162aae2afeea7d7f790170e"],["/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/messages/index.html","0068dc60c91e16dc151c596396cc050b"],["/page/10/index.html","5768824cbc09865497c922ea38a89d56"],["/page/11/index.html","56a1c8323a022cf1b42b05f1a830f3e1"],["/page/12/index.html","cb6023b635fbdeb1d7515418313342e3"],["/page/2/index.html","80be9441a9d3a45e98247f5c857a924b"],["/page/3/index.html","42e6a7c597fcb190b1ab055a0f7beef6"],["/page/4/index.html","2ffb84c25e5008794cf5154f3ac6baf0"],["/page/5/index.html","7e343bab0298b0218f7cf995160a7492"],["/page/6/index.html","c26654168e047b2397ac8c958f659e46"],["/page/7/index.html","600c4e11f736bb82fafaf5872c250453"],["/page/8/index.html","2d3a43956aa4109e6eaa1106b68753f4"],["/page/9/index.html","b70497d7aebaa9d4949ff3e5b94b7bab"],["/photos/index.html","f92a92cb0e49235749376a499136ce27"],["/pictures/index.html","5b013b7a3789ecb7796e6f050026b99b"],["/recommend/index.html","4feef2cce7a9cd106289eed63146435e"],["/sw-register.js","3dc76f7f4262ed4ea5669cbdb953e62e"],["/tags/git/index.html","6f074a6142e1cb3189d608aeed3aa09b"],["/tags/hexo/index.html","64569f45e5d9106694723ba43c9c7abc"],["/tags/index.html","ec129f3163544b01ff2907e053a970f7"],["/tags/中医/index.html","543eef1825e5241e022bc533a235bcb7"],["/tags/习惯/index.html","13cbbeb9d18c8f95632c6646da65af79"],["/tags/休息/index.html","af06ba81ebaeefc348103033dd013bf9"],["/tags/健康/index.html","a00b9799724ea751880f126f02163ea6"],["/tags/公式/index.html","81979b695a71c285748f90b5f702b95b"],["/tags/写作/index.html","729c372e9e0996e60a9f0267a3f97288"],["/tags/区块链/index.html","c943ec874d51a23d197508871e94406c"],["/tags/医学/index.html","45ae882cf94cf468aaa886a849029895"],["/tags/原著阅读记录/index.html","9e9b1d33ad7013650312ee5821a20c0d"],["/tags/反思/index.html","a1580b010a4b8cd564efeb70c30bd734"],["/tags/同学/index.html","636e8eeec1f3d056832e3bb49a2b20b1"],["/tags/听力/index.html","9479726f892d354d06918968cf5e9c03"],["/tags/处事/index.html","d7b03e995c6caecffcd1a4f3b7e27bbd"],["/tags/如何致富/index.html","ac4789db8690fa14996bc9bc57ed12fe"],["/tags/婚姻/index.html","2759ed4f94c39d468de2716c143b47d3"],["/tags/学习/index.html","c77cde8c92a898467d52237cb0ca3fb3"],["/tags/安全/index.html","6a06178cf21cc4192222e1630ee3c6ee"],["/tags/幼年/index.html","2a30cff8ab91b2bdf4275cfd3556954e"],["/tags/幼年/page/2/index.html","e1acbb4c55924e020fb472bb0202b557"],["/tags/微信/index.html","9cf8a95fd198db88e999fc78ce6e66c7"],["/tags/心理学/index.html","f3e4c49fa75ce8debb49570e5a71b9e7"],["/tags/思维/index.html","c9a50ef71c8e8e888944a5e85a47561e"],["/tags/情绪/index.html","0005b40b300a20f1bab8113a418c4dbd"],["/tags/成本/index.html","852e6200333e712e83a554ca81a9a501"],["/tags/手机/index.html","378c2921a7df10981f09d4ec37740e5e"],["/tags/搜索/index.html","9fc12bf5c292eed4df0723d198d6b1d2"],["/tags/效率/index.html","5ccb273a3287b941ac50e4ccf016f751"],["/tags/数学/index.html","f8909003ec207910aeddec91b70a9e65"],["/tags/数据处理/index.html","2a8d72b5e4b633c0612e4a7e1cc27ec8"],["/tags/文学/index.html","ddef78b5eabd153ae72a4d194ff30eab"],["/tags/方法/index.html","00bf12f2e7f99aafa682baf3d4d6c763"],["/tags/旅行/index.html","3da76674ce0d4e2572e1776c6aed115e"],["/tags/日记/index.html","35d9738df7e3c08008ad9681c986d596"],["/tags/时间管理/index.html","2efebdd7d63dc0e0575fc60da025fcbe"],["/tags/智商税/index.html","9ef5b5900bc6d78e32145650630a50d5"],["/tags/概率/index.html","419ff80c69c3eb7b7c134a6f6956efac"],["/tags/演讲/index.html","9febd46e3c9e6fdbd9918f23ae5bfd17"],["/tags/爱情/index.html","a516f3da93c49ca13bd98abacd4562d1"],["/tags/生活/index.html","b76629e8990424d6ecbc863fab65bdb2"],["/tags/生活/page/2/index.html","ed6d4e0749d07263c18db5c107c8f423"],["/tags/睡眠/index.html","6152b4c6635296a1a78489c3993e2d0d"],["/tags/科普/index.html","a64001397a906488382857418ce0cf6d"],["/tags/精力管理/index.html","1da8e8c7581185a1bd11779d5e113585"],["/tags/精神生活/index.html","7d5d26926b575cf00a74a313e9141d55"],["/tags/经济学/index.html","fff8d418feb1b691ec8e17d99868600a"],["/tags/自律/index.html","4a7a2e7f70ffaa66229ad275145cccbe"],["/tags/观念/index.html","db6954ba275a0a9cffeb4a22936b92a7"],["/tags/解决问题/index.html","c4f7c2d879d50a61d446d1ff01010dcc"],["/tags/解释/index.html","dbac468f5e0cba29625e62320d028bdd"],["/tags/记忆/index.html","0c23dc907b8e9a9541288133fcde8e2f"],["/tags/诗/index.html","29da1610530d1af8e3440f0fb10b47ad"],["/tags/财富/index.html","8aed5a5ce42da37c55a1be1faf93f22c"],["/tags/阅读/index.html","fbf0bc6e33b9d3448aafcd636239b235"],["/tags/阅读/page/2/index.html","e6e40a41f8b9a62eff823f280d0ce0f8"],["/tags/隐私/index.html","051da32e805802bbc8e31e6a72f315eb"],["/tags/题目/index.html","ff421222afc58b42315219ec683e5528"],["/tags/饮食/index.html","60e1ad9879aae1ee168081b678f25e28"],["/tools/index.html","daae39722f4de26841e461ac39c4907e"],["/works/index.html","5008824f02be5ca6cd9d62fc7e7485f3"],["/works/item1/index.html","2527483e19625400386ddd5083be7eae"]];
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
