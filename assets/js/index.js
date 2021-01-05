$(function() {



    var layer = layui.layer
    $('#tuichu').on('click', function() {
        layer.confirm('确认退出登录?', { icon: 3, title: '提示' }, function(index) {

            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })
    wn()

})

function wn() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            console.log(res);
            fn(res.data)

        }
    })
}

function fn(uesr) {
    var name = uesr.nickname || uesr.username
    $('#yhxm').html('欢迎' + name)
    if (uesr.user_pic != null) {
        $('.tox').attr('src', uesr.user_pic).show()
            // console.log(uesr);
        $('.yh').hide()
    } else {
        $('.tox').hide()
        var t = name[0].toUpperCase()
        $('.yh').html(t).show()

    }
}