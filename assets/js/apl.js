$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url);

    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    options.complete = function(res) {
        console.log(res);
        if (res.responseJSON.strtus === 1 && res.responseJSON.message == "身份认证失败!") {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }
})