$.ajaxPrefilter(function(a) {
    console.log(a.url);
    a.url = 'http://ajax.frontend.itheima.net' + a.url
})