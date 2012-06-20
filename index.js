var path = require('path');

var winPath = function(p){return p.replace(/\//g,'\\');};
var nixPath = function(p){return p.replace(/\\/g,'/');};
var sysPath = function(p){return process.platform === 'win32' ? winPath(p) : nixPath(p);},


pathological = {
    normalize   : function(){return this.modifier(path.normalize.apply(this,arguments));},
    join        : function(){return this.modifier(path.join.apply(this,arguments));},
    resolve     : function(){return this.modifier(path.resolve.apply(this,arguments));},
    relative    : function(){return this.modifier(path.relative.apply(this,arguments));},
    dirname     : function(){return this.modifier(path.dirname.apply(this,arguments));},
    basename    : path.basename,
    extname     : path.extname,
    exists      : path.exists,
    existsSync  : path.existsSync,
    winPath     : winPath,
    nixPath     : nixPath,
    sysPath     : sysPath,
    modifier    : sysPath,
    win         : function(){this.modifier = winPath;return this;},
    nix         : function(){this.modifier = nixPath;return this;},
    sys         : function(){this.modifier = sysPath;return this;}
};

module.exports = pathological;
