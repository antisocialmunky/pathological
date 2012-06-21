var path = require('path');

var isWin = process.platform === 'win32';

var pathological;
var winPath = function(p){return p.replace(/\//g,'\\');};
var nixPath = function(p){if(p.charAt(1) === ':'){pathological.lastDrive = p.slice(0,2);} return p.replace(/^.:/,'').replace(/\\/g,'/');};
var sysPath = function(p){return isWin ? winPath(p) : nixPath(p);},


pathological = {
    normalize   : function(){return pathological.modifier(path.normalize.apply(pathological,arguments));},
    join        : function(){return pathological.modifier(path.join.apply(pathological,arguments));},
    resolve     : function(){return pathological.modifier(path.resolve.apply(pathological,arguments));},
    relative    : function(){return pathological.modifier(path.relative.apply(pathological,arguments));},
    dirname     : function(){return pathological.modifier(path.dirname.apply(pathological,arguments));},
    basename    : path.basename,
    extname     : path.extname,
    exists      : path.exists,
    existsSync  : path.existsSync,
    winPath     : winPath,
    nixPath     : nixPath,
    sysPath     : sysPath,
    modifier    : sysPath,
    win         : function(){pathological.modifier = winPath;return pathological;},
    nix         : function(){pathological.modifier = nixPath;return pathological;},
    sys         : function(){pathological.modifier = sysPath;return pathological;},
    PATH_SEPERATOR : isWin ? '\\' : '/',
    lastDrive   : 'C:'
};

module.exports = pathological;
