var app = app || {};
app.imgdata = "";
/*-- lrzimg
============================ */
app.lrzimg = function () {}
app.lrzimg.upload = function() {
    document.querySelector('#file').addEventListener('change', function () {
        lrz(this.files[0])
            .then(function (rst) {
                $(".p2 span").html("图片上传中,请稍后。。。");
                $(".p2 .e2-7").hide();
                $.post("db/uploads.php",{'formFile':rst.base64},function (result) {
                    var re = JSON.parse(result);
                    if(re.status == 1){
                        var img = new Image(),
                            div = document.createElement('div');
                        div.className = 'e2-3';
                        img.src = rst.base64;
                        img.onload = function () {
                            document.querySelector('#upload-container').appendChild(div);
                            $('.p2 .e2-3').append(img);
                        };
                        $(".p2 .e2-2").hide();
                        $(".p2 .e2-7").show();
                        app.imgdata = re.content;
                        $(".p2 span").html("图片上传成功");
                    }else {
                        $(".p2 span").html("图片上传失败,请重新上传");
                        $(".p2 .e2-7").show();
                    }
                });
                // $.ajax({
                //     url: 'db/uploads.php',
                //     type: 'POST',
                //     data:{'formFile':rst.base64},
                //     error: function(){
                //         alert('Error loading PHP document');
                //     },
                //     success: function(result){
                //         var re = JSON.parse(result);
                //         if(re.status == 1){
                //             var img = new Image(),
                //                 div = document.createElement('div');
                //             div.className = 'e2-3';
                //             img.src = rst.base64;
                //             img.onload = function () {
                //                 document.querySelector('#upload-container').appendChild(div);
                //                 $('.p2 .e2-3').append(img);
                //             };
                //             $(".p2 .e2-2").hide();
                //             $(".p2 .e2-7").show();
                //             app.imgdata = re.content;
                //             $(".p2 span").html("图片上传成功");
                //         }else {
                //             $(".p2 span").html("图片上传失败,请重新上传");
                //             $(".p2 .e2-7").show();
                //         }
                //     }
                // });
                return rst;
            })
            .catch(function (err) {
                alert(err);
            })
            .always(function () {

            });
    });
}

/*-- html5-template
====================================================== */
app.template = function(){};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};

/*-- p1
====================================================== */
app.p1 = function(){

};
 
app.p1.init = function(){  
    // alert(document.body.clientHeight);//504
    // alert(document.body.offsetHeight);//504
    // alert(document.body.scrollHeight);//504
    // alert(window.innerHeight);
    //document.documentElement.style.height = window.innerHeight + 'px'; 
};

app.p1.bind_touch_event = function(){

  $(".p1 .e1-1").on("touchend", function(){
      $(".p1").hide();
      $(".p2").show();
   });
};

app.p1.destory = function(){  
};

/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){};

showMask = function(data){
	$("#mask").show();
	document.getElementById("jumpword").innerHTML = data;
}
    $("#mask").click(function(){
      $(this).hide();
      $(this).children().show();
});

app.p2.bind_touch_event = function(){
    $(".p2 .e2-7").on("touchend",function(){
        var name = $("input[name=name]").val();
        phone = $("input[name=phone]").val();
        city = $("input[name=city]").val();
        if(app.imgdata == ""){
            $(".p2 span").html("请上传你和大小姐的合照");
            return false;
        }
        if (name == '' || name == 'Name') {
            //showMask('Please enter your name.');
            $(".p2 span").html("请输入你的姓名");
            return false;
        }
        if (phone == '' || phone == 'Phone Number') {
            //showMask('Please enter your phone number.');
            $(".p2 span").html("请输入你的电话号码");
            return false;
        }else{
            var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
            if(!patt.test(phone)){
                //showMask('Please enter the correct 11 phone number.');
                $(".p2 span").html("请输入正确的电话号码");
                return false;
            }
        }
        if (city == '' || city == 'City') {
            //showMask('Please enter your city.');
            $(".p2 span").html("请输入你的城市");
            return false;
        }

        $(".p2 span").html("数据提交中");

        $.post("db/adduser.php", {name: name,phone: phone,city: city,image: app.imgdata},function(r) {
            var re = JSON.parse(r);
            if(re.code == 1){
                $(".p2 span").html("此手机号已参加过该活动");
            }else if(re.code == 0){
                $(".p3 span").html(re.card);
                $(".p2").hide();
                $(".p3").show();
            }else if(re.code == 2){
                $(".p2 span").html("代金券已发放完毕,请关注CROCS最新动态");
            }else {
                $(".p2 span").html("网络错误,请刷新后提交");
            }
        });
    });
}

app.p2.destory = function(){};


/*-- p3
 ====================================================== */
app.p3 = function(){};

app.p3.init = function(){};

app.p3.bind_touch_event = function(){
    $(".p3 .e3-1").on("touchend", function(){
        $(".p3").hide();
        $(".p4").show();
    });
}

app.p3.destory = function(){};

/*-- p4
 ====================================================== */
app.p4 = function(){};

app.p4.init = function(){};

app.p4.bind_touch_event = function(){
    $(".p4 .e4-1").on("touchend", function(){
        $(".p4").hide();
        $(".p3").show();
    });
}

app.p3.destory = function(){};

/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};

/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
    }

    // 框架
    app.template.Landscape.init();
    app.lrzimg.upload();
    app.p1.bind_touch_event();
    app.p2.bind_touch_event();
    app.p3.bind_touch_event();
    app.p4.bind_touch_event();
    app.debug.enable = false;
})();

