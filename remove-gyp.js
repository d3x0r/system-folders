const fs = require( 'fs' );
if( process.platform != "win32" )
	fs.unlinkSync( "./binding.gyp" );
