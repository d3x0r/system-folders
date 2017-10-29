
//const os = require( 'os' );
[ { name:"win32", setup:win32 }
, { name:"linux", setup:linux} 
, { name:"mac", setup:mac} ]
.find( p=>{if( process.platform === p.name ) { module.exports = exports = p.setup(); return true;} } ) ;
                                                                                                   
if( !exports ) throw new Error( "Failed to identify directory rules for platform:", process.platform );

function win32() { 
	var systemUtil;
	try { systemUtil = require( './build/Debug/systemFolders.node' ); } catch(err) {
	try { systemUtil = require( './build/Release/systemFolders.node' ); } catch(err2) {
		throw err2;
	} }
	const paths = { home : process.home
		, appData : systemUtil.getAppData()
		, documents : systemUtil.getDocuments()
		, download : systemUtil.getDownload()
		, temp : systemUtil.getTemporary()
		};
	Object.seal( paths );
	return paths;
}



function linux() { 
	const paths = { home : process.home
		, appData : "/usr/local/share"
		, documents : null
		, download : null
		};
	paths.documents = paths.home + "/Documents";
	paths.documents = paths.home + "/Downloads";
	Object.seal( paths );
	return paths;
}


function mac() { 
	const paths = { home : process.home
		, appData : "/usr/local/share"
		, documents : null
		, download : null
		};
	paths.documents = paths.home + "/Documents";
	paths.documents = paths.home + "/Downloads";
	Object.seal( paths );
	return paths;
}
