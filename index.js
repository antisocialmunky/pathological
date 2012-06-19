var path = require('path');
var pathological = function(mode){

    var convert = function(f, modifier){
        return function(){
            return modifier(f.apply(this,arguments));
        };
    };

    var winPath = function(p){return p.replace(/\//g,'\\');};
    var nixPath = function(p){return p.replace(/\\/g,'/');};
    var modifier = nixPath;

    if(mode === 'win32'){
        modifier = winPath;
    }

    pathological.prototype = {
        normalize   : convert(path.normalize, modifier),
        join        : convert(path.join, modifier),
        resolve     : convert(path.resolve, modifier),
        relative    : convert(path.relative, modifier),
        dirname     : convert(path.dirname, modifier),
        basename    : path.basename,
        extname     : path.extname,
        exists      : path.exists,
        existsSync  : path.existsSync,
        winPath     : winPath,
        nixPath     : nixPath,
        sysPath     : function(p){return process.platform === 'win32' ? winPath(p) : nixPath(p);}
    };
};

module.exports = pathological;
