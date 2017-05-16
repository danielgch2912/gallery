(function (globals) {

    var doc = document;
    var obj = {};
    var array = [];

    var uniqueId = 10;

    function getId() {
        return ++uniqueId;
    }

    function getStamp() {
        return "" + (++uniqueId) + (+new Date());
    }

    function hashCode(text) {
        var hash = 0;

        for (var i = text.length; i--;) {
            var chr = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }

        return hash;
    };

    var dataset = {};

    var notSpaceRegex = /[^\s]+/g;

    function strip(text) {
        return (text || "").match(notSpaceRegex);
    }

    function toMap(list) {
        var obj = {};
        for (var i = list.length; i--;)
            obj[list[i]] = 1;
        return obj;
    }

    function keys(obj) {
        var result = [];
        for (var key in obj)
            result.push(obj);
        return result;
    }

    // ************************************************************************************************************************

    var readyQueue = [];

    var readyInterval = setInterval(function () {
        if (doc.readyState == "complete") {
            
            clearInterval(readyInterval);
            
            while (readyQueue.length)
                readyQueue.pop()();
        }
    }, 50);

    // ************************************************************************************************************************

    var Q = globals.gQuery = function (selector) {
        return new Q.fn.init(selector);
    };

    var fn = Q.fn = Q.prototype = {};

    Q.extend = fn.extend = function (dst, _) {
        var length = arguments.length;
        dst = (dst || {});
        for (var i = 1; i < length; i++) {
            var src = arguments[i];
            for (var key in src)
                dst[key] = src[key];
        }
        return dst;
    };

    Q.isArray = function (arg) {
        if (Array)
            Q.isArray = function (x) { return x instanceof Array }
        else
            Q.isArray = function (x) { return (obj.toString.call(x) == "[object Array]") }

        return Q.isArray(arg);
    };

    Q.isFunction = function (arg) {
        return (typeof arg == "function");
    };

    // ************************************************************************************************************************

    function is(element, selector) {
        //
    }

    var tagOrIdRegex = /^#?\w+$/;

    function selectElements(selector) {
        if (tagOrIdRegex.test(selector)) {
            var element = null;
            if (selector.charAt(0) != "#") {
                // tag name selector
                return doc.getElementsByTagName(selector);
            }
            else {
                // id selector
                element = doc.getElementById(selector.slice(1));
                return (element ? [element] : []);
            }
        }
        else {
            return doc.querySelectorAll(selector);
        }
    }

    // ************************************************************************************************************************

    Q.each = fn.each = function (list, callback) {
        var isQ = (this instanceof Q);

        if (isQ || Q.isArray(list)) {

            if (isQ) {
                callback = list;
                list = this;
            }

            var length = list.length;
            for (var i = 0; i < length; i++) {
                var data = list[i];
                callback.call(data, i, data);
            }
        }
        else {
            for (var key in list) {
                var data = list[key];
                callback.call(data, key, data);
            }
        }
        return list;
    }
    
    Q.slice = function (obj, start, end) {
    	var ret = [];
    	for (var i = 0; i <= end - start; i++) {
    		ret[i] = obj[i + start];
    	}
    	
    	return ret;
    }

    Q.data = function () {
        throw "fazendo data generico";
    }

    // ************************************************************************************************************************

    var bindEvent = function (element, event, callback) {
        if (element.addEventListener)
            bindEvent = function (el, ev, cb) { el.addEventListener(ev, cb); }
        else
            bindEvent = function (el, ev, cb) { el.attachEvent("on" + ev, cb); }

        bindEvent(element, event, callback);
    }

    // ************************************************************************************************************************    

    fn.init = function (selector) {
        var elements;
        if (selector instanceof Q) {
            // already wrapped elements
            return selector;
        }

        if (typeof selector == "string") {
            // query selector
            elements = selectElements(selector);
        }
        else if (Q.isArray(selector)) {
            // array of elements
            elements = selector;
        }
        else {
            // single elements
            elements = [selector];
        }

        var T = this;
        T.length = elements.length;

        for (var i = T.length; i--;)
            T[i] = elements[i];
    }

    fn.init.prototype = fn;

    // ************************************************************************************************************************   \ 

    fn.ready = function (callback) {
        var first = this[0];
        if (first == doc)
            readyQueue.push(callback);
        return this;
    };

    fn.data = function (name, value) {
        var stamp = "rQ" + hashCode(name);

        if (arguments.length < 2) {
            var first = this[0];
            var attr = (first && first.getAttribute(stamp));
            var data = (attr && dataset[attr]);
            return (data && data.value);
        }

        return this.each(function () {
            var id = getId();
            dataset[id] = {
                element: this,
                value: value
            };
            this.setAttribute(stamp, id);
        });
    };

    fn.empty = function () {
        return this.each(function () {
            this.innerHTML = "";
        });
    };

    // ************************************************************************************************************************

    function addSpaces(list) {
        for (var i = list.length; i--;)
            list[i] = " " + list[i] + " ";
        return list;
    }

    fn.addClass = function (classes) {
        classes = addSpaces(strip(classes));
        var i, length = classes.length;
        return this.each(function () {
            var src = " " + this.className + " ";
            for (i = length; i--;) {
                var clss = classes[i];
                if (src.indexOf(clss) < 0)
                    src += clss.slice(1);
            }
            this.className = src.slice(1, -1);
        });
    };

    fn.removeClass = function (classes) {
        classes = addSpaces(strip(classes));
        var i, length = classes.length;
        return this.each(function () {
            var src = " " + this.className + " ";
            for (i = length; i--;)
                src = src.replace(classes[i], " ");
            this.className = src.slice(1, -1);
        });
    };

    fn.toggleClass = function (classes, toggle) {
        toggle = (toggle !== false);
        classes = addSpaces(strip(classes));
        var i, length = classes.length;
        return this.each(function () {
            var src = " " + this.className + " ";
            for (i = length; i--;) {
                var clss = classes[i];
                if (src.indexOf(clss) >= 0)
                    src = src.replace(clss, " ");
                else
                    src += clss.slice(1);
            }
            this.className = src.slice(1, -1);
        });
    };

    fn.hasClass = function (clss) {
        var first = this[0];
        return (first && (" " + first.className + " ").indexOf(" " + clss + " ") >= 0);
    };

    // ************************************************************************************************************************

    fn.offset = function () {
        throw "fazendo offset";
    };



    // ************************************************************************************************************************

    fn.is = function (selector) {
        throw "fazendo o is"
    };

    // on(event, callback)
    // on(event, data, callback)
    // on(event, selector, callback)
    // on(event, selector, data, callback)
    fn.on = function (_) {

        var args = array.slice.call(arguments),
            base = [null];

        base.push(args.shift());
        base.push(typeof args[0] == "string" ? args.shift() : null);
        base.push(typeof args[0] != "function" ? args.shift() : null);
        base.push(args.shift());

        return this.each(function () {
            var params = base.slice();
            params[0] = this;
            createBinding.apply(this, params);
        });
    };

    function createBinding(element, event, selector, data, callback) {

        var handler = function (e) {
            e = (e || window.event);
            var target = (e.target || e.srcElement);

            if (selector && !Q(target).is(selector))
                return;

            var event = fixEvent(e);

            event.target = target;
            event.data = data;

            callback(event);
        };

        bindEvent(element, event, handler);
    }

    var evtProps = ["target", "clientX", "clientY", "which"];

    function fixEvent(e) {
        var obj = {};

        for (var i = evtProps.length; i--;) {
            var key = evtProps[i];
            obj[key] = e[key];
        }

        obj.originalEvent = e;

        return obj;

    }

})(this);