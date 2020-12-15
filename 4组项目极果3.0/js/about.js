function show1() {
    $('.r_main1').show();
    $('.r_main2').hide();
}

function show2() {
    $('.r_main2').show();
    $('.r_main1').hide();
}
$('.hz').on('click', function() {
    show1();
});
$('.mf').on('click', function() {
    show2()
})

$('#md1').on('click', function() {
    show1()
});
$('#md2').on('click', function() {
    show2()
});
var timer_5 = null;
$('.main_more>p').on('click', function() {
    clearTimeout(timer_5);
    $(this).removeClass().addClass('main_loading');
    $(this).text('正在加载......');
    timer_5 = setTimeout(function() {
        $('.main_more>p').removeClass().addClass('nomain_loading');
        $('.main_more>p').text('点击加载更多');
        more_again();
    }, 2000);
});

function more_again() {
    $.ajax({
        url: adress + "/play/new",
        dataType: "json",
        data: "get",
        success: function(res) {
            console.log(res);
            var innerT_1 = doT.template($('#more_free_1').text());
            var old = $('#free_list').html();
            $('#free_list').html(old + innerT_1(res[parseInt(Math.random() * 4)]));
        }
    });
}


//加载更多
var timer_5 = null;
$('.main_more>p').on('click', function() {
    clearTimeout(timer_5);
    $(this).removeClass().addClass('main_loading')
    $(this).text('正在加载......');
    timer_5 = setTimeout(function() {
        $('.main_more>p').removeClass().addClass('nomain_loading')
        $('.main_more>p').text('无更多数据');
        more_again();
    }, 2000)

});