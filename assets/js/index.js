$(function() {

    fn()

    function fn() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                console.log(res);
                if (res.data.nickname !== '') {
                    $('#yhxm').html('欢迎' + res.data.nickname)
                }
                $('#yhxm').html('欢迎' + res.data.username)


                if (res.data.user_pic != null) {
                    $('#tox').attr('src', res.data.user_pic)
                } else {
                    $('#yh').html(res.data.username[0])

                }

            },


        })

    }
    var layer = layui.layer
    $('#tuichu').on('click', function() {
        layer.confirm('确认退出登录?', { icon: 3, title: '提示' }, function(index) {

            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })


})