#pathological
==========

I'm tired of people being too slow to correct platform independent errors in Node.js.
This library wraps the API for the standard path library.  It will automatically convert all paths to either Windows or Nix depending on initial require call.

    npm install pathological

###Syntax
========
Auto-convert paths to current system

    path = require('pathological')
  or

    path = require('pathological').sys();

Auto-convert paths to \'s

    path = require('pathological').win();

Auto-convert paths to /'s

    path = require('pathological').nix();

Manual Convert to \'s

    path.winPath(path)

Manual Convert to /'s

    path.nixPath(path)

Manual Convert to current system

    path.sysPath(path)

Get seperator

    path.PATH_SEPERATOR

Get last windows drive letter encountered (defaults to C:)

    path.lastDrive
