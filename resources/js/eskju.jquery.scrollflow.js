/*
 * jQuery ScrollFlow plugin
 *
 * Copyright (c) 2015 Christian Witte
 * licensed under MIT license.
 *
 * https://github.com/eskju/eskju-jquery-scrollflow
 *
 * Version: 1.0.0
 * 
 * Licensed under MIT license.
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial 
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

$(document).ready(function() {
    new ScrollFlow
}), $.fn.ScrollFlow = function(t) {
    new ScrollFlow(t)
}, ScrollFlow = function(t) {
    this.init(t)
}, $.extend(ScrollFlow.prototype, {
    init: function(t) {
        this.options = $.extend({
            useMobileTimeouts: !0,
            mobileTimeout: 100,
            durationOnLoad: 0,
            durationOnResize: 250,
            durationOnScroll: 500
        }, t), this.lastScrollTop = 0, this.bindScroll(), this.bindResize(), this.update(this.options.durationOnLoad)
    },
    bindScroll: function() {
        var t = this;
        $(window).scroll(function() {
            t.update()
        }), $(window).bind("gesturechange", function() {
            t.update()
        })
    },
    bindResize: function() {
        var t = this;
        $(window).resize(function() {
            t.update(t.options.durationOnResize)
        })
    },
    update: function(t) {
        var o = this;
        winHeight = $(window).height(), scrollTop = $(window).scrollTop(), $(".scrollflow").each(function(a, s) {
            objOffset = $(s).offset(), objOffsetTop = parseInt(objOffset.top), effectDuration = o.options.durationOnScroll, effectDuration = "undefined" != typeof t ? t : effectDuration, effectiveFromPercentage = isNaN(parseInt($(s).attr("data-scrollflow-start") / 100)) ? -.25 : parseInt($(s).attr("data-scrollflow-start")) / 100, scrollDistancePercentage = isNaN(parseInt($(s).attr("data-scrollflow-distance") / 100)) ? .5 : parseInt($(s).attr("data-scrollflow-distance")) / 100, effectiveFrom = objOffsetTop - winHeight * (1 - effectiveFromPercentage), effectiveTo = objOffsetTop - winHeight * (1 - scrollDistancePercentage), parallaxScale = .8, parallaxOpacity = 0, parallaxOffset = -100, factor = 0, scrollTop > effectiveFrom && (factor = (scrollTop - effectiveFrom) / (effectiveTo - effectiveFrom), factor = factor > 1 ? 1 : factor), options = {
                opacity: 1,
                scale: 1,
                translateX: 0,
                translateY: 0
            }, $(s).hasClass("-opacity") && (options.opacity = 0 + factor), $(s).hasClass("-pop") && (options.scale = .8 + .2 * factor), $(s).hasClass("-slide-left") && (options.translateX = -1 * (-100 + 100 * factor)), $(s).hasClass("-slide-right") && (options.translateX = -100 + 100 * factor), $(s).hasClass("-slide-top") && (options.translateY = -1 * (-100 + 100 * factor)), $(s).hasClass("-slide-bottom") && (options.translateY = -100 + 100 * factor), $(s).css({
                webkitFilter: "opacity(" + options.opacity + ")",
                mozFilter: "opacity(" + options.opacity + ")",
                oFilter: "opacity(" + options.opacity + ")",
                msFilter: "opacity(" + options.opacity + ")",
                filter: "opacity(" + options.opacity + ")",
                webkitTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                mozTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                oTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                msTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                transform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                transition: "all " + effectDuration + "ms ease-out"
            })
        })
    }
});