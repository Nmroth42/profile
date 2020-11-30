/*! For license information please see component---src-templates-index-tsx-5d1be8084d7dacec2012.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1eu9":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n=a(r("8OQS")),i=a(r("pVnL")),o=a(r("PJYZ")),s=a(r("VbXa")),c=a(r("q1tI")),u=a(r("17x9")),l=a(r("yBBL")),d=r("uXx/"),f=r("EFel"),m=r("vD7z"),p=r("BfiH"),g=r("perC"),h=r("NVWv"),v=r("QxZ1"),y=r("oFdo"),b=r("lOcZ"),S=function(e){function t(t){var r;(r=e.call(this,t)||this).intersectionListener=function(){var e=(0,m.inImageCache)(r.props);r.state.isVisible||"function"!=typeof r.props.onStartLoad||r.props.onStartLoad({wasCached:e}),r.imageRef=(0,p.activatePictureRef)(r.imageRef,r.props,r.selfRef),r.setState((function(e){return{isVisible:!0,imageState:e.imageState+1}}),(function(){r.setState((function(t){return{imgLoaded:e,imgCached:(0,p.hasActivatedPictureRefs)(r.imageRef),imageState:t.imageState+1}}))}))};var a=(0,d.convertProps)(t),n=!0,s=!1,c=a.fadeIn,u=(0,m.inImageCache)(a);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,s=!0),"undefined"==typeof window&&(n=!1),a.critical&&(n=!0,s=!1);var f=!(a.critical&&!c),g=(0,h.fixClassName)(a)[0];return r.backgroundStyles=(0,h.presetBackgroundStyles)((0,l.default)(a.className)),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r.imageRef=(0,p.createPictureRef)((0,i.default)({},a,{isVisible:n}),r.handleImageLoaded),r.selfRef=null,r.state={isVisible:n,imgLoaded:!1,IOSupported:s,fadeIn:c,hasNoScript:f,seenBefore:u,imageState:0,currentClassNames:g},r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.backgroundStyles=(0,h.presetBackgroundStyles)((0,l.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,m.inImageCache)(this.props)}),(this.props.critical||this.state.seenBefore)&&(0,p.imageReferenceCompleted)(this.imageRef,this.props)&&this.handleImageLoaded();var e=(0,h.fixClassName)(this.props)[0];this.setState({currentClassNames:e})},r.componentDidUpdate=function(e){var t=this;if((0,f.imagePropsChanged)(this.props,e)){var r=(0,d.convertProps)(this.props),a=(0,m.inImageCache)(r),n=(0,h.fixClassName)(r)[0];this.setState({isVisible:a||r.critical,imgLoaded:a,seenBefore:a,currentClassNames:n},(function(){t.bgImage=(0,f.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,f.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,p.createPictureRef)((0,i.default)({},r,{isVisible:t.state.isVisible}),t.handleImageLoaded)}))}},r.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach((function(e){e&&!(0,b.isString)(e)&&(e.onload=null)})):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){this.selfRef=e,this.state.IOSupported&&e&&(this.cleanUpListeners=(0,y.listenToIntersections)(e,this.intersectionListener,this.props.rootMargin))},r.handleImageLoaded=function(){(0,m.activateCacheForImage)(this.props),this.setState((function(e){return{imgLoaded:!0,imageState:e.imageState+1}})),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=(0,h.fixOpacity)((0,d.convertProps)(this.props),this.props.preserveStackingContext),t=(e.className,e.style),r=void 0===t?{}:t,a=e.fluid,o=e.fixed,s=e.backgroundColor,u=e.durationFadeIn,l=e.Tag,m=e.children,p=(0,n.default)(e,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children"]),y=(0,d.stripRemainingProps)(p),b="boolean"==typeof s?"lightgray":void 0!==s?s:"",S=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,C=S?u/2+"ms":"none",A=(0,i.default)({position:"relative"},r);this.props.preserveStackingContext||(A.opacity=.99);var w=(0,f.getCurrentSrcData)({fluid:a,fixed:o,returnArray:!0}),x=(0,f.getCurrentSrcData)({fluid:a,fixed:o});if(!a&&!o)return null;o&&(A.width=r.width||w.width,A.height=r.height||w.height,A.display="inline-block","inherit"===r.display&&delete A.display);var I=(0,g.switchImageSettings)({image:w,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=I.nextImageArray||I.nextImage||this.bgImage;var E=(0,v.createPseudoStyles)((0,i.default)({className:this.state.currentClassNames,transitionDelay:C,bgColor:b,backgroundStyles:this.backgroundStyles,style:r,fadeIn:S},I,{originalData:a||o})),P=(0,v.createNoScriptStyles)({image:w,bgColor:b,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:r}),O=(a?"fluid":"")+(o?"fixed":"")+"-"+JSON.stringify(x.srcSet),k=(0,i.default)({},this.backgroundStyles,A);return c.default.createElement(l,(0,i.default)({className:this.state.currentClassNames,style:k,ref:this.handleRef,key:O},y),c.default.createElement("style",{dangerouslySetInnerHTML:{__html:E}}),this.state.hasNoScript&&c.default.createElement("noscript",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:P}})),m)},t}(c.default.Component);S.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1,rootMargin:"200px"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),A=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});S.propTypes={fixed:u.default.oneOfType([C,u.default.arrayOf(C),u.default.arrayOf(u.default.oneOfType([C,u.default.string]))]),fluid:u.default.oneOfType([A,u.default.arrayOf(A),u.default.arrayOf(u.default.oneOfType([A,u.default.string]))]),fadeIn:u.default.oneOfType([u.default.string,u.default.bool]),durationFadeIn:u.default.number,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.oneOfType([u.default.object,u.default.array]),backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.oneOfType([u.default.string,u.default.func]),preserveStackingContext:u.default.bool,rootMargin:u.default.string};var w=S;t.default=w},"4fRq":function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var a=new Uint8Array(16);e.exports=function(){return r(a),a}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},BfiH:function(e,t,r){"use strict";t.__esModule=!0,t.imageReferenceCompleted=t.hasPictureRef=t.hasActivatedPictureRefs=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=void 0;var a=r("uXx/"),n=r("EFel"),i=r("K9wq"),o=r("lOcZ"),s=r("vD7z"),c=function(e,t,r,s){void 0===s&&(s=!1);var c=(0,a.convertProps)(e);if((0,o.isBrowser)()&&(void 0!==c.fluid||void 0!==c.fixed)){if((0,n.hasImageArray)(c)&&!(0,i.hasArtDirectionArray)(c)&&!s)return u(e,t);var d=new Image;return d.onload=function(){return t()},d.complete||"function"!=typeof c.onLoad||d.addEventListener("load",c.onLoad),"function"==typeof c.onError&&d.addEventListener("error",c.onError),c.crossOrigin&&(d.crossOrigin=c.crossOrigin),!c.critical&&!c.isVisible||s?d:l(d,c,r,s)}return null};t.createPictureRef=c;var u=function(e,t){var r=(0,a.convertProps)(e),n=(r.fluid||r.fixed).map((function(e,a){return c(r,t,a,!0)}));return r.critical||r.isVisible?l(n,r):n};t.createMultiplePictureRefs=u;var l=function(e,t,r,s,c){void 0===r&&(r=null),void 0===s&&(s=0),void 0===c&&(c=!1);var u=(0,a.convertProps)(t);if((0,o.isBrowser)()&&(void 0!==u.fluid||void 0!==u.fixed)){var l=(0,n.hasImageArray)(u)&&!(0,i.hasArtDirectionArray)(u);if(l&&!c)return d(e,t,r);var f=document.createElement("body"),m=l?(0,n.getSelectedImage)(u,s):(0,n.getCurrentSrcData)(u);if(!m)return null;if((0,o.isString)(m))return m;if((0,n.hasPictureElement)()){var p=document.createElement("picture");if(r&&(e.width=r.offsetWidth,e.height=r.offsetHeight,p.width=e.width,p.height=e.height),(0,i.hasArtDirectionArray)(u))(0,i.createArtDirectionSources)(u).reverse().forEach((function(e){return p.appendChild(e)}));if(m.srcSetWebp){var g=document.createElement("source");g.type="image/webp",g.srcset=m.srcSetWebp,g.sizes=m.sizes,p.appendChild(g)}p.appendChild(e),f.appendChild(p)}else r&&(e.width=r.offsetWidth,e.height=r.offsetHeight);return e.sizes=m.sizes||"",e.srcset=m.srcSet||"",e.src=m.src||"",e}return null};t.activatePictureRef=l;var d=function(e,t,r){return e.map((function(e,a){return l(e,t,r,a,!0)}))};t.activateMultiplePictureRefs=d;t.hasActivatedPictureRefs=function(e){return Array.isArray(e)?e.every((function(e){return f(e)})):f(e)};var f=function(e){return(0,o.isString)(e)||!!e&&!!e.currentSrc};t.hasPictureRef=f;t.imageReferenceCompleted=function(e,t){return e?Array.isArray(e)?e.every((function(e){return(0,n.imageLoaded)(e)}))||(0,s.inImageCache)(t):(0,n.imageLoaded)(e)||(0,s.inImageCache)(t):(0,o.isString)(e)}},EFel:function(e,t,r){"use strict";t.__esModule=!0,t.imageLoaded=t.createDummyImageArray=t.imageArrayPropsChanged=t.imagePropsChanged=t.hasImageUrl=t.isBase64=t.getUrlString=t.getSelectedImage=t.getCurrentSrcData=t.getImageSrcKey=t.getCurrentFromData=t.hasImageArray=t.hasPictureElement=void 0;var a=r("K9wq"),n=r("lOcZ");t.hasPictureElement=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};var i=function(e){return Boolean(e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed))};t.hasImageArray=i;t.getCurrentFromData=function(e){var t=e.data,r=e.propName,i=e.addUrl,c=void 0===i||i,u=e.returnArray,l=void 0!==u&&u,f=e.checkLoaded,m=void 0===f||f;if(!t||!r)return"";var p="tracedSVG"===r;if(Array.isArray(t)&&!(0,a.hasArtDirectionArray)({fluid:t})){var g=t.map((function(e){return"currentSrc"===r||"src"===r?m?d(e)&&e[r]||"":e[r]:"CSS_STRING"===r&&(0,n.isString)(e)||(0,n.isString)(e)?e:e&&r in e?e[r]:""}));return s({imageString:g,tracedSVG:p,addUrl:c,returnArray:l})}if((0,a.hasArtDirectionArray)({fluid:t})&&("currentSrc"===r||"src"===r||"base64"===r||p)){var h=o({fluid:t});return r in h?s({imageString:h[r],tracedSVG:p,addUrl:c}):""}return"currentSrc"!==r&&"src"!==r||!(r in t)?r in t?s({imageString:t[r],tracedSVG:p,addUrl:c}):"":s({imageString:m?d(t)&&t[r]||"":t[r],addUrl:c})};t.getImageSrcKey=function(e){var t=e.fluid,r=e.fixed,a=o({fluid:t,fixed:r});return a&&a.src||null};var o=function(e,t){var r=e.fluid,o=e.fixed,s=e.returnArray;void 0===t&&(t=0);var c=r||o;if(i({fluid:r,fixed:o})){if(s)return c;if((0,n.isBrowser)()&&(0,a.hasArtDirectionArray)({fluid:r,fixed:o})){var u=c.slice().reverse(),l=u.findIndex(a.matchesMedia);if(-1!==l)return u[l]}return c[t]}return c};t.getCurrentSrcData=o;t.getSelectedImage=function(e,t){var r=e.fluid,a=e.fixed;void 0===t&&(t=0);var n=r||a;return i({fluid:r,fixed:a})?n[t]||n[0]:n};var s=function(e){var t=e.imageString,r=e.tracedSVG,a=void 0!==r&&r,i=e.addUrl,o=void 0===i||i,s=e.returnArray,l=void 0!==s&&s,d=e.hasImageUrls,f=void 0!==d&&d;if(Array.isArray(t)){var m=t.map((function(e){if(e){var r=c(e),n=f||u(t),i=e&&a?'"'+e+'"':e&&!r&&!a&&n?"'"+e+"'":e;return o&&e?"url("+i+")":i}return e}));return l?m:(0,n.filteredJoin)(m)}var p=c(t),g=f||u(t),h=t&&a?'"'+t+'"':t&&!p&&!a&&g?"'"+t+"'":t;return t?o?"url("+h+")":h:""};t.getUrlString=s;var c=function(e){return(0,n.isString)(e)&&-1!==e.indexOf("base64")};t.isBase64=c;var u=function(e){return(0,n.isString)(e)&&"http"===e.substr(0,4)};t.hasImageUrl=u;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||l(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var l=function(e,t){var r=Array.isArray(e.fluid),a=Array.isArray(t.fluid),n=Array.isArray(e.fixed),i=Array.isArray(t.fixed);return!!(r&&!a||n&&!i||!r&&a||!n&&i)||(r&&a?e.fluid.length!==t.fluid.length||e.fluid.some((function(e,r){return e.src!==t.fluid[r].src})):n&&i?e.fixed.length!==t.fixed.length||e.fixed.some((function(e,r){return e.src!==t.fixed[r].src})):void 0)};t.imageArrayPropsChanged=l;t.createDummyImageArray=function(e){var t=s({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};var d=function(e){return!!e&&((0,n.isString)(e)||e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=d},G3ap:function(e,t,r){e.exports={h1:"typography-module--h1--3zo3w",h2:"typography-module--h2--aupBI",h3:"typography-module--h3--ECZ-g",h4:"typography-module--h4--1nS7Z",h5:"typography-module--h5--1oMdC",h6:"typography-module--h6--pv5rh"}},I2ZF:function(e,t){for(var r=[],a=0;a<256;++a)r[a]=(a+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,n=r;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")}},I59i:function(e,t,r){var a=r("UfPM");function n(e,t){var r=new a(e,t);return function(e){return r.convert(e)}}n.BIN="01",n.OCT="01234567",n.DEC="0123456789",n.HEX="0123456789abcdef",e.exports=n},IFaA:function(e,t,r){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}},K9wq:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.matchesMedia=t.hasArtDirectionArray=t.hasArtDirectionSupport=t.createArtDirectionSources=t.groupByMedia=void 0;var n=a(r("auJE")),i=r("lOcZ");t.groupByMedia=function(e){var t=[],r=(0,n.default)(e,"media");return r.forEach((function(e){return!e.media&&t.push(e)})),t.length,r};t.createArtDirectionSources=function(e){var t=e.fluid,r=e.fixed;return(t||r).reduce((function(e,t){if(!t.media)return e;var r=document.createElement("source");return t.srcSetWebp&&(r.type="image/webp",r.srcset=t.srcSetWebp),t.sizes&&(r.sizes=t.sizes),r.media=t.media,e.push(r),e}),[])};var o=function(e,t){return e[t]&&Array.isArray(e[t])&&e[t].some((function(e){return!!e&&void 0!==e.media}))};t.hasArtDirectionSupport=o;t.hasArtDirectionArray=function(e){return o(e,"fluid")||o(e,"fixed")};t.matchesMedia=function(e){var t=e.media;return!!t&&((0,i.isBrowser)()&&void 0!==window.matchMedia&&!!window.matchMedia(t).matches)}},NVWv:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.escapeClassNames=t.fixClassName=void 0;var n=a(r("pVnL")),i=a(r("8OQS")),o=a(r("gv3/")),s=r("uXx/"),c=r("YWaw"),u=r("EFel"),l=r("lOcZ");t.fixClassName=function(e){var t=e.className,r=(0,i.default)(e,["className"]),a=(0,s.convertProps)(r),n=(0,c.inComponentClassCache)(t),d=(0,u.getCurrentSrcData)(a),f=o.default.generate(),m=" gbi-"+(0,l.hashString)(d&&d.srcSet||t||"noclass")+"-"+f,p=(""+(t||"")+((n||!t?m:"")||"")).trim();return n||(0,c.activateCacheForComponentClass)(t),[p]};t.escapeClassNames=function(e){if(e){var t=(0,l.isBrowser)()&&window._gbiSpecialChars?window._gbiSpecialChars:"undefined"!=typeof __GBI_SPECIAL_CHARS__?__GBI_SPECIAL_CHARS__:":/",r=new RegExp("["+t+"]","g");return e.replace(r,"\\$&")}return e};t.kebabifyBackgroundStyles=function(e){return(0,l.isString)(e)?e:e instanceof Object?Object.keys(e).filter((function(t){return 0===t.indexOf("background")&&""!==e[t]})).reduce((function(t,r){return""+t+(0,l.toKebabCase)(r)+": "+e[r]+";\n"}),""):""};t.setTransitionStyles=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.fixOpacity=function(e){var t=(0,n.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(r){}return t};t.presetBackgroundStyles=function(e){return(0,n.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},e)}},QxZ1:function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.createNoScriptStyles=t.createStyleImage=t.createPseudoStyles=t.createPseudoElementMediaQuery=t.createPseudoElementWithContent=t.createPseudoElement=void 0;var n=a(r("pVnL")),i=r("NVWv"),o=r("EFel"),s=r("K9wq"),c=r("lOcZ"),u=function(e,t){void 0===t&&(t=":before");var r=(0,i.escapeClassNames)(e),a=(0,c.stringToArray)(r),n="";return Array.isArray(a)&&(a=a.filter((function(e){return""!==e}))).length>0&&(n="."+a.join(".")+t),n};t.createPseudoElement=u;var l=function(e,t){return"\n    "+e+" {\n      opacity: 1;\n      background-image: "+t+";\n    }"};t.createPseudoElementWithContent=l;var d=function(e,t,r,a){return"\n      @media "+t+" {\n        "+l(e,r)+"\n      }\n      "+(a&&"@media "+t+" {\n          "+l(e,a)+"\n        }")+"\n    "};t.createPseudoElementMediaQuery=d;t.createPseudoStyles=function(e){var t=e.className,r=e.transitionDelay,a=e.lastImage,o=e.nextImage,s=e.afterOpacity,c=e.bgColor,l=e.fadeIn,d=e.backgroundStyles,m=e.style,p=e.finalImage,g=e.originalData,h=u(t),v=u(t,":after"),y=(0,n.default)({},d,m);return"\n          "+h+",\n          "+v+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(c&&"background-color: "+c+";")+"\n            "+(0,i.setTransitionStyles)(r,l)+"\n            "+(0,i.kebabifyBackgroundStyles)(y)+"\n          }\n          "+h+" {\n            z-index: -100;\n            "+((!s||p)&&f(o,g)||"")+"\n            "+(s&&a&&f(a,g)||"")+"\n            opacity: "+Number(!s)+"; \n          }\n          "+v+" {\n            z-index: -101;\n            "+((s||p)&&f(o,g)||"")+"\n            "+(!s&&a&&f(a,g)||"")+"\n            "+(p?"opacity: "+Number(s)+";":"")+"\n          }\n        "};var f=function(e,t){var r=(0,o.hasImageArray)({fluid:t})&&!(0,s.hasArtDirectionArray)({fluid:t});return((0,c.isBrowser)()||r)&&e?"background-image: "+e+";":""};t.createStyleImage=f;t.createNoScriptStyles=function(e){var t=e.className,r=e.image;if(r){var a=Array.isArray(r)&&!(0,s.hasArtDirectionArray)({fluid:r}),n=(0,o.getCurrentFromData)({data:r,propName:"src",checkLoaded:!1,addUrl:!1,returnArray:a}),i=(0,o.getUrlString)({imageString:n,hasImageUrls:!0,returnArray:a}),f="";if(a){var m=(0,o.getCurrentFromData)({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:a});f=(0,c.filteredJoin)((0,c.combineArray)(i,m))}var p=u(t);return(0,s.hasArtDirectionArray)({fluid:r})?r.map((function(e){var t=(0,o.getUrlString)({imageString:e.src}),r=(0,o.getUrlString)({imageString:e.srcWebp||""});return e.media?d(p,e.media,t,r):d(p,"screen",t,r)})).join(""):l(p,f||i)}return""}},Ros5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&s(r)&&(t[r]=e[r]);return t};var a,n=r("IFaA"),i=(a=n)&&a.__esModule?a:{default:a};var o={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function s(e){return o[e]||i.default[e]||/^(data|aria)-/.test(e)}},RwK0:function(e,t,r){e.exports={postPreviews:"postPreviews-module--postPreviews--3n6nz"}},U6jy:function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var a=arguments[t];for(var n in a)r.call(a,n)&&(e[n]=a[n])}return e};var r=Object.prototype.hasOwnProperty},"UA/k":function(e,t,r){e.exports={about:"about-module--about--oYO1n",imageWrapper:"about-module--imageWrapper--_LRP_",content:"about-module--content--1Oi1R",avatar:"about-module--avatar--1NClX",title:"about-module--title--1t-fY",social:"about-module--social--2Y38l"}},UfPM:function(e,t,r){"use strict";function a(e,t){if(!(e&&t&&e.length&&t.length))throw new Error("Bad alphabet");this.srcAlphabet=e,this.dstAlphabet=t}a.prototype.convert=function(e){var t,r,a,n={},i=this.srcAlphabet.length,o=this.dstAlphabet.length,s=e.length,c="string"==typeof e?"":[];if(!this.isValid(e))throw new Error('Number "'+e+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return e;for(t=0;t<s;t++)n[t]=this.srcAlphabet.indexOf(e[t]);do{for(r=0,a=0,t=0;t<s;t++)(r=r*i+n[t])>=o?(n[a++]=parseInt(r/o,10),r%=o):a>0&&(n[a++]=0);s=a,c=this.dstAlphabet.slice(r,r+1).concat(c)}while(0!==a);return c},a.prototype.isValid=function(e){for(var t=0;t<e.length;++t)if(-1===this.srcAlphabet.indexOf(e[t]))return!1;return!0},e.exports=a},YWaw:function(e,t,r){"use strict";t.__esModule=!0,t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var a=Object.create({});t.inComponentClassCache=function(e){return a[e]||!1};t.activateCacheForComponentClass=function(e){e&&(a[e]=!0)};t.resetComponentClassCache=function(){for(var e in a)delete a[e]}},auJE:function(e,t,r){var a=r("U6jy"),n=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function i(e){return function(t,r){var a=t.sortVal,n=r.sortVal,i=t.item.__media,o=r.item.__media;if(e=void 0!==e&&e,a===n){if(i.match(/print/))return 1;if(o.match(/print/))return-1}return e?n-a:a-n}}function o(e,t,r){switch(function(e,t,r){return e&&e.length&&"string"!=typeof e?("object"!==t||r&&"string"==typeof r)&&function(e,t,r){for(var a=!0,n=0,i=e.length;n<i;n++)if(typeof e[n]!==t||r&&!e[n].hasOwnProperty(r)){a=!1;break}return a}(e,t,r)?"all":"some":"none"}(e,t,r)){case"none":return[];case"some":return e}var o=function(){for(var e={},t=0,r=n.length;t<r;t++)e[n[t]]=[];return e}();return e=function(e,t,r){for(var n=[],i={},o=0,s=e.length;o<s;o++)"string"===t?i=a({},{__media:e[o]}):(i=a({},e[o])).__media=e[o][r],n.push(i);return n}(e,t,r),function(e,t){for(var r=0,a=t.length;r<a;r++){var n=t[r],i=n.__media,o="blank",s=i.match(/\d+/g);i.match(/min-width/)?o="minWidth":i.match(/min-height/)?o="minHeight":i.match(/max-width/)?o="maxWidth":i.match(/max-height/)?o="maxHeight":i.match(/print/)?o="print":i.match(/all/)&&(o="all"),e[o].push({item:n,sortVal:s?s[0]:0})}}(o,e),function(e){var t;for(var r in e)e.hasOwnProperty(r)&&(t=i(!1),"maxWidth"!==r&&"maxHeight"!==r||(t=i(!0)),e[r].sort(t))}(o),function(e,t,r){var a=[];function i(e){for(var r,n=0,i=e.length;n<i;n++)"string"===t?r=e[n].item.__media:delete(r=e[n].item).__media,a.push(r)}for(var o=0,s=n.length;o<s;o++)i(e[n[o]]);return a}(o,t)}e.exports=function(e,t){return e?t?o(e,"object",t):o(e,"string"):[]}},"gv3/":function(e,t,r){var a,n=r("I59i"),i=r("xk4V"),o="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";function s(e,t){return t(e.toLowerCase().replace(/-/g,""))}e.exports=function(){function e(e){var t=e||o,r=n(n.HEX,t),a=n(t,n.HEX),c=function(){return s(i(),r)};return{new:c,generate:c,uuid:i,fromUUID:function(e){return s(e,r)},toUUID:function(e){return function(e,t){for(var r,a=t(e),n="",i=0,o=32-a.length;i<o;++i)n+="0";return[(r=(n+a).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/))[1],r[2],r[3],r[4],r[5]].join("-")}(e,a)},alphabet:t}}return e.constants={flickrBase58:o,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},e.uuid=i,e.generate=function(){return a||(a=n(n.HEX,o)),s(i(),a)},e}()},lOcZ:function(e,t,r){"use strict";t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.isObject=t.isString=t.isBrowser=void 0;t.isBrowser=function(){return"undefined"!=typeof window};var a=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=a;t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)};t.toCamelCase=function(e){return a(e)&&-1!==e.indexOf("-")&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s|\W+/g,"")||e};t.toKebabCase=function(e){return a(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!a(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return a(e)&&[].reduce.call(e,(function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))}),0)};t.filteredJoin=function(e){return e.filter((function(e){return""!==e})).join()};t.combineArray=function(e,t){return Array.isArray(e)?e.map((function(e,r){return e||t&&t[r]})):[e]}},oFdo:function(e,t,r){"use strict";var a;t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var n=new WeakMap,i=function(e){e.forEach((function(e){if(n.has(e.target)){var t=n.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),n.delete(e.target),t())}}))};t.callbackIO=i;var o=function(e){return void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(i,{rootMargin:e})),a};t.getIO=o;t.listenToIntersections=function(e,t,r){void 0===r&&(r="200px");var a=o(r);return a?(a.observe(e),n.set(e,t),function(){a.unobserve(e),n.delete(e)}):function(){}}},p1lA:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=r("zHTP"),s=r.n(o);t.a=function(e){var t=e.nextPath,r=e.previousPath,a=e.nextLabel,o=e.previousLabel;return r||t?n.a.createElement("div",{className:s.a.navigation},r&&n.a.createElement("span",{className:s.a.button},n.a.createElement(i.Link,{to:r},n.a.createElement("span",{className:s.a.iconPrev},"←"),n.a.createElement("span",{className:s.a.buttonText},o))),t&&n.a.createElement("span",{className:s.a.button},n.a.createElement(i.Link,{to:t},n.a.createElement("span",{className:s.a.buttonText},a),n.a.createElement("span",{className:s.a.iconNext},"→")))):null}},perC:function(e,t,r){"use strict";t.__esModule=!0,t.switchImageSettings=void 0;var a=r("EFel"),n=r("K9wq"),i=r("lOcZ");t.switchImageSettings=function(e){var t,r,o=e.image,s=e.bgImage,c=e.imageRef,u=e.state,l=(0,a.getCurrentFromData)({data:c,propName:"currentSrc"}),d=Array.isArray(o)&&!(0,n.hasArtDirectionArray)({fluid:o}),f=Array.isArray(s)?(0,i.filteredJoin)(s):s,m=d&&u.seenBefore&&!!l;if(d){l||(t=(0,a.getCurrentFromData)({data:o,propName:"tracedSVG",returnArray:d}),t=(0,i.combineArray)((0,a.getCurrentFromData)({data:o,propName:"base64",returnArray:d}),t)),t=(0,i.combineArray)((0,a.getCurrentFromData)({data:o,propName:"CSS_STRING",addUrl:!1,returnArray:d}),t),(u.imgLoaded||l)&&u.isVisible&&(l?(t=(0,i.combineArray)((0,a.getCurrentFromData)({data:c,propName:"currentSrc",returnArray:d}),t),m=!0):(t=(0,i.combineArray)((0,a.getCurrentFromData)({data:c,propName:"src",returnArray:d}),t),m=!0)),t=(0,i.combineArray)(t,s);var p=(0,a.createDummyImageArray)(o.length);r=t=(0,i.combineArray)(t,p),t=(0,i.filteredJoin)(t)}else t="",t=(0,a.getCurrentFromData)({data:o,propName:"tracedSVG"})||(0,a.getCurrentFromData)({data:o,propName:"base64"}),u.imgLoaded&&u.isVisible&&(t=l,m=!0);var g=u.imageState%2;!d&&""===t&&u.imgLoaded&&u.isVisible&&c&&!c.currentSrc&&(t=(0,a.getCurrentFromData)({data:c,propName:"src",checkLoaded:!1}),m=!0),t||(t=f);var h={lastImage:f,nextImage:t,afterOpacity:g,finalImage:m};return r&&(h.nextImageArray=r),h}},tC39:function(e,t,r){e.exports={postPreview:"postPreview-module--postPreview--3Z-zo",date:"postPreview-module--date--aV5CG",title:"postPreview-module--title--2Ndhu",backgroundImage:"postPreview-module--backgroundImage--IWfqy"}},"uXx/":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.convertProps=t.stripRemainingProps=void 0;var n=a(r("pVnL")),i=a(r("Ros5")),o=r("K9wq");t.stripRemainingProps=function(e){return(0,i.default)(e)};t.convertProps=function(e){var t=(0,n.default)({},e),r=t.fixed;return t.fluid&&(0,o.hasArtDirectionSupport)(e,"fluid")&&(t.fluid=(0,o.groupByMedia)(t.fluid)),r&&(0,o.hasArtDirectionSupport)(e,"fixed")&&(t.fixed=(0,o.groupByMedia)(t.fixed)),t}},vD7z:function(e,t,r){"use strict";t.__esModule=!0,t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var a=r("uXx/"),n=r("K9wq"),i=r("EFel"),o=r("lOcZ"),s=Object.create({}),c=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var c=(0,a.convertProps)(e),l=(0,i.hasImageArray)(c)&&!(0,n.hasArtDirectionArray)(c);if(l&&!r)return u(e);var d=l?(0,i.getSelectedImage)(c,t):(0,i.getImageSrcKey)(c);if((0,o.isObject)(d)){var f=(0,i.getImageSrcKey)({fluid:d,fixed:d});return s[f]||!1}return s[d]||!1};t.inImageCache=c;var u=function(e){var t=(0,a.convertProps)(e);return(t.fluid||t.fixed).every((function(e,r){return c(t,r,!0)}))};t.allInImageCache=u;var l=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var c=(0,a.convertProps)(e),u=(0,i.hasImageArray)(c)&&!(0,n.hasArtDirectionArray)(c);if(u&&!r)return d(e);var l=u?(0,i.getSelectedImage)(c,t):(0,i.getImageSrcKey)(c);if(l)if((0,o.isObject)(l)){var f=(0,i.getImageSrcKey)({fluid:l,fixed:l});s[f]=!0}else s[l]=!0};t.activateCacheForImage=l;var d=function(e){var t=(0,a.convertProps)(e);(t.fluid||t.fixed).forEach((function(e,r){return l(t,r,!0)}))};t.activateCacheForMultipleImages=d;t.resetImageCache=function(){for(var e in s)delete s[e]}},wuON:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=o(r("q1tI")),i=o(r("17x9"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return n.default.createElement("a",a({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var r=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(r=!1),e.target&&"_self"!==e.target.toLowerCase()&&(r=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){r&&(document.location=e.href)}}):r&&(document.location=e.href),!1}}))}s.propTypes={href:i.default.string,target:i.default.string,onClick:i.default.func},t.OutboundLink=s},xk4V:function(e,t,r){var a=r("4fRq"),n=r("I2ZF");e.exports=function(e,t,r){var i=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||n(o)}},yBBL:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.getStyleRulesForClassName=void 0;var a=r("lOcZ"),n=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],r=0;r<t.length;r++){var a=void 0;try{a=void 0!==t[r].rules?t[r].rules:void 0!==t[r].cssRules?t[r].cssRules:""}catch(i){}if(a){var n=Array.prototype.slice.call(a).reduce((function(t,r){return r.selectorText===e&&t.push(r),t}),[]);if(n.length)return n}}return[]};t.getStyleRulesForClassName=n;var i=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach((function(r){t[(0,a.toCamelCase)(r)]=e[0].style[r]}));break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=i;var o=function(e){if(e&&(0,a.isString)(e)){var t=n("."+e);if((null==t?void 0:t.length)>0&&void 0!==t[0].style)return Object.keys(i(t)).filter((function(e){return 0===e.indexOf("background")&&""!==t[0].style[e]})).reduce((function(e,r){return e[(0,a.toCamelCase)(r)]=t[0].style[r],e}),{})}return{}};t.getBackgroundStylesForSingleClass=o;var s=function(e){if("undefined"!=typeof window){var t=(0,a.stringToArray)(e);if(t instanceof Array){var r=[];return t.forEach((function(e){return r.push(o(e))})),Object.assign.apply(Object,r)}return o(e)}return{}};t.default=s},zHTP:function(e,t,r){e.exports={navigation:"navigation-module--navigation--3Zfju",button:"navigation-module--button--28kp3",iconNext:"navigation-module--iconNext--3xyJ-",iconPrev:"navigation-module--iconPrev--23mg1"}},zvhb:function(e,t,r){"use strict";r.r(t),r.d(t,"postsQuery",(function(){return x}));var a=r("q1tI"),n=r.n(a),i=r("H8eV"),o=r("9Dj+"),s=r("p1lA"),c=r("wuON"),u=r("oh6M"),l=r("UA/k"),d=r.n(l),f=function(e){e.avatar;return n.a.createElement("div",{className:d.a.about},n.a.createElement("div",{style:{display:"flex"},className:d.a.content},n.a.createElement("div",{className:d.a.social},n.a.createElement(c.OutboundLink,{href:"https://github.com/alexnault","aria-label":"Github"},n.a.createElement(u.a,{style:{cursor:"pointer"},size:54,d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))))},m=r("Wbzz"),p=r("1eu9"),g=r.n(p),h=r("G3ap"),v=r.n(h),y=r("tC39"),b=r.n(y),S=function(e){var t=e.title,r=e.date,a=e.path,i=["linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.8) 100%)",e.coverImage.childImageSharp.fluid];return n.a.createElement(m.Link,{to:a,className:b.a.postPreview},n.a.createElement(g.a,{fluid:i,backgroundColor:"#040e18",className:b.a.backgroundImage},n.a.createElement("span",{className:b.a.date},r),n.a.createElement("h3",{className:v.a.h4+" "+b.a.title},t)))},C=r("RwK0"),A=r.n(C),w=function(e){var t=e.posts,r=Object(a.useState)(""),i=r[0],o=r[1],s=Object(a.useState)(t),c=s[0],u=s[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:v.a.h3}),n.a.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},n.a.createElement("input",{type:"text",onChange:function(e){var r=e.target.value;Object(m.navigate)("/?search="+e.target.value),console.log(t);var a=t.filter((function(e){if(e.node.frontmatter.title.toLowerCase().includes(r.toLowerCase())||e.node.frontmatter.title.includes(r.toLowerCase())||e.node.frontmatter.date.toLowerCase().includes(r.toLowerCase())||e.node.frontmatter.date.includes(r.toLowerCase()))return e}));o(e.target.value),e.target.value.length<1&&Object(m.navigate)("/"),u(a),console.log(e.target.value.length)},value:i,placeholder:"Search...",style:{width:"100%",maxWidth:"300px"}})),n.a.createElement("div",{className:A.a.postPreviews},c.map((function(e){var t=e.node,r=t.id,a=t.frontmatter,i=a.title,o=a.date,s=a.path,c=a.coverImage;return n.a.createElement(S,{key:r,title:i,date:o,path:s,coverImage:c})}))))},x="640927205";t.default=function(e){var t=e.data,r=e.pageContext,a=r.nextPagePath,c=r.previousPagePath,u=t.avatar,l=t.allMdx.edges;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null),n.a.createElement(o.a,null,n.a.createElement(f,{avatar:u}),n.a.createElement(w,{posts:l}),n.a.createElement(s.a,{previousPath:c,previousLabel:"Newer posts",nextPath:a,nextLabel:"Older posts"})))}}}]);
//# sourceMappingURL=component---src-templates-index-tsx-5d1be8084d7dacec2012.js.map