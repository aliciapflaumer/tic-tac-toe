webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
  apiOrigins: {
    production: 'https://aqueous-atoll-85096.herokuapp.com/',
    development: 'http://tic-tac-toe.wdibos.com'
  }
};

module.exports = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = store;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(3);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(6);
// require('./assets/scripts/auth/events.js')

// styles
__webpack_require__(15);

// module.exports = {
//   events
// }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var setAPIOrigin = __webpack_require__(7);
var config = __webpack_require__(1);
var authEvents = __webpack_require__(9);
var gameEvents = __webpack_require__(12);

$(function () {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(function () {
  authEvents.addHandlers();
  // gameEvents.addHandlers()
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseNestedQuery = __webpack_require__(8);

/*
  possibilites to handle and example URLs:

  client local, api local
    http://localhost:7165/
  client local, api remote
    http://localhost:7165/?environment=production
  client remote, api local
    https://ga-wdi-boston.github.io/browser-template/?environment=development
    This will require allowing "unsafe scripts" in Chrome
  client remote, api remote
    https://ga-wdi-boston.github.io/browser-template/
*/

var setAPIOrigin = function setAPIOrigin(location, config) {
  // strip the leading `'?'`
  var search = parseNestedQuery(location.search.slice(1));

  if (search.environment === 'development' || location.hostname === 'localhost' && search.environment !== 'production') {
    if (!(config.apiOrigin = config.apiOrigins.development)) {
      var port = +'GA'.split('').reduce(function (p, c) {
        return p + c.charCodeAt().toString(16);
      }, '');
      config.apiOrigin = 'http://localhost:' + port;
    }
  } else {
    config.apiOrigin = config.apiOrigins.production;
  }
};

module.exports = setAPIOrigin;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(3);

var parseNestedQuery = function parseNestedQuery(queryString) {
  return queryString.split('&').reduce(function (memo, element) {
    if (element) {
      var keyValuePair = element.split('=');
      memo = addNestedValue(memo, decodeURIComponent(keyValuePair[0]), decodeURIComponent(keyValuePair[1]));
    }

    return memo;
  }, {});
};

module.exports = parseNestedQuery;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var getFormFields = __webpack_require__(4);

var api = __webpack_require__(10);
var ui = __webpack_require__(11);

// auth events

var onSignUp = function onSignUp(event) {
  var data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

var onSignIn = function onSignIn(event) {
  var data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure);
};

var onChangePassword = function onChangePassword(event) {
  var data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data).then(ui.changePasswordSuccess).catch(ui.changePasswordFailure);
};

var onSignOut = function onSignOut(event) {
  var data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.signOut(data).then(ui.signOutSuccess).catch(ui.signOutFailure);
};

var addHandlers = function addHandlers() {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers: addHandlers
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var config = __webpack_require__(1);
var store = __webpack_require__(2);

var signUp = function signUp(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  });
};

var signIn = function signIn(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  });
};

var changePassword = function changePassword(data) {
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

var signOut = function signOut() {
  return $.ajax({ // return ajax then set up, url, method, data
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    // add Token
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(2);

var signUpSuccess = function signUpSuccess(data) {
  // console.log(data)
  console.log('Successfully signed up');
  $('#message').text('Successfully signed up');
  console.log(this);
};

var signUpFailure = function signUpFailure(error) {
  // console.error(error)
  $('#message').text('Error on sign up');
  console.log(this);
};

var signInSuccess = function signInSuccess(data) {
  // console.log(data)
  console.log('Successfully signed in');
  $('#message').text('Successfully signed in');
  store.user = data.user;
  console.log('store.user console log data is ' + store.user);
};

var signInFailure = function signInFailure(error) {
  // console.error(error)
  $('#message').text('Error on sign in');
};

var changePasswordSuccess = function changePasswordSuccess() {
  console.log('Successfully changed password');
  $('#message').text('Successfully changed password!');
};

var changePasswordFailure = function changePasswordFailure(error) {
  // console.log(error)
  $('#message').text('Error on change password!');
};

var signOutSuccess = function signOutSuccess() {
  console.log('Successfully signed out');
  $('#message').text('Successfully signed out!');
  store.user = null; // empty store
};

var signOutFailure = function signOutFailure(error) {
  // console.log(error)
  $('#message').text('Error on sign out!');
};

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var getFormFields = __webpack_require__(4);

var api = __webpack_require__(13);
var ui = __webpack_require__(14);

// game events

var turn = 'X';

// setting up event listener
// "div[id^='cell']"
$('.box').on('click', function (event) {
  event.preventDefault();

  console.log(this);

  if ($(this).val() === '') {
    // target element that we click on and change text

    if (turn === 'X') {
      $(this).text('X');
      turn = 'O';
    } else {
      $(this).text('O');
      turn = 'X';
    }
  }
  // if Player X wins
  if ($('#cell0').text() === 'X' && $('#cell1').text() === 'X' && $('#cell2').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell3').text() === 'X' && $('#cell4').text() === 'X' && $('#cell5').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell6').text() === 'X' && $('#cell7').text() === 'X' && $('#cell8').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell0').text() === 'X' && $('#cell3').text() === 'X' && $('#cell6').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell1').text() === 'X' && $('#cell4').text() === 'X' && $('#cell7').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell2').text() === 'X' && $('#cell5').text() === 'X' && $('#cell8').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell0').text() === 'X' && $('#cell4').text() === 'X' && $('#cell8').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  } else if ($('#cell2').text() === 'X' && $('#cell4').text() === 'X' && $('#cell6').text() === 'X') {
    $('#message').text('Player 1 Wins!');
    console.log('Player 1 Wins!');
  }

  // If player O Wins
  if ($('#cell0').text() === 'O' && $('#cell1').text() === 'O' && $('#cell2').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell3').text() === 'O' && $('#cell4').text() === 'O' && $('#cell5').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell6').text() === 'O' && $('#cell7').text() === 'O' && $('#cell8').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell0').text() === 'O' && $('#cell3').text() === 'O' && $('#cell6').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell1').text() === 'O' && $('#cell4').text() === 'O' && $('#cell7').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell2').text() === 'O' && $('#cell5').text() === 'O' && $('#cell8').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell0').text() === 'O' && $('#cell4').text() === 'O' && $('#cell8').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  } else if ($('#cell2').text() === 'O' && $('#cell4').text() === 'O' && $('#cell6').text() === 'O') {
    $('#message').text('Player 2 Wins!');
    console.log('Player 2 Wins!');
  }
});

module.exports = {};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = __webpack_require__(1);
var store = __webpack_require__(2);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: \n@import 'theme';\n^\n      File to import not found or unreadable: theme.\nParent style sheet: stdin\n      in /Users/aliciapflaumer/wdi/projects/tic-tac-toe/assets/styles/index.scss (line 4, column 1)");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(18);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[5]);