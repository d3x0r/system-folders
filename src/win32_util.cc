#define WINVER _WIN32_WINNT_VISTA
#define _WIN32_WINNT _WIN32_WINNT_VISTA
#define NTDDI_VERSION NTDDI_VISTA
#include <node.h>
#include <v8.h>
#include <node_object_wrap.h>
#include <Shlobj.h>

#define ReadOnlyProperty (PropertyAttribute)((int)PropertyAttribute::ReadOnly | PropertyAttribute::DontDelete)
#define SET_READONLY_METHOD( object, name, method ) (object)->DefineOwnProperty( isolate->GetCurrentContext(), String::NewFromUtf8(isolate, name), v8::Function::New(isolate, method ), ReadOnlyProperty )

using namespace v8;

static void getAppData( const FunctionCallbackInfo<Value>& args ) {
	CHAR path[MAX_PATH];
	HRESULT hr = SHGetFolderPath( NULL, CSIDL_LOCAL_APPDATA, NULL, SHGFP_TYPE_CURRENT, path );
	if( hr == S_OK )
		args.GetReturnValue().Set( String::NewFromUtf8( args.GetIsolate(), path ) );
	else
		args.GetReturnValue().Set( String::NewFromUtf8( args.GetIsolate(), "." ) );
}

static void getDocuments( const FunctionCallbackInfo<Value>& args ) {
	CHAR path[MAX_PATH];
	HRESULT hr = SHGetFolderPath( NULL, CSIDL_COMMON_DOCUMENTS, NULL, SHGFP_TYPE_CURRENT, path );
	if( hr == S_OK )
		args.GetReturnValue().Set( String::NewFromUtf8( args.GetIsolate(), path ) );
	else
		args.GetReturnValue().Set( String::NewFromUtf8( args.GetIsolate(), "." ) );
}

static void getDownload( const FunctionCallbackInfo<Value>& args ) {
	PWSTR path;
	HRESULT hr = SHGetKnownFolderPath( FOLDERID_Downloads, 0, NULL, &path );
	if( hr == S_OK )
		args.GetReturnValue().Set( String::NewFromTwoByte( args.GetIsolate(), (uint16_t*)path ) );
	else
		args.GetReturnValue().Set( String::NewFromTwoByte( args.GetIsolate(), (uint16_t*)L"." ) );
}

static void getTemporary( const FunctionCallbackInfo<Value>& args ) {
	CHAR path[MAX_PATH];
	DWORD dwLen;
	if( dwLen = GetTempPath( MAX_PATH+1, path ) )
		args.GetReturnValue().Set( String::NewFromUtf8( args.GetIsolate(), path, v8::NewStringType::kNormal, dwLen-1 ).ToLocalChecked() );
	else
		args.GetReturnValue().Set( String::NewFromUtf8( args.GetIsolate(), "." ) );
}



void Init( Handle<Object> exports ) {

	Isolate *isolate = Isolate::GetCurrent();
	SET_READONLY_METHOD( exports, "getAppData", getAppData );
	SET_READONLY_METHOD( exports, "getDocuments", getDocuments );
	SET_READONLY_METHOD( exports, "getDownload", getDownload );
	SET_READONLY_METHOD( exports, "getTemporary", getTemporary );

}



NODE_MODULE( SomeName, Init)


