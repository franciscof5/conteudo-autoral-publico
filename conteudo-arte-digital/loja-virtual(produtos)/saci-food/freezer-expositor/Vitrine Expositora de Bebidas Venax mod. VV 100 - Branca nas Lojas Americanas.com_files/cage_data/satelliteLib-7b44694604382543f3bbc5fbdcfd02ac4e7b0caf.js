// Dynamic Tag Management Library
// Property: 2 - Cage Aberto - ACOM
// All code and conventions are protected by copyright
// Adobe Systems Incorporated

(function(window, document, undefined) {
// Satellite
// =========
//
// Satellite *core*. Yeah, you want it.
//
// In this first section, we have a some useful utility functions.
var ToString = Object.prototype.toString

var Overrides = window._satellite && window._satellite.override

function assert(cond, msg){
  if (!cond){
    throw new Error(msg || "Assertion Failure")
  }
}

var SL = {
  initialized: false,

  // `$data(elm, prop, [val])`
  // ----------------------------
  //
  // Our own `$data()` method, [a la jQuery](http://api.jquery.com/jQuery.data/)
  // , used to get or set
  // properties on DOM elements without going insane.
  // `uuid` and `dataCache` are used by `$data()`
  //
  // Parameters:
  //
  // - `elm` - the element to get or set a property to
  // - `prop` - the property name
  // - `val` - the value of the property, if omitted, the method will
  //      return the existing value of the property, if any
  $data: function(elm, prop, val){
    if (!elm) return;
    var __satellite__ = '__satellite__'
    var cache = SL.dataCache
    var uuid = elm[__satellite__]
    if (!uuid) uuid = elm[__satellite__] = SL.uuid++
    var datas = cache[uuid]
    if (!datas) datas = cache[uuid] = {}
    if (val === undefined)
      return datas[prop]
    else
      datas[prop] = val
  },
  uuid: 1,
  dataCache: {},

  // `keys(object)`
  // --------------
  //
  // Return all keys of an object in an array.
  keys: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(key)
    return ret
  },

  // `values(object)`
  // ----------------
  //
  // Return all values of an object in an array.
  values: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(obj[key])
    return ret
  },

  // `isArray(thing)`
  // --------------
  //
  // Returns whether the given thing is an array.
  isArray: Array.isArray || function(thing){
    return ToString.apply(thing) === "[object Array]"
  },

  // `isObject(thing)`
  // -----------------
  //
  // Returns whether the given thing is a plain object.
  isObject: function(thing){
    return thing != null && !SL.isArray(thing) &&
      typeof thing === 'object'
  },

  // `isString(thing)`
  // -----------------
  //
  // Returns whether thing is a string
  isString: function(thing){
    return typeof thing === 'string'
  },

  // `isNumber(thing)`
  // -----------------
  //
  // Returns whether thing is a number
  isNumber: function(thing){
    return ToString.apply(thing) === '[object Number]' && !SL.isNaN(thing)
  },

  // `isNaN(thing)`
  // --------------
  //
  // Return whether thing is NaN
  isNaN: function(thing){
    return thing !== thing
  },

  // `isRegex(thing)`
  // ----------------
  //
  // Returns whether thing is a RegExp object
  isRegex: function(thing){
    return thing instanceof RegExp
  },

  // `isLinkTag(thing)`
  // ----------------
  //
  // Returns whether thing is a DOM link element
  isLinkTag: function(thing){
    return !!(thing && thing.nodeName &&
      thing.nodeName.toLowerCase() === 'a')
  },

  // `each(arr, func, [context])`
  // ------------------
  //
  // A handy method for array iteration wo having to write a for-loop.
  //
  // Parameters:
  //
  // - `arr` - an array
  // - `func(item, index, arr)` - a function which accepts each item in the array
  //      once. I takes these arguments
  //      * `item` - an item
  //      * `index` - the array index of said item
  //      * `arr` - the array
  // - `context` - the context to be bound to `func` when it is invoked
  each: function(arr, func, context){
    for (var i = 0, len = arr.length; i < len; i++)
      func.call(context, arr[i], i, arr)
  },

  // `map(arr, func)`
  // ----------------
  //
  // A handy method for mapping an array to another array using a 1-to-1 mapping
  // for each element
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each`, except that `func` is expected to return
  // a the value you want in the corresponding index of the returned array.
  map: function(arr, func, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++)
      ret.push(func.call(context, arr[i], i, arr))
    return ret
  },

  // `filter(arr, cond)`
  // -------------------
  //
  // Handy method for take an array and filtering down to a subset of the elements.
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each` except the second argument is `cond`
  // instead of `func` and it is expected to return a truthy value respresenting
  // whether to include this item in the return array or not.
  filter: function(arr, cond, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        ret.push(item)
    }
    return ret
  },

  // `any(arr, cond, context)`
  // -------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for any item in the array.
  any: function(arr, cond, context){
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return true
    }
    return false
  },

  // `every(arr, cond, context)`
  // ---------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for every item in the array.
  every: function(arr, cond, context){
    var retval = true
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      retval = retval && cond.call(context, item, i, arr)
    }
    return retval
  },

  // `contains(arr, obj)`
  // -----------------------
  //
  // Tells you whether an array contains an object.
  //
  // Parameters:
  //
  // - `arr` - said array
  // - `obj` - said object
  contains: function(arr, obj){
    return SL.indexOf(arr, obj) !== -1
  },

  // `indexOf(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  indexOf: function(arr, obj){
    if (arr.indexOf)
      return arr.indexOf(obj)
    for (var i = arr.length; i--;)
      if (obj === arr[i])
        return i
    return -1
  },


  // `find(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  find: function(arr, cond, context){
    var ret = []
    if (!arr) return null
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return item
    }
    return null
  },

  // `textMatch(str, str_or_regex)`
  // ------------------------------
  //
  // Perform a string match based on another string or a regex.
  //
  // Parameters:
  //
  // `str` - the input string to be matched
  // `str_or_regex` - the pattern to match against, if this is a string, it requires exact match, if
  //      it's a regex, then it will do regex match
  textMatch: function(str, pattern){
    if (pattern == null) throw new Error('Illegal Argument: Pattern is not present')
    if (str == null) return false
    if (typeof pattern === 'string') return str === pattern
    else if (pattern instanceof RegExp) return pattern.test(str)
    else return false
  },

  // `stringify(obj, [seenValues])`
  // ------------------------------
  //
  // Stringify any type of object.
  //
  // Parameters:
  //
  // `obj` - the object that needs to be stringified
  // `seenValues` - pool of parsed resources; used to avoid circular references;
  stringify: function(obj, seenValues){
    seenValues = seenValues || [];
    if (SL.isObject(obj)) {
      if (SL.contains(seenValues, obj)) {
        return '<Cycle>';
      } else {
        seenValues.push(obj);
      }
    }

    if (SL.isArray(obj)) {
      return '[' + SL.map(obj, function(value){
        return SL.stringify(value, seenValues)
      }).join(',') + ']';
    } else if (SL.isString(obj)) {
      return '"' + String(obj) + '"';
    } if (SL.isObject(obj)) {
      var data = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          data.push(prop + ': ' + SL.stringify(obj[prop], seenValues));
      }
      return '{' + data.join(', ') + '}';
    } else {
      return String(obj);
    }
  },

  // `trim(str)`
  // -----------
  //
  // Trims a string.
  //
  // Parameters:
  //
  // `str` - the input string to be trimmed.
  trim: function(str){
    if (str == null) return null
    if (str.trim){
      return str.trim()
    }else{
      return str.replace(/^ */, '').replace(/ *$/, '')
    }
  },

  // `bind(func, context)`
  // ---------------------
  //
  // Binds a context permanently to a context. The returned function is a new function
  // which - when called - will call the passed in function with `context` bound to it.
  //
  // Parameters:
  //
  // `func` - a function
  // `context` - an object to be bound as the context of this function
  bind: function(func, context) {
    return function() {
      return func.apply(context, arguments)
    }
  },

  // `throttle(fn, delay)`
  // ---------------------
  //
  // *Throttles* a function `fn` to be called no more than once during the interval
  // specified by `delay`.
  //
  // Parameters:
  //
  // - `fn` - a function
  // - `delay` - delay in milliseconds
  //
  // *Throttle function stolen from
  //     <http://remysharp.com/2010/07/21/throttling-function-calls/>*
  throttle: function(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  // `domReady(callback)`
  // --------------------
  //
  // Registers a callback to be called when the DOM is fully parsed and loaded.
  //
  // Parameters:
  //
  // - `callback` - a function to be called at `domready`
  //
  // *domReady is borrowed from <https://github.com/ded/domready>*
  domReady: (function (ready) {

    var fns = [], fn, f = false
      , doc = document
      , testEl = doc.documentElement
      , hack = testEl.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , addEventListener = 'addEventListener'
      , onreadystatechange = 'onreadystatechange'
      , loaded = /^loade|^c/.test(doc.readyState)

    function flush(f) {
      loaded = 1
      while (f = fns.shift()) f()
    }

    doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
      doc.removeEventListener(domContentLoaded, fn, f)
      flush()
    }, f)


    hack && doc.attachEvent(onreadystatechange, (fn = function () {
      if (/^c/.test(doc.readyState)) {
        doc.detachEvent(onreadystatechange, fn)
        flush()
      }
    }))

    return (ready = hack ?
      function (fn) {
        self != top ?
          loaded ? fn() : fns.push(fn) :
          function () {
            try {
              testEl.doScroll('left')
            } catch (e) {
              return setTimeout(function() { ready(fn) }, 50)
            }
            fn()
          }()
      } :
      function (fn) {
        loaded ? fn() : fns.push(fn)
      })
  }()),

  // `loadScript(url, [callback])`
  // -----------------------------
  //
  // Load an external script.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScript: function(url, callback){
    var script = document.createElement('script')
    SL.scriptOnLoad(url, script, callback)
    script.src = url
    document.getElementsByTagName('head')[0]
      .appendChild(script)
  },

  scriptOnLoad: function(url, script, callback){
    function cb(err){
      if (err) SL.logError(err)
      if (callback) callback(err)
    }
    if ('onload' in script){
      script.onload = function(){
        cb()
      }
      script.onerror = function(){
        cb(new Error('Failed to load script ' + url))
      }
    }else if ('readyState' in script){
      script.onreadystatechange = function(){
        var rs = script.readyState
        if (rs === 'loaded' || rs === 'complete'){
          script.onreadystatechange = null
          cb()
        }
      }
    }
  },

  // `loadScriptOnce(url, [callback])`
  // -----------------------------
  //
  // Load an external script only if it hasn't been loaded until now.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScriptOnce: function(url, callback){
    if (SL.loadedScriptRegistry[url]) return

    SL.loadScript(url, function(err) {
      if (!err) {
        SL.loadedScriptRegistry[url] = true
      }

      if (callback) callback(err)
    })
  },

  loadedScriptRegistry: {},

  // `loadScriptSync(url)`
  // -----------------------------
  //
  // Load an external script using document.write.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  loadScriptSync: function(url){
    if (!document.write) {
      SL.notify('Cannot load sync the "' + url + '" script because "document.write" is not available', 1)
      return
    }

    if (SL.domReadyFired){
      SL.notify('Cannot load sync the "' + url + '" script after DOM Ready.', 1)
      return
    }

    // If the url contains a double quote, it could be someone trying to switch out of the
    // attribute to introduce an XSS hack. On the other hand, it could just be that the URL
    // was never escaped. We'll escape it to prevent the former while supporting the latter.
    if (url.indexOf('"') > -1) {
      url = encodeURI(url);
    }

    document.write('<script src="' + url + '"></scr' + 'ipt>');
  },

  // `pushAsyncScript(callback)`
  // -------------------
  //
  // Called by an async custom user script.
  pushAsyncScript: function(cb){
    SL.tools['default'].pushAsyncScript(cb)
  },

  // `pushBlockingScript(callback)`
  // ------------------------------
  //
  // Called by a blocking custom user script.
  pushBlockingScript: function(cb){
    SL.tools['default'].pushBlockingScript(cb)
  },

  // `addEventHandler(elm, evt, callback)`
  // -------------------------------------
  //
  // Register an event handler for a element
  //
  // Parameters:
  //
  // - `elm` - the element in question
  // - `evt` - the event type to listen to
  // - `callback` - callback function
  addEventHandler: window.addEventListener ?
    function(node, evt, cb){ node.addEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.attachEvent('on' + evt, cb) },

  removeEventHandler: window.removeEventListener ?
    function(node, evt, cb){ node.removeEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.detachEvent('on' + evt, cb) },

  // `preventDefault(evt)`
  // ---------------------
  //
  // Prevent the default browser behavior for this event
  //
  // Parameters:
  //
  // `evt` - the event triggered
  preventDefault: window.addEventListener ?
    function(e){ e.preventDefault() } :
    function(e){ e.returnValue = false },

  // `stopPropagation(evt)`
  // ----------------------
  //
  // Cross-browser `stopPropagation`
  //
  // Parameters:
  //
  // `evt` - the event triggered
  stopPropagation: function(e){
    e.cancelBubble = true
    if (e.stopPropagation) e.stopPropagation()
  },

  // `containsElement(container, elm)`
  // ----------------------
  //
  // Given DOM elements `container` and `elm`, returns whether `container` contains `elm`.
  //
  // Parameters:
  //
  // `elm1` - the possible parent
  // `elm2` - the possible child
  containsElement: function(container, elm) {
    return container.contains ? container.contains(elm) :
      !!(container.compareDocumentPosition(elm) & 16);
  },

  // `matchesCss(css, elm)`
  // ----------------------
  //
  // Returns whether a DOM element matches a given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  // - `elm` - the element
  matchesCss: (function(docEl){

    function simpleTagMatch(selector, elm){
      var tagName = elm.tagName
      if (!tagName) return false
      return selector.toLowerCase() === tagName.toLowerCase()
    }

    var matches =
      docEl.matchesSelector ||
      docEl.mozMatchesSelector ||
      docEl.webkitMatchesSelector ||
      docEl.oMatchesSelector ||
      docEl.msMatchesSelector
    if (matches) {
      return function(selector, elm){
        if (elm === document || elm === window) return false
        try{
          return matches.call(elm, selector)
        }catch(e){
          return false
        }
      }
    } else if(docEl.querySelectorAll) {
      return function(selector, elm) {
        var parent = elm.parentNode
        if (!parent) return false
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          var nodeList = elm.parentNode.querySelectorAll(selector)
          for (var i = nodeList.length; i--;)
          if (nodeList[i] === elm) return true
        }catch(e){
          //
        }
        return false
      }
    }else{
      return function(selector, elm){
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          return SL.Sizzle.matches(selector, [elm]).length > 0
        }catch(e){
          return false
        }
      }
    }
  }(document.documentElement)),

  // `cssQuery(css)`
  // ---------------
  //
  // Return a list of element matching the given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  cssQuery: (function(doc){
    if (doc.querySelectorAll) {
      return function(css, cb){
        var results
        try{
          results = doc.querySelectorAll(css)
        }catch(e){
          results = []
        }
        cb(results)
      }
    }else{
      return function(css, cb){
        if (SL.Sizzle){
          var results
          try{
            results = SL.Sizzle(css)
          }catch(e){
            results = []
          }
          cb(results)
        }else
          SL.sizzleQueue.push([css, cb])
      }
    }
  })(document),

  // `hasAttr(elem, attrName)`
  // ---------------
  //
  // Check if attribute is defined on element
  //
  // Parameters:
  //
  // - `elem` - the DOM element
  // - `attrName` - attribute name
  hasAttr: function(elem, attrName) {
    return elem.hasAttribute ? elem.hasAttribute(attrName) : elem[attrName] !== undefined;
  },

  // `inherit(subClass, superClass)`
  // -------------------------------
  //
  // Make `subClass` inherit `superClass`.
  //
  // Parameters:
  //
  // - `subClass` - a Javascript function representing a constructor - the inheritor
  // - `superClass` - another constructor - the one to inherit from
  inherit: function(subClass, superClass){
    var f = function() {}
    f.prototype = superClass.prototype
    subClass.prototype = new f()
    subClass.prototype.constructor = subClass
  },

  // `extend(dst, src)`
  // ----------------
  //
  // Extend an object with the properties of another.
  //
  // Parameters:
  //
  // - `dst` - object to copy to
  // - `src` - object to copy from
  extend: function(dst, src){
    for (var prop in src)
      if (src.hasOwnProperty(prop))
        dst[prop] = src[prop]
  },

  // `toArray(arrayLike)`
  // --------------------
  //
  // Converts an array-like object to an array.
  //
  // Parameters:
  //
  // - `arrayLike` - an array-like object, meaning it has a length property
  //   which is a number
  toArray: (function(){
    try {
      var slice = Array.prototype.slice
      slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
      return function(thing){
        return slice.call(thing, 0)
      }
    // Provide a fallback method if it does not work
    } catch( e ) {
      return function(thing){
        var ret = []
        for (var i = 0, len = thing.length; i < len; i++)
          ret.push(thing[i])
        return ret
      }
    }
  })(),

  // `equalsIgnoreCase(str1, str2)`
  // ------------------------------
  //
  // Returns true iff str1 and str2 are equal ignoring case.
  //
  // Parameters:
  //
  // * `str1` - the first string
  // * `str2` - the second string
  equalsIgnoreCase: function(str1, str2){
    if (str1 == null) return str2 == null
    if (str2 == null) return false
    return String(str1).toLowerCase() === String(str2).toLowerCase()
  },

  // `poll(fn, [freq], [max_retries])`
  // ------------------
  //
  // Runs `fn` for every `freq` ms. `freq` defaults to 1000. If any
  // invocation of `fn()` returns true, polling will stop.
  // The polling will stop if the number or retries exceeds the
  // provided `max_retries`.
  //
  // Parameters:
  //
  // * `fn` - function to be called repeatedly
  // * `freq` - frequency to call the function
  // * `max_retries` - number of times to retry
  poll: function(fn, freq, max_retries){
    var retries = 0

    freq = freq || 1000
    check()

    function check(){
      if (SL.isNumber(max_retries) && retries++ >= max_retries) {
        return;
      }

      if (!fn()){
        setTimeout(check, freq)
      }
    }
  },
  // ``Html(str)`
  // --------------------
  //
  // Escapes a string for being used in an HTML context. Returns
  // the escaped version of the string. Replaces the characters
  // `&` `<` `>` `"` `'` and `/`.
  //
  // Parameters:
  //
  // * `str` - the string to be escaped
  escapeForHtml: function(str){
    if (!str) return str
    return String(str)
      .replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
  }
}

// The available tools to use.
SL.availableTools = {}

// The avaliable event emitters to use.
SL.availableEventEmitters = []

// The names of the events which can only fire once.
SL.fireOnceEvents = ['condition', 'elementexists']

// Initialize all event emitters.
SL.initEventEmitters = function(){
  SL.eventEmitters = SL.map(SL.availableEventEmitters, function(ee){
    return new ee()
  })
}

// Call `registerElements` on all event emitters.
SL.eventEmitterBackgroundTasks = function(){
  SL.each(SL.eventEmitters, function(ee){
    if ('backgroundTasks' in ee)
      ee.backgroundTasks()
  })
}

// Initialize all tools.
SL.initTools = function(toolSpecs){
  var tools = { 'default': new DefaultTool() }
  var euCookieName = SL.settings.euCookieName || 'sat_track'
  for (var id in toolSpecs){
    if(toolSpecs.hasOwnProperty(id)) {
      var toolSpec, ctr, tool
      toolSpec = toolSpecs[id]
      if (toolSpec.euCookie){
        var cookieSet = SL.readCookie(euCookieName) !== 'true'
        if (cookieSet) continue
      }
      ctr = SL.availableTools[toolSpec.engine]
      if (!ctr){
        var available = []
        for (var key in SL.availableTools){
          if (SL.availableTools.hasOwnProperty(key)) {
            available.push(key)  
          }
        }
        throw new Error('No tool engine named ' + toolSpec.engine +
          ', available: ' + available.join(',') + '.')
      }
      tool = new ctr(toolSpec)
      tool.id = id
      tools[id] = tool
    }
  }
  return tools
}

// Pre-process arguments (variable substitutions and lower-casing) before
// feeding them to the tools.
SL.preprocessArguments = function(args, elm, evt, forceLowerCase, escapeHtml){
  if (!args) return args
  return preprocessArray(args, forceLowerCase)
  function forceLowerCaseIfNeeded(value) {
    return forceLowerCase && SL.isString(value) ? value.toLowerCase() : value
  }

  function preprocessObject(obj){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        var value = obj[key]
        if (SL.isObject(value)){
          ret[key] = preprocessObject(value)
        }else if (SL.isArray(value)){
          ret[key] = preprocessArray(value, forceLowerCase)
        }else{
          ret[key] = forceLowerCaseIfNeeded(SL.replace(value, elm, evt, escapeHtml))
        }
      }
    }
    return ret
  }

  function preprocessArray(args, forceLowerCase){
    var ret = []
    for (var i = 0, len = args.length; i < len; i++){
      var value = args[i]
      if (SL.isString(value)){
        value = forceLowerCaseIfNeeded(SL.replace(value, elm, evt))
      }else if (value && value.constructor === Object){
        value = preprocessObject(value)
      }
      ret.push(value)
    }
    return ret
  }

}

// Execute a command.
SL.execute = function(trig, elm, evt, tools){
  if (_satellite.settings.hideActivity) return
  tools = tools || SL.tools

  function doit(toolName){
    var tool = tools[toolName || 'default']
    if (!tool)
      return
    try{
      tool.triggerCommand(trig, elm, evt)
    }catch(e){
      SL.logError(e)
    }
  }
  if (trig.engine){
    var engine = trig.engine
    for (var toolName in tools){
      if (tools.hasOwnProperty(toolName)) {
        var tool = tools[toolName]
        if (tool.settings && tool.settings.engine === engine)
          doit(toolName)
      }
    }
  }else if (trig.tool instanceof Array)
    SL.each(trig.tool, function(toolName){
      doit(toolName)
    })
  else
    doit(trig.tool)
}

// Wrapper object that handles Satellite internal logging.
//
// It saves all messages for future reference (up to `keepLimit`, default 100) and
// outputs to browser's console if `_satellite.settings.notifications` is `true`.
// -----------------------------------------------------
SL.Logger = {
  outputEnabled: false,

  messages: [],
  keepLimit: 100,
  flushed: false,

  // @fixme: remove first 2 items when legacy code is updated
  LEVELS: [null, null, 'log', 'info', 'warn', 'error'],

  // `lvl` should be the index of a level defined in `LEVELS`
  message: function(msg, lvl) {
    var level = this.LEVELS[lvl] || 'log';

    this.messages.push([level, msg]);
    if (this.messages.length > this.keepLimit) {
      this.messages.shift();
    }

    if (this.outputEnabled) {
      this.echo(level, msg)
    }
  },

  getHistory: function() {
    return this.messages;
  },

  clearHistory: function() {
    this.messages = [];
  },

  setOutputState: function(state) {
    if (this.outputEnabled == state) return;

    this.outputEnabled = state;
    if (state) {
      this.flush();
    } else {
      this.flushed = false;
    }
  },

  // Private
  // ----------------------------------------
  echo: function(func, msg) {
    if (!window.console) return;
    window.console[func]("SATELLITE: " + msg);
  },

  flush: function() {
    if (this.flushed) return;

    SL.each(this.messages, function(item) {
      if (item[2] === true) return; // message already flushed
      this.echo(item[0], item[1]);
      item[2] = true;
    }, this);
    this.flushed = true;
  }
};

// `notify(msg, pty)`
// ------------------
//
// Notify the user of things happening in Satellite using `console.log`
//
// - msg - message to print
// - pty - priority
SL.notify = SL.bind(SL.Logger.message, SL.Logger);

// `cleanText(str)`
// ================
//
// "Cleans" the text from an element's innerText. This is used directly by the
// @cleanText special property.
SL.cleanText = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s+/g, ' ')
}

SL.cleanText.legacy = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s{2,}/g, ' ')
    .replace(/[^\000-\177]*/g, '')
}

SL.text = function(obj){
  return obj.textContent || obj.innerText
}

// Special Properties for DOM elements. You use special properties using
// the @ prefix. Example:
//
//     this.@text
SL.specialProperties = {
  text: SL.text,
  cleanText: function(obj){
    return SL.cleanText(SL.text(obj))
  }
}

// `getObjectProperty(obj, property)`
// ============================
//
// Get property(potentially nested) from an object.
SL.getObjectProperty = function(obj, property, supportSpecial){
  var propChain = property.split('.')
  var currValue = obj
  var special = SL.specialProperties
  var attrMatch
  for (var i = 0, len = propChain.length; i < len; i++){
    if (currValue == null) return undefined
    var prop = propChain[i]
    if (supportSpecial && prop.charAt(0) === '@'){
      var specialProp = prop.slice(1)
      currValue = special[specialProp](currValue)
      continue
    }
    if (currValue.getAttribute &&
      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))){
      var attr = attrMatch[1]
      currValue = currValue.getAttribute(attr)
      continue
    }
    currValue = currValue[prop]
  }
  return currValue
}

// `getToolsByType(type)`
// ------------------------------------------------
//
// Returns an array containing all the tools whose engine property match
// the provided type.
//
// - `type` - The searched tool type
SL.getToolsByType = function(type){
  if (!type) {
    throw new Error('Tool type is missing')
  }

  var result = []
  for (var t in SL.tools) {
    if (SL.tools.hasOwnProperty(t)) {
      var tool = SL.tools[t]
      if (tool.settings && tool.settings.engine === type) {
        result.push(tool)
      }
    }
  }

  return result
}

// `setVar(name, value)` or `setVar(mapping)`
// ==========================================
//
// Set a customer variable. Can be either called like this
//
//     _satellite.setVar('name', 'value')
//
// Or by passing in a mapping(object literall) which allows setting multiple variables at
// the same time.
//
//     _satellite.setVar({name: 'value', foo: 'bar'})
SL.setVar = function(){
  var customVars = SL.data.customVars
  if(customVars == null) SL.data.customVars = {}, customVars = SL.data.customVars
  if (typeof arguments[0] === 'string'){
    var prop = arguments[0]
    customVars[prop] = arguments[1]
  }else if (arguments[0]){ // assume an object literal
    var mapping = arguments[0]
    for (var key in mapping)
      if (mapping.hasOwnProperty(key))
        customVars[key] = mapping[key]
  }
}

SL.dataElementSafe = function(key, length){
  if (arguments.length > 2){
    // setter
    var value = arguments[2]
    if (length === 'pageview'){
      SL.dataElementSafe.pageviewCache[key] = value
    }else if (length === 'session'){
      SL.setCookie('_sdsat_' + key, value)
    }else if (length === 'visitor') {
      SL.setCookie('_sdsat_' + key, value, 365 * 2)
    }
  }else{
    // getter
    if (length === 'pageview'){
      return SL.dataElementSafe.pageviewCache[key]
    }else if (length === 'session' || length === 'visitor'){
      return SL.readCookie('_sdsat_' + key)
    }
  }
}
SL.dataElementSafe.pageviewCache = {}

SL.realGetDataElement = function(dataDef){
  var ret
  if (dataDef.selector) {
    if (SL.hasSelector) {
      SL.cssQuery(dataDef.selector, function(elms) {
        if (elms.length > 0) {
          var elm = elms[0]
          if (dataDef.property === 'text') {
            ret = elm.innerText || elm.textContent
          }else if (dataDef.property in elm){
            ret = elm[dataDef.property]
          }else if (SL.hasAttr(elm, dataDef.property)){
            ret = elm.getAttribute(dataDef.property)
          }
        }
      })
    }
  }else if (dataDef.queryParam) {
    if (dataDef.ignoreCase){
      ret = SL.getQueryParamCaseInsensitive(dataDef.queryParam)
    }else{
      ret = SL.getQueryParam(dataDef.queryParam)
    }
  }else if (dataDef.cookie) {
    ret = SL.readCookie(dataDef.cookie)
  }else if (dataDef.jsVariable) {
    ret = SL.getObjectProperty(window, dataDef.jsVariable)
  }else if (dataDef.customJS) {
    ret = dataDef.customJS()
  }else if (dataDef.contextHub) {
    ret = dataDef.contextHub()
  }
  if (SL.isString(ret) && dataDef.cleanText){
    ret = SL.cleanText(ret)
  }
  return ret
}

SL.getDataElement = function(variable, suppressDefault, dataDef) {
  dataDef = dataDef || SL.dataElements[variable]
  if (dataDef == null) {
    return SL.settings.undefinedVarsReturnEmpty ? '' : null; 
  }
  var ret = SL.realGetDataElement(dataDef)
  if (ret === undefined && dataDef.storeLength) {
    ret = SL.dataElementSafe(variable, dataDef.storeLength)
  }else if (ret !== undefined && dataDef.storeLength) {
    SL.dataElementSafe(variable, dataDef.storeLength, ret)
  }
  if (!ret && !suppressDefault) {
    ret = dataDef['default'] || ''
  }
  if (SL.isString(ret) && dataDef.forceLowerCase) {
    ret = ret.toLowerCase()
  }
  return ret
}

// getVar(variable, elm, evt)
// ==========================
//
// Return the value of a variable, where the variable
// can be a data element, defined in the "data" section
// of the initial settings, or reference properties on
// an element, event, or target of the event in question,
// a query parameter, or a random number.
//
// - `variable` - the name of the variable to get
// - `[elm]` - the associated element, if any
// - `[evt]` - the associated event, if any
SL.getVar = function(variable, elm, evt){
  var custVars = SL.data.customVars
    , target = evt ? (evt.target || evt.srcElement) : null
    , randMatch
    , value
  var map = {
    uri: SL.URI(),
    protocol: document.location.protocol,
    hostname: document.location.hostname
  }
  if (SL.dataElements && variable in SL.dataElements){
    return SL.getDataElement(variable)
  }
  value = map[variable.toLowerCase()]
  if (value === undefined){
    if (variable.substring(0, 5) === 'this.'){
      variable = variable.slice(5)
      value = SL.getObjectProperty(elm, variable, true)
    }else if(variable.substring(0, 6) === 'event.'){
      variable = variable.slice(6)
      value = SL.getObjectProperty(evt, variable)
    }else if(variable.substring(0, 7) === 'target.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(target, variable)
    }else if(variable.substring(0, 7) === 'window.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(window, variable)
    }else if (variable.substring(0, 6) === 'param.'){
      variable = variable.slice(6)
      value = SL.getQueryParam(variable)
    }else if(randMatch = variable.match(/^rand([0-9]+)$/)){
      var len = Number(randMatch[1])
        , s = (Math.random() * (Math.pow(10, len) - 1)).toFixed(0)
      value = Array(len - s.length + 1).join('0') + s
    }else{
      value = SL.getObjectProperty(custVars, variable)
    }
  }
  return value
}

SL.getVars = function(variables, elm, evt){
  var ret = {}
  SL.each(variables, function(variable){
    ret[variable] = SL.getVar(variable, elm, evt)
  })
  return ret
}

// `replace(str, [elm], [target])`
// ---------------------
//
// Perform variable subtitutions substitute to a string where subtitions are
// specified in the form `"%foo%"`. Variables are lookup either in `SL.data.customVars`, or
// if the `elm` parameter is passed it, and the variable spec is of the form `"%this.tagName%"`, it
// is subsituted with the properties on `elm`, *i.e. `elm.tagName`.
//
// Parameters:
//
// - `str` - string to apply substitutions to
// - `elm`(optional) - object or element to use for substitutions of the form `%this.property%`
// - `target`(optional) - element to use for subsitution of the form `%target.property%`
// - `escapeHtml` (optional) - whether or not to escape substitutions for embedding in HTML
SL.replace = function(str, elm, evt, escapeHtml) {
  if (typeof str !== 'string') return str
  return str
    .replace(/%(.*?)%/g, function(m, variable){
      var val = SL.getVar(variable, elm, evt)
      if (val == null) {
        return SL.settings.undefinedVarsReturnEmpty ? '' : m; 
      } else {
        if (escapeHtml) {
          return SL.escapeForHtml(val);
        } else {
          return val;
        }
      }
    });
}

SL.escapeHtmlParams = function(fn){
  fn.escapeHtml = true
  return fn
}

// From a object literal of variable, generate a query string.
SL.searchVariables = function(vars, elm, evt){
  if (!vars || vars.length === 0) return ''
  var qsParts = []
  for (var i = 0, len = vars.length; i < len; i++){
    var varr = vars[i]
      , value = SL.getVar(varr, elm, evt)
       qsParts.push(varr + '=' + escape(value))
  }
  return '?' + qsParts.join('&')
}

// Fire all the trigger actions associated with a rule.
SL.fireRule = function(rule, elm, evt){
  var triggers = rule.trigger
  if (!triggers) return
  for (var i = 0, len = triggers.length; i < len; i++){
    var trig = triggers[i]
    SL.execute(trig, elm, evt)
  }
  if (SL.contains(SL.fireOnceEvents, rule.event))
    rule.expired = true
}

// `isLinked(elm)`
// ---------------
//
// Returns whether the element is either an anchor or a descendant of an anchor or contains an anchor.
//
// `elm` - the element to test
SL.isLinked = function(elm){
  for (var cur = elm; cur; cur = cur.parentNode) {
    if (SL.isLinkTag(cur))
      return true
  }
  return false
}

// Fire a page load event. `type` is one of `pagetop`, `pagebottom`, `domready` and
// `windowload`.
SL.firePageLoadEvent = function(type) {
  var location = document.location
  var evt = {type: type, target: location}
  var rules = SL.pageLoadRules
  var handlers = SL.evtHandlers[evt.type];
  for (var i = rules.length; i--;){
    var rule = rules[i]
    if (SL.ruleMatches(rule, evt, location)){
      SL.notify('Rule "' + rule.name + '" fired.', 1)
      SL.fireRule(rule, location, evt)
    }
  }
  for (var id in SL.tools){
    if (SL.tools.hasOwnProperty(id)) {
      var tool = SL.tools[id]
      if (tool.endPLPhase) {
        tool.endPLPhase(type)
      }
    }
  }
  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }
}

// `track(id)`
// -----------
//
// Directly fire a direct call rule by id.
SL.track = function(ruleName) {
  // trim extra spaces that may exist at beginning or end of string
  ruleName = ruleName.replace(/^\s*/,"").replace(/\s*$/,"")
  for (var i = 0; i < SL.directCallRules.length; i++){
    var rule = SL.directCallRules[i]
    if (rule.name === ruleName){
      SL.notify('Direct call Rule "' + ruleName + '" fired.', 1)
      SL.fireRule(rule, location, {type: ruleName})
      return
    }
  }
  SL.notify('Direct call Rule "' + ruleName + '" not found.', 1)
}

// `basePath()`
// ------------
//
// Returns the base path of all Satellite generated assets.
SL.basePath = function(){
  if (SL.data.host)
    return (document.location.protocol === 'https:' ?
    'https://' + SL.data.host.https :
    'http://' + SL.data.host.http) + '/'
  else
    return this.settings.basePath
}

// `setLocation(url)`
// ------------------
//
// Set the current URL
//
// - `url` - the URL to set to
SL.setLocation = function(url){
  window.location = url
}

SL.parseQueryParams = function(str){
  var URIDecode = function (str) {
    var result = str
    try {
      result = decodeURIComponent(str)
    } catch(err) {}

    return result
  }

  if (str === '' || SL.isString(str) === false) return {}
  if (str.indexOf('?') === 0) {
    str = str.substring(1)
  }
  var ret = {}
    , pairs = str.split('&')
  SL.each(pairs, function(pair){
    pair = pair.split('=')
    if (!pair[1]) {
      return
    }
    ret[URIDecode(pair[0])] = URIDecode(pair[1])
  })
  return ret
}

SL.getCaseSensitivityQueryParamsMap = function (str) {
  var normal = SL.parseQueryParams(str)
  var insensitive = {}

  for (var prop in normal)
    if (normal.hasOwnProperty(prop))
      insensitive[prop.toLowerCase()] = normal[prop]

  return {
    normal: normal,
    caseInsensitive: insensitive
  }
}

SL.updateQueryParams = function(){
  SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search)
}
SL.updateQueryParams()

SL.getQueryParam = function(key){
  return SL.QueryParams.normal[key]
}

SL.getQueryParamCaseInsensitive = function(key){
  return SL.QueryParams.caseInsensitive[key.toLowerCase()]
}

SL.encodeObjectToURI = function(obj) {
  if (SL.isObject(obj) === false) {
    return ''
  }

  var uri = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }

  return uri.join('&')
}

SL.readCookie = function(name) {
  var nameEQ = name + "="
  var parts = document.cookie.split(';')
  for(var i=0;i < parts.length;i++) {
    var c = parts[i]
    while (c.charAt(0)==' '){
      c = c.substring(1,c.length)
    }
    if (c.indexOf(nameEQ) === 0){
      return c.substring(nameEQ.length,c.length)
    }
  }
  return undefined
}

SL.setCookie = function(name,value,days) {
  var expires
  if (days) {
    var date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    expires = "; expires="+date.toGMTString()
  }
  else{
    expires = ""
  }
  document.cookie = name+"="+value+expires+"; path=/"
}

SL.removeCookie = function(name) {
  SL.setCookie(name,"",-1);
}


SL.getElementProperty = function(elm, prop){
  if (prop.charAt(0) === '@'){
    var special = SL.specialProperties[prop.substring(1)]
    if (special){
      return special(elm)
    }
  }
  if (prop === 'innerText'){
    return SL.text(elm)
  }
  if (prop in elm)
    return elm[prop]
  return elm.getAttribute ? elm.getAttribute(prop) : undefined
}

SL.propertiesMatch = function(property, elm){
  if (property){
    for (var prop in property){
      if (property.hasOwnProperty(prop)) {
        var target = property[prop]
        var value = SL.getElementProperty(elm, prop)
        if (typeof target === 'string' && target !== value) return false
        if (target instanceof RegExp && !target.test(value)) return false
      }
    }
  }
  return true
}

// from http://www.quirksmode.org/js/events_properties.html
SL.isRightClick = function(e){
  var ret
  if (e.which){
    ret = e.which == 3
  }else if (e.button){
    ret = e.button == 2
  }
  return ret
}

// `ruleMatches(rule, evt, elm, eventEntriesFound)`
// ------------------------------------------------
//
// - `rule` - the rules to match
// - `evt` - the event triggered
// - `elm` - the element the event was on
// - `eventEntriesFound` - number of rules matched so far
SL.ruleMatches = function(rule, evt, elm, eventEntriesFound){
  var cnd = rule.condition
  var cnds = rule.conditions
  var property = rule.property
  var eventType = evt.type
  var matchValue = rule.value
  var target = evt.target || evt.srcElement
  var initialTarget = elm === target

  if (rule.event !== eventType && (rule.event !== 'custom' || rule.customEvent !== eventType)) return false
  if (!SL.ruleInScope(rule)) return false
  // ignore all right-clicks
  if (rule.event === 'click' && SL.isRightClick(evt)){
    return false
  }
  if (rule.isDefault && eventEntriesFound > 0)
    return false
  if (rule.expired) return false
  if (eventType === 'inview' && evt.inviewDelay !== rule.inviewDelay){
    return false
  }
  if (!(initialTarget ||
          ((rule.bubbleFireIfParent !== false) && (eventEntriesFound === 0 || (rule.bubbleFireIfChildFired !== false))))) return false

  if (rule.selector && !SL.matchesCss(rule.selector, elm)) return false
  if (!SL.propertiesMatch(property, elm)) return false
  if (matchValue != null){
    if (typeof matchValue === 'string'){
      if (matchValue !== elm.value)
        return false
    }else if (!matchValue.test(elm.value))
      return false
  }
  if (cnd){
    try{
      if (!cnd.call(elm, evt, target)){
        SL.notify('Condition for rule "' + rule.name + '" not met.', 1)
        return false
      }
    }catch(e){
      SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
      return false
    }
  }
  if (cnds){
    var failed = SL.find(cnds, function(cnd){
      try{
        return !cnd.call(elm, evt, target)
      }catch(e){
        SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
        return true
      }
    })
    if (failed){
      SL.notify('Condition ' + failed.toString() + ' for rule "' + rule.name + '" not met.', 1)
      return false
    }
  }
  return true
}


SL.evtHandlers = {}
// `bindEvent(evtName, callback)`
// ------------------------------
//
// Register for an event by name. Alias: `whenEvent`.
//
// `evtName` - the name of the event
// `callback` - the function to be called when even fires
SL.bindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName])
    handlers[evtName] = []
  handlers[evtName].push(callback)
}
SL.whenEvent = SL.bindEvent

// `unbindEvent(evtName, callback)
// -------------------------------
//
// Unregister for an event by name.
//
// `evtName` - the name of the event
// `callback` - the function to unregister
SL.unbindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName]) return
  var idx = SL.indexOf(handlers[evtName], callback)
  handlers[evtName].splice(idx, 1)
}

SL.bindEventOnce = function(evtName, callback){
  var wrapped = function(){
    SL.unbindEvent(evtName, wrapped)
    callback.apply(null, arguments)
  }
  SL.bindEvent(evtName, wrapped)
}

// See <http://tobyho.com/2014/02/26/attribute-only-valid-on-v-image/>
SL.isVMLPoisoned = function(elm){
  if (!elm) return false
  try{
    elm.nodeName
  }catch(e){
    if (e.message === 'Attribute only valid on v:image'){
      return true
    }
  }
  return false
}

SL.handleEvent = function(evt) {
  // Don't process an event twice.
  if (SL.$data(evt, 'eventProcessed')) return

  var eventType = evt.type.toLowerCase()
    , target = evt.target || evt.srcElement
    , rulesMatched = 0
    , rules = SL.rules
    , tools = SL.tools
    , handlers = SL.evtHandlers[evt.type]

  if (SL.isVMLPoisoned(target)){
    SL.notify('detected ' + eventType + ' on poisoned VML element, skipping.', 1)
    return
  }

  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }

  var nodeName = target && target.nodeName;
  if (nodeName)
    SL.notify("detected " + eventType + " on " + target.nodeName, 1)
  else
    SL.notify("detected " + eventType, 1)

  for (var curr = target; curr; curr = curr.parentNode) {
    var bubbleStop = false
    SL.each(rules, function(rule){
      if (SL.ruleMatches(rule, evt, curr, rulesMatched)){
        SL.notify('Rule "' + rule.name + '" fired.', 1)
        SL.fireRule(rule, curr, evt)
        rulesMatched++
        if (rule.bubbleStop)
          bubbleStop = true
      }
    })
    if (bubbleStop) break
  }


  SL.$data(evt, 'eventProcessed', true)
}

// `onEvent(evt)`
// ------------
//
// Handle an event, whether it is a DOM event or a synthetic event.
//
// - `evt` - the event triggered
SL.onEvent = document.querySelectorAll ?
function(evt){ SL.handleEvent(evt) } :
(function(){
  var q = []
  var onEvent = function(evt) {
    if (evt.selector)
      q.push(evt)
    else
      SL.handleEvent(evt)
  }
  onEvent.pendingEvents = q
  return onEvent
})()

// `fireEvent(eventType, eventTarget)`
// ------------
//
// Conviniently programmatically fire an event.
//
// - `eventType` - the type of event
// - `eventTarget` - the target object that fired the event
SL.fireEvent = function(type, target){
  SL.onEvent({type: type, target: target})
}

// `registerEvents(elm, events)`
// -----------------------------
//
// Register events for an element using `track` as the callback
//
// - `elm` - the element to listen for events on
// - `events` - an array of event types (strings)
SL.registerEvents = function(elm, events){
  for (var i = events.length - 1; i >= 0; i--){
    var event = events[i]
    if (!SL.$data(elm, event + '.tracked')){
      SL.addEventHandler(elm, event, SL.onEvent)
      SL.$data(elm, event + '.tracked', true)
    }
  }
}

// `registerEventsForTags(tags, events)`
// -------------------------------------
//
// Register events for all element that have the specified tags
//
// - `tags` - an array of tags to match for (strings)
// - `events` - an array of event types (strings)
SL.registerEventsForTags = function(tags, events){
  for (var i = tags.length - 1; i >= 0; i--){
    var tag = tags[i]
    var elms = document.getElementsByTagName(tag);
    for (var j = elms.length - 1; j >= 0; j--)
      SL.registerEvents(elms[j], events)
  }
}

// `setListeners()`
// ----------------
//
// Set events for `document`
SL.setListeners = function() {
  var events = ['click', 'submit'];

  SL.each(SL.rules, function(rule) {
    if (rule.event === 'custom' &&
        rule.hasOwnProperty('customEvent') &&
        !SL.contains(events, rule.customEvent)) {
      events.push(rule.customEvent);
    }
  });

  SL.registerEvents(document, events);
};

// `getUniqueRuleEvents()`
// -----------------------
//
// Returns an array of unique event types for which event-based rules
// have been configured.
SL.getUniqueRuleEvents = function() {
  if (!SL._uniqueRuleEvents) {
    SL._uniqueRuleEvents = [];
    SL.each(SL.rules, function(rule) {
      if (SL.indexOf(SL._uniqueRuleEvents, rule.event) === -1) {
        SL._uniqueRuleEvents.push(rule.event);
      }
    });
  }

  return SL._uniqueRuleEvents;
};

// `setFormListeners()`
// --------------------
//
// Listen for events on form elements. Listeners for these events are added directly to form
// elements since they don't bubble (though some do in modern browsers).
SL.setFormListeners = function() {
  if (!SL._relevantFormEvents) {
    var formEvents = [
      "change",
      "focus",
      "blur",
      // Why do we add event listeners directly to form elements for the keypress event? The
      // keypress event bubbles so we could add it directly to document. Note that keypress
      // events can be triggered when any element has focus which means that by adding the event
      // listener directly to form elements we're filtering any keypress events from other elements.
      // Is this the intention? If so, we could still add a single listener directly to document
      // and filter on event.target.nodeName.
      "keypress"
    ];

    SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(formEvents, event) !== -1;
    });
  }

  if (SL._relevantFormEvents.length) {
    SL.registerEventsForTags(['input', 'select', 'textarea', 'button'], SL._relevantFormEvents);
  }
};

// `setVideoListeners()`
// ---------------------
//
// Listen for events on video elements. Listeners for these events are added directly to form
// elements since they don't bubble.
SL.setVideoListeners = function() {
  if (!SL._relevantVideoEvents) {
    var videoEvents = [
      "play",
      "pause",
      "ended",
      "volumechange",
      "stalled",
      "loadeddata"
    ];

    SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(videoEvents, event) !== -1;
    });
  }

  if (SL._relevantVideoEvents.length) {
    SL.registerEventsForTags(['video'], SL._relevantVideoEvents);
  }
};

// `readStoredSetting(name)`
// ==================
//
// Reads the cookie of the given name.
// Stolen from <http://www.quirksmode.org/js/cookies.html>
SL.readStoredSetting = function(name) {
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try{
    name = 'sdsat_' + name
    return window.localStorage.getItem(name)
  }catch(e){
    SL.notify('Cannot read stored setting from localStorage: ' + e.message, 2)
    return null
  }
}

// Read satelliteUtilsCookie values to see about getting bookmarklet running / settings
SL.loadStoredSettings = function () {
  var debug = SL.readStoredSetting('debug')
    , hideActivity = SL.readStoredSetting('hide_activity')
  if (debug)
    SL.settings.notifications = debug === 'true'
  if (hideActivity)
    SL.settings.hideActivity = hideActivity === 'true'
}

SL.isRuleActive = function(rule, date){
  var schd = rule.schedule
  if (!schd) return true

  var utc = schd.utc
    , getDate = utc ? 'getUTCDate' : 'getDate'
    , getDay = utc ? 'getUTCDay' : 'getDay'
    , getFullYear = utc ? 'getUTCFullYear' : 'getFullYear'
    , getMonth = utc ? 'getUTCMonth' : 'getMonth'
    , getHours = utc ? 'getUTCHours' : 'getHours'
    , getMinutes = utc ? 'getUTCMinutes' : 'getMinutes'
    , setHours = utc ? 'setUTCHours' : 'setHours'
    , setMinutes = utc ? 'setUTCMinutes' : 'setMinutes'
    , setDate = utc ? 'setUTCDate' : 'setDate'

  date = date || new Date()

  function dayDiff(one, other){
    other = modifyDate(other, {
      hour: one[getHours](),
      minute: one[getMinutes]()
    })
    return Math.floor(Math.abs((one.getTime() - other.getTime()) / (1000 * 60 * 60 * 24)))
  }
  function monthDiff(one, other){
    function months(date){
      return date[getFullYear]() * 12 + date[getMonth]()
    }
    return Math.abs(months(one) - months(other))
  }
  function modifyDate(date, fields){
    var retval = new Date(date.getTime())
    for (var field in fields){
      if (fields.hasOwnProperty(field)) {
        var val = fields[field]
        switch(field){
          case 'hour':
            retval[setHours](val)
            break
          case 'minute':
            retval[setMinutes](val)
            break
          case 'date':
            retval[setDate](val)
            break
        }
      }
    }
    return retval
  }
  function timeGreaterThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) > (h2 * 60 + m2)
  }
  function timeLessThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) < (h2 * 60 + m2)
  }


  if (schd.repeat){
    if (timeGreaterThan(schd.start, date)) return false
    if (timeLessThan(schd.end, date)) return false
    if (date < schd.start) return false
    if (schd.endRepeat && date >= schd.endRepeat) return false
    if (schd.repeat === 'daily'){
      if (schd.repeatEvery){
        var dd = dayDiff(schd.start, date)
        if (dd % schd.repeatEvery !== 0) return false
      }
    }else if (schd.repeat === 'weekly'){
      if (schd.days){
        if (!SL.contains(schd.days, date[getDay]())) return false
      }else
        if (schd.start[getDay]() !== date[getDay]()) return false
      if (schd.repeatEvery){
        var diff = dayDiff(schd.start, date)
        if (diff % (7 * schd.repeatEvery) !== 0)
          return false
      }
    }else if (schd.repeat === 'monthly'){
      if (schd.repeatEvery){
        var md = monthDiff(schd.start, date)
        if (md % schd.repeatEvery !== 0) return false
      }
      if (schd.nthWeek && schd.mthDay){
        if (schd.mthDay !== date[getDay]()) return false
        var nthWeek = Math.floor((date[getDate]() - date[getDay]() + 1) / 7)
        if (schd.nthWeek !== nthWeek) return false
      }else
        if (schd.start[getDate]() !== date[getDate]()) return false
    }else if (schd.repeat === 'yearly'){
      if (schd.start[getMonth]() !== date[getMonth]()) return false
      if (schd.start[getDate]() !== date[getDate]()) return false
      if (schd.repeatEvery){
        var diff = Math.abs(schd.start[getFullYear]() - date[getFullYear]())
        if (diff % schd.repeatEvery !== 0) return false
      }
    }
  }else{
    if (schd.start > date) return false
    if (schd.end < date) return false
  }
  return true
}

SL.isOutboundLink = function(elm){
  if (!elm.getAttribute('href')) return false
  var hostname = elm.hostname
  var href = elm.href
  var protocol = elm.protocol
  if (protocol !== 'http:' && protocol !== 'https:') return false
  var isMyDomain = SL.any(SL.settings.domainList, function(domain){
    return SL.isSubdomainOf(hostname, domain)
  })
  if (isMyDomain) return false
  return hostname !== location.hostname
}

SL.isLinkerLink = function(elm){
  if (!elm.getAttribute || !elm.getAttribute('href')) return false
  return SL.hasMultipleDomains() &&
    elm.hostname != location.hostname &&
    !elm.href.match(/^javascript/i) &&
    !SL.isOutboundLink(elm)
}

SL.isSubdomainOf = function(sub, root){
  if (sub === root) return true
  var idx = sub.length - root.length
  if (idx > 0)
    return SL.equalsIgnoreCase(sub.substring(idx), root)
  return false
}

// `getVisitorId()`
// ------------------------------------------------
//
// Returns the library instance associated to a VisitorId tool if the tool exists
//
SL.getVisitorId = function(){
  var visitorIdTools = SL.getToolsByType('visitor_id')
  if (visitorIdTools.length === 0) {
    return null;
  }

  return visitorIdTools[0].getInstance()
}

SL.URI = function(){
  var ret = document.location.pathname + document.location.search
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

SL.URL = function(){
  var ret = document.location.href
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

// Filter `SL.rules` down to only the once relevant for the current page.
SL.filterRules = function(){
  function matches(rule){
    if (!SL.isRuleActive(rule)) return false
    return true
  }

  SL.rules = SL.filter(SL.rules, matches)
  SL.pageLoadRules = SL.filter(SL.pageLoadRules, matches)

}

SL.ruleInScope = function(rule, location){
  location = location || document.location
  var scope = rule.scope
  if (!scope) return true
  var URI = scope.URI
  var subdomains = scope.subdomains
  var domains = scope.domains
  var protocols = scope.protocols
  var hashes = scope.hashes

  if (URI && includeExcludeFails(URI, location.pathname + location.search)) return false
  if (subdomains && includeExcludeFails(subdomains, location.hostname)) return false
  if (domains && matchFails(domains, location.hostname)) return false
  if (protocols && matchFails(protocols, location.protocol)) return false
  if (hashes && includeExcludeFails(hashes, location.hash)) return false

  function includeExcludeFails(matcher, matchee){
    var include = matcher.include
    var exclude = matcher.exclude
    if (include && matchFails(include, matchee)) return true
    if (exclude){
      if (SL.isString(exclude) && exclude === matchee)
        return true
      if (SL.isArray(exclude) && SL.any(exclude, matches))
        return true
      if (SL.isRegex(exclude) && matches(exclude))
        return true
    }

    return false

    function matches(regex){
      return matchee.match(regex)
    }
  }

  function matchFails(matcher, matchee){
    if (SL.isString(matcher) && matcher !== matchee)
      return true
    if (SL.isArray(matcher) && !SL.any(matcher, matches))
      return true
    if (SL.isRegex(matcher) && !matches(matcher))
      return true
    return false

    function matches(regex){
      return matchee.match(regex)
    }

  }

  return true
}


// Run background tasks once. This will get invoked periodically.
SL.backgroundTasks = function(){
  var start = +new Date()
  SL.setFormListeners()
  SL.setVideoListeners()
  SL.loadStoredSettings()
  SL.registerNewElementsForDynamicRules()
  SL.eventEmitterBackgroundTasks()

  // Trigger condition events
  //SL.onEvent({type: 'condition', target: 'document'})
  var end = +new Date()
  // We want to keep an eye on the execution time here.
  // If it gets to around 50ms for any customer site,
  // we want to either optimize or start using a task queue
  //SL.notify('Background tasks executed in ' + (end - start) + 'ms', 3)
}



// For rules that poll for dynamically injected elements on the page,
// find them and register events for them.
SL.registerNewElementsForDynamicRules = function(){
  function cssQuery(selector, callback){
    var hit = cssQuery.cache[selector]
    if (hit){
      return callback(hit)
    }else{
      SL.cssQuery(selector, function(elms){
        cssQuery.cache[selector] = elms
        callback(elms)
      })
    }
  }
  cssQuery.cache = {}


  SL.each(SL.dynamicRules, function(rule){
    cssQuery(rule.selector, function(elms){
      SL.each(elms, function(elm){
        var event = rule.event === 'custom' ? rule.customEvent : rule.event;
        if (SL.$data(elm, 'dynamicRules.seen.' + event)) return
        SL.$data(elm, 'dynamicRules.seen.' + event, true)
        if (SL.propertiesMatch(rule.property, elm)){
          SL.registerEvents(elm, [event])
        }
      })
    })
  })
}

// If the browser doesn't support CSS selector queries, we have to include one.
SL.ensureCSSSelector = function(){
  if (document.querySelectorAll){
    SL.hasSelector = true
    return
  }
  SL.loadingSizzle = true
  SL.sizzleQueue = []
  SL.loadScript(SL.basePath() + 'selector.js', function(){
    if (!SL.Sizzle){
      SL.logError(new Error('Failed to load selector.js'))
      return
    }
    var pending = SL.onEvent.pendingEvents
    SL.each(pending, function(evt){
      SL.handleEvent(evt)
    }, this)
    SL.onEvent = SL.handleEvent
    SL.hasSelector = true
    ;delete SL.loadingSizzle
    SL.each(SL.sizzleQueue, function(item){
      SL.cssQuery(item[0], item[1])
    })
    ;delete SL.sizzleQueue

  })
}

// Error Handling

SL.errors = []
SL.logError = function(err){
  SL.errors.push(err)
  SL.notify(err.name + ' - ' + err.message, 5)
}

// `pageBottom()`
// --------------
//
// The function is to be called by the web page using an script tag like so:
//
//     <script>_satellite.pageBottom()</script>
//
// just before the `</body>` tag.
SL.pageBottom = function(){
  if (!SL.initialized) return
  SL.pageBottomFired = true
  SL.firePageLoadEvent('pagebottom')
}

// This allows Rover to configure the browser to use the staging library instead.
SL.stagingLibraryOverride = function(){
  /*jshint evil:true */
  var libraryOverride = SL.readStoredSetting('stagingLibrary') === 'true'
  if (libraryOverride){ // allow Rover to override the library to staging
    var scripts = document.getElementsByTagName('script')
      , regex = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/
      , regexStaging = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/
      , match
      , matchStaging
      , src
    for (var i = 0, len = scripts.length; i < len; i++){
      src = scripts[i].getAttribute('src')
      if (!src) continue
      if (!match) match = src.match(regex)
      if (!matchStaging) matchStaging = src.match(regexStaging)
      if (matchStaging) break
    }
    if (match && !matchStaging){
      var stagingURL = match[1] + 'satelliteLib-' + match[2] + '-staging.js'
      if (document.write) {
        document.write('<script src="' + stagingURL + '"></script>')
      } else {
        var s = document.createElement('script')
        s.src = stagingURL
        document.head.appendChild(s)
      }
      return true
    }
  }
  return false
}

SL.checkAsyncInclude = function(){
  if (window.satellite_asyncLoad)
    SL.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
}

SL.hasMultipleDomains = function(){
  return !!SL.settings.domainList && SL.settings.domainList.length > 1
}

SL.handleOverrides = function(){
  if (Overrides){
    for (var key in Overrides){
      if (Overrides.hasOwnProperty(key)){
        SL.data[key] = Overrides[key]
      }
    }
  }
}

SL.privacyManagerParams = function(){
  var params = {}
  SL.extend(params, SL.settings.privacyManagement)
  var analyticsTools = []
  for (var key in SL.tools){
    if (SL.tools.hasOwnProperty(key)) {
      var tool = SL.tools[key]
      var settings = tool.settings
      if (!settings) continue
      if (settings.engine === 'sc'){
        analyticsTools.push(tool)
      }
    }
  }
  var analyticsTrackingServers = SL.filter(SL.map(analyticsTools, function(tool){
    return tool.getTrackingServer()
  }), function(s){ return s != null })
  params.adobeAnalyticsTrackingServers = analyticsTrackingServers
  var substitutable = [
    'bannerText',
    'headline',
    'introductoryText',
    'customCSS'
  ]
  for (var i = 0; i < substitutable.length; i++){
    var prop = substitutable[i]
    var spec = params[prop]
    if (!spec) continue
    if (spec.type === 'text'){
      params[prop] = spec.value
    }else if (spec.type === 'data'){
      params[prop] = SL.getVar(spec.value)
    }else{
      throw new Error('Invalid type: ' + spec.type)
    }
  }
  return params
}

SL.prepareLoadPrivacyManager = function(){
  SL.addEventHandler(window, 'load', function(){
    loadWhenAllSCToolsLoaded(SL.loadPrivacyManager)
  })

  function loadWhenAllSCToolsLoaded(callback){
    var scTools = SL.filter(SL.values(SL.tools), function(tool){
      return tool.settings && tool.settings.engine === 'sc'
    })
    if (scTools.length === 0){
      return callback()
    }
    var numLoaded = 0
    SL.each(scTools, function(tool){
      SL.bindEvent(tool.id + '.load', onLoad)
    })
    var tid = setTimeout(onTimeout, 5000)

    function onLoad(){
      numLoaded++
      if (numLoaded === scTools.length){
        cleanUp()
        clearTimeout(tid)
        callback()
      }
    }

    function cleanUp(){
      SL.each(scTools, function(tool){
        SL.unbindEvent(tool.id + '.load', onLoad)
      })
    }

    function onTimeout(){
      cleanUp()
      callback()
    }
  }

}

// `loadPrivacyManager()`
// ----------------------
//
// Initialize privacy manager
SL.loadPrivacyManager = function(){
  var scriptUrl = SL.basePath() + 'privacy_manager.js'
  SL.loadScript(scriptUrl, function(){
    var pm = SL.privacyManager
    pm.configure(SL.privacyManagerParams())
    pm.openIfRequired()
  })
}

// `init()`
// --------
//
// Initialize Satellite.
//
// - `settings` - all the settings that comprising a library.
SL.init = function(settings) {
  if (SL.stagingLibraryOverride())
    return

  SL.configurationSettings = settings
  var tools = settings.tools
  ;delete settings.tools
  for (var key in settings){
    if (settings.hasOwnProperty(key)){
      SL[key] = settings[key]
    }
  }

  if(SL.data.customVars === undefined)
    SL.data.customVars = {}

  SL.data.queryParams = SL.QueryParams.normal

  SL.handleOverrides()

  SL.detectBrowserInfo()

  if (SL.trackVisitorInfo)
    SL.trackVisitorInfo()

  SL.loadStoredSettings()
  SL.Logger.setOutputState(SL.settings.notifications)

  SL.checkAsyncInclude()

  SL.ensureCSSSelector()

  SL.filterRules()
  SL.dynamicRules = SL.filter(SL.rules, function(rule){
    return rule.eventHandlerOnElement
  })

  SL.tools = SL.initTools(tools)
  SL.initEventEmitters()

  SL.firePageLoadEvent('aftertoolinit')

  if (SL.settings.privacyManagement){
    SL.prepareLoadPrivacyManager()
  }

  if (SL.hasSelector)
    SL.domReady(SL.eventEmitterBackgroundTasks)

  SL.setListeners()

  // Setup background tasks
  SL.domReady(function() {
    SL.poll(
      function() { SL.backgroundTasks() },
      SL.settings.recheckEvery || 3000
    )
  })

  // Setup page load events
  SL.domReady(function(){
    SL.domReadyFired = true
    if (!SL.pageBottomFired)
      SL.pageBottom()

    SL.firePageLoadEvent('domready')
  })

  SL.addEventHandler(window, 'load', function(){
    SL.firePageLoadEvent('windowload')
  })

  SL.firePageLoadEvent('pagetop')
  SL.initialized = true
}

SL.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload']

SL.loadEventBefore = function(one, other){
  return SL.indexOf(SL.pageLoadPhases, one) <= SL.indexOf(SL.pageLoadPhases, other)
}

SL.flushPendingCalls = function(tool){
  if (tool.pending){
    SL.each(tool.pending, function(call){
      var cmd = call[0]
        , elm = call[1]
        , evt = call[2]
        , args = call[3]
      if (cmd in tool)
        tool[cmd].apply(tool, [elm, evt].concat(args))
      else if (tool.emit)
        tool.emit(cmd, elm, evt, args)
      else
        SL.notify('Failed to trigger ' + cmd +
          ' for tool ' + tool.id, 1)
    })
    ;delete tool.pending
  }
}

// setDebug(debug)
// --------------
//
// Activate or deactivate debug mode - within which
// log statements will be printed to the JS console.
//
// - `debug` - a boolean indicating whether debug mode
//   should be turned on.
SL.setDebug = function(debug){
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try {
    window.localStorage.setItem('sdsat_debug', debug)
  } catch (e) {
    SL.notify('Cannot set debug mode: ' + e.message, 2)
  };
}

SL.getUserAgent = function() {
  return navigator.userAgent;
};

SL.detectBrowserInfo = function(){
  // Based on <http://jsbin.com/inubez/3/>
  function matcher(regexs){
    return function(userAgent){
      for (var key in regexs){
        if (regexs.hasOwnProperty(key)) {          
          var regex = regexs[key];
          var match = regex.test(userAgent);
          if (match) return key;
        }
      }
      return "Unknown";
    };
  }

  // The order in which these regular expressions are evaluated is important.

  var getBrowser = matcher({
    "IE Edge Mobile": /Windows Phone.*Edge/,
    "IE Edge": /Edge/,
    OmniWeb: /OmniWeb/,
    "Opera Mini": /Opera Mini/,
    "Opera Mobile": /Opera Mobi/,
    Opera: /Opera/,
    Chrome: /Chrome|CriOS|CrMo/,
    Firefox: /Firefox|FxiOS/,
    "IE Mobile": /IEMobile/,
    IE: /MSIE|Trident/,
    "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
    Safari: /Safari/
  });

  var getOS = matcher({
    Blackberry: /BlackBerry|BB10/,
    "Symbian OS": /Symbian|SymbOS/,
    Maemo: /Maemo/,
    Android: /Android/,
    Linux: / Linux /,
    Unix: /FreeBSD|OpenBSD|CrOS/,
    Windows: /[\( ]Windows /,
    iOS: /iPhone|iPad|iPod/,
    MacOS: /Macintosh;/
  });

  var getDeviceType = matcher({
    // This is not entirely accurate. A few old Samsung, Motorola, and Sony Ericsson phones
    // will match but the majority and best guess is Nokia. Also, Nokia makes Windows phones and
    // for those we will make it match Windows Phone and not Nokia.
    Nokia: /Symbian|SymbOS|Maemo/,
    "Windows Phone": /Windows Phone/,
    Blackberry: /BlackBerry|BB10/,
    Android: /Android/,
    iPad: /iPad/,
    iPod: /iPod/,
    iPhone: /iPhone/,
    Desktop: /.*/
  });

  var userAgent = SL.getUserAgent();
  SL.browserInfo = {
    browser: getBrowser(userAgent)
    , os: getOS(userAgent)
    , deviceType: getDeviceType(userAgent)
  }
}

SL.isHttps = function(){
  return 'https:' == document.location.protocol
}

SL.BaseTool = function(settings){
  this.settings = settings || {}

  this.forceLowerCase = SL.settings.forceLowerCase
  if ('forceLowerCase' in this.settings){
    this.forceLowerCase = this.settings.forceLowerCase
  }
}
SL.BaseTool.prototype = {
  triggerCommand: function(trig, elm, evt){
    var settings = this.settings || {}

    if (this.initialize && this.isQueueAvailable()){
      if (this.isQueueable(trig) && evt && SL.loadEventBefore(evt.type, settings.loadOn)){
        this.queueCommand(trig, elm, evt)
        return
      }
    }

    var cmd = trig.command
    var method = this['$' + cmd]
    var escapeHtml = method ? method.escapeHtml : false
    var args = SL.preprocessArguments(
      trig['arguments'],
      elm,
      evt,
      this.forceLowerCase,
      escapeHtml)

    if (method){
      method.apply(this, [elm, evt].concat(args))
    }else if (this.$missing$){
      this.$missing$(cmd, elm, evt, args)
    }else
      SL.notify('Failed to trigger ' + cmd +
        ' for tool ' + this.id, 1)

  },
  endPLPhase: function(pageLoadEvent){
    // override to handle end initialization
  },
  isQueueable: function(trig){
    // everything is queueable except `cancelToolInit`
    return trig.command !== 'cancelToolInit'
  },
  isQueueAvailable: function(){
    return !this.initialized && !this.initializing
  },
  flushQueue: function(){
    if (this.pending){
      SL.each(this.pending, function(args){
        this.triggerCommand.apply(this, args)
      }, this)
      this.pending = []
    }
  },
  queueCommand: function(trig, elm, evt){
    if (!this.pending)
      this.pending = []
    this.pending.push([trig, elm, evt])
  },
  $cancelToolInit: function(){
    this._cancelToolInit = true
  }
}

// Set Satellite to the global variable `_satellite`.
window._satellite = SL

// E-Commerce APIs
// ---------------
//
// The ecommerce API allows web admins to integrate e-commerce tracking with Satellite.
// More details on the [GA E-Commerce API's](http://code.google.com/apis/analytics/docs/gaJS/gaJSApiEcommerce.html).
// Upon any of the methods on the API being called, they will fire an event, which
// in turn can be handled by a rule in the library.

SL.ecommerce = {
  // `addItem(orderId, sku, name, category, price, quantity)`
  // -------------------------------------
  //
  // Add an item to the transaction.
  addItem: function(){
    var args = [].slice.call(arguments)
    SL.onEvent({type: 'ecommerce.additem', target: args})
  },

  // `addTrans(orderId, affiliation, total, tax, shipping, city, state, country)`
  // ----------------------------------------------------------------------------
  //
  // Add a new transaction.
  addTrans: function(){
    var args = [].slice.call(arguments)
    SL.data.saleData.sale = {
      orderId: args[0],
      revenue: args[2]
    }
    SL.onEvent({type: 'ecommerce.addtrans', target: args})
  },

  // `trackTrans()`
  // --------------
  //
  // Send the transaction data that's been set up using `addItem()` and `addTrans()`
  // to GA to be tracked.
  trackTrans: function(){
    SL.onEvent({type: 'ecommerce.tracktrans', target: []})
  }
}

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

SL.visibility = {
  // Public
  // ------------------------------------------------

  // `isHidden()`
  //
  // The method returns true if the tab is hidden, otherwise false.
  isHidden: function() {
    var prop = this.getHiddenProperty();
    if (!prop) return false;
    return document[prop];
  },

  // `isVisible()`
  //
  // The method is an alias for the `!isHidden`.
  isVisible: function() {
    return !this.isHidden();
  },

  // Private
  // ------------------------------------------------
  getHiddenProperty: function() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document)
        return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
  },

  getVisibilityEvent: function() {
    var ve = this.getHiddenProperty();
    if (!ve) return null;
    return ve.replace(/[H|h]idden/,'') + 'visibilitychange';
  }
};

// Leave Event Emitter
// ============================
//
// The page leave is an event that is used to detect the moment when the
// browser's tab gets closed.
//

function LeaveEventEmitter() {
  if (SL.getToolsByType('nielsen').length > 0) {
    SL.domReady(SL.bind(this.initialize, this));
  }
}

LeaveEventEmitter.prototype = {
  obue: false,
  initialize: function() {
    this.attachCloseListeners();
  },
  obuePrevUnload: function() {},
  obuePrevBeforeUnload: function() {},
  newObueListener: function() {
    if (!this.obue) {
      this.obue = true;
      this.triggerBeacons();
    }
  },
  attachCloseListeners: function() {
    this.prevUnload = window.onunload;
    this.prevBeforeUnload = window.onbeforeunload;

    window.onunload = SL.bind(function(e) {
      if (this.prevUnload) {
        setTimeout(SL.bind(function() {
          this.prevUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
    window.onbeforeunload = SL.bind(function(e) {
      if (this.prevBeforeUnload) {
        setTimeout(SL.bind(function() {
          this.prevBeforeUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
  },
  triggerBeacons: function() {
    SL.fireEvent('leave', document);
  }
}
SL.availableEventEmitters.push(LeaveEventEmitter);

// Twitter Event Emitter
// =====================
//
// Emits the `twitter.tweet` event in the event a user tweets from the site.
function TwitterEventEmitter(twttr){
  SL.domReady(SL.bind(function () {
    this.twttr = twttr || window.twttr;
    this.initialize();
  }, this));
}

TwitterEventEmitter.prototype = {
  initialize: function(){
    var twttr = this.twttr;
    if (twttr && typeof twttr.ready === 'function') {
      twttr.ready(SL.bind(this.bind, this));
    }
  },

  bind: function(){
    this.twttr.events.bind('tweet', function(event) {
      if (event) {
        SL.notify("tracking a tweet button", 1);
        SL.onEvent({type: 'twitter.tweet', target: document});
      }
    });

  }
}
SL.availableEventEmitters.push(TwitterEventEmitter)

// Location Change Event Emitter
// =============================
//
// Will fire `locationchange` event whenever the browser location
// changes due to `hashchange`, `popstate`, `history.pushState()`,
// or `history.replaceState()`. 

function LocationChangeEventEmitter(){
  this.lastURL = SL.URL()
  this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this)
  this._onPopState = SL.bind(this.onPopState, this)
  this._onHashChange = SL.bind(this.onHashChange, this)
  this._pushState = SL.bind(this.pushState, this)
  this._replaceState = SL.bind(this.replaceState, this)
  this.initialize()
}

LocationChangeEventEmitter.prototype = {
  initialize: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  fireIfURIChanged: function(){
    var URL = SL.URL()
    if (this.lastURL !== URL){
      this.fireEvent()
      this.lastURL = URL
    }
  },

  fireEvent: function(){
    SL.updateQueryParams()
    SL.onEvent({ type: 'locationchange', target: document })
  },

  setupSPASupport: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  setupHistoryAPI: function(){
    var history = window.history
    if (history){
      if (history.pushState){
        this.originalPushState = history.pushState
        history.pushState = this._pushState
      }
      if (history.replaceState){
        this.originalReplaceState = history.replaceState
        history.replaceState = this._replaceState
      }
    }
    SL.addEventHandler(window, 'popstate', this._onPopState)
  },

  pushState: function(){
    var ret = this.originalPushState.apply(history, arguments)
    this.onPushState()
    return ret
  },

  replaceState: function(){
    var ret = this.originalReplaceState.apply(history, arguments)
    this.onReplaceState()
    return ret
  },

  setupHashChange: function(){
    SL.addEventHandler(window, 'hashchange', this._onHashChange)
  },

  onReplaceState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPushState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPopState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onHashChange: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  uninitialize: function(){
    this.cleanUpHistoryAPI()
    this.cleanUpHashChange()
  },

  cleanUpHistoryAPI: function(){
    if (history.pushState === this._pushState){
      history.pushState = this.originalPushState
    }
    if (history.replaceState === this._replaceState){
      history.replaceState = this.originalReplaceState
    }
    SL.removeEventHandler(window, 'popstate', this._onPopState)
  },

  cleanUpHashChange: function(){
    SL.removeEventHandler(window, 'hashchange', this._onHashChange)
  }

}

SL.availableEventEmitters.push(LocationChangeEventEmitter);

function DataElementChangeEmitter() {
  var rules = SL.filter(SL.rules, function(rule) {
    return rule.event.indexOf('dataelementchange') === 0;
  });

  this.dataElementsNames = SL.map(rules, function(rule) {
    var matchedSubstrings = rule.event.match(/dataelementchange\((.*)\)/i);
    return matchedSubstrings[1];
  }, this);

  this.initPolling();
}

// SL.stringify is not 100% compatible with JSON.stringify (for example JSON.stringify breaks
// whenever it encounters a cyclic reference). Since this check might become intensive,
// only for this case we would prefer using JSON.stringify whenever that's available.
DataElementChangeEmitter.prototype.getStringifiedValue =
    (window.JSON && window.JSON.stringify) || SL.stringify;

DataElementChangeEmitter.prototype.initPolling = function() {
  if (this.dataElementsNames.length === 0) {
    return;
  }

  this.dataElementsStore = this.getDataElementsValues();
  SL.poll(SL.bind(this.checkDataElementValues, this), 1000);
};

DataElementChangeEmitter.prototype.getDataElementsValues = function() {
  var values = {};
  SL.each(this.dataElementsNames, function(dataElementName) {
    var value = SL.getVar(dataElementName);
    values[dataElementName] = this.getStringifiedValue(value);
  }, this);

  return values;
};

DataElementChangeEmitter.prototype.checkDataElementValues = function() {
  SL.each(this.dataElementsNames, SL.bind(function(dataElementName) {
    var currentStringifiedValue = this.getStringifiedValue(SL.getVar(dataElementName));
    var previousStringifiedValue =  this.dataElementsStore[dataElementName];

    if (currentStringifiedValue !== previousStringifiedValue) {
      this.dataElementsStore[dataElementName] = currentStringifiedValue;

      SL.onEvent({
        type: 'dataelementchange(' + dataElementName + ')',
        target: document
      });
    }
  }, this));
};

SL.availableEventEmitters.push(DataElementChangeEmitter);

// Orientation Change Event Emitter
// ================================
//
// The `orientationchange` event on mobile devices fire when the devices switchs between
// portrait and landscape modes. You can use `%event.orientation%` in your command arguments
// to evaluate to either `portrait` or `landscape`.
function OrientationChangeEventEmitter(){
  SL.addEventHandler(window, "orientationchange", OrientationChangeEventEmitter.orientationChange)
}
OrientationChangeEventEmitter.orientationChange = function (e) {
  var orientation = window.orientation === 0 ? 
    'portrait' : 
    'landscape'
  e.orientation = orientation
  SL.onEvent(e)
}
SL.availableEventEmitters.push(OrientationChangeEventEmitter)

// VideoPlayedEventEmitter
// =======================
//
// Emits the `videoplayed` event, given a specified percentage or duration, i.e. `videoplayed`
// is a parameterized event. A rule looks like this
//
//      {
//          name: "Video 10% complete",
//          event: "videoplayed(10%)",
//          selector: "#video",
//          trigger: [
//              {
//                  tool: "ga",
//                  command: "trackEvent",
//                  arguments: [
//                      "video",
//                      "video 10% complete",
//                      "from: %URI%"
//                  ]
//              }
//          ]
//      }
//
// `10%` is in the paranthesis which indicates this rule will only fire when the 10%
// of the total length of the video has been played.
// You can also specifiy a duration in seconds, which looks like `videoplayed(8s)` - which
// stands for 8 seconds.

function VideoPlayedEventEmitter(){
  this.rules = SL.filter(SL.rules, function(rule){
    return rule.event.substring(0, 11) === 'videoplayed'
  })
  this.eventHandler = SL.bind(this.onUpdateTime, this)
}
VideoPlayedEventEmitter.prototype = {
  backgroundTasks: function(){
    var eventHandler = this.eventHandler
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector || 'video', function(elms){
        SL.each(elms, function(elm){
          if (SL.$data(elm, 'videoplayed.tracked')) return
          SL.addEventHandler(elm, 'timeupdate', SL.throttle(eventHandler, 100))
          SL.$data(elm, 'videoplayed.tracked', true)
        })
      })
    })
  },
  evalRule: function(elm, rule){
    var eventType = rule.event
      , seekable = elm.seekable
      , startTime = seekable.start(0)
      , endTime = seekable.end(0)
      , currentTime = elm.currentTime
      , m = rule.event.match(/^videoplayed\(([0-9]+)([s%])\)$/)
    if (!m) return
    var unit = m[2]
      , amount = Number(m[1])
    var func = unit === '%' ?
      function(){
        return amount <= 
          100 * (currentTime - startTime) / (endTime - startTime)
      } :
      function(){
        return amount <= currentTime - startTime
      }
    if (!SL.$data(elm, eventType) && func()){
      SL.$data(elm, eventType, true)
      SL.onEvent({type: eventType, target: elm})
    }
  },
  onUpdateTime: function(e){
    var rules = this.rules
      , elm = e.target
    if (!elm.seekable || elm.seekable.length === 0) return
    for (var i = 0, len = rules.length; i < len; i++)
      this.evalRule(elm, rules[i])
  }
}
SL.availableEventEmitters.push(VideoPlayedEventEmitter)

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

function VisibilityEventEmitter() {
  this.defineEvents();
  this.visibilityApiHasPriority = true;
  if (!document.addEventListener) { // Older browers (e.g.: IE8)
    this.attachDetachOlderEventListeners(true, document, 'focusout');
  } else {
    this.setVisibilityApiPriority(false);
  }
  var context = this;
  SL.bindEvent('aftertoolinit', function() {
    SL.fireEvent(SL.visibility.isHidden() ? 'tabblur' : 'tabfocus');
  });
}

VisibilityEventEmitter.prototype = {
  defineEvents: function() {
    this.oldBlurClosure = function() {
      SL.fireEvent('tabblur', document)
    };
    this.oldFocusClosure = SL.bind(function() {
      if (this.visibilityApiHasPriority) {
        SL.fireEvent('tabfocus', document);
      } else {
        if (SL.visibility.getHiddenProperty() != null) {
          if(!SL.visibility.isHidden()) {
            SL.fireEvent('tabfocus', document);
          }
        } else {
          SL.fireEvent('tabfocus', document);
        }
      }
    }, this);
  },
  attachDetachModernEventListeners: function(add) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](document,
      SL.visibility.getVisibilityEvent(),
      this.handleVisibilityChange
    );
  },
  attachDetachOlderEventListeners: function(add, blurTarget, blurEventName) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](blurTarget, blurEventName, this.oldBlurClosure);
    SL[method](window, 'focus', this.oldFocusClosure);
  },
  handleVisibilityChange: function() {
    if (SL.visibility.isHidden()) {
      SL.fireEvent('tabblur', document);
    } else {
      SL.fireEvent('tabfocus', document);
    }
  },
  setVisibilityApiPriority: function(visibilityApiHasPriority) {
    this.visibilityApiHasPriority = visibilityApiHasPriority;
    this.attachDetachOlderEventListeners(false, window, 'blur');
    this.attachDetachModernEventListeners(false);
    if (visibilityApiHasPriority) {
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      } else {
        this.attachDetachOlderEventListeners(true, window, 'blur');
      }
    } else {
      this.attachDetachOlderEventListeners(true, window, 'blur');
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      }
    }
  },
  oldBlurClosure: null,
  oldFocusClosure: null,
  visibilityApiHasPriority: true
};

SL.availableEventEmitters.push(VisibilityEventEmitter);

// InviewEventEmitter
// ==================
//
// Emits the `inview` event. The `inview` event fires on an element when the element
// first comes into the view of the user. If the element is in view immediately upon page
// load, it will be fired right away, if it only comes in view after some scrolling, it
// will fire then. An optional delay interval `inviewDelay` can be specified in the rule
// which determine how long the element has to be in view for before the event fires,
// of which the default value is 1 second.

function InViewEventEmitter(rules){
  rules = rules || SL.rules
  this.rules = SL.filter(rules, function(rule){
    return rule.event === 'inview'
  })
  this.elements = []
  this.eventHandler = SL.bind(this.track, this)
  SL.addEventHandler(window, 'scroll', this.eventHandler)
  SL.addEventHandler(window, 'load', this.eventHandler)
}

// Util functions needed by `InViewEventEmitter`
InViewEventEmitter.offset = function(elem) {
  var top = null, left = null;

  try {
    var box = elem.getBoundingClientRect(),
      doc = document,
      docElem = doc.documentElement,
      body = doc.body,
      win = window,
      clientTop  = docElem.clientTop  || body.clientTop  || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
      scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    top  = box.top  + scrollTop  - clientTop;
    left = box.left + scrollLeft - clientLeft;
  } catch(e) {
  }

  return { top: top, left: left }
}
InViewEventEmitter.getViewportHeight = function() {
  var height = window.innerHeight // Safari, Opera
  var mode = document.compatMode

  if (mode) { // IE, Gecko
    height = (mode == 'CSS1Compat') ?
    document.documentElement.clientHeight : // Standards
    document.body.clientHeight // Quirks
  }

  return height
}
InViewEventEmitter.getScrollTop = function(){
  return (document.documentElement.scrollTop ?
    document.documentElement.scrollTop :
    document.body.scrollTop)
}

InViewEventEmitter.isElementInDocument = function(el) {
  return document.body.contains(el);
}

InViewEventEmitter.isElementInView = function(el) {
  if (!InViewEventEmitter.isElementInDocument(el)) {
    return false;
  }

  var vpH = InViewEventEmitter.getViewportHeight()
      , scrolltop = InViewEventEmitter.getScrollTop()
      , top = InViewEventEmitter.offset(el).top
      , height = el.offsetHeight;

  if (top !== null) {
    return !(scrolltop > (top + height) || scrolltop + vpH < top)
  }

  return false;
}

InViewEventEmitter.prototype = {
  backgroundTasks: function(){
    var elements = this.elements
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector, function(elms){
        var addCount = 0
        SL.each(elms, function(elm){
          if (!SL.contains(elements, elm)){
            elements.push(elm)
            addCount++
          }
        })
        if (addCount){
          SL.notify(rule.selector + ' added ' + addCount + ' elements.', 1)
        }
      })
    })
    this.track()
  },

  checkInView: function(el, recheck, delay){
    var inview = SL.$data(el, 'inview');
    if (InViewEventEmitter.isElementInView(el)) {
      // it is in view now
      if (!inview)
        SL.$data(el, 'inview', true)
      var self = this
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        if (recheck || !rule.inviewDelay){
          SL.$data(el, viewedProp, true)
          SL.onEvent({type: 'inview', target: el, inviewDelay: rule.inviewDelay})
        }else if(rule.inviewDelay){
          var timeout = SL.$data(el, timeoutIdProp)
          if (!timeout) {
            timeout = setTimeout(function(){
              self.checkInView(el, true, rule.inviewDelay)
            }, rule.inviewDelay)
            SL.$data(el, timeoutIdProp, timeout)
          }
        }
      }, delay)
    } else {
      if (!InViewEventEmitter.isElementInDocument(el)) {
        var idx = SL.indexOf(this.elements, el);
        this.elements.splice(idx, 1)
      }

      // it is not in view now
      if (inview)
        SL.$data(el, 'inview', false)
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        var timeout = SL.$data(el, timeoutIdProp)
        if (timeout){
          clearTimeout(timeout)
        }
      }, delay)
    }
  },
  track: function(){
    // We are not using SL.each here because we might do a splice inisde
    // `checkInView` method.
    for (var i = this.elements.length - 1; i >=0; i--) {
      this.checkInView(this.elements[i]);
    }
  },
  processRules: function(elm, callback, delay){
    var filteredRules = this.rules;
    if (delay) {
        filteredRules = SL.filter(this.rules, function(e){
          return e.inviewDelay == delay;
        });
    }
    SL.each(filteredRules, function(rule, i){
      // viewedProp: for rules that has a timeout, the definition for
      // "viewed" is rule dependent. But for all rules that do not have
      // a timeout, it is independent.
      var viewedProp = rule.inviewDelay ? 'viewed_' + rule.inviewDelay : 'viewed'
      var timeoutIdProp = 'inview_timeout_id_' + i
      if (SL.$data(elm, viewedProp)) return
      if (SL.matchesCss(rule.selector, elm)){
        callback(rule, viewedProp, timeoutIdProp)
      }
    })
  }
}

SL.availableEventEmitters.push(InViewEventEmitter)

// ElementExistsEventEmitter
// ==================
//
// Emits the `elementexists` event. The `elementexists` event fires when an element
// of a specified selector becomes into existance - either because it's in the page
// markup or dynamically injected later on. *Each rule only fires once.*

function ElementExistsEventEmitter() {
  this.rules = SL.filter(SL.rules, function(rule) {
    return rule.event === 'elementexists';
  });
}
ElementExistsEventEmitter.prototype.backgroundTasks = function() {
  SL.each(this.rules, function(rule) {
    SL.cssQuery(rule.selector, function(elms) {
      if (elms.length > 0){
        // This results in a bug: https://jira.corp.adobe.com/browse/DTM-6681
        // The fix was reverted due to: https://jira.corp.adobe.com/browse/DTM-7377
        var elm = elms[0];
        if (SL.$data(elm, 'elementexists.seen')) return;
        SL.$data(elm, 'elementexists.seen', true);
        SL.onEvent({type: 'elementexists', target: elm});
      }
    })
  })
}

SL.availableEventEmitters.push(ElementExistsEventEmitter);

// Facebook Event Emitter
// ======================
//
// Will track `edge.create`, `edge.remove` and `message.send` events from the Facebook
// Javascript API and emit `facebook.like`, `facebook.unlike` and `facebook.send` events
// respectively.

function FacebookEventEmitter(FB){
  this.delay = 250;
  this.FB = FB;

  SL.domReady(SL.bind(function () {
    SL.poll(SL.bind(this.initialize, this), this.delay, 8);
  }, this));
}

FacebookEventEmitter.prototype = {
  initialize: function() {
    this.FB = this.FB || window.FB;

    if (this.FB && this.FB.Event && this.FB.Event.subscribe) {
      this.bind();
      return true;
    }
  },

  bind: function(){
    this.FB.Event.subscribe('edge.create', function() {
      SL.notify("tracking a facebook like", 1)
      SL.onEvent({type: 'facebook.like', target: document})
    });

    this.FB.Event.subscribe('edge.remove', function() {
      SL.notify("tracking a facebook unlike", 1)
      SL.onEvent({type: 'facebook.unlike', target: document})
    });

    this.FB.Event.subscribe('message.send', function() {
      SL.notify("tracking a facebook share", 1)
      SL.onEvent({type: 'facebook.send', target: document})
    });
  }
}
SL.availableEventEmitters.push(FacebookEventEmitter);

// Hover Event Emitter
// =====================
//
// Emits the `hover` event in the event. This is better than `mouseover` because you can introduce a certain delay.
// 
//  {
//        name: "Hover for 1 second"
//        event: "hover(1000)",
//        ...
//  }
function HoverEventEmitter(){
  var eventRegex = this.eventRegex = /^hover\(([0-9]+)\)$/
  var rules = this.rules = []
  SL.each(SL.rules, function(rule){
    var m = rule.event.match(eventRegex)
    if (m){
      rules.push([
        Number(rule.event.match(eventRegex)[1]), 
        rule.selector
      ])
    }
  })
}
HoverEventEmitter.prototype = {
  backgroundTasks: function(){
    var self = this
    SL.each(this.rules, function(rule){
      var selector = rule[1]
        , delay = rule[0]
      SL.cssQuery(selector, function(newElms){
        SL.each(newElms, function(elm){
          self.trackElement(elm, delay)
        })
      })
    }, this)
  },
  trackElement: function(elm, delay){
    var self = this
      , trackDelays = SL.$data(elm, 'hover.delays')
    if (!trackDelays){
      SL.addEventHandler(elm, 'mouseover', function(e){
        self.onMouseOver(e, elm)
      })
      SL.addEventHandler(elm, 'mouseout', function(e){
        self.onMouseOut(e, elm)
      })
      SL.$data(elm, 'hover.delays', [delay])
    }
    else if (!SL.contains(trackDelays, delay)){
      trackDelays.push(delay)
    }
  },
  onMouseOver: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.fromElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseEnter(elem)
  },
  onMouseEnter: function(elm){
    var delays = SL.$data(elm, 'hover.delays')
    var delayTimers = SL.map(delays, function(delay){
      return setTimeout(function(){
        SL.onEvent({type: 'hover(' + delay + ')', target: elm})
      }, delay)
    })
    SL.$data(elm, 'hover.delayTimers', delayTimers)
  },
  onMouseOut: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.toElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseLeave(elem)
  },
  onMouseLeave: function(elm){
    var delayTimers = SL.$data(elm, 'hover.delayTimers')
    if (delayTimers)
      SL.each(delayTimers, function(timer){
        clearTimeout(timer)
      })
  }
}
SL.availableEventEmitters.push(HoverEventEmitter)

// The Nielsen Tool
// ================
//
// This tool provides the means to make Nielsen tracking possible.
//
// The tool accepts the following settings:
//
// - `collectionServer` - The collection server to be used. The variable
//      specifies the nearest collection server.
// - `clientId` - The client identifier. A unique Nielsen supplied ID that
//      should be alphanumeric and lowercase. A dash (-) character is allowed.
// - `contentGroup` - The content group. A historical variable used for
//      grouping/aggregating content into channels. Currently the
//      default value is "0".
function NielsenTool(settings) {
  SL.BaseTool.call(this, settings);
  this.defineListeners();
  this.beaconMethod = 'plainBeacon';
  this.adapt = new NielsenTool.DataAdapters();
  this.dataProvider = new NielsenTool.DataProvider.Aggregate();
}

SL.inherit(NielsenTool, SL.BaseTool);
SL.extend(NielsenTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'Nielsen',

  // Private
  // ------------------------------------------------

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // This is needed in order to be able to properly hook the needed events.
  endPLPhase: function(pageLoadEvent) {
    switch (pageLoadEvent) {
      case 'pagetop':
        this.initialize();
        break;
      case 'pagebottom':
        if (this.enableTracking) {
          this.queueCommand({ command: 'sendFirstBeacon', "arguments": [] });
          this.flushQueueWhenReady();
        }
        break;
    }
  },

  defineListeners: function() {
    this.onTabFocus = SL.bind(function() {
      this.notify('Tab visible, sending view beacon when ready', 1);
      this.tabEverVisible = true;
      this.flushQueueWhenReady();
    }, this);
    this.onPageLeave = SL.bind(function() {
      this.notify('isHuman? : '+ this.isHuman(), 1);
      if (this.isHuman()) {
        this.sendDurationBeacon(); // track page leave
      }
    }, this);
    this.onHumanDetectionChange = SL.bind(function(e) {
      if (this == e.target.target) this.human = e.target.isHuman;
    }, this);
  },

  initialize: function() {
    this.initializeTracking();
    this.initializeDataProviders();
    this.initializeNonHumanDetection();
    this.tabEverVisible = SL.visibility.isVisible();
    if (!this.tabEverVisible) {
      SL.bindEventOnce('tabfocus', this.onTabFocus);
    }
    else {
      this.notify('Tab visible, sending view beacon when ready', 1);
    }

    this.initialized = true;
  },

  // `initializeTracking()`
  // ------------------------------------------------
  //
  // The method starts the time tracking and hooks on the leave event.
  initializeTracking: function() {
    if (this.initialized) return;
    this.notify('Initializing tracking', 1);
    this.addRemovePageLeaveEvent(this.enableTracking);
    this.addRemoveHumanDetectionChangeEvent(this.enableTracking);
    this.initialized = true;
  },

  // `initializeDataProviders()`
  // ------------------------------------------------
  //
  // The method initializes default data providers for:
  // - Analytics Report Suite ID, if Analytics account is linked
  // - Marketing Cloud Visitor ID, with fallback to auto-generated UUID
  initializeDataProviders: function() {
    var analytics = this.getAnalyticsTool(), rsid;

    this.dataProvider.register(
      new NielsenTool.DataProvider.VisitorID(
        SL.getVisitorId()
      )
    );
    if (analytics) {
      rsid = new NielsenTool.DataProvider.Generic('rsid', function() {
        return analytics.settings.account;
      });
      this.dataProvider.register(rsid);
    }
    else {
      this.notify('Missing integration with Analytics: rsid will not be sent.');
    }
  },

  initializeNonHumanDetection: function() {
    if (SL.nonhumandetection) {
      SL.nonhumandetection.init();
      this.setEnableNonHumanDetection(
        this.settings.enableNonHumanDetection == false ? false : true);
      if (this.settings.nonHumanDetectionDelay > 0) {
        this.setNonHumanDetectionDelay(
          parseInt(this.settings.nonHumanDetectionDelay) * 1000);
      }
    } else {
      this.notify('NHDM is not available.');
    }
  },

  // `getAnalyticsTool()`
  // ------------------------------------------------
  //
  // If integration is defined, this method returns the tool instance of
  // the linked Analytics account
  getAnalyticsTool: function() {
    if (this.settings.integratesWith) {
      return SL.tools[this.settings.integratesWith];
    }
  },

  flushQueueWhenReady: function() {
    if (!this.enableTracking || !this.tabEverVisible) return;
    SL.poll(SL.bind(function() {
      if (this.isReadyToTrack()) {
        this.flushQueue();
        return true;
      }
    }, this), 100, 20);
  },

  isReadyToTrack: function() {
    return this.tabEverVisible && this.dataProvider.isReady();
  },

  // `setVars(vars)`
  // ------------------------------------------------
  //
  // The method is used to set variables on the tool
  $setVars: function(elm, evt, vars) {
    for (var v in vars) {
      var val = vars[v];
      if (typeof val === 'function')
        val = val();
      this.settings[v] = val;
    }
    this.notify('Set variables done', 2);
    this.prepareContextData();
  },

  // `setEnableTracking()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  $setEnableTracking: function(elm, evt, bool) {
    this.notify('Will' + (!bool ? ' not' : '') + ' track time on page', 1);
    if (this.enableTracking != bool) {
      this.addRemovePageLeaveEvent(bool);
      this.addRemoveHumanDetectionChangeEvent(bool);
      this.enableTracking = bool;
    }
  },

  // `sendFirstBeacon()`
  // ------------------------------------------------
  //
  // The method is called as soon as everything is in place.
  $sendFirstBeacon: function(elm, evt, settings) {
    this.sendViewBeacon();
  },

  // `setEnableNonHumanDetection()`
  // ------------------------------------------------
  //
  // The method enables/disables the human detection mechanism.
  setEnableNonHumanDetection: function(bool) {
    if (bool) {
      SL.nonhumandetection.register(this);
    } else {
      SL.nonhumandetection.unregister(this);
    }
  },

  // `setNonHumanDetectionDelay()`
  // ------------------------------------------------
  //
  // The method set the timeout for entering in non human state.
  setNonHumanDetectionDelay: function(delay) {
    SL.nonhumandetection.register(this, delay);
  },

  addRemovePageLeaveEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' page leave event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('leave', this.onPageLeave);
  },

  addRemoveHumanDetectionChangeEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' human detection change event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('humandetection.change', this.onHumanDetectionChange);
  },

  // `sendViewBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  sendViewBeacon: function() {
    this.notify('Tracked page view.', 1);
    this.sendBeaconWith();
  },

  // `sendDurationBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the duration tracking call. This adds the time
  // spent on the page to the call and is triggered when the user leaves
  // the current web page.
  sendDurationBeacon: function() {
    if (
      !SL.timetracking ||
      typeof SL.timetracking.timeOnPage != 'function' ||
      SL.timetracking.timeOnPage() == null
    ) {
      this.notify('Could not track close due missing time on page', 5);
      return;
    }
    this.notify('Tracked close', 1);
    this.sendBeaconWith({
      timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1000),
      duration: 'D',
      timer: 'timer'
    });
    // a bit of delay to let the network thread finish sending data
    var i,s='';for(i=0;i<this.magicConst;i++){s+='0'};
  },

  // `sendBeaconWith(obj)`
  // ------------------------------------------------
  //
  // The method builds the tracking call based on provided settings and
  // parameters.
  sendBeaconWith: function(params) {
    if (this.enableTracking) {
      this[this.beaconMethod].call(this, this.prepareUrl(params));
    }
  },
  plainBeacon: function(url) {
    var img = new Image();
    img.src = url;
    img.width = 1;
    img.height = 1;
    img.alt = '';
  },
  navigatorSendBeacon: function(url) {
    navigator.sendBeacon(url);
  },
  prepareUrl: function(params) {
    var obj = this.settings;
    SL.extend(obj, this.dataProvider.provide());
    SL.extend(obj, params);
    return this.preparePrefix(this.settings.collectionServer) +
      this.adapt.convertToURI(
        this.adapt.toNielsen(
          this.substituteVariables(obj)));
  },
  preparePrefix: function(server) {
    return '//' + encodeURIComponent(server) + '.imrworldwide.com/cgi-bin/gn?';
  },
  substituteVariables: function(hash){
    var obj = {};
    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }
    return obj;
  },
  prepareContextData: function() {
    if (!this.getAnalyticsTool()) {
      this.notify('Adobe Analytics missing.');
      return;
    }
    var obj = this.settings;
    obj.sdkVersion =_satellite.publishDate;
    this.getAnalyticsTool().$setVars(null, null, {
      contextData: this.adapt.toAnalytics(
        this.substituteVariables(obj))
    });
  },
  isHuman: function() {
    return this.human;
  },
  onTabFocus: function() {},
  onPageLeave: function() {},
  onHumanDetectionChange: function() {},
  notify: function(msg, lvl) {
    SL.notify(this.logPrefix + msg, lvl);
  },
  beaconMethod: 'plainBeacon',
  adapt: null,
  enableTracking: false,
  logPrefix: "Nielsen: ",
  tabEverVisible: false,
  human: true,
  magicConst: 0x1e8480
});

// `NielsenTool.DataProvider`
// ==========================
//
// The following components handle the task of providing extra information
// for the Nielsen beacon, with support for asynchronous data
//
NielsenTool.DataProvider = {};
NielsenTool.DataProvider.Generic = function(key, valueFn) {
  this.key = key;
  this.valueFn = valueFn;
};

SL.extend(NielsenTool.DataProvider.Generic.prototype, {
  isReady: function() {
    return true;
  },

  getValue: function() {
    return this.valueFn();
  },

  provide: function() {
    if (!this.isReady()) {
      NielsenTool.prototype.notify('Not yet ready to provide value for: ' + this.key, 5)
    }
    var data = {};
    data[this.key] = this.getValue();
    return data;
  }
});

// `NielsenTool.DataProvider.VisitorID`
// ====================================
//
// Gets and optionally waits for Marketing Cloud ID to be loaded.
// If no visitor instance is provided, then it falls-back to generated UUID.
//
NielsenTool.DataProvider.VisitorID = function(visitorInstance, key, fallbackProvider) {
  this.key = key || 'uuid';
  this.visitorInstance = visitorInstance;
  if (this.visitorInstance) {
    this.visitorId = visitorInstance.getMarketingCloudVisitorID([this, this._visitorIdCallback]);
  }
  this.fallbackProvider = fallbackProvider || new NielsenTool.UUID();
};

SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic);
SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
  isReady: function() {
    if (this.visitorInstance === null) {
      return true;
    }
    return !!this.visitorId;
  },

  getValue: function() {
    return this.visitorId || this.fallbackProvider.get();
  },

  _visitorIdCallback: function(id) {
    this.visitorId = id;
  }
});

// `NielsenTool.DataProvider.Aggregate`
// ====================================
//
// Aggregates data from multiple providers, being aware of their ready-state.
//
NielsenTool.DataProvider.Aggregate = function() {
  this.providers = [];
  for (var i=0; i<arguments.length; i++) {
    this.register(arguments[i]);
  }
};

SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
  register: function(provider) {
    this.providers.push(provider);
  },

  isReady: function() {
    return SL.every(this.providers, function(provider) {
      return provider.isReady();
    });
  },

  provide: function() {
    var data = {};
    SL.each(this.providers, function(provider) {
      SL.extend(data, provider.provide());
    });
    return data;
  }
});

// `UUID`
// ===============
//
// The follwing generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
// uinique ID and stores it in a cookie.

NielsenTool.UUID = function() {};

SL.extend(NielsenTool.UUID.prototype, {
  // `generate()`
  // ------------------------------------------------
  //
  // Method that generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
  // compliant unique ID.
  //
  // This is needed in for Nielsen tracking w/o Analytics integration.
  generate: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  get: function() {
    var cookieUUID = SL.readCookie(this.key('uuid'));
    if (cookieUUID) return cookieUUID;
    cookieUUID = this.generate();
    SL.setCookie(this.key('uuid'), cookieUUID);
    return cookieUUID;
  },
  key: function(name) {
    return '_dtm_nielsen_' + name;
  }
});

// `Data Adapters`
// ===============
//
// The follwing adapters are used to adapt the settings to the proper format
// for both Nielsen tracking call and AA tracking calls

NielsenTool.DataAdapters = function() {};

SL.extend(NielsenTool.DataAdapters.prototype, {
  toNielsen: function(settings) {
    var cdate = new Date().getTime(),
        nielsenPrefixes = {
          c6: 'vc,',
          c13: 'asid,',
          c15: 'apn,',
          c27: 'cln,',
          c32: 'segA,',
          c33: 'segB,',
          c34: 'segC,',
          c35: 'adrsid,',
          c29: 'plid,',
          c30: 'bldv,',
          c40: 'adbid,'
        },
        nielsenObj = {
          ci: settings.clientId,
          c6: settings.vcid,
          c13: settings.appId,
          c15: settings.appName,
          prv: 1,
          forward: 0,
          ad: 0,
          cr: settings.duration || 'V', // [V|D], default V
          rt: 'text',
          st: 'dcr',
          prd: 'dcr',
          r: cdate,
          at: settings.timer || 'view', // [view|timer], default view
          c16: settings.sdkVersion,
          c27: settings.timeOnPage || 0,
          c40: settings.uuid,
          c35: settings.rsid,
          ti: cdate,
          sup: 0,
          c32: settings.segmentA,
          c33: settings.segmentB,
          c34: settings.segmentC,
          asn: settings.assetName,
          c29: settings.playerID,
          c30: settings.buildVersion
        };
    for (key in nielsenObj) {
      if (nielsenObj[key] !== undefined && nielsenObj[key] != null) {
        if (nielsenObj[key] !== undefined && nielsenObj != null && nielsenObj != '') {
          var val = encodeURIComponent(nielsenObj[key]);
          if (nielsenPrefixes.hasOwnProperty(key) && val) {
            val = nielsenPrefixes[key] + val;
          }
          nielsenObj[key] = val;
        }
      }
    }
    return this.filterObject(nielsenObj);
  },
  toAnalytics: function(settings) {
    return this.filterObject({
      'a.nielsen.clientid': settings.clientId,
      'a.nielsen.vcid': settings.vcid,
      'a.nielsen.appid': settings.appId,
      'a.nielsen.appname': settings.appName,
      'a.nielsen.accmethod': "0",
      'a.nielsen.ctype': "text",
      'a.nielsen.sega': settings.segmentA,
      'a.nielsen.segb': settings.segmentB,
      'a.nielsen.segc': settings.segmentC,
      'a.nielsen.asset': settings.assetName
    });
  },
  convertToURI: function(obj) {
    if (SL.isObject(obj) === false) return '';
    var uri = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) uri.push(key + '=' + obj[key]);
    }
    return uri.join('&')
  },
  filterObject: function(obj) {
    for (var k in obj) {
      if (obj.hasOwnProperty(k) &&
        (obj[k] == null || obj[k] === undefined)) {
        delete obj[k];
      }
    }
    return obj;
  }
});

SL.availableTools.nielsen = NielsenTool;

// The Adobe Target Tool
// ==================
//
// This tool interacts with [Adobe Target library](https://git.corp.adobe.com/mc-visitor/VisitorAPI).
//
// The tool accepts the following settings:
//
// - `engine` - The engine identifier (tnt)
// - `mboxURL` - The URL where the mbox can be found
// - `loadSync` - Specifies how the mbox should be loaded. A true value means
//      that it should be loaded in a synchronous mode.
// - `pageParams` - Object containing key/value pairs used in the mbox retrieval
//      call. The pairs are merged onto the `targetPageParams` property of
//      Target Javascript library. For more information click
//      [here](https://marketing.adobe.com/resources/help/en_US/target/target/c_pass_parameters_to_global_mbox.html).

function Tnt(settings){
  SL.BaseTool.call(this, settings)

  this.styleElements = {}
  this.targetPageParamsStore = {}
}

SL.inherit(Tnt, SL.BaseTool)

SL.extend(Tnt.prototype, {
  // Public
  // ------------------------------------------------
  name: 'tnt',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // When the tool is initialized the global `targetPageParams` are updated with
  // the parameters provided in the settings.
  //
  // It is important to know that the `targetPageParams` property is not
  // overwritten instead a merging process is taking place. If a key is already
  // present then its value is updated.
  //
  // The last step is the loading of the mbox where the `mboxURL` is used.

  endPLPhase: function(pageLoadEvent) {
    if (pageLoadEvent === 'aftertoolinit') {
      this.initialize();
    }
  },

  // Private
  // ------------------------------------------------
  initialize: function() {
    SL.notify('Test & Target: Initializing', 1)
    this.initializeTargetPageParams()
    this.load()
  },

  initializeTargetPageParams: function() {
    if (window.targetPageParams) {
      this.updateTargetPageParams(
        this.parseTargetPageParamsResult(
          window.targetPageParams()
        )
      )
    }

    this.updateTargetPageParams(this.settings.pageParams)
    this.setTargetPageParamsFunction()
  },

  load: function(){
    var url = this.getMboxURL(this.settings.mboxURL)
    if (this.settings.initTool !== false){
      if (this.settings.loadSync) {
        SL.loadScriptSync(url)
        this.onScriptLoaded()
      } else {
        SL.loadScript(url, SL.bind(this.onScriptLoaded, this))
        this.initializing = true
      }
    } else {
      this.initialized = true
    }
  },

  getMboxURL: function(urlData) {
    var url = urlData
    if (SL.isObject(urlData)) {
      if (window.location.protocol === 'https:')
        url = urlData.https
      else
        url = urlData.http
    }
    if (!url.match(/^https?:/))
      return SL.basePath() + url
    else
      return url
  },

  onScriptLoaded: function(){
    SL.notify('Test & Target: loaded.', 1)

    this.flushQueue()

    this.initialized = true
    this.initializing = false
  },

  $addMbox: function(elm, evt, settings){
    var mboxGoesAround = settings.mboxGoesAround
    var styleText = mboxGoesAround + '{visibility: hidden;}'
    var styleElm = this.appendStyle(styleText)
    if (!(mboxGoesAround in this.styleElements)){
      this.styleElements[mboxGoesAround] = styleElm
    }

    if (this.initialized){
      this.$addMBoxStep2(null, null, settings)
    }else if (this.initializing){
      this.queueCommand({
        command: 'addMBoxStep2'
        , "arguments": [settings]
      }, elm, evt)
    }
  },
  $addMBoxStep2: function(elm, evt, settings){
    var mboxID = this.generateID()
    var self = this
    SL.addEventHandler(window, 'load', SL.bind(function(){
      SL.cssQuery(settings.mboxGoesAround, function(elms){
        var elem = elms[0]
        if (!elem) return
        var newDiv = document.createElement("div")
        newDiv.id = mboxID
        elem.parentNode.replaceChild(newDiv, elem)
        newDiv.appendChild(elem)
        window.mboxDefine(mboxID, settings.mboxName)
        var args = [settings.mboxName]
        if (settings.arguments){
          args = args.concat(settings.arguments)
        }
        window.mboxUpdate.apply(null, args)
        self.reappearWhenCallComesBack(elem, mboxID, settings.timeout, settings)
      });
    }, this))
    this.lastMboxID = mboxID // leave this here for easier testing
  },

  $addTargetPageParams: function(elm, evt, pageParams) {
    this.updateTargetPageParams(pageParams)
  },

  generateID: function(){
    var id = '_sdsat_mbox_' + String(Math.random()).substring(2) + '_'
    return id
  },
  appendStyle: function(css){
    var head = document.getElementsByTagName('head')[0], 
        style = document.createElement('style');
        
    style.type = 'text/css';
    if(style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    
    head.appendChild(style);
    return style;
  },
  reappearWhenCallComesBack: function(elmGoesAround, mboxID, timeout, settings){
    var self = this

    function reappear(){
      var styleElm = self.styleElements[settings.mboxGoesAround]
      if (styleElm){
        styleElm.parentNode.removeChild(styleElm)
        ;delete self.styleElements[settings.mboxGoesAround]
      }
    }

    SL.cssQuery('script[src*="omtrdc.net"]', function(results){
      var script = results[0]
      if (script){
        SL.scriptOnLoad(script.src, script, function(){
          SL.notify('Test & Target: request complete', 1)
          reappear()
          clearTimeout(timeoutID)
        })
        var timeoutID = setTimeout(function(){
          SL.notify('Test & Target: bailing after ' + timeout + 'ms', 1)
          reappear()
        }, timeout)
      }else{
        SL.notify('Test & Target: failed to find T&T ajax call, bailing', 1)
        reappear()
      }
    })
  },

  updateTargetPageParams: function(obj) {
    var o = {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[SL.replace(key)] = SL.replace(obj[key])
      }
    }
    SL.extend(
      this.targetPageParamsStore,
      o
    )
  },

  getTargetPageParams: function() {
    return this.targetPageParamsStore
  },

  setTargetPageParamsFunction: function() {
    window.targetPageParams = SL.bind(this.getTargetPageParams, this)
  },

  parseTargetPageParamsResult: function(data) {
    var result = data

    if(SL.isArray(data)) {
      data = data.join('&')
    }

    if (SL.isString(data)) {
      result = SL.parseQueryParams(data)
    }

    return result
  }
})
SL.availableTools.tnt = Tnt

// The Default Tool
// ================
//
// The default tool comes with several handy utilities.

function DefaultTool(){
  SL.BaseTool.call(this)

  this.asyncScriptCallbackQueue = []
  this.argsForBlockingScripts = []
}
SL.inherit(DefaultTool, SL.BaseTool)
SL.extend(DefaultTool.prototype, {
  name: 'Default',

  // `loadIframe(src, variables)`
  // ----------------------------
  //
  // Dynamically create an iframe to load a URL.
  //
  // - src - the URL to load
  // - variables - an object literal of which the key/value pairs will be used
  //      to create the query string to use in the src URL
  $loadIframe: function(elm, evt, options){
    var pages = options.pages
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(pages, function(page){
        this.loadIframe(elm, evt, page)
      }, this)
    }, this)
    if (!loadOn) doit()
    if (loadOn === 'domready') SL.domReady(doit)
    if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadIframe: function(elm, evt, page){
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    var host = SL.data.host
      , data = page.data
      , src = this.scriptURL(page.src)
      , search = SL.searchVariables(data, elm, evt)
    if (host)
      src = SL.basePath() + src
    src += search
    iframe.src = src
    var body = document.getElementsByTagName('body')[0]
    if (body)
      body.appendChild(iframe)
    else
      SL.domReady(function(){
        document.getElementsByTagName('body')[0].appendChild(iframe)
      })
  },

  scriptURL: function(url){
    var scriptDir = SL.settings.scriptDir || ''
    return scriptDir + url
  },

  // `loadScript(options)
  // ------------------------------
  //
  // Load any number of Javascript files using dynamically generated script tags.
  // If you provide multiple file URLs, they will be loaded sequentially.
  $loadScript: function(elm, evt, options){
    var scripts = options.scripts
      , sequential = options.sequential
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      if (sequential){
        this.loadScripts(elm, evt, scripts)
      }else{
        SL.each(scripts, function(script){
          this.loadScripts(elm, evt, [script])
        }, this)
      }
    }, this)

    if (!loadOn) doit()
    else if (loadOn === 'domready') SL.domReady(doit)
    else if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadScripts: function(elm, evt, scripts) {
    try{
    var scripts = scripts.slice(0)
      , q = this.asyncScriptCallbackQueue
      , lastScript
      , target = evt.target || evt.srcElement
      , self = this
    }catch(e){
      console.error('scripts is', SL.stringify(scripts))
    }
    function loadNext(){
      if (q.length > 0 && lastScript){
        var callback = q.shift()
        callback.call(elm, evt, target)
      }
      var script = scripts.shift()
      if (script){
        var host = SL.data.host
          , src = self.scriptURL(script.src)
        if (host)
          src = SL.basePath() + src
        lastScript = script
        SL.loadScript(src, loadNext)
      }
    }
    loadNext()
  },

  $loadBlockingScript: function(elm, evt, options){
    var scripts = options.scripts
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(scripts, function(script){
        this.loadBlockingScript(elm, evt, script)
      }, this)
    }, this)
    //if (!loadOn || loadOn === evt.type) doit()
    doit()
  },

  loadBlockingScript: function(elm, evt, script){
    /*jshint evil:true */
    var src = this.scriptURL(script.src)
      , host = SL.data.host
      , target = evt.target || evt.srcElement
    if (host)
      src = SL.basePath() + src
    this.argsForBlockingScripts.push([elm, evt, target])
    SL.loadScriptSync(src)
  },

  pushAsyncScript: function(callback){
    this.asyncScriptCallbackQueue.push(callback)
  },

  pushBlockingScript: function(callback){
    var args = this.argsForBlockingScripts.shift()
    var element = args[0]
    callback.apply(element, args.slice(1))
  },

  // `writeHTML(html)`
  // -----------------
  //
  // Write an HTML fragment onto the page using `document.write()`.
  //
  // - `html` - the HTML fragment
  $writeHTML: SL.escapeHtmlParams(function(elm, evt){
    /*jshint evil:true */
    if (SL.domReadyFired || !document.write){
      SL.notify('Command writeHTML failed. You should try appending HTML using the async option.', 1)
      return
    }
    if (evt.type !== 'pagebottom' && evt.type !== 'pagetop'){
      SL.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1)
      return
    }
    for (var i = 2, len = arguments.length; i < len; i++){
      var html = arguments[i].html
      html = SL.replace(html, elm, evt)
      document.write(html)
    }
  }),

  linkNeedsDelayActivate: function(a, win){
    win = win || window
    var tagName = a.tagName
      , target = a.getAttribute('target')
      , location = a.getAttribute('href')
    if (tagName && tagName.toLowerCase() !== 'a')
      return false
    if (!location)
      return false
    else if (!target)
      return true
    else if (target === '_blank')
      return false
    else if (target === '_top')
      return win.top === win
    else if (target === '_parent')
      return false
    else if (target === '_self')
      return true
    else if (win.name)
      return target === win.name
    else
      return true
  },

  // `delayActivateLink()`
  // ---------------------
  //
  // Delay the activation of an anchor link by first using `evt.preventDefault()` on
  // the click event, and then setting the window location to the destination after
  // a small delay. The default delay is 100 milliseconds, which can be configured in
  // `_satellite.settings.linkDelay`
  $delayActivateLink: function(elm, evt){
    if (!this.linkNeedsDelayActivate(elm)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      SL.setLocation(elm.href)
    }, linkDelay)
  },

  isQueueable: function(trig){
    return trig.command !== 'writeHTML'
  }
})
SL.availableTools['default'] = DefaultTool

// Adobe Analytics Tool
// ================
//
// This tool interacts with the [AppMeasurement library](http://microsite.omniture.com/t2/help/en_US/sc/appmeasurement/release/c_release_notes_mjs.html)
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (sc)
// - `initVars` - It's an array containing key/value pair of AppMeasurement's
//      properties that are used in tracking and for settings. An example of
//      such pair would be: `{ eVar6: "6", server: "tracking.server"}`. For a
//      list of all supported properties please consult the [AppMeasurement's
//      documentation](http://microsite.omniture.com/t2/help/en_US/sc/implement/sc_variables.html).
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `sCodeURL` - Custom URL of the AppMeasurement Javascript library URL
//      location.
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `account` - String containing the report suite ID to track to.
// - `skipSetAccount` - Boolean value that when true disables setting
//      of the `account` with the value provided in settings. Default value
//      is no being set.
// - `euCookie' - Please see the description on SL (core.js) code
// - `renameS` - String specifying the name of the global AppMeasurement
//      instance. If no provided `s` is implied.
// - `executeCustomPageCodeFirst` - Boolean flag that lets the custom
//      initialization code be executed before or after the `initVars` method
//      call. Default value is not set which means false.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call. A false value results in disabling the initial
//      page view tracking call.
//
// The SiteCatalystTool allows to set variables, add events, track link, etc.
// Example:
//
//      trigger: [
//          {
//              tool: "sc",
//              command: "trackLink"
//          }
//      ]
//
function SiteCatalystTool(settings){
  SL.BaseTool.call(this, settings)

  this.varBindings = {}
  this.events = []
  this.products = []
  this.customSetupFuns = []
}
SL.inherit(SiteCatalystTool, SL.BaseTool)
SL.extend(SiteCatalystTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'SC',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      this.initialize(pageLoadEvent)
    }
  },

  // Private
  // ------------------------------------------------

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first check to see if the default initialization is specifically
  // canceled.
  //
  // Then it sets an event listener on `pageLoadeEvent` to update the tracking
  // variables with the ones provided in `initVars` setting object.
  //
  // In case that the user chosen to provide the Javascript code for
  // AppMeasurement by himself instead of using the automatic management
  // then we wait for the library to load.
  //
  // Otherwise we load the AppMeasurement from the storage and then set the
  // setup variables on the tracker object.
  initialize: function(pageLoadEvent){
    if (this._cancelToolInit) return
    this.settings.initVars = this.substituteVariables(
      this.settings.initVars, { type: pageLoadEvent }
    )

    if (this.settings.initTool !== false){
      var url = this.settings.sCodeURL || SL.basePath() + 's_code.js'
      if (typeof url === 'object'){
        if (window.location.protocol === 'https:')
          url = url.https
        else
          url = url.http
      }
      if (!url.match(/^https?:/))
        url = SL.basePath() + url
      if (this.settings.initVars){
        this.$setVars(null, null, this.settings.initVars)
      }
      SL.loadScript(url, SL.bind(this.onSCodeLoaded, this))
      this.initializing = true
    }else{
      // Set to initializing because we are
      // waiting on the AppMeasurement/s_code library to be loaded by
      // the site and we'll detect the completion of the load
      // in a background task.
      this.initializing = true
      this.pollForSC()
    }
  },

  // `getS(s, options)`
  // ------------------------------------------------
  //
  // The method initializes the `s` object.
  //
  // A notificaiton is given and `null` is returned in case of not finding
  // the account/RSID.
  //
  // If Marketing Cloud Visitor ID Service is used that instance is linked
  // with the instatiated `s` object.
  getS: function(s, options){
    var hostname = options && options.hostname || window.location.hostname
    var varBindings = this.concatWithToolVarBindings(
      options && options.setVars || this.varBindings
    )
    var events = options && options.addEvent || this.events
    var acct = this.getAccount(hostname)
    var s_gi = window.s_gi
    if (!s_gi) return null
    if (!this.isValidSCInstance(s)) s = null
    if (!acct && !s) {
      SL.notify('Adobe Analytics: tracker not initialized because account was not found', 1)
      return null
    }
    var s = s || s_gi(acct)

    var DTMversion = 'D' + SL.appVersion;
    if(typeof s.tagContainerMarker !== 'undefined') {
      s.tagContainerMarker = DTMversion
    } else {
      if (typeof s.version === 'string' &&
        s.version.substring(s.version.length - 5) !==
          ('-' + DTMversion)){
        s.version += '-' + DTMversion
      }
    }

    if (s.sa && this.settings.skipSetAccount !== true && this.settings.initTool !== false) s.sa(this.settings.account)
    this.applyVarBindingsOnTracker(s, varBindings)
    if (events.length > 0)
      s.events = events.join(',')

    var visitorIdInstance = SL.getVisitorId()
    if (visitorIdInstance) {
      s.visitor = SL.getVisitorId()
    }

    return s
  },

  // `onSCodeLoaded()`
  // ------------------------------------------------
  //
  // The method triggers load event on Analytics tool so all subsequent and
  // listening methods would be properly triggered.
  //
  // Before cleaning up the queue the tracking beacon call is made.
  onSCodeLoaded: function(loaded_manually){
    this.initialized = true
    this.initializing = false

    var msg = [
      'Adobe Analytics: loaded',
      loaded_manually ? ' (manual)' : '',
      '.'
    ]
    SL.notify(msg.join(''), 1)

    SL.fireEvent(this.id + '.load', this.getS())

    if (!loaded_manually) {
      this.flushQueueExceptTrackLink()
      this.sendBeacon()
    }

    this.flushQueue()
  },

  // `getAccount(hostname)`
  // ------------------------------------------------
  //
  // The returns the `s_account` for a specified `hostname`
  //
  // TODO: need to be refactored because `accountByHost` is no longer used.
  getAccount: function(hostname){
    if (window.s_account){
      return window.s_account
    }
    if (hostname && this.settings.accountByHost){
      return this.settings.accountByHost[hostname] || this.settings.account
    }else{
      return this.settings.account
    }
  },

  // `getTrackingServer()`
  // ------------------------------------------------
  //
  // The method tries to retrieve the tracking server from the `s` object
  // otherwise falls back on generating one based on the `account`.
  //
  // If neither `account` or `trackingServer` are availalble, `null` is
  // returned.
  //
  // TODO: need to be refactored to remove the tracking server generate method
  // as Analytics now offers a central point to shoot to.
  getTrackingServer: function(){
    var tool = this
    var s = tool.getS()
    if (s) {
      if (s.ssl && s.trackingServerSecure) {
        return s.trackingServerSecure
      }
      else if (s.trackingServer) {
        return s.trackingServer
      }
    }
    var account = tool.getAccount(window.location.hostname)
    if (!account) return null
    // Based on code in app measurement.
    var w
    var c = ''
    var d = s && s.dc
    var e
    var f
    w = account
    e = w.indexOf(",")
    e >= 0 && (w = w.gb(0, e))
    w = w.replace(/[^A-Za-z0-9]/g, "")
    c || (c = "2o7.net")
    d = d ? ("" + d).toLowerCase() : "d1"
    c == "2o7.net" && (d == "d1" ? d = "112" : d == "d2" && (d = "122"), f = "")
    e = w + "." + d + "." + f + c
    return e
  },

  // `sendBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the tracking call.
  //
  // If custom initialization is used the beacon is supressed. Also, if custom
  // code is provided and specifically stated that it should be executed first
  // (`executeCustomPageCodeFirst`) the tracker get updated with the result of
  // the code.
  sendBeacon: function(){
    var s = this.getS(window[this.settings.renameS || 's'])
    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    if (this.settings.customInit){
      if (this.settings.customInit(s) === false){
        SL.notify("Adobe Analytics: custom init suppressed beacon", 1)
        return
      }
    }

    if (this.settings.executeCustomPageCodeFirst) {
      this.applyVarBindingsOnTracker(s, this.varBindings)
    }
    this.executeCustomSetupFuns(s)
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  pollForSC: function(){
    SL.poll(SL.bind(function(){
      if (typeof window.s_gi === 'function'){
        this.onSCodeLoaded(true)
        return true
      }
    }, this))
  },
  flushQueueExceptTrackLink: function(){
    // Because we always s.tl() after the first s.t()
    // that way the variables set by s.tl() will not
    // contaminate the s.t() call.
    if (!this.pending) return
    var left = []
    for (var i = 0; i < this.pending.length; i++){
      var args = this.pending[i]
      var trig = args[0]
      if (trig.command === 'trackLink'){
        left.push(args)
      }else{
        this.triggerCommand.apply(this, args)
      }
    }
    this.pending = left
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  substituteVariables: function(obj, evt){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)) {
        var value = obj[key]
        ret[key] = SL.replace(value, location, evt)
      }
    }
    return ret
  },
  $setVars: function(elm, evt, vars){
    for (var v in vars){
      if (vars.hasOwnProperty(v)) {
        var val = vars[v]
        if (typeof val === 'function')
          val = val()
        this.varBindings[v] = val
      }
    }
    SL.notify('Adobe Analytics: set variables.', 2)
  },
  $customSetup: function(elm, evt, setup){
    this.customSetupFuns.push(function(s){
      setup.call(elm, evt, s)
    })
  },
  isValidSCInstance: function(s) {
    return !!s && typeof s.t === 'function' && typeof s.tl === 'function'
  },
  concatWithToolVarBindings: function(varBindings){
    var settingsInitVars = this.settings.initVars || {}

    SL.map(['trackingServer', 'trackingServerSecure'], function (item) {
      if (settingsInitVars[item] && !varBindings[item]) {
        varBindings[item] = settingsInitVars[item]
      }
    });

    return varBindings
  },
  applyVarBindingsOnTracker: function (s, varBindings) {
    for (var v in varBindings){
      if (varBindings.hasOwnProperty(v)) {
        s[v] = varBindings[v]
      }
    }
  },
  clearVarBindings: function(){
    this.varBindings = {}
  },
  clearCustomSetup: function(){
    this.customSetupFuns = []
  },
  executeCustomSetupFuns: function(s){
    SL.each(this.customSetupFuns, function(fun){
      fun.call(window, s)
    })
  },
  $trackLink: function(elm, evt, params){
    params = params || {}
    var type = params.type
    var linkName = params.linkName
    if (!linkName &&
      elm &&
      elm.nodeName &&
      elm.nodeName.toLowerCase() === 'a'){
      linkName = elm.innerHTML
    }
    if (!linkName){
      linkName = 'link clicked'
    }
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }

    var orgLinkTrackVars = s.linkTrackVars
    var orgLinkTrackEvents = s.linkTrackEvents
    var definedVarNames = this.definedVarNames(vars)

    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }

    if (events.length > 0)
      definedVarNames.push('events')
    if (s.products)
      definedVarNames.push('products')

    // add back the vars from s
    definedVarNames = this.mergeTrackLinkVars(s.linkTrackVars, definedVarNames)

    // add back events from s
    events = this.mergeTrackLinkVars(s.linkTrackEvents, events)

    s.linkTrackVars = this.getCustomLinkVarsList(definedVarNames)

    var eventsKeys = SL.map(events, function(item) {
      return item.split(':')[0]
    });
    s.linkTrackEvents = this.getCustomLinkVarsList(eventsKeys)

    s.tl(true, type || 'o', linkName)
    SL.notify([
      'Adobe Analytics: tracked link ',
      'using: linkTrackVars=',
      SL.stringify(s.linkTrackVars),
      '; linkTrackEvents=',
      SL.stringify(s.linkTrackEvents)
    ].join(''), 1)

    s.linkTrackVars = orgLinkTrackVars
    s.linkTrackEvents = orgLinkTrackEvents
  },
  mergeTrackLinkVars: function(newVarsStr, varsArr){
    if (newVarsStr) {
      varsArr = newVarsStr.split(',').concat(varsArr)
    }

    return varsArr
  },
  getCustomLinkVarsList: function (keysArr) {
    var noneIndex = SL.indexOf(keysArr, 'None');
    if (noneIndex > -1 && keysArr.length > 1) {
      keysArr.splice(noneIndex, 1)
    }

    return keysArr.join(',');
  },
  definedVarNames: function(vars){
    vars = vars || this.varBindings
    var ret = []
    for (var varname in vars){
      if (vars.hasOwnProperty(varname) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(varname))
        ret.push(varname)
    }
    return ret
  },
  $trackPageView: function(elm, evt, params){
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    s.linkTrackVars = ''
    s.linkTrackEvents = ''
    this.executeCustomSetupFuns(s)
    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.transaction = window[varname]
      , s = this.varBindings
      , mapping = this.settings.fieldVarMapping

    SL.each(trans.items, function(item){
      this.products.push(item)
    }, this)

    s.products = SL.map(this.products, function(item){
      var vars = []
      if (mapping && mapping.item){
        for (var field in mapping.item){
          if (mapping.item.hasOwnProperty(field)) {
            var varname = mapping.item[field]
            vars.push(varname + '=' + item[field])
            if (varname.substring(0, 5) === 'event')
              this.events.push(varname)
          }
        }
      }
      var arr = ['', item.product, item.quantity, item.unitPrice * item.quantity]
      if (vars.length > 0)
        arr.push(vars.join('|'))
      return arr.join(';')
    }, this).join(',')

    if (mapping && mapping.transaction){
      // Add top-level events/eVars to products string.
      var topLevelVars = []
      for (var field in mapping.transaction){
        if (mapping.transaction.hasOwnProperty(field)) { 
          var varname = mapping.transaction[field]
          topLevelVars.push(varname + '=' + trans[field])
          if (varname.substring(0, 5) === 'event')
            this.events.push(varname)
        }
      }
      if (s.products.length > 0)
        s.products += ','
      s.products += ';;;;' + topLevelVars.join('|')
    }


  },
  $addEvent: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.events.push(arguments[i])
    }
  },
  $addProduct: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.products.push(arguments[i])
    }
  }

})
SL.availableTools.sc = SiteCatalystTool

// Basic Tool
// ------------
//
// This is a generic tool that allows integrating with
// various simple tools.
//

function BasicTool(settings){
  SL.BaseTool.call(this, settings)

  this.name = settings.name || 'Basic'
}

SL.inherit(BasicTool, SL.BaseTool)

SL.extend(BasicTool.prototype, {
  initialize: function(){
    var settings = this.settings
    if (this.settings.initTool !== false){
      var url = settings.url
      if (typeof url === 'string'){
        url = SL.basePath() + url
      }else{
        url = SL.isHttps() ? url.https : url.http
      }
      SL.loadScript(url, SL.bind(this.onLoad, this))
      this.initializing = true
    }else{
      this.initialized = true
    }
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  onLoad: function(){
    this.initialized = true
    this.initializing = false
    if (this.settings.initialBeacon){
      this.settings.initialBeacon()
    }
    this.flushQueue()
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify(this.name + ': Initializing at ' + pageLoadEvent, 1)
      this.initialize()
    }
  },
  $fire: function(elm, evt, fun){
    if (this.initializing){
      this.queueCommand({
        command: 'fire',
        arguments: [fun]
      }, elm, evt)
      return
    }
    fun.call(this.settings, elm, evt)
  }
})

SL.availableTools.am = BasicTool
SL.availableTools.adlens = BasicTool
SL.availableTools.aem = BasicTool
SL.availableTools.__basic = BasicTool

// Google Analytics Tool
// ---------------------
//
// The GATool allows you to use any Google Analytics command.
// Example:
//
//      trigger: [
//          {
//              tool: "ga",
//              command: "trackEvent",
//              arguments: [
//                  "video",
//                  "video 10% complete"
//              ]
//          }
//      ]
//
// This trigger will call the `trackEvent` method, which is equivalent to
//
//     _gaq.push(['_trackEvent', 'video', 'video 10% complete'])
function GATool(settings){
  SL.BaseTool.call(this, settings)
}
SL.inherit(GATool, SL.BaseTool)
SL.extend(GATool.prototype, {
  name: 'GA',
  initialize: function(){
    var settings = this.settings
    var before = window._gaq
      , initCommands = settings.initCommands || []
      , customInit = settings.customInit

    if (!before){
      // And yes, I *do* mean to set a global variable
      // of `_gaq` here
      _gaq = []
    }

    if (!this.isSuppressed()){
      if (!before && !GATool.scriptLoaded){
        var https = SL.isHttps()
        var url =
          (https ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js'
        if (settings.url){
          url = https ? settings.url.https : settings.url.http
        }
        SL.loadScript(url)
        GATool.scriptLoaded = true
        SL.notify('GA: page code loaded.', 1)
      }
      var domain = settings.domain
        , trackerName = settings.trackerName
        , allowLinker = GAUtils.allowLinker()
        , account = SL.replace(settings.account, location)
        , domainList = SL.settings.domainList || []
      _gaq.push([this.cmd('setAccount'), account])
      if (allowLinker)
        _gaq.push([this.cmd('setAllowLinker'), allowLinker])
      _gaq.push([this.cmd('setDomainName'), GAUtils.cookieDomain()])
      SL.each(initCommands, function(cmd){
        var arr = [this.cmd(cmd[0])].concat(SL.preprocessArguments(cmd.slice(1), location, null, this.forceLowerCase))
        _gaq.push(arr)
      }, this)
      if (customInit)
        this.suppressInitialPageView = false === customInit(_gaq, trackerName)
      if (settings.pageName)
        this.$overrideInitialPageView(null, null, settings.pageName)
    }else{
      SL.notify('GA: page code not loaded(suppressed).', 1)
    }

    this.initialized = true
    SL.fireEvent(this.id + '.configure', _gaq, trackerName)

  },
  isSuppressed: function(){
    return this._cancelToolInit || this.settings.initTool === false
  },
  tracker: function(){
    return this.settings.trackerName
  },
  cmd: function(cmd){
    var tracker = this.tracker()
    return tracker ? tracker + '._' + cmd : '_' + cmd
  },
  $overrideInitialPageView: function(elm, evt, url){
    this.urlOverride = url
  },
  trackInitialPageView: function(){
    if (this.isSuppressed()) return
    if (this.suppressInitialPageView) return
    if (this.urlOverride){
      var args = SL.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase)
      this.$missing$('trackPageview', null, null, args)
    }else{
      this.$missing$('trackPageview')
    }
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify('GA: Initializing at ' + pageLoadEvent, 1)
      this.initialize()
      this.flushQueue()
      this.trackInitialPageView()
    }
  },
  call: function(cmd, elm, evt, args){
    if (this._cancelToolInit) return
    var settings = this.settings
      , tracker = this.tracker()
      , fullCmd = this.cmd(cmd)
      , args = args ? [fullCmd].concat(args) : [fullCmd]
    _gaq.push(args)
    if (tracker)
      SL.notify("GA: sent command " + cmd + " to tracker " + tracker +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]" :
          '') + ".", 1)
    else
      SL.notify("GA: sent command " + cmd +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]":
          '') + ".", 1)
  },
  $missing$: function(cmd, elm, evt, args){
    this.call(cmd, elm, evt, args)
  },
  // individual command methods
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.customVars.transaction = window[varname]
    this.call('addTrans', elm, evt, [
      trans.orderID,
      trans.affiliation,
      trans.total,
      trans.tax,
      trans.shipping,
      trans.city,
      trans.state,
      trans.country
    ])
    SL.each(trans.items, function(item){
      this.call('addItem', elm, evt, [
        item.orderID,
        item.sku,
        item.product,
        item.category,
        item.unitPrice,
        item.quantity
      ])
    }, this)
    this.call('trackTrans', elm, evt)
  },
  delayLink: function(elm, evt){
    var ga = this
    if (!GAUtils.allowLinker()) return
    if (!elm.hostname.match(this.settings.linkerDomains)) return
    if (SL.isSubdomainOf(elm.hostname, location.hostname)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      ga.call('link', elm, evt, [elm.href])
    }, linkDelay)
  },
  popupLink: function(elm, evt){
    if (!window._gat) return
    SL.preventDefault(evt)
    var account = this.settings.account
    var tracker = window._gat._createTracker(account)
    var url = tracker._getLinkerUrl(elm.href)
    window.open(url)
  },
  $link: function(elm, evt){
    if (elm.getAttribute('target') === '_blank'){
      this.popupLink(elm, evt)
    }else{
      this.delayLink(elm, evt)
    }
  },
  $trackEvent: function(elm, evt){
    var args = Array.prototype.slice.call(arguments, 2)
    if (args.length >= 4 && args[3] != null){
      // acertain that the 4th element is a number, falling back to 1
      var value = parseInt(args[3], 10)
      if (SL.isNaN(value)){
        value = 1
      }
      args[3] = value
    }
    this.call('trackEvent', elm, evt, args)
  }
})
SL.availableTools.ga = GATool

var GAUtils = {
  allowLinker: function() {
    return SL.hasMultipleDomains();
  },
  cookieDomain: function() {
    var domainList = SL.settings.domainList;
    var domainName = SL.find(domainList, function(domain) {
      var hostname = window.location.hostname;
      return SL.equalsIgnoreCase(
        hostname.slice(hostname.length - domain.length),
        domain);
    });
    var cookieDomain = domainName ? ('.' + domainName) : 'auto';

    return cookieDomain;
  }
};

// The Google Analytics Universal Tool
// ================
//
// This tool interacts with the [GAU library](https://developers.google.com/analytics/devguides/collection/analyticsjs/).
//
// From a high end perspective the following steps will happen. A `ga` dummy
// object will be initialized. Until the `analytics.js` file will be loaded in
// the browser, any triggered command will be queued in the `ga` object. Once
// the `analytics.js` will finish to load, all the queued commands will be
// executed.
//
// The tool is initialized during one of the following page load phases:
// top, bottom. Find out more info about the initializing sequence by clicking
// [here](#-endplphase-).
//
// Data elements are replaced when the tracker is created and on the commands
// from `initCommands` array. For the other situations, the data elements are
// replaced in the `triggerCommand` method from BaseTool.
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (ga_universal)
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `url` - Custom URL of the `analytics.js` URL location. If none is provided
//      the Google default URL will be used.
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `trackerSettings` - Object containing properties that will be added on the
//      command that will create the GAU tracker. For a list of all supported
//      properties please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create)
// - `initCommands` - It's an array containing commands. A command example:
//      `["set", "anonymizeIp", true]`. For a list of all supported commands
//      please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference#tracker)
//      The commands defined here will be executed after the tracker is created.
// - `allowLinker` - Flag that will make the GAU library load the cross domain
//      linking plugin.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call.

function GAUniversalTool(settings) {
  SL.BaseTool.call(this, settings)
}

SL.inherit(GAUniversalTool, SL.BaseTool);

SL.extend(GAUniversalTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'GAUniversal',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent) {
    var settings = this.settings;
    var loadOn = settings.loadOn;

    if (pageLoadEvent === loadOn) {
      SL.notify('GAU: Initializing at ' + pageLoadEvent, 1);
      this.initialize();
      this.flushQueue();
      this.trackInitialPageView();
    }
  },

  // `getTrackerName()`
  // ------------------------------------------------
  //
  // Returns the name of the GA tracker initialized by this tool.
  getTrackerName: function () {
    return this.settings.trackerSettings.name || '';
  },

  // Private
  // ------------------------------------------------
  isPageCodeLoadSuppressed: function() {
    return this.settings.initTool === false || this._cancelToolInit === true;
  },

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first creates the GA scaffolding objects (the `ga` object and
  // the `GoogleAnalyticsObject` object.
  //
  // Then it loads the `analytics.js` library and append the command that will
  // create the GAU tracker object to the `ga` object.
  //
  // Next, the commands from the `initCommands` array will be appended to
  // the `ga` object. Finally the JS code defined in the `customInit` setting
  // variable will be called.
  initialize: function() {
    if (this.isPageCodeLoadSuppressed()) {
      this.initialized = true;
      SL.notify('GAU: Page code not loaded (suppressed).', 1);
      return;
    }

    var gaName = 'ga';

    window[gaName] = window[gaName] || this.createGAObject();
    window.GoogleAnalyticsObject = gaName;

    SL.notify('GAU: Page code loaded.', 1);
    SL.loadScriptOnce(this.getToolUrl());

    var settings = this.settings;

    if (GAUtils.allowLinker() && settings.allowLinker !== false) {
      this.createAccountForLinker();
    } else {
      this.createAccount();
    }

    this.executeInitCommands();

    if (settings.customInit){
      var customInit = settings.customInit
      var result = customInit(window[gaName], this.getTrackerName())
      if (result === false){
        this.suppressInitialPageView = true;
      }
    }

    this.initialized = true;
  },

  createGAObject: function() {
    var ga = function() {
      ga.q.push(arguments);
    };

    ga.q = [];
    ga.l = 1 * new Date();
    return ga;
  },

  createAccount: function() {
    this.create();
  },

  createAccountForLinker: function() {
    var options = {};
    if (GAUtils.allowLinker())
      options.allowLinker = true;

    this.create(options);
    this.call('require', 'linker');
    this.call('linker:autoLink', this.autoLinkDomains(), false, true);
  },

  create: function(extra){
    var options = this.settings.trackerSettings;
    options =
      SL.preprocessArguments([options], location, null, this.forceLowerCase)[0];
    options.trackingId =
      SL.replace(this.settings.trackerSettings.trackingId, location);

    if (!options.cookieDomain) {
      options.cookieDomain = GAUtils.cookieDomain();
    }

    SL.extend(options, extra || {});
    this.call('create', options);
  },

  autoLinkDomains: function() {
    var ourDomain = location.hostname;
    return SL.filter(SL.settings.domainList, function(domain) {
      return domain !== ourDomain;
    });
  },

  executeInitCommands: function() {
    var settings = this.settings;

    if (settings.initCommands) {
      SL.each(settings.initCommands, function(command) {
        var args = command.splice(2, command.length - 2);
        command = command.concat(
          SL.preprocessArguments(args, location, null, this.forceLowerCase)
        );
        this.call.apply(this, command);
      }, this);
    }
  },

  trackInitialPageView: function(){
    if (this.suppressInitialPageView || this.isPageCodeLoadSuppressed()) {
      return;
    }

    this.call('send', 'pageview');
  },

  call: function() {
    if (typeof ga !== 'function') {
      SL.notify('GA Universal function not found!', 4);
      return;
    }

    if (this.isCallSuppressed()) {
      return;
    }

    arguments[0] = this.cmd(arguments[0]);
    this.log(SL.toArray(arguments));
    ga.apply(window, arguments);
  },

  isCallSuppressed: function() {
    return this._cancelToolInit === true;
  },

  $missing$: function(command, elm, evt, args) {
    args = args || [];

    args = [command].concat(args);
    this.call.apply(this, args);
  },

  getToolUrl: function() {
    var settings = this.settings;
    var isHttps = SL.isHttps();

    if (settings.url) {
      return isHttps ? settings.url.https : settings.url.http;
    }

    return (isHttps ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
  },

  cmd: function(command) {
    var trackerCommands = ['send', 'set', 'get'];
    var trackerName = this.getTrackerName();

    if (!trackerName || SL.indexOf(trackerCommands, command) === -1) {
      return command;
    }

    return trackerName + '.' + command;
  },

  log: function(args) {
    var cmd = args[0];
    var tracker = this.getTrackerName() || 'default';

    var msg = 'GA Universal: sent command ' + cmd + ' to tracker ' + tracker;
    if (args.length > 1) {
      var parameters = SL.stringify(args.slice(1));
      msg += ' with parameters ' + SL.stringify(args.slice(1));
    }
    msg += '.';
    SL.notify(msg, 1);
  }
});

SL.availableTools.ga_universal = GAUniversalTool;

// The Marketing Cloud Visitor ID Service Tool
// ================
//
// This tool interacts with the [Visitor ID library](https://git.corp.adobe.com/mc-visitor/VisitorAPI/tree/master/js/src).
// The tool initilizes the Visitor ID library as soon as the tool itself is
// created, by calling the `initialize` method. Find out more info about the
// initializing sequence by clicking [here](#-initialize-).
//
// The tool accepts the following settings:
//
// - `mcOrgId` - The Adobe Marketing Cloud Organization ID (Required)
// - `initVars` - Map containing properties that can be set on the Visitor ID
//      instance. The following keys can be set here:
//      * `trackingServer`,
//      * `trackingServerSecure`,
//      * `marketingCloudServer`
//      * `marketingCloudServerSecure`
// - `customerIDs` - Map containing Customer IDs values that will be set on the
//      instance
// - `autoRequest` - Flag that will read the Marketing Cloud Visitor ID by
//      calling `getMarketingCloudVisitorID` method
function VisitorIdTool(settings) {
  SL.BaseTool.call(this, settings);
  this.name = settings.name || 'VisitorID';

  this.initialize();
}

SL.extend(VisitorIdTool.prototype, {
  // Public
  // ------------------------------------------------
  //
  // `getInstance()`
  // ------------------------------------------------
  //
  // Returns the Visitor ID instance that was created when the tool was
  // initialized.
  getInstance: function() {
    return this.instance;
  },

  // Private
  // ------------------------------------------------
  //
  // `initialize()`
  // ------------------------------------------------
  //
  // The method creates a Visitor ID instance if all the data provided is valid.
  // The instance will contain all the keys defined in the `initVar` setting.
  // Any `dataElement` present as a value in the initVars map will be replaced
  // with the correct value.
  //
  // It applies then a the map of Customer IDs by calling the `setCustomerIDs`
  // method from the newly created instance. Any `dataElement` present as a
  // value in the Customer IDs map will be replaced with the correct value.
  //
  // After that, the `getMarketingCloudVisitorID` method from the newly created
  // instance is called, provided that the `autoRequest` settings is set to true.
  initialize: function() {
    var settings = this.settings, visitor;

    SL.notify('Visitor ID: Initializing tool', 1);

    visitor = this.createInstance(
      settings.mcOrgId,
      settings.initVars
    );
    if (visitor === null) {
      return;
    }

    if (settings.customerIDs) {
      this.applyCustomerIDs(visitor, settings.customerIDs);
    }

    if (settings.autoRequest) {
      visitor.getMarketingCloudVisitorID();
    }

    this.instance = visitor;
  },

  createInstance: function(mcOrgId, initVars) {
    if(!SL.isString(mcOrgId)) {
      SL.notify(
        'Visitor ID: Cannot create instance using mcOrgId: "' + mcOrgId + '"', 4);
      return null;
    }

    mcOrgId = SL.replace(mcOrgId);
    SL.notify(
      'Visitor ID: Create instance using mcOrgId: "' + mcOrgId + '"', 1);

    initVars = this.parseValues(initVars);
    var instance = Visitor.getInstance(mcOrgId, initVars);
    SL.notify('Visitor ID: Set variables: ' + SL.stringify(initVars), 1);

    return instance;
  },

  applyCustomerIDs: function(instance, ids) {
    var parsedIds = this.parseIds(ids);
    instance.setCustomerIDs(parsedIds);
    SL.notify('Visitor ID: Set Customer IDs: ' + SL.stringify(parsedIds), 1);
  },

  parseValues: function(hash) {
    if (SL.isObject(hash) === false) {
      return {};
    }

    var obj = {};

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }

    return obj;
  },

  parseIds: function(hash) {
    var parsedIds = {};
    if (SL.isObject(hash) === false) {
      return {};
    }

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        var id = SL.replace(hash[v]['id']);
        // All IDs should be data elements. If no replacement has taken place,
        // then we can conclude that the data element doesn't exists.
        // Also we should ignore existing data elements that are empty.
        if (id !== hash[v]['id'] && id) {
          parsedIds[v] = {};
          parsedIds[v]['id'] = id;
          parsedIds[v]['authState'] = Visitor.AuthState[hash[v]['authState']];
        }
      }
    }

    return parsedIds;
  }
});

SL.availableTools.visitor_id = VisitorIdTool;

_satellite.init({
  "tools": {
  },
  "pageLoadRules": [
    {"name":"Cage: Funções + Logica Eventos","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d1bd5e64746d7a9900d87f.js"}]}]}],"event":"pagetop"}
  ],
  "rules": [

  ],
  "directCallRules": [
    {"name":"cage_page_facebook_coop","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b59ce0b64746d7509005068.js"}]}]}]},
    {"name":"cage_adobe_analytics","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d1b37564746d78b500c0d9.js"}]}]}]},
    {"name":"cage_page_artist","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a27b64746d4d3e0108cb.js"}]}]}]},
    {"name":"cage_page_search","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d1b37564746d78b500c0b7.js"},{"src":"satellite-59cc107064746d642700333b.js"},{"src":"satellite-5b056c2564746d11d3006d07.js"}]}]}]},
    {"name":"cage_page_client_signUpAddress","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-59cecc1264746d1cc0007531.js"}]}]}]},
    {"name":"cage_page_client_completeSignUp","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-59edebbc64746d14ca0016c8.js"}]}]}]},
    {"name":"cage_page_deal","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a26b64746d4d4100ecc0.js"}]}]}]},
    {"name":"cage_page_departament","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d1b37564746d78b500c04f.js"},{"src":"satellite-5919e56f64746d51d30057e7.js"},{"src":"satellite-59cea92664746d084a00018c.js"},{"src":"satellite-59d657d964746d520501517b.js"},{"src":"satellite-5b153e2764746d2079006428.js"}]}]}]},
    {"name":"cage_page_home","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-577534cc64746d7c330009a6.js"},{"src":"satellite-57d1cd3664746d78b200c080.js"},{"src":"satellite-59d64a0d64746d52050150f2.js"},{"src":"satellite-5b0563d664746d544b0037b4.js"}]}]}]},
    {"name":"cage_page_line","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d1b37564746d78b500c085.js"},{"src":"satellite-586e3c6164746d5764005a42.js"},{"src":"satellite-59cea93964746d084a00018e.js"},{"src":"satellite-59d65b1864746d1cc0009ee7.js"},{"src":"satellite-5b153e5d64746d207900642a.js"}]}]}]},
    {"name":"cage_page_otherOffers","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a27864746d4d3e0108b7.js"}]}]}]},
    {"name":"cage_page_product","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-573db5b864746d2df9005fbd.js"},{"src":"satellite-5b8d6a4864746d176d00bf8c.js"},{"src":"satellite-57d9a36c64746d61b2001e15.js"},{"src":"satellite-586d4b6064746d602f004c6a.js"},{"src":"satellite-58da643964746d4f5600a03e.js"},{"src":"satellite-58fdfc2264746d55be00022a.js"},{"src":"satellite-59d65cc164746d08f201866c.js"},{"src":"satellite-59f9d9b164746d3b080018a2.js"},{"src":"satellite-5a1433cd64746d07fd00ac55.js"},{"src":"satellite-5b056e2864746d0d8a00b69a.js"},{"src":"satellite-5b6a1a4064746d2ced0017fe.js"}]}]}]},
    {"name":"cage_page_review","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ba4092a64746d085d0055c3.js"}]}]}]},
    {"name":"cage_page_webstore","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a26e64746d4d3e0108a3.js"}]}]}]},
    {"name":"cage_page_services","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a27a64746d61b2001e0a.js"}]}]}]},
    {"name":"cage_page_storeInStore","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a27564746d4d4100ecd4.js"}]}]}]},
    {"name":"cage_page_subline","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d1b37564746d78b500c073.js"},{"src":"satellite-586e3c7864746d5761005516.js"},{"src":"satellite-59cea95764746d6e370189c8.js"},{"src":"satellite-5b153e7964746d207f006374.js"}]}]}]},
    {"name":"cage_page_address","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-585917d664746d6032000834.js"},{"src":"satellite-585917d664746d6032000835.js"}]}]}]},
    {"name":"cage_page_thankyou","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5813b8a864746d5fda00c43b.js"},{"src":"satellite-581ce79e64746d39010108b2.js"},{"src":"satellite-5b8eea9064746d76f9002231.js"},{"src":"satellite-5be04e3d64746d398c0016aa.js"},{"src":"satellite-582ddf8a64746d7ea8002a04.js"},{"src":"satellite-58470ffe64746d6759008d1d.js"},{"src":"satellite-586e493864746d575b005398.js"},{"src":"satellite-5877e50764746d73fd0091b3.js"},{"src":"satellite-58da650f64746d33eb008ed5.js"},{"src":"satellite-59d658e764746d3ec4002433.js"},{"src":"satellite-59fa20f464746d34610064b4.js"},{"src":"satellite-5b59ce7e64746d63b2001359.js"}]}]}]},
    {"name":"cage_page_payment","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-582ddf7a64746d05e0004c32.js"},{"src":"satellite-5846faed64746d675f0080f0.js"},{"src":"satellite-591b4ed764746d08bd000f80.js"},{"src":"satellite-59affb5564746d5208005074.js"},{"src":"satellite-59d6595f64746d3e4500248b.js"}]}]}]},
    {"name":"cage_page_basket","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58125a3264746d7ddd00a83f.js"},{"src":"satellite-582ddf7364746d065d004e26.js"},{"src":"satellite-584172cd64746d557300633c.js"},{"src":"satellite-589390c064746d715a00444b.js"},{"src":"satellite-58da64e264746d482900b7be.js"},{"src":"satellite-59d6738c64746d08f20186c8.js"},{"src":"satellite-59f9f38264746d35d2009ea2.js"},{"src":"satellite-5b59d0d964746d63b200135c.js"}]}]}]},
    {"name":"cage_page_client_changeLogin","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586d004464746d602f0048ba.js"}]}]}]},
    {"name":"cage_page_client_changePassword","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586d008f64746d73fd0040b5.js"}]}]}]},
    {"name":"cage_page_client_updatePhone","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586d00b464746d6ecb0012b0.js"}]}]}]},
    {"name":"cage_page_client_signUpPF","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586cff7264746d5764004f28.js"},{"src":"satellite-591ded3b64746d508c00231a.js"}]}]}]},
    {"name":"cage_page_client_signUpPJ","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586cff9664746d5761004b14.js"}]}]}]},
    {"name":"cage_page_client_guest","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586d001e64746d2b58001497.js"}]}]}]},
    {"name":"cage_page_client_login","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-586cff2464746d5764004f1e.js"},{"src":"satellite-586d31a464746d73fd004257.js"}]}]}]},
    {"name":"cage_page_finance_cartao_form","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c797a9864746d4aec0024e6.js"}]}]}]},
    {"name":"cage_page_finance_cartao_form_pok","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c2e702764746d41ce0173fd.js"}]}]}]},
    {"name":"cage_page_finance_cartao_form_pok","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c9cde4d64746d73700002ad.js"}]}]}]},
    {"name":"cage_page_finance_cartao_form_pok_afilio","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cf6ac3f64746d4401002473.js"}]}]}]},
    {"name":"cage_page_finance_cartao_thankyou","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c2e626b64746d259f01a280.js"}]}]}]},
    {"name":"cage_page_finance_cartao_pok","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c6db3b464746d17ba001540.js"}]}]}]},
    {"name":"cage_page_finance_cartao_thankyou_afilio","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5cec0e7c64746d08f8001a7b.js"}]}]}]},
    {"name":"cage_page_finance_cartao_afilio","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5ceeb7fa64746d2b1a000e30.js"}]}]}]},
    {"name":"cage_page_finance","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b3cc0e264746d3ec4003f0e.js"},{"src":"satellite-5c3e37f064746d615101d279.js"}]}]}]},
    {"name":"cage_page_garage","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b7eb3c764746d450c005536.js"}]}]}]},
    {"name":"cage_page_finance_cartao","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5c11622b64746d488d00e3f5.js"}]}]}]},
    {"name":"cage_page_myaccount_home","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-59ef44af64746d55a100184c.js"}]}]}]},
    {"name":"cage_page_myaccount_my_sales","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a3ac37264746d476b01843b.js"}]}]}]},
    {"name":"cage_page_other","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57d9a25664746d4d4100ecb2.js"},{"src":"satellite-5919ea7b64746d07d70139b0.js"},{"src":"satellite-5bfd465e64746d019e00de8b.js"}]}]}]},
    {"name":"cage_page_all","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b8448f064746d4e96004231.js"},{"src":"satellite-5b8e912d64746d7d3e001f1c.js"},{"src":"satellite-5b9a702364746d132300072e.js"},{"src":"satellite-5b9a764964746d6dc00009f6.js"}]}]}]}
  ],
  "settings": {
    "trackInternalLinks": true,
    "libraryName": "satelliteLib-7b44694604382543f3bbc5fbdcfd02ac4e7b0caf",
    "isStaging": false,
    "allowGATTcalls": false,
    "downloadExtensions": /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
    "notifications": false,
    "utilVisible": false,
    "domainList": [
      "americanas.com.br"
    ],
    "scriptDir": "296b83a81627fd662c5aecf8289129e20324f9b7/scripts/",
    "tagTimeout": 3000
  },
  "data": {
    "URI": 
document.location.pathname + document.location.search
,
    "browser": {
    },
    "cartItems": [

    ],
    "revenue": "",
    "host": {
      "http": "assets.adobedtm.com",
      "https": "assets.adobedtm.com"
    }
  },
  "dataElements": {
    "addProductGA": {"customJS":function(){
try {
    _satellite.data.customVars.ga_dep = ''
    for (var i = 0; i < cage_global_variable.detail.cart.lines.length; i++) {
        //ID - SKU - PREÇO - TIPO DE PRODUTO - QUANTIDADE - TESTE AB FRETE
        var idProducts = cage_global_variable.detail.cart.lines[i].productId
        var nameProducts = cage_global_variable.detail.cart.lines[i].product.name
        var brandProduct = cage_global_variable.detail.cart.lines[i].product.supplier
        var priceProducts = cage_global_variable.detail.cart.lines[i].salesPrice
        var qtdProducts = cage_global_variable.detail.cart.lines[i].quantity
        var skuProducts = cage_global_variable.detail.cart.lines[i].product.sku
        var mkt_tipoVenda = (typeof cage_global_variable.detail.cart.lines[i].product.store == "object") ? "Marketplace" : "B2C"
        var storeNameB2C = ""; "ACOM" == _satellite.getVar("coreBrandName") ? storeNameB2C = "americanas.com" : "SUBA" == _satellite.getVar("coreBrandName") ? storeNameB2C = "Submarino" : "SHOP" == _satellite.getVar("coreBrandName") ? storeNameB2C = "Shoptime" : "SOUB" == _satellite.getVar("coreBrandName") && (storeNameB2C = "Soubarato"); var mkt_seller = "object" == typeof cage_global_variable.detail.cart.lines[i].product.store ? cage_global_variable.detail.cart.lines[i].product.store.name.toLowerCase().trim() : storeNameB2C;

        //Verifica departamento no cookie
            var dep     = ""
            var wa_dep  = _satellite.readCookie("wa")

            if(typeof wa_dep == "string" && wa_dep.indexOf('[{"p"') >=0 && typeof JSON.parse(wa_dep) == "object" && JSON.parse(wa_dep).length > 0){
                wa_dep = JSON.parse(wa_dep);
                
                //Verifica se produto já existe no array
                    for(var s=0; s < wa_dep.length; s++){											
                        if(wa_dep[s].p == idProducts){
                            dep = wa_dep[s].d;
                            
                            //Seta departamento para disparo de evento
                                _satellite.data.customVars.ga_dep += dep + ","
                        }
                    }
            }        
        
        //FILTRO DE ALTISSIMO VALOR: Cria sProducts apenas se o produto tiver um valor menor do que 45k
            if (priceProducts < 45000) {
                ga('ec:addProduct', {
                    'id': idProducts,
                    'name': nameProducts,
                    'brand': brandProduct,
                    'price': priceProducts,
                    'quantity': qtdProducts,
                    'variant': skuProducts,
                    'category': dep,
                    'dimension13': mkt_tipoVenda,
                    'dimension14': mkt_seller
                });
            }
    }
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "addProductGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "confirmPaymentPage": {"customJS":function(){
try{    
    if(typeof cage_global_variable.detail.missingMainAddress == "boolean" && cage_global_variable.detail.missingMainAddress == true){
        return "cadastroEndereco"        
    }
    else{
        return "pagamento"
    }
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","confirmPaymentPage", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "coreBrandName": {"customJS":function(){
return "ACOM"
},"storeLength":"pageview"},
    "coreCageListener": {"customJS":function(){
try {
	//Evento para informar que o DTM foi iniciado
	//Verifica existência do s_wa no frame TOP para disparar evento de TagManager load
	//Inicia evento
	var event = new CustomEvent('cage:adobe-scripts-load');

	//s_wa ja disponível
	if (typeof window.parent.s_wa == "object") {
		//Recebe objeto s_wa
		window.s_wa_top = window.parent.s_wa;

		//Recebe logica B2W-UID
		try {
			window.WA_encriptID = window.parent.WA_encriptID;
			window.WA_setB2WUID = window.parent.WA_setB2WUID;
		} catch (e) {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "Page Load Rules", "[P] [D] Cage: Funções + Logica Eventos: B2W-UID", e);
		}

		//Realiza o disparo do evento
		document.dispatchEvent(event);

		//Logs
		if (_satellite.getVar("enableLog") == "true") {
			console.log("WA: Evento disparado - s_wa ja estava disponivel")
		}
	}
	//s_wa não disponível
	else {
		function waitForS_WA() {
			//Aguarda + 100ms
			if (typeof window.parent.s_wa != "object") {
				setTimeout(waitForS_WA, 100);
			}
			//Realiza o disparo do evento
			else {
				//Recebe objeto s_wa
				window.s_wa_top = window.parent.s_wa;

				//Recebe logica B2W-UID
				try {
					window.WA_encriptID = window.parent.WA_encriptID;
					window.WA_setB2WUID = window.parent.WA_setB2WUID;
				} catch (e) {
					_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "Page Load Rules", "[P] [D] Cage: Funções + Logica Eventos: B2W-UID", e);
				}

				//Realiza o disparo do evento
				document.dispatchEvent(event);

				//Logs
				if (_satellite.getVar("enableLog") == "true") {
					console.log("WA: Evento disparado - s_wa nao estava disponivel")
				}
			}
		} waitForS_WA();
	}
} catch (e) { }
},"storeLength":"pageview"},
    "coreComponentsAds": {"customJS":function(){
try{
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: Componentes - ADS")
	}		

	//Dimensões
		//PFM V1
			//List 1 ja preenchida
				if (typeof s_wa.list1 != "undefined" && s_wa.list1 != ""){
					s_wa.list1 += "," + _satellite.getVar("getViewPFMAds");
				}

			//Lista 1 não preenchida
				else{
					s_wa.list1 = _satellite.getVar("getViewPFMAds");
				}
		
		//PFM V2
			//List 3 ja preenchida
				if (typeof s_wa.list3 != "undefined" && s_wa.list3 != ""){
					s_wa.list3 += "," + _satellite.getVar("getPFMv2ViewAds");
				}

			//Lista 3 não preenchida
				else{
					s_wa.list3 = _satellite.getVar("getPFMv2ViewAds");
				}


	//Eventos	
		//Eventos (pfm v1 e pfm v2)
			if ((typeof _satellite.getVar("getViewPFMAds") != "undefined" && _satellite.getVar("getViewPFMAds") != "") || (typeof _satellite.getVar("getPFMv2ViewAds") != "undefined" && _satellite.getVar("getPFMv2ViewAds") != "")){
				//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					if(s_wa.events.indexOf("event72") == -1){
						s_wa.events += ",event72"
					}
				}
				//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event72"
				}
			}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Componentes: coreComponentsAds", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreComponentsListaCurada": {"customJS":function(){
try{
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: Componentes - Lista Curada")
	}		

	//Dimensões
		//List 3 ja preenchida
			if (typeof s_wa.list3 != "undefined" && s_wa.list3 != ""){
				s_wa.list3 += "," + _satellite.getVar("getPFMv2ViewListaCurada");
			}

		//Lista 3 não preenchida
			else{
				s_wa.list3 = _satellite.getVar("getPFMv2ViewListaCurada");
			}

	//Eventos (pfm v1 e pfm v2)
		if (typeof _satellite.getVar("getPFMv2ViewListaCurada") != "undefined" && _satellite.getVar("getPFMv2ViewListaCurada") != ""){
			//Adiciona mais um evento no objeto s_wa.events
			if (s_wa.events != undefined && s_wa.events != "") {
				if(s_wa.events.indexOf("event72") == -1){
					s_wa.events += ",event72"
				}
			}
			//Adiciona mais um evento no objeto s_wa.events
			else {
				s_wa.events = "event72"
			}
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Componentes: coreComponentsListaCurada", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreComponentsRecomendation": {"customJS":function(){
try{
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: Componentes - Recom")
	}		

	//Dimensões
		//PFM v1
			//List 1 ja preenchida
				if (typeof s_wa.list1 != "undefined" && s_wa.list1 != ""){
					s_wa.list1 += "," + _satellite.getVar("getViewPFM");
				}

			//Lista 1 não preenchida
				else{
					s_wa.list1 = _satellite.getVar("getViewPFM");
				}
		
		//PFM v2
			//List 3 ja preenchida
			if (typeof s_wa.list3 != "undefined" && s_wa.list3 != ""){
				s_wa.list3 += "," + _satellite.getVar("getPFMv2ViewRec");
			}

		//Lista 3 não preenchida
			else{
				s_wa.list3 = _satellite.getVar("getPFMv2ViewRec");
			}

	//Eventos (pfm v1 e pfm v2)
		if ((typeof _satellite.getVar("getViewPFM") != "undefined" && _satellite.getVar("getViewPFM") != "") || (typeof _satellite.getVar("getPFMv2ViewRec") != "undefined" && _satellite.getVar("getPFMv2ViewRec") != "")){
			//Adiciona mais um evento no objeto s_wa.events
			if (s_wa.events != undefined && s_wa.events != "") {
				if(s_wa.events.indexOf("event72") == -1){
					s_wa.events += ",event72"
				}
			}
			//Adiciona mais um evento no objeto s_wa.events
			else {
				s_wa.events = "event72"
			}
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Componentes: coreComponentsRecomendation", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreComponentsSearchGrid": {"customJS":function(){
try{
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: Componentes - Lista automatica / Search Grid")
	}		

	//Dimensões
		//List 3 ja preenchida
			if (typeof s_wa.list3 != "undefined" && s_wa.list3 != ""){
				s_wa.list3 += "," + _satellite.getVar("getPFMv2ViewSearchGrid");
			}

		//Lista 3 não preenchida
			else{
				s_wa.list3 = _satellite.getVar("getPFMv2ViewSearchGrid");
			}

	//Eventos (pfm v1 e pfm v2)
		if (typeof _satellite.getVar("getPFMv2ViewSearchGrid") != "undefined" && _satellite.getVar("getPFMv2ViewSearchGrid") != ""){
			//Adiciona mais um evento no objeto s_wa.events
			if (s_wa.events != undefined && s_wa.events != "") {
				if(s_wa.events.indexOf("event72") == -1){
					s_wa.events += ",event72"
				}
			}
			//Adiciona mais um evento no objeto s_wa.events
			else {
				s_wa.events = "event72"
			}
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Componentes: coreComponentsSearchGrid", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreErroJS": {"customJS":function(){
//Erros JS
	try {
		if (_satellite.data.customVars['getJsError'] != undefined && typeof _satellite.data.customVars['getJsError'] == "string" && _satellite.data.customVars['getJsError'] != "") {
			var erro_js = _satellite.data.customVars['getJsError']
			s_wa.prop23 = erro_js.substring(0, (erro_js.length - 1));

			//Evento de erro JS
			//Adiciona mais um evento no objeto s_wa.events
			if (s_wa.events != undefined && s_wa.events != "") {
				s_wa.events += ",event81"
			}
			//Adiciona mais um evento no objeto s_wa.events
			else {
				s_wa.events = "event81"
			}

		}
	} catch (e) {}
},"storeLength":"pageview"},
    "coreFunctionsJSError": {"customJS":function(){
try {
	//Inicia a variavel de erro vazia
	try {
		_satellite.data.customVars['getJsError'] = ""
	} catch (e) { }

	//Cria função de erro JS
	WA_JsError = function (tipo, carac1, carac2, erro_detail) {
		try {
			//Pega informacoes do erro
			var erro = tipo + "|" + carac1 + "|" + carac2 + "|" + erro_detail;

			// Logs - 
			if (_satellite.getVar("enableLog") == "true") {
				console.log("Erro Coleta Adobe Analytics: " + erro)
			}

			//Testa se o erro em questao ja está na lista  
			if (_satellite.data.customVars['getJsError'].indexOf(erro) == -1) {
				return erro;
			}
			//Se o erro ja estiver na lista, retorna ""
			else {
				return ""
			}
		} catch (e) { }
	}
} catch (e) { }
},"storeLength":"pageview"},
    "coreFunctionsLinkP": {"customJS":function(){
//Função para disparo de linkP
try {
	WA_linkP = function (tracker_object) {
		//Adicionar prop
			tracker_object.prop60 = tracker_object.link_o
		
		var marca = ''
		if (_satellite.getVar("getHostName").indexOf("americanas") >= 0) {
			marca = 'ACOM:'
		} else if (_satellite.getVar("getHostName").indexOf("submarino") >= 0) {
			marca = 'SUBA:'
		} else if (_satellite.getVar("getHostName").indexOf("shoptime") >= 0) {
			marca = 'SHOP:'
		} else if (_satellite.getVar("getHostName").indexOf("soubarato") >= 0) {
			marca = 'SOUB:'
		}

		//Variáveis a serem passadas no disparo
		var linkTrackVars = "channel"
		var linkTrackEvents = "";

		//Itera todas as variáveis e eventos
		for (i in tracker_object) {
			if (i == 'events') {
				//Mais de um evento - Verifica e remove eventos numéricos 
				if (tracker_object[i].indexOf(",") >= 0 && tracker_object[i].indexOf("=") >= 0) {
					var eventos = tracker_object[i].split(",")

					for (var j = 0; j < eventos.length; j++) {
						if (eventos[j].indexOf("=") >= 0) {
							eventos[j] = eventos[j].split("=")[0]
						}
					}
					linkTrackEvents = eventos.join(",")
				}
				//Um evento - Verifica e remove eventos numéricos 
				else if (tracker_object[i].indexOf("=") >= 0) {
					linkTrackEvents = tracker_object[i].split("=")[0]
				}
				//Eventos padrões
				else {
					linkTrackEvents += tracker_object[i]
				}
			} else {
				linkTrackVars = linkTrackVars + ',' + i;
			}
			window.parent.s_wa[i] = tracker_object[i];
		}

		//Preenche as variáveis linkTrackVars e linkTrackEvents
		window.parent.s_wa.linkTrackVars = linkTrackVars;
		window.parent.s_wa.linkTrackEvents = linkTrackEvents;

		//Adiciona events ao trackVars caso exista algum evento no disparo
		if (linkTrackEvents.indexOf("event") >= 0) {
			window.parent.s_wa.linkTrackVars += ",events"
		}


		//Chama função de disparo do DMP - Adobe Audience Manager
		//window.parent.WA_disparaDMP()

		//Dispara s_wa.tl
		window.parent.s_wa.tl(this, 'o', marca + window.parent.s_wa.link_o);

		//Esvazia objeto s_wa
		for (i in tracker_object) {
			window.parent.s_wa[i] = "";
		}
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Funções Globais: coreFunctionsLinkP", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "coreFunctionsMD5": {"customJS":function(){
/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/

	try{
		var cage_hash_MD5=function(e){function g(b,a){var c,d,e,f,p;e=b&2147483648;f=a&2147483648;c=b&1073741824;d=a&1073741824;p=(b&1073741823)+(a&1073741823);return c&d?p^2147483648^e^f:c|d?p&1073741824?p^3221225472^e^f:p^1073741824^e^f:p^e^f}function h(b,a,c,d,e,f,n){b=g(b,g(g(a&c|~a&d,e),n));return g(b<<f|b>>>32-f,a)}function k(b,a,c,d,e,f,n){b=g(b,g(g(a&d|c&~d,e),n));return g(b<<f|b>>>32-f,a)}function l(b,a,d,c,e,f,n){b=g(b,g(g(a^d^c,e),n));return g(b<<f|b>>>32-f,a)}function m(b,a,d,c,e,f,n){b=g(b,g(g(d^(a|~c),
		e),n));return g(b<<f|b>>>32-f,a)}function q(b){var a="",d,c;for(c=0;3>=c;c++)d=b>>>8*c&255,d="0"+d.toString(16),a+=d.substr(d.length-2,2);return a}var f=[],r,t,u,v,b,a,c,d;e=function(b){b=b.replace(/\r\n/g,"\n");for(var a="",d=0;d<b.length;d++){var c=b.charCodeAt(d);128>c?a+=String.fromCharCode(c):(127<c&&2048>c?a+=String.fromCharCode(c>>6|192):(a+=String.fromCharCode(c>>12|224),a+=String.fromCharCode(c>>6&63|128)),a+=String.fromCharCode(c&63|128))}return a}(e);f=function(b){var a,c=b.length;a=c+
		8;for(var d=16*((a-a%64)/64+1),e=Array(d-1),f,g=0;g<c;)a=(g-g%4)/4,f=g%4*8,e[a]|=b.charCodeAt(g)<<f,g++;a=(g-g%4)/4;e[a]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(e);b=1732584193;a=4023233417;c=2562383102;d=271733878;for(e=0;e<f.length;e+=16)r=b,t=a,u=c,v=d,b=h(b,a,c,d,f[e+0],7,3614090360),d=h(d,b,a,c,f[e+1],12,3905402710),c=h(c,d,b,a,f[e+2],17,606105819),a=h(a,c,d,b,f[e+3],22,3250441966),b=h(b,a,c,d,f[e+4],7,4118548399),d=h(d,b,a,c,f[e+5],12,1200080426),c=h(c,d,b,a,f[e+6],17,2821735955),a=
		h(a,c,d,b,f[e+7],22,4249261313),b=h(b,a,c,d,f[e+8],7,1770035416),d=h(d,b,a,c,f[e+9],12,2336552879),c=h(c,d,b,a,f[e+10],17,4294925233),a=h(a,c,d,b,f[e+11],22,2304563134),b=h(b,a,c,d,f[e+12],7,1804603682),d=h(d,b,a,c,f[e+13],12,4254626195),c=h(c,d,b,a,f[e+14],17,2792965006),a=h(a,c,d,b,f[e+15],22,1236535329),b=k(b,a,c,d,f[e+1],5,4129170786),d=k(d,b,a,c,f[e+6],9,3225465664),c=k(c,d,b,a,f[e+11],14,643717713),a=k(a,c,d,b,f[e+0],20,3921069994),b=k(b,a,c,d,f[e+5],5,3593408605),d=k(d,b,a,c,f[e+10],9,38016083),
		c=k(c,d,b,a,f[e+15],14,3634488961),a=k(a,c,d,b,f[e+4],20,3889429448),b=k(b,a,c,d,f[e+9],5,568446438),d=k(d,b,a,c,f[e+14],9,3275163606),c=k(c,d,b,a,f[e+3],14,4107603335),a=k(a,c,d,b,f[e+8],20,1163531501),b=k(b,a,c,d,f[e+13],5,2850285829),d=k(d,b,a,c,f[e+2],9,4243563512),c=k(c,d,b,a,f[e+7],14,1735328473),a=k(a,c,d,b,f[e+12],20,2368359562),b=l(b,a,c,d,f[e+5],4,4294588738),d=l(d,b,a,c,f[e+8],11,2272392833),c=l(c,d,b,a,f[e+11],16,1839030562),a=l(a,c,d,b,f[e+14],23,4259657740),b=l(b,a,c,d,f[e+1],4,2763975236),
		d=l(d,b,a,c,f[e+4],11,1272893353),c=l(c,d,b,a,f[e+7],16,4139469664),a=l(a,c,d,b,f[e+10],23,3200236656),b=l(b,a,c,d,f[e+13],4,681279174),d=l(d,b,a,c,f[e+0],11,3936430074),c=l(c,d,b,a,f[e+3],16,3572445317),a=l(a,c,d,b,f[e+6],23,76029189),b=l(b,a,c,d,f[e+9],4,3654602809),d=l(d,b,a,c,f[e+12],11,3873151461),c=l(c,d,b,a,f[e+15],16,530742520),a=l(a,c,d,b,f[e+2],23,3299628645),b=m(b,a,c,d,f[e+0],6,4096336452),d=m(d,b,a,c,f[e+7],10,1126891415),c=m(c,d,b,a,f[e+14],15,2878612391),a=m(a,c,d,b,f[e+5],21,4237533241),
		b=m(b,a,c,d,f[e+12],6,1700485571),d=m(d,b,a,c,f[e+3],10,2399980690),c=m(c,d,b,a,f[e+10],15,4293915773),a=m(a,c,d,b,f[e+1],21,2240044497),b=m(b,a,c,d,f[e+8],6,1873313359),d=m(d,b,a,c,f[e+15],10,4264355552),c=m(c,d,b,a,f[e+6],15,2734768916),a=m(a,c,d,b,f[e+13],21,1309151649),b=m(b,a,c,d,f[e+4],6,4149444226),d=m(d,b,a,c,f[e+11],10,3174756917),c=m(c,d,b,a,f[e+2],15,718787259),a=m(a,c,d,b,f[e+9],21,3951481745),b=g(b,r),a=g(a,t),c=g(c,u),d=g(d,v);return(q(b)+q(a)+q(c)+q(d)).toLowerCase()};

		if(typeof cage_hash_MD5 == "function"){
			window.cage_hash_MD5 = cage_hash_MD5;
		}
	}catch(e){
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Funções Globais: coreFunctionsMD5", e);
		} catch (e) {}
	}
},"storeLength":"pageview"},
    "coreFunctionsSanitize": {"customJS":function(){
try {
	cage_sanitize = function (a,b){
		a=a.trim().toLowerCase().replace(/\s+/g,"_")
		.replace(/[\u00e1\u00e0\u00e2\u00e3\u00e5\u00e4\u00e6\u00aa]/g,"a")
		.replace(/[\u00e9\u00e8\u00ea\u00eb\u0404\u20ac]/g,"e")
		.replace(/[\u00ed\u00ec\u00ee\u00ef]/g,"i")
		.replace(/[\u00f3\u00f2\u00f4\u00f5\u00f6\u00f8\u00ba]/g,"o")
		.replace(/[\u00fa\u00f9\u00fb\u00fc]/g,"u")
		.replace(/[\u00e7\u00a2\u00a9]/g,"c")
		.replace(',', '');
		!0===b&&(
			a=a.replace(/[^a-z0-9\-]/g,"_")
			.replace(/_+/g,"_")
		);
		return a
	}
}catch(e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Funções Globais: coreFunctionsSanitize", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreFunctionsSetCookie": {"customJS":function(){
try {
	cage_setCookie = function(nome_cookie, valor, horas) {
		var domain = ""

		//ACOM
			if(_satellite.getVar("coreBrandName") == "ACOM"){
				domain = ".americanas.com.br"
			}
		//SUBA
			else if(_satellite.getVar("coreBrandName") == "SUBA"){
				domain = ".submarino.com.br"
			}
		//SHOP
			else if(_satellite.getVar("coreBrandName") == "SHOP"){
				domain = ".shoptime.com.br"
			}
		//SOUB
			else if(_satellite.getVar("coreBrandName") == "SOUB"){
				domain = ".soubarato.com.br"
			}

		//Força hora
			if(horas != 0){
				var data_exp     = new Date;
				data_exp.setHours(data_exp.getHours() + horas)
				var valor_cookie = valor + ((horas == null) ? "" : "; expires=" + data_exp.toUTCString());
				document.cookie  = nome_cookie + "=" + valor_cookie + ';domain=' + domain + ';path=/';
			}
		//Cookie Sessao
			else{
				document.cookie = nome_cookie + "=" + valor + ';domain=' + domain + ';path=/';
			}
	}
}catch(e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Funções Globais: coreFunctionsSetCookie", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreFunctionsURLParameter": {"customJS":function(){
try {
	cage_getParam = function(paramName) {
		var uri = window.top.location.href;
		uri = uri.split('#')[0]; // Remove anchor.
		var parts = uri.split('?'); // Check for query params.
		if (parts.length == 1) {
			return;
		}
		//Retira a codificacao
		var query = decodeURI(parts[1]);
		// Find url param.
		paramName += '=';
		var params = query.split('&');
		for (var i = 0, param; param = params[i]; ++i) {
			if (param.indexOf(paramName) === 0) {
				return unescape(param.split('=')[1]);
			}
		}
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Funções Globais: coreFunctionsURLParameter", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreGATrackPageView": {"customJS":function(){
try{
    //Logs
		if(_satellite.getVar("enableLog") == "true"){
			console.log("WA: DataElements - Google Analytics - TrackPageview")
		}
    
    //PageView
        ga('send', {
            hitType: 'pageview',
            page: _satellite.getVar("getPathname"),
            location: _satellite.getVar("getURLWithoutUTM"),
            title: cage_global_variable.nome_pagina
        });
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageCheckoutBasketRecomAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "coreGenerateEventId": {"customJS":function(){
const bigTimeRandom = Math.floor(Math.random() * 10000 + 1);
const shortTimeRandom = Math.floor(Math.random() * 100 + 1);
const time = new Date().getTime();

return (bigTimeRandom + shortTimeRandom + time).toString();
},"storeLength":"pageview"},
    "coreGetCageBlackList": {"customJS":function(){
try {	
	if(window.top.location.href.indexOf("sacola.") >=0){
		//Logs
			if (_satellite.getVar("enableLog") == "true") {
				console.log("WA: Cage - Page BlackListed")
			}
			
		return "BlackListed"
	}
	else{
		//Logs
			if (_satellite.getVar("enableLog") == "true") {
				console.log("WA: Cage - Page WhiteListed")
			}

		return "WhiteListed"
	}
} catch (e) {
	return "WhiteListed"
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - coreGetCageBlackList", e);
}
},"storeLength":"pageview"},
    "coreGlobalVariables": {"customJS":function(){
try{
	//Inicia variavel de tipo de Cage
		_satellite.data.customVars.typeCage = "With Permission"

	//Inicia variaveis globais
		window.cage_global_variable            = ''
		window.cage_global_variable_components = {}

	//Inicia s_wa do cage
		window.s_wa = {}

	//Inicia as variaveis de tracking global e de componentes
		_satellite.data.customVars['pageViewFlag']                = "false"
		_satellite.data.customVars['pageLoad']   	              = "false"
		_satellite.data.customVars['globalTracking']              = "false"
		_satellite.data.customVars['pageTracking']                = "false"
		_satellite.data.customVars['components']                  = {}
		_satellite.data.customVars['components'].recommendation   = "false"
		_satellite.data.customVars['components'].ads              = "false"
		_satellite.data.customVars['components_sec']              = {}
		_satellite.data.customVars['components_sec'].publications = "false"
		_satellite.data.customVars['components_sec'].search_grid  = "false"
		_satellite.data.customVars['setReviewProduto'] 			  = "false"
		_satellite.data.customVars['buyBoxWinnerID']	 		  = ""
		_satellite.data.customVars['sellerFreight'] 	 		  = {}
		_satellite.data.customVars['sellerFreight'].id 			  = []
		_satellite.data.customVars['sellerFreight'].freteInfo	  = []

}catch(e){}
},"storeLength":"pageview"},
    "coreListenersAccountPurchase": {"customJS":function(){
try{			
	//Purchase Load Minha Conta
        document.addEventListener("purchase:load",function(e){
            try{
                //Logs
                    if(_satellite.getVar("enableLog") == "true"){
                        console.log("WA: Minha Conta - Purchase Load")
                        console.log(e)
                    }
                
                //Inicia objeto CR
                    _satellite.data.customVars['purchase_load'] = {
                        retornoApi  : e.detail
                    };

            }catch(e){
                _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "coreListenersAccountPurchase", e);
            }
		})
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "coreListenersAccountPurchase", e);
    } catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersBrowser": {"customJS":function(){
try {

  var lastHighScroll = window.top.pageYOffset
  var heightScreen = window.top.document.body.scrollHeight
  var viewPortHeight = document.documentElement.clientHeight

  // Aguarda evento de rolagem na página
  window.top.addEventListener("scroll", function (e) {
    try {

      var temp = e.path[1].pageYOffset

      if (temp > lastHighScroll) {
        lastHighScroll = temp
      }

    } catch (e) {
      _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "Listener:scroll", "coreListenersBrowser", e);
    }

  }, false)

  // Excuta função antes de sair da página atual
  window.top.onbeforeunload = function (event) {
    try {
      var omni = {
        link_o: "Scroll:" + _satellite.getVar("getCagePageName"),
        pageName: _satellite.getVar("setPageName"),
        eVar35: _satellite.getVar("getPageType"),
        eVar185: heightScreen,
        eVar186: (lastHighScroll ? lastHighScroll : '0'),
        eVar187: (((lastHighScroll + viewPortHeight) * 100) / heightScreen).toFixed(2)
      }

      //WA_linkP(omni)
    } catch (e) {
      _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "Listener:onbeforeunload", "coreListenersBrowser", e);
    }

  }

} catch (e) {
  _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "coreListenersBrowser", e);
}
},"storeLength":"pageview"},
    "coreListenersComponentsABTest": {"customJS":function(){
try{			
	//AB Test
		document.addEventListener("experiment:exposure",function(e){
			try{
				//Logs
					if(_satellite.getVar("enableLog") == "true"){
						console.log("WA: DataElements - TesteAB")
						console.log(e)
					}

				//Infos de teste - catalogo				
        	cage_global_variable_components.abTest = e.detail
            
        // Infos de testes - catalogo - Guarda todos os testes realizados em um array	
          if (typeof cage_global_variable_components.abTestAll == "undefined") {
            cage_global_variable_components.abTestAll = new Array()
            cage_global_variable_components.abTestAll.push(e.detail)
          }
        	else {
            cage_global_variable_components.abTestAll.push(e.detail)
          }

				//Chama lógica de Teste AB		
        	_satellite.getVar("getABTest")
          
			}catch(e){
				try {
					_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsABTest", e);
				} catch (e) {}
			}
		});
	
	//TEMP - Teste AB Cadastro
		if(typeof _satellite.readCookie("simpleLoginTestAB") == "string"){
			//Logs
				if(_satellite.getVar("enableLog") == "true"){
					console.log("WA: DataElements - TesteAB - SimpleLogin")
				}
			
			//Chama lógica de Teste AB		
				_satellite.getVar("getABTest")
		}

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsABTest", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersComponentsAds": {"customJS":function(){
try{			
	//B2W-Ads
		document.addEventListener("ads:load",function(e){
			try{				
				//Entra na logica apenas se componente de recom for false para nao conflitar com a logica de setTimeOut
					if(_satellite.data.customVars['components'].ads == "false"){

						//Testa se existe shelves
							if(e.detail.hasOwnProperty("shelves")){
								//Variavel de recom recebe infos do evento
									cage_global_variable_components.ads = e.detail.shelves	

								//Vitrine exibida
									if(e.detail.shelves.hasOwnProperty("products")){
										if(e.detail.shelves.products.total > 0){
											//Seta infos de recomendação
												_satellite.getVar("coreComponentsAds")
										}
									}																	
								//Vitrine não exibida
									else if(e.detail.shelves.shelves[0].products.length > 0){
										//Seta infos de recomendação
											_satellite.getVar("coreComponentsAds")

										//Logs
											if (_satellite.getVar("enableLog") == "true") {
												console.log("WA: Componentes - Ads - Sem Vitrine")
											}
									}

								//Informa que componente está OK
									_satellite.data.customVars['components'].ads = "true"

								//Chama função de disparo do Analytics
									_satellite.getVar("coreTrackPageView")								
							}							
					}
			}catch(e){
				//Informa que componente está OK
					_satellite.data.customVars['components'].ads = "true"
				//Chama função de disparo do Analytics
					_satellite.getVar("coreTrackPageView")

				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsAds - Load", e);
			}
		});

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsAds", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersComponentsCR": {"customJS":function(){
try{			
	//Frete
		document.addEventListener("cr:submit",function(e){
			try{
				//Inicia objeto CR
					_satellite.data.customVars['cr_info'] = {
						retornoApi  : e						
					};

				//Chama logica CR
					_satellite.getVar("getCRLogic")
			}catch(e){
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsCR", e);
			}
		})
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsCR", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersComponentsFreight": {"customJS":function(){
try{		
	
	//Frete
		//Produto
			if(_satellite.getVar("getURL").indexOf("/produto") >=0){
				//Consulta				

				//Ouve o page:load pra pegar o id do seller ganhador do buybox
					document.addEventListener("page:load", function(e){
            
						//Pega o id do ganhador do buybox
						_satellite.data.customVars['buyBoxWinnerID'] = e.detail.offers[0]._embedded.seller.id

						//Flag de controle de disparo
						_satellite.data.customVars['pageLoad'] = "true"

						//Teste para verificar se houve o disparo do evento freight:calculate
						if(_satellite.data.customVars['sellerFreight'].freteInfo.length > 0){
							
							//Chama o lógica de frete
							_satellite.getVar("getFreightLogic")
						}						
					})

					document.addEventListener("freight:calculate", function(e){					
						
						try{
							
							if(_satellite.getVar("enableLog") == "true"){
								console.log("WA: Core - Frete - Produto")
							}

							//Inicia objeto Frete
							var freteInfo = {
									pagina      : 'Produto',
									tipo        : 'Consulta',
									retornoApi  : e,
									logicaAdobe : []								
								};
							
							_satellite.data.customVars['sellerFreight'].freteInfo.push(freteInfo)
							_satellite.data.customVars['sellerFreight'].id.push(e.detail.offer._embedded.seller.id)
							
							//Caso o usuario insira um novo CEP apóas o carregamento da página chama a lógica de frete
							if(_satellite.data.customVars['pageLoad'] == "true" && e.detail.offer._embedded.seller.id == _satellite.data.customVars.buyBoxWinnerID){
							
								_satellite.getVar("getFreightLogic")								
							}

						}catch(e){
							_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsFreight - Produto", e);
						}
					})
					

				//Erro
					document.addEventListener("freight:error",function(e){					
						try{
							//Logs
								if(_satellite.getVar("enableLog") == "true"){
									console.log("WA: Core - Frete Erro - Produto")
									console.log(e)
								}

							//Inicia objeto Frete
								_satellite.data.customVars['frete_info'] = {
									pagina      : 'Produto',
									tipo        : 'Erro',
									retornoApi  : e,
									logicaAdobe : []								
								};

							//Chama logica Frete
								_satellite.getVar("getFreightErrorLogic")
						}catch(e){
							_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsFreight - Produto - Erro", e);
						}
					})
			}

		//Sacola
			if(_satellite.getVar("getURL").indexOf("/simple-basket") >=0 && _satellite.getVar("getURL").indexOf("/payment/") == -1){
				document.addEventListener("freight:calculate-info",function(e){			
					try{
						//Logs
							if(_satellite.getVar("enableLog") == "true"){
								console.log("WA: Core - Frete - Sacola")
							}

						//Inicia objeto Frete
							_satellite.data.customVars['frete_info'] = {
								pagina      : 'Carrinho',
								retornoApi  : e,
								logicaAdobe : []								
							};

						//Chama logica Frete
							_satellite.getVar("getFreightLogic")
					}catch(e){
						_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsFreight - Produto", e);
					}
				})
			}

		//Pagamento
			if(_satellite.getVar("getURL").indexOf("/payment/") >=0){
				document.addEventListener("freightMenu:loaded",function(e){					
					try{
						//Logs
							if(_satellite.getVar("enableLog") == "true"){
								console.log("WA: Core - Frete - Pagamento")
							}

						//Inicia objeto Frete
							_satellite.data.customVars['frete_info'] = {
								pagina      : 'Pagamento',
								retornoApi  : e,
								logicaAdobe : []								
							};

						//Chama logica Frete
							_satellite.getVar("getFreightLogic")
					}catch(e){
						_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsFreight - Produto", e);
					}
				})
			}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsFreight", e);
	} catch (e) {}
}


},"storeLength":"pageview"},
    "coreListenersComponentsGarage": {"customJS":function(){
try {
    //Verifica se logica de eventos ja foi chamada e se não é o iFrame de Login
        if(!_satellite.data.customVars.garage){

            //Informa que dataElement ja foi chamado para evitar duplicidade
                _satellite.data.customVars.garage = true
        
            // Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: DataElements - coreListenersComponentsGarage");
                }
        
            //Função de disparo geral para garagem
                function trackGarage(tipo_evento, eventos, compatibilidade, log, infos_evento){
                    //Log
                        if (_satellite.getVar("enableLog") == "true") {
                            console.log('WA: DataElements - coreListenersComponentsGarage - ' + log, infos_evento);
                        }

                    //Em caso de o pageview já ter sido realizado
                        if(_satellite.data.customVars['pageViewFlag'] == "true" || log == "garage:loginVehicle"){                                                        

                            //Logica para verificação de filtro
                                var filtro = ''
                                var evento_filtro = ''
                                if(typeof _satellite.data.customVars['filtroGaragem'] == "string" && _satellite.data.customVars['filtroGaragem'].indexOf("Garagem|") >=0 && eventos.includes('event173')){
                                    filtro = _satellite.data.customVars['filtroGaragem']
                                    evento_filtro = ',event156'
                                }

                            //Infos
                                //var products = (cage_global_variable.detail.page.type != "product" && typeof _satellite.getVar("Products") == "") ? "" : _satellite.getVar("Products");
                                var products = cage_global_variable.detail.page.type != "product" ? "" : _satellite.getVar("Products");

                                var omni = {
                                    link_o   : "Automotivo:Garagem:" +  _satellite.getVar("getPageType") + ":" + tipo_evento,                                    
                                    events   : eventos + evento_filtro,
                                    products : products,
                                    eVar172  : compatibilidade,
                                    eVar163  : filtro
                                }
                                
                            // Disparo Adobe
                                WA_linkP(omni);
                        }
                    //Caso o pageview não tenha sido disparo
                        else{                    
                            //Compatibilidade
                                if(tipo_evento == "Compatibilidade - "){
                                    s_wa.eVar172 = compatibilidade
                                }                                                        
        
                            //Adiciona mais um evento no objeto s_wa.events (caso os eventos já não estejam no s_wa.events)
                                if (s_wa.events != undefined && s_wa.events != "" && s_wa.events.indexOf(eventos) == -1){
                                    s_wa.events += "," + eventos
                                }
                            //Adiciona mais um evento no objeto s_wa.events
                                else {
                                    s_wa.events = eventos
                                }

                        }
                }
        
            // Evento (e168) de adição de veículo à garagem
            document.addEventListener("garage:addVehicle", function (e) {
                try {
                    trackGarage('Inserção', 'event168', '', "garage:addVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - garage:addVehicle", e)
                }
            });

            // Evento (e168) de adição de veículo à garagem
            document.addEventListener("minigarage:addVehicle", function (e) {
                try {
                    var saveHistory = (e.detail.details.hasOwnProperty("saveInHistory")) ? e.detail.details.saveInHistory : "",
                        fromHistory = (e.detail.details.hasOwnProperty("saveFromHistory")) ? e.detail.details.saveFromHistory : "",
                        saveCar = ""                    
                        
                    if(typeof saveHistory == "boolean" && saveHistory){
                        saveCar = "Filtrar sem salvar"
                    }
                    else if(typeof saveHistory == "boolean" && !saveHistory){
                        saveCar = "Carro salvo"
                    }
                    else if(typeof fromHistory == "boolean" && fromHistory){
                        saveCar = "Carro salvo do histórico"
                    }

                    trackGarage('Inserção - ' + saveCar, 'event168', '', "minigarage:addVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:addVehicle", e)
                }
            });
        
            // Evento (e169) de alteração de veículo
            document.addEventListener("garage:changeVehicle", function (e) {
                try {
                    trackGarage('Alteração', 'event169', '', "garage:changeVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - garage:changeVehicle", e)
                }
            });

            // Evento (e169) de alteração de veículo
            document.addEventListener("minigarage:changeVehicle", function (e) {
                try {
                    trackGarage('Alteração', 'event169', '', "minigarage:changeVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:changeVehicle", e)
                }
            });
        
            // Evento (e170) de exclusão de veículo da garagem
            document.addEventListener("garage:removeVehicle", function (e) {
                try {
                    trackGarage('Exclusão', 'event170', '', "garage:removeVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - garage:removeVehicle", e)
                }
            });

            // Evento (e170) de exclusão de veículo da garagem
            document.addEventListener("minigarage:removeVehicle", function (e) {
                try {
                    trackGarage('Exclusão', 'event170', '', "minigarage:removeVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:removeVehicle", e)
                }
            });
        
            // Evento (e171) de login pela página garagem
            document.addEventListener("garage:login", function (e) {
                try {
                    trackGarage('Login', 'event171', '', "garage:loginVehicle", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - garage:loginVehicle", e)
                }
            });

            // Evento (e171) de login pela página garagem
            document.addEventListener("minigarage:login", function (e) {
                try {
                    trackGarage('Login', 'event171', '', "minigarage:login", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:login", e)
                }
            });
        
            // Evento (e172) de impressão da mini garagem
            document.addEventListener("minigarage:load", function (e) {
                try {                   
                    trackGarage('Impressão', 'event172', '', "minigarage:load", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:load", e)
                }
            });
        
            // Evento (e173) de verificação de compatibilidade entre produto e veículo
            document.addEventListener("minigarage:checkCompatibility", function (e) {
                try {

                    var compatibilidade = e.detail.details.isCompatible
                    var eventos = 'event173'

                    if(typeof compatibilidade == "boolean" && compatibilidade){
                        compatibilidade = "SIM"
                        
                        var breadCrumb = e.detail.page.breadCrumb[e.detail.page.breadCrumb.length - 1]
                        
                        if(breadCrumb == undefined){
                            breadCrumb = "-"
                        }
                        else if(typeof breadCrumb.name == "string"){
                            breadCrumb = breadCrumb.name
                        }

                        var filter = e.detail.page

                        if(filter.hasOwnProperty("canonical") == true && filter.canonical.indexOf("/f/") > 0){
                            _satellite.data.customVars['filtroGaragem'] = 'Garagem|' + _satellite.getVar("getPageType") + '|' + breadCrumb + '|-|-'
                        }
                    }
                    else if(typeof compatibilidade == "boolean" && !compatibilidade){
                        compatibilidade = "NÃO"
                    }
                    else if(compatibilidade == null){
                        compatibilidade = "Produto não cadastrado"
                    }                   
                    
                    trackGarage('Compatibilidade', eventos, compatibilidade, "minigarage:checkCompatibility", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:checkCompatibility", e)
                }
            });
        
            // minigarage:tireSearch ???
            // Evento (e173) de verificação de compatibilidade entre produto e veículo
            // >> Falta inserir o comentário acima no tag manager
            document.addEventListener("minigarage:tireSearch", function (e) {
                try {
                    var saveHistory = (e.detail.details.hasOwnProperty("saveInHistory")) ? e.detail.details.saveInHistory : "",
                        fromHistory = (e.detail.details.hasOwnProperty("saveFromHistory")) ? e.detail.details.saveFromHistory : "",
                        saveCar = "",                    
                        breadCrumb = cage_global_variable.detail.page.breadCrumb[cage_global_variable.detail.page.breadCrumb.length - 1]
                        
                    if(breadCrumb == undefined){
                        breadCrumb = "-"
                    }
                    else if(typeof breadCrumb.name == "string"){
                        breadCrumb = breadCrumb.name
                    }
                        
                    if(typeof saveHistory == "boolean" && saveHistory){
                        saveCar = "Filtrar sem salvar"
                    }
                    else if(typeof saveHistory == "boolean" && !saveHistory){
                        saveCar = "Carro salvo"
                    }
                    else if(typeof fromHistory == "boolean" && fromHistory){
                        saveCar = "Carro salvo do histórico"
                    }

                    trackGarage('Verificar Compatibilidade - ' + saveCar, 'event174', '', "minigarage:tireSearch", e)
                } catch (e) {
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage - minigarage:tireSearch", e)
                }
            });
        }
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "coreListenersComponentsGarage", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "coreListenersComponentsRecom": {"customJS":function(){
try{			
	//Recomendação
		//Carregamento document.dispatchEvent(new CustomEvent('recommendation:load', {detail: {a:1}}))

			document.addEventListener("recommendation:load",function(e){ 
				try{
					//Entra na logica apenas se componente de recom for false para nao conflitar com a logica de setTimeOut
						if(_satellite.data.customVars['components'].recommendation == "false"){
							//Catalogo
								if(typeof e.detail.shelves != "undefined"){
									//Variavel de recom recebe infos do evento
										cage_global_variable_components.recomendacao     = e.detail.shelves.shelves
										cage_global_variable_components.recomendacao_env = "Catalog"					
									//Seta infos de recomendação
										_satellite.getVar("coreComponentsRecomendation")									
									//Seta infos de recomendação (GA)
										//_satellite.getVar("getViewRecomGA")
									//Informa que componente está OK
										_satellite.data.customVars['components'].recommendation = "true"

									//Teste AB Recom
										cage_global_variable_components.recomendacao_testAB = (typeof e.detail.shelves.mvt == "object")?e.detail.shelves.mvt:''
										_satellite.getVar("getRRABTest");

									//Chama função de disparo do Analytics
										_satellite.getVar("coreTrackPageView")
								}
							//Checkout
								else if(typeof e.detail.recommendation == "object"){
									//Variavel de recom recebe infos do evento
										cage_global_variable_components.recomendacao     = e.detail.recommendation.placements
										cage_global_variable_components.recomendacao_env = "Cart"
									//Seta infos de recomendação (Adobe)
										_satellite.getVar("coreComponentsRecomendation")
									//Seta infos de recomendação (GA)
										//_satellite.getVar("getViewRecomGA")
									//Informa que componente está OK
										_satellite.data.customVars['components'].recommendation = "true"
									//Chama função de disparo do Analytics
										_satellite.getVar("coreTrackPageView")
								}
						}
				}catch(e){
					//Informa que componente está OK
						_satellite.data.customVars['components'].recommendation = "true"
					//Chama função de disparo do Analytics
						_satellite.getVar("coreTrackPageView")

					_satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "Core - Listeners: Lógica de componentes - coreListenersComponentsRecom - Load", e);
				}
			});

		//Erro
		
			document.addEventListener("recommendation:error",function(e){ 
				try{
					//Entra na logica apenas se componente de recom for false para nao conflitar com a logica de setTimeOut
						if(_satellite.data.customVars['components'].recommendation == "false"){
							//Variavel de recom recebe infos do evento
								cage_global_variable_components.recomendacao = ""
							//Informa que componente está OK
								_satellite.data.customVars['components'].recommendation = "true"
							//Chama função de disparo do Analytics
								_satellite.getVar("coreTrackPageView")
						}
				}catch(e){
					//Informa que componente está OK
						_satellite.data.customVars['components'].recommendation = "true"
					//Chama função de disparo do Analytics
						_satellite.getVar("coreTrackPageView")

					_satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "Core - Listeners: recommendation:error - coreListenersComponentsRecom - Erro", e);
				}
			});
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "Core - Listeners: recommendation:load - coreListenersComponentsRecom", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersComponentsSpaceLoad": {"customJS":function(){
try{			
	//AB Test
		document.addEventListener("space:load",function(e){
			try{
				//Logs
					if(_satellite.getVar("enableLog") == "true"){
						console.log("WA: DataElements - Space Load")
						console.log(e)
					}
				
				//Infos de audiencia				
					cage_global_variable_components.space = e.detail	

				//Chama lógica de space		
					_satellite.getVar("getViewSpace")
			}catch(e){
				try {
					_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsSpaceLoad", e);
				} catch (e) {}
			}
		});

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersComponentsSpaceLoad", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersCouponActivate": {"customJS":function(){
try{		
	//Purchase Load Minha Conta
        document.addEventListener("coupon:activated",function(e){

            try{
                //Logs
                    if(_satellite.getVar("enableLog") == "true"){
                        console.log("WA: Ativação de Cupom - Catálogo")
                        console.log(e)
                    }
                
                //Nome cupom
                    var nome_cupom = e.detail.coupon

                // Criar objeto com variáveis do disparo
                    var omni = {
                        link_o: "Cupom:AtivaçãoCatalogo",
                        pageName : _satellite.getVar("setPageName"),
                        eVar35   : _satellite.getVar("getPageType"),
                        eVar180  : nome_cupom,
                        events   : 'event182'
                    }

                    WA_linkP(omni);

            }catch(e){
                _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "coreListenersCouponActivate", e);
            }
		})
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "coreListenersCouponActivate", e);
    } catch (e) {}
}
},"storeLength":"pageview"},
    "coreListenersFavorite": {"customJS":function(){
try {

    document.addEventListener("favorite:action", function (e) {
        try {

            //Inicia objeto CR
            _satellite.data.customVars['favorite'] = {
                retornoApi: e
            };

            var omni = {
                link_o   : "Favorite",
                pageName: _satellite.getVar("setPageName"),
                eVar35: _satellite.getVar("getPageType"),
                events: e.detail.isFavorite ? 'event90' : 'event122'
            }

            WA_linkP(omni);

        } catch (e) {
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersFavorite", e);
        }
    })
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersFavorite", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "coreListenersModalOpen": {"customJS":function(){
try {

    //DataElement para salvar infos do modal open em páginas que o evento modal:open ocorre antes do page load
        document.addEventListener("modal:open", function (e) {
            //Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: Modal Open Dispatched")
                }        

            try {
                _satellite.data.customVars["modalOpen"] = {
                    retornoApi: e.detail
                };
            } catch (err) {
                _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersModalOpen:Listeners", err);
            }
        })
    
    //Tapume APP
        document.addEventListener("boarding:pageview", function (e) {
            //Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: Tapume - Ir para o site")
                }        

            try {
                // Seta informações para disparo para adobe
                var omni = {
                    link_o: "Modal - Tapume - Ir para o site"                    
                }
                WA_linkP(omni);
            } catch (err) {}
        })
        document.addEventListener("boarding:open", function (e) {
            //Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: Tapume - Tapume Exibicao")
                }        

            try {
                // Seta informações para disparo para adobe
                var omni = {
                    link_o: "Modal - Tapume - Open"                    
                }
                WA_linkP(omni);
            } catch (err) {}
        })
        document.addEventListener("boarding:app-download", function (e) {
            //Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: Tapume - APP Download")
                }        

            try {
                // Seta informações para disparo para adobe
                var omni = {
                    link_o: "Modal - Tapume - Open"                    
                }
                WA_linkP(omni);
            } catch (err) {}
        })
} catch (err) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersModalOpen", err);
    } catch (err) { }
}
},"storeLength":"pageview"},
    "coreListenersPage": {"customJS":function(){
try {
	if (_satellite.getVar("enableLog") == "true") {
		console.log("WA: Inicio Logica Listeners de Pagina")
	}

	//Dispara DC de acordo com a página e verifica lógica de componentes da página
	dispara_directCall = function (dc_pagina) {
		try {
			//Verifica componentes
			//Recomendacao
			if (!_satellite.textMatch(cage_global_variable.detail.page.components, /rec/) && cage_global_variable.nome_pagina != "Sacola") {
				if (_satellite.getVar("enableLog") == "true") {
					console.log("WA: Pagina sem componente de RECOM")
				}

				//Informa que a página em questão não terá recomendação
				_satellite.data.customVars['components'].recommendation = "true"
			}

			//B2W Ads
			if (!_satellite.textMatch(cage_global_variable.detail.page.components, /b2wAds/)) {
				if (_satellite.getVar("enableLog") == "true") {
					console.log("WA: Pagina sem componente de B2W-Ads")
				}

				//Informa que a página em questão não terá recomendação
				_satellite.data.customVars['components'].ads = "true"
			}

			//DirectCall de Pagina
			_satellite.track(dc_pagina)
			//Todas as páginas					
			_satellite.track("cage_page_all")
		} catch (e) {
			//Informa que a página em questão não terá recomendação
			_satellite.data.customVars['components'].recommendation = "true"
			_satellite.data.customVars['components'].ads = "true"
			_satellite.track(dc_pagina)
			//Todas as páginas					
			_satellite.track("cage_page_all")
		}
	}

	//Verificação de Página
	document.addEventListener("page:load", function (e) {
		try {
			//Seta variavel Global com valores do evento assincrono
			window.parent.cage_global_variable = e
			cage_global_variable = e

			//DirectCall pagina
			var directCall_page = ""

			//Remove Logica para cage antigo (REMOVER APÓS MIGRAÇÃO COMPLETA)	
			if (typeof cage_global_variable.detail.page.dataLayer != "object") {
				//Logs
				if (_satellite.getVar("enableLog") == "true") {
					console.log("WA: PageLoad")
				}

				//TRACKING GLOBAL (chama direct call [DC] Adobe Analytics)
				if (_satellite.data.customVars['globalTracking'] == "false") {
					_satellite.track("cage_adobe_analytics");
				}

				//TRACKING DE PÁGINA
				//Catálogo
				//Home
				if (cage_global_variable.detail.page.type == "home") {
					cage_global_variable.nome_pagina = "Home"
					directCall_page = "cage_page_home"
				}
				//Busca
				else if (cage_global_variable.detail.page.type == "search") {
					cage_global_variable.nome_pagina = "Busca"
					directCall_page = "cage_page_search"
				}
				//Departamento, Subloja, Linha e Sublinha
				else if (cage_global_variable.detail.page.type == "department" || cage_global_variable.detail.page.type == "category") {
					var breadcrumb = cage_global_variable.detail.page.breadCrumb.length

					//Departamento
					if (breadcrumb == 1) {
						cage_global_variable.nome_pagina = "Departamento"
						directCall_page = "cage_page_departament"
					}
					//Linha
					else if (breadcrumb == 2) {
						cage_global_variable.nome_pagina = "Linha"
						directCall_page = "cage_page_line"
					}
					//Sublinha
					else if (breadcrumb == 3 || breadcrumb > 3) {
						cage_global_variable.nome_pagina = "Sublinha"
						directCall_page = "cage_page_subline"
					}
				}
				//Produto
				else if (cage_global_variable.detail.page.type == "product") {
					cage_global_variable.nome_pagina = "Produto"
					directCall_page = "cage_page_product"
				}
				//Mais Ofertas
				else if (cage_global_variable.detail.page.type == "other_offers") {
					cage_global_variable.nome_pagina = "MaisOfertas"
					directCall_page = "cage_page_otherOffers"
				}
				//Etapa: Garantia Estendida
				else if (cage_global_variable.detail.page.type == "services") {
					cage_global_variable.nome_pagina = "GarantiaEstendida"
					directCall_page = "cage_page_services"
				}

				//Ambiente de seguros - marca.services.com.br
				else if (cage_global_variable.detail.page.type.indexOf("services-") >= 0) {
					cage_global_variable.nome_pagina = "Servicos"
					directCall_page = "cage_page_services"
				}
				//Finance
				else if (cage_global_variable.detail.page.type.indexOf("finance-") >= 0) {
					cage_global_variable.nome_pagina = "FinancePropostaCompleta"
					directCall_page = "cage_page_finance"
				}
				//Deal
				else if (cage_global_variable.detail.page.type == "offers" || cage_global_variable.detail.page.type == "offer") {
					cage_global_variable.nome_pagina = "Deal"
					directCall_page = "cage_page_deal"
				}
				//WebStore
				else if (cage_global_variable.detail.page.type == "seller" && typeof cage_global_variable.detail.page.storeInStore == "boolean" && cage_global_variable.detail.page.storeInStore == false) {
					cage_global_variable.nome_pagina = "WebStore"
					directCall_page = "cage_page_webstore"
				}
				//Store in Store
				else if (cage_global_variable.detail.page.type == "seller" && typeof cage_global_variable.detail.page.storeInStore == "boolean" && cage_global_variable.detail.page.storeInStore == true) {
					cage_global_variable.nome_pagina = "StoreInStore"
					directCall_page = "cage_page_storeInStore"
				}
				//Artista
				else if (cage_global_variable.detail.page.type == "artist") {
					cage_global_variable.nome_pagina = "Artista"
					directCall_page = "cage_page_artist"
				}

				//Checkout
				//Sacola
				else if (cage_global_variable.detail.page.type == "basket") {
					cage_global_variable.nome_pagina = "Sacola"
					directCall_page = "cage_page_basket"
				}

				//Pagamento
				else if (cage_global_variable.detail.page.type == "payment") {
					//Informa que a página em questão  terá frete
					_satellite.data.customVars['components'].freight = "false"

					cage_global_variable.nome_pagina = "Pagamento"
					directCall_page = "cage_page_payment"

					//1-Click
					if (cage_global_variable.detail.oneClick == true) {
						cage_global_variable.nome_pagina = "Pagamento-1Click"
					}
				}

				//Alterar Endereco
				else if (cage_global_variable.detail.page.type == "address") {
					cage_global_variable.nome_pagina = "AlterarEndereco"
					directCall_page = "cage_page_address"
				}

				//Obrigado
				else if (cage_global_variable.detail.page.type == "thankyou") {
					cage_global_variable.nome_pagina = "Obrigado"
					directCall_page = "cage_page_thankyou"

					//1-Click
					if (cage_global_variable.detail.oneClick == true) {
						cage_global_variable.nome_pagina = "Obrigado-1Click"
					}
				}

				//Minha Conta
				//Home
				else if (cage_global_variable.detail.page.type == "my-account") {
					cage_global_variable.nome_pagina = "MinhaConta:Home"
					directCall_page = "cage_page_myaccount_home"
				}

				// Minhas Vendas
				else if (cage_global_variable.detail.page.type.includes("my-account-my-sales-")) {

					//Remove logica de recomendação da página
					if (typeof cage_global_variable.detail.page == "object" && typeof cage_global_variable.detail.page.components == "object") {
						cage_global_variable.detail.page.components = []
					}

					// Home
					if (cage_global_variable.detail.page.type == "my-account-my-sales-") {
						cage_global_variable.nome_pagina = "MinhasVendas:Introducao"
					}

					// Demais páginas
					else {
						var pageName = _satellite.getVar("getPathname")

						// Remove barras "/" do Pathname
						pageName = pageName.replace(/\//g, '')

						// Transforma primeira letra em maiuscula
						pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

						// Transforma cada primeira letra seguida de hífens, em maiusculas
						pageName = pageName.replace(/-([a-z])/g, function (pageName) {
							return pageName[1].toUpperCase();
						});

						cage_global_variable.nome_pagina = "MinhasVendas:" + pageName

					}

					directCall_page = "cage_page_myaccount_my_sales"
				}


				//Departamento, Subloja, Linha e Sublinha
				else if (cage_global_variable.detail.page.type == "department" || cage_global_variable.detail.page.type == "category") {
					var breadcrumb = cage_global_variable.detail.page.breadCrumb.length

					//Departamento
					if (breadcrumb == 1) {
						cage_global_variable.nome_pagina = "Departamento"
						directCall_page = "cage_page_departament"
					}
					//Linha
					else if (breadcrumb == 2) {
						cage_global_variable.nome_pagina = "Linha"
						directCall_page = "cage_page_line"
					}
					//Sublinha
					else if (breadcrumb == 3 || breadcrumb > 3) {
						cage_global_variable.nome_pagina = "Sublinha"
						directCall_page = "cage_page_subline"
					}
				}

				//Cliente.Marca
				//Login
				else if (cage_global_variable.detail.page.type == "login") {
					//Tipo de login - Checkout
					if (typeof cage_getParam("next") == "string" && cage_getParam("next").indexOf("sacola.") >= 0) {
						cage_global_variable.nome_pagina = "Cliente:Login:Checkout"
					}
					//Tipo de Login - Minha Conta
					else {
						cage_global_variable.nome_pagina = "Cliente:Login:MinhaConta"
					}

					directCall_page = "cage_page_client_login"
					//Poderia chamar direto assim: _satellite.track("cage_page_client_login")
				}
				//Login Televendas
				else if (cage_global_variable.detail.page.type == "loginTelemarketer") {
					cage_global_variable.nome_pagina = "Cliente:Login:Telemarketer"
					directCall_page = "cage_page_client_login"
				}
				//Cadastro PF
				else if (cage_global_variable.detail.page.type == "singUpPF" || cage_global_variable.detail.page.type == "signUpPF") {
					//Tipo de Cadastro - Checkout
					if (typeof cage_getParam("next") == "string" && cage_getParam("next").indexOf("sacola.") >= 0) {
						cage_global_variable.nome_pagina = "Cliente:Cadastro:Checkout:PF"
					}
					//Tipo de Cadastro - Minha Conta
					else {
						cage_global_variable.nome_pagina = "Cliente:Cadastro:MinhaConta:PF"
					}

					directCall_page = "cage_page_client_signUpPF"
				}
				//Cadastro PJ
				else if (cage_global_variable.detail.page.type == "signUpPJ") {
					//Tipo de Cadastro - Checkout
					if (typeof cage_getParam("next") == "string" && cage_getParam("next").indexOf("sacola.") >= 0) {
						cage_global_variable.nome_pagina = "Cliente:Cadastro:Checkout:PJ"
					}
					//Tipo de Cadastro - Minha Conta
					else {
						cage_global_variable.nome_pagina = "Cliente:Cadastro:MinhaConta:PJ"
					}

					directCall_page = "cage_page_client_signUpPJ"
				}
				//Compra sem Cadastro
				else if (cage_global_variable.detail.page.type == "signUpGuest") {
					cage_global_variable.nome_pagina = "Cliente:CompraSemCadastro"
					directCall_page = "cage_page_client_guest"
				}
				//Cadastro endereço
				else if (cage_global_variable.detail.page.type == "signUpAddress") {
					cage_global_variable.nome_pagina = "Cliente:CadastroEndereço"
					directCall_page = "cage_page_client_signUpAddress"
				}

				//Completar Cadastro (pós login via facebook)
				else if (cage_global_variable.detail.page.type == "completeCadastro") {
					cage_global_variable.nome_pagina = "Cliente:CompletarCadastro"
					directCall_page = "cage_page_client_completeSignUp"
				}

				//Atualizar Telefone
				else if (cage_global_variable.detail.page.type == "updatePhone") {
					cage_global_variable.nome_pagina = "Cliente:AtualizarTelefone"
					directCall_page = "cage_page_client_updatePhone"
				}
				//Atualizar Senha
				else if (cage_global_variable.detail.page.type == "changePassword") {
					cage_global_variable.nome_pagina = "Cliente:AlterarSenha"
					directCall_page = "cage_page_client_changePassword"
				}
				//Atualizar Login
				else if (cage_global_variable.detail.page.type == "changeLogin") {
					cage_global_variable.nome_pagina = "Cliente:AlterarLogin"
					directCall_page = "cage_page_client_changeLogin"
				}

				//Hotsites
				else if (cage_global_variable.detail.page.type == "hotsite" || cage_global_variable.detail.page.type == "special") {
					cage_global_variable.nome_pagina = "Hotsite"
					directCall_page = "cage_page_other"
				}

				//Marca
				else if (cage_global_variable.detail.page.type == "brand") {
					cage_global_variable.nome_pagina = "Marca"
					directCall_page = "cage_page_other"
				}
				//SiteMap
				else if (cage_global_variable.detail.page.type == "sitemap") {
					cage_global_variable.nome_pagina = "SiteMap"
					directCall_page = "cage_page_other"
				}

				//Review de Produto
				else if (cage_global_variable.detail.page.type == "review") {
					cage_global_variable.nome_pagina = "ReviewProduto"
					directCall_page = "cage_page_review"
				}

				// SQUADs
				// Garagem
				else if (cage_global_variable.detail.page.type == "garage") {
					cage_global_variable.nome_pagina = "Garagem"
					directCall_page = "cage_page_garage"
				}

				//Outros
				else {
					//Exclui pagina de endereço da sacola -- ENTENDER O PROBLEMA
					if (typeof cage_global_variable.detail.addresses != "object") {
						cage_global_variable.nome_pagina = "Outros"
						directCall_page = "cage_page_other"
					}
				}
			}

			//Disparo DirectCall de Pagina
			if (directCall_page != "") {
				dispara_directCall(directCall_page)
			}

		} catch (e) {
			cage_global_variable.nome_pagina = "Outros"
			dispara_directCall("cage_page_other")

			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersPage", e);
		}
	})
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "Core - Listeners: coreListenersPage", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "coreLogs": {"customJS":function(){
//Logs
	try {
		if(_satellite.getVar("enableLog") == "true"){
			console.log("WA: Inicio logica Analytics")
			
			document.addEventListener("freight:calculate",function(e){
				console.log("WA: TESTE EVENTO OK - FRETE")
				console.log(e)
			})

			document.addEventListener("sku:selected",function(e){
				console.log("WA: TESTE EVENTO OK - SKU")
				console.log(e)
			})

			document.addEventListener("recommendation:load",function(e){
				console.log("WA: TESTE EVENTO OK - RECOMENDACAO")
				console.log(e)
			})

			document.addEventListener("recommendation:view",function(e){
				console.log("WA: TESTE EVENTO OK - RECOMENDACAO VIEW")
				console.log(e)
			})

			document.addEventListener("recommendation:error",function(e){
				console.log("WA: TESTE EVENTO OK - RECOMENDACAO ERROR")
				console.log(e)
			})

			document.addEventListener("form:field",function(e){
				console.log("WA: TESTE EVENTO OK - Formulario Campo")
				console.log(e)
			})

			document.addEventListener("login:success",function(e){
				console.log("WA: TESTE EVENTO OK - Login com sucesso")
				console.log(e)
			})

			document.addEventListener("form:submit",function(e){
				console.log("WA: TESTE EVENTO OK - Form Submit")
				console.log(e)
			})

			document.addEventListener("ads:load",function(e){
				console.log("WA: TESTE EVENTO OK - B2WAds Load")
				console.log(e)
			})

			document.addEventListener("b2wads:load",function(e){
				console.log("WA: TESTE EVENTO OK - B2WAds Load")
				console.log(e)
			})

			document.addEventListener("cartao-pre-aprovado:load ",function(e){
				console.log("WA: TESTE EVENTO OK - Cartao POK")
				console.log(e)
			})

			document.addEventListener("recommendation:product-add",function(e){
				console.log("WA: TESTE EVENTO OK - RECOM PRODCT ADD")
				console.log(e)
			})
			
			document.addEventListener("social:share",function(e){
				console.log("WA: TESTE EVENTO OK - COMPARTILHAR PAGINA DE PRODUTO")
				console.log(e)
			})
			
			document.addEventListener("offers:view",function(e){
				console.log("WA: TESTE EVENTO OK - OFFERS VIEW")
				console.log(e)
			})
			
			document.addEventListener("squad:modal:open",function(e){
				console.log("WA: TESTE EVENTO OK - SQUADE Modal Open")
				console.log(e)
			})

			document.addEventListener("squad:modal:close",function(e){
				console.log("WA: TESTE EVENTO OK - SQUADE Modal Close")
				console.log(e)
			})

			document.addEventListener("aggregation:filter:change",function(e){
				console.log("WA: TESTE EVENTO OK - Aggregation Filter Change")
				console.log(e)
			})

			document.addEventListener("aggregation:filter:submit",function(e){
				console.log("WA: TESTE EVENTO OK - Aggregation Filter Submit")
				console.log(e)
			})			
		}			
	} catch (e) {}
},"storeLength":"pageview"},
    "coreMetrics": {"customJS":function(){
try{
	_satellite.getVar("Metrics-recommendation");
 	_satellite.getVar("Metrics-experiments");
}catch(e){}
},"storeLength":"pageview"},
    "coreTrackPageView": {"customJS":function(){
try {
	//Verifica todos os componentes da página
		var verifica_componentes = "true"
		for (var component in _satellite.data.customVars.components) {
			//Se algum component ainda não está OK, aborta o disparo
				if (_satellite.data.customVars.components[component] == "false") {
					verifica_componentes = "false";
				}
		}

	//Verifica se o tracking global, tracking de pagina e tracking de componentes estão OK
		if (_satellite.data.customVars['pageTracking'] == "true" && _satellite.data.customVars['globalTracking'] == "true" && verifica_componentes == "true") {
			//GetErroJS
				_satellite.getVar("coreErroJS");
			
			//GA
				_satellite.getVar("coreGATrackPageView");

			//VERIFICA SE É UM BOT OU SITE MALICIOSO - SE FOR, APLICA COLETA APENAS PARA O RS GLOBAL - OBS: Nome DataElement incorreto. Alterar depois
				if (_satellite.getVar("getPhishing") == true) {
					s_wa_top.account = "b2w-phis"
				}	

			//Unifica objetos com informações de disparo
				//Unifica s_wa_top com s_wa
					function extend(object_top, object_cage) {
						for (var key in object_cage) {
							if (object_cage.hasOwnProperty(key)) object_top[key] = object_cage[key];
						}
						return object_top;
					}

					window.s_wa_unified = extend(s_wa_top, s_wa);

				//iFrame do Cage passa informação para TOP
					window.top.s_wa = s_wa_unified;					

			//Disparos
				//Disparo DMP
					//window.top.WA_disparaDMP()

				//Disparo Adobe Analytics
					window.top.s_wa.t();
					_satellite.data.customVars['pageViewFlag'] = "true"

				//Logs
					if (_satellite.getVar("enableLog") == "true") {
						console.log("WA: Disparo Adobe")
					}

			//Reseta informações de pagina e componentes
				//Adobe
					window.s_wa         = {}
					window.top.s_wa.clearVars();
					window.s_wa_unified = ""
				//Controller
					_satellite.data.customVars['globalTracking']              = "false"
					_satellite.data.customVars['pageTracking']                = "false"
					_satellite.data.customVars['components']                  = {}
					_satellite.data.customVars['components'].recommendation   = "false"
					_satellite.data.customVars['components'].ads              = "false"
					_satellite.data.customVars['components_sec'].publications = "false"
					_satellite.data.customVars['components_sec'].search_grid  = "false"
					_satellite.data.customVars['getJsError']                  = ""
		}

	//Verifica se apenas os componentes não estão OK e cria logica de setTimeOut
		else if (_satellite.data.customVars['pageTracking'] == "true" && _satellite.data.customVars['globalTracking'] == "true" && verifica_componentes == "false") {
			//Logs
				if (_satellite.getVar("enableLog") == "true") {
					console.log("WA: Aguardando Componentes")
				}

			//Aguarda os componentes durante 3,5 segundos
				setTimeout(
					function() {
						//Verifica se o global trackin já foi resetado para false (sinonimo que os componentes foram disparados). Se não foram, entra na lógica de disparo
							if (_satellite.data.customVars['globalTracking'] != "false") {
								//Logs
									if (_satellite.getVar("enableLog") == "true") {
										console.log("WA: Componentes nao disponiveis")
									}

								//Itera todos os componentes 
									for (var component in _satellite.data.customVars.components) {
										//Coloca todos os componenetes com true
										if (_satellite.data.customVars.components[component] == "false") {
											_satellite.data.customVars.components[component] = "true"
										}

										//Função de disparo
											_satellite.getVar("coreTrackPageView")
									}
							}
					}, 3500);
		}					
} catch (e) {}
},"storeLength":"pageview"},
    "enableLog": {"customJS":function(){
//Habilita Log
	try{
		if(window.top.location.href.indexOf("log=true") >=0){
			return "true";
		}
		else if(typeof cage_getParam("log") == "string" && cage_getParam("log") == "true"){
			return "true";
		}
	}catch(e){}
},"storeLength":"pageview"},
    "getABTest": {"customJS":function(){
try {
	//Logica TesteAB
		if(typeof cage_global_variable_components == "object" && typeof cage_global_variable_components.abTest == "object" && typeof cage_global_variable_components.abTest.experiment == "object"){

			var id_experimento = (typeof cage_global_variable_components.abTest.experiment.id == "string")?cage_global_variable_components.abTest.experiment.id:cage_global_variable_components.abTest.experiment.experimentId
			var variante       = ""
				if(typeof cage_global_variable_components.abTest.experiment.variant == "string"){
					variante = cage_global_variable_components.abTest.experiment.variant
				}
				else if(typeof cage_global_variable_components.abTest.experiment.version == "string"){
					variante = cage_global_variable_components.abTest.experiment.version
				}

			//Se a variável de teste ainda não tiver sido criada
				if(typeof s_wa.prop68 == "undefined" || s_wa.prop68 == ""){
					s_wa.prop68 = id_experimento + ": " + variante
				}
			//Adiciona mais um teste AB na variavel
				else{
					// Verifica se experimento já existe na prop68
						if(!s_wa.prop68.includes(id_experimento)) {
							s_wa.prop68 += "," + id_experimento + ": " + variante
						}
				}
		}

	//TEMP - Teste AB Cadastro
		if(typeof _satellite.readCookie("catalogTestAB") == "string" && _satellite.readCookie("catalogTestAB") != ""){
			var variante = _satellite.readCookie("catalogTestAB")
			//Se a variável de teste ainda não tiver sido criada
				if(typeof s_wa.prop68 == "undefined" || s_wa.eVar40 == ""){
					s_wa.prop68 = "catalogTestAB: " + variante
				}
			//Adiciona mais um teste AB na variavel
				else{
					s_wa.prop68 += "," + "catalogTestAB: " + variante
				}
		}
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getABTest", e);
	}
	catch(e){}
}

},"storeLength":"pageview"},
    "getABTestAuthorClick": {"customJS":function(){
try {

    //Evento para coletar clique no link ancora do nome do autor
    document.addEventListener("bookauthor:show", function(e){
      
      	// Logs
        if (_satellite.getVar("enableLog") == "true") {
          console.log("WA: DataElements - bookauthor:show", e);
        }

        var omni = {
            events: ""
        }

        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                omni.events += ",event187"
            }
        //Adiciona mais um evento no objeto s_wa.events
            else {
                omni.events = "event187"
            }

        // Dispara para Adobe
        WA_linkP(omni);
    });    

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DateElement", "getABTestAuthorClick", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getABTestRecom": {"customJS":function(){
try {

    // Pega 'Experimentos' da página e armazena em variavel para facilitar iteração
        var experiments = cage_global_variable_components.abTestAll
    // Inicia variável que receberá o 'Experimento' atual na iteração
        var exp = {}

    // Percorre todos os experimentos buscando um em específico
        for (var i = 0; i < experiments.length; i++) {
            exp = experiments[i].experiment
            // Condição: Somente se estiver no teste AB(experimento) definido
                if (exp.experimentId == "PDP_006_INFO_FIRST" && (exp.variant == "A" || exp.variant == "B")) {
                    // Lógica de impressões
                        _satellite.getVar("getABTestRecomView")
                    // Lógica de clicks
                        _satellite.getVar("getABTestRecomClick")
                        break
                }
        }

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DateElement", "getABTestRecom", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getABTestRecomClick": {"customJS":function(){
try {
    if (typeof _satellite.getVar("getPFMv2Click") == "string") {
        
        // Separa string pelo pipe e guarda no array
            var arr = _satellite.getVar("getPFMv2Click").split("|");

        // Veririca se é uma Recomendação com origem da página de Produto
            if (arr[1].includes("Recomendação") && arr[4].includes("Produto")) {
                // Verifica se é recomendação ou b2w-ads e altera seu valor
                    arr[1] = (arr[1] == "Recomendação com ads" ? arr[1] = "B2W-Ads" : "Recomendação")
                // Seta informações para o Adobe
                    s_wa.eVar124 = arr[1] + "|" + arr[3] + "|" + arr[6]
                // Incrementa evento na variável event
                    s_wa.events += ",event149"
            }
    }
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DateElement", "getABTestRecomClick", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getABTestRecomView": {"customJS":function(){
try {

    document.addEventListener("recommendation:view", function (e) {
        try {

            // Variaveis iniciais para preenchimento das propriedades de disparo Adobe
                var name = ""
                var rule = ""
                var position = ""

            // Se for 'Recomendação', compara com os experimentos da página
                if (e.detail.shelf != "b2wAds") {

                    // Pega 'Recomendações' da página e armazena em variavel para facilitar iteração
                        var recoms = cage_global_variable_components.recomendacao

                    // Compara o evento ocorrido com a lista de recomendações da página
                        for (var j = 0; j < recoms.length; j++) {
                            // Pega informações da recomendação e seta variáveis iniciais para disparo Adobe
                                if (e.detail.shelf == recoms[j].type) {
                                    name = "Recomendação"
                                    rule = recoms[j].rule
                                    position = recoms[j].type
                                    // Tratamento da string 'position'. Pega somente os caracteres que sucedem o ponto(.): item_page.rr1 -> rr1
                                        for (var i = 0; i < position.length; i++) {
                                            if (position.substring(i, i + 1) == ".") {
                                                position = position.substring(i + 1)
                                            }
                                        }
                                        break
                                }
                        }

                }
            // Se for 'B2wAds':
                else {
                    // Seta variáveis iniciais para disparo Adobe com texto estático
                        name = "B2W-Ads"
                        rule = "Ads"
                        position = "Ads"
                }

            // Seta informações para o Adobe
                var omni = {
                    link_o: e.type,
                    eVar124: name + "|" + rule + "|" + position,
                    events: "event148"
                }

            // Efetua disparo para o Adobe
                WA_linkP(omni)

        } catch (e) {
            try {
                //Erro JS
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getABTestRecomView - recommendation:view", e);
            } catch (e) { }
        }
    })

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getABTestRecomView", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getActiveTabOffers": {"customJS":function(){
try {
    
        document.addEventListener("offers:view", function (e) {
            try {

                // Variaveis iniciais para preenchimento das propriedades de disparo Adobe
                    var eventActiveTab = ""

                // Verifica qual tab foi clicada
                    if (e.detail.toLowerCase() == "new") {
                        // Evento 151 para offers:view new
                            eventActiveTab = "event151"
                    }
                    else if (e.detail.toLowerCase() == "used") {
                        // Evento 152 para offers:view used
                            eventActiveTab = "event152"
                    }

                // Seta informações para o Adobe
                var omni = {
                    link_o: "MaisOfetas:TabView",
                    events: eventActiveTab
                }

            // Efetua disparo para o Adobe
                WA_linkP(omni)

            }
            catch (e) {
                // Erro JS
                    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getActiveTabOffers - moreoffers:tabview", e);
            }
        });
    
    } catch (e) {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getActiveTabOffers", e);
    }
},"storeLength":"pageview"},
    "getAfpid": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro Franq
	if (typeof cage_getParam("afpid") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("afpid")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getAfpid", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getAFPIDCookie": {"customJS":function(){
try{
	var cookie = '';
  
  if(typeof _satellite.readCookie("afpid") !== "undefined"){
		cookie = _satellite.readCookie("afpid");
	}

	return cookie;
}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getDMPCookie", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getAmbienteTI": {"customJS":function(){
try {
	var ambiente_ti = ""
	
	//Domínio carrinho.
		if (_satellite.getVar("getURL").indexOf("carrinho.") >= 0) {
			ambiente_ti = "Carrinho"
		}
	//Domínio sacola.
		else if (_satellite.getVar("getURL").indexOf("sacola.") >= 0) {
			if (_satellite.getVar("getURL").indexOf("/finance") >= 0) {
				ambiente_ti = "Finance Proposta Completa"
			}
			else {
				ambiente_ti = "Nova Sacola"
			}
		}
	//Cliente
		else if (_satellite.getVar("getURL").indexOf("cliente.") >= 0) {
			ambiente_ti = "Cliente"
		}
	//Cliente
		else if (_satellite.getVar("getURL").indexOf("minhaconta.") >= 0) {
			ambiente_ti = "Minha Conta"
		}
	//Catálogo
		else {
			ambiente_ti = "Catalogo"
		}

	return ambiente_ti;
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getAmbienteTI", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getAmeCashIn": {"customJS":function(){
try {
    var cashIn = ""
    if(typeof cage_global_variable.detail.checkout.cashin != "undefined"){
        cashIn = cage_global_variable.detail.checkout.cashin
        
        if (s_wa.events != undefined && s_wa.events != "") {
            s_wa.events += ",event192=" + cashIn
        }
        else {
            s_wa.events += "event192=" + cashIn
        }
    }
    return cashIn
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getAmeCashIn", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getAmeFlow": {"customJS":function(){
try {
    var ame_flow = ""
    if(typeof cage_global_variable.detail.checkout.ameFlow == 'boolean'){
        ame_flow = cage_global_variable.detail.checkout.ameFlow
        if(ame_flow == true){
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",event191"
            }
            else {
                s_wa.events += "event191"
            }
        }
    }
    


} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getAmeFlow", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getAmeTypeUser": {"customJS":function(){
try {
    var novo_usuario_ame = ""
    if(typeof cage_global_variable.detail.checkout.newWalletCustomer == 'boolean'){
        novo_usuario_ame = cage_global_variable.detail.checkout.newWalletCustomer
        if(novo_usuario_ame == true){
            novo_usuario_ame = 'SIM'
        }
        else if(novo_usuario_ame == false){
            novo_usuario_ame = 'NAO'
        }
    }
    return novo_usuario_ame
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getAmeTypeUser", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getAppId": {"customJS":function(){
try{
	return cage_global_variable.detail.gadget
}catch(e){}
},"storeLength":"pageview"},
    "getAviseMeEmail": {"customJS":function(){
try{
	if(typeof _satellite.data.customVars.notify == "object"){
		return _satellite.data.customVars.notify.retornoApi.detail.email
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getAviseMeEmail", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getB2WEntregas": {"customJS":function(){
try {
	//Verifica disponibilidade do objeto mainOffer e da variável b2wEntregas        
        if(typeof cage_global_variable.detail.mainOffer == "object" && cage_global_variable.detail.mainOffer != null){
            var b2wentregas = "NAO"
            
            if(cage_global_variable.detail.mainOffer.b2wEntregas == true){
                b2wentregas = "SIM"
            }

            return b2wentregas;
        }                
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getB2WEntregas", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getB2W-PID": {"customJS":function(){
try {
	//Lê cookie B2W-SID
		return _satellite.readCookie("B2W-PID");
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getB2W-PID", e);
	} catch (e) {}
}


},"storeLength":"pageview"},
    "getB2WRegion": {"customJS":function(){
//Coleta b2wRegion
	try{
	   	return (typeof _satellite.readCookie("b2wRegion") == "string")?_satellite.readCookie("b2wRegion"):''
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getB2WRegion", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getB2W-SID": {"customJS":function(){
try {
	//Lê cookie B2W-SID
		return _satellite.readCookie("B2W-SID");
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getB2W-SID", e);
	} catch (e) {}
}


},"storeLength":"pageview"},
    "getB2W-UID": {"customJS":function(){
try {
	var b2wuid = ""

	//Verifica email
		if(typeof _satellite.getVar("getEmail") == "string" && _satellite.getVar("getEmail") != ""){
			WA_encriptID(_satellite.getVar("getEmail"))
		}
	//Verifica RBID Responsys
		else if(typeof _satellite.getVar("getRBID") == "string" && _satellite.getVar("getRBID") != ""){
			WA_setB2WUID(_satellite.getVar("getRBID"))
		}
	
	//Lê cookie B2W-UID
		b2wuid = _satellite.readCookie("B2W-UID")		
		return b2wuid;
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getB2W-UID", e);
	} catch (e) {}
}


},"storeLength":"pageview"},
    "getBMCAccount": {"customJS":function(){
try{
	//ACOM
		if(_satellite.getVar("coreBrandName") == "ACOM"){
			return "amr"
		}
	//SUBA
		else if(_satellite.getVar("coreBrandName") == "SUBA"){
			return ""
		}
	//SHOP
		else if(_satellite.getVar("coreBrandName") == "SHOP"){
			return ""
		}
}catch(e){}
},"storeLength":"pageview"},
    "getBotTest": {"customJS":function(){
try{
	var bot = false;
	//Verifica parâmetro
		if(typeof window.top._satellite == "object" && typeof window.top._satellite.data.customVars.checkIframe == "boolean" && window.top._satellite.data.customVars.checkIframe == true){
			bot = true;
		}

	return bot;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getBotTest", e);
	}
	catch(e){}

	return false;
}
},"storeLength":"pageview"},
    "getBreadCrumb": {"customJS":function(){
try {
	var breadcrumb = ""

	//Novo
		if(typeof cage_global_variable.detail.page.breadCrumb == "object"){
			//Itera breadcrumb
				for(var i=0; i < cage_global_variable.detail.page.breadCrumb.length; i++){
					//Nao adiciona :
						if(breadcrumb == ""){
							breadcrumb += cage_global_variable.detail.page.breadCrumb[i].name
						}
					//Adiciona :
						else{
							breadcrumb += ":" + cage_global_variable.detail.page.breadCrumb[i].name
						}
				}
		}
	//Legado
		else if(typeof cage_global_variable.detail.page.dataLayer == "object"){
			breadcrumb = cage_global_variable.detail.page.dataLayer[0].objBreadCrumb
		}

	return cage_sanitize(breadcrumb)
} catch (e) {
	//Informa erro do dataElement
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getBreadCrumb", e);
		} catch (e) {}
}
},"storeLength":"pageview"},
    "getBreadCrumbProd": {"customJS":function(){
try {
    var breadcrumb = ""

    //Novo
    if (typeof cage_global_variable.detail.page.breadCrumb == "object") {
        //Itera breadcrumb
        for (var i = cage_global_variable.detail.page.breadCrumb.length - 1; i >= 0; i--) {
            //Nao adiciona :
            if (breadcrumb == "") {
                if (cage_global_variable.detail.page.breadCrumb[i] != cage_global_variable.detail.page.breadCrumb[cage_global_variable.detail.page.breadCrumb.length - 1]) {
                    breadcrumb += cage_global_variable.detail.page.breadCrumb[i].name
                }
            }
            //Adiciona :
            else {
                breadcrumb += ":" + cage_global_variable.detail.page.breadCrumb[i].name
            }
        }
    }

    return cage_sanitize(breadcrumb)
} catch (e) {
    //Informa erro do dataElement
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getBreadCrumbProd", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getC2CRegistration": {"customJS":function(){
try {

    document.addEventListener("bank:registration", function (e) {
        try {

            // Seta informações para o Adobe
                var omni = {
                    link_o: "MinhasVendas:CadastroC2C",
                    events: "event153"
                }

            // Efetua disparo para o Adobe
                WA_linkP(omni)

        }
        catch (e) {
            // Erro JS
                _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getC2CRegistration - bank:registration", e);
        }
    });

} catch (e) {
    //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getC2CRegistration", e);
}
},"storeLength":"pageview"},
    "getCagePageName": {"customJS":function(){
try{
	return cage_global_variable.nome_pagina
}catch(e){
	//Informa erro do dataElement
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCagePageName", e);
		} catch (e) {}
}
},"storeLength":"pageview"},
    "getCartID": {"customJS":function(){
try {
	return cage_global_variable.detail.cart.id	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCartID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCatalogPageLoad": {"customJS":function(){
try {

    var pathname = _satellite.getVar("getPathname")
    var url      = _satellite.getVar("getURL")
    var pageName = ''
        if(pathname == "/" || ""){
            pageName = "Home"
        }
        else if(pathname == "/busca"){
            pageName = "Busca"
        }            

    // Coleta evento somente nas páginas Home e Busca
        if (pageName != "") {
            // Catalog:Load 
                document.addEventListener("catalog:load", function (e) {

                    try {
                        // Seta informações para o Adobe
                            var omni = {
                                link_o  : "Teste:Catalog:Load:" + pageName
                            }
                        // Efetua disparo para o Adobe
                            WA_linkP(omni)    

                        // Log
                            if(_satellite.getVar("enableLog") == "true"){
                                console.log("WA: catalog:load dispatch")
                            }
                    }
                    catch (e) {
                        // Erro JS
                            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCatalogPageLoad - catalog:load", e);
                    }
                });

            // Page:Load 
                document.addEventListener("page:load", function (e) {
                    try {
                        // Seta informações para o Adobe
                            var omni = {
                                link_o  : "Teste:Page:Load:" + pageName
                            }

                        // Efetua disparo para o Adobe
                            WA_linkP(omni)
                            
                        // Log
                        if(_satellite.getVar("enableLog") == "true"){
                            console.log("WA: page:load dispatch")
                        }
                    }
                    catch (e) {
                        // Erro JS
                            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCatalogPageLoad - page:load", e);
                    }
                });
        }

} catch (e) {
    //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCatalogPageLoad", e);
}
},"storeLength":"pageview"},
    "getCategoryList": {"customJS":function(){
try {

	//Pega array das categorias e inicia a variável com as categorias concatenadas
	var categorias = cage_global_variable.detail.search.categories,
		categoriaLista = ""

	//Loop para concatenar as categorias na variável
	for(var i = 0; i < categorias.length; i++){

		if(i < 6){
			if(categoriaLista == ""){
				categoriaLista = categorias[i].value
			}
			else{
				categoriaLista += ", " + categorias[i].value
			}
		}
	}

	return categoriaLista
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCategoryList", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCEP": {"customJS":function(){
try{
	if(typeof _satellite.data.customVars.frete_info == "object" && _satellite.data.customVars.frete_info.logicaAdobe.length > 0){
		return _satellite.data.customVars.frete_info.logicaAdobe[0].Cep
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCEP", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getChannel": {"customJS":function(){
//Inicia pageName com o nome da marca
	var channel = _satellite.getVar("coreBrandName") + ":"

//Inicia channel por página		
	try {
		//Path e Host
			var path = _satellite.getVar("getPathname")
			var host = _satellite.getVar("getHostName")
			var href = _satellite.getVar("getHostAndPath")

		//Verifica se a página é diferente de Outros
			if (cage_global_variable.nome_pagina != "Outros") {
				//Home
					if(cage_global_variable.nome_pagina == "Home"){
						channel += "Home"
					}
				//Busca
					else if(cage_global_variable.nome_pagina == "Busca"){
						channel += "Busca"
					}
				//Departamento, SubLoja, Linha, Sublinha e Produto
					else if(cage_global_variable.nome_pagina == "Departamento" || cage_global_variable.nome_pagina == "Linha" || cage_global_variable.nome_pagina == "Sublinha" || cage_global_variable.nome_pagina == "Produto"){
						if(typeof _satellite.getVar("getBreadCrumb") == "string"){
							channel += _satellite.getVar("getBreadCrumb").split(":")[0];
						}
						else{
							channel += "Outros"
						}			
					}
				//Serviços
					else if(cage_global_variable.nome_pagina == "Servicos"){
						channel += "GarantiaProduto"
					}					
				//Mais Ofertas
					else if(cage_global_variable.nome_pagina == "MaisOfertas"){
						channel += "MarketplaceListaDeLojas"
					}	
				//Deal
					else if(cage_global_variable.nome_pagina == "Deal"){
						channel += "Deal"
					}
				//WebStore
					else if(cage_global_variable.nome_pagina == "WebStore"){
						channel += "MarketplaceLojistas"
					}
				//StoreIn Store
					else if(cage_global_variable.nome_pagina == "StoreInStore"){
						channel += "StoreInStore"
					}
				//Artista
					else if(cage_global_variable.nome_pagina == "Artista"){
						channel += "Artista"
					}
				//Sacola
					else if(cage_global_variable.nome_pagina == "Sacola"){
						channel += "Carrinho"
					}
        //Finance
        	else if(cage_global_variable.nome_pagina.indexOf("Finance") >=0){
            channel += "Finance"
          }
				//Pagamento
					else if(cage_global_variable.nome_pagina == "Pagamento"){
						channel += "Checkout"
					}
				//Pagamento 1-Click
					else if(cage_global_variable.nome_pagina == "Pagamento-1Click"){
						channel += "Checkout"
					}
				//Obrigado
					else if(cage_global_variable.nome_pagina == "Obrigado"){
						channel += "Checkout"
					}
				//Obrigado 1-Click
					else if(cage_global_variable.nome_pagina == "Obrigado-1Click"){
						channel += "Checkout"
					}
				//Cliente
					else if(cage_global_variable.nome_pagina.indexOf("Cliente:") >=0){
						channel += "Cliente"
					}
				//Alterar Endereço
					else if(cage_global_variable.nome_pagina == "AlterarEndereco"){
						channel += "Checkout"
					}
				//Hotsite
					else if(cage_global_variable.nome_pagina == "Hotsite"){
						channel += "Hotsite"
					}
				//Marca
					else if(cage_global_variable.nome_pagina == "Marca"){
						channel += "Marca"
					}
				//Mapa
					else if(cage_global_variable.nome_pagina == "SiteMap"){
						channel += "MapaDoSite"
					}
			}

		//Regras por Host e Path
			else {				
				channel += "Outros"
			}

		//Retorna o nome da página no dataElement
			return channel;

	} catch (e) {
		//Informa erro do dataElement
			try {
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getChannel", e);
			} catch (e) {}
		
		//PageName de erro
			channel += "Outros"
		//Retorna o nome da página no dataElement
			return channel;
	}
},"storeLength":"pageview"},
    "getChave": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro chave
	if (typeof cage_getParam("chave") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("chave")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getChave", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCheckoutAmount": {"customJS":function(){
try {
	if (_satellite.getVar("getQtdProdCart") == 0) {
		return "0";	
	}
	else{
		var valor = 0 

		//Itera produtos
			for(var i=0; i < cage_global_variable.detail.cart.lines.length; i++){
				valor += parseFloat(cage_global_variable.detail.cart.lines[i].salesPrice)
			}

		//Valor
			valor = Math.round(valor)

		//Faixa Valor
			function faixa_valor(valor){
				faixa_valor = ""
				/* 1 - 100 | 101 - 200 | 201 - 500 | 501 - 1000 | 1000 - 2000 | 2000+ */

				if(valor > 0 && valor < 101){ faixa_valor = "R$1 a R$100" }
				else if(valor > 100  && valor < 201){ faixa_valor  = "R$101  a R$200" }
				else if(valor > 200  && valor < 501){ faixa_valor  = "R$201  a R$500" }
				else if(valor > 500  && valor < 1001){ faixa_valor = "R$501  a R$1000" }
				else if(valor > 1000 && valor < 2001){ faixa_valor = "R$1001 a R$2000" }
				else if(valor > 2000){ faixa_valor = "+ R$2000" }

				return faixa_valor
			}

		return valor.toString() + "|" + faixa_valor(valor)
	}	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCheckoutAmount", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCheckoutClick": {"customJS":function(){
try {

    //DataElement para salvar infos do modal open em páginas que o evento modal:open ocorre antes do page load
        document.addEventListener("checkout:click", function (e) {
            //Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: CheckoutClick")
                }        

            try {
                // Seta informações para disparo para adobe
                    var id = e.detail.id
                    var omni = {
                        link_o: "CheckoutClick - " + cage_global_variable.detail.page.type + " - " + id
                    }                
                
                // Dispara para Adobe
                    WA_linkP(omni);
            } catch (err) {
                _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCheckoutClick", err);
            }
        })
} catch (err) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCheckoutClick", err);
    } catch (err) { }
}
},"storeLength":"pageview"},
    "getCheckoutProductsQt": {"customJS":function(){
try{
	return cage_global_variable.detail.cart.lines.length
}catch(e){}
},"storeLength":"pageview"},
    "getCheckoutTicket": {"customJS":function(){
try{
	var p1 = 0;
	for (var i = 0; i < cage_global_variable.detail.cart.lines.length; i++) {
		p1 = p1 + parseFloat(cage_global_variable.detail.cart.lines[i].salesPrice)
	}
	
	return parseFloat(p1.toFixed(2))
}catch(e){}
},"storeLength":"pageview"},
    "getCheckoutTicketMedio": {"customJS":function(){
try{
	var p1 = 0;
	var p2 = 0;
	for (var i = 0; i < cage_global_variable.detail.cart.lines.length; i++) {
		p1 = p1 + parseFloat(cage_global_variable.detail.cart.lines[i].salesPrice)
		p2 = p2 + parseInt(cage_global_variable.detail.cart.lines[i].quantity)
	}
	return parseInt(p1 / p2);
}catch(e){}
},"storeLength":"pageview"},
    "getClickPFM": {"customJS":function(){
try{
	var parametro_pagina_origem = cage_getParam("DCSext.recom")
	var pfm = ''

	//Recom padrão
		if(typeof parametro_pagina_origem == "string" && parametro_pagina_origem.indexOf("_") >=0 && (parametro_pagina_origem.indexOf(".rr") >=0 || parametro_pagina_origem.indexOf("_rr") >=0 || parametro_pagina_origem.indexOf("history-") >=0 || parametro_pagina_origem.indexOf("combo-AdvancedMerchandisingStrategy") >=0 || parametro_pagina_origem.indexOf("banners_dest_prod") >=0 || parametro_pagina_origem.indexOf(".ads") >=0)){
			//Verifica página
				var pagina_origem = cage_getParam("nm_origem").split("_")[1]
				var pagina_origem_novo = (typeof cage_getParam("pfm_page") == "string")?cage_getParam("pfm_page"):''

				//Home
					if(pagina_origem == "home"){
						click_pfm = "Home"
					}
				//Busca
					else if(pagina_origem == "search"){
						click_pfm = "Busca"
					}
				//Category
					else if(pagina_origem == "category"){
						click_pfm = "Categoria"
					}
				//Produto
					else if(pagina_origem == "item"){
						click_pfm = "Produto"
					}
				//Minha Conta
					else if(pagina_origem_novo == "my-account"){
						click_pfm = "MinhaConta"
					}
				//Outros
					else{
						click_pfm = "Outros"
					}													
			
			//Recom
				if(parametro_pagina_origem.indexOf(".ads") == -1){
					pfm = "Recomendacao|" + click_pfm + "|"
				}
			//Ads via Recomendação
				else{
					pfm = "B2W-Ads|" + click_pfm + "|"
				}
			
			
			//Verifica valores da recom		 												
				if(_satellite.getVar("getNMOrigem") != "" && _satellite.getVar("getRankingrec") != ""){
					if(_satellite.getVar("getNMOrigem").indexOf("-") >=0){
						pfm += _satellite.getVar("getNMOrigem").split("-")[1]
					}
					else{
						pfm += _satellite.getVar("getNMOrigem").split("_")[2]
					}				
					pfm += '|' + _satellite.getVar("getRankingrec")

					//Posição da vitrine na tela
						var pos_vitrine = (_satellite.getVar("getNMOrigem").indexOf(".rr") >=0 && _satellite.getVar("getNMOrigem").indexOf("-") >=0)?_satellite.getVar("getNMOrigem").split(".")[1].split("-")[0]:'-'
						
						//Tratamento history
							if(pos_vitrine == "-" && _satellite.getVar("getNMOrigem").indexOf("history") >=0){
								pos_vitrine = "rrHistory"
							}
						//Tratamento Destaque Home
							else if(pos_vitrine == "-" && _satellite.getVar("getNMOrigem").indexOf("banners_dest") >=0){
								pos_vitrine = "dest"
							}
						//Ads via Recomendação
							else if(pfm.indexOf("B2W-Ads") >=0){
								pos_vitrine = "B2W-Ads"
							}

					pfm = pfm.replace("rec_carrinho_", "") + "|" + pos_vitrine
				}else{
					pfm = ""
				}																		
		}

	//Recom Carrinho
		else if(typeof cage_getParam("type") == "string" && typeof cage_getParam("sourcePage") == "string" && cage_getParam("type").indexOf("cart_page.rr") >=0){
			var position = (typeof cage_getParam("position") == "string")?parseFloat(cage_getParam("position") + 1):'1'

			pfm = "Recomendacao|Carrinho|BoughtTogether|" + position + "|-"
		}
	
	//PFM Busca
		else if((typeof cage_getParam("autosuggest") == "string" && cage_getParam("autosuggest") != "") || typeof cage_getParam("pfm_type") == "string" && cage_getParam("pfm_type").trim() == "search_page"){
			pfm = "Busca||||"
		}
	
	//Recom Comparador de produtos (automotivo) - pagina de produto
		else if(typeof cage_getParam("pfm_type") == "string" && cage_getParam("pfm_type") == "comparador" && typeof cage_getParam("pfm_index") == "string"){
			var pos = parseFloat(cage_getParam("pfm_index")) + 1
			pfm = "Recomendacao|Produto|ComparadorDePrecos|" + pos
		}

	return pfm;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getClickPFM", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getClickPFMAds": {"customJS":function(){
try{
	var dcsextrecom = (typeof cage_getParam("DCSext.recom") == "string" && cage_getParam("DCSext.recom").indexOf("RR_b2wAds") >=0)?'ads':''

	if(dcsextrecom == "ads"){
		//Pos
			var pos    = (typeof cage_getParam("pos") == "string")?parseFloat(cage_getParam("pos")) + 1:''
				if(pos == "" && typeof cage_getParam("pfm_index") == "string"){
					pos = parseFloat(cage_getParam("pfm_index")) + 1
				}
		//Seller
			var seller = (typeof cage_getParam("sellerName") == "string")?cage_getParam("sellerName"):''
			seller     = seller.replace(/\+/g, ' ');

		//Verifica página
			var pagina_origem = (typeof cage_getParam("pfm_page") == "string")?cage_getParam("pfm_page"):''
				if(pagina_origem == "" && typeof cage_getParam("context") == "string"){
					pagina_origem = cage_getParam("context")
				}

			//Home
				if(pagina_origem == "home"){
					pagina_origem = "Home"
				}
			//Busca
				else if(pagina_origem == "search"){
					pagina_origem = "Busca"
				}
			//Category
				else if(pagina_origem == "category" || pagina_origem == "department"){
					pagina_origem = "Categoria"
				}
			//Produto
				else if(pagina_origem == "product"){
					pagina_origem = "Produto"
				}
			//Outros
				else{
					pagina_origem = "Outros"
				}			
						
		var pfm = "B2W-Ads|" + pagina_origem + "|" + seller + "|" + pos + "|B2W-Ads"
			
		return pfm;										
	}		
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getClickPFMAds", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getClickPFMDimension": {"customJS":function(){
//ClickPFM
	try{
		//ClickPFM
			if(typeof _satellite.getVar("getClickPFM") != "undefined" && _satellite.getVar("getClickPFM") != ""){
				s_wa.eVar74 = _satellite.getVar("getClickPFM")
			}

		//ClickPFM Ads
			else if(typeof _satellite.getVar("getClickPFMAds") != "undefined" && _satellite.getVar("getClickPFMAds") != ""){
				s_wa.eVar74 = _satellite.getVar("getClickPFMAds")
			}
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getClickPFMDimension", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getClickPFMEvent": {"customJS":function(){
//ClickPFM
	try{
		//ClickPFM
			if(typeof _satellite.getVar("getClickPFM") != "undefined" && _satellite.getVar("getClickPFM") != ""){
				//Adiciona mais um evento no objeto s_wa.events
					if(s_wa.events != undefined && s_wa.events != ""){
						if(s_wa.events.indexOf("event73") == -1){
							s_wa.events += ",event73"
						}
					}
				//Adiciona mais um evento no objeto s_wa.events
					else{
						s_wa.events = "event73"
					}
			}

		//ClickPFM Ads
			else if(typeof _satellite.getVar("getClickPFMAds") != "undefined" && _satellite.getVar("getClickPFMAds") != ""){
				//Adiciona mais um evento no objeto s_wa.events
					if(s_wa.events != undefined && s_wa.events != ""){
						if(s_wa.events.indexOf("event73") == -1){
							s_wa.events += ",event73"
						}
					}
				//Adiciona mais um evento no objeto s_wa.events
					else{
						s_wa.events = "event73"
					}
			}
		//PFM 2.0
			else if(typeof _satellite.getVar("getPFMv2") != "undefined" && _satellite.getVar("getPFMv2") != ""){
				//Adiciona mais um evento no objeto s_wa.events
					if(s_wa.events != undefined && s_wa.events != ""){
						if(s_wa.events.indexOf("event73") == -1){
							s_wa.events += ",event73"
						}
					}
				//Adiciona mais um evento no objeto s_wa.events
					else{
						s_wa.events = "event73"
					}
			}
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getClickPFMEvent", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getClickSpace": {"customJS":function(){
try{	
    return (typeof cage_getParam("seg_match") == "string")?cage_getParam("seg_match"):''
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getClickSpace", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getCompletePurchaseID": {"customJS":function(){
try{
	return cage_global_variable.detail.orderId
}catch(e){}
},"storeLength":"pageview"},
    "getContentNotFound": {"customJS":function(){
try{
	//Content Not Found
		if(window.top.document.querySelectorAll(".card-notfound").length > 0){
			//Adiciona mais um evento no objeto s_wa.events
				if(s_wa.events != undefined && s_wa.events != ""){
					s_wa.events += ",event120"
				}
			//Adiciona mais um evento no objeto s_wa.events
				else{
					s_wa.events = "event120"
				}
		}
}catch(e){
	//Informa erro do dataElement
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getContentNotFound", e);
		} catch (e) {}
}
},"storeLength":"pageview"},
    "getContextData": {"customJS":function(){
var context = {
  c_b2wPid: _satellite.readCookie("B2W-PID"),
  c_b2wSid: _satellite.readCookie("B2W-SID"),
  c_b2wUid: _satellite.readCookie("B2W-UID"),
  c_customerId: _satellite.readCookie("customer.id"),
  c_b2wOpn: _satellite.readCookie("b2wOpn"),
  c_b2wDeviceType: _satellite.readCookie("b2wDeviceType"),
  c_b2wChannel: _satellite.readCookie("b2wChannel"),
  c_b2wEPar: _satellite.readCookie("b2wEPar")
};

return JSON.parse(JSON.stringify(context));
},"storeLength":"pageview"},
    "getCookies": {"customJS":function(){
//GetCookies
	try {
		//Evento de quantidade de cookies
			_satellite.getVar("getCookiesLength")

		//Quantidade e length Cookies
			s_wa.prop17 = _satellite.getVar("getCookiesQuantAndLength")

		//Lista de cookies por nome
			s_wa.prop66 = _satellite.getVar("getCookiesPorNome")

	} catch (e) {
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getCookies", e);
		} catch (e) {}
	}
},"storeLength":"pageview"},
    "getCookiesFilterInteractions": {"customJS":function(){
try {
    // Verifica se houve interação com o filtro através do cookie
        if (typeof _satellite.readCookie("wa_filterInteraction") == "string") {
            
            // Recebe informações do cookie no formato json
                var obj = JSON.parse(_satellite.readCookie("wa_filterInteraction"))

            // Inicia Variaveis
                var metodo = pagina = tipo = valor = posicao = acao = ""
            
            // Condição para tipos de filtros
                type   = obj.type
                pagina = obj.pageName
                acao   = "add"

                //Default e Categoria
                    if(type == "default"){
                        metodo  = "Padrao"
                        acao    = obj.aggregation.action
                        tipo    = obj.aggregation.filterFacet
                        valor   = obj.aggregation.filterName
                        posicao = (obj.aggregation.position + 1)

                        if(acao == "remove"){ metodo = "-" }                        
                    }

                //Categoria
                    else if(type == "category"){
                        metodo  = "Categoria"
                        tipo    = obj.aggregation.filterFacet
                        valor   = obj.aggregation.filterName
                        posicao = (obj.aggregation.position + 1)
                    }

                //Comnbo
                    else if(type == "combo"){
                        metodo  = "Combo"
                        posicao = '-'

                        //Itera itens do combo
                            for (var i in obj.aggregation){
                                if (obj.aggregation.hasOwnProperty(i)) {
                                    tipo  += i.replace("extra.", "") + ","
                                    valor += obj.aggregation[i] + ","
                                }
                            }

                        //Remove Virgulas
                            tipo    = tipo.substring(0, (tipo.length - 1));
                            valor   = valor.substring(0, (valor.length - 1));
                    }
            
            // Seta dimensões                
                s_wa.eVar163 = metodo + "|" + pagina + "|" + tipo + "|" + valor + "|" + posicao
                s_wa.prop38  = "D=v163"
            
            // Seta eventos
                var eventName = ""
                if(acao == "add"){ eventName = "event156" }
                else{ eventName = "event157" }

                //Adiciona mais um evento no objeto s_wa.events
                    if (s_wa.events != undefined && s_wa.events != "") {
                        s_wa.events += "," + eventName
                    }
                //Adiciona mais um evento no objeto s_wa.events
                    else {
                        s_wa.events = eventName
                    }

            // Deleta o cookie
                cage_setCookie("wa_filterInteraction", "", -10)
        }

} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCookiesFilterInteractions", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getCookiesLength": {"customJS":function(){
//Captura o nome de todos os cookies
	try{		
		var cookies_length = 0
		cookies_length = document.cookie.split(";").length;

		//Evento de quantidade de cookies
			if(cookies_length > 0){
				//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event76=" + cookies_length
				}
				//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event76=" + cookies_length
				}
			}
	}
	catch(e){
    try{
      _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getCookiesLength", e);
    }
    catch(e){}
  }
	
},"storeLength":"pageview"},
    "getCookiesPorNome": {"customJS":function(){
//Captura o nome de todos os cookies
	try{
		var numedo_de_cookies = document.cookie.split("; ").length					
		var cookies_por_nome  = ""

		for(var i=0; i < numedo_de_cookies; i++){
			var cookie = document.cookie.split("; ")[i].toLowerCase()

			if(cookie.indexOf("=") >=0 && (cookie.indexOf("b2wepar") >=0 || cookie.indexOf("acomepar") >=0 || cookie.indexOf("subaepar") >=0 || cookie.indexOf("b2w-uid") >=0 || cookie.indexOf("actsapp") >= 0 || cookie.indexOf("sbtsapp") >= 0 || cookie.indexOf("shtsapp") >= 0)){
				var adiciona_virgula = (numedo_de_cookies != i+1)?',':''
				cookies_por_nome     += document.cookie.split("; ")[i].split('=')[0] + adiciona_virgula
			}
		}

		cookies_por_nome = cookies_por_nome.substring(0, (cookies_por_nome.length - 1));

		return cookies_por_nome;
	}
	catch(e){
		try{
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getCookiesPorNome", e);
		}
		catch(e){}		
	}
	
},"storeLength":"pageview"},
    "getCookiesQuantAndLength": {"customJS":function(){
//Quantidade de cookies e tamanho da string document.cookie
	try{
		return document.cookie.split(";").length + "|" + document.cookie.length
	}catch(e){
		try{
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getCookiesQuantAndLength", e);
		}
		catch(e){}		
	}
},"storeLength":"pageview"},
    "getCostPurchase": {"customJS":function(){
try{
	return cage_global_variable.detail.checkout.total
}catch(e){}
},"storeLength":"pageview"},
    "getCostPurchaseAdobe": {"customJS":function(){
try {
	var custo_pedido = 0
	
	//Verifica se o Custo do Pedido está disponivel e Retorna
		custo_pedido = parseFloat(cage_global_variable.detail.checkout.total)

	//FILTRO DE ALTISSIMO VALOR: Retira produtos com valores maiores do que 45k		
		for(var i=0; i < cage_global_variable.detail.cart.lines.length; i++){
			if(cage_global_variable.detail.cart.lines[i].salesPrice > 45000){
				custo_pedido = 0		
			}		
		}

	//Filtro para remover pedidos com valor maior que 45k
		if(custo_pedido > 45000){
			custo_pedido = 0;
		}

	return custo_pedido
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCostPurchaseAdobe", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCREmail": {"customJS":function(){
try{
	if(typeof _satellite.data.customVars.cr_info == "object"){
		return _satellite.data.customVars.cr_info.retornoApi.detail.cr.email || _satellite.data.customVars.cr_info.retornoApi.detail.cr.mail;
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCREmail", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCriteoAccount": {"customJS":function(){
try{
	//ACOM
		if(_satellite.getVar("coreBrandName") == "ACOM"){
			return 8416
		}
	//SUBA
		else if(_satellite.getVar("coreBrandName") == "SUBA"){
			return 8414
		}
	//SHOP
		else if(_satellite.getVar("coreBrandName") == "SHOP"){
			return 8413
		}
}catch(e){}
},"storeLength":"pageview"},
    "getCriteoCheckoutProducts": {"customJS":function(){
try{
	var p1 = [];
	for (var i = 0; i < cage_global_variable.detail.cart.lines.length; i++) {
		p1.push({
			id: cage_global_variable.detail.cart.lines[i].productId,
			price: cage_global_variable.detail.cart.lines[i].unitSalesPrice,
			quantity: cage_global_variable.detail.cart.lines[i].quantity
		})
	}

	return p1;
}catch(e){}
},"storeLength":"pageview"},
    "getCriteoUserGraph": {"customJS":function(){
try {
	//Lê cookie B2W-SID
		return _satellite.readCookie("cto_axid");
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCriteoUserGraph", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCRLogic": {"customJS":function(){
try {
//Logs
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: DataElement - Analytics - Logica CR")
	}


	var wa_data_cr = _satellite.data.customVars.cr_info.retornoApi

	//Disparo Adobe	
		//Dispara via CustomLink
			if(_satellite.data.customVars['pageViewFlag'] == "true"){
				//Criar objeto com variáveis do disparo
					var omni = {
						link_o   : "CR",
						eVar13   : _satellite.getVar("getB2W-UID"),
						eVar18   : _satellite.getVar("getCROrigin"),
						eVar39   : _satellite.getVar("getEmail"),
						prop47   : _satellite.getVar("coreBrandName") + ":" + _satellite.getVar("getCROrigin"),
						events   : 'event5,event15'
					}

				WA_linkP(omni);				
			}

		//Dispara junto com o pageView
			else{
				s_wa.eVar13 = _satellite.getVar("getB2W-UID")
				s_wa.eVar18 = _satellite.getVar("getCROrigin")
				s_wa.eVar39 = _satellite.getVar("getEmail")
				s_wa.prop47 = _satellite.getVar("coreBrandName") + ":" + _satellite.getVar("getCROrigin")
				
				//Eventos
					//Adiciona mais um evento no objeto s_wa.events
						if (s_wa.events != undefined && s_wa.events != "") {
							s_wa.events += 'event5,event15'
						}
					//Adiciona mais um evento no objeto s_wa.events
						else {
							s_wa.events = 'event5,event15'
						}
			}		
	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCRLogic", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCROrigin": {"customJS":function(){
try{
	return _satellite.data.customVars.cr_info.retornoApi.detail.cr.o
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCROrigin", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCupomValue": {"customJS":function(){
try {
	if(typeof cage_global_variable.detail.cart.coupon != "undefined"){
		return cage_global_variable.detail.cart.coupon.name
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getCupomValue", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getCustomerId": {"customJS":function(){
try {
  var cookie = '';
  
  if(typeof _satellite.readCookie("customer.id") == "string"){
		cookie = _satellite.readCookie("customer.id");
	}

	return cookie;
}catch(e) {}
},"storeLength":"pageview"},
    "getDayMonthYear": {"customJS":function(){
try{
	var verify_date = new Date();
	var month  = verify_date.getMonth() + 1;
	var fulldate = verify_date.getDate() + "|" + month + "|" +verify_date.getFullYear();
	return  fulldate;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getDayMounthYear", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getDCSext": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro chave
	if (typeof cage_getParam("DCSext.recom") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("DCSext.recom")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getDCSext", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getDepartamentID": {"customJS":function(){
try{
	//Catalogo Novo
		if(typeof cage_global_variable.detail.page.breadCrumb == "object"){
			return cage_global_variable.detail.page.breadCrumb[0].id
		}	
}catch(e){}
},"storeLength":"pageview"},
    "getDepartmentByComma": {"customJS":function(){
try{
	var departmentByComma = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		departmentByComma += cage_global_variable.detail.cart.lines[i].product.department + ","
	}

	//Remove última vírgula
	departmentByComma = departmentByComma.substring(0, (departmentByComma.length - 1));
	return departmentByComma;
	
}catch(e){}
},"storeLength":"pageview"},
    "getDepartmentByPipe": {"customJS":function(){
try{
	var departmentByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		departmentByPipe += cage_global_variable.detail.cart.lines[i].product.department + "|"
	}

	//Remove última vírgula
	departmentByPipe = departmentByPipe.substring(0, (departmentByPipe.length - 1));
	return departmentByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getDepartmentLineSubline": {"customJS":function(){
try {
	//Itera objeto BreadCrumb e retorna ID de Departamento, linha e Sublinha
		var id_dep_lin_sub = ''

		//Departamento
			if(cage_global_variable.nome_pagina == "Departamento"){
				id_dep_lin_sub = cage_global_variable.detail.page.breadCrumb[0].id + "||"
			}

		//Linha
			else if(cage_global_variable.nome_pagina == "Linha"){
				id_dep_lin_sub = cage_global_variable.detail.page.breadCrumb[0].id + "|" + cage_global_variable.detail.page.breadCrumb[1].id + "|"
			}

		//Sublinha e Produto
			else if(cage_global_variable.nome_pagina == "Sublinha"){
				id_dep_lin_sub = cage_global_variable.detail.page.breadCrumb[0].id + "|" + cage_global_variable.detail.page.breadCrumb[1].id + "|" + cage_global_variable.detail.page.breadCrumb[2].id	
			}

		//Produto
			else if(cage_global_variable.nome_pagina == "Produto"){
				var breadcrumb = cage_global_variable.detail.page.breadCrumb
				
				var niveis_count = 1

				if(breadcrumb.length > 0){
					for(var i = 0; i < breadcrumb.length; i ++){
						var dep = cage_global_variable.detail.page.breadCrumb[i].id

						//Exclui "Home" pois é o nível default

							if(niveis_count <= 3 && dep != undefined && dep != "Home"){
								id_dep_lin_sub += dep + "|"
								niveis_count ++
							}							
					}

					//Remove último |
						id_dep_lin_sub = id_dep_lin_sub.substring(0, (id_dep_lin_sub.length - 1));

					//Apenas DEP
						if((id_dep_lin_sub.indexOf("|") >=0 && id_dep_lin_sub.split('|').length == 1) || id_dep_lin_sub.indexOf("|") == -1){
							id_dep_lin_sub += "||"
						}

					//Apenas Dep e Lin
						else if(id_dep_lin_sub.indexOf("|") >=0 && id_dep_lin_sub.split('|').length == 2){
							id_dep_lin_sub += "|"
						}
				}
				else{
					id_dep_lin_sub = "||"
				}
			}

		//Sem estrutura mercadológica
			else{
				id_dep_lin_sub = "||"
			}

		return id_dep_lin_sub;
} catch (e) {
	return "||"
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getDepartmentLineSubline", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getDepartmentName": {"customJS":function(){
try {
	//Itera objeto BreadCrumb e retorna ID de Departamento, linha e Sublinha
		var nome_dep_lin_sub = ''

		//Departamento
			if(cage_global_variable.nome_pagina == "Departamento"){
				nome_dep_lin_sub = cage_global_variable.detail.page.breadCrumb[0].name + "||"
			}

		//Linha
			else if(cage_global_variable.nome_pagina == "Linha"){
				nome_dep_lin_sub = cage_global_variable.detail.page.breadCrumb[0].name + "|" + cage_global_variable.detail.page.breadCrumb[1].name + "|"
			}

		//Sublinha e Produto
			else if(cage_global_variable.nome_pagina == "Sublinha"){
				nome_dep_lin_sub = cage_global_variable.detail.page.breadCrumb[0].name + "|" + cage_global_variable.detail.page.breadCrumb[1].name + "|" + cage_global_variable.detail.page.breadCrumb[2].name	
			}

		//Produto
			else if(cage_global_variable.nome_pagina == "Produto"){
				//For reverso pois o objeto está vindo ao contrário					
					var breadcrumb = cage_global_variable.detail.page.breadCrumb
					
					var niveis_count = 1

					if(breadcrumb.length > 0){
						for(var i = 0; i < breadcrumb.length; i ++){
							var dep = cage_global_variable.detail.page.breadCrumb[i].name

							//Exclui "Home" pois é o nível default

								if(niveis_count <= 3 && dep != undefined && dep != "Home"){
									nome_dep_lin_sub += dep + "|"
									niveis_count ++
								}							
						}

						//Remove último |
							nome_dep_lin_sub = nome_dep_lin_sub.substring(0, (nome_dep_lin_sub.length - 1));

						//Apenas DEP
							if((nome_dep_lin_sub.indexOf("|") >=0 && nome_dep_lin_sub.split('|').length == 1) || nome_dep_lin_sub.indexOf("|") == -1){
								nome_dep_lin_sub += "||"
							}

						//Apenas Dep e Lin
							else if(nome_dep_lin_sub.indexOf("|") >=0 && nome_dep_lin_sub.split('|').length == 2){
								nome_dep_lin_sub += "|"
							}
					}
					else{
						nome_dep_lin_sub = "||"
					}
			}

		return cage_sanitize(nome_dep_lin_sub)
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getDepartmentName", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getDetailsDevice": {"customJS":function(){
try{
	var useragent = navigator.userAgent;

	if(useragent.indexOf("Mobile") >=0 ||
		useragent.indexOf("BlackBerry") >=0 ||
		useragent.indexOf("Android") >=0 ||
		useragent.indexOf("iPhone") >=0){

		return "Mobile"
	}
	else{
		return "Desktop"
	}
} catch (e) {	
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getDetailsDevice", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getDidYouMean": {"customJS":function(){
try {
    //Verifica existencia do parametro "Voce quis dizer"
        var param_didyoumean = cage_getParam("didyoumean");

    //Seta evento
        if(typeof param_didyoumean == "string" && param_didyoumean == "true"){
            //Adiciona mais um evento no objeto s_wa.events
                if (s_wa.events != undefined && s_wa.events != "") {
                    s_wa.events += ",event158"
                }
            //Adiciona mais um evento no objeto s_wa.events
                else {
                    s_wa.events = "event158"
                }
        }
    
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getDidYouMean", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getDMPCookie": {"customJS":function(){
var cookie = ""

try{
	if(typeof _satellite.readCookie("b2wcrmts") == "string"){
		cookie = unescape(_satellite.readCookie("b2wcrmts"))
	}

	return cookie;
}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getDMPCookie", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getDomainBrand": {"customJS":function(){
try{
	if(_satellite.getVar("coreBrandName") == "ACOM"){
		return "americanas.com.br"
	}
	else if(_satellite.getVar("coreBrandName") == "SUBA"){
		return "submarino.com.br"
	}
	else if(_satellite.getVar("coreBrandName") == "SHOP"){
		return "shoptime.com.br"
	}
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getDomainBrand", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getEmail": {"customJS":function(){

try{
	var get_domain = ""
	try{
		//ACOM
			if(_satellite.getVar("coreBrandName") == "ACOM"){
				get_domain = "americanas"
			}
		//SUBA
			else if(_satellite.getVar("coreBrandName") == "SUBA"){
				get_domain = "submarino"
			}
		//SHOP
			else if(_satellite.getVar("coreBrandName") == "SHOP"){
				get_domain = "shoptime"
			}
		//SOUB
			else if(_satellite.getVar("coreBrandName") == "SHOP"){
				get_domain = "soubarato"
			}
	}catch(e){}

	var email = ""

	//Verifica se Existe o Parametro da Responsys RRID (UPERCASE)
		if(typeof cage_getParam("RRID") == "string"){
			email = cage_getParam("RRID")
		}
	//Verifica se Existe o Parametro da Responsys RRID (lowercase)
		else if(typeof cage_getParam("rrid") == "string"){
			email = cage_getParam("rrid")
		}
	//Verifica CR
		else if(typeof _satellite.getVar("getCREmail") == "string" && _satellite.getVar("getCREmail") != ""){
			email = _satellite.getVar("getCREmail")
		}
	//Verifica Avise-Me
		else if(typeof _satellite.getVar("getAviseMeEmail") == "string" && _satellite.getVar("getAviseMeEmail") != ""){
			email = _satellite.getVar("getAviseMeEmail")
		}
	//Verifica Email FORM
		else if(typeof _satellite.getVar("getFormEmail") == "string" && _satellite.getVar("getFormEmail") != ""){
			email = _satellite.getVar("getFormEmail")
		}
	//Painel de Controle
		else if(typeof _satellite.getVar("getMyAccountEmail") == "string" && _satellite.getVar("getMyAccountEmail") != ""){
			email = _satellite.getVar("getMyAccountEmail")
		}
	//Verifica Data Layer
		else if(typeof _satellite.getVar("getEmailBasket") == "string" && typeof _satellite.getVar("getEmailBasket") != ""){
			email = _satellite.getVar("getEmailBasket")
		}
	//Verifica Cookie de Identificação do Email
		else if(_satellite.readCookie("WA_identificacao") != "" && typeof _satellite.readCookie("WA_identificacao") != undefined && _satellite.readCookie("B2W-UID").indexOf("va_") >=0){
			var WAIdentificacao = unescape(_satellite.readCookie("WA_identificacao"))
      //Verifica se é um email valido
				if(_satellite.textMatch(WAIdentificacao, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
						email = WAIdentificacao;
				}
      
      		document.cookie = 'WA_identificacao ='+ email + '; domain=." + get_domain + ".com.br;path=/;expires=-1;';
		}

	return email;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getEmail", e);
	}
	catch(e){}
}


},"storeLength":"pageview"},
    "getEmailBasket": {"customJS":function(){
try{
	if(typeof cage_global_variable.detail.customer == "object" && typeof cage_global_variable.detail.customer.email == "string"){
		return cage_global_variable.detail.customer.email
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getEmailBasket", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getEpar": {"customJS":function(){
//Coleta EPar
	try{
      var epar = '';
    	//Verifica se possui o cookie b2wEpar
			if(typeof _satellite.readCookie("b2wEPar") == "string"){
				//Faz a Leitura do cookie b2wEpar
					epar =  _satellite.readCookie("b2wEPar")
			}
      else if(typeof _satellite.readCookie("b2wEPar") == "string"){
				//Faz a Leitura do cookie b2wEpar
					epar = _satellite.readCookie("b2wEPar")
			}
	   	//Verifica se possui o parametro epar
			else if(typeof cage_getParam("epar") == "string"){
				//Faz a Leitura do cookie b2wEpar
					epar = cage_getParam("epar")
			}
    
    return epar;
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getEpar", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getFacebookAccount": {"customJS":function(){
try{
	//ACOM
		if(_satellite.getVar("coreBrandName") == "ACOM"){
			return "1391826854417470";
		}
	//SUBA
		else if(_satellite.getVar("coreBrandName") == "SUBA"){
			return "591317247613471";
		}
	//SHOP
		else if(_satellite.getVar("coreBrandName") == "SHOP"){
			return "715369888485167";
		}
}catch(e){}
},"storeLength":"pageview"},
    "getFacebookCoopConditions": {"customJS":function(){
try{
  
  var epar = _satellite.getVar("getEpar").toLowerCase();

  var listEpars = {
    'pm_cv_ba_00_coop_qualcomm': '438821036497552',
    'pm_cv_ba_fb_coop_qualcomm': '438821036497552',
    'pm_fc_00_fb_coop-samsung-tv': '248222952373750',
    'pm_fc_00_fb_coop-samsung-tel': '331989030588967',
  };
	
  //checando se tem uma chave do objeto que tem relação com o epar atual
  var key = Object.keys(listEpars).find(function(e){
    return epar.startsWith(e);
  });

  var idCoop = listEpars[key];

	if(idCoop){		
    _satellite.track("cage_page_facebook_coop");
    _satellite.data.customVars.facebookCoopId = idCoop;
  }
    
}catch(e){}
},"storeLength":"pageview"},
    "getFacebookLoginHeader": {"customJS":function(){
try {

    // Sucesso de login
    document.addEventListener("login:success", function (e) {
        try {

            // Logs
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: DataElement - Analytics - Logica Cliente - Social Login FB")
            }

            // Seta variavel de email
            _satellite.data.customVars['form_field'] = {
                retornoApi: e
            };

            // Verifica status FB
            // Verifica se é um campo de email					
            var status_fb = ''
            if (typeof e.detail.type == "string" && e.detail.type == "FACEBOOK") {
                if (typeof e.detail.status == "string") {
                    // Meger FB e B2W
                    if (e.detail.status == "FEDERATED_FACEBOOK") {
                        status_fb = "Sync conta Facebook + B2W"
                    }
                    // Meger FB e B2W
                    else if (e.detail.status == "CREATED") {
                        status_fb = "Conta criada via Facebook"
                    }
                    // Meger FB e B2W
                    else if (e.detail.status == "AUTHENTICATED") {
                        status_fb = "Login via Facebook"
                    }
                }
            }

            // Tipo de form de login					
            var tipo_login = (_satellite.getVar("getCagePageName").includes("Checkout")) ? "Form: Login - Checkout" : (_satellite.getVar("getCagePageName").includes("MinhaConta")) ? "Form: Login - MinhaConta" : "Form: Login - Facebook Header";

            // Eventos
            var eventos = (status_fb != "") ? "event15,event130,event147" : "event15,event130"

            // Criar objeto com variáveis do disparo
            var omni = {
                link_o: "Form:Email",
                eVar13: _satellite.getVar("getB2W-UID"),
                eVar39: _satellite.getVar("getEmail"),
                eVar125: tipo_login,
                eVar146: status_fb,
                events: eventos
            }

            WA_linkP(omni);

        } catch (e) {
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElement", "getFacebookLoginHeader", e);
        }
    })

} catch (e) {
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFacebookLoginHeader", e);
};
},"storeLength":"pageview"},
    "getFinanceConditions": {"customJS":function(){
try {
  var pathname = _satellite.getVar('getPathname');
  var isValidHotsite = (
    pathname.indexOf('/home-cartao') !== -1
    || pathname.indexOf('/mais-sorrisos-cartao-americanas') !== -1
    || pathname.indexOf('/leguas-cartao-submarino') !== -1
    || pathname.indexOf('/pontos-cartao-submarino') !== -1
    || pathname.indexOf('/cartao-') !== -1
  );

  if (isValidHotsite) {
    _satellite.track('cage_page_finance_cartao');
  }
} catch (e) {console.error(e)}

},"storeLength":"pageview"},
    "getFinanceFlowPOK": {"customJS":function(){
try {

    // Verifica se banner cartão está sendo exibido
    if (cage_global_variable.detail.paymentOptions.indexOf("CARTAO_PRE_APROVADO") >= 0) {

        // Logs
        if (_satellite.getVar("enableLog") == "true") {
            console.log("WA: Cliente Finance POK")
        }

        // Aguarda submit do formulário
        _satellite.getVar("getFinanceFlowPOKStep3")

        // Eventos
        // Adiciona mais um evento no objeto s_wa.events
        if (s_wa.events != undefined && s_wa.events != "") {
            s_wa.events += ",event159"
        }
        else {
            s_wa.events = "event159"
        }

    }
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFinanceFlowPOK", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getFinanceFlowPOKStep3": {"customJS":function(){
try {

    // Clique no banner finance
    document.addEventListener("pok:submit", function (e) {
        try {

            // Logs
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: Formulário Finance POK - tentativa de envio")
            }

            // Seta informações para o evento Finance POK: Etapa 3 (e161)
            var omni = {
                link_o: "Finance:POK",
                events: "event161"
            }

            // Disparo Adobe
            WA_linkP(omni);

        } catch (e) {
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFinanceFlowPOKStep3 Listener", e)
        }
    })

} catch (e) {
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFinanceFlowPOKStep3", e);
}
},"storeLength":"pageview"},
    "getFinanceProposalType": {"customJS":function(){
try {
    var pageType = cage_global_variable.detail.page.type;
    if(pageType === 'finance-proposal-pok'){
        return 'finance-proposal-pok';
    } else if( pageType === 'finance-proposal') {
        return 'finance-proposal';
    } else {
        return 'finance-proposal-'
    }
}catch(e) {
    console.warning(e + 'Get Proposal Type');
}
},"storeLength":"pageview"},
    "getFormEmail": {"customJS":function(){
try{
	if(typeof _satellite.data.customVars.form_field == "object" && typeof _satellite.data.customVars.form_field.retornoApi.detail == "object"){
		//Form field
			if(typeof _satellite.data.customVars.form_field.retornoApi.detail.value == "string"){
				return _satellite.data.customVars.form_field.retornoApi.detail.value
			}
		//Social Login	
			else if(typeof _satellite.data.customVars.form_field.retornoApi.detail.email == "string"){
				return _satellite.data.customVars.form_field.retornoApi.detail.email
			}			
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFormEmail", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFranq": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro Franq
	if (typeof cage_getParam("franq") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("franq")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFranq", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFreightABTest": {"customJS":function(){
try{
	//Valida retorno API de FRETE
		//Teste condições
		var _sd = _satellite.data.customVars
		if(typeof _sd.frete_info == "object" && typeof _sd.frete_info.retornoApi == "object" && typeof _sd.frete_info.retornoApi.detail.freight == "object"){
			var teste_ab_frete = ""

			//Itera todas as opções de frete - V2
				if(_satellite.data.customVars.frete_info.retornoApi.detail.freight.version == "2"){
					for(var i=0; i < _satellite.data.customVars.frete_info.retornoApi.detail.freight.freightOptions.length; i++){
						//Valida experimento frete
							if(typeof _satellite.data.customVars.frete_info.retornoApi.detail.freight.freightOptions[i].products[0].experiment == "object"){
								teste_ab_frete =  _satellite.data.customVars.frete_info.retornoApi.detail.freight.freightOptions[i].products[0].experiment.id + "#"
								teste_ab_frete += _satellite.data.customVars.frete_info.retornoApi.detail.freight.freightOptions[i].products[0].experiment.version + "#"							
							}
					}
				}

			//Itera todas as opções de frete - V2
				else if(_satellite.data.customVars.frete_info.retornoApi.detail.freight.version == "3"){
					for(var i=0; i < _satellite.data.customVars.frete_info.retornoApi.detail.freight.options.length; i++){
						//Valida experimento frete
							if(typeof _satellite.data.customVars.frete_info.retornoApi.detail.freight.options[i].products[0].experiment == "object"){
								teste_ab_frete =  _satellite.data.customVars.frete_info.retornoApi.detail.freight.options[i].products[0].experiment.id + "#"
								teste_ab_frete += _satellite.data.customVars.frete_info.retornoApi.detail.freight.options[i].products[0].experiment.version + "#"							
							}
					}
				}

			return teste_ab_frete
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightABTest", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFreightErrorLogic": {"customJS":function(){
try {
//Logs
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: DirectCall - Analytics - Logica Erro de Frete")
	}

	//Infos Frete
		var wa_data_frete = _satellite.data.customVars.frete_info.retornoApi
		var cep = (typeof wa_data_frete.detail.freight == "object" && typeof wa_data_frete.detail.freight.cep == "string")?wa_data_frete.detail.freight.cep:''
		_satellite.data.customVars.frete_info.logicaAdobe.push({
			'Pagina'       		: 'Produto',
			'Contrato'    		: '',
			'ValorEntrega'	    : '',
			'PrazoEntrega'	    : '',
			'CruzamentoMalha'   : '',
			'Cep'				: cep
		});

	//Disparo Adobe	
		//Dispara via CustomLink
			if(_satellite.data.customVars['pageViewFlag'] == "true"){
				//Só dispara o frete para a oferta principal (sem essa condição o frete dispara 3 vezes por conta do novo buybox com as opções do seller)
					if(_satellite.data.customVars.frete_info.retornoApi.detail.mainOffer == _satellite.data.customVars.frete_info.retornoApi.detail.offer.id){
						//Criar objeto com variáveis do disparo
							var omni = {
								link_o   : "Produto:FreteError",
								channel  : _satellite.getVar("getChannel"),
								pageName : _satellite.getVar("setPageName"),
								products : _satellite.getVar("Products"),
								eVar49   : _satellite.getVar("getDepartmentLineSubline"),
								prop67   : _satellite.getVar("getFreightErrorMessage"),
								eVar76   : _satellite.getVar("getProductType"),
								eVar93   : _satellite.getVar("getCEP"),
								eVar104  : 'Manual',
								events   : "event97"
							}
						WA_linkP(omni);
					}		
			}

		//Dispara junto com o pageView
			else{
				//Produto e Obrigado junto com o PageView
					s_wa.prop67  = _satellite.getVar("getFreightErrorMessage")
					s_wa.eVar93  = _satellite.getVar("getCEP")
					s_wa.eVar104 = 'Automática'
					
					//Eventos
						//Adiciona mais um evento no objeto s_wa.events
							if (s_wa.events != undefined && s_wa.events != ""){
								s_wa.events += ',event97'
							}
						//Adiciona mais um evento no objeto s_wa.events
							else {
								s_wa.events = 'event97'
							}			
			}		
	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightErrorLogic", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFreightErrorMessage": {"customJS":function(){
try{
	var mensagem = (typeof _satellite.data.customVars.frete_info.retornoApi.detail.freight == "object" && typeof _satellite.data.customVars.frete_info.retornoApi.detail.freight.message == "string")?_satellite.data.customVars.frete_info.retornoApi.detail.freight.message:'Mensagem de erro nao disponivel'
	
	return mensagem
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightErrorMessage", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFreightErrorMessagePayment": {"customJS":function(){
try {
	// Verifica se erro de frete existe
		if (typeof cage_global_variable.detail.checkout.freight.reason == "string" && cage_global_variable.detail.checkout.freight.reason.length > 0) {
			// Transforma string em um objeto json
				var reason = JSON.parse(cage_global_variable.detail.checkout.freight.reason)
			// Retorna informações tratadas para página de pagamento
				return reason.httpStatusCode + "|" + reason.errorCode + "|" + reason.message
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightErrorMessagePayment", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "getFreightEvents": {"customJS":function(){
try {
	var events                  = ''

		//Adiciona mais um evento no objeto s_wa.events
			if (s_wa.events != undefined && s_wa.events != "") {
				events = ",event96"
			}
			//Adiciona mais um evento no objeto s_wa.events
			else {
				events = "event96"
			}

	var geral                   = rp = xp = prime_etapa = prime_contratacao = prime_trial = prime_renovacao = ''
	var valor_convencional      = valor_rapida = valor_expressa = ''
	var validacao_conv_x_rapida = validacao_rapida_x_expressa 	= ''
	var cruzamento_malha        = ''

	//Itera Tipos de Entrega
		for(var i=0; i < _satellite.data.customVars.frete_info.logicaAdobe.length; i++){
			var pagina   = _satellite.data.customVars.frete_info.logicaAdobe[i].Pagina
			var contrato = _satellite.data.customVars.frete_info.logicaAdobe[i].Contrato.toLowerCase()
			var prazo    = _satellite.data.customVars.frete_info.logicaAdobe[i].PrazoEntrega
			var valor    = _satellite.data.customVars.frete_info.logicaAdobe[i].ValorEntrega

				if(typeof valor == "string" && valor.indexOf(".") >=0){valor = valor.split('.')[0]}
				valor = parseFloat(valor)

			//Cruzamento de malha
				if(_satellite.data.customVars.frete_info.logicaAdobe[i].CruzamentoMalha == "sim"){
					events += ",event113"
				}

			//Prime
				//Produto
					if(pagina == "Produto"){
						//Etapa
							if(contrato.indexOf("prime") >=0){
								prime_etapa = ",event84"
							}
					}

				//Carrinho
					else if(pagina == "Carrinho"){
						//Etapa
							if(contrato.indexOf("prime") >=0){
								prime_etapa = ",event85"
							}
					}

				//Pagamento
					else if(pagina == "Pagamento"){
						//Etapa
							if(contrato.indexOf("prime") >=0){
								prime_etapa = ",event86"
							}
					}
				//Obrigado
					else if(pagina == "Obrigado"){
						//Etapa
							if(contrato.indexOf("prime") >=0){
								prime_etapa = ",event87"
							}
						//Contratacao -  Junto com a compra ou então avulsa							
							if(_satellite.data.customVars.frete_info.logicaAdobe[0].PrimeContratacao == "sim"){
								prime_contratacao = ",event114"
							}
						//Trial	
							if(_satellite.data.customVars.frete_info.logicaAdobe[0].PrimeTiral == "sim"){
								prime_trial = ",event166"
							}
						//Renovacao
							if(_satellite.data.customVars.frete_info.logicaAdobe[0].PrimeRenovacao == "sim"){
								prime_renovacao = ",event167"
							}
					}

			//Eventos numericos / Validacoes
				if(contrato == "geral"){
					geral =',event105=' + valor + ',event108=' + prazo
					valor_convencional = valor
				}
				else if(contrato == "rp"){
					rp 	  =',event106=' + valor + ',event109=' + prazo
					valor_rapida = valor
				}
				else if(contrato == "xp"){
					xp 	  =',event107=' + valor + ',event110=' + prazo
					valor_expressa = valor
				}
		}

	//Validação de valores
		//Validação Convencional > Rapida
			if((valor_convencional != "" && valor_rapida != "") && (valor_convencional > valor_rapida)){validacao_conv_x_rapida = ',event98'}
		//Validação Rapidao > Expressa
			if((valor_rapida != "" && valor_expressa != "") 	&& (valor_rapida > valor_expressa))	   {validacao_rapida_x_expressa = ',event99'}

	//Verifica Virgula
		return events + geral + rp + xp + prime_contratacao + prime_trial + prime_renovacao + prime_etapa + validacao_conv_x_rapida + validacao_rapida_x_expressa	
	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightEvents", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFreightList": {"customJS":function(){
try {
	var list = ''
	
	//Itera Tipos de Entrega
		for(var i=0; i < _satellite.data.customVars.frete_info.logicaAdobe.length; i++){
			
			var pagina   = _satellite.data.customVars.frete_info.logicaAdobe[i].Pagina
			var contrato = _satellite.data.customVars.frete_info.logicaAdobe[i].Contrato.toLowerCase()
			var prazo    = _satellite.data.customVars.frete_info.logicaAdobe[i].PrazoEntrega
			var valor    = _satellite.data.customVars.frete_info.logicaAdobe[i].ValorEntrega
			var faixa_valor = verifica_faixa_valor(parseFloat(valor))
			var faixa_prazo = (contrato != "agendada")?verifica_faixa_prazo(prazo):'-'			

			list += pagina + '|' + contrato + '|' + faixa_valor + "|" + faixa_prazo + ','
		}

	//Retira virgula 
		if(list != ''){
			list = list.substring(0, (list.length - 1));
		}	

	return list;

	//Faixas de valor e prazo
		function verifica_faixa_prazo(a){var b="";0<a&&6>a?b="1 a 5 Dias":5<a&&11>a?b="6 a 10 Dias":10<a&&16>a?b="11 a 15 Dias":15<a&&21>a?b="16 a 20 Dias":20<a&&31>a?b="21 a 30 Dias":30<a&&41>a?b="31 a 40 Dias":40<a&&51>a?b="41 a 50 Dias":50<a&&(b="Mais de 50 Dias");return b}
		function verifica_faixa_valor(a){var b="";0==a?b="R$0":0<a&&6>a?b="R$0 a R$5":5<a&&11>a?b="R$6 a R$10":10<a&&16>a?b="R$11 a R$15":15<a&&21>a?b="R$16 a R$20":20<a&&26>a?b="R$21 a R$25":25<a&&31>a?b="R$26 a R$30":30<a&&36>a?b="R$31 a R$35":35<a&&41>a?b="R$36 a R$40":40<a&&51>a?b="R$41 a R$50":50<a&&61>a?b="R$51 a R$60":60<a&&71>a?b="R$61 a R$70":70<a&&81>a?b="R$71 a R$80":80<a&&91>a?b="R$81 a R$90":80<a&&91>a?b="R$81 a R$90":90<a&&101>a?b="R$91 a R$100":100<a&&201>a?b="R$101 a R$200":200<a&&301>a?b=
		"R$201 a R$300":300<a&&401>a?b="R$301 a R$400":400<a&&501>a?b="R$401 a R$500":500<a&&(b="Mais de R$500");return b};
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightList", e);
	} catch (e) {}
}











/*/Função de retorno para faixa de prazo de entrega
		//5 em 5 até 20 dias e 10 em 10 até 50. Depois disso > 50
		
		
		function verifica_faixa_prazo(prazo){
			var faixa_prazo = ""

			if(prazo > 0 && prazo < 6){ faixa_prazo = "1 a 5 Dias" }
			else if(prazo > 5  && prazo < 11){ faixa_prazo = "6 a 10 Dias"  }
			else if(prazo > 10 && prazo < 16){ faixa_prazo = "11 a 15 Dias" }
			else if(prazo > 15 && prazo < 21){ faixa_prazo = "16 a 20 Dias" }
			else if(prazo > 20 && prazo < 31){ faixa_prazo = "21 a 30 Dias" }
			else if(prazo > 30 && prazo < 41){ faixa_prazo = "31 a 40 Dias" }
			else if(prazo > 40 && prazo < 51){ faixa_prazo = "41 a 50 Dias" }
			else if(prazo > 50){ faixa_prazo = "Mais de 50 Dias" }

			return faixa_prazo;
		}

	//Função de retorno para faixa de valor de entrega
		//R$5 em R$5 até R$40, R$10 em R$10 até R$100, R$100 e R$100 ate R$500 e depois disso > R$500
		
		
		function verifica_faixa_valor(valor){
			var faixa_valor = ""

			if(valor == 0){ faixa_valor = "R$0" }
			else if(valor > 0 && valor < 6){ faixa_valor = "R$0 a R$5" }
			else if(valor > 5  && valor < 11){ faixa_valor   = "R$6 a R$10"  }
			else if(valor > 10 && valor < 16){ faixa_valor   = "R$11 a R$15" }
			else if(valor > 15 && valor < 21){ faixa_valor   = "R$16 a R$20" }
			else if(valor > 20 && valor < 26){ faixa_valor   = "R$21 a R$25" }
			else if(valor > 25 && valor < 31){ faixa_valor   = "R$26 a R$30" }
			else if(valor > 30 && valor < 36){ faixa_valor   = "R$31 a R$35" }
			else if(valor > 35 && valor < 41){ faixa_valor   = "R$36 a R$40" }
			else if(valor > 40 && valor < 51){ faixa_valor   = "R$41 a R$50" }
			else if(valor > 50 && valor < 61){ faixa_valor   = "R$51 a R$60" }
			else if(valor > 60 && valor < 71){ faixa_valor   = "R$61 a R$70" }
			else if(valor > 70 && valor < 81){ faixa_valor   = "R$71 a R$80" }
			else if(valor > 80 && valor < 91){ faixa_valor   = "R$81 a R$90" }
			else if(valor > 80 && valor < 91){ faixa_valor   = "R$81 a R$90" }
			else if(valor > 90 && valor < 101){ faixa_valor  = "R$91 a R$100" }
			else if(valor > 100 && valor < 201){ faixa_valor = "R$101 a R$200" }
			else if(valor > 200 && valor < 301){ faixa_valor = "R$201 a R$300" }
			else if(valor > 300 && valor < 401){ faixa_valor = "R$301 a R$400" }
			else if(valor > 400 && valor < 501){ faixa_valor = "R$401 a R$500" }
			else if(valor > 500){ faixa_valor = "Mais de R$500" }

			return faixa_valor;
		}

*/
},"storeLength":"pageview"},
    "getFreightLogic": {"customJS":function(){
try {
//Logs
	if(_satellite.getVar("enableLog") == "true"){
		console.log("WA: DirectCall - Analytics - Logica Frete")
	}

	//Verifica se está na página de produto
	if(_satellite.getVar("getURL").indexOf("/produto") >=0){

		//Percorre o objeto sellerFreight para conferir os id's
		for(var i = 0; i < _satellite.data.customVars['sellerFreight'].id.length; i++){

			//Testa se o id do objeto é igual o id do ganhador do buybox
			if(_satellite.data.customVars['sellerFreight'].id[i] == _satellite.data.customVars['buyBoxWinnerID']){

				//Seta as informações de frete para realizar o disparo
				_satellite.data.customVars['frete_info'] = _satellite.data.customVars['sellerFreight'].freteInfo[i]
			}
		}
	}

	//De-Para de contratos
	var getFreightContract = function(_contrato) {
		switch(_contrato.toUpperCase()){
			case "CONVENTIONAL":
				return "geral";
			case "FAST":
				return "rp";
			case "EXPRESS":
				return "xp";
			case "CONVENTIONALPRIME":
				return 'prime';
			case "FASTPRIME":
				return "rpprime";
			case "EXPRESSPRIME":
				return "xpprime";
			case "SCHEDULED":
				return "agendada";
			case "GUARANTEED":
				return "eg";
			case "LASA":				
				return _satellite.getVar("coreBrandName") == "ACOM" ? "lasa" : "pegue_na_loja";
			default:
				return _contrato;
		}
	}


	//Pagina de Obrigado
		if(typeof cage_global_variable == "object" && cage_global_variable.nome_pagina == "Obrigado"){
			//Inicia objeto Frete
				_satellite.data.customVars['frete_info'] = {
					pagina      : 'Obrigado',
					retornoApi  : [],
					logicaAdobe : []								
				};

			//Adiciona tipo entrega
				_satellite.data.customVars.frete_info.logicaAdobe.push({
					'Pagina'       		: 'Obrigado',
					'Contrato'    		: getFreightContract(cage_global_variable.detail.checkout.freight.optionId),
					'ValorEntrega'	    : cage_global_variable.detail.checkout.freight.price,
					'PrazoEntrega'	    : cage_global_variable.detail.checkout.freight.deliveryTime[0].time,
					'CruzamentoMalha'   : (typeof cage_global_variable.detail.checkout.freight.crossDelivery == "boolean" && cage_global_variable.detail.checkout.freight.crossDelivery == true)?'sim':'nao',
					'Cep'				: '',
					'PrimeContratacao'  : (typeof cage_global_variable.detail.checkout.prime == "object" && ( cage_global_variable.detail.checkout.prime.info.toLowerCase() == "assinatura" || cage_global_variable.detail.checkout.prime.info.toLowerCase() == "assinatura_avulsa"))?'sim':'nao',
					'PrimeTiral'        : (typeof cage_global_variable.detail.checkout.prime == "object" && (cage_global_variable.detail.checkout.prime.info.toLowerCase() == "assinatura_trial" || cage_global_variable.detail.checkout.prime.info.toLowerCase() == "assinatura_trial_avulsa") )?'sim':'nao',
					'PrimeRenovacao'    : (typeof cage_global_variable.detail.checkout.prime == "object" && (cage_global_variable.detail.checkout.prime.info.toLowerCase() == "renovacao" || cage_global_variable.detail.checkout.prime.info.toLowerCase() == "renovacao_avulsa") )?'sim':'nao'
				});
		}

	//Demais paginas
		else{
			var wa_data_frete   = _satellite.data.customVars.frete_info.retornoApi
			var pagina_consulta = _satellite.data.customVars.frete_info.pagina
			
			//Versao nova API: 3
				if(_satellite.data.customVars.frete_info.retornoApi.detail.freight.version == "3"){
					//Itera opções de frete
						for(var i=0; i < wa_data_frete.detail.freight.options.length; i++){
							//Preenche dataLayer
								var valor            = wa_data_frete.detail.freight.options[i].price
								var prazo            = (typeof wa_data_frete.detail.freight.options[i].eta == "object")?wa_data_frete.detail.freight.options[i].eta.businessDays:'-'
								var contrato         = wa_data_frete.detail.freight.options[i].id
								var cruzamento_malha = (typeof wa_data_frete.detail.freight.warning == "string" && wa_data_frete.detail.freight.warning == "CROSS_DELIVERY")?'sim':'nao'
								var frete_digitado   = (typeof wa_data_frete.detail.freight.typed == "boolean" && wa_data_frete.detail.freight.typed == true)?'sim':'nao'

							//Preenche objeto dataLayer para frete
								_satellite.data.customVars.frete_info.logicaAdobe.push({
									'Pagina'       	  : pagina_consulta,
									'Contrato'    	  : getFreightContract(contrato),
									'ValorEntrega'	  : valor,
									'PrazoEntrega'	  : prazo,
									'CruzamentoMalha' : cruzamento_malha,
									'Digitado'        : frete_digitado,
									'Cep'			  : wa_data_frete.detail.freight.cep
								});		
						}	
				}					
		}

	//Disparo Adobe	
		//Dispara via CustomLink
			//Produto
				if(pagina_consulta == "Produto" && _satellite.data.customVars['pageViewFlag'] == "true"){

					//Só dispara o frete para a oferta principal (sem essa condição o frete dispara 3 vezes por conta do novo buybox com as opções do seller)
						if(_satellite.data.customVars.frete_info.retornoApi.detail.mainOffer == _satellite.data.customVars.frete_info.retornoApi.detail.offer.id){

							//Criar objeto com variáveis do disparo
								var omni = {
									link_o   : pagina_consulta + ":Frete",
									channel  : _satellite.getVar("getChannel"),
									pageName : _satellite.getVar("setPageName"),
									products : _satellite.getVar("Products"),
									list2    : _satellite.getVar("getFreightList"),
									eVar49   : _satellite.getVar("getDepartmentLineSubline"),
									eVar76   : _satellite.getVar("getProductType"),
									eVar93   : _satellite.getVar("getCEP"),
									eVar104  : _satellite.getVar("getFreightTyped"),
									events   : (_satellite.getVar("getFreightEvents") != undefined)?_satellite.getVar("getFreightEvents"):''
								}

							//Adiciona valor do produto aos eventos
								omni.events += ",event127=" + _satellite.getVar("getProductValue")
							
							WA_linkP(omni);	

							_satellite.data.customVars['sellerFreight'].id = []
							_satellite.data.customVars['sellerFreight'].freteInfo = []
						}									
				}

			//Sacola
				else if(pagina_consulta == "Carrinho" && _satellite.data.customVars['pageViewFlag'] == "true"){
					//Logs
						if(_satellite.getVar("enableLog") == "true"){
							console.log("WA: FreightLogic - Sacola - Manual")
						}

					//Criar objeto com variáveis do disparo
						var omni = {
							link_o   : pagina_consulta + ":Frete",
							channel  : _satellite.getVar("getChannel"),
							pageName : _satellite.getVar("setPageName"),
							products : _satellite.getVar("getSProducts"),
							list2    : _satellite.getVar("getFreightList"),
							eVar93   : _satellite.getVar("getCEP"),
							eVar104  : "Manual",
							events   : (_satellite.getVar("getFreightEvents") != undefined)?_satellite.getVar("getFreightEvents"):''
						}

					WA_linkP(omni);				
				}

		//Dispara junto com o pageView
			else{
				//Logs
					if(_satellite.getVar("enableLog") == "true"){
						console.log("WA: FreightLogic - Sacola - Automatico")
					}
					
				//Flag de disparo para remover disparos duplicados na pagina de produto
					var valida_disparo_frete = true;				

					if(pagina_consulta == "Produto"){

						if(typeof _satellite.data.customVars.disparo_frete == "boolean"){
							
							valida_disparo_frete = false;	
						}
					}

				//Seta infos de frete
					//Produto e Obrigado junto com o PageView
						s_wa.list2   = _satellite.getVar("getFreightList")
						s_wa.eVar93  = _satellite.getVar("getCEP")
						s_wa.eVar104 = _satellite.getVar("getFreightTyped")
					
						//Eventos - Só seta os eventos caso ja n tenha setado
							if(valida_disparo_frete == true){						
								//Adiciona mais um evento no objeto s_wa.events
									if (s_wa.events != undefined && s_wa.events != ""){
										s_wa.events += (_satellite.getVar("getFreightEvents") != undefined)?_satellite.getVar("getFreightEvents"):''
									}
								//Adiciona mais um evento no objeto s_wa.events
									else {
										s_wa.events = (_satellite.getVar("getFreightEvents") != undefined)?_satellite.getVar("getFreightEvents"):''
									}
							}
				
				//Pagina de produto - Flag de disparo realizado para não disparar mais de uma vez
					if(pagina_consulta == "Produto"){
						_satellite.data.customVars['disparo_frete'] = true
					}

				//Pagamento - Disparo é bloqueado pois a consulta de frete é assíncrona. Por isso é preciso chamar a logica de pageView
					if(pagina_consulta == "Pagamento"){
						//Informa que componente está OK
							_satellite.data.customVars['components'].freight = "true"
						//Chama função de disparo do Analytics
							_satellite.getVar("coreTrackPageView")
					}

					_satellite.data.customVars['sellerFreight'].id = []
					_satellite.data.customVars['sellerFreight'].freteInfo = []						
			}		
	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightLogic", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getFreightTyped": {"customJS":function(){
try{
	//Valida retorno API de FRETE
		if( typeof _satellite.data.customVars.frete_info.logicaAdobe == "object" &&  _satellite.data.customVars.frete_info.logicaAdobe.length > 0){
			var tipo_consulta_frete =  _satellite.data.customVars.frete_info.logicaAdobe[0].Digitado
			tipo_consulta_frete     = (tipo_consulta_frete == "sim")?"Manual":"Automática"
			
			return tipo_consulta_frete
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFreightTyped", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getGACID": {"customJS":function(){
try {
    var id_ga = ""
    if (typeof _satellite.readCookie("_ga") != "undefined" && _satellite.readCookie("_ga").includes(".") && _satellite.readCookie("_ga").split('.').length == 4) {
        id_ga = _satellite.readCookie("_ga").split('.')[2] + "." + _satellite.readCookie("_ga").split('.')[3]
    }
    else {
        if (typeof ga == "function") {
            ga(function (tracker) {
                id_ga = tracker.get('clientId')
            });
        }
    }
    return id_ga;
} catch (e) { }
},"storeLength":"pageview"},
    "getGAEparLogic": {"customJS":function(){
try {

    var epar = _satellite.getVar("getEpar");
    var eparArr = [];
    var eparExists = false;
    var eparIsDefault = false;
    var sectionsCount = 1;
    var sections = 4;
    var separatorPrev, separatorCurrent = null;

    // Se epar for vazio ou indefinido
    if (typeof epar == "undefined" || epar == "") {
        
    }
    // Epar existe
    else {
        eparExists = true;
        // Percorre o epar e separa em seções
        for (var i = 0; i < epar.length; i++) {
            // Pega toda string do ultimo separador até o separador atual
            if (epar.substring(i, i + 1) == "_") {
                if (!(sectionsCount > sections)) {
                    separatorCurrent = i;
                    eparArr.push(epar.substring(separatorPrev, separatorCurrent).replace(/\_/g, ""));
                    sectionsCount++;
                }
            }
            separatorPrev = separatorCurrent;
        }
        // Verifica se EPar está dentro do padrão
        if (eparArr.length >= sections) {
            eparIsDefault = true;
        } else {
            eparIsDefault = false;
        }
        // Guarda última seção no array, a partir da quantidade de seções até o final do EPar
        eparArr.push(epar.substring(separatorCurrent + 1, epar.length));
    }

    // Verifica se EPar existe e não é está no padrão, ou se EPar não existe
    if ((eparExists == true && eparIsDefault == false || eparExists == false)) {

        if (!eparExists) {

            // Log
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: EPar - Não existe");
            }

            if (typeof cage_getParam("gclid") != "string" && typeof cage_getParam("dclid") != "string") {
                ga('set', {
                    'dimension8': epar,
                    'dimension17': epar,
                    'dimension18': epar,
                    'dimension19': epar,
                    'dimension20': epar,
                    'dimension21': epar
                });
            }

            // Verifica se existe GClid ou DClid
            if (typeof cage_getParam("gclid") != "string" && typeof cage_getParam("dclid") != "undefined") {

                // Log
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: EPar - Existe DClid");
                }

                // Setando custom dimensions utilizando nome fixo para DClid
                ga('set', {
                    'dimension8': "campanha_display",
                    'dimension17': "campanha_display",
                    'dimension18': "campanha_display",
                    'dimension19': "campanha_display",
                    'dimension20': "campanha_display",
                    'dimension21': "campanha_display"
                });

            }
            else if (typeof cage_getParam("gclid") != "undefined" && typeof cage_getParam("dclid") != "string") {

                // Log
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: EPar - Existe GClid");
                }

                // Setando custom dimensions utilizando nome fixo para GClid
                ga('set', {
                    'dimension8': "campanha_ppc",
                    'dimension17': "campanha_ppc",
                    'dimension18': "campanha_ppc",
                    'dimension19': "campanha_ppc",
                    'dimension20': "campanha_ppc",
                    'dimension21': "campanha_ppc"
                });

            }
        }

        else {

            // Log
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: EPar - Existe mas não é está no padrão -> " + epar)
            }

            // Setando custom dimensions utilizando EPar completo
            ga('set', {
                'dimension8': epar,
                'dimension17': epar,
                'dimension18': epar,
                'dimension19': epar,
                'dimension20': epar,
                'dimension21': epar
            });

            // Verifica se existe GClid ou DClid
            if (typeof cage_getParam("gclid") != "string" && typeof cage_getParam("dclid") != "string") {

                // Log
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: EPar - Parâmetros DClid ou GClid inexistentes")
                }

                // Setando utm's utilizando EPar completo
                ga('set', {
                    'campaignMedium': epar,
                    'campaignContent': epar,
                    'campaignSource': epar,
                    'campaignName': epar
                });

            } else {
                // Log
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: EPar - Parâmetros DClid ou GClid existentes")
                }
            }
        }

    }
    // Se EPar existe e dentro do padrão
    else {

        // Log
        if (_satellite.getVar("enableLog") == "true") {
            console.log("WA: EPar - Existe e está no padrão -> " + epar)
        }

        // Setando custom dimensions utilizando seções do EPar
        ga('set', {
            'dimension8': epar,
            'dimension17': eparArr[0],  // Mídia
            'dimension18': eparArr[1],  // Formato
            'dimension19': eparArr[2],  // Subformato
            'dimension20': eparArr[3],  // Parceiro
            'dimension21': eparArr[4]   // Campanha
        });

        // Verifica se existe GClid ou DClid
        if (typeof cage_getParam("gclid") != "string" && typeof cage_getParam("dclid") != "string") {

            // Log
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: EPar - Parâmetros DClid ou GClid inexistentes")
            }

            // Setando utm's utilizando seções do EPar
            ga('set', {
                'campaignMedium': eparArr[0],
                'campaignContent': eparArr[1],
                'campaignSource': eparArr[3],
                'campaignName': eparArr[4]
            });

        } else {
            // Log
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: EPar - Parâmetros DClid ou GClid existentes")
            }
        }
    }
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "getGAEparLogic", e);
    } catch (e) {
        console.log(e);
    }
}
},"storeLength":"pageview"},
    "getGAGUA-Nestle": {"customJS":function(){
try {
  return "UA-137775265-1"
} catch (e) {}
},"storeLength":"pageview"},
    "getGAKenshooID": {"customJS":function(){
try {

    var kenshoo_id = (typeof cage_getParam("kenshoo_id") == "string" && cage_getParam("kenshoo_id") != "")?cage_getParam("kenshoo_id"):""
    
    // Se epar for vazio ou indefinido
    if (kenshoo_id != "") {
        ga('set', {
            'campaignId': kenshoo_id
        });     
    }
   
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "getGAKenshooID", e);
    } catch (e) {}
}
},"storeLength":"pageview"},
    "getGALibrary": {"customJS":function(){
try {

    //Logs
    if (_satellite.getVar("enableLog") == "true") {
        console.log("WA: Google Analytics - GA Library")
    }

    // Carrega biblioteca .js do GA
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');


    //UA
        var ga_ua = _satellite.getVar("getGAUA")
    
    //Condição conta Nestlé
        if(_satellite.getVar("testNestleEPares") == "ok"){
            ga_ua = _satellite.getVar("getGAGUA-Nestle")
            //Logs
			if (_satellite.getVar("enableLog") == "true") {
				console.log("WA: NESTLE - ALTERACAO DE ID DE CONTA")
			}
        }

    // Verifica se usuário está vindo do App nativo para WebView
    if (typeof cage_getParam("ga_client_id") == "string" && typeof cage_getParam("ga_client_id") != "") {

        //Logs
        if (_satellite.getVar("enableLog") == "true") {
            console.log("WA: Google Analytics - Tracker criado com clientId")
        }

        // Cria rastreador com 'clientId'
        ga('create', ga_ua, 'auto', {
            'clientId': cage_getParam("ga_client_id")
        });
    } else {

        //Logs
        if (_satellite.getVar("enableLog") == "true") {
            console.log("WA: Google Analytics - Tracker padrão iniciado")
        }

        // Cria rastreador padrão
        ga('create', ga_ua, 'auto');
    }
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "pageLoad", "Funções Globais + Listeners: getGALibrary", e);
    } catch (e) {
        console.log(e);
    }
}
},"storeLength":"pageview"},
    "getGAPfmView": {"customJS":function(){
try{
    var path = _satellite.getVar("getPathname")
    //Home
    if((path == "/" || path == "") && typeof cage_global_variable_components.recomendacao == "object" && cage_global_variable_components.recomendacao.length > 0 && typeof cage_global_variable_components.recomendacao[0].products == "object" && cage_global_variable_components.recomendacao[0].products.length > 0 && typeof cage_global_variable_components.recomendacao[0].products[0].attributes == "object"){
        //PFM View - Itera itens vitrines de recom (não funciona produto)
            ga('require', 'ec');
            
            for(var i=0; i < cage_global_variable_components.recomendacao.length; i++){
                for(var x=0; x < cage_global_variable_components.recomendacao[i].products.length; x++){
                    //MKTP - Tratamento variáveis
                        var mktp_tipoProduto = cage_global_variable_components.recomendacao[i].products[x].attributes.mktp_flag[0]
                    
                        if(mktp_tipoProduto == "0"){mktp_tipoProduto = "Exclusivo B2C"}
                        else if(mktp_tipoProduto == "1"){mktp_tipoProduto = "Misto B2C"}
                        else if(mktp_tipoProduto == "2"){mktp_tipoProduto = "Exclusivo Marketplace"}
                        else if(mktp_tipoProduto == "3"){mktp_tipoProduto = "Misto Marketplace"}
                    
                    //Posicao Regua
                        var pos = ""
                        var regra = cage_global_variable_components.recomendacao[i].type
                        if((regra.indexOf("history") >=0 || regra.indexOf("rr") >=0) && regra.indexOf(".") >=0){
                            pos = regra.split(".")[1].replace("rr", "RR").replace("history", "History")
                        }                       

                    //PFM Impression
                        if(pos != ""){
                            ga('ec:addImpression', {            
                                'id': cage_global_variable_components.recomendacao[i].products[x].id,
                                //'name': "",
                                //'category': "",
                                //'brand': "",
                                'list': 'Recomendacao: Home',
                                //'variant': "",
                                'position': pos,
                                'dimension11': mktp_tipoProduto,
                                'dimension19': cage_global_variable_components.recomendacao[i].rule,
                                //'metric5': '1'
                            });
                        }
                }
            }                    
    }
} catch (e) {}
},"storeLength":"pageview"},
    "getGARequireEC": {"customJS":function(){
try {

    // Catálogo ou Sacola
    if (_satellite.getVar("getHostName").includes("www.") || _satellite.getVar("getHostName").includes("sacola.")) {
        // Logs
        if (_satellite.getVar("enableLog") == "true") {
            console.log("WA: Call Require Enhanced E-Commerce")
        }
        // Função GA - Enhanced E-Commerce
        ga('require', 'ec');
    }
    // Login, Cadastro e Minha Conta
    else {
        // Logs
        if (_satellite.getVar("enableLog") == "true") {
            console.log("WA: Don't Call Require Enhanced E-Commerce")
        }
    }
    
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "Core - Funções Globais: getGARequireEC", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getGAUA": {"customJS":function(){
try{
	//ACOM
		if(_satellite.getVar("coreBrandName") == "ACOM"){
			return "UA-97626372-1"
		}
	//SUBA
		else if(_satellite.getVar("coreBrandName") == "SUBA"){
			return "UA-97626372-3"
		}
	//SHOP
		else if(_satellite.getVar("coreBrandName") == "SHOP"){
			return "UA-97626372-2"
		}
}catch(e){}
},"storeLength":"pageview"},
    "getGclid": {"customJS":function(){
//Coleta Gclid
	try{
	   	//Verifica se possui o parametro gclid
			if(typeof cage_getParam("gclid") == "string"){
				//Faz a Leitura do parametro gclid
					return cage_getParam("gclid")
			}
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getGclid", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getGCLIDCookie": {"customJS":function(){
try {
  var cookie = '';
	if(typeof _satellite.readCookie('gclid') === 'string'){
		cookie = unescape(_satellite.readCookie('gclid'))
	}

	return cookie;
}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getGCLIDCookie", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getHighValueProduct": {"customJS":function(){
try {
	var highValueProduct = false;

	//Verifica se existem atributos para o produto
		if(typeof cage_global_variable.detail.offers[0] == "object"){
			//Itera ofertas
				for(var i=0; i < cage_global_variable.detail.offers.length; i++){
					//Verifica se oferta tem valor maior que 500k
						if(cage_global_variable.detail.offers[i].salesPrice > 500000){
							highValueProduct = true
						}
				}
		}

	//Dispara evento
		if(highValueProduct){
			//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event80"
				}
			//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event80"
				}
		}

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getHighValueProduct", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getHostAndPath": {"customJS":function(){
try {
	//Retorna o endereço da página
		return window.top.location.hostname + window.top.location.pathname
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getHostAndPath", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getHostName": {"customJS":function(){
try {
	return window.top.location.hostname;

} catch (e) {
	//Informa erro do dataElement
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getHostname", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getHourMinutes": {"customJS":function(){
try{
		var verify_hour_minutes = new Date()
		//Retorna a Hora
		var verify_hour =  verify_hour_minutes.getHours().toString();
		//Retorna o Minuto
		var verify_minutes =  verify_hour_minutes.getMinutes().toString();	
		//Retorna os Segundos
		var verify_seconds =  verify_hour_minutes.getSeconds().toString();
		//Retorna a Hora e os minutos no formato HH:MM:SS
  	verify_hour_minutes = verify_hour + ":" + verify_minutes + ":" + verify_seconds;
		return verify_hour_minutes;
}catch(e){
    try{
      _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getHourMinutes", e);
    }
    catch(e){}
}
},"storeLength":"pageview"},
    "getIdentificationEvent": {"customJS":function(){
//B2W-UID
	try{
		//Evento para B2W-UID identificado
			if(_satellite.readCookie("B2W-UID") != undefined && _satellite.readCookie("B2W-UID").indexOf("va_") == -1){
				//Adiciona mais um evento no objeto s_wa.events
				if(s_wa.events != undefined && s_wa.events != ""){
					s_wa.events += ",event15"
				}
				//Adiciona mais um evento no objeto s_wa.events
				else{
		 			s_wa.events = "event15"
				}
			}
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getIdentificationEvent", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getIDMarketPlace": {"customJS":function(){
try {
	var cnpjs_marketplace = ""

	//Itera o CNPJ dos sellers excluindo B2W
		for(var i=0; i < cage_global_variable.detail.offers.length; i++){
			//3P
				if(cage_global_variable.detail.offers[i]._embedded.seller.name != "B2W"){ 
					cnpjs_marketplace += cage_global_variable.detail.offers[i]._embedded.seller.id + ","
				}
		}

	//Remove última vírgula
		cnpjs_marketplace = cnpjs_marketplace.substring(0, (cnpjs_marketplace.length - 1));
		return cnpjs_marketplace;
		
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getIDMarketPlace", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getIDMarketPlaceBuyBox": {"customJS":function(){
try {
	var ganhador_buy_box = ""

	//CNPJ Ganhador BuyBox para Marketplace
		if(typeof cage_global_variable.detail.offers == "object" && cage_global_variable.detail.offers.length > 0 && cage_global_variable.detail.offers[0]._embedded.seller.name != "B2W"){ 
			ganhador_buy_box = cage_global_variable.detail.offers[0]._embedded.seller.id
		}

	return ganhador_buy_box
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getIDMarketPlaceBuyBox", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getIDMarketPlaceBuyBoxC1P": {"customJS":function(){
try {
	var ganhador_buy_box = cage_global_variable.detail.offers[0]._embedded.seller.id

	return ganhador_buy_box
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getIDMarketPlaceBuyBoxC1P", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getIDMarketPlaceC1P": {"customJS":function(){
try {
	var cnpjs_marketplace = ""

	//Itera o CNPJ dos sellers excluindo B2W
		for(var i=0; i < cage_global_variable.detail.offers.length; i++){
			cnpjs_marketplace += cage_global_variable.detail.offers[i]._embedded.seller.id + ","
		}

	//Remove última vírgula
		cnpjs_marketplace = cnpjs_marketplace.substring(0, (cnpjs_marketplace.length - 1));
		return cnpjs_marketplace;
		
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getIDMarketPlace", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getIdsGoogleDCMCoop": {"customJS":function(){
try {
    return {
        'pm_gc_00_go_coop-samsung-tv' : '8234422'
    }
} 
catch (e) {}
},"storeLength":"pageview"},
    "getIframeVerification": {"customJS":function(){
//Verificação iFrame
	try {
		if(window.top._satellite.data.customVars.checkIframe == true){
			//Captura URL da página
				try {
					s_wa.prop65 = window.top.document.referrer
				} catch (e) {}

			//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event92"
				}
			//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event92";
				}
		}
	} catch (e) {
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getIframeVerification", e);
		} catch (e) {}
	}
},"storeLength":"pageview"},
    "getInteractionsToPurchase": {"customJS":function(){
try{
	var interactions_purchase = JSON.parse(_satellite.readCookie("wa_mc")).quantityInteractions

	return interactions_purchase
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getInteractionsToPurchase", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getKclickId": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro Franq
	if (typeof cage_getParam("k_clickid") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("k_clickid")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getKclickId", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getLastMidia": {"customJS":function(){
try{
	var lastMidia = JSON.parse(_satellite.readCookie("wa_mc")).lastMidia		

	return lastMidia
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getLastMidia", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getLineByComma": {"customJS":function(){
try{
	var lineByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		lineByPipe += cage_global_variable.detail.cart.lines[i].product.line + ","
	}

	//Remove última vírgula
	lineByPipe = lineByPipe.substring(0, (lineByPipe.length - 1));
	return lineByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getLineByPipe": {"customJS":function(){
try{
	var lineByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		lineByPipe += cage_global_variable.detail.cart.lines[i].product.line + "|"
	}

	//Remove última vírgula
	lineByPipe = lineByPipe.substring(0, (lineByPipe.length - 1));
	return lineByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getLineID": {"customJS":function(){
try{
	//Catalogo Novo
		if(typeof cage_global_variable.detail.page.breadCrumb == "object"){
			return cage_global_variable.detail.page.breadCrumb[1].id
		}	
	//Catalogo Legado
		else if(typeof cage_global_variable.detail.page.dataLayer == "object"){
			return cage_global_variable.detail.page.dataLayer[0].objLinha
		}
}catch(e){}
},"storeLength":"pageview"},
    "getMarketplaceBrand": {"customJS":function(){
try{
	if(_satellite.getVar("coreBrandName") == "ACOM"){
		return "americanas.com"
	}
	else if(_satellite.getVar("coreBrandName") == "SUBA"){
		return "Submarino"
	}
	else if(_satellite.getVar("coreBrandName") == "SHOP"){
		return "Shoptime"
	}
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getMarketplaceBrand", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getMcem": {"customJS":function(){
//Coleta Mcem
	try{
	   	//Verifica se possui o parametro mcem
			if(typeof cage_getParam("mcem") == "string"){
				//Faz a Leitura do parametro mcem
					return cage_getParam("mcem")
			}
	}
	catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getMcem", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getMCHLogic": {"customJS":function(){
try{
	if(typeof _satellite.readCookie("wa_mc") == "string" && _satellite.readCookie("wa_mc") != "remove"){
		//Funções manipulação de datas
			//Padroniza data
				function parseDate(str) {
					var mdy = str.split('/')
					//Inverte a posição do date para o padrão brasileiro (dd/mm/aaaa/hh)
					return new Date(mdy[2], mdy[1] - 1, mdy[0]);
				}

			//Diminui o primeiro dia pelo segundo
				function daydiff(first, second) {
					//Arredonda e diminui o segundo dia pelo primeiro e multiplica por milisegundos, segundos, minutos e horas
					return (second - first) / (1000 * 60 * 60 * 24)
				}

		//Variaveis
			var wa_mc = JSON.parse(_satellite.readCookie("wa_mc"))

		//Logica das janelas de conversão (1, 3, 7, 15, 16+)
			var janela1       = janela3 = janela7 = janela15 = janela16m = ''
			var janela1dia    = janela3dias = janela7dias = janela15dias = janela16mdias = ''
			var dia1janela1   = dia1janela3 = dia1janela7 = dia1janela15 = dia1janela16m = ''
			var quant_janela1 = quant_janela3 = quant_janela7 = quant_janela15 = quant_janela16m = 0

			//Itera Midias (Janela (1, 3, 7, 15 ou 16+) | Quantidade de Midias | Quantidade Dias | Ordem Mídias)
				for(var i=0; i < wa_mc.interactions.length; i++){							
					var pos         = i
					var data_midia  = wa_mc.interactions[pos].date
					var data_pedido = _satellite.getVar("getMCHTimeStamp")
					var midia       = wa_mc.interactions[pos].midia
					var quant_dias  = daydiff(parseDate(data_midia),parseDate(data_pedido))

					//Janela de 1 dia
						if(quant_dias <= 1){						
							//Primeira e única interação da janela
								if(dia1janela1 == "" && pos == wa_mc.interactions.length - 1){
									janela1dia = 0
								}
							//Primeira interação janela
								else if(dia1janela1 == ""){
									dia1janela1 = data_midia
								}
							//Ultima interação janela
								else if(pos == wa_mc.interactions.length - 1){
									janela1dia = daydiff(parseDate(dia1janela1),parseDate(data_pedido))
								}
							janela1     += midia + " > "
							quant_janela1++;
						}

					//Janela de 3 dias
						if(quant_dias <= 3){
							//Primeira e única interação da janela
								if(dia1janela3 == "" && pos == wa_mc.interactions.length - 1){
									janela3dias = 0
								}
							//Primeira interação janela
								else if(dia1janela3 == ""){
									dia1janela3 = data_midia
								}
							//Ultima interação janela
								else if(pos == wa_mc.interactions.length - 1){
									janela3dias = daydiff(parseDate(dia1janela3),parseDate(data_pedido))
								}
							janela3     += midia + " > "
							quant_janela3++;
						}
					//Janela de 7 dias
						if(quant_dias <= 7){
							//Primeira e única interação da janela
								if(dia1janela7 == "" && pos == wa_mc.interactions.length - 1){
									janela7dias = 0
								}
							//Primeira interação janela
								else if(dia1janela7 == ""){
									dia1janela7 = data_midia
								}
							//Ultima interação janela
								else if(pos == wa_mc.interactions.length - 1){
									janela7dias = daydiff(parseDate(dia1janela7),parseDate(data_pedido))
								}
							janela7     += midia + " > "
							quant_janela7++;
						}
					//Janela de 15 dias
						if(quant_dias <= 15){
							//Primeira e única interação da janela
								if(dia1janela15 == "" && pos == wa_mc.interactions.length - 1){
									janela15dias = 0
								}
							//Primeira interação janela
								else if(dia1janela15 == ""){
									dia1janela15 = data_midia
								}
							//Ultima interação janela
								else if(pos == wa_mc.interactions.length - 1){
									janela15dias = daydiff(parseDate(dia1janela15),parseDate(data_pedido))
								}
							janela15     += midia + " > "
							quant_janela15++;
						}	
					//Janela de 16+ dias
						if(quant_dias < 50){
							//Primeira e única interação da janela
								if(dia1janela16m == "" && pos == wa_mc.interactions.length - 1){
									janela16mdias = 0
								}
							//Primeira interação janela
								else if(dia1janela16m == ""){
									dia1janela16m = data_midia
								}
							//Ultima interação janela
								else if(pos == wa_mc.interactions.length - 1){
									janela16mdias = daydiff(parseDate(dia1janela16m),parseDate(data_pedido))
								}
							janela16m     += midia + " > "
							quant_janela16m++;
						}					
				}

				//Remove " > " das janelas
					if(janela1.indexOf(" > ")   >=0){janela1    = janela1.substring(0, (janela1.length - 3))}
					if(janela3.indexOf(" > ")   >=0){janela3    = janela3.substring(0, (janela3.length - 3))}
					if(janela7.indexOf(" > ")   >=0){janela7    = janela7.substring(0, (janela7.length - 3))}
					if(janela15.indexOf(" > ")  >=0){janela15   = janela15.substring(0, (janela15.length - 3))}
					if(janela16m.indexOf(" > ") >=0){janela16m  = janela16m.substring(0, (janela16m.length - 3))}

				//Variáveis Adobe
					//Path de Midias
						s_wa.eVar106 = "1|"   + quant_janela1   + "|" + janela1dia    + "|" + janela1
						s_wa.eVar107 = "3|"   + quant_janela3   + "|" + janela3dias   + "|" + janela3
						s_wa.eVar108 = "7|"   + quant_janela7   + "|" + janela7dias   + "|" + janela7
						s_wa.eVar109 = "15|"  + quant_janela15  + "|" + janela15dias  + "|" + janela15
						s_wa.eVar110 = "16+|" + quant_janela16m + "|" + janela16mdias + "|" + janela16m

					//Atribuição Linear
						s_wa.prop5 = (janela1.indexOf(" > ") >=0)?janela1.split(" > ").join(','):janela1
						s_wa.prop6 = (janela3.indexOf(" > ") >=0)?janela3.split(" > ").join(','):janela3
						s_wa.prop7 = (janela7.indexOf(" > ") >=0)?janela7.split(" > ").join(','):janela7
						s_wa.prop8 = (janela15.indexOf(" > ") >=0)?janela15.split(" > ").join(','):janela15
						s_wa.prop9 = (janela16m.indexOf(" > ") >=0)?janela16m.split(" > ").join(','):janela16m

					//Tempo até a compra
						s_wa.eVar111 = _satellite.getVar("getInteractionsToPurchase")


				//Remove cookie MCH
					var domain = ""
					//ACOM
						if(_satellite.getVar("coreBrandName") == "ACOM"){
							domain = ".americanas.com.br"
						}
					//SUBA
						else if(_satellite.getVar("coreBrandName") == "SUBA"){
							domain = ".submarino.com.br"
						}
					//SHOP
						else if(_satellite.getVar("coreBrandName") == "SHOP"){
							domain = ".shoptime.com.br"
						}
					//SOUB
						else if(_satellite.getVar("coreBrandName") == "SOUB"){
							domain = ".soubarato.com.br"
						}

					document.cookie = "wa_mc=remove;path=/;domain=" + domain + ";"
	}	
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMCHLogic", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getMCHMidia": {"customJS":function(){
try{
	//Logica de Mídia
		var epar  = _satellite.getVar("getEpar").toLowerCase()
		var franq = typeof _satellite.getVar("getFranq") == "string" && _satellite.getVar("getFranq") != ""
		var midia = ''

		//Logica Midia
			//Direto
				if(epar == ""){
					midia = "TD"
				}
			//Afiliados
				else if(_satellite.textMatch(epar, /^af_/) || epar == "b2wafiliados" || epar == "afilio" || epar == "4ad7-0b94-6391" || epar == "34475" || epar.indexOf("_dotz") >=0 || franq || epar == "lomadee"){
					midia = "AF"
				}
			//Busca Organica
				else if(_satellite.textMatch(epar, /^bo_/) || epar == "googleorganico" || epar == "bingorganico"){
					midia = "BO"
				}
			//Busca PPC
				else if(_satellite.textMatch(epar, /^bp_/) || epar == "309933"){
					midia = "BP"
				}
			//Comparadores
				else if(_satellite.textMatch(epar, /^cp_/) || epar == "9381" || epar == "buscape" || epar == "zoom" || epar == "102414" || epar == "4024" || epar == "baixou"){
					midia = "CP"
				}
			//Display
				else if(_satellite.textMatch(epar, /^ds_/)){
					midia = "DS"
				}
			//Email
				else if(_satellite.textMatch(epar, /^em_/)){
					midia = "EM"
				}
			//Eu vi na TV
				else if(_satellite.textMatch(epar, /^ev_/) || epar == "71461"){
					midia = "EV"
				}
			//Redes Sociais
				else if(_satellite.textMatch(epar, /^rs_/)){
					midia = "RS"
				}
			//Social Ads
				else if(_satellite.textMatch(epar, /^sa_/)){
					midia = "SA"
				}
			//Outros
				else{
					midia = "OU"
				}

	return midia;
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMCHMidia", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getMCHTimeStamp": {"customJS":function(){
try{
	var verificaData = new Date()
	dia = verificaData.getDate()
	mes = verificaData.getMonth() + 1
	ano = verificaData.getFullYear()			

	return dia + '/' + mes + '/' + ano;
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMCHTimeStamp", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getMCHTotalTime": {"customJS":function(){
try{
	//Padroniza data
		function parseDate(str) {
			var mdy = str.split('/')
			//Inverte a posição do date para o padrão brasileiro (dd/mm/aaaa/hh)
			return new Date(mdy[2], mdy[1] - 1, mdy[0]);
		}

	//Diminui o primeiro dia pelo segundo
		function daydiff(first, second) {
			//Arredonda e diminui o segundo dia pelo primeiro e multiplica por milisegundos, segundos, minutos e horas
			return (second - first) / (1000 * 60 * 60 * 24)
		}

	//Dia primeira interação
		var primeira_interacao = JSON.parse(_satellite.readCookie("wa_mc")).firstInteraction
		var ultima_interacao   = JSON.parse(_satellite.readCookie("wa_mc")).lastInteraction
		var total_time         = daydiff(parseDate(primeira_interacao), parseDate(ultima_interacao))

	return total_time.toString()
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMCHTotalTime", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getMidiaType": {"customJS":function(){
try{
	//Logica de Mídia
		var epar  = _satellite.getVar("getEpar").toLowerCase()
		var franq = _satellite.getVar("getFranq")
		var midia = ''

		//Logica Midia
			//Direto
				if(epar == ""){
					midia = "Trafego Direto"
				}
			//Afiliados
				else if(_satellite.textMatch(epar, /^af_/) || epar == "b2wafiliados" || epar == "afilio" || epar == "4ad7-0b94-6391" || epar == "34475" || epar.indexOf("_dotz") >=0 || franq || epar == "lomadee"){
					midia = "Afiliados"
				}
			//Busca Organica
				else if(_satellite.textMatch(epar, /^bo_/) || epar == "googleorganico" || epar == "bingorganico"){
					midia = "Busca Organica"
				}
			//Busca PPC
				else if(_satellite.textMatch(epar, /^bp_/) || epar == "309933" || epar == "5575" || epar == "googlegrupobranding" || epar == "googleshop" || epar == "316041" || epar == "314766" || epar == "1368" || epar == "googlepla" || epar == "33190" || epar == "112352" || epar == "112754" || epar == "G16248" || epar == "151355"){
					midia = "Busca PPC"
				}
			//Comparadores
				else if(_satellite.textMatch(epar, /^cp_/) || epar == "9381" || epar == "buscape" || epar == "zoom" || epar == "102414" || epar == "4024" || epar == "baixou"){
					midia = "Comparadores"
				}
			//Display
				else if(_satellite.textMatch(epar, /^ds_/) || _satellite.textMatch(epar, /^googledyn_/) || epar == "152712" || epar == "151933" || epar == "152690" || epar == "151946"){
					midia = "Display"
				}
			//Email
				else if(_satellite.textMatch(epar, /^em_/) || _satellite.textMatch(epar, /^email/) || _satellite.textMatch(epar, /^sfmail/)){
					midia = "Email Marketing"
				}
			//Eu vi na TV
				else if(_satellite.textMatch(epar, /^ev_/) || epar == "71461"){
					midia = "Eu vi na TV"
				}
			//Redes Sociais
				else if(_satellite.textMatch(epar, /^rs_/)){
					midia = "Redes Sociais"
				}
			//Social Ads
				else if(_satellite.textMatch(epar, /^sa_/)){
					midia = "Social Ads"
                }
            //Push
				else if(_satellite.textMatch(epar, /^ps_/)){
					midia = "Push"
				}
			//Outros
				else{
					midia = "Outros"
				}

	return midia;
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMidiaType", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getModalInteraction": {"customJS":function(){
try {

    // Aguarda evento de interação com alguma modal
        document.addEventListener("modal:open", function (e) {
            try {                                            
                // Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: DataElements - getModalInteraction");
                    console.log(e);
                }

                // Seta informações para disparo para adobe
                    var id = (typeof e.detail == 'object' && typeof e.detail.detail == "object")?e.detail.detail.id:e.detail.id
                    var omni = {
                        link_o: "Modal - " + cage_global_variable.detail.page.type + " - " + id
                    }                
                
                // Dispara para Adobe
                    WA_linkP(omni);
                    
            } catch (ex) {
                _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "getModalInteraction:Listener", ex);
            }
        });

        document.addEventListener("minigarage:modalOpen", function (e) {
            try {                                            
                // Logs
                if (_satellite.getVar("enableLog") == "true") {
                    console.log("WA: DataElements - getModalInteraction");
                    console.log(e);
                }

                // Seta informações para disparo para adobe
                var omni = {
                    link_o: "Modal - " + cage_global_variable.detail.page.type + " - " + e.detail.id                    
                }                
                
                // Dispara para Adobe
                    //WA_linkP(omni);
                    
            } catch (ex) {
                _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "getModalInteraction:Listener", ex);
            }
        });

} catch (ex) {
    _satellite.data.customVars['getJsError'] += WA_JsError("Analytics", "DataElements", "getModalInteraction", ex);
};
},"storeLength":"pageview"},
    "getMultipleSKU": {"customJS":function(){
try {
  var product = cage_global_variable.detail.product;
	var offers  = cage_global_variable.detail.offers;
	var sku     = '';
  
  // Verifica quantidade de skus e de ofertas
    if (product.skus.length > 1 && offers.length > 0) {
      sku = 'Multiplos SKUs';
    } else if (product.skus.length == 1 && offers.length > 0) {
      sku = 'SKU Unico';
    } else if (product.skus.length == 1 && offers.length == 0) {
      sku = 'Sem estoque';
    }

	return sku;
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMultipleSKU", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getMundosProduct": {"customJS":function(){
try {
    var tipo_site = "BR"
	//Verifica ofertas do produto e tipo de moeda
		if(typeof cage_global_variable.detail.offers && cage_global_variable.detail.offers.length > 0 && typeof cage_global_variable.detail.offers[0].currency == "string"){            
            if(cage_global_variable.detail.offers[0].currency != "" && cage_global_variable.detail.offers[0].currency.toLowerCase() != "brl"){
                tipo_site = "Mundo"
            }
        }
        
    return tipo_site
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMundosProduct", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getMyAccountEmail": {"customJS":function(){
try {
    //Purchase Infos
        if(typeof _satellite.data.customVars.purchase_load  == "object" && typeof _satellite.data.customVars.purchase_load.retornoApi == "object"){
            //Customer / Email infos
                if(typeof _satellite.data.customVars.purchase_load.retornoApi.customer == "object" && typeof _satellite.data.customVars.purchase_load.retornoApi.customer.email == "string"){
                    return  _satellite.data.customVars.purchase_load.retornoApi.customer.email
                }            
        }
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getMyAccountEmail", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getNMOrigem": {"customJS":function(){
try {
	//Verifica se possui o parametro
	if (typeof cage_getParam("nm_origem") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("nm_origem")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getNMOrigem", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getNumeroParcelas": {"customJS":function(){
try {
	if(typeof cage_global_variable.detail.checkout.payments[0].installmentQuantity != "undefined"){
		return cage_global_variable.detail.checkout.payments[0].installmentQuantity
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getNumeroParcelas", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getOpn": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro OPN
	if (typeof cage_getParam("opn") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("opn")
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getFranq", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getOrderBy": {"customJS":function(){
try {
	return cage_global_variable.detail.search.orderBy
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getOrderBy", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getOriginalBreadCrumb": {"customJS":function(){
try {
	var breadcrumb = ""

	//Novo
		if(typeof cage_global_variable.detail.page.breadCrumb == "object"){
			//Itera breadcrumb
				for(var i=0; i < cage_global_variable.detail.page.breadCrumb.length; i++){
					//Nao adiciona :
						if(breadcrumb == ""){
							breadcrumb += cage_global_variable.detail.page.breadCrumb[i].name
						}
					//Adiciona :
						else{
							breadcrumb += " > " + cage_global_variable.detail.page.breadCrumb[i].name
						}
				}
		}
	//Legado
		else if(typeof cage_global_variable.detail.page.dataLayer == "object"){
			breadcrumb = cage_global_variable.detail.page.dataLayer[0].objBreadCrumb
		}

	return breadcrumb
} catch (e) {
	//Informa erro do dataElement
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getBreadCrumb", e);
		} catch (e) {}
}
},"storeLength":"pageview"},
    "getPageType": {"customJS":function(){
//Inicia pageName com o nome da marca
var pageType = ""

//Inicia channel por página		
	try {
		//Path e Host
			var path = _satellite.getVar("getPathname")
			var host = _satellite.getVar("getHostName")
			var href = _satellite.getVar("getHostAndPath")

		//Verifica se a página é diferente de Outros
			if (cage_global_variable.nome_pagina != "Outros") {
				//Home
					if(cage_global_variable.nome_pagina == "Home"){
						pageType = "Home"
					}
				//Busca
					else if(cage_global_variable.nome_pagina == "Busca"){
						pageType = "Busca"
					}
				//Departamento
					else if(cage_global_variable.nome_pagina == "Departamento"){
						pageType = "Departamento"
					}
				//Linha
					else if(cage_global_variable.nome_pagina == "Linha"){
						pageType = "Linha"
					}
				//Sublinha
					else if(cage_global_variable.nome_pagina == "Sublinha"){
						pageType = "Sublinha"
					}
				//Produto
					else if(cage_global_variable.nome_pagina == "Produto"){
						pageType = "Produto"
					}	
				//Etapa garantia Estendida
					else if(cage_global_variable.nome_pagina == "GarantiaEstendida"){
						pageType += "GarantiaProduto"
					}
				//Serviços
					else if(cage_global_variable.nome_pagina == "Servicos"){
						pageType += "Servicos"
					}
				 //Finance
					else if(cage_global_variable.nome_pagina.indexOf("Finance") >= 0){
						pageType += "Finance"
					}					
				//Mais Ofertas
					else if(cage_global_variable.nome_pagina == "MaisOfertas"){
						pageType += "MarketplaceListaDeLojas"
					}	
				//Deal
					else if(cage_global_variable.nome_pagina == "Deal"){
						pageType += "Deal"
					}
				//WebStore
					else if(cage_global_variable.nome_pagina == "WebStore"){
						pageType += "MarketplaceLojistas"
					}
				//StoreIn Store
					else if(cage_global_variable.nome_pagina == "StoreInStore"){
						pageType += "StoreInStore"
					}
				//Artista
					else if(cage_global_variable.nome_pagina == "Artista"){
						pageType += "Artista"
					}
				//Sacola
					else if(cage_global_variable.nome_pagina == "Sacola"){
						pageType += "Carrinho"
					}
				//Pagamento
					else if(cage_global_variable.nome_pagina == "Pagamento"){
						pageType += "Checkout"
					}
				//Pagamento 1-Click
					else if(cage_global_variable.nome_pagina == "Pagamento-1Click"){
						pageType += "Checkout"
					}
				//Obrigado
					else if(cage_global_variable.nome_pagina == "Obrigado"){
						pageType += "Checkout"
					}
				//Obrigado 1-Click
					else if(cage_global_variable.nome_pagina == "Obrigado-1Click"){
						pageType += "Checkout"
					}
				//Alterar Endereço
					else if(cage_global_variable.nome_pagina == "AlterarEndereco"){
						pageType += "Checkout"
					}
				//Cliente / Cadastro
					else if(cage_global_variable.nome_pagina.indexOf("Cliente:") >=0){
						pageType += "Cliente"
					}
				//Minha Conta
					else if(cage_global_variable.nome_pagina.indexOf("MinhaConta:") >=0){
						pageType += "PainelDeControle"
					}
				//Minhas Vendas
					else if(cage_global_variable.nome_pagina.indexOf("MinhasVendas:") >=0){
						pageType += "MinhasVendas"
					}
				//Hotsite
					else if(cage_global_variable.nome_pagina == "Hotsite"){
						pageType += "Hotsite"
					}
				//Marca
					else if(cage_global_variable.nome_pagina == "Marca"){
						pageType += "Marca"
					}
				//Mapa
					else if(cage_global_variable.nome_pagina == "SiteMap"){
						pageType += "MapaDoSite"
					}
				//OfertasDaTV
					else if(cage_global_variable.nome_pagina == "OfertasDaTV"){
						pageType += "OfertasDaTV"
					}
				//Review de produto
					else if(cage_global_variable.nome_pagina == "ReviewProduto"){
						pageType += "ReviewProduto"
					}
				//Garagem
					else if(cage_global_variable.nome_pagina == "Garagem"){
						pageType += "Garagem"
					}
				//Outros
					else{				
						pageType = "Outros"
					}
			}

		//Regras por Host e Path
			else {				
				//BlackFriday
					if((path.indexOf("/landingpage/bf-") >=0) || (path.indexOf("/hotsite/melhoresofertas") >=0) || (path.indexOf("/landingpage/") >=0 && path.indexOf("ate") >=0) || (path.indexOf("/hotsite/blackfriday/ate") >=0) || (path.indexOf("/landingpage/primebf") >=0)){
						pageType = "BlackFriday"
					}	

				//Outros
					else{
						pageType = "Outros"
					}
			}

		//Retorna o nome da página no dataElement
			return pageType;

	} catch (e) {
		//Informa erro do dataElement
			try {
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPageType", e);
			} catch (e) {}
		
		//Tipo de Pag de erro
			pageType = "Outros"
		//Retorna o nome da página no dataElement
			return pageType;
	}
},"storeLength":"pageview"},
    "getPartnersInfos": {"customJS":function(){
try{
	var partnerInfos = ""

	if(typeof cage_global_variable.detail.offers == "object" && cage_global_variable.detail.offers.length > 0){
		for(var i=0; i < cage_global_variable.detail.offers.length; i++){
			var partnerName  = cage_global_variable.detail.offers[i]._embedded.seller.name
			var position     = i + 1
			var preco_seller = cage_global_variable.detail.offers[i].salesPrice
			var priceShare   = ((preco_seller / _satellite.getVar("getProductValue")) * 100).toFixed(2) + "%"

			
			//Trata nome das marcas b2w
				if(partnerName == "B2W"){
					partnerName = _satellite.getVar("getMarketplaceBrand")
				}
		
			partnerInfos += partnerName + "|" + position + "|" + priceShare + "|" + preco_seller + ","
		}

		//Remove Virgula
			partnerInfos = partnerInfos.substring(0, (partnerInfos.length - 1));
	}	

	//Retorna dataElement
		return partnerInfos
}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPartnersInfos", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getPathAndParams": {"customJS":function(){
try{
    var protocol_host = window.top.location.protocol + "//" + window.top.location.hostname
    var url = window.top.location.href;

    return url.replace(protocol_host, "")
}catch(e){
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPathAndParams", e);
}
},"storeLength":"pageview"},
    "getPathname": {"customJS":function(){
try{
  	return window.top.location.pathname
}catch(e){
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPathname", e);
}
},"storeLength":"pageview"},
    "getPaymentConditionsList": {"customJS":function(){
try {
    var paymentCondition = cage_global_variable.detail.offers[0].paymentOptions,
        lista = ""

    //função para pegar a ultima parcela sem juros e com juros
    function pegaUltimaParcela(parcelas){

        var primeiraEultima = [],
            parcelaSemJuros = []

        //Percorre as parcelas e insere em um array somente as que não tem juros
        for(var item in parcelas){

			if(parcelas[item].annualCET == 0){

                parcelaSemJuros.push(parcelas[item].quantity)
			}
        }
        
        //pega a ultima parcela sem juros
        var lastNoTax = parcelaSemJuros.sort(function(a,b){return b-a})
        primeiraEultima.push(lastNoTax[0])
        
        //pega a ultima parcela
        primeiraEultima.push(parcelas[parcelas.length - 1].quantity)       

        return primeiraEultima
    }

    //Percorre as condições de pagamento
    for(var item in paymentCondition){

        //Pega Boleto
        if(item == "BOLETO"){
            lista += item + "|" + paymentCondition[item].discount.rate + "||,"
        }
        //Pega AME
        else if(item == "BPAY"){
            lista += "AME|" + paymentCondition[item].cashback.rate + "|" + paymentCondition[item].installments.length +"|,"
        }
        //Pega Cartão
        else if(item.indexOf("CARTAO_") >= 0 && item != "CARTAO_PRE_APROVADO"){

            lista += item + "|" + paymentCondition[item].installments[0].discount.rate + "|" + pegaUltimaParcela(paymentCondition[item].installments)[0] + "|" + pegaUltimaParcela(paymentCondition[item].installments)[1] + ","
        }      
    }

    //Tira a virgula do final
    if(lista[lista.length - 1] == ","){
        lista = lista.substring(0, (lista.length - 1))
    }

    s_wa.prop27 = lista   

} catch (ex) {
	try {
		//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "getPaymentConditionsList", ex);
	} catch (ex) { }
}
},"storeLength":"pageview"},
    "getPaymentMethod": {"customJS":function(){
try{
	return cage_global_variable.detail.checkout.payments[0].paymentOptionId
}catch(e){
  try{
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPaymentMethod", e);
  }
  catch(e){}
}
},"storeLength":"pageview"},
    "getPaymentOptionInstallments": {"customJS":function(){
try{    
    //Itera todos os meios de pagamento para verificar as condições
        var options          = (typeof cage_global_variable.detail.mainOffer == "object" && cage_global_variable.detail.mainOffer != null)?cage_global_variable.detail.mainOffer.paymentOptions:""
        var parcelamento     = ""
        var eventos_boleto   = ""
        var eventos_cartao   = ""
        var eventos_finance  = ""
        var boleto_max_parc  = boleto_max_parc_s_juros  = boleto_desc_1x  = "" 
        var finance_max_parc = finance_max_parc_s_juros = finance_desc_1x = ""
        var cartao_max_parc  = cartao_max_parc_s_juros  = cartao_desc_1x  = ""
        var boleto_eVar = cartao_eVar = finance_eVar = ""

        if(options != ""){
            //Métricas parcelamento por meio de pagamento
                for(var property in options){	
                    if (options.hasOwnProperty(property)){
                        var meio = property.replace("CARTAO_", "")
                                .replace("VISA", "CARTAO")
                                .replace("MASTERCARD", "CARTAO")
                                .replace("ACOM_CARTAO", "CARTAO_FINANCE")
                                .replace("SUBA_CARTAO", "CARTAO_FINANCE")
                                .replace("SHOP_CARTAO", "CARTAO_FINANCE")
                        
                        //Não inclui cartão pre-aprovado na logica
                            if(meio != "PRE_APROVADO"){
                                var max_parc    = (typeof options[property].installments == "object")?options[property].installments.length:0
                                var max_s_juros = 0
                                    //Verifica cenários com parcela = 0 (boleto por ex)
                                        if(max_parc != 0){
                                            for(var i=0; i < options[property].installments.length; i++){
                                                //Verifica se o objeto de taxa de juros não está definido para adicionar na variável de parcela sem juros
                                                    if(typeof options[property].installments[i].taxedInterestRate == "undefined" || options[property].installments[i].taxedInterestRate == 0){
                                                        max_s_juros++;
                                                    }
                                            }
                                        }
                                
                                
                                //Desconto Condicional
                                    var desconto_rate_1x = ""
                                    if(meio == "BOLETO"){
                                        desconto_rate_1x = (typeof options[property].discount == "object")?options[property].discount.rate:0
                                    }
                                    else{
                                        desconto_rate_1x = (typeof options[property].installments == "object" && options[property].installments.length > 0 && typeof options[property].installments[0].discount == "object")?options[property].installments[0].discount.rate:0
                                    }

                                    desconto_rate_1x = (desconto_rate_1x / 100).toFixed(2)
                                
                                //Apenas inclui meio de pgto caso exista algum desconto (ou seja, meio de pgto foi exibido em destaque na pag de produto) -  Finance sempre aparece para o cliente
                                    if((desconto_rate_1x != "" && desconto_rate_1x != "0.00") || meio == "CARTAO_FINANCE"){
                                        //Metricas numericas para calculo de taxas e médias
                                            if(meio == "CARTAO"){
                                                eventos_cartao = "event138=" + max_parc + ",event139=" + max_s_juros + ",event140=" + desconto_rate_1x
                                            }
                                            else if(meio == "BOLETO"){                                    
                                                eventos_boleto = "event141=" + desconto_rate_1x
                                            }
                                            else if(meio == "CARTAO_FINANCE"){
                                                eventos_finance = "event142=" + max_parc + ",event143=" + max_s_juros + ",event144=" + desconto_rate_1x
                                            }
                                        
                                        //Verifica "vez" ou "vezes"
                                            if(max_parc > 1){max_parc = max_parc + " vezes"}
                                            else{max_parc = "1 vez" }
                                            if(max_s_juros > 1){max_s_juros = max_s_juros + " vezes"}
                                            else{max_s_juros = "1 vez" }                                                                            

                                        //Infos de parcelamento                                        
                                            parcelamento += meio + "|" + max_parc + "|" + max_s_juros + "|" + desconto_rate_1x.replace("0.", "") + "%" + ","
                                        
                                        //Logica separada de infos por meio de pagamento para inclusão na eVar
                                            if(meio == "CARTAO"){
                                                cartao_max_parc = max_parc
                                                cartao_max_parc_s_juros = max_s_juros
                                                cartao_desc_1x = desconto_rate_1x.replace("0.", "") + "%"
                                            }
                                            else if(meio == "BOLETO"){
                                                boleto_max_parc = max_parc
                                                boleto_max_parc_s_juros = max_s_juros
                                                boleto_desc_1x = desconto_rate_1x.replace("0.", "") + "%"
                                            }
                                            else if(meio == "CARTAO_FINANCE"){
                                                finance_max_parc = max_parc
                                                finance_max_parc_s_juros = max_s_juros
                                                finance_desc_1x = desconto_rate_1x.replace("0.", "") + "%"
                                            }
                                            
                                    }
                            }
                    }
                }

            //Remove virgula
                parcelamento = parcelamento.substring(0, (parcelamento.length - 1));

            //Prop de lista para parcelamentos
                s_wa.prop24 = parcelamento
            
            //Logica para inclusao na eVar - Verifica se um dos campos do meio foi preenchido para incluir ou n na eVar
                boleto_eVar  = (boleto_max_parc != "")?"BOLETO|" + boleto_max_parc + "|" + boleto_max_parc_s_juros + "|" + boleto_desc_1x :"|||"
                cartao_eVar  = (cartao_max_parc != "")?"CARTAO|" + cartao_max_parc + "|" + cartao_max_parc_s_juros + "|" + cartao_desc_1x :"|||"
                finance_eVar = (finance_max_parc != "")?"CARTAO_FINANCE|" + finance_max_parc + "|" + finance_max_parc_s_juros + "|" + finance_desc_1x:"|||"

                s_wa.eVar145 = finance_eVar + "," + boleto_eVar + "," + cartao_eVar

            //Trata eventos
                eventos_cartao = (eventos_cartao != "")?eventos_cartao + ",":""
                eventos_boleto = (eventos_boleto != "")?eventos_boleto + ",":""

            //Eventos
                if (s_wa.events != undefined && s_wa.events != "") {
                    s_wa.events += "," + eventos_cartao + eventos_boleto + eventos_finance
                }
                //Adiciona mais um evento no objeto s_wa.events
                else {
                    s_wa.events = eventos_cartao + eventos_boleto + eventos_finance
                }
        }
}catch(e){
    try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPaymentOptionInstallments", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getPaymentOptionList": {"customJS":function(){
try{    
    if(typeof cage_global_variable.detail.paymentOptions == "object" && cage_global_variable.detail.paymentOptions.length > 0){
        var payment_options_list = ""
        
        for(var i = 0; i < cage_global_variable.detail.paymentOptions.length; i++){
            payment_options_list += cage_global_variable.detail.paymentOptions[i] + ","
        }

        payment_options_list = payment_options_list.substring(0, (payment_options_list.length - 1));
        
        return payment_options_list       
    }

}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPaymentOptionList", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getPFMv2Click": {"customJS":function(){
try{
	//Estrutura
        //Mecanismo | Sub Mecanismo | Fornecedor | Regra | Pagina do Click | Posição do item | Posição do Componente
    
    //Parametros
        var pfm_v2 = ''
        var epar   = (typeof cage_getParam("epar") == "string")?cage_getParam("epar"):""
        var pfm_param_type  = (typeof cage_getParam("pfm_type") == "string")?cage_getParam("pfm_type"):''
        var pfm_param_regra = (typeof cage_getParam("pfm_carac") == "string")?cage_getParam("pfm_carac"):''        
            if(pfm_param_type.indexOf("search") >=0 || pfm_param_regra == "Nome da area"){ pfm_param_regra  = "" }
            
        var dcsext_recom    = (typeof cage_getParam("DCSext.recom") == "string")?cage_getParam("DCSext.recom"):''
        var old_origem      = (typeof cage_getParam("nm_origem") == "string")?cage_getParam("nm_origem"):''
        var old_posicao     = (typeof cage_getParam("nm_ranking_rec") == "string")?cage_getParam("nm_ranking_rec"):''
        var pfm_cart_type   = (typeof cage_getParam("type") == "string")?cage_getParam("type"):''
        var pfm_cart_source = (typeof cage_getParam("sourcePage") == "string")?cage_getParam("sourcePage"):''

        //Busca Autosuggest
            var autosuggest = (typeof cage_getParam("autosuggest") == "string")?cage_getParam("autosuggest"):''
        //Ads Seller
            var seller_name = (typeof cage_getParam("sellerName") == "string")?cage_getParam("sellerName"):''

    //Ferramenta do PFM
        var pfm_ferramenta = ''
            if(pfm_param_type == "vit_spacey"){pfm_ferramenta = "Spacey"}
            else if(pfm_param_type == "vit_product_grid"){pfm_ferramenta = "Discovery"}
            else if(dcsext_recom.indexOf("b2wAds") >=0 || dcsext_recom.indexOf(".ads") >=0){pfm_ferramenta = "B2W Ads"}
            else if(dcsext_recom.indexOf("hooklogics") >=0){pfm_ferramenta = "Hooklogics"}
            else if(dcsext_recom.indexOf("percycleads") >=0){pfm_ferramenta = "Percycle"}
            else if(dcsext_recom.indexOf("RR_") >=0){pfm_ferramenta = "Rich Relevance"}
            else if(pfm_param_type.indexOf("search") >=0 || autosuggest == "true"){pfm_ferramenta = "Nanook"}
    
    //Tipo PFM
        var pfm_tipo = ''
            if(pfm_param_type.indexOf("search_page") >=0){pfm_tipo = "Resultados da Busca"}

            else if(autosuggest == "true"){pfm_tipo = "Auto Suggest"}

            else if((pfm_param_type == "vit_recommendation" && pfm_param_regra == "Publicidade") || pfm_ferramenta == 'B2W Ads' || pfm_ferramenta == 'Hooklogics' || pfm_ferramenta == 'Percycle'){pfm_tipo = "Recomendação com ads"}

            else if(pfm_param_type == "vit_recommendation" || pfm_ferramenta == 'Rich Relevance'){pfm_tipo = "Recomendação sem ads"}

            else if(pfm_param_type == "vit_spacey"){pfm_tipo = "Lista Curada"} //spacey

            else if(pfm_param_type == "vit_product_grid"){pfm_tipo = "Lista Automática"} //discovery
    
    //Método PFM
        var pfm_metodo = ''
            if(pfm_param_type.indexOf("search") >=0 || autosuggest == "true"){
                pfm_metodo = "Mecanismo de Busca"
            }
            else if(pfm_param_type.indexOf("vit") >=0 || pfm_tipo.indexOf("Recom") >=0){
                pfm_metodo = "Mecanismo Vitrine"
            }

	//Regra PFM
        var pfm_regra = pfm_param_regra
            //Utilizar parametros legados para RichRelevance
                if(pfm_ferramenta == "Rich Relevance" && old_origem != ""){
                    if(old_origem.indexOf("-") >=0){pfm_regra = old_origem.split("-")[1]}
                    else if(old_origem.indexOf("_") >=0){pfm_regra = old_origem.split("-")[1]}

                    pfm_regra = pfm_regra.replace("rec_carrinho_", "")
                }
            
            //Regra Ads
                if(pfm_ferramenta == "B2W Ads" && seller_name != ""){
                    pfm_regra = seller_name
                }
                else if(pfm_ferramenta == "B2W Ads"){
                    pfm_regra = "Publicidade"
                }
            
            //Remove regra lista automatica
                if(pfm_tipo == "Lista Automática"){
                    pfm_regra = ""
                }

    //Pagina de origem PFM
        var pfm_paginaOrigem = (typeof cage_getParam("pfm_page") == "string")?cage_getParam("pfm_page"):''
            //Utilizar parametros legados para RichRelevance
                if(pfm_ferramenta == "Rich Relevance" && old_origem.indexOf("_") >=0 && pfm_paginaOrigem != "my-account"){
                    pfm_paginaOrigem = old_origem.split("_")[1]
                }
            //Ads via Recomendação
                else if(pfm_ferramenta == "B2W Ads" && old_origem.indexOf("_page") >=0){
                    pfm_paginaOrigem = old_origem.split("_")[1]
                }
            
            //Verifica Deal e demais paginas
                var referrer = _satellite.getVar("getReferrer")
                if(typeof referrer == "string" && referrer !="" && (referrer.indexOf("/oferta-do-dia") >=0 || referrer.indexOf("/barato-dia") >=0)){
                    pfm_paginaOrigem = "offer";
                    pfm_regra        = "Oferta do Dia"
                }
                else if(pfm_paginaOrigem  == "" && referrer.indexOf("/produto/") >=0){pfm_paginaOrigem = "item";}
                else if(pfm_paginaOrigem  == "" && referrer.indexOf("/categoria/") >=0){pfm_paginaOrigem = "category";}
                else if(pfm_paginaOrigem  == "" && referrer.indexOf("/busca/") >=0){pfm_paginaOrigem = "category";}
                else if(referrer.indexOf("/lojista/") >=0){pfm_paginaOrigem = "seller";}
            
            //Verifica Ads Produto
                var context = (typeof cage_getParam("context") == "string")?cage_getParam("context"):''
                if(pfm_paginaOrigem == "" && context == "product" && pfm_ferramenta == "B2W Ads"){
                    pfm_paginaOrigem = "item"
                }

        //DE-Para
            switch(pfm_paginaOrigem) {
                case "search":
                    pfm_paginaOrigem = "Busca";
                    break;
                case "item":
                    pfm_paginaOrigem = "Produto";
                    break;
                case "category":
                case "department":
                    pfm_paginaOrigem = "Categoria";
                    break;
                case "home":
                    pfm_paginaOrigem = "Home";
                    break;
                case "hotsite":
                    pfm_paginaOrigem = "Hotsite";
                    break;
                case "offer":
                    pfm_paginaOrigem = "Deal";
                    break;
                case "seller":
                    pfm_paginaOrigem = "Lojista";
                    break;
                case "generic":
                    pfm_paginaOrigem = "Generica";
                    break;
                case "brand":
                    pfm_paginaOrigem = "Marca";
                    break;
                case "my-account":
                    pfm_paginaOrigem = "MinhaConta";
                    break;
                case "error":
                    pfm_paginaOrigem = "Error";
            };

    //Posição PFM
        var pfm_posicao = (typeof cage_getParam("pfm_index") == "string")?cage_getParam("pfm_index"):''
            if(pfm_posicao != ""){
                pfm_posicao = parseFloat(pfm_posicao) + 1
            }

            //Utilizar parametros legados para RichRelevance
                if(pfm_posicao == "" && old_posicao != ""){
                    pfm_posicao = old_posicao
                }                        
        
    //Placement PFM
        var pfm_placement = (typeof cage_getParam("pfm_pos") == "string")?cage_getParam("pfm_pos"):''
        if(pfm_placement == "" && dcsext_recom != ''){
            pfm_placement = (dcsext_recom.indexOf("RR_") >=0 && dcsext_recom.indexOf("-") >=0)?dcsext_recom.split("RR_")[1].split("-")[0]:''
        }

        if(pfm_placement == "" && autosuggest == "true"){
            pfm_placement = "header"
        }

        if(pfm_ferramenta == "B2W Ads"){
            pfm_placement = "b2wAds"
        }

        if(pfm_placement.indexOf(".") >=0){
            pfm_placement = pfm_placement.split(".")[1]
        }

        //Ajuste minha conta
            if(pfm_placement.indexOf("_") >=0){
                pfm_placement = pfm_placement.split("_")[1]
            }
    
	//Retorno
        pfm_v2 = pfm_metodo + "|" + pfm_tipo + "|" + pfm_ferramenta + "|" + pfm_regra + "|" + pfm_paginaOrigem + "|" + pfm_posicao + "|" + pfm_placement;
       
        //Se tem EPar na URL, é mecanismo externo

        //Comparador de produto (Automotivo) pagina de produto
        if(pfm_regra == "" && pfm_tipo == "" && pfm_param_type == "comparador"){
            var pos=  (typeof cage_getParam("pfm_index") == "string")?cage_getParam("pfm_index"):""
            pos = parseFloat(pos) + 1
            pfm_v2 = 'Mecanismo Vitrine|ComparadorDePrecos|Rich Relevance|-|item|'+ pos + '|'
        }
        
        //Regras padrões
            else if(pfm_v2 != '||||||' && epar == ""){
                pfm_v2 = pfm_v2;
            }
        //Recomendação Sacola - Fora do Padrão
            else if(pfm_cart_type.indexOf("cart_page.rr") >=0 && pfm_cart_source != '' && epar == ""){
                var position = (typeof cage_getParam("position") == "string")?parseFloat(cage_getParam("position")) + 1:'1'
                pfm_v2 = 'Mecanismo Vitrine|Recomendação sem ads|Rich Relevance|BoughtTogether|Carrinho|' + position + '|'
            }
        
        //Recomendação Email
            else if(epar != "" && epar.indexOf("em_") >=0 && pfm_regra != ""){
                pfm_v2 = "Mecanismo Externo|Recomendação Email MKT|Rich Relevance|" + pfm_regra + "|" + "Email MKT" + "|" + pfm_posicao + "|" + pfm_placement;
            }

        //Entry page Produto
            else{
                pfm_v2 = 'Mecanismo Externo|Mecanismo Externo|||Link Externo||'
            }

        return pfm_v2;
        
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPFMv2Click", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getPFMv2ViewAds": {"customJS":function(){
try{
	var algoritmo = cage_global_variable_components.ads, ads = fornecedor = placement = ''

	//Verifica percycle ou b2wads
		if(algoritmo.hasOwnProperty("source")){
			if(algoritmo.source.toLowerCase() == "b2wads"){
				fornecedor = "B2W Ads"
			}
			else{
				fornecedor = "Percycle"
			}
			ads = algoritmo
			placement  = 'b2wAds'
		}
		
	if(typeof ads == "object"){

		var listads = list1 = context = "";

		if(ads.shelves.length > 0){
			if(!ads.hasOwnProperty("source")){
				if(ads.shelves[0].products[0].hasOwnProperty("querystring")){
					context = (ads.shelves[0].products[0].querystring.indexOf("context") >= 0 &&
							  ads.shelves[0].products[0].querystring.indexOf("&") >= 0) ?
							  ads.shelves[0].products[0].querystring.split("&")[0].split("context=")[1] : ''
				}
			}
			else{
				for(var i = 0; i < ads.shelves.length; i++){

					if(ads.shelves[i].products.length > 0){
		
						pfm = ads.shelves[i].products[0].pfm;
						params = ads.shelves[i].products[0].params;
					}
				}
			}
		}		
		
		if(context == ""){
			//Produto
				if(typeof ads.pfm && typeof pfm.pfm_page == "string"){
						
					context = pfm.pfm_page
				}			
			//Zion	
				else if(params.context != ""){
					
					context = params.context
				}
		}

		//Página
			//Retorno no context
				if(context != ""){
					//Busca
						if(context == "search"){
							pagina_ads = "Busca"
						}
					//Home
						else if(context == "home"){
							pagina_ads = "Home"
						}
					//Produto
						else if(context == "product"){
							pagina_ads = "Produto"
						}
					//Categoria
						else if(context == "category" || context == 'department'){
							pagina_ads = "Categoria"
						}
					//Deal
						else if(_satellite.getVar("getPathname").indexOf("oferta-do-dia") >=0){
							pagina_pfm = "Deal"
						}
					//Hotsite
						else if(_satellite.getVar("getPathname").indexOf("estaticapop") >=0 || _satellite.getVar("getPathname").indexOf("hotsite") >=0 || _satellite.getVar("getPathname").indexOf("landingpage") >=0){
							pagina_pfm = "Hotsite"																	
						}
					//Outros
						else{
							pagina_ads = "Outros"
						}
				}
			//Deal
				else if(_satellite.getVar("getPathname").indexOf("oferta-do-dia") >=0){
					pagina_pfm = "Deal"
				}
			//Hotsite
				else if(_satellite.getVar("getPathname").indexOf("estaticapop") >=0 || _satellite.getVar("getPathname").indexOf("hotsite") >=0 || _satellite.getVar("getPathname").indexOf("landingpage") >=0){
					pagina_pfm = "Hotsite"																	
				}
			//Outros
				else{
					pagina_ads = "Outros"
				}


			//Loop para recebimento de todos os produtos			
			var qtd_shelves = ads.shelves.length				

			for(var i = 0; i < qtd_shelves; i++){

				var products = ads.shelves[i].products

				if(products.length > 0){
					for(var x = 0; x < products.length; x++){

						var itera_prods = x + 1
						var nome_seller = ""

						if(products[x].hasOwnProperty("params")){
							nome_seller = products[x].params.sellerName 
						}
						else{

							queryString = decodeURI(products[x].querystring)

							if(queryString != ""){
								// Find url param.
									var params = queryString.split('&');
									for (var j = 0; j < params.length; j++) {
										if(params[j].indexOf("sellerName=") >=0){
											nome_seller = params[j].split("=")[1]
										}
									}
							}
						}
						
						var regra = (nome_seller != "") ? nome_seller : 'Publicidade'
					
						//Tipo de PFM | Nome da pagina | Nome da Rec | Numero do item
							if(listads == undefined || listads == ""){
								listads = "Mecanismo Vitrine|Recomendação com ads|" + fornecedor + "|" + regra + "|" + pagina_ads + "|" + itera_prods + "|" + placement + ",";	
							}
							else{
								listads += "Mecanismo Vitrine|Recomendação com ads|" + fornecedor + "|" + regra + "|" + pagina_ads + "|" + itera_prods + "|" + placement + ",";	
							}
					}
				}
			}
													
			//Retira vírgula e adiciona list1
				if(listads !=''){
					//Retira vírgula do final
					list1 += listads.substring(0,(listads.length - 1)) 
				}										
	}
	return list1;
}catch(ex){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPFMv2ViewAds", ex);
	}
	catch(ex){}
}
},"storeLength":"pageview"},
    "getPFMv2ViewListaCurada": {"customJS":function(){
try{
	if(_satellite.data.customVars.components_sec.publications == "false" && typeof cage_global_variable.detail.publications == "object"){
        var obj_publications = cage_global_variable.detail.publications
        var listacurada      = ""
        var pagina           = cage_global_variable.nome_pagina
            //Arruma nomenclatura das paginas
                switch(pagina) {
                    case "Departamento":
                    case "Linha":
                    case "Sublinha":
                        pagina = "Categoria";
                        break;
                };

        //Itera publicações
            for (var property in obj_publications) {                
                var placement = obj_publications[property].position

                //Valida objeto publicação
                    if (obj_publications.hasOwnProperty(property) && typeof obj_publications[property] == "object"){                        
                        //Valida publicação de produto (existem outros tipos como por ex banner)
                            if(typeof obj_publications[property].component == "object" && typeof obj_publications[property].component.children == "object" && obj_publications[property].component.children.length > 0){
                                //Itera itens da publicação para selecionar apenas produtos
                                    for(var i=0; i < obj_publications[property].component.children.length; i++){                                        
                                        var posicao = i + 1
                                        if(obj_publications[property].component.children[i].type == "zion-product"){
                                            listacurada += "Mecanismo Vitrine|Lista Curada|Spacey||" + pagina + "|" + posicao + "|" + placement + ","
                                        }
                                        else if(typeof obj_publications[property].component.children[i].linkUrl == "string" && obj_publications[property].component.children[i].linkUrl.indexOf("/produto/") >=0){
                                            listacurada += "Mecanismo Vitrine|Lista Curada|Spacey||" + pagina + "|" + posicao + "|" + placement + ","
                                        }
                                    }
                            }
                    }	
            }
        
        //Retira vírgula e adiciona list1
            if(listacurada !=''){
                //Retira vírgula do final
                listacurada = listacurada.substring(0,(listacurada.length - 1)) 
            }

        //Infoma que publicações estão OK
            _satellite.data.customVars.components_sec.publications = "true"

        //Retorna lista
            return listacurada
    }
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPFMv2ViewListaCurada", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getPFMv2ViewListaCuradaGA": {"customJS":function(){
try {
    if (typeof cage_global_variable.detail.publications == "object") {
        var obj_publications = cage_global_variable.detail.publications
        var pagina = cage_global_variable.nome_pagina
        //Arruma nomenclatura das paginas
        switch (pagina) {
            case "Departamento":
            case "Linha":
            case "Sublinha":
                pagina = "Categoria";
                break;
        };

        //Itera publicações
        for (var property in obj_publications) {
            var placement = obj_publications[property].position

            //Valida objeto publicação
            if (obj_publications.hasOwnProperty(property) && typeof obj_publications[property] == "object") {
                //Valida publicação de produto (existem outros tipos como por ex banner)
                if (typeof obj_publications[property].component == "object" && typeof obj_publications[property].component.children == "object" && obj_publications[property].component.children.length > 0) {
                    //Itera itens da publicação para selecionar apenas produtos
                    for (var i = 0; i < obj_publications[property].component.children.length; i++) {
                        var posicao = i + 1
                        if (obj_publications[property].component.children[i].type == "zion-product" && obj_publications[property].component.children[i].productI != 'undefined') {
                            // Adiciona itens na lista de impressão
                            ga('ec:addImpression', {
                                'id': obj_publications[property].component.children[i].productId,
                                'list': 'Lista Curada',
                                'position': posicao,
                                'dimension6': pagina,
                                'dimension7': '-'
                            });
                        }
                    }
                }
            }
        }
    }
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "getPFMv2ViewListaCuradaGA", e);
    }
    catch (e) { }
}
},"storeLength":"pageview"},
    "getPFMv2ViewRec": {"customJS":function(){
try{	
	if(typeof cage_global_variable_components.recomendacao == "object" && cage_global_variable_components.recomendacao.length > 0){
		var listrecom  = "";	
        var list3      = "";
        var obj_rec    = cage_global_variable_components.recomendacao

		//Catalogo
			if(cage_global_variable_components.recomendacao_env == "Catalog"){
                var pagina_pfm = ''
                
                //Busca
                    if(obj_rec[0].type.indexOf("search") >=0){
                        pagina_pfm = "Busca"
                    }
                //Home
                    else if(obj_rec[0].type.indexOf("home") >=0){
                        pagina_pfm = "Home"
                    }
                //Produto
                    else if(obj_rec[0].type.indexOf("item") >=0){
                        pagina_pfm = "Produto"
                    }
                //Categoria
                    else if(obj_rec[0].type.indexOf("category") >=0 && _satellite.getVar("getPathname").indexOf("/lojista/") == -1){
                        pagina_pfm = "Categoria"
					}
				//Deal
					else if(_satellite.getVar("getPathname").indexOf("oferta-do-dia") >=0){
						pagina_pfm = "Deal"
					}
				//Hotsite
					else if(_satellite.getVar("getPathname").indexOf("estaticapop") >=0 || _satellite.getVar("getPathname").indexOf("hotsite") >=0 || _satellite.getVar("getPathname").indexOf("landingpage") >=0){
						pagina_pfm = "Hotsite"																	
					}
				//Lojista
					else if(_satellite.getVar("getPathname").indexOf("/lojista/") >=0){
						pagina_pfm = "Lojista"
					}
				//Minha Conta
					else if(_satellite.getVar("getHostName").includes("my-account") || _satellite.getVar("getHostName").includes("minhaconta")){
						pagina_pfm = "MinhaConta"
					}
                //Outros
                    else{
                        pagina_pfm = "Outros"
                    }
												
				//Itera recomendações
					var qtd_recs = cage_global_variable_components.recomendacao.length
					
					//Loop para recebimento de todas as recomendações
						for(var i = 0; i < qtd_recs; i++){ 																
							//Verifica se é o DataLayer da orfertas da tv (tem um padrão diferente)
								var tipo_recom = "Recomendacao"
								var nome 	   = cage_global_variable_components.recomendacao[i]['rule']
								//Retira nome da pagina
								if((nome.indexOf("_rr") >=0 || nome.indexOf(".rr") >=0) && nome.indexOf("-") >=0){
									nome = nome.split("-")[1]
								}

								//Posicao da vitrine na pagina
									var type = cage_global_variable_components.recomendacao[i].type
									var pos_vitrine = ""
									//Vitrines na pagina
										if(typeof type == "string" && type != "" && (type.indexOf(".rr") >=0 || type.indexOf(".banners") >=0)){
											pos_vitrine = type.split(".")[1]
										}
									//Vitrines na pagina (minha conta)
										else if(typeof type == "string" && type != "" && type.includes("minhaconta_rr")){
											pos_vitrine = type.split("_")[2]
										}	
									
									//Vitrine de Ads fica Recomendação
										else if(typeof type == "string" && type != "" && type.indexOf(".ads") >=0){
											pos_vitrine = "B2W-Ads"
										}
									//Vitrines em banners
										else{
											pos_vitrine = "-"
										}

									//Tratamento history
										if(pos_vitrine == "-" && cage_global_variable_components.recomendacao[i]['type'].indexOf("history") >=0){
											pos_vitrine = "rrHistory"
										}

							//Itera quantidade de produtos se a quantidade
								for(var j = 0; j < cage_global_variable_components.recomendacao[i].products.length; j++){ //Loop para recebimento de todos os produtos
									var itera_prods = j + 1
										
									//Tipo de PFM | Nome da pagina | Nome da Rec | Numero do item
										if(pos_vitrine != "B2W-Ads"){                                 
											listrecom += "Mecanismo Vitrine|Recomendação sem ads|Rich Relevance|" + nome + "|" + pagina_pfm + "|" + itera_prods + '|' + pos_vitrine + ','
										}
									//Vitrine de Ads fica Recomendação
										else{
											listrecom += "Mecanismo Vitrine|Recomendação com ads|B2W-Ads|" + nome + "|" + pagina_pfm + "|" + itera_prods + "|" + pos_vitrine + ",";
										}
								}
						}
															
					//Retira vírgula e adiciona list3
						if(listrecom !=''){
							//Retira vírgula do final
							list3 = listrecom.substring(0,(listrecom.length - 1)) 
						}
			}

		//CART
			else if(cage_global_variable_components.recomendacao_env == "Cart"){
				//Itera placements
					for(var i = 0; i < cage_global_variable_components.recomendacao.length; i++){
						//Itera itens
							for(var j = 0; j < cage_global_variable_components.recomendacao[i].recommendedProducts.length; j++){
								var position       = j + 1
								var placement 	   = i + 1
								var placement_name = (cage_global_variable_components.recomendacao[i].placement.indexOf("combo_vip") >=0)?"ComboVIP":"BoughtTogether"

								//Tipo de PFM | Nome da pagina | Nome da Rec | Numero do item
                                    listrecom += "Mecanismo Vitrine|Recomendação sem ads|Rich Relevance|" + placement_name + "|Carrinho|" + position + '|' + placement + ','
							}
					}

				//Retira vírgula e adiciona list3
					if(listrecom !=''){
						//Retira vírgula do final
						list3 = listrecom.substring(0,(listrecom.length - 1)) 
					}
			}
	}
	return list3;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPFMv2ViewRec", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getPFMv2ViewSearchGrid": {"customJS":function(){
try{
	if(_satellite.data.customVars.components_sec.search_grid == "false" && typeof cage_global_variable.detail.search == "object" && typeof cage_global_variable.detail.search.products == "object" && cage_global_variable.detail.search.products.length > 0){
        var search_grid = ''
        var obj_search  = cage_global_variable.detail.search
        var pagina      = cage_global_variable.nome_pagina
        var regra       = ""

        //Arruma nomenclatura das paginas
            switch(pagina) {
                case "Departamento":
                case "Linha":
                case "Sublinha":
                    pagina = "Categoria";
                    break;
                case "WebStore":
                    pagina = "Lojista"
                    break;
            };
        
        //Paginador (aparece quando o usario clica em mostrar mais itens na vitrine)
            var offset   = (typeof obj_search.offset == "number")?obj_search.offset:0 
            var limit    = (typeof obj_search.limit == "number")?obj_search.limit:0
            var qt_itens = offset + limit

        //Lista automatica
            if(limit > 0){                
                for(var i=offset; i < qt_itens; i++){
                    var pos = i+1
                    if (obj_search.products[i]) {
                        //Busca
                            if(pagina != "Busca"){
                                search_grid += "Mecanismo Vitrine|Lista Automática|Discovery|" + regra + "|" + pagina + "|" + pos + "|grid,"
                            }
                        //Categoria, Deal e Hotsites
                            else{
                                search_grid += "Mecanismo de Busca|Resultados da Busca|Nanook||Busca|" + pos + "|grid,"
                            }
                    }
                }
            }

        //Retira vírgula e adiciona list1
            if(search_grid !=''){
                //Retira vírgula do final
                search_grid = search_grid.substring(0,(search_grid.length - 1)) 
            }

        //Infoma que publicações estão OK
            _satellite.data.customVars.components_sec.search_grid = "true"

        //Retorna lista
            return search_grid
    }
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPFMv2ViewSearchGrid", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getPFMv2ViewSearchGridGA": {"customJS":function(){
try {
    if (typeof cage_global_variable.detail.search == "object" && typeof cage_global_variable.detail.search.products == "object" && cage_global_variable.detail.search.products.length > 0) {
        var search_grid = ''
        var obj_search = cage_global_variable.detail.search
        var pagina = cage_global_variable.nome_pagina
        var regra = ""

        // Arruma nomenclatura das paginas
        switch (pagina) {
            case "Departamento":
            case "Linha":
            case "Sublinha":
                pagina = "Categoria";
                break;
            case "WebStore":
                pagina = "Lojista"
                break;
        };

        // Paginador (aparece quando o usario clica em mostrar mais itens na vitrine)
        var offset = (typeof obj_search.offset == "number") ? obj_search.offset : 0
        var limit = (typeof obj_search.limit == "number") ? obj_search.limit : 0
        var qt_itens = offset + limit

        // Lista automatica
        if (limit > 0) {
            for (var i = offset; i < qt_itens; i++) {
                var pos = i + 1

                if (obj_search.products[i]) {
                    // Categoria, Deal e Hotsites
                    if (pagina != "Busca") {
                        // Adiciona itens na lista de impressão
                        ga('ec:addImpression', {
                            'id': obj_search.products[i],
                            'list': 'Lista Automática',
                            'position': pos,
                            'dimension6': pagina,
                            'dimension7': '-'
                        });
                    }
                    // Busca
                    else {
                        // Adiciona itens na lista de impressão
                        ga('ec:addImpression', {
                            'id': obj_search.products[i],
                            'list': 'Resultados da Busca',
                            'position': pos,
                            'dimension6': pagina,
                            'dimension7': '-'
                        });
                    }
                }
            }
        }
    }
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "getPFMv2ViewSearchGridGA", e);
    }
    catch (e) { }
}
},"storeLength":"pageview"},
    "getPhishing": {"customJS":function(){
try{
	var phishing = false;
	//Verifica iFrame
		if(typeof window.top._satellite == "object" && typeof window.top._satellite.data.customVars.checkIframe == "boolean" && window.top._satellite.data.customVars.checkIframe == true){
			phishing = true;
		}
	//Verifica Dominio
		else if(typeof window.top._satellite == "object" && typeof window.top._satellite.data.customVars.checkDomain == "boolean" && window.top._satellite.data.customVars.checkDomain == false){
			phishing = true;	
		}

	return phishing;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getPhishing", e);
	}
	catch(e){}

	return false;
}
},"storeLength":"pageview"},
    "getPickUpInStore": {"customJS":function(){
try{
    try{
        //Seta a variavel global do cage
            var cage = cage_global_variable.detail;
            var pageEvent = (cage.page.type == "payment") ? "184" : "185"

        //Testa se há a propriedade checkout e se a entrega é pegue na loja hoje
            if(cage.hasOwnProperty("checkout") == true && cage.checkout.freight != undefined){
                
                if(cage.checkout.freight.optionId == "PICK_UP_IN_STORE"){
                    
                    if (s_wa.events != undefined && s_wa.events != "") {
                        s_wa.events += ",event" + pageEvent
                    }
                    else {
                        s_wa.events = "event" + pageEvent
                    }
                }
            }
        
        //Carrinho 
            else if(typeof cage.cart.pickUpInStore == "object" && typeof cage.cart.pickUpInStore.sellerStoreId == "string" && cage.cart.pickUpInStore.sellerStoreId != ""){
                if (s_wa.events != undefined && s_wa.events != "") {
                    s_wa.events += ",event190"
                }
                else {
                    s_wa.events = "event190" + pageEvent
                }
            }
            
    }
    catch(ex){
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPickUpInStore", ex);
    }
}catch(ex){
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPickUpInStore", ex);
}
},"storeLength":"pageview"},
    "getPickUpInStoreConflict": {"customJS":function(){
try{
    if(typeof _satellite.data.customVars.modalOpen == "object" && typeof _satellite.data.customVars.modalOpen.retornoApi.id && _satellite.data.customVars.modalOpen.retornoApi.id == "conflito-pickUpInStore"){
        //Logs
            if (_satellite.getVar("enableLog") == "true") {
                console.log("WA: Pegue na Loja - Conflito")
            }
        if (s_wa.events != undefined && s_wa.events != "") {
            s_wa.events += ",event183"
        }
        else {
            s_wa.events = "event183"
        }
    }
}catch(ex){
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPickUpInStoreConflict", ex);
}
},"storeLength":"pageview"},
    "getPickUpStoreInteractions": {"customJS":function(){
try{ 
    document.addEventListener("pickupStore:search",function(e){
        try{
            //Criar objeto com variáveis do disparo
                var omni = {
                    link_o   : "PegueNaLoja:Lojas:Busca",                    
                    products : _satellite.getVar("Products"),
                    eVar49   : _satellite.getVar("getDepartmentLineSubline"),
                    eVar76   : _satellite.getVar("getProductType"),
                    eVar93   : e.detail.cep,
                    eVar197  : e.detail.total,
                    events   : "event195=" + e.detail.total
                }

                WA_linkP(omni);				
        }catch(e){
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPickUpStoreInteractions", e);
        }
    })

    document.addEventListener("pickupStore:select",function(e){
        try{
            //Criar objeto com variáveis do disparo
                var omni = {
                    link_o   : "PegueNaLoja:Lojas:Selecao",
                    products : _satellite.getVar("Products"),
                    eVar49   : _satellite.getVar("getDepartmentLineSubline"),
                    eVar76   : _satellite.getVar("getProductType"),
                    eVar93   : e.detail.cep,
                    eVar196  : e.detail.name + " - " + e.detail.cep,
                    events   : "event194"
                }

                WA_linkP(omni);				
        }catch(e){
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPickUpStoreInteractions", e);
        }
    })
}catch(e){
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPickUpStoreInteractions", e);
}
},"storeLength":"pageview"},
    "getProductAttributes": {"customJS":function(){
try{
    var atributos = ''
    var marca = cor = processador = voltagem = composicao = autor = editora = material = dimensoes = ''
    
    //Verifica atributos do produto
        if(typeof cage_global_variable.detail.product.attributes == "object" && typeof cage_global_variable.detail.product.attributes[0] == "object" && typeof cage_global_variable.detail.product.attributes[0].properties == "object"){
            for(var i=0; i < cage_global_variable.detail.product.attributes[0].properties.length; i++){
                var atributo = cage_global_variable.detail.product.attributes[0].properties[i].name
                var valor    = cage_global_variable.detail.product.attributes[0].properties[i].value
                
                if(atributo.indexOf("Marca") >=0){marca = valor}
                else if(atributo.indexOf("Cor") >=0){cor = valor}
                else if(atributo.indexOf("Processador") >=0){processador = valor}
                else if(atributo.indexOf("Voltagem") >=0){voltagem = valor}
                else if(atributo.indexOf("Composição") >=0){composicao = valor}
                else if(atributo.indexOf("Autor") >=0){autor = valor}
                else if(atributo.indexOf("Editora") >=0){editora = valor}
                else if(
                    atributo.indexOf("Material da Estrutura") >=0 || 
                    atributo.indexOf("Composição") >=0
                ){material = valor}
                else if(atributo.indexOf("Dimensões") >=0){dimensoes = valor}
    
            }
        }

    atributos = marca + "|" + cor + "|" + processador + "|" + voltagem + "|" + composicao + "|" + autor + "|" + editora + "|" + material + "|" + dimensoes

    return atributos;

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductAttributes", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductAvailability": {"customJS":function(){
try{
	var productAvailabilityType    = ""
	var valida_1p                  = false
	var valida_3p                  = false
	var classificacao_estoque_item = cage_global_variable.detail.product.sellerTypeClassification

	//Itera ofertas
		for(var i=0; i < cage_global_variable.detail.offers.length; i++){
			//Existe oferta valida_1p
				if(cage_global_variable.detail.offers[i]._embedded.seller.name == "B2W"){
					valida_1p = true;
				}
			//Existe oferta valida_3p
				else{
					valida_3p = true;
				}
		}

	//Trata os valores da variável
		//Exclusivo B2C
			if(classificacao_estoque_item == "B2W" && !valida_1p){
				productAvailabilityType = "Exclusivo: 1P"
			}
		//Exclusivo Marketplace
			if(classificacao_estoque_item == "MARKETPLACE" && !valida_3p){
				productAvailabilityType = "Exclusivo: 3P"
			}
		//Misto
			else if(classificacao_estoque_item == "MIXED"){
				//B2C e Markeplace sem estoque
					if(!valida_1p && !valida_3p){
						productAvailabilityType = "Misto: 1P + 3P"
					}
				//B2C sem estoque
					else if(!valida_1p){
						productAvailabilityType = "Misto: 1P"
					}
				//Marketplace sem estoque
					else if(!valida_3p){
						productAvailabilityType = "Misto: 3P"
					}				
			}

	//Retorna dataElement
		return productAvailabilityType
}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductAvailability", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getProductAvailabilityC2C": {"customJS":function(){
try{

	// Inicialização
		var hasNew  = false;
		var hasUsed = cage_global_variable.detail.hasUsed;
		var productAvailability  = "";

	// Valida o tipo da variavel offers
		if(typeof cage_global_variable.detail.offers == "object") {

			// Verifica a existência de ofertas
				if (cage_global_variable.detail.offers.length > 0) {
				// Percorre todas as ofertas e verifica se existem produtos 'Novos'
					for(var i = 0; i < cage_global_variable.detail.offers.length; i++) {
						if(cage_global_variable.detail.offers[i].condition.toLowerCase() == "new") {
							hasNew = true;
							break;
						}
					}
				}

			// 'Novos' e 'Usados'
				if (hasNew == true && hasUsed == true) {
					productAvailability = "Novo e Usado"
				}
			// Somente 'Novos'
				else if (hasNew == true && hasUsed == false){
					productAvailability = "Novo"
				}
			// Somente 'Usados'
				else if (hasNew == false && hasUsed == true){
					productAvailability = "Usado"
				}
			// Erro
				else {
					productAvailability = "Outros"
				}
			
			// Sem estoque
				if(cage_global_variable.detail.offers.length == 0 && hasUsed == false) {
					productAvailability = "Sem estoque"
				}
		}

	// Retorna string para o dataElement
		return productAvailability

}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductAvailabilityC2C", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getProductBrand": {"customJS":function(){
try {
	var marca = ""
	
	//Verifica se existem atributos para o produto
		if(typeof cage_global_variable.detail.product.attributes == "object" && cage_global_variable.detail.product.attributes.length > 0){
			for(var i=0; i < cage_global_variable.detail.product.attributes[0].properties.length; i++){
				if(cage_global_variable.detail.product.attributes[0].properties[i].name.toLowerCase() == "marca"){
					marca = cage_global_variable.detail.product.attributes[0].properties[i].value;
				}
        if(cage_global_variable.detail.product.attributes[0].properties[i].name.toLowerCase() == "fabricante"){
					marca = cage_global_variable.detail.product.attributes[0].properties[i].value;
				}
			}
		}

	return marca.replace(/,/g, '-').trim();;
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductBrand", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductBuyBoxToken": {"customJS":function(){
try {	
	var buybox = (typeof cage_global_variable.detail.buyboxToken == "string")?cage_global_variable.detail.buyboxToken:''

	if(buybox.indexOf("fallback") >=0){
		buybox = "FallBack"
	}
	else if(buybox.indexOf("smart") >=0){
		buybox = "Disponivel"
	}
	else{
		buybox = "Nao Disponivel"
	}

	return buybox
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductBuyBoxToken", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductBuyBoxTokenID": {"customJS":function(){
try {	
	var buybox = (typeof cage_global_variable.detail.buyboxToken == "string")?cage_global_variable.detail.buyboxToken:''

	return buybox
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductBuyBoxTokenID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductConditionBuyBox": {"customJS":function(){
try {
    
    // Inicialização
        var productAvailability  = "";

    // Valida o tipo da variavel offers
        if (typeof cage_global_variable.detail.offers == "object") {

            // Verifica a existência de ofertas
                if (cage_global_variable.detail.offers.length > 0) {

                    // Recebe condição do produto ganhador do BuyBox
                        productAvailability = cage_global_variable.detail.offers[0].condition.toLowerCase();
                            
                    // Traduz valor retornado da API
                        if (productAvailability == "new") {
                            productAvailability = "Novo";
                        }
                        else if (productAvailability == "used") {
                            productAvailability = "Usado"
                        } 
                    
                }

            // Sem estoque - Caso não tenha ofertas nem ítens usados
                else if(cage_global_variable.detail.hasUsed == false) {
                    productAvailability = "Sem estoque"
                }

            // Caso só tenha estoque para C2C
                else {
                    productAvailability = "Outros"
                }

        }

    // Retorna string para o dataElement
        return productAvailability

}
catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductConditionBuyBox", e);
    }
    catch (e) {}
}
},"storeLength":"pageview"},
    "getProductID": {"customJS":function(){
try{
  return cage_global_variable.detail.page.dataLayer[0].objIdProd
}catch(e){}
},"storeLength":"pageview"},
    "getProductInGarage": {"customJS":function(){
try{
    //Propriedades da ficha técnica do produto
    if(cage_global_variable.detail.product.hasOwnProperty("attributes")){
        var productInfo = cage_global_variable.detail.product.attributes[0].properties;
        var temFIPE = "NÂO";

        //Percorre as propriedades da ficha técnica
        for(var i = 0; i < productInfo.length; i++){
            var str = productInfo[i].name.toLowerCase()

            //Testa se o produto tem "Código FIPE" como propriedade
            if(str.indexOf("fipe") > 0){

                //Testa sem tem código FIPE
                if(productInfo[i].value != "" || x[i].value != null){
                    temFIPE = "SIM"    
                }
            }
        }
        
        return temFIPE;
    }
}catch(e){
	try{
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductInGarage", e);
	}catch(e){}
}
},"storeLength":"pageview"},
    "getProductModalFilterInfos": {"customJS":function(){
try{ 
    document.addEventListener("squad:modal:open",function(e){
        try{
            //Criar objeto com variáveis do disparo
                var omni = {
                    link_o   : "Squad Modal - Open",
                    pageName : _satellite.getVar("setPageName"),
                    products : _satellite.getVar("Products"),
                    eVar49   : _satellite.getVar("getDepartmentLineSubline"),
                    eVar76   : _satellite.getVar("getProductType"),
                    events   : 'event162'
                }

                WA_linkP(omni);				
        }catch(e){
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductModalFilterInfos - ModalOpen", e);
        }
    })

    document.addEventListener("squad:modal:close",function(e){
        try{
            //Criar objeto com variáveis do disparo
                var omni = {
                    link_o   : "Squad Modal - Close",
                    pageName : _satellite.getVar("setPageName"),
                    products : _satellite.getVar("Products"),
                    eVar49   : _satellite.getVar("getDepartmentLineSubline"),
                    eVar76   : _satellite.getVar("getProductType"),
                    events   : 'event163'
                }

                WA_linkP(omni);				
        }catch(e){
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductModalFilterInfos - ModalClose", e);
        }
    })

    /*document.addEventListener("aggregation:filter:change",function(e){

    })*/
}catch(e){
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductModalFilterInfos", e);
}
},"storeLength":"pageview"},
    "getProductMostVisited": {"customJS":function(){
try {
	//Novo
		if(typeof cage_global_variable.detail.product == "object"){
			return cage_global_variable.detail.product.name.replace(/,/g, '').trim();
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductMostVisited", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductName": {"customJS":function(){
try{
  return cage_global_variable.detail.page.dataLayer[0].objNomeProd
}catch(e){}
},"storeLength":"pageview"},
    "getProductNameByComma": {"customJS":function(){
try{
	var productNameByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productNameByPipe += cage_global_variable.detail.cart.lines[i].product.name + ","
	}

	//Remove última vírgula
	productNameByPipe = productNameByPipe.substring(0, (productNameByPipe.length - 1));
	return productNameByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductNameByPipe": {"customJS":function(){
try{
	var productNameByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productNameByPipe += cage_global_variable.detail.cart.lines[i].product.name + "|"
	}

	//Remove última vírgula
	productNameByPipe = productNameByPipe.substring(0, (productNameByPipe.length - 1));
	return productNameByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductPageAttributes": {"customJS":function(){
try{
    var qtd_atributos = (typeof cage_global_variable.detail.product.attributes == "object" && cage_global_variable.detail.product.attributes.length > 0 && cage_global_variable.detail.product.attributes[0].properties.length > 0)?cage_global_variable.detail.product.attributes[0].properties.length:0
    var qtd_images    = (typeof cage_global_variable.detail.product.images == "object")?cage_global_variable.detail.product.images.length:0
    var descricao     = (cage_global_variable.detail.product.hasDescription)?"Sim":"Nao"

    return qtd_atributos + "|" + qtd_images + "|" + descricao;

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductPageAttributes", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductPageID": {"customJS":function(){
try {
	var id_produto = ""
	if(typeof cage_global_variable.detail.product == "object"){
		id_produto = cage_global_variable.detail.product.id
	}
	else if(_satellite.getVar("getPathname").indexOf("/") >=0){
		id_produto = _satellite.getVar("getPathname").split("/")[2]
	}

	return id_produto;
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductPageID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductPagePrice": {"customJS":function(){
try {	
	//Dispara evento
		//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event127=" + _satellite.getVar("getProductValue")
				}
			//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event127=" + _satellite.getVar("getProductValue")
				}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductPagePrice", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductPickUpInStore": {"customJS":function(){
try {

	if(cage_global_variable.detail.hasOwnProperty("pickUpStoreOffers") && cage_global_variable.detail.pickUpStoreOffers.length > 0){

		//Interação com a modal "Pegue na loja hoje"
		var pegueNaLoja = cage_global_variable.detail.pickUpStoreOffers
		s_wa.eVar183 = pegueNaLoja[0].salesPrice

		s_wa.eVar184 = "SIM"

		//Eventos
			//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event186=" + pegueNaLoja[0].salesPrice
				}
			//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event186=" + pegueNaLoja[0].salesPrice
				}	
	}
	else{
		
		s_wa.eVar184 = "NÃO"
	}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductPickUpInStore", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductPrice": {"customJS":function(){
try{
  return cage_global_variable.detail.page.dataLayer[0].objPrecoProd
}catch(e){}
},"storeLength":"pageview"},
    "getProductPriceByComma": {"customJS":function(){
try{
	var productPriceByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productPriceByPipe += cage_global_variable.detail.cart.lines[i].salesPrice + ","
	}

	//Remove última vírgula
	productPriceByPipe = productPriceByPipe.substring(0, (productPriceByPipe.length - 1));
	return productPriceByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductPriceByPipe": {"customJS":function(){
try{
	var productPriceByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productPriceByPipe += cage_global_variable.detail.cart.lines[i].salesPrice + "|"
	}

	//Remove última vírgula
	productPriceByPipe = productPriceByPipe.substring(0, (productPriceByPipe.length - 1));
	return productPriceByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductsByComma": {"customJS":function(){
try{
	var productsByComma = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productsByComma += cage_global_variable.detail.cart.lines[i].productId + ","
	}

	//Remove última vírgula
	productsByComma = productsByComma.substring(0, (productsByComma.length - 1));
	return productsByComma;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductsByPipe": {"customJS":function(){
try{
	var productsByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productsByPipe += cage_global_variable.detail.cart.lines[i].productId + "|"
	}

	//Remove última vírgula
	productsByPipe = productsByPipe.substring(0, (productsByPipe.length - 1));
	return productsByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductSellersQuantity": {"customJS":function(){
try {
	var quantidade    = 0
	var classificacao = ""
	var lista_sellers = ""

	//Itera sellers para garantir que número não estará duplicado
		for(var i=0; i < cage_global_variable.detail.offers.length; i++){
			//Verifica se o seller já foi contabilizado
				if(lista_sellers.indexOf(cage_global_variable.detail.offers[i]._embedded.seller.name) == -1){
					quantidade += 1
					lista_sellers += cage_global_variable.detail.offers[i]._embedded.seller.name + ","
				}				
		}

	//Zero
		if(quantidade == 0){
			classificacao = "Nenhum Seller"
		}
	//1
		else if(quantidade == 1){
			classificacao = "1 Seller"
		}
	//Mais de 1
		else if(quantidade > 1){
			classificacao = "2 ou Mais Sellers"
		}


	return quantidade.toString() + "#" + classificacao

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductSellersQuantity", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductSKU": {"customJS":function(){
try {
	var sku = ""
	
	//Verifica se existem ofertas para o produto
		if(typeof cage_global_variable.detail.offers[0] == "object"){
			sku = cage_global_variable.detail.offers[0]._links.sku.id
		}

	return sku;
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductSKU", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getProductSKUByComma": {"customJS":function(){
try{
	var productNameByPipe = ''

	for(var i=0; i < cage_global_variable.detail.cart.lines.length;i++){
		productNameByPipe += cage_global_variable.detail.cart.lines[i].product.sku + ","
	}

	//Remove última vírgula
	productNameByPipe = productNameByPipe.substring(0, (productNameByPipe.length - 1));
	return productNameByPipe;
	
}catch(e){}
},"storeLength":"pageview"},
    "getProductType": {"customJS":function(){
try{
	var ganhador_buy_box           = cage_global_variable.detail.offers[0]._embedded.seller.name
	var product_type               = (ganhador_buy_box == "B2W")?"B2C":"Marketplace"
	var classificacao_estoque_item = cage_global_variable.detail.product.sellerTypeClassification
	var tipo_item                  = ""

	//Trata os valores da variável
		//Misto 1P
			if(classificacao_estoque_item == "MIXED" && ganhador_buy_box == "B2W"){
				tipo_item = "Misto B2C"
			}
		//Misto 3P
			else if(classificacao_estoque_item == "MIXED" && ganhador_buy_box != "B2W"){
				tipo_item = "Misto Marketplace"
			}
		//Exclusivo 1P
			else if(classificacao_estoque_item == "B2W" && ganhador_buy_box == "B2W"){
				tipo_item = "Exclusivo B2C"
			}
		//Exclusivo 3P
			else if(classificacao_estoque_item == "MARKETPLACE" && ganhador_buy_box != "B2W"){
				tipo_item = "Exclusivo Marketplace"
			}

	//Trata nome das marcas b2w
		if(ganhador_buy_box == "B2W"){
			ganhador_buy_box = _satellite.getVar("getMarketplaceBrand")
		}

	//Retorna dataElement
		return product_type + "|" + tipo_item + "|" + ganhador_buy_box
	
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductType", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getProductTypeSeller": {"customJS":function(){
try{
    
    // Inicialização
        var has1P = false;
        var has3P = false;
        var hasC2C = cage_global_variable.detail.hasUsed;
        var productAvailability  = "";

    // Valida o tipo da variavel offers
        if(typeof cage_global_variable.detail.offers == "object") {

            // Verifica a existência de ofertas
                if (cage_global_variable.detail.offers.length > 0) {
                // Percorre todas as ofertas e verifica se existem produtos '1p e 3p'
                    for(var i = 0; i < cage_global_variable.detail.offers.length; i++) {
                        // Sai do for se marcações 1p e 3p já estiverem setadas como 'true'
                            if(has1P == true && has3P == true) break;
                        // Caso CNPJ ou CPF inicie com '0', o primeiro dígito será descartado no momento de sua exibição
                            if(cage_global_variable.detail.offers[i]._embedded.seller.id.length >= 12 && cage_global_variable.detail.offers[i]._embedded.seller.id.length <= 14) {
                                if(cage_global_variable.detail.offers[i]._embedded.seller.name.toLowerCase() == "b2w") {
                                    has1P = true;
                                } else {
                                    has3P = true;
                                }
                            }
                    }
                }

            // Disponibilidade do produto:
                // Novo e Usado:
                    // 1P, Seller 3P e Seller C2C
                        if (has1P == true && has3P == true && hasC2C == true) {
                            productAvailability = "1P, Seller 3P e Seller C2C"
                        }

                    // 1P e Seller C2C
                        else if (has1P == true && has3P == false && hasC2C == true) {
                            productAvailability = "1P e Seller C2C"
                        }

                    // Seller 3P e Seller C2C
                        else if (has1P == false && has3P == true && hasC2C == true) {
                            productAvailability = "Seller 3P e Seller C2C"
                        }
                
                // Novo
                    // 1P e Seller 3P
                        else if (has1P == true && has3P == true && hasC2C == false) {
                            productAvailability = "1P e Seller 3P"
                        }

                    // 1P
                        else if (has1P == true && has3P == false && hasC2C == false) {
                            productAvailability = "1P"
                        }

                    // Seller 3P
                        else if (has1P == false && has3P == true && hasC2C == false) {
                            productAvailability = "Seller 3P"
                        }
                
                // Usado
                    // Seller C2C
                        else if (has1P == false && has3P == false && hasC2C == true) {
                            productAvailability = "Seller C2C"
                        }
                        
                // Erro
                    // Caso não caia em nenhuma condição anterior
                        else {
                            productAvailability = "Outros"
                        }

                // Sem estoque
                    // Caso não tenha ofertas nem ítens usados
                        if(cage_global_variable.detail.offers.length == 0 && hasC2C == false) {
                            productAvailability = "Sem estoque"
                        }
        }

    // Retorna string para o dataElement
        return productAvailability

}
catch(e){
    try{
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductTypeSeller", e);
    }
    catch(e){}
}
},"storeLength":"pageview"},
    "getProductTypeSellerBuyBox": {"customJS":function(){
try {
    
    // Inicialização
        var typeSeller = _satellite.getVar("getProductType").toLowerCase();
        var productAvailability  = "";

    // Valida o tipo da variavel offers
        if (typeof cage_global_variable.detail.offers == "object") {

            // Verifica a existência de ofertas
                if (cage_global_variable.detail.offers.length > 0) {

                    // Verifica se tipo de vendedor é 1P
                        if (typeSeller.includes("b2c|")) {
                            productAvailability = "1P";
                        }
                        // Verifica se tipo de vendedor é Seller 3P
                        else if (typeSeller.includes("marketplace|")) {
                            productAvailability = "Seller 3P";
                        }
                    // Em caso de erro
                        else {
                            productAvailability = "Outros";
                        }
                }

            // Sem estoque - Caso não tenha ofertas nem ítens usados
                else if(cage_global_variable.detail.hasUsed == false) {
                    productAvailability = "Sem estoque"
                }

            // Caso só tenha estoque para C2C
                else {
                    productAvailability = "Outros"
                }

        }

    // Retorna string para o dataElement
        return productAvailability

}
catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getProductTypeSellerBuyBox", e);
    }
    catch (e) {}
}
},"storeLength":"pageview"},
    "getProductValue": {"customJS":function(){
try {
	//Novo
		if(typeof cage_global_variable.detail.product == "object"){
			if(cage_global_variable.detail.hasOwnProperty("offers") && cage_global_variable.detail.offers[0] != undefined){
				return cage_global_variable.detail.offers[0].salesPrice
			}
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getProductValue", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getPurchaseID": {"customJS":function(){
try {
	return cage_global_variable.detail.orderId.replace(/-/g, "");
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPurchaseID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getPurchaseLoadInfos": {"customJS":function(){
try {
    //Purchase Infos
        if(typeof _satellite.data.customVars.purchase_load  == "object" && typeof _satellite.data.customVars.purchase_load.retornoApi == "object"){
            var order_id    = _satellite.data.customVars.purchase_load.retornoApi.order.id
            var last_status = _satellite.data.customVars.purchase_load.retornoApi.timeline.actualEvent.name

            s_wa.eVar147 = order_id + "|" + last_status
        }
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getPurchaseLoadInfos", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "getQtdProdCart": {"customJS":function(){
try {
	return cage_global_variable.detail.hasOwnProperty("cart") ? cage_global_variable.detail.cart.lines.length : ""
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getQtdProdCart", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getQuantResultBusca": {"customJS":function(){
try {
	return cage_global_variable.detail.search.results.toString()
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getQuantResultBusca", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getRankingrec": {"customJS":function(){
try {
	//Verifica se possui o parametro
	if (typeof cage_getParam("nm_ranking_rec") == "string") {
		//Faz a Leitura do parametro chave
		return cage_getParam("nm_ranking_rec")
	}
	else if (typeof cage_getParam("pfm_index") == "string") {
		//Faz a Leitura do parametro chave
		return parseFloat(cage_getParam("pfm_index")) + 1
	}	
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getRankingrec", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getRatingValues": {"customJS":function(){
//Avaliacao
	try{
		if(typeof cage_global_variable.detail.product.rating == "object"){
			return cage_global_variable.detail.product.rating.reviews + "|" + parseFloat(cage_global_variable.detail.product.rating.average).toFixed(1);
		}
		
	}catch (e) {
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getRatingValues", e);
		} catch (e) {}
	}
},"storeLength":"pageview"},
    "getRBID": {"customJS":function(){

try{
	var b2wuid = ""

	//Verifica se Existe o Parametro da Responsys RRID (UPERCASE)
		if(typeof cage_getParam("RBID") == "string"){
			b2wuid = cage_getParam("RBID")
		}
	//Verifica se Existe o Parametro da Responsys RRID (lowercase)
		else if(typeof cage_getParam("rbid") == "string"){
			b2wuid = cage_getParam("rbid")
		}

	return b2wuid;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getRBID", e);
	}
	catch(e){}
}


},"storeLength":"pageview"},
    "getReferrer": {"customJS":function(){
try{
	var referrer = ''
	if(window.top.document.referrer != ""){
		referrer = window.top.document.referrer
	}
	else if(cage_global_variable.detail.navigation.referrer != ""){
		referrer = cage_global_variable.detail.navigation.referrer
	}
	
	return referrer
}catch(e){
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getReferrer", e);
}
},"storeLength":"pageview"},
    "getRMID": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro Franq
		if (typeof cage_getParam("rmid") == "string") {
			//Faz a Leitura do parametro chave
			return cage_getParam("rmid")
		}
	//Verifica se possui o parametro Franq
		else if (typeof cage_getParam("RMID") == "string") {
			//Faz a Leitura do parametro chave
			return cage_getParam("RMID")
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getRMID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getRRABTest": {"customJS":function(){
try {
	if(typeof cage_global_variable_components == "object" && typeof cage_global_variable_components.recomendacao_testAB == "object" && cage_global_variable_components.recomendacao_testAB.length > 0){
		//Itera todos os testes ab de recomendação
			for(var i=0; i < cage_global_variable_components.recomendacao_testAB.length; i++){
				var id_experimento = cage_global_variable_components.recomendacao_testAB[i].testId
				var variante       = cage_global_variable_components.recomendacao_testAB[i].treatmentName

				//Se a variável de teste ainda não tiver sido criada
					if(typeof s_wa.prop15 == "undefined" || s_wa.prop15 == ""){
						s_wa.prop15 = id_experimento + ": " + variante
					}
					else{
						s_wa.prop15 += "," + id_experimento + ": " + variante
					}
			}
	}
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getRRABTest", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getRRID": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro Franq
		if (typeof cage_getParam("rrid") == "string") {
			//Faz a Leitura do parametro chave
			return "true"
		}
	//Verifica se possui o parametro Franq
		else if (typeof cage_getParam("RRID") == "string") {
			//Faz a Leitura do parametro chave
			return "true"
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getRRID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSaikaURL": {"customJS":function(){
return 'https://saika-v3.b2w.io/event/';
},"storeLength":"pageview"},
    "getSalesChannel": {"customJS":function(){
try {
	var salesChannel = _satellite.readCookie("b2wChannel")
	
	if(salesChannel == "QLAS"){
		console.log("WA - ACCOUNT: " + s_wa_top.account)
		s_wa_top.account += ",b2w-quiosque"
		console.log("WA - ACCOUNT: " + s_wa_top.account)
	}

	return salesChannel;
} catch (e) {
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSalesChannel", e);
}
},"storeLength":"pageview"},
    "getSalesClassification": {"customJS":function(){
try {
	return cage_global_variable.detail.product.saleClassification
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSalesClassification", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchAggregations": {"customJS":function(){
try {
    var filtros = cage_global_variable.detail.search.aggregations
    var filtros_conc = ""
    
    if(typeof filtros == "object" && filtros.length > 0){
        for(var i = 0; i<filtros.length; i++){
            filtros_conc += filtros[i]['groupTitle'] + ': ' + filtros[i]['title']
            filtros_conc += "|"
        }

        //Remove virgula
            filtros_conc = filtros_conc.substring(0, (filtros_conc.length - 1));
    }

    return filtros_conc
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchAggregations", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchDidYouMean": {"customJS":function(){
try {
	return cage_global_variable.detail.search.actualQuery
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchDidYouMean", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchDidYouMeanNotUsed": {"customJS":function(){
try {
	if(typeof cage_global_variable.detail.search.queryDidYouMean == "object" && cage_global_variable.detail.search.queryDidYouMean.length > 0){
        var evento = ''
        
        //Used
            if(typeof cage_global_variable.detail.search.actualQuery == "string"){
                evento = 'event189'
            }
        //Not Used
            else{
                evento = 'event193'
            }
        
        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += "," + evento
            }
        //Adiciona mais um evento no objeto s_wa.events
            else {
                s_wa.events = evento
            }        
    }
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchDidYouMeanNotUsed", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchLimit": {"customJS":function(){
try {
	return cage_global_variable.detail.search.limit
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchLimit", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchNoResults": {"customJS":function(){
try {
	//Verifica se a busca retornou 0 resultados
		//Dispara eventos
			if(cage_global_variable.detail.search.results == 0){
				//Adiciona mais um evento no objeto s_wa.events
					if (s_wa.events != undefined && s_wa.events != "") {
						s_wa.events += ",event24"
					}
				//Adiciona mais um evento no objeto s_wa.events
					else {
						s_wa.events = "event24"
					}
			}

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchNoResults", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchOffset": {"customJS":function(){
try {
	return (cage_global_variable.detail.search.offset == null)?1:cage_global_variable.detail.search.offset
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchOffset", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchOrderBy": {"customJS":function(){
try {
	return cage_global_variable.detail.search.orderBy
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchOrderBy", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSearchProductList": {"customJS":function(){
try {
    var produtos = cage_global_variable.detail.search.products
    var produtos_conc = ""
    
    if(typeof produtos == "object" && produtos.length > 0){
        for(var i = 0; i<produtos.length; i++){
            produtos_conc += produtos[i]
            produtos_conc += ","
        }

        //Remove virgula
            produtos_conc = produtos_conc.substring(0, (produtos_conc.length - 1));
    }

    return produtos_conc
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSearchProductList", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSellerBoxBestPrice": {"customJS":function(){
try {
	var sellerBoxBetter = false
	
	if(typeof cage_global_variable.detail.offers == "object" && cage_global_variable.detail.offers.length > 0){
		for(var i=0; i < cage_global_variable.detail.offers.length; i++){
		
			var preco_seller = cage_global_variable.detail.offers[i].salesPrice
			var priceShare   = ((preco_seller / _satellite.getVar("getProductValue")) * 100)

			
			//Trata nome das marcas b2w
				if(priceShare < 100){
					sellerBoxBetter = true
				}
		}
	}

	//Dispara evento
		if(sellerBoxBetter){
			//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event121"
				}
			//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event121"
				}
		}
		
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSellerBoxBestPrice", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSellersInfoComplete": {"customJS":function(){
try{  
    var sellers_1 = ''
    var sellers_2 = ''
    var sellers_3 = ''
    var sellers_4 = ''
    var sellers_5 = ''

    var offers  = cage_global_variable.detail.offers

    if(cage_global_variable.detail.offers.length > 0){    
        for(var i=0; i < offers.length; i++){
            //0-7
                if(i <= 7){
                    sellers_1 += 
                    (i+1) + "|"
                    + offers[i]._embedded.seller.id + "|"
                    + offers[i].salesPrice + ","
                }
            //8-15
                else if(i >= 8 && i <= 15){
                    sellers_2 += 
                    (i+1) + "|"
                    + offers[i]._embedded.seller.id + "|"
                    + offers[i].salesPrice + ","
                }
            //16-23
                else if(i >= 16 && i <= 23){
                    sellers_3 += 
                    (i+1) + "|"
                    + offers[i]._embedded.seller.id + "|"
                    + offers[i].salesPrice + ","
                }
            //24-31
                else if(i >= 24 && i <= 31){
                    sellers_4 += 
                    (i+1) + "|"
                    + offers[i]._embedded.seller.id + "|"
                    + offers[i].salesPrice + ","
                }
            //32-39
                else if(i >= 32 && i <= 39){
                    sellers_5 += 
                    (i+1) + "|"
                    + offers[i]._embedded.seller.id + "|"
                    + offers[i].salesPrice + ","
                }
            //32-39
                else if(i >= 32 && i <= 39){
                    sellers_5 += 
                    (i+1) + "|"
                    + offers[i]._embedded.seller.id + "|"
                    + offers[i].salesPrice + ","
                }           
        }
        sellers_1 = sellers_1.substring(0, (sellers_1.length - 1));
        sellers_2 = sellers_2.substring(0, (sellers_2.length - 1));
        sellers_3 = sellers_3.substring(0, (sellers_3.length - 1));
        sellers_4 = sellers_4.substring(0, (sellers_4.length - 1));
        sellers_5 = sellers_5.substring(0, (sellers_5.length - 1));
    }

    s_wa.eVar26 = sellers_1
    s_wa.eVar27 = sellers_2
    s_wa.eVar28 = sellers_3
    s_wa.eVar29 = sellers_4
    s_wa.eVar30 = sellers_5
}catch(e){
	try{
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getSellersInfoComplete", e);
	}catch(e){}
}
},"storeLength":"pageview"},
    "getSellersQtd": {"customJS":function(){
try{
 var sellersLength = cage_global_variable.detail.offers.length
          
  //Pega quantidade de sellers
 s_wa.eVar175 = (sellersLength == 0) ? "Zero" : sellersLength

  //Evento 179 para Quantidade de Sellers
  if (s_wa.events != undefined && s_wa.events != "") {
    s_wa.events += ",event179=" + sellersLength
  }
  else {
    s_wa.events = ",event179=" + sellersLength
  } 
}catch (e) {
	try {
		//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSellersQtd", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "getSeloPrime": {"customJS":function(){
try{
	//Selo prime		
        var selo_prime = 'NÃO'
        
        //Itera ofertas do produto            
            for(var i=0; i < cage_global_variable.detail.offers.length; i++){
                //Itera selos frete
                    if(cage_global_variable.detail.offers[i].stamps.freight.length){
                        for(var j=0; j < cage_global_variable.detail.offers[i].stamps.freight.length; j++){
                            var selos_frete = cage_global_variable.detail.offers[i].stamps.freight[j]
                            selo_prime = (selos_frete.indexOf("PRIME") >=0?"SIM":"")
                        }
                    }
            }

        return selo_prime
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getSeloPrime", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getSEOProductPageID": {"customJS":function(){
try {
    //Pega o ID do produto
        var id_produto = ""
        if(typeof cage_global_variable.detail.product == "object"){
            id_produto = cage_global_variable.detail.product.id
        }
    
    //Verifica se é um EPar de busca organica. Se for, retorna o ID do produto
        if(typeof _satellite.getVar("getEpar") == "string" && _satellite.getVar("getEpar") != ""){
            var valida_busca_organica = false;
            
            switch(_satellite.getVar("getEpar")) {
                case "bo_00_00_go_buscaorganica":
                case "bo_00_00_bi_buscaorganica":
                case "bo_00_00_ya_buscaorganica":
                case "googleorganico":
                case "bo_00_00_uo_buscaorganico":
                case "bingorganico":
                    valida_busca_organica = true
                    break;                    
            }
                
            if(valida_busca_organica){
                return id_produto;            
            }
        }
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getSEOProductPageID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getSpecialTest": {"customJS":function(){
//Verifica se o usuário está acessando em ambiente de Produção
	try {
		/*/Verifica objeto MM
			var mmsite = window.mmsystem && mmsystem.site;
			if (mmsite && mmsite.getPageExperiences()) {
				//Lógica MM	
					var separators=":=;|,_".split(""),mmuse="",mmexp=mmsite.getPageExperiences(),c;for(c in mmexp){var el=[],vr=[],e;for(e in mmexp[c])v=mmexp[c][e],campaign=c,element=e,variant=v,el.push(element),vr.push(variant);mmuse+=0<mmuse.length?separators[3]:"";if(1<el.length&&1<vr.length){for(var mmelement="",i=0;i<el.length;i++)mmelement+=el[i]+separators[0]+vr[i],mmelement+=i<el.length-1?separators[5]:"";mmuse+=campaign+separators[4]+mmelement}else mmuse+=campaign+separators[4]+el[0]+separators[0]+vr[0]}
					for(var testes=mmuse.split("|"),listaExclusao="MC QA Dev Old Gap T0".split(" "),testes_adobe="",i=0;i<testes.length;i++){for(k=0;k<listaExclusao.length;k++){var lista=!0;if(0<=testes[i].indexOf(listaExclusao[k])){lista=!1;break}}if(lista)var testesColetados="Teste "+i+" : "+testes[i],testes_adobe=testes_adobe+(testes[i]+"|")}testes_adobe=testes_adobe.substring(0,testes_adobe.length-1);
					0

				
				//SHOP Teste Especial
					//Fora do Teste
						if(testes_adobe.indexOf("SODev_Cross_Zion,zion:foradoteste") >=0){
							return "Fora do Teste"
						}
					//Antigo Checkout
						else if(testes_adobe.indexOf("SODev_Cross_Zion,zion:legado") >=0){
							return "Versao Catalogo: Legado"
						}
					//Novo Checkout
						else if(testes_adobe.indexOf("SODev_Cross_Zion,zion:novo") >=0){
							return "Versao Catalogo: Zion"
						}
			}*/

		//Teste Especial via Plataforma - Simple Basket
			if(_satellite.readCookie("simplebasketab") == "new"){
				return "Versao Sacola: Simple Basket"
			}
			else if(_satellite.readCookie("simplebasketab") == "old"){
				return "Versao Sacola: Legada"
			}
			else if(_satellite.readCookie("simplebasketab") == "out"){
				return "Fora do Teste"
			}

		//Teste Especial via Plataforma - Busca Nanook
			else if(_satellite.readCookie("searchTestAB") == "new"){
				return "Versao Busca: Nanook"
			}
			else if(_satellite.readCookie("searchTestAB") == "old"){
				return "Versao Busca: Neemu"
			}
			else if(_satellite.readCookie("searchTestAB") == "out"){
				return "Versao Busca: Fora do Teste"
			}
	}catch(e){
		try{
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getSpecialTest", e);
		}
		catch(e){}
	}
},"storeLength":"pageview"},
    "getSProducts": {"customJS":function(){
try{
	//Verifica se está no Carrinho ou no Funil 
		if(_satellite.getVar("getQtdProdCart") > 0) {
			//Cria o sproducts
				var sProducts = "";
			
			//Popula o sproducts 
				for (var i = 0; i < cage_global_variable.detail.cart.lines.length; i++) {
					//ID - SKU - PREÇO - TIPO DE PRODUTO - QUANTIDADE - TESTE AB FRETE - TROCA DE SELLER

						var idProducts        	 = cage_global_variable.detail.cart.lines[i].productId
						var skuProducts       	 = cage_global_variable.detail.cart.lines[i].productSku
						var priceProducts     	 = cage_global_variable.detail.cart.lines[i].salesPrice
						var qtdProducts       	 = cage_global_variable.detail.cart.lines[i].quantity
						var conditionProducts 	 = cage_global_variable.detail.cart.lines[i].condition.toLowerCase()
						var b2wEntregas		 	 = ""
						var buyboxToken		  	 = ""
						var marketplace_infos 	 = ""
						var seller_infos 		 = ""
						var departamento_orms	 = ""
						var teste_ab_frete    	 = ""
						var troca_de_seller   	 = ""
						var nome_produto      	 = ""
						var preco_produto     	 = ""
						var condicao_produto  	 = ""
						var seguros_servicos  	 = ""

						//Nome Produto (sem virgula)
							nome_produto  = "|eVar25=" + cage_global_variable.detail.cart.lines[i].product.name.replace(/,/g, '').trim();
						//Nome Produto
							preco_produto = "|eVar80=" + priceProducts
						//Condição do Produto
							if (conditionProducts == "used") {
								conditionProducts = "Usado"
							}
							else if (conditionProducts == "new") {
								conditionProducts = "Novo"
							}
							condicao_produto = "|eVar159=" + conditionProducts
							
						try{

							// Verifica se é B2C ou Marketplace
								if (typeof cage_global_variable.detail.cart.lines[i].product.store == "object") {

									// eVar77
										var tipo_de_venda = "Marketplace"
									
									// Verfifica se é Seller ou C2C - eVar158
									// Caso CNPJ ou CPF inicie com '0', o primeiro dígito será descartado no momento de sua exibição
										if (cage_global_variable.detail.cart.lines[i].product.store.id.length >= 12 && cage_global_variable.detail.cart.lines[i].product.store.id.length <= 14) {
											var tipo_de_seller = "Seller 3P"
										}
										else if (cage_global_variable.detail.cart.lines[i].product.store.id.length >= 8 && cage_global_variable.detail.cart.lines[i].product.store.id.length <= 11) {
											var tipo_de_seller = "Seller C2C"
										}
										else {
											var tipo_de_seller = "Outros"
										}

									// B2W Entrega
										if (typeof cage_global_variable.detail.cart.lines[i].product.store.subscriptions == "object" && cage_global_variable.detail.cart.lines[i].product.store.subscriptions.length > 0) {
											for(var k=0; k < cage_global_variable.detail.cart.lines[i].product.store.subscriptions.length; k++) {
												if (cage_global_variable.detail.cart.lines[i].product.store.subscriptions[k].toLowerCase() == "b2wentregas") {
													b2wEntregas = "|eVar162=SIM"
													break
												}
											}
										}
										else {
											b2wEntregas = "|eVar162=NAO"
										}

								}
							// Se for B2C
								else {
									// eVar77
										var tipo_de_venda = "B2C"
									// eVar158
										var tipo_de_seller = "1P"
									// eVar162
									b2wEntregas = "|eVar162=NAO"
								}

								seller_infos = "|eVar158=" + tipo_de_seller

							//MKT e SELLERS
								var storeNameB2C = ""
								//ACOM
									if(_satellite.getVar("coreBrandName") == "ACOM"){
										storeNameB2C = "americanas.com"
									}
								//SUBA
									else if(_satellite.getVar("coreBrandName") == "SUBA"){
										storeNameB2C = "Submarino"
									}
								//SHOP
									else if(_satellite.getVar("coreBrandName") == "SHOP"){
										storeNameB2C = "Shoptime"
									}
								//SOUB
									else if(_satellite.getVar("coreBrandName") == "SOUB"){
										storeNameB2C = "Soubarato"
									}

								var nome_seller = (typeof cage_global_variable.detail.cart.lines[i].product.store == "object")?cage_global_variable.detail.cart.lines[i].product.store.name.toLowerCase().trim():storeNameB2C
							
								marketplace_infos    = "|eVar77=#" + tipo_de_venda + "#" + nome_seller
								departamento_orms    = "|eVar91="  + cage_global_variable.detail.cart.lines[i].product.department + "#" + cage_global_variable.detail.cart.lines[i].product.line + "#" + cage_global_variable.detail.cart.lines[i].product.subClass
								
								var id_seller      = (typeof cage_global_variable.detail.cart.lines[i].product.store == "object")?cage_global_variable.detail.cart.lines[i].product.store.id.trim():""								
								var mktp_id_seller = "|eVar150=" + id_seller;

							//Teste AB Frete
								var frete = _satellite.data.customVars.frete_info
								if(typeof _satellite.data.customVars.frete_info == "object" && typeof frete.retornoApi == "object" && typeof frete.retornoApi.detail.freight.options == "object"){
									//Itera opções de frete
										for(var j=0; j < frete.retornoApi.detail.freight.options.length; j++){
											//Itera produtos da entrega
												for(var l=0; l < frete.retornoApi.detail.freight.options[j].products.length; l++){
													//Verifica se é o produto certo
														if(frete.retornoApi.detail.freight.options[j].products[l].sku == skuProducts){
															//Verifica se o SKU do produto tem algum teste AB rodando
																if(typeof frete.retornoApi.detail.freight.options[j].products[l].experiment == "object"){
																	teste_ab_frete = "|eVar99=" + frete.retornoApi.detail.freight.options[j].products[l].experiment.id + "#" + frete.retornoApi.detail.freight.options[j].products[l].experiment.version + "#FIXO"
																}
														}
												}
										}
								}
							
							//Troca de seller
								var wa_mktp = _satellite.readCookie("wa")
								if(typeof wa_mktp == "string" && wa_mktp.indexOf('[{"p"') >=0 && typeof JSON.parse(wa_mktp) == "object" && JSON.parse(wa_mktp).length > 0){
									wa_mktp = JSON.parse(wa_mktp);
									troca_de_seller    = "|eVar131=Troca de Seller: Nao"									
									var tipo_item_add  = (typeof cage_global_variable.detail.cart.lines[i].product.store == "undefined")?"1P":"3P"
									var cnpj_seller    = (tipo_item_add == "3P")?cage_global_variable.detail.cart.lines[i].product.store.id:"B2W"
									
									//Verifica se produto já existe no array
										for(var s=0; s < wa_mktp.length; s++){											
											if(wa_mktp[s].p == idProducts && wa_mktp[s].s != cnpj_seller){
												var tipo_troca = ''
												var tipo_item_view = wa_mktp[s].t
												
												//1P > 3P
													if(tipo_item_view == "1P" && tipo_item_add == "3P") { tipo_troca = "1P > 3P" }
												//3P > 1P
													if(tipo_item_view == "3P" && tipo_item_add == "1P") { tipo_troca = "3P > 1P" }
												//3P > 3P
													if(tipo_item_view == "3P" && tipo_item_add == "3P") { tipo_troca = "3P > 3P" }

												troca_de_seller = "|eVar131=Troca de Seller: Sim - " + tipo_troca
											}
										}
								}
							
							//BuyBox Token
								buyboxToken = (typeof cage_global_variable.detail.cart.lines[i].additionalInfo == "object" && typeof cage_global_variable.detail.cart.lines[i].additionalInfo.buyboxToken == "string" && cage_global_variable.detail.cart.lines[i].additionalInfo.buyboxToken != "")?cage_global_variable.detail.cart.lines[i].additionalInfo.buyboxToken:""

								if(buyboxToken.indexOf("fallback") >=0){
									buyboxToken = "FallBack"
								}
								else if(buyboxToken.indexOf("smart") >=0){
									buyboxToken = "Disponivel"
								}
								else{
									buyboxToken = "Nao Disponivel"
								}
								
								buyboxToken = "|eVar121=" + buyboxToken
							
							//Seguros e Serviços 
								if(typeof cage_global_variable.detail.cart.lines[i].services == "object"){
									seguros_servicos = "|eVar138="
									for(var ss = 0; ss < cage_global_variable.detail.cart.lines[i].services.length; ss++){
										seguros_servicos += cage_global_variable.detail.cart.lines[i].services[ss].id + " + "
									}
									//Remove "+"
										seguros_servicos = seguros_servicos.substring(0, (seguros_servicos.length - 3));
								}
							
							//ACOM - Produto Mundo
								var tipo_produto_mundo = ''
								if(typeof cage_global_variable.detail.cart.lines[i].crossborder == "boolean"){
									tipo_produto_mundo = (cage_global_variable.detail.cart.lines[i].crossborder == true)?"Mundo":"BR"
								}
						}
						catch(e){						
							try{
								_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getSProducts", e);
							}
							catch(e){}
						}					

					//Gera o sProdutcs , separando os atributos com Virgula e inserindo o SKU do produto no eVar17
						//Exemplo: sProducts = ;123;1;100;;;321,
						//FILTRO DE ALTISSIMO VALOR: Cria sProducts apenas se o produto tiver um valor menor do que 45k
							if(priceProducts  < 45000){
								sProducts += ";" + idProducts + ";" + qtdProducts + ";" + priceProducts + ";;eVar17=" + skuProducts + marketplace_infos + departamento_orms + teste_ab_frete + buyboxToken + troca_de_seller + nome_produto + preco_produto + seguros_servicos + mktp_id_seller + seller_infos + condicao_produto + b2wEntregas + "|eVar166=" + idProducts + "|eVar195=" + tipo_produto_mundo + ","
							}
				}
			
			//Remove última vírgula
				sProducts = sProducts.substring(0, (sProducts.length - 1));
				return sProducts;
		}
}
catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getSProducts", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getStockWarning": {"customJS":function(){
try{
  //Testa se o prduto do seller vencedor do buybox está com estoque critico
  if(cage_global_variable.detail.offers[0].stockWarning != null){
    return "SIM"
  }
}
catch (e) {
	try {
		//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getStockWarning", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "getTermoBuscado": {"customJS":function(){
try {
	return cage_global_variable.detail.search.query
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getTermoBuscado", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getTermoBuscadoAutoSuggest": {"customJS":function(){
try {
	return cage_getParam("search_term")
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getTermoBuscadoAutoSuggest", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getTimeDomInteractive": {"customJS":function(){

try {
	//Tempo de carregamento de pagina
	var evento_dom_interactive = 0

	//Dom Interactive
	evento_dom_interactive = (window.top.performance.timing.domInteractive - window.top.performance.timing.navigationStart) / 1000

	//verifica erro < 100 ou > 0
	if (typeof evento_dom_interactive == "number" && evento_dom_interactive > 100 || evento_dom_interactive < 0) {
		evento_dom_interactive = ""
	}
	else {
		
		evento_dom_interactive = evento_dom_interactive.toFixed(1)
		
		s_wa.eVar72 = Math.round(evento_dom_interactive).toString();

		if (s_wa.events != undefined && s_wa.events != "") {
			s_wa.events += ",event75=" + evento_dom_interactive
		}
		else {
			s_wa.events = "event75=" + evento_dom_interactive
		}
	}
}
catch (ex) {
	try {
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getTimeDomInteractive", ex);
	} catch (ex) { }
}
},"storeLength":"pageview"},
    "getTimeDomReady": {"customJS":function(){
try {

	//Tempo de carregamento de pagina
	var evento_dom_ready = 0

	//Disponibiliza valores para preenchimento dos eventos de carregamento
	//Dom Ready	e Dom Interactive
	//Verifica existencia dos Objs	if (window.performance && window.performance.timing && window.performance.timing.navigationStart && window.performance.timing.domInteractive) {
	if (window.top.performance && window.top.performance.timing && window.top.performance.timing.navigationStart && window.top.performance.timing.domInteractive) {

		//Dom Ready
		var now = new Date().getTime();
		var page_load_time = now - window.top.performance.timing.navigationStart;
		var tempo = page_load_time / 1000

		//verifica erro < 100 ou > 0
		if (typeof parseFloat(tempo) == "number" && evento_dom_ready > 100 || evento_dom_ready < 0) {
			evento_dom_ready = ""
		}
		else {
			
			evento_dom_ready = tempo.toFixed(1)

			s_wa.eVar71 = Math.round(evento_dom_ready).toString()

			if (s_wa.events != undefined && s_wa.events != "") {
				s_wa.events += ",event74=" + evento_dom_ready
			}
			else {
				s_wa.events = "event74=" + evento_dom_ready
			}
		}
	}
}
catch (ex) {
	try {
		//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getTimeDomReady", ex);
	} catch (ex) { }
}
},"storeLength":"pageview"},
    "getTotalRating": {"customJS":function(){
//Avaliacao - Total
	try{
		if(typeof cage_global_variable.detail.product.rating == "object"){
			var total_rating = parseFloat(cage_global_variable.detail.product.rating.average).toFixed(1);
		}

		//Evento de quantidade de cookies
			if (typeof total_rating == "string") {
				//Adiciona mais um evento no objeto s_wa.events
					if (s_wa.events != undefined && s_wa.events != "") {
						s_wa.events += ",event25=" + total_rating
					}
				//Adiciona mais um evento no objeto s_wa.events
					else {
						s_wa.events = "event25=" + total_rating
					}
			}

	}catch (e) {
		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getTotalRating", e);
		} catch (e) {}
	}
},"storeLength":"pageview"},
    "getTVProducts": {"customJS":function(){
try{
	//Formato: id_produto|dia:mes:ano|hora_e_minuto
		var id_produto = cage_global_variable.detail.product.id;
        var time = new Date()
        var ano = time.getFullYear()
        var mes = time.getMonth() + 1 //jan = 0
        var dia = time.getDate()
        var hora = time.getHours()
        var minuto = time.getMinutes()
		
        return cage_global_variable.detail.product.id + "|" + dia + ":" + mes + ":" + ano + "|" + hora + ":" + minuto
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getTVProducts", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getTypePage": {"customJS":function(){
try {
	if (typeof cage_global_variable == "object" && typeof cage_global_variable.detail.page.dataLayer[0] == "object") {
		return cage_global_variable.detail.page.dataLayer[0].objTipoDePagina
	}
} catch (e) {}

},"storeLength":"pageview"},
    "getUnavailabeProduct": {"customJS":function(){
try {
	//Verifica disponibilidade do produto		
		if(cage_global_variable.detail.offers.length == 0){

			//Adiciona mais um evento no objeto s_wa.events
				if (s_wa.events != undefined && s_wa.events != "") {
					s_wa.events += ",event31"
				}
			//Adiciona mais um evento no objeto s_wa.events
				else {
					s_wa.events = "event31"
				}
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getUnavailabeProduct", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getURL": {"customJS":function(){
try {
	//Retorna o endereço da página
		return window.top.location.href
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getURL", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getURLParams": {"customJS":function(){
try{
    var protocol_host_path = window.top.location.protocol + "//" + window.top.location.hostname + window.top.location.pathname
    var url = window.top.location.href;

    return url.replace(protocol_host_path, "")
}catch(e){
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getURLParams", e);
}
},"storeLength":"pageview"},
    "getURLWithoutUTM": {"customJS":function(){
try {

	var url = new URL(_satellite.getVar("getURL"))

	// Verifica se url retorna parametros legados do app
	if (typeof cage_getParam("utm_medium") == "string" && cage_getParam("utm_medium") == "app") {

		// Log
		if(_satellite.getVar("enableLog") == "true") {
			console.log("WA: Remoção dos UTM's legados do App")
		}

		// Remove todos os utm's legados do app 
		url.searchParams.delete("utm_source")
		url.searchParams.delete("utm_medium")
		url.searchParams.delete("utm_campaign")
		url.searchParams.delete("utm_term")
		url.searchParams.delete("utm_content")

		// Retorna endereço da página sem utm's
		return url.href

	}

	// Se não existe parâmetro utm_medium, retorna endereço da página
	else {
		//Retorna o endereço da página
		return url.href
	}

} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "getURLWithoutUTM", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "getVerifRRIDeRBID": {"customJS":function(){
//Coleta Chave
try {
	//Verifica se possui o parametro
		if (typeof cage_getParam("rrid") == "string" || typeof cage_getParam("RRID") == "string" || typeof cage_getParam("RBID") == "string" || typeof cage_getParam("rbid") == "string") {
			//Faz a Leitura do parametro chave
			return "true"
		}
} catch (e) {
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "getVerifRRIDeRBID", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "getViewPFM": {"customJS":function(){
try{	
	if(typeof cage_global_variable_components.recomendacao == "object" && cage_global_variable_components.recomendacao.length > 0){
		var listrecom  = "";	
		var list1      = "";

		//Catalogo
			if(cage_global_variable_components.recomendacao_env == "Catalog"){
				var pagina_pfm = ''
					//Busca
						if(cage_global_variable_components.recomendacao[0].type.indexOf("search") >=0){
							pagina_pfm = "Busca"
						}
					//Home
						else if(cage_global_variable_components.recomendacao[0].type.indexOf("home") >=0){
							pagina_pfm = "Home"
						}
					//Produto
						else if(cage_global_variable_components.recomendacao[0].type.indexOf("item") >=0){
							pagina_pfm = "Produto"
						}
					//Categoria
						else if(cage_global_variable_components.recomendacao[0].type.indexOf("category") >=0){
							pagina_pfm = "Categoria"
						}
					//Minha Conta
						else if(_satellite.getVar("getHostName").indexOf("my-account") >=0 || _satellite.getVar("getHostName").indexOf("minhaconta") >=0){
							pagina_pfm = "MinhaConta"
						}
					//Outros
						else{
							pagina_pfm = "Outros"
						}
												
				//Itera recomendações
					var qtd_recs = cage_global_variable_components.recomendacao.length
					
					//Loop para recebimento de todas as recomendações
						for(var i = 0; i < qtd_recs; i++){ 																
							//Verifica se é o DataLayer da orfertas da tv (tem um padrão diferente)
								var tipo_recom = "Recomendacao"
								var nome 	   = cage_global_variable_components.recomendacao[i]['rule']
								//Retira nome da pagina
								if((nome.indexOf("_rr") >=0 || nome.indexOf(".rr") >=0) && nome.indexOf("-") >=0){
									nome = nome.split("-")[1]
								}

								//Posicao da vitrine na pagina
									var type = cage_global_variable_components.recomendacao[i].type
									var pos_vitrine = ""
										//Vitrines na pagina
											if(typeof type == "string" && type != "" && (type.indexOf(".rr") >=0 || type.indexOf(".banners") >=0)){
												pos_vitrine = type.split(".")[1]
											}
										//Vitrines na pagina (minha conta)
											else if(typeof type == "string" && type != "" && type.indexOf("minhaconta_rr") >=0){
												pos_vitrine = type.split("_")[2]
											}
										//Vitrine de Ads fica Recomendação
											else if(typeof type == "string" && type != "" && type.indexOf(".ads") >=0){
												pos_vitrine = "B2W-Ads"
											}
										//Vitrines em banners
											else{
												pos_vitrine = "-"
											}

									//Tratamento history
										if(pos_vitrine == "-" && cage_global_variable_components.recomendacao[i]['type'].indexOf("history") >=0){
											pos_vitrine = "rrHistory"
										}

							//Itera quantidade de produtos se a quantidade
								for(var j = 0; j < cage_global_variable_components.recomendacao[i].products.length; j++){ //Loop para recebimento de todos os produtos
									var itera_prods = j + 1
										
									//Tipo de PFM | Nome da pagina | Nome da Rec | Numero do item
										if(pos_vitrine != "B2W-Ads"){
											listrecom += "Recomendacao|" + pagina_pfm + "|" + nome + '|' + itera_prods + '|' + pos_vitrine + ','
										}
									//Vitrine de Ads fica Recomendação
										else{
											listrecom += "B2W-Ads|" + pagina_pfm + "|" + nome + '|' + itera_prods + '|' + pos_vitrine + ','
										}
								}
						}
															
					//Retira vírgula e adiciona list1
						if(listrecom !=''){
							//Retira vírgula do final
							list1 += listrecom.substring(0,(listrecom.length - 1)) 
						}
			}

		//CART
			else if(cage_global_variable_components.recomendacao_env == "Cart"){
				//Itera placements
					for(var i = 0; i < cage_global_variable_components.recomendacao.length; i++){
						//Itera itens
							for(var j = 0; j < cage_global_variable_components.recomendacao[i].recommendedProducts.length; j++){
								var position       = j + 1
								var placement 	   = i + 1
								var placement_name = (cage_global_variable_components.recomendacao[i].placement.indexOf("combo_vip") >=0)?"ComboVIP":"BoughtTogether"

								//Tipo de PFM | Nome da pagina | Nome da Rec | Numero do item
									listrecom += "Recomendacao|Carrinho|" + placement_name + "|" + position + "|rr" + placement + ","
							}
					}

				//Retira vírgula e adiciona list1
					if(listrecom !=''){
						//Retira vírgula do final
						list1 += listrecom.substring(0,(listrecom.length - 1)) 
					}
			}
	}
	return list1;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getViewPFM", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getViewPFMAds": {"customJS":function(){
try{	

	var cageGlobal = cage_global_variable_components, listads = list1 = context = pagina_ads = pfm = params = ""

	if(typeof cageGlobal.ads == "object"){		
		if(cageGlobal.ads.shelves.length > 0){
			if(!cageGlobal.ads.hasOwnProperty("source")){
				if(cageGlobal.ads.shelves[0].products[0].hasOwnProperty("querystring")){
					context = (cageGlobal.ads.shelves[0].products[0].querystring.indexOf("context") >= 0 &&
							  cageGlobal.ads.shelves[0].products[0].querystring.indexOf("&") >= 0) ?
							  cageGlobal.ads.shelves[0].products[0].querystring.split("&")[0].split("context=")[1] : ''
				}
			}
			else{
				for(var i = 0; i < cageGlobal.ads.shelves.length; i++){

					if(cageGlobal.ads.shelves[i].products.length > 0){
		
						pfm = cageGlobal.ads.shelves[i].products[0].pfm;
						params = cageGlobal.ads.shelves[i].products[0].params;
					}
				}
			}
		}

		
		if(context == ""){
			//Produto
				if(typeof pfm && typeof pfm.pfm_page == "string"){
					
					context = pfm.pfm_page
				}			
			//Zion	
				else if(params.context != ""){
					
					context = params.context
				}
		}

		//Página
			if(context != ""){
				//Busca
					if(context == "search"){
						pagina_ads = "Busca"
					}
				//Home
					else if(context == "home"){
						pagina_ads = "Home"
					}
				//Produto
					else if(context == "product"){
						pagina_ads = "Produto"
					}
				//Categoria
					else if(context == "category" || context == 'department'){
						pagina_ads = "Categoria"
					}
				//Outros
					else{
						pagina_ads = "Outros"
					}
			}
			else{
				pagina_ads = "Outros"
			}
			
			//Loop para recebimento de todos os produtos			
				var qtd_shelves = cage_global_variable_components.ads.shelves.length				

				for(var i = 0; i < qtd_shelves; i++){

					var products = cage_global_variable_components.ads.shelves[i].products

					if(products.length > 0){
						for(var x = 0; x < products.length; x++){

							var itera_prods = x + 1
							var nome_seller = queryString = ""

							

							if(products[x].hasOwnProperty("params")){
								nome_seller = products[x].params.sellerName 
							}
							else{

								queryString = decodeURI(products[x].querystring)

								if(queryString != ""){
									// Find url param.
										var params = queryString.split('&');
										for (var j = 0; j < params.length; j++) {
											if(params[j].indexOf("sellerName=") >=0){
												nome_seller = params[j].split("=")[1]
											}
										}
								}
							}
							
							
							//Tipo de PFM | Nome da pagina | Nome da Rec | Numero do item
								if(listads == undefined || listads == ""){
									listads = "B2W-Ads|" + pagina_ads + "|" + nome_seller + '|' + itera_prods + '|B2W-Ads,'
								}
								else{
									listads += "B2W-Ads|" + pagina_ads + "|" + nome_seller + '|' + itera_prods + '|B2W-Ads,'
								}
						}
					}
				}
													
			//Retira vírgula e adiciona list1				
				if(listads != ''){
					//Retira vírgula do final
					list1 += listads.substring(0,(listads.length - 1)) 
				}										
	}
	return list1;
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getViewPFMAds", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getViewRecomGA": {"customJS":function(){
try {
    if(typeof cage_global_variable_components.recomendacao == "object" && cage_global_variable_components.recomendacao.length > 0){

        //Catalogo
        if (cage_global_variable_components.recomendacao_env == "Catalog") {
            var pagina_pfm = ''
            //Busca
            if (cage_global_variable_components.recomendacao[0].type.indexOf("search") >= 0) {
                pagina_pfm = "Busca"
            }
            //Home
            else if (cage_global_variable_components.recomendacao[0].type.indexOf("home") >= 0) {
                pagina_pfm = "Home"
            }
            //Produto
            else if (cage_global_variable_components.recomendacao[0].type.indexOf("item") >= 0) {
                pagina_pfm = "Produto"
            }
            //Categoria
            else if (cage_global_variable_components.recomendacao[0].type.indexOf("category") >= 0 && _satellite.getVar("getPathname").indexOf("/lojista/") == -1) {
                pagina_pfm = "Categoria"
            }
            //Deal
            else if (_satellite.getVar("getPathname").indexOf("oferta-do-dia") >= 0) {
                pagina_pfm = "Deal"
            }
            //Hotsite
            else if (_satellite.getVar("getPathname").indexOf("estaticapop") >= 0 || _satellite.getVar("getPathname").indexOf("hotsite") >= 0 || _satellite.getVar("getPathname").indexOf("landingpage") >= 0) {
                pagina_pfm = "Hotsite"
            }
            //Lojista
            else if (_satellite.getVar("getPathname").indexOf("/lojista/") >= 0) {
                pagina_pfm = "Lojista"
            }
            //Outros
            else {
                pagina_pfm = "Outros"
            }

            //Itera recomendações
            var qtd_recs = cage_global_variable_components.recomendacao.length

            //Loop para recebimento de todas as recomendações
            for (var i = 0; i < qtd_recs; i++) {
                //Verifica se é o DataLayer da orfertas da tv (tem um padrão diferente)
                var nome = cage_global_variable_components.recomendacao[i]['rule']
                //Retira nome da pagina
                if ((nome.indexOf("_rr") >= 0 || nome.indexOf(".rr") >= 0) && nome.indexOf("-") >= 0) {
                    nome = nome.split("-")[1]
                }

                //Posicao da vitrine na pagina
                var type = cage_global_variable_components.recomendacao[i].type
                var pos_vitrine = (typeof type == "string" && type != "" && type.indexOf(".rr") >= 0) ? type.split(".")[1] : '-'

                //Tratamento history
                if (pos_vitrine == "-" && cage_global_variable_components.recomendacao[i]['type'].indexOf("history") >= 0) {
                    pos_vitrine = "rrHistory"
                }

                //Itera quantidade de produtos se a quantidade
                for (var j = 0; j < cage_global_variable_components.recomendacao[i].products.length; j++) { //Loop para recebimento de todos os produtos
                    var itera_prods = j + 1

                    // Adicionar itens na lista de impressão
                    ga('ec:addImpression', {
                        'id': cage_global_variable_components.recomendacao[i].products[j].id,
                        'list': "Recomendação",
                        'position': itera_prods,
                        'dimension6': pagina_pfm,
                        'dimension7': nome
                    });

                }
            }
        }

        //CART
        else if (cage_global_variable_components.recomendacao_env == "Cart") {
            //Itera placements
            for (var i = 0; i < cage_global_variable_components.recomendacao.length; i++) {
                //Itera itens
                for (var j = 0; j < cage_global_variable_components.recomendacao[i].recommendedProducts.length; j++) {
                    var position = j + 1
                    var placement = i + 1
                    var placement_name = (cage_global_variable_components.recomendacao[i].placement.indexOf("combo_vip") >= 0) ? "ComboVIP" : "BoughtTogether"

                    // Adicionar itens na lista de impressão
                    ga('ec:addImpression', {
                        'id': cage_global_variable_components.recomendacao[i].recommendedProducts[j].id,
                        'list': 'Recomendação',
                        'position': position,
                        'dimension6': 'Sacola',
                        'dimension7': 'BoughtTogether'
                    });

                }
            }
        }
    }
} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "getViewRecomGA", e);
    }
    catch (e) { }
}
},"storeLength":"pageview"},
    "getViewSpace": {"customJS":function(){
try{	
	if(typeof cage_global_variable_components == "object" && typeof cage_global_variable_components.space == "object"){
        //Itera objetos spaceLoad
            for (var property in cage_global_variable_components.space.publish){
                if (cage_global_variable_components.space.publish.hasOwnProperty(property)) {
                    var publicacao = cage_global_variable_components.space.publish[property]  
                    //Captura info de publicação segmentada
                        if(typeof publicacao == "object" && typeof publicacao.result == "object" && typeof publicacao.result.segmentation_match == "string" && publicacao.result.segmentation_match != ""){
                            //Se a variável de teste ainda não tiver sido criada
                                if(typeof s_wa.prop21 == "undefined" || s_wa.prop21 == ""){
                                    s_wa.prop21 = publicacao.result.segmentation_match
                                }
                                else{
                                    s_wa.prop21 += "," + publicacao.result.segmentation_match
                                }
                        }                        
                }
            }
	}	
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getViewSpace", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "getWindowTopHref": {"customJS":function(){
try{
  	return window.top.location.href
}catch(e){
	_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","getWindowTopHref", e);
}
},"storeLength":"pageview"},
    "Metrics-experiments": {"customJS":function(){
try{
  function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
	}
  var sendBeacon = function (url, data) {
    var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url);
    xhr.setRequestHeader('Accept', '*/*');
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    xhr.responseType = 'text';
    xhr.send(data);
    return true;
  }
  var getSaikaURL = function(){
    return _satellite.getVar("getSaikaURL") + 'experiment/exposure' + jsonToQueryString(_satellite.getVar("getContextData"));
  }
  // sendBeacon = navigator.sendBeacon.bind(navigator);
  document.addEventListener('experiment:exposure', function(event) {
    var url = getSaikaURL();
    var params = {
      id: _satellite.getVar("coreGenerateEventId"),
      brand: 'ACOM',
      references:{},
			source:"EXPERIMENT-EXPOSURE",
      data: event.detail.experiment
    }
  	sendBeacon(url, JSON.stringify(params));
	});
  
}catch(e){  console.log('saika experiments erro', e);}
},"storeLength":"pageview"},
    "Metrics-recommendation": {"customJS":function(){
try{
  function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
	}
  var sendBeacon = function (url, data) {
    var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url);
    xhr.setRequestHeader('Accept', '*/*');
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    xhr.responseType = 'text';
    xhr.send(data);
    return true;
  }
  var getSaikaURL = function(){
    return _satellite.getVar("getSaikaURL") + 'recommendation/load' + jsonToQueryString(_satellite.getVar("getContextData"));
  }
  var getShelveProducts = function(products){
    return products.map(function(product){
      return {
        id: product.id
      }
    })
  };
  var getShelves = function(shelves){
    return shelves.map(function(item){
      return {
        type: item.type,
        products: getShelveProducts(item.products)
      }
    })
  };
  // sendBeacon = navigator.sendBeacon.bind(navigator);
  document.addEventListener('recommendation:load', function(event) {
    var url = getSaikaURL();
    var navigation = event.detail.navigation;
    var shelves = event.detail.shelves;
    var pathname = (navigation.location) ? navigation.location.pathname : navigation.pathname;

    var data = {
      pathname: pathname,
      shelves: getShelves(event.detail.shelves.shelves),
      
    };
    var params = {
      id: _satellite.getVar("coreGenerateEventId"),
      brand: 'ACOM',
      references:{},
			source:"RECOMMENDATION-LOAD",
      data: data
    }
  	sendBeacon(url, JSON.stringify(params));
	});
  
}catch(e){  console.log('saika recommendation erro', e);}
},"storeLength":"pageview"},
    "pageCheckoutBasketAdobe": {"customJS":function(){
try {
    //Quantidade de produtos + Valor da Sacola
        s_wa.eVar86 = _satellite.getVar("getQtdProdCart");
        s_wa.eVar87 = _satellite.getVar("getCheckoutAmount");

    //Products
        s_wa.products = _satellite.getVar("getSProducts");

    //App ID
        s_wa.eVar48 = _satellite.getVar("getAppId")

    //Cart ID
        s_wa.eVar128 = _satellite.getVar("getCartID")
    
    //Clicks Checkout
        _satellite.getVar("getCheckoutClick")

    //Teste AB Sacola
        //s_wa.eVar44    = "Versao Sacola: Simple Basket"

    //Eventos
        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",scView"
            }

    //Adiciona mais um evento no objeto s_wa.events
        else {
            s_wa.events = "scView"
        }
    
    //Pegue na loja
        _satellite.getVar("getPickUpInStore");
        _satellite.getVar("getPickUpInStoreConflict");

    //Etapa: Carrinho assíncrona (Só dispara se tiver produto na sacola)
        if (_satellite.getVar("getQtdProdCart") > 0) {
            s_wa.events += ",scAdd,scOpen"

            //Eventos	
            try {
                //Valores
                var amount = '0'
                try {
                    if (_satellite.getVar("getCheckoutAmount").indexOf("|") >= 0) {
                        amount = _satellite.getVar("getCheckoutAmount").split('|')[0]
                    }
                } catch (e) { }

                s_wa.events += ",event100=" + _satellite.getVar("getQtdProdCart") + ",event101=" + amount
            } catch (e) { }
        }
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageCheckoutBasketAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageCheckoutBasketGA": {"customJS":function(){
try {

    // Produto
    if (_satellite.getVar("getQtdProdCart") > 0) {

        // Add Product
        _satellite.getVar("addProductGA")

        // Ação Checkout
        ga('ec:setAction', 'checkout', {
            'step': 1
        });
        
    }

} catch (e) {
    try {
        // Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageCheckoutBasketGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageCheckoutBasketRecomAdobe": {"customJS":function(){
try {
    //Regra default
    var regra = "BoughtTogether"

    //Produto
    var produto = ""
    //Produto já disponível - NOK
    if (typeof _satellite.data.customVars.recom_carrinho.productAdded.id == "string") {
        produto = _satellite.data.customVars.recom_carrinho.productAdded.id
    }
    //Itera SKUs para achar o produto
    else if (typeof _satellite.data.customVars.recom_carrinho.productAdded.sku == "string" && typeof _satellite.data.customVars.recom_carrinho.recommendation == "object" && _satellite.data.customVars.recom_carrinho.recommendation.placements[0].recommendedProducts.length > 0) {
        var sku = _satellite.data.customVars.recom_carrinho.productAdded.sku

        //Itera placements
        for (var i = 0; i < _satellite.data.customVars.recom_carrinho.recommendation.placements.length; i++) {
            //Itera produtos do placement										
            for (var j = 0; j < _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts.length; j++) {
                //Varre array de produtos para achar o ID
                if (_satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].attributes.sku[0] == sku) {
                    produto = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].id
                    //Verifica se é combovip
                    if (_satellite.data.customVars.recom_carrinho.recommendation.placements[i].placement.indexOf("combo_vip") >= 0) {
                        regra = "ComboVIP"
                    }
                }
            }
        }
    }

    //Criar objeto com variáveis do disparo
    var omni = {
        link_o: "Sacola:Recom",
        products: ";" + produto + ";1;;;",
        eVar74: "Recomendacao|Carrinho|" + regra + "|1|rr1",
        eVar119: "Mecanismo Vitrine|Recomendação sem ads|Rich Relevance|" + regra + "|Carrinho|1|rr1",
        events: 'event73'
    }
    //Dispara via CustomLink
    WA_linkP(omni);

} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageCheckoutBasketRecomAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageCheckoutBasketRecomGA": {"customJS":function(){
try {

    //Produto
    var productPlacement = ""
    var productId = ""
    var productName = ""
    var productBrand = ""
    var productPrice = ""
    var productSKU = ""

    //Produto já disponível - NOK
    if (typeof _satellite.data.customVars.recom_carrinho.productAdded.id == "string") {
        productId = _satellite.data.customVars.recom_carrinho.productAdded.id
    }
    //Itera SKUs para achar o produto
    else if (typeof _satellite.data.customVars.recom_carrinho.productAdded.sku == "string" && typeof _satellite.data.customVars.recom_carrinho.recommendation == "object" && _satellite.data.customVars.recom_carrinho.recommendation.placements[0].recommendedProducts.length > 0) {
        var sku = _satellite.data.customVars.recom_carrinho.productAdded.sku

        //Itera placements
        for (var i = 0; i < _satellite.data.customVars.recom_carrinho.recommendation.placements.length; i++) {
            //Itera produtos do placement										
            for (var j = 0; j < _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts.length; j++) {
                productPlacement = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].strategyMessage
                //Varre array de produtos para achar o ID
                if (_satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].attributes.sku[0] == sku) {
                    productId = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].id
                    productName = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].name
                    productBrand = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].brand
                    productPrice = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].priceCents / 100
                    productSKU = _satellite.data.customVars.recom_carrinho.recommendation.placements[i].recommendedProducts[j].regionalProductSku
                    ga('ec:addProduct', {
                        'id': productId,
                        'name': productName,
                        'brand': productBrand,
                        'price': productPrice,
                        'variant': productSKU
                    });
                }
            }
        }
    }

    ga('ec:setAction', 'add');
    ga("send", "event", "Recomendação Carrinho", "addToCart");

} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageCheckoutBasketRecomGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageCheckoutPaymentAdobe": {"customJS":function(){
try {
    //Quantidade de produtos + Valor da Sacola
        s_wa.eVar86 = _satellite.getVar("getQtdProdCart");
        s_wa.eVar87 = _satellite.getVar("getCheckoutAmount");

    //Products
        s_wa.products = _satellite.getVar("getSProducts");

    //App ID
        s_wa.eVar48 = _satellite.getVar("getAppId")

    //Meios de pagamento disponíveis
        s_wa.prop39 = _satellite.getVar("getPaymentOptionList")

    //Cart ID
        s_wa.eVar128 = _satellite.getVar("getCartID")

    //Formulario - Meio pagamento
        s_wa.eVar125 = "Form: PGTO - credit-card"
        //Seta novo meio de pgto na customVar
            _satellite.data.customVars['paymentTypeSelected'] = "credit-card"
            
    // Erro Frete
        s_wa.eVar165 = _satellite.getVar("getFreightErrorMessagePayment")

    // Fluxo Finance Cliente POK
        _satellite.getVar("getFinanceFlowPOK")
    
    //Fluxo de cadastro de cel no WPP
        _satellite.getVar("pgtoPhoneRegister")
    
    //Clicks Checkout
        _satellite.getVar("getCheckoutClick")
    
    //AmeType User
        s_wa.eVar15 = _satellite.getVar("getAmeTypeUser")

    // Fluxo Finance Cliente POK
        //_satellite.getVar("pageFinanceProposalAdobe")

    //Eventos
    //Pagina
        if (s_wa.events != undefined && s_wa.events != "") {
            s_wa.events += ",scCheckout,event129"
        }
        else {
            s_wa.events = "scCheckout,event129"
        }

        //Adiciona evento Pegue na loja hoje se estiver habilitado
            _satellite.getVar("getPickUpInStore");

    //Checkout 
        try {
            //Valores
            var amount = '0'
            try {
                if (_satellite.getVar("getCheckoutAmount").indexOf("|") >= 0) {
                    amount = _satellite.getVar("getCheckoutAmount").split('|')[0]
                }
            } catch (e) { }

            s_wa.events += ",event100=" + _satellite.getVar("getQtdProdCart") + ",event101=" + amount
        } catch (e) { }

    //1-Click
        if (_satellite.getVar("setPageName").indexOf("CompraRapida") >= 0) {
            s_wa.events += ",event44";
        }
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageCheckoutPagamentoAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageCheckoutPaymentGA": {"customJS":function(){
try {

    // Add Product
    _satellite.getVar("addProductGA")

    //Ação Checkout
    ga('ec:setAction', 'checkout', {
        'step': 2,
    });

} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageCheckoutPaymentGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageDepartmentAdobe": {"customJS":function(){
try {
    //Logica Departamento
        //Dimensões
            s_wa.eVar49 = _satellite.getVar("getDepartmentLineSubline")
            s_wa.eVar79 = _satellite.getVar("getDepartmentName")
            s_wa.products = ";Pagina:Departamento;;;;"

    // Interação com Filtros
        // Eventos de click em filtros e categorias
            _satellite.getVar("setCookiesFilterInteractions")
        // Coleta de informações setadas no cache
            _satellite.getVar("getCookiesFilterInteractions")

    //Eventos        
        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",event66"
            }
        //Adiciona mais um evento no objeto s_wa.events
            else {
                s_wa.events = "event66"
            }
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageDepartmentAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageDepartmentGA": {"customJS":function(){
try {
    
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageDepartmentGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageFinanceProposalAdobe": {"customJS":function(){
try {

    s_wa.eVar125 = "Form: Cadastro - Finance Proposta Completa"

    //Eventos
    //Adiciona mais um evento no objeto s_wa.events
    if (s_wa.events != undefined && s_wa.events != "") {
        s_wa.events += ",event68, event129"
    }
    //Adiciona mais um evento no objeto s_wa.events
    else {
        s_wa.events = "event68, event129"
    }

    document.addEventListener("form:field", function (e) {
        try {
            var omni = {}, erro = e.detail.errors[0]

            omni.eVar125 = "Form: Cadastro - Finance Proposta Completa"

            //Pega a descrição do erro caso haja
            for (var key in erro) {
                if (erro.hasOwnProperty(key)) {

                    //Pega a descrição do campo preenchido no momento
                    if (key == e.detail.field) {
                        omni.prop11 = key + ": " + erro[key]
                    }
                    omni.events = "event131"
                }
            }

            //Pega o nome do campo
            omni.prop12 = e.detail.field

            // Define evento a ser enviado
            // Se campo for preenchido event177, se não event188
            event = e.detail.value  ?  'event177' : 'event188' 

            //Adiciona mais um evento no objeto s_wa.events
            if (omni.events != undefined && s_wa.events != "") {
                omni.events += "," + event
            }
            //Adiciona um evento no objeto s_wa.events caso vazio
            else {
                omni.events = event
            }

            omni.linkP = "Cartão: Validação do Formulario Finance"
            WA_linkP(omni)
        }
        catch (ex) {
            try {
                //Erro JS
                _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElement", "pageFinanceProposalAdobe", ex);
            }
            catch (ex) { }
        }
    });

} catch (ex) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElement", "pageFinanceProposalAdobe", ex);
    } catch (ex) { }
}
},"storeLength":"pageview"},
    "pageFinanceProposalThanksAdobe": {"customJS":function(){
try {

    s_wa.eVar125 = "Form: Cadastro - Finance Proposta Completa"
    var epar = ""
		
  	if(typeof _satellite.readCookie("b2wEPar") == "string"){
				//Faz a Leitura do cookie b2wEpar
					epar =  _satellite.readCookie("b2wEPar")
			}
      else if(typeof _satellite.readCookie("b2wEPar") == "string"){
				//Faz a Leitura do cookie b2wEpar
					epar = _satellite.readCookie("b2wEPar")
			}
	   	//Verifica se possui o parametro epar
			else if(typeof cage_getParam("epar") == "string"){
				//Faz a Leitura do cookie b2wEpar
					epar = cage_getParam("epar")
			}
  	
    if(epar == "afilio"){
      _satellite.track("cage_page_finance_cartao_thankyou_afilio")
    }

    //Eventos
        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",event40, event130"
            }
        //Adiciona mais um evento no objeto s_wa.events
            else {
                s_wa.events = "event40, event130"
            }
    
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElement", "pageFinanceProposalThanksAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageGlobalAdobe": {"customJS":function(){
try{
	//Marca
		s_wa.eVar1    = _satellite.getVar("coreBrandName")

	//EPar - Midia
		s_wa.campaign = _satellite.getVar("getEpar")
		s_wa.eVar68   = _satellite.getVar("getEpar")
    
  // Facebook Login Header
    _satellite.getVar("getFacebookLoginHeader")

	//wa_multiChannel
		//_satellite.getVar("setMCHLogic")
		
	//Página		
		s_wa.channel  = _satellite.getVar("getChannel") 		
		s_wa.pageName = _satellite.getVar("setPageName")
		s_wa.eVar12   = "D=pageName"
		s_wa.eVar14   = _satellite.getVar("getURL")
		s_wa.prop14   = "D=v14"
		s_wa.eVar151  = _satellite.getVar("getPathAndParams")
		s_wa.eVar152  = _satellite.getVar("getPathname")
		s_wa.eVar153  = _satellite.getVar("getReferrer")
		s_wa.eVar154  = _satellite.getVar("getURLParams")
		s_wa.eVar155  = "D=v151"

	//TimeStamp
		s_wa.eVar7    = _satellite.getVar("getDayMonthYear")
		s_wa.eVar8    = _satellite.getVar("getHourMinutes")
    
  //Tempo de Carregamento    
    	_satellite.getVar("getTimeDomReady")
		_satellite.getVar("getTimeDomInteractive")
		
	//Identificação / Audiencia
		s_wa.eVar39   = _satellite.getVar("getEmail")
		s_wa.eVar13   = _satellite.getVar("getB2W-UID")	
		s_wa.eVar126  = _satellite.getVar("getB2W-PID")
		s_wa.eVar127  = _satellite.getVar("getB2W-SID")
		s_wa.prop64   = _satellite.getVar("getDMPCookie")
		s_wa.eVar194  = _satellite.getVar("getCriteoUserGraph")
		s_wa.eVar113  = "D=c64"
		
	//Evento 15
		_satellite.getVar("getIdentificationEvent")

	//Ambiente
		s_wa.prop16   = _satellite.getVar("getAmbienteTI")

	//Parâmetros URL
		s_wa.eVar2 	  = _satellite.getVar("getMcem")
		s_wa.eVar24   = _satellite.getVar("getChave")
		s_wa.eVar61   = _satellite.getVar("getOpn")
		s_wa.eVar63   = _satellite.getVar("getFranq")
		s_wa.eVar37   = _satellite.getVar("getDCSext")
		s_wa.eVar60   = _satellite.getVar("getRMID")
		s_wa.eVar85   = _satellite.getVar("getGclid")
		s_wa.eVar120  = _satellite.getVar("getVerifRRIDeRBID")
		s_wa.eVar129  = _satellite.getVar("getClickSpace")
		s_wa.eVar133  = _satellite.getVar("getAfpid") //integração afiliados
		s_wa.eVar148  = _satellite.getVar("getKclickId") //integração kenshoo

	//Cookie BuyBox
		s_wa.prop18   = _satellite.getVar("getB2WRegion")
	
	//PFM Lista Curada, Lista automática e Search Grid
		_satellite.getVar("coreComponentsListaCurada")
		_satellite.getVar("coreComponentsSearchGrid")

	//Tipo de Página
		s_wa.eVar35      = _satellite.getVar("getPageType")
		s_wa.prop35      = "D=v35"

	//Versao do Site e APPID
		s_wa.eVar52      = _satellite.getVar("setVersaoDoSite")
		s_wa.prop52      = "D=v52"

	//B2W Channel
		s_wa.eVar94 = _satellite.getVar("getSalesChannel")

	//DTM - Tipo de Implementação
		s_wa.eVar114 = "DTM: Cage"

	//Device - DMP
		s_wa.eVar90  = _satellite.getVar("getDetailsDevice")

	//Cookies
		_satellite.getVar("getCookies")		

	//Verificação de iFrame
		_satellite.getVar("getIframeVerification")

	//Verificação de conteúdo nao encontrado
		_satellite.getVar("getContentNotFound")

	//Coleta genérica de modal
		_satellite.getVar("getModalInteraction")


}catch(e){
	//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","pageGlobalAdobe", e);
}
},"storeLength":"pageview"},
    "pageGlobalGA": {"customJS":function(){
try {

    //Logs
    if (_satellite.getVar("enableLog") == "true") {
        console.log("WA: Google Analytics - DataElement - Page Global GA")
    }

    var B2WUID = _satellite.getVar("getB2W-UID");

    // Lógica para quebrar Epares em Utm's 
    _satellite.getVar("getGAEparLogic");
    _satellite.getVar("getGAKenshooID");    

    // PFM Lista Curada, Lista Automática e Search Grid
    //_satellite.getVar("getPFMv2ViewListaCuradaGA");
    //_satellite.getVar("getPFMv2ViewSearchGridGA")

    // Set Midia e Identificacao
    ga('set', {
        'userId': B2WUID,
        'dimension1': B2WUID,
        'dimension3': _satellite.getVar("getURL"),
        'dimension16': _satellite.getVar("getDMPCookie"),
        'dimension15': _satellite.getVar("getPageType"),
        'dimension22': _satellite.getVar("getChave"),
    });

} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "Core - Funções Globais: pageGlobalGA", e);
    } catch (e) {
        console.log(e);
    }
}
},"storeLength":"pageview"},
    "pageHomeAdobe": {"customJS":function(){
try {
  
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageHomeAnalytics", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageHomeGA": {"customJS":function(){
try {
	
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageHomeGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageLineAdobe": {"customJS":function(){
try {
    //Logica Linha
        //Dimensões
            s_wa.eVar49 = _satellite.getVar("getDepartmentLineSubline")
            s_wa.eVar79 = _satellite.getVar("getDepartmentName")
            s_wa.products = ";Pagina:Linha;;;;"

    // Interação com Filtros
        // Eventos de click em filtros e categorias
            _satellite.getVar("setCookiesFilterInteractions")
        // Coleta de informações setadas no cache
            _satellite.getVar("getCookiesFilterInteractions")

    //Eventos           
        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",event66"
            }
        //Adiciona mais um evento no objeto s_wa.events
            else {
                s_wa.events = "event66"
            }
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElement", "pageLineAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageLineGA": {"customJS":function(){
try {
    
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElement", "pageLineGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageMoreOffersAdobe": {"customJS":function(){
try{
	// Logica Mais Ofertas
        // Dimensões
        
            // Aguarda evento de click para identificar a aba ativa
                _satellite.getVar("getActiveTabOffers")

            //Eventos
                // Evento 151 para offers:view new
                // Adiciona mais um evento no objeto s_wa.events
                    if (s_wa.events != undefined && s_wa.events != "") {
                        s_wa.events += ",event151"
                    }
                // Adiciona mais um evento no objeto s_wa.events
                    else {
                        s_wa.events = "event151"
                    }
            
}catch(e){
	try{
		// Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","pageProductAdobe", e);
	}catch(e){}
}
},"storeLength":"pageview"},
    "pageMyAccountHomeAdobe": {"customJS":function(){
try {
    if(_satellite.getVar("enableLog") == "true"){
        console.log("WA: Minha Conta - Home Load")
    }

    //Purchase Load Infos
        _satellite.getVar("getPurchaseLoadInfos")

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageMyAccountHomeAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageMyAccountHomeGA": {"customJS":function(){
try {

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageMyAccountHomeGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageMySalesAdobe": {"customJS":function(){
try {

    // Inicializadores
        var pageName = _satellite.getVar("getCagePageName");
        
    // Listeners
        // Aguarda evento de confirmação de cadastro
            _satellite.getVar("getC2CRegistration")

    if (pageName == "MinhasVendas:Cadastro") {
        //Eventos
      			// Evento 154
            // Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",event154"
            }
        // Adiciona mais um evento no objeto s_wa.events
            else {
                s_wa.events = "event154"
            }
    }

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageMySalesAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageMySalesGA": {"customJS":function(){
try {
    //Logica
  
} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageMySalesGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageProductAdobe": {"customJS":function(){
try{
	//Logica Produtos
		//Dimensões
			//SProducts
				s_wa.products = _satellite.getVar("Products")
				
			//Nome Prod
				s_wa.prop25   = _satellite.getVar("getProductMostVisited")

			//Valor do Produto
				_satellite.getVar("getProductPagePrice")
			
			//ID Produto em prop para Busca Organica
				s_wa.prop26   = _satellite.getVar("getSEOProductPageID")

			//ID Produto PROP
				s_wa.prop36   = _satellite.getVar("getProductPageID")
				
			//Departamento e Linhas
				s_wa.eVar49   = _satellite.getVar("getDepartmentLineSubline")
				s_wa.eVar79   = _satellite.getVar("getDepartmentName")
			
			//Busca Autosuggest
				s_wa.eVar19   = _satellite.getVar("getTermoBuscadoAutoSuggest")
				s_wa.prop19   = "D=v19"

			//BuyBox Token
				s_wa.eVar144  = _satellite.getVar("getProductBuyBoxTokenID")  

			//Código FIPE do produto
				s_wa.eVar182 = _satellite.getVar("getProductInGarage")

			//Coleta se o produto tem a opção de pegue na loja hoje
				_satellite.getVar("getProductPickUpInStore")
    
			//Pega quantidade de sellers e atribui a eVar175 e event179
				_satellite.getVar("getSellersQtd")
			
			//Flag para saber se o produto do seller vencedor da buybox está em estoque critico
				s_wa.eVar176 = _satellite.getVar("getStockWarning")  
      
			//Marketplace				
				s_wa.prop22   = _satellite.getVar("getIDMarketPlaceC1P")		
				s_wa.prop58   = _satellite.getVar("getPartnersInfos")
				s_wa.prop71   = _satellite.getVar("getIDMarketPlace")				
				s_wa.eVar76   = _satellite.getVar("getProductType")
				s_wa.eVar82   = _satellite.getVar("getProductAvailability")
				s_wa.eVar95   = _satellite.getVar("getIDMarketPlaceBuyBox")
				s_wa.eVar132  = _satellite.getVar("getIDMarketPlaceBuyBoxC1P")

				//Seller Box com preço melhor do que o do Buy Box
					_satellite.getVar("getSellerBoxBestPrice")
				
				//Troca de seller
					_satellite.getVar("setInfosToCheckout")

			// Condições disponíveis do produto (Novo e/ou Usado)
				s_wa.eVar157  = _satellite.getVar("getProductAvailabilityC2C")

			// Tipo de sellers disponíveis (1P e/ou Seller 3P e/ou Seller C2C)
				s_wa.eVar156  = _satellite.getVar("getProductTypeSeller")

			// Condição do produto ganhador do BuyBox (Novo ou Usado)
				s_wa.eVar161  = _satellite.getVar("getProductConditionBuyBox")

			// Tipo de seller ganhador do BuyBox (1P ou Seller 3P ou Seller C2C)
				s_wa.eVar160  = _satellite.getVar("getProductTypeSellerBuyBox")

			//Selo Prime
				s_wa.eVar137  = _satellite.getVar("getSeloPrime")
			
			// Manuais do produto
				s_wa.eVar999  = _satellite.getVar("getProductManuals");

			//Pegue na Loja
				_satellite.getVar("getPickUpStoreInteractions")
			
			//PFM					
				//Dimensão
					_satellite.getVar("getClickPFMDimension")
					
				// Teste AB Recom - Scroll
					//_satellite.getVar("getABTestRecom")
				
				//PFM v2
					s_wa.eVar119 = _satellite.getVar("getPFMv2Click")
			
			//Caracterisitca pagina e produto
				s_wa.eVar134 = _satellite.getVar("getProductAttributes")
				s_wa.eVar135 = _satellite.getVar("getProductPageAttributes")
				
			//Produto Indisponivel
				_satellite.getVar("getUnavailabeProduct")
			
			//Parcelamento
				_satellite.getVar("getPaymentOptionInstallments")

			//Lista de condição de pagamento
				_satellite.getVar("getPaymentConditionsList")

			//Teste AB - Submarino - Clique no link ancora do Autor
				_satellite.getVar("getABTestAuthorClick")
				
			//Produto com altíssimo valor
				_satellite.getVar("getHighValueProduct")
				
			//Rating
				s_wa.eVar21 = _satellite.getVar("getRatingValues")
				_satellite.getVar("getTotalRating")
			
			// Interação com Filtros
				//Eventos de click em filtros e categorias
					_satellite.getVar("setCookiesFilterInteractions")
				//Interação com o modal
					_satellite.getVar("getProductModalFilterInfos")
					
			// Perguntas e Respostas
				_satellite.getVar("getQuestionsAndAnswers")

		//Eventos
			//Evento 73 para PFM Click
				//Adiciona mais um evento no objeto s_wa.events
					if (s_wa.events != undefined && s_wa.events != "") {
						s_wa.events += ",prodView,event55,event67,event73"
					}
				//Adiciona mais um evento no objeto s_wa.events
					else {
						s_wa.events = "prodView,event55,event67,event73"
					}
		
}catch(e){
	try{
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","pageProductAdobe", e);
	}catch(e){}
}
},"storeLength":"pageview"},
    "pageProductGA": {"customJS":function(){
try {
    var dep = _satellite.getVar("getDepartmentLineSubline")
    dep = (typeof dep == "string" && dep != "" && dep.indexOf("|") >=0 && dep != "||")?dep.split("|")[0]:""

    ga('ec:addProduct', {
        'id': _satellite.getVar("getProductPageID"),
        'name': _satellite.getVar("getProductMostVisited"),
        'category': dep,
        'brand': _satellite.getVar("getProductBrand"),
        'variant': _satellite.getVar("getProductSKU")
    });

    ga('ec:setAction', 'detail');
    
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageProductGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageProductReview": {"customJS":function(){
try {
    //Logica Review Produto
        //Logs
            if(_satellite.getVar("enableLog") == "true"){
                console.log("WA: DataElement - Analytics - Review de Produto")
            }
        
        //Disparo de review
            document.addEventListener("review:submitReview:success",function(e){
                
                //Criar objeto com variáveis do disparo
					var omni = {
                        link_o   : "AvaliacaoDeProdutos",
                        products : _satellite.getVar("Products"),
						eVar13   : _satellite.getVar("getB2W-UID"),						
						events   : 'event175'
                    }

                    if(_satellite.data.customVars['setReviewProduto'] == "false"){
                        WA_linkP(omni);	
                        _satellite.data.customVars['setReviewProduto'] = "true"
                    }				    
            })

} catch (e) {
    try {
        //Erro JS
            _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElement", "pageProductReview", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageSearchAdobe": {"customJS":function(){
try {
    //Logica Busca
        //Dimensões
            s_wa.eVar19 = _satellite.getVar("getTermoBuscado")
            s_wa.prop19 = "D=v19"
            s_wa.eVar20 = _satellite.getVar("getQuantResultBusca")
            s_wa.prop20 = "D=v20"
            s_wa.eVar98 = _satellite.getVar("getOrderBy")
            s_wa.products = ";Pagina:Busca;;;;"

        //Coleta lista de categorias na busca
            s_wa.eVar181 = _satellite.getVar("getCategoryList")

    //Busca sem resultado
        _satellite.getVar("getSearchNoResults")

    // Interação com Filtros
        // Eventos de click em filtros e categorias
            _satellite.getVar("setCookiesFilterInteractions")
        // Coleta de informações setadas no cache
            _satellite.getVar("getCookiesFilterInteractions")
    
    //Evento você quis dizer
        _satellite.getVar("getDidYouMean")    
    
    //Busca - DataFeed
        s_wa.eVar188 = _satellite.getVar("getSearchAggregations")
        s_wa.eVar189 = _satellite.getVar("getSearchProductList")
        s_wa.eVar190 = _satellite.getVar("getSearchDidYouMean")
        s_wa.eVar191 = _satellite.getVar("getSearchLimit")
        s_wa.eVar192 = _satellite.getVar("getSearchOffset")
        s_wa.eVar193 = _satellite.getVar("getSearchOrderBy")

        _satellite.getVar("getSearchDidYouMeanNotUsed")

    //Eventos
        //Adiciona mais um evento no objeto s_wa.events
            if (s_wa.events != undefined && s_wa.events != "") {
                s_wa.events += ",event7,event65"
            }
        //Adiciona mais um evento no objeto s_wa.events
            else {
                s_wa.events = "event7,event65"
            }
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageSearchAdobe", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageSearchGA": {"customJS":function(){
try {
    
} catch (e) {
    try {
        //Erro JS
        _satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageSearchGA", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "pageServicesAdobe": {"customJS":function(){
try {
	//Logica Servicos / Garantia
  	var product = cage_global_variable.detail.product
		var breadcrumb = product.category.breadcrumb
		var categories = []
		var department = ''
		var line = ''
		var subline = ''

		for(var i = breadcrumb.length-1; i >= 0; i--) {
			categories.push(breadcrumb[i])
		}
		
		department = (typeof categories[0] == 'object') ? categories[0] : ''
		line = (typeof categories[1] == 'object') ? categories[1] : ''
		subline = (typeof categories[2] == 'object') ? categories[2] : ''

		product['sku'] = cage_getParam('productSku')

		//Dimensões
			//SProducts
				s_wa.products = ';' + product.id + ';;;;eVar17=' + product.sku + '|eVar25=' + product.name,

			//Departamento e Linhas
				s_wa.eVar49 = department.id + '|' + line.id + '|' + subline.id
				s_wa.eVar79 = department.name + '|' + line.name + '|' + subline.name

		//Eventos
			// Etapa: Garantia (e56)
				//Adiciona mais um evento no objeto s_wa.events
					if (s_wa.events != undefined && s_wa.events != "") {
						s_wa.events += ",event56"
					}
				//Adiciona mais um evento no objeto s_wa.events
					else {
						s_wa.events = "event56"
					}

} catch (e) {
	try {
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageServicesAdobe", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "pageSublineAdobe": {"customJS":function(){
try{
	//Logica Sublinha
		//Dimensões
			s_wa.eVar49 = _satellite.getVar("getDepartmentLineSubline")
			s_wa.eVar79 = _satellite.getVar("getDepartmentName")
			s_wa.products = ";Pagina:Sublinha;;;;"

	// Interação com Filtros
        // Eventos de click em filtros e categorias
			_satellite.getVar("setCookiesFilterInteractions")
        // Coleta de informações setadas no cache
			_satellite.getVar("getCookiesFilterInteractions")
			
	//Eventos
		
		//Adiciona mais um evento no objeto s_wa.events
			if (s_wa.events != undefined && s_wa.events != "") {
				s_wa.events += ",event66"
			}
		//Adiciona mais um evento no objeto s_wa.events
			else {
				s_wa.events = "event66"
			}
} catch (e) {
	try {
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageSublineAdobe", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "pageSublineGA": {"customJS":function(){
try{
  
}catch(e){
	try{
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics","DataElements","pageSublineGA", e);
	}catch(e){}
}
},"storeLength":"pageview"},
    "pageThanksAdobe": {"customJS":function(){
try {

	//Quantidade de produtos + Valor da Sacola
	s_wa.eVar86 = _satellite.getVar("getQtdProdCart");
	s_wa.eVar87 = _satellite.getVar("getCheckoutAmount");

	//Products
		s_wa.products = _satellite.getVar("getSProducts");

	//Variável nativa de PurchaseID
		s_wa.purchaseID = _satellite.getVar("getPurchaseID");
		s_wa.transactionID = _satellite.getVar("getPurchaseID");
	//Variáveis de compra
		s_wa.eVar33 = _satellite.getVar("getPaymentMethod");
		s_wa.eVar34 = _satellite.getVar("getNumeroParcelas");
		s_wa.eVar46 = _satellite.getVar("getCompletePurchaseID");
		s_wa.eVar84 = _satellite.getVar("getCupomValue");

	//Frete		
		_satellite.getVar("getFreightLogic");
	
	//Clicks Checkout
		_satellite.getVar("getCheckoutClick")
	
	//AME Flow & AME CashIn
		_satellite.getVar("getAmeCashIn")
		_satellite.getVar("getAmeFlow")

	//Multicanal	
	//_satellite.getVar("getMCHLogic");

	//App ID
		s_wa.eVar48 = _satellite.getVar("getAppId")

	//Cart ID
		s_wa.eVar128 = _satellite.getVar("getCartID")

	//Eventos
	//Pagina
		if (s_wa.events != undefined && s_wa.events != "") {
			s_wa.events += ",event38,purchase,event130,event17=" + _satellite.getVar("getCostPurchaseAdobe");
		}
		else {
			s_wa.events = "event38,purchase,event130,event17=" + _satellite.getVar("getCostPurchaseAdobe");
		}

		 //Adiciona evento Pegue na loja hoje se estiver habilitado
		 _satellite.getVar("getPickUpInStore");

	//Checkout 
		try {
			//Valores
			var amount = '0'
			try {
				if (_satellite.getVar("getCheckoutAmount").indexOf("|") >= 0) {
					amount = _satellite.getVar("getCheckoutAmount").split('|')[0]
				}
			} catch (e) { }

			s_wa.events += ",event100=" + _satellite.getVar("getQtdProdCart") + ",event101=" + amount
		} catch (e) { }

	//1-Click
		if (_satellite.getVar("setPageName").indexOf("CompraRapida") >= 0) {
			s_wa.events += ",event45";
		}
} catch (e) {
	try {
		//Erro JS
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pageThanksAdobe", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "pageThanksGA": {"customJS":function(){
try {

	// Adição de produtos
		_satellite.getVar("addProductGA")

	// Adição da transação
		ga('ec:setAction', 'purchase', {
			'id': _satellite.getVar("getCompletePurchaseID"),
			'revenue': _satellite.getVar("getCostPurchaseAdobe"),
			'shipping': cage_global_variable.detail.checkout.freight.price
		});

	//Set Midia, Identificacao e Currency
		ga('set', {
			'dimension4': _satellite.getVar("getAppId"),
			'currencyCode': 'BRL'
		});
	
	//Disparo de evento com departamentos
		if(typeof _satellite.data.customVars.ga_dep == "string" && _satellite.data.customVars.ga_dep != ''){
			ga('send', 'event', 'Pedido', 'Departamentos da Compra', _satellite.data.customVars.ga_dep);
		}

} catch (e) {
	try {
		//Erro JS
		_satellite.data.customVars['getJsError'] += WA_JsError("Google Analytics", "DataElements", "pageThanksGA", e);
	} catch (e) { }
}
},"storeLength":"pageview"},
    "pgtoPhoneRegister": {"customJS":function(){
try {
    //Update WPP
        document.addEventListener("phone:update-submit", function (e) {
            try {
                // Logs
                    if (_satellite.getVar("enableLog") == "true") {
                        console.log("WA: DataElements - pgtoPhoneRegister - Update")
                    }

                // Seta informações para o evento Finance POK: Etapa 3 (e161)
                    var omni = {
                        link_o: "PGTO:PhoneWPP:Update",                        
                    }

                // Disparo Adobe
                    WA_linkP(omni);

            } catch (e) {
                _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pgtoPhoneRegister", e)
            }
        })
    
    //Register WPP
        document.addEventListener("phone:register-submit", function (e) {
            try {
                // Logs
                    if (_satellite.getVar("enableLog") == "true") {
                        console.log("WA: DataElements - pgtoPhoneRegister - Update")
                    }

                // Seta informações para o evento Finance POK: Etapa 3 (e161)
                    var omni = {
                        link_o: "PGTO:PhoneWPP:Register",                        
                    }

                // Disparo Adobe
                    WA_linkP(omni);

            } catch (e) {
                _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pgtoPhoneRegister", e)
            }
        })

} catch (e) {
    _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "pgtoPhoneRegister", e);
}
},"storeLength":"pageview"},
    "Products": {"customJS":function(){
try{
	//Logica sProducts
		var tipo_consulta_frete = (typeof _satellite.getVar("getFreightABTest") == "string" && _satellite.getVar("getFreightABTest") != "")?"|eVar99=" + _satellite.getVar("getFreightABTest"):""
		var buy_box_token = (typeof _satellite.getVar("getProductBuyBoxToken") == "string" && _satellite.getVar("getProductBuyBoxToken") != "")?"|eVar121=" + _satellite.getVar("getProductBuyBoxToken"):""
		var tipo_produto_mundo = (typeof _satellite.getVar("getMundosProduct") == "string")?_satellite.getVar("getMundosProduct"):""

		return ";"+ cage_global_variable.detail.product.id + ";;;;eVar17=" + _satellite.getVar("getProductSKU") + "|" + "eVar25=" + _satellite.getVar("getProductMostVisited") + "|eVar80=" + _satellite.getVar("getProductValue") + "|eVar96=" + _satellite.getVar("getProductBrand") + "|eVar97=" + _satellite.getVar("getSalesClassification") + "|eVar101=" + _satellite.getVar("getProductSellersQuantity") + "|eVar102=" + _satellite.getVar("getMultipleSKU") + tipo_consulta_frete + buy_box_token + "|eVar162=" + _satellite.getVar("getB2WEntregas") + "|eVar166=" + cage_global_variable.detail.product.id + "|eVar195=" + tipo_produto_mundo
}catch(e){
	try{
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics","DataElements","Products", e);
	}
	catch(e){}
}
},"storeLength":"pageview"},
    "setCookiesFilterInteractions": {"customJS":function(){
try {

    // Seta valores do objeto e trata envio para o cookie
        function setObj(e, type_filter) {
            try {
            // Recebe valores, do item clicado, tratados para enviar ao cookie
                var obj = {
                    pageName: cage_global_variable.nome_pagina,
                    aggregation: e,
                    type: type_filter
                }
                
                obj = JSON.stringify(obj)

            // Cria cookie com informações passadas pelo evento
                cage_setCookie("wa_filterInteraction", obj, 0)
            } catch(msg) {}
        }

    // Se evento for no filtro
        document.addEventListener("aggregation:filter:click", function (e) {
            try{
                setObj(e.detail.aggregation, "default")
            }catch(e){}            
        });

    // Se evento for na categoria
        document.addEventListener("aggregation:category:click", function (e) {
            try{
                setObj(e.detail.aggregation, "category")
            }catch(e){}            
        });
    
    // Se evento for no combo
        document.addEventListener("aggregation:filter:submit", function (e) {            
            try{
                if(typeof e.detail.aggregations == "object"){
                    setObj(e.detail.aggregations, "combo")
                }
                else if(typeof e.detail.selectedFilters == "object"){
                    //Categoria (objeto)
                        if(typeof e.detail.selectedFilters.length == "undefined"){
                            setObj(e.detail.selectedFilters, "combo")
                        }
                    //Produto (array) - Transforma em objeto
                        else if(typeof e.detail.selectedFilters.length == "number"){
                            var infos = {}
                            for(var property in e.detail.selectedFilters){
                                if (e.detail.selectedFilters.hasOwnProperty(property)){
                                    infos[e.detail.selectedFilters[property].id] = e.detail.selectedFilters[property].value
                                }
                            }
                            setObj(infos, "combo")
                        }
                            
                }
            }catch(e){}
        });

} catch (e) {
    try {
        _satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "setCookiesFilterInteractions", e);
    } catch (e) { }
}
},"storeLength":"pageview"},
    "setInfosToCheckout": {"customJS":function(){
try{
	var cookie  = _satellite.readCookie("wa")
    var wa = ''
    
    //Verifica departamento do Iem
        var dep = _satellite.getVar("getDepartmentLineSubline")
        dep = (typeof dep == "string" && dep != "" && dep.indexOf("|") >=0 && dep != "||")?dep.split("|")[0]:""

	//Utiliza cookie já criado
		if(cookie != undefined && typeof JSON.parse(cookie) == "object" && JSON.parse(cookie).length > 0){
			wa = JSON.parse(cookie);

			var verifica_prod = true;

			//Verifica se produto já existe no array
				for(var i=0; i < wa.length; i++){
					if(wa[i].p == _satellite.getVar("getProductPageID")){
						verifica_prod = false;						
					}
				}

			//Adiciona novos produtos no array
				if(verifica_prod){
					//Remove itens do arra. Max = 3
						if(wa.length >= 3){
							wa.shift();
                        }                                            

					//Adiciona item no array
						wa.push({
							'p' : _satellite.getVar("getProductPageID"),
							's' : (cage_global_variable.detail.offers[0]._embedded.seller.name == "B2W")?'B2W':cage_global_variable.detail.offers[0]._embedded.seller.id,
                            't' : (cage_global_variable.detail.offers[0]._embedded.seller.name == "B2W")?'1P':'3P',
                            'd' : dep
						});
				}					
		}
		
	//Cria cookie
		else{
			wa = [{
				'p' : _satellite.getVar("getProductPageID"),
				's' : (cage_global_variable.detail.offers[0]._embedded.seller.name == "B2W")?'B2W':cage_global_variable.detail.offers[0]._embedded.seller.id,
				't' : (cage_global_variable.detail.offers[0]._embedded.seller.name == "B2W")?'1P':'3P',
                'd' : dep
			}]
		}
		
	//Adapta inforamções para o cookie
		wa = JSON.stringify(wa)

	//Cria cookie wa_mc (30 dias) e cookie de sessao
		cage_setCookie("wa", wa, 0)
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "setInfosToCheckout", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "setMCHLogic": {"customJS":function(){
try{
	//Variaveis
		var wa_mc              = ''
		var logica_multiChannel = ''

	//Verifica visitantes novos e retornantes

		//Novo visitante
			if(_satellite.readCookie("wa_mc") == undefined){
				wa_mc = {	
					'firstInteraction': _satellite.getVar("getMCHTimeStamp"),
					'interactions': [],
					'lastInteraction': _satellite.getVar("getMCHTimeStamp"),
					'lastMidia': _satellite.getVar("getMCHMidia"),
					'quantityInteractions': 1,
					'totalTime': 0
				}

				wa_mc.interactions.push({
					'midia'    : _satellite.getVar("getMCHMidia"),
					'date'     : _satellite.getVar("getMCHTimeStamp"),
					'postion'  : 1
				});

				//Adapta inforamções para o cookie
					logica_multiChannel = JSON.stringify(wa_mc)

				//Cria cookie wa_mc (30 dias) e cookie de sessao
					cage_setCookie("wa_mc", logica_multiChannel, '720')
					cage_setCookie("wa_mc_session", "ok", '0')
			}

		//Retornante (só dispara 1 vez por visita ou se o usuário trocar de Midia durante a sessão)
			else if(_satellite.readCookie("wa_mc_session") == undefined || _satellite.getVar("getLastMidia") != _satellite.getVar("getMCHMidia")){
				//Pega informações do cookie
					var cookie_wa_mc = JSON.parse(_satellite.readCookie("wa_mc"))

				//Itera midias para deixar no máximo 5 (contando com essa que está sendo adicionada)
					while(cookie_wa_mc.interactions.length > 4){
					   cookie_wa_mc.interactions.shift()
					}

				//Adiciona Interação
					var postion = cookie_wa_mc.interactions.length - 1
					postion     = cookie_wa_mc.interactions[postion].postion + 1
					cookie_wa_mc.interactions.push({
						'midia'    : _satellite.getVar("getMCHMidia"),
						'date'     : _satellite.getVar("getMCHTimeStamp"),
						'postion'  : postion
					});

				//Altera infos gerais
					cookie_wa_mc.lastInteraction      = _satellite.getVar("getMCHTimeStamp")
					cookie_wa_mc.lastMidia            = _satellite.getVar("getMCHMidia")
					cookie_wa_mc.quantityInteractions = postion
					cookie_wa_mc.totalTime            = _satellite.getVar("getMCHTotalTime")

				//Adapta inforamções para o cookie
					logica_multiChannel = JSON.stringify(cookie_wa_mc)

				//Atualiza cookie wa_mc (30 dias) e cria cookie de sessao
					cage_setCookie("wa_mc", logica_multiChannel, '720')
					cage_setCookie("wa_mc_session", "ok", '0')
			}

	//Variavel MCH global
		if(logica_multiChannel != ''){
			_satellite.data.customVars['multiChannel'] = JSON.parse(logica_multiChannel)
		}		
		else{
			_satellite.data.customVars['multiChannel'] = JSON.parse(_satellite.readCookie("wa_mc"))
		}
}catch(e){
	try {
		_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "setMCHLogic", e);
	} catch (e) {}
}
},"storeLength":"pageview"},
    "setPageName": {"customJS":function(){
//Inicia pageName com o nome da marca
var pageName = _satellite.getVar("coreBrandName") + ":"

//Inicia pageName por página		
	try {
		//Path e Host
			var path = _satellite.getVar("getPathname")
			var host = _satellite.getVar("getHostName")
			var href = _satellite.getVar("getHostAndPath")

		//Verifica se a página é diferente de Outros
			if (cage_global_variable.nome_pagina != "Outros") {
				//Home
					if(cage_global_variable.nome_pagina == "Home"){
						pageName += "Home"
					}
				//Busca
					else if(cage_global_variable.nome_pagina == "Busca"){
						pageName += "BuscaInterna"
					}
				//Departamento, SubLoja, Linha, Sublinha e Produto
					else if(cage_global_variable.nome_pagina == "Departamento" || cage_global_variable.nome_pagina == "Linha" || cage_global_variable.nome_pagina == "Sublinha"){
						pageName += _satellite.getVar("getBreadCrumb")	
					}
				//Produto
					else if(cage_global_variable.nome_pagina == "Produto"){
						pageName += _satellite.getVar("getBreadCrumbProd")
					}
				//Etapa garantia estendida
					else if(cage_global_variable.nome_pagina == "GarantiaEstendida"){
						pageName += "Produto:Garantia"
					}
				//Serviços
					else if(cage_global_variable.nome_pagina == "Servicos"){
						pageName += "Servicos"
						if(path != "/"){
							pageName += ":" + path.replace("/", "")
						}
					}			
				//Mais Ofertas
					else if(cage_global_variable.nome_pagina == "MaisOfertas"){
						pageName += "Marketplace:ListaDeLojas"
					}	
				//Deal
					else if(cage_global_variable.nome_pagina == "Deal"){
						pageName += "Deal"
					}
				//WebStore
					else if(cage_global_variable.nome_pagina == "WebStore"){
						pageName += path.replace(/\//g, ":").replace(":lojista", "MarketplaceLojistas")
					}					
				//StoreIn Store
					else if(cage_global_variable.nome_pagina == "StoreInStore"){
						pageName += "StoreInStore"
					}
				//Artista
					else if(cage_global_variable.nome_pagina == "Artista"){
						pageName += "Artista"
					}
				//Sacola
					else if(cage_global_variable.nome_pagina == "Sacola"){
						pageName += "Carrinho"
					}
				//Finance
					else if(cage_global_variable.nome_pagina.indexOf('Finance') >= 0){
						pageName += "Finance"
					}
				//Pagamento
					else if(cage_global_variable.nome_pagina == "Pagamento"){
						pageName += "Checkout:FormaDePagamento"
					}
				//Pagamento 1-Click
					else if(cage_global_variable.nome_pagina == "Pagamento-1Click"){
						pageName += "Checkout:CompraRapida:FormaDePagamento"
					}
				//Obrigado
					else if(cage_global_variable.nome_pagina == "Obrigado"){
						pageName += "Checkout:Obrigado"
					}
				//Obrigado 1-Click
					else if(cage_global_variable.nome_pagina == "Obrigado-1Click"){
						pageName += "Checkout:CompraRapida:Obrigado"
					}
				//Alterar Endereço
					else if(cage_global_variable.nome_pagina == "AlterarEndereco"){
						pageName += "Checkout:EnderecoDeEntrega:AlterarEndereco"
					}
				//Cliente / Cadastro
					else if(cage_global_variable.nome_pagina.indexOf("Cliente:") >=0){
						pageName += cage_global_variable.nome_pagina
					}
				//Minha Conta
					else if(cage_global_variable.nome_pagina.indexOf("MinhaConta:") >=0){
						pageName += cage_global_variable.nome_pagina
					}
				//Minhas Vendas
					else if(cage_global_variable.nome_pagina.indexOf("MinhasVendas:") >=0){
						pageName += cage_global_variable.nome_pagina
					}
				//Hotsite
					else if(cage_global_variable.nome_pagina == "Hotsite"){
						pageName += path.replace(/\//g, ":").replace(":hotsite", "Hotsite").replace(":landingpage", "Hotsite").replace(":especial", "Hotsite")
					}
				//Marca
					else if(cage_global_variable.nome_pagina == "Marca"){
						pageName += path.replace(/\//g, ":").replace(":marca", "Marca")
					}
				//Mapa
					else if(cage_global_variable.nome_pagina == "SiteMap"){
						pageName += "MapaDoSite"
					}
				//OfertasDaTV
					else if(cage_global_variable.nome_pagina == "OfertasDaTV"){
						pageName += "OfertasdaTV"
					}
				//Review de Produto
					else if(cage_global_variable.nome_pagina == "ReviewProduto"){
						pageName += "ReviewProduto"
					}
				//Garagem
					else if(cage_global_variable.nome_pagina == "Garagem"){
						pageName += "Garagem"
					}
			}

		//Regras por Host e Path
			else {
				//BlackFriday
					//Apostas
						if(path.indexOf("/landingpage/bf-ofertas") >=0 || path.indexOf("/hotsite/melhoresofertas") >=0){
							pageName += "BlackFriday:Apostas"
						}
						else if(path.indexOf("/landingpage/primebf") >=0){
							pageName += "BlackFriday:Apostas:Prime"	
						}
					//Mundos
						else if(path.indexOf("/landingpage/bf-") >=0){
							pageName += "BlackFriday:Mundos:" + path.split("/landingpage/bf-")[1]
						}
					//Faixas
						else if(path.indexOf("/landingpage/") >=0 && path.indexOf("ate") >=0){
							pageName += "BlackFriday:FaixasDesconto:" + path.split('/')[2]
						}
						else if(path.indexOf("/hotsite/blackfriday/ate") >=0){
							pageName += "BlackFriday:FaixasDesconto:" + path.split('/')[3]
						}
					//SUBA Prime
						else if(path.indexOf("/landingpage/produtos-prime") >=0){
							pageName += "Hotsite:ProdutosPrime"
						}
				
				//Outros
					else{
						pageName += "XURL"
					}
			}

		// Verifica se última posição da String pageName é um caracter ":".
			if(pageName[pageName.length-1].includes(":")) {
				// Se sim, ignora o caracter através da função substring.
					pageName = pageName.substring(pageName, pageName.length-1);
			}

		//Retorna o nome da página no dataElement
			return pageName;

	} catch (e) {
		//Informa erro do dataElement
			try {
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "setPageName", e);
			} catch (e) {}
		
		//PageName de erro
			pageName += "XURL"
		//Retorna o nome da página no dataElement
			return pageName;
	}
},"storeLength":"pageview"},
    "setVersaoDoSite": {"customJS":function(){
//Versão do site
	var versao_do_site = ""
	
	try {		
		//APPs
			if (document.cookie.indexOf("crmWA_VersaoSite=app-android") >= 0 || location.href.indexOf("utm_source=app-android") >=0) {
				versao_do_site = 'APP-Android'
			} else if (document.cookie.indexOf("crmWA_VersaoSite=app-ios") >= 0 || location.href.indexOf("utm_source=app-ios") >=0) {
				versao_do_site = 'APP-iOS'
			}
		//Versão do site default
			else{
				versao_do_site = "Responsivo"
			}

		return versao_do_site;
	} catch (e) {
		return "Responsivo"

		try {
			_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "setVersaoDoSite", e);
		} catch (e) {}
	}
},"storeLength":"pageview"},
    "setVersaodoSiteUnificado": {"customJS":function(){
		//Versão do site
		var versao_do_site = ""
		try {
			if (document.cookie.indexOf("crmWA_VersaoSite=app-android") >= 0 || document.cookie.indexOf("crmWA_VersaoSite=app-ios") >= 0) {
				versao_do_site = "MOBILEAPP";
			} else if (_satellite.getVar("getHostName") != "sacola.soubarato.com.br") {
				if (_satellite.getVar("getVersaoDoSite") != "") {
					if (_satellite.getVar("getVersaoDoSite") == "Desktop") {
						versao_do_site = "NAOMOBILE";
					} else if (_satellite.getVar("getVersaoDoSite") == "Mobile" || _satellite.getVar("getVersaoDoSite") == "Responsivo") {
						versao_do_site = "MOBILESITE";
					}
				} else {
					versao_do_site = "NAOMOBILE";
				}
			} else {
				if (crmWA_dataLayer[0].objAppId != "") {
					versao_do_site = crmWA_dataLayer[0].objAppId;
				} else {
					versao_do_site = "NAOMOBILE";
				}
			}
			return versao_do_site;

		} catch (e) {
			//Default = NAOMOBILE
			versao_do_site = "NAOMOBILE"
			return versao_do_site;
			try {
				_satellite.data.customVars['getJsError'] += WA_JsError("Adobe Analytics", "DataElements", "setVersaodoSiteUnificado", e);
			} catch (e) {}
		}
},"storeLength":"pageview"},
    "testNestleEPares": {"customJS":function(){
try{
    var epares_nestle = ["pm_gc_00_go_coop_pascoa_nestle","pm_gc_00_go_coop_pascoa_nestle_kids","pm_gc_00_go_coop_pascoa_nestle_classic","pm_gc_00_go_coop_nestle_concorrentes","pm_gc_00_go_coop_pascoa_nestle_gifts","pm_gc_00_go_coop_pascoa_nestle_special","pm_gc_00_go_coop_pascoa_nestle_pla","pm_00_00_go_coop_pascoa_nestle_dv360","pm_00_00_go_coop_pascoa_nestle_dv360_kids","pm_00_00_go_coop_pascoa_nestle_dv360_classic","pm_00_00_go_coop_pascoa_nestle_dv360_gifts","pm_00_00_go_coop_pascoa_nestle_dv360_special","pm_fc_00_fb_coop_nestle_facebook","pm_fc_00_fb_coop_nestle_face_kids","pm_fc_00_fb_coop_nestle_face_classic","pm_fc_00_fb_coop_nestle_face_present","pm_fc_00_fb_coop_nestle_face_special","pm_fc_00_fb_coop_nestle_pascoa_insta","pm_fc_00_fb_coop_nestle_insta_kids","pm_fc_00_fb_coop_nestle_insta_classic","pm_fc_00_fb_coop_nestle_insta_kids_presents","pm_fc_00_fb_coop_nestle_insta_special","pm_00_00_00_coop_afiliados_1a","pm_00_00_00_coop_afiliados_1b","pm_00_00_00_coop_afiliados_1c","pm_00_00_00_coop_afiliados_1d","pm_00_00_00_coop_afiliados_2a","pm_00_00_00_coop_afiliados_2b","pm_00_00_00_coop_afiliados_2c","pm_00_00_00_coop_afiliados_2d","pm_00_00_00_coop_afiliados_3a","pm_00_00_00_coop_afiliados_3b","pm_00_00_00_coop_afiliados_3c","pm_00_00_00_coop_afiliados_3d","pm_00_00_00_coop_afiliados_4a","pm_00_00_00_coop_afiliados_4b","pm_00_00_00_coop_afiliados_4c","pm_00_00_00_coop_afiliados_4d","pm_00_00_go_coop_nestle_dv360","pm_00_00_go_coop_nestle_dv360_kids","pm_00_00_00_coop_nestle_dv360_classic","pm_00_00_go_coop_nestle_dv360__presents","pm_00_00_go_coop_nestle_dv360_special","pm_00_00_00_coop_youtube","pm_00_00_00_coop_youtube2","pm_00_00_00_coop_youtube3","pm_00_00_00_coop_youtube4","pm_fc_00_fb_coop_nestle1","pm_fc_00_fb_coop_nestle2","pm_00_00_00_coop_nestle_redmas1 ","pm_00_00_00_coop_nestle_redmas2   ","pm_fc_00_fb_coop_nestle_instavideo1","pm_fc_00_fb_coop_nestle_instavideo2","pm_fc_00_fb_coop_nestle_instavideo3","pm_fc_00_fb_coop_nestle_instavideo4","pm_00_00_00_coop_nestle_vogon1","pm_00_00_00_coop_nestle_vogon2"]

    var epar = _satellite.getVar("getEpar")

    if(epares_nestle.includes(epar)){
        return "ok"
    }
}catch(e){}
},"storeLength":"pageview"}
  },
  "appVersion": "7QN",
  "buildDate": "2019-08-27 22:08:17 UTC",
  "publishDate": "2019-08-27 22:08:16 UTC"
});
})(window, document);
