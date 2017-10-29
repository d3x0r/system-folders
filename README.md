#system-folders

Result with standard folders appropriate by system.

##Usage

```
const systemFolders = require( '.' );
```

### System Folders result Object fields

| Directory |  Description |
|---|---|
| home | Current users home directory |
| appData | where common application local data should be stored |
| documents | current user's document directory |
| downloads | current user's download directory |



Win32 example output:

```
{
  home: C:\\Users\\Youzer,
  appData: 'C:\\Users\\Youzer\\AppData\\Roaming',
  documents: 'C:\\Users\\Youzer\\Documents',
  download: 'C:\\Users\\Youzer\\Downloads',
  temp: 'C:\\Users\\Youzer\\AppData\\Local\\Temp' 
}

```

