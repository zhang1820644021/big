$(function() {
    // 注册按钮
    $('.dll').on('click', function() {
            $('.box1').hide()
            $('.box2').show()
        })
        // 登录按钮
    $('.lld').on('click', function() {
            $('.box1').show()
            $('.box2').hide()
        })
        //   自定义表单验证
    var form = layui.form
    form.verify({
            pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
            rewd: function(value1) {
                if (value1 !== $('#mima1').val()) {
                    return '两次密码不一致'
                }
            }
        })
        // 监听注册表单提交事件
    var layer = layui.layer
    $('#zhuche').on('submit', function(e) {
            e.preventDefault()
            $.post(
                '/api/reguser', {
                    username: $('#zhuche [name=usher]').val(),
                    password: $('#zhuche [name=password]').val()
                },
                function(res) {
                    if (res.status !== 0) {
                        return layer.msg(res.message)
                    } else {
                        layer.msg('注册成功请登录!')
                        $('#zhuche')[0].reset()
                        $('.lld').click();
                    }

                }
            )
        })
        // 监听登录表单提交事件
    $('#denglu').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
                url: '/api/login',
                method: 'POST',
                // 快速获取表单的数据
                data: $(this).serialize(),
                success: function(res) {
                    if (res.status !== 0) {
                        return layer.msg('登录失败!')
                    }
                    layer.msg('登录成功!')
                    localStorage.setItem('token', res.token)
                    location.href = '/index.html'
                }


            }

        )
    })

    $('.layui-input').val('18516823810')
    $('.cvv').val('123456')

})