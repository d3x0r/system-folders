#system-folders

Result with standard folders appropriate by system.

##Usage

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



Win32 example output (without app name configured):

```
{
  home: C:\\Users\\Youzer,
  appData: 'C:\\Users\\Youzer\\AppData\\Local',
  documents: 'C:\\Users\\Youzer\\Documents',
  download: 'C:\\Users\\Youzer\\Downloads',
  temp: 'C:\\Users\\Youzer\\AppData\\Local\\Temp' 
}

```

Win32 example output (app name configured):

```
{
  home: C:\\Users\\Youzer,
  appData: 'C:\\Users\\Youzer\\AppData\\Local\\myAppName',
  documents: 'C:\\Users\\Youzer\\Documents\\myAppName',
  download: 'C:\\Users\\Youzer\\Downloads',
  temp: 'C:\\Users\\Youzer\\AppData\\Local\\Temp\\myAppName' 
}

```

