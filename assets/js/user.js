$(function() {

    var form = layui.form
    var layer = layui.layer
    form.verify({
        nickname: function(value) {
            if (value.length > 6) {
                return '昵称长度必须在1 - 6 个字符之间!'
            }
        }
    })
    int()

    function int() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败')
                }
                // console.log(res);
                form.val('formuser', res.data)
            }
        })
    }
    $('#butt_czhi').on('click', function(e) {
        e.preventDefault()
        int()
    })

    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
        console.log(123);
        $.ajax({
            method: 'post',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('修改用户信息失败')
                }
                layer.msg('修改用户信息成功')
                console.log(window.parent);
                window.parent.wn()
            }
        })

    })


})