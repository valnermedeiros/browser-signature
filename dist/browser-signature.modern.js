export default t=>{const e=window||global,n=(r=(navigator.mimeTypes.length+navigator.userAgent.length).toString(36)+(t=>{const n=[];for(let t in e)n.push(t);return n.length.toString(36)})(),(new Array(5).join("0")+r).slice(-4));var r;const i=e.screen.width.toString(36),o=e.screen.height.toString(36),g=e.screen.availWidth.toString(36),a=e.screen.availHeight.toString(36),s=e.screen.colorDepth.toString(36),l=e.screen.pixelDepth.toString(36);return btoa(n+i+o+g+a+s+l)};
//# sourceMappingURL=browser-signature.modern.js.map