$(function(){
    $(window).on('resize',function(){
        // 获得窗口的宽度
        let clientW =$(window).width();
        // 设置临界点
        let isShowBigImg = clientW >= 900;
        console.log(isShowBigImg);
        // 获取所有item
        let $allItem = $('#R_carouse_1 .carousel-item');
        
        //遍历
        $allItem.each((index,item) => {
            // console.log(item);
            // 取出图片路径
            let src = isShowBigImg ? $(item).data('lg-img'):$(item).data('sm-img');
            let imgUrl = `url(${src})`;
            // console.log(imgUrl);
            // 设置背景
            $(item).css({
                backgroundImage:imgUrl,
            })
            // 创建img标签
            if(!isShowBigImg){
                let imgEle = `<img sec = "${src}">`;
                $(item).empty().append(imgEle);
            }else{
                $(item).empty();
            }
        })
    }).trigger('resize');
})