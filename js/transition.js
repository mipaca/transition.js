/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+j.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+C.join(r+" ")+r).split(" "),c(i,t,n))}var l,u,f,d="2.6.2",p={},m=!0,h=t.documentElement,y="modernizr",v=t.createElement(y),g=v.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),E="Webkit Moz O ms",j=E.split(" "),C=E.toLowerCase().split(" "),w={},S=[],x=S.slice,N=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:y+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',y,'">',e,"</style>"].join(""),l.id=y,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),h.style.overflow=s),!!a},T={}.hasOwnProperty;f=o(T,"undefined")||o(T.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return T.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(x.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(x.call(arguments)))};return r}),w.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",b.join("touch-enabled),("),y,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},w.cssanimations=function(){return s("animationName")},w.csstransitions=function(){return s("transition")};for(var F in w)f(w,F)&&(u=F.toLowerCase(),p[u]=w[F](),S.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),v=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[m]];return t||(t={},h++,e[m]=h,y[h]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:pageWrapper}mark{background:#FF0;color:#000}")),u||c(e,r),e}var l,u,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",h=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=v,s(t)}(this,t),p._version=d,p._prefixes=b,p._domPrefixes=C,p._cssomPrefixes=j,p.testProp=function(e){return a([e])},p.testAllProps=s,p.testStyles=N,p.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+S.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){j.removeChild(f)},50);for(var r in N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}}var l=l||d.errorTimeout,f=t.createElement(e),p=0,y=0,b={t:r,s:n,e:i,a:s,x:l};1===N[n]&&(y=1,N[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===N[n]?(j.insertBefore(f,E?null:h),m(u,l)):N[n].push(f))}function l(e,t,n,r,i){return g=0,t=t||"j",o(e)?s("c"==t?w:C,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,j=E?p:h.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,C=b?"object":p?"script":"img",w=p?"script":C,S=Array.isArray||function(e){return"[object Array]"==y.call(e)},x=[],N={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=x.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=x[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(N[s.url]?s.noexec=!0:N[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),N[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),a(e[s],f,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(S(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,f,0):S(l)?d(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){T[e]=t},d.addFilter=function(e){x.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

var PageTransitions = (function () {

    var startPageIndex = 0,
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },

    // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],

    // support css animations
        support = Modernizr.cssanimations,

        animOptions = undefined;

    function init(options) {

        animOptions = setDefaults(options);

        refresh();

        // Adding click event to .pt-trigger
        $('.pt-trigger').click(function (e) {
            e.preventDefault();
            $pageTrigger = $(this);
            Animate($pageTrigger);
        });

        $(window).on('hashchange', function() {
            refresh();
        });
    }

    function refresh() {
        $('.pt-page-current').removeClass('pt-page-current');
        if (animOptions.hashIt == true && window.location.hash.trim() != '') {
            var $currentPage = $(window.location.hash.trim());
            if ($currentPage.hasClass('pt-page') == true) {
                startPageIndex = $($currentPage).index();
            }
        }

        // Get all the .pt-page div.
        $('.pt-page').each(function () {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        // Get all the .pt-wrapper div which is the parent for all pt-div
        $('.pt-wrapper').each(function () {
            var $wrapperDiv = $(this);
            $wrapperDiv.data('current', startPageIndex);
            $wrapperDiv.data('isAnimating', false);
            $wrapperDiv.children('.pt-page').eq(startPageIndex).addClass('pt-page-current');
        });
    }

    // All pt-trigger click event calls this function
    // This function gets the animation id, goto page that we define in `data-animation` and 'data-goto' repectively.
    function Animate($pageTrigger) {
        // Checking for 'data-animation' and 'data-goto' attributes.
        if (!($pageTrigger.attr('data-animation'))) {
            alert("Transition.js : Invalid attribute configuration. \n\n 'data-animation' attribute not found");
            return false;
        }
        else if (!($pageTrigger.attr('data-goto'))) {
            alert("Transition.js : Invalid attribute configuration. \n\n 'data-goto' attribute not found");
            return false;
        }

        var animation = $pageTrigger.data('animation').toString(),
            gotoPage, inClass, outClass, selectedAnimNumber;

        // Check if the delimiter '-' is present then create an animation array list.
        if (animation.indexOf('-') != -1) {
            var randomAnimList = animation.split('-');
            selectedAnimNumber = parseInt(randomAnimList[(Math.floor(Math.random() * randomAnimList.length))]);
        }
        else {
            selectedAnimNumber = parseInt(animation);
        }

        // Checking if the animation number is out of bound, max allowed value is 1 to 67.
        if (selectedAnimNumber > 67) {
            alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
            return false;
        }

        switch (selectedAnimNumber) {
            case 1:
                inClass = 'pt-page-moveFromRight';
                outClass = 'pt-page-moveToLeft';
                break;
            case 2:
                inClass = 'pt-page-moveFromLeft';
                outClass = 'pt-page-moveToRight';
                break;
            case 3:
                inClass = 'pt-page-moveFromBottom';
                outClass = 'pt-page-moveToTop';
                break;
            case 4:
                inClass = 'pt-page-moveFromTop';
                outClass = 'pt-page-moveToBottom';
                break;
            case 5:
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 6:
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 7:
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 8:
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                outClass = 'pt-page-fade';
                break;
            case 9:
                inClass = 'pt-page-moveFromRightFade';
                outClass = 'pt-page-moveToLeftFade';
                break;
            case 10:
                inClass = 'pt-page-moveFromLeftFade';
                outClass = 'pt-page-moveToRightFade';
                break;
            case 11:
                inClass = 'pt-page-moveFromBottomFade';
                outClass = 'pt-page-moveToTopFade';
                break;
            case 12:
                inClass = 'pt-page-moveFromTopFade';
                outClass = 'pt-page-moveToBottomFade';
                break;
            case 13:
                inClass = 'pt-page-moveFromRight';
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                break;
            case 14:
                inClass = 'pt-page-moveFromLeft';
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                break;
            case 15:
                inClass = 'pt-page-moveFromBottom';
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                break;
            case 16:
                inClass = 'pt-page-moveFromTop';
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                break;
            case 17:
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 18:
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 19:
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 20:
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                outClass = 'pt-page-scaleDown';
                break;
            case 21:
                inClass = 'pt-page-scaleUpDown pt-page-delay300';
                outClass = 'pt-page-scaleDown';
                break;
            case 22:
                inClass = 'pt-page-scaleUp pt-page-delay300';
                outClass = 'pt-page-scaleDownUp';
                break;
            case 23:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToLeft pt-page-ontop';
                break;
            case 24:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToRight pt-page-ontop';
                break;
            case 25:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToTop pt-page-ontop';
                break;
            case 26:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-moveToBottom pt-page-ontop';
                break;
            case 27:
                inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                outClass = 'pt-page-scaleDownCenter';
                break;
            case 28:
                inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateRightSideFirst';
                break;
            case 29:
                inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateLeftSideFirst';
                break;
            case 30:
                inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateTopSideFirst';
                break;
            case 31:
                inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                outClass = 'pt-page-rotateBottomSideFirst';
                break;
            case 32:
                inClass = 'pt-page-flipInLeft pt-page-delay500';
                outClass = 'pt-page-flipOutRight';
                break;
            case 33:
                inClass = 'pt-page-flipInRight pt-page-delay500';
                outClass = 'pt-page-flipOutLeft';
                break;
            case 34:
                inClass = 'pt-page-flipInBottom pt-page-delay500';
                outClass = 'pt-page-flipOutTop';
                break;
            case 35:
                inClass = 'pt-page-flipInTop pt-page-delay500';
                outClass = 'pt-page-flipOutBottom';
                break;
            case 36:
                inClass = 'pt-page-scaleUp';
                outClass = 'pt-page-rotateFall pt-page-ontop';
                break;
            case 37:
                inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                outClass = 'pt-page-rotateOutNewspaper';
                break;
            case 38:
                inClass = 'pt-page-moveFromRight';
                outClass = 'pt-page-rotatePushLeft';
                break;
            case 39:
                inClass = 'pt-page-moveFromLeft';
                outClass = 'pt-page-rotatePushRight';
                break;
            case 40:
                inClass = 'pt-page-moveFromBottom';
                outClass = 'pt-page-rotatePushTop';
                break;
            case 41:
                inClass = 'pt-page-moveFromTop';
                outClass = 'pt-page-rotatePushBottom';
                break;
            case 42:
                inClass = 'pt-page-rotatePullRight pt-page-delay180';
                outClass = 'pt-page-rotatePushLeft';
                break;
            case 43:
                inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                outClass = 'pt-page-rotatePushRight';
                break;
            case 44:
                inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                outClass = 'pt-page-rotatePushTop';
                break;
            case 45:
                inClass = 'pt-page-rotatePullTop pt-page-delay180';
                outClass = 'pt-page-rotatePushBottom';
                break;
            case 46:
                inClass = 'pt-page-moveFromRightFade';
                outClass = 'pt-page-rotateFoldLeft';
                break;
            case 47:
                inClass = 'pt-page-moveFromLeftFade';
                outClass = 'pt-page-rotateFoldRight';
                break;
            case 48:
                inClass = 'pt-page-moveFromBottomFade';
                outClass = 'pt-page-rotateFoldTop';
                break;
            case 49:
                inClass = 'pt-page-moveFromTopFade';
                outClass = 'pt-page-rotateFoldBottom';
                break;
            case 50:
                inClass = 'pt-page-rotateUnfoldLeft';
                outClass = 'pt-page-moveToRightFade';
                break;
            case 51:
                inClass = 'pt-page-rotateUnfoldRight';
                outClass = 'pt-page-moveToLeftFade';
                break;
            case 52:
                inClass = 'pt-page-rotateUnfoldTop';
                outClass = 'pt-page-moveToBottomFade';
                break;
            case 53:
                inClass = 'pt-page-rotateUnfoldBottom';
                outClass = 'pt-page-moveToTopFade';
                break;
            case 54:
                inClass = 'pt-page-rotateRoomLeftIn';
                outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                break;
            case 55:
                inClass = 'pt-page-rotateRoomRightIn';
                outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                break;
            case 56:
                inClass = 'pt-page-rotateRoomTopIn';
                outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                break;
            case 57:
                inClass = 'pt-page-rotateRoomBottomIn';
                outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                break;
            case 58:
                inClass = 'pt-page-rotateCubeLeftIn';
                outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                break;
            case 59:
                inClass = 'pt-page-rotateCubeRightIn';
                outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                break;
            case 60:
                inClass = 'pt-page-rotateCubeTopIn';
                outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                break;
            case 61:
                inClass = 'pt-page-rotateCubeBottomIn';
                outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                break;
            case 62:
                inClass = 'pt-page-rotateCarouselLeftIn';
                outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                break;
            case 63:
                inClass = 'pt-page-rotateCarouselRightIn';
                outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                break;
            case 64:
                inClass = 'pt-page-rotateCarouselTopIn';
                outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                break;
            case 65:
                inClass = 'pt-page-rotateCarouselBottomIn';
                outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                break;
            case 66:
                inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                outClass = 'pt-page-rotateSidesOut';
                break;
            case 67:
                inClass = 'pt-page-rotateSlideIn';
                outClass = 'pt-page-rotateSlideOut';
                break;
        }

        // This will get the pt-trigger elements parent wrapper div
        var $pageWrapper = $pageTrigger.closest('.pt-wrapper');
        var currentPageIndex = $pageWrapper.data('current'), tempPageIndex,
            $pages = $pageWrapper.children('div.pt-page'),
            pagesCount = $pages.length,
            endCurrentPage = false,
            endNextPage = false;

        gotoPage = parseInt($pageTrigger.data('goto'));

        // check if 'data-goto' value is greater than total pages inside 'pt-wrapper'
        if (!(pagesCount < gotoPage)) {

            tempPageIndex = currentPageIndex;

            if ($pageWrapper.data('isAnimating')) {
                return false;
            }

            // Setting the isAnimating property to true.
            $pageWrapper.data('isAnimating', true);

            // Current page to be removed.
            var $currentPage = $pages.eq(currentPageIndex);

            if (animOptions !== undefined && animOptions.onAnimationStart !== undefined) {
                animOptions.onAnimationStart($currentPage);
            }

            // Checking gotoPage value and decide what to do
            // -1 Go to next page
            // -2 Go to previous page
            // 0+ Go to custom page number.
            // NEXT PAGE
            if (gotoPage == -1) {

                // Incrementing page counter to diplay next page
                if (currentPageIndex < pagesCount - 1) {
                    ++currentPageIndex;
                }
                else {
                    currentPageIndex = 0;
                }
            }
            // PREVOUS PAGE
            else if (gotoPage == -2) {
                if (currentPageIndex == 0) {
                    currentPageIndex = pagesCount - 1;

                }
                else if (currentPageIndex <= pagesCount - 1) {
                    --currentPageIndex;
                }
                else {
                    currentPageIndex = 0;
                }

            }
            // GOTO PAGE
            else {
                currentPageIndex = gotoPage - 1;
            }

            // Check if the current page is same as the next page then do not do the animation
            // else reset the 'isAnimatiing' flag
            if (tempPageIndex != currentPageIndex) {
                $pageWrapper.data('current', currentPageIndex);

                // Next page to be animated.
                var $nextPage = $pages.eq(currentPageIndex).addClass('pt-page-current');

                $currentPage.addClass(outClass).on(animEndEventName, function () {
                    $currentPage.off(animEndEventName);
                    endCurrentPage = true;
                    if (endNextPage) {
                        onEndAnimation($pageWrapper, $nextPage, $currentPage, $pageTrigger);
                    }
                });

                $nextPage.addClass(inClass).on(animEndEventName, function () {
                    $nextPage.off(animEndEventName);
                    endNextPage = true;
                    if (endCurrentPage) {
                        onEndAnimation($pageWrapper, $nextPage, $currentPage, $pageTrigger);
                    }
                });
            }
            else {
                $pageWrapper.data('isAnimating', false);
            }

        }
        else {
            alert("Transition.js : Invalid 'data-goto' attribute configuration.");
        }

        // Check if the animation is supported by browser and reset the pages.
        if (!support) {
            onEndAnimation($currentPage, $nextPage);
        }
    }

    function onEndAnimation($pageWrapper, $nextPage, $currentPage, $pageTrigger) {
        resetPage($nextPage, $currentPage);
        $pageWrapper.data('isAnimating', false);
        if (animOptions !== undefined && animOptions.onAnimationEnd !== undefined) {
            animOptions.onAnimationEnd($nextPage);
        }
        if (typeof $pageTrigger !== 'undefined') {
            addHash($pageTrigger);
        }
    }

    function addHash($pageTrigger) {
        if (animOptions.hashIt == true) {
            var href = $pageTrigger.attr('href');
            if (typeof href !== 'undefined' && href.indexOf("#") == 0) {
                window.location.href = href;
            }
        }
    }

    function resetPage($nextPage, $currentPage) {
        $currentPage.attr('class', $currentPage.data('originalClassList'));
        $nextPage.attr('class', $nextPage.data('originalClassList') + ' pt-page-current');
        if (animOptions !== undefined && animOptions.onResetPage !== undefined) {
            animOptions.onResetPage($nextPage);
        }
    }

    function setDefaults($options) {

        var defaults = {
            'hashIt': true,
        }

        if (typeof $options === 'undefined') {
            return defaults;
        }

        for (var option in defaults) {
            if (typeof $options[option] === 'undefined') {
                $options[option] = defaults[option];
            }
        }

        return $options;
    }

    return {
        init: init,
        animate: Animate,
        refresh: refresh
    };

})();