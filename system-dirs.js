// https://blog.softhints.com/windows-and-linux-variable-equivalents/
// https://serverfault.com/questions/790285/linux-standard-path-information-similar-to-windows-path-variables-like-appda
// 

//const os = require( 'os' );
[ { name:"win32", setup:win32 }
, { name:"linux", setup:linux} 
, { name:"mac", setup:mac} ]
.find( p=>{if( process.platform === p.name ) { module.exports = exports = p.setup(); return true;} } ) ;
if( !exports ) throw new Error( "Failed to identify directory rules for platform:", process.platform );

function toString() {
 	var out = '';
	Object.keys( exports ).forEach( key=>{ if( key == 'toString' ) return; if( !out ) out += "{"; else out += ","; out += key + ":" + JSON.stringify(exports[key]); } );
	if( out )
		out += "}" 
	else 
		return "{}";
	return out;
}                                                                                                   

function win32() {
	const os = require('os'); 
	function paths( appName ) {
		paths.appData = paths.appData + "/" + appName;
		paths.documents = paths.documents + "/" + appName;
		paths.temp = paths.temp + "/" + appName;
	}
	try { systemUtil = require( './build/Debug/systemFolders.node' ); } catch(err) {
	try { systemUtil = require( './build/Release/systemFolders.node' ); } catch(err2) {
		throw err2;
	} }
	paths.home = process.env.HOME || os.homedir()
	paths.appData = systemUtil.getAppData()
	paths.documents = systemUtil.getDocuments()
	paths.download = systemUtil.getDownload()
	paths.temp = systemUtil.getTemporary()
	paths.toString = toString;
	Object.seal( paths );
	return paths;
}



function linux() { 
	function paths( appName ) {
		paths.appData = process.env.HOME + "/." + appName;
		paths.documents = paths.documents + "/" + appName;
		paths.temp = paths.temp + "/" + appName;
	}
	paths.home = process.env.HOME
	paths.appData = "/usr/local/share"
	paths.documents = process.env.HOME + "/Documents"
	paths.download = process.env.HOME + "/Downloads"
	paths.temp = process.env.TEMP || "/tmp/var/tmp"
	paths.toString = toString;

	Object.seal( paths );
	return paths;
}


function mac() { 
	function paths( appName ) {
		
	}
	paths.home = process.home
	paths.appData = process.env.HOME + ".node-app"
	paths.documents = process.env.HOME + "/Documents"
	paths.download = process.env.HOME + "/Downloads"
	paths.temp = process.env.TEMP || "/tmp/var/tmp"
	paths.toString = toString;
	
	Object.seal( paths );
	return paths;
}
