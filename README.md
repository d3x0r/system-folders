# System Folders

Result with standard folders appropriate by system.

A Note on extending paths... many people have a misconception that backslash ('\\') is the only valid path character on windows.  This is not true; 
instead windows accepts internall either forward-slash ('/') or backslash('\\') as equivalent path separators.  The only exception to this is when specifying a 
path that is on a remote computer share, in which case backslash('\\') must be used as in '\\\\computer\\share' but after that point forward slashses
may be used.  On all linux systems only '/' is valid.

Please leave issues on github for feature requests/fixes, questions, comments or criticisms.  Or [![Gitter](https://badges.gitter.im/d3x0r/system-folders.svg)](https://gitter.im/d3x0r/system-folders?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Usage

```
const systemFolders = require( '.' );
systemFolders( "myAppName" ); // configure paths to include my application's name
```

### System Folders result Object fields

| Directory |  Description |
|---|---|
| home | Current users home directory |
| appData | where common application local data should be stored |
| documents | current user's document directory |
| downloads | current user's download directory |
| temp | where to put temporary files |



#### Win32 example output (without app name configured):

```
{
  home: C:\\Users\\Youzer,
  appData: 'C:\\Users\\Youzer\\AppData\\Local',
  documents: 'C:\\Users\\Youzer\\Documents',
  download: 'C:\\Users\\Youzer\\Downloads',
  temp: 'C:\\Users\\Youzer\\AppData\\Local\\Temp' 
}

```

#### Win32 example output (app name configured):

```
{
  home: C:\\Users\\Youzer,
  appData: 'C:\\Users\\Youzer\\AppData\\Local\\myAppName',
  documents: 'C:\\Users\\Youzer\\Documents\\myAppName',
  download: 'C:\\Users\\Youzer\\Downloads',
  temp: 'C:\\Users\\Youzer\\AppData\\Local\\Temp\\myAppName' 
}

```





## Changelog

- 1.0.114 - Fixed so binary code is only built on windows platforms.
- 1.0.0-1.0.113 - Initiial commit; Work out non-building on non-windows systems.
