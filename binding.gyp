{
  'conditions': [
     ['OS=="win"', {

        "targets": [
          {
            "target_name": "systemFolders",
            "sources": [ "src/win32_util.cc" ],
          }
        ]  
      },
      'OS!="win"', {

        "targets": [
          {
            "target_name": "systemFolders",
            //"sources": [ "" ],
          }
        ]  
      }

     ]
  ]
}

