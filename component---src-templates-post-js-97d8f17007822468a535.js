(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[851],{1496:function(e,t,a){"use strict";var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),s=r(a(5354)),l=r(a(7316)),d=r(a(7154)),o=r(a(7294)),u=r(a(5697)),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=m(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var P=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+o+s+l+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=o.default.createElement(O,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),l):l})),O=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=P(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,x=e.draggable,P=p||h;if(!P)return null;var _=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:_?1:0,transition:z?"opacity "+b+"ms":"none"},l),k="boolean"==typeof v?"lightgray":v,C={transitionDelay:b+"ms"},H=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&C,l,f),T={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:S},W=this.state.isHydrated?g(P):P[0];if(p)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),k&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&C)}),W.base64&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:P,generateSources:I}),W.tracedSVG&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:P,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(P),o.default.createElement(O,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:P}))}}));if(h){var j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},k&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},z&&C)}),W.base64&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:T,imageVariants:P,generateSources:I}),W.tracedSVG&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:T,imageVariants:P,generateSources:L}),this.state.isVisible&&o.default.createElement("picture",null,E(P),o.default.createElement(O,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:P}))}}))}return null},t}(o.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function k(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}_.propTypes={resolutions:z,sizes:V,fixed:k(u.default.oneOfType([z,u.default.arrayOf(z)])),fluid:k(u.default.oneOfType([V,u.default.arrayOf(V)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=_;t.Z=C},5013:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var r=a(7294),i=a(1496),n=a(3753),s=a(4402),l=a(3751),d=function(e){var t=e.postObject;return r.createElement("div",{className:"catlist-module--article__catlist--3hS28"},"Categorization: ",t.categories.nodes.map((function(e,t){return[t>0&&", ",r.createElement("div",{className:"catlist-module--catName--1n_lg"},e.name)]})))},o=a(5444),u="postNav-module--postnav--3mDDd",c="postNav-module--postnav__head--301EZ",f="postNav-module--postnav__title--1_gx8",m=function(e){var t=e.prevPost,a=e.nextPost;return r.createElement("nav",{className:u},t&&r.createElement(o.Link,{to:""+t.uri},r.createElement("div",{className:c},"Previous Post:"),r.createElement("div",{className:f},t.title)),a&&r.createElement(o.Link,{to:""+a.uri},r.createElement("div",{className:c},"Next Post:"),r.createElement("div",{className:f},a.title)))},g=function(e){var t=e.prevPost,a=e.nextPost;return r.createElement("nav",{className:u},t&&r.createElement(o.Link,{to:""+t.uri},r.createElement("div",{className:c},"Previous Post")),a&&r.createElement(o.Link,{to:""+a.uri},r.createElement("div",{className:c},"Next Post")))},p=function(e){var t=e.data,a=t.thePost;return r.createElement(s.Z,null,r.createElement(l.Z,{title:a.title}),r.createElement(g,{prevPost:t.prevPost,nextPost:t.nextPost}),r.createElement("article",{className:n.Y2},a.featuredImage&&r.createElement("figure",{className:n.Xv},r.createElement(i.Z,{fluid:a.featuredImage.node.localFile.childImageSharp.fluid,alt:a.featuredImage.node.altText})),r.createElement("h1",{className:n.BJ},a.title),r.createElement("div",{className:n._W},"by ",a.author.node.name,". Published"," ",new Date(a.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})),r.createElement("div",{className:n.BR,dangerouslySetInnerHTML:{__html:a.content}}),r.createElement(d,{postObject:a})),r.createElement(m,{prevPost:t.prevPost,nextPost:t.nextPost}))}},3753:function(e,t,a){"use strict";a.d(t,{_W:function(){return r},Y2:function(){return i},Xv:function(){return n},f9:function(){return s},BJ:function(){return l},BR:function(){return d}});var r="single-module--article__meta--2B_eP",i="single-module--article--1iUKO",n="single-module--featimg--94Ix-",s="single-module--homeSection--1gnDK",l="single-module--article__title--1m8hL",d="single-module--article__content--7dEpL"}}]);
//# sourceMappingURL=component---src-templates-post-js-97d8f17007822468a535.js.map