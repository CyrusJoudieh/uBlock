/// Hello.js
console.log("Hello");


/// teledunet.js
console.log("Setting premium list after page load.");
//document.addEventListener('DOMContentLoaded', function() {
//	console.log("DOCUMENT bYE");
//}, false);
// Load list after page load
window.addEventListener('load', function() {
	console.log("loading premium_list.m3u");
	path = "sites/teledunet/premium_list.m3u";
	//console.log(path);
	load_m3u(path);
});

