
setInterval( function () {
	var a = hardRequire('changable.js');
	a();
}, 1000);

function hardRequire (name) {
	var cacheName = process.cwd() + "/" + name;
	delete require.cache [cacheName];
	return require('./' + name);
}
