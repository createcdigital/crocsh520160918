<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
    <meta charset="UTF-8">
    <title>CROCS</title>

    <meta name="viewport" content="width=750, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
<!-- pagelist-->
<div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- p1 -->
        <div class="swiper-slide p1">
            <div class="e1-1"></div>
        </div>
        <!-- p1 end -->
        <!-- p2 -->
        <div class="swiper-slide p2 hide">
            <div id="upload-container" class="e2-1">
                <input class="e2-2" id="file" type="file" accept="image/*" />
            </div>
            <div class="e2-4">
                <input name="name" type="text" class="in-1 e2-3-1" placeholder="">
            </div>
            <div class="e2-5">
                <input name="phone" type="text" maxlength="11" class="in-1 e2-3-2" placeholder="">
            </div>
            <div class="e2-6">
                <input name="city" type="text" class="in-1 e2-3-3" placeholder="">
            </div>
            <div class="e2-7"></div>
            <span></span>
        </div>
        <!-- p2 end -->
        <!-- p3 -->
        <div class="swiper-slide p3 hide">
            <div class="e3-1"></div>
            <span></span>
        </div>
        <!-- p3 end -->
        <!-- p4 -->
        <div class="swiper-slide p4 hide">
            <div class="e4-1"></div>
        </div>
        <!-- p4 end -->
    </div>
</div>

<!--Script
====================================================== -->
<script src="js/jquery/jquery.min.js"></script>
<script src="js/lrzimg/lrz.bundle.js"></script>
<script src="js/lrzimg/mobileBUGFix.mini.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/app.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?67f4e23e5f839845d05e16f18c5c2897";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
</script>
</body>
</html>