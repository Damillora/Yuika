function sliderheight(e){divHeight=$(".navbar").height(),e?$(".nav").css({"background-color":"#3b90c6"}):$(".nav").css({"background-color":""})}!function(t,i){var n=i.querySelector("link[rel=next]");if(n){var r=i.querySelector(".post-feed");if(r){var o=300,s=!1,d=!1,a=t.scrollY,c=t.innerHeight,l=i.documentElement.scrollHeight;t.addEventListener("scroll",v,{passive:!0}),t.addEventListener("resize",f),u()}}function h(){if(404===this.status)return t.removeEventListener("scroll",v),void t.removeEventListener("resize",f);this.response.querySelectorAll(".post-card").forEach(function(e){r.appendChild(i.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?n.href=e.href:(t.removeEventListener("scroll",v),t.removeEventListener("resize",f)),l=i.documentElement.scrollHeight,d=s=!1}function e(){if(!d)if(a+c<=l-o)s=!1;else{d=!0;var e=new t.XMLHttpRequest;e.responseType="document",e.addEventListener("load",h),e.open("GET",n.href),e.send(null)}}function u(){s||t.requestAnimationFrame(e),s=!0}function v(){a=t.scrollY,u()}function f(){c=t.innerHeight,l=i.documentElement.scrollHeight,u()}}(window,document),function(r){"use strict";r.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(n.childNodes[1])}return e&&r.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var n=".fitvidsignore";i.ignore&&(n=n+", "+i.ignore);var t=r(this).find(e.join(","));(t=(t=t.not("object object")).not(n)).each(function(){var e=r(this);if(!(0<e.parents(n).length||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var t=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var i="fitvid"+r.fn.fitVids._count;e.attr("name",i),r.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),e.removeAttr("height").removeAttr("width")}})})},r.fn.fitVids._count=0}(window.jQuery||window.Zepto),$(document).ready(function(){var t=document.querySelector(".index-navbar"),i=document.querySelector("#post"),n=window.scrollY,r=(window.innerHeight,$(document).height(),!1);function e(){r||requestAnimationFrame(o),r=!0}function o(){var e=i.getBoundingClientRect().top+window.scrollY;e-20<=n?(t.classList.add("fixed"),t.classList.add("nav-fixed"),t.classList.remove("absolute")):(t.classList.remove("fixed"),t.classList.remove("nav-fixed"),t.classList.add("absolute")),r=!1}window.addEventListener("scroll",function(){n=window.scrollY,e()},{passive:!0}),window.addEventListener("resize",function(){window.innerHeight,$(document).height(),e()},!1),o()}),$("#menushow").click(function(){var e=$(".nav");$("#menushow");e.is(":hidden")?(sliderheight(!0),e.slideDown(250)):e.slideUp(250,function(){sliderheight(!1)})});
//# sourceMappingURL=yuika.js.map