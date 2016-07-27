(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready to use :)'
        }
    };
    var vars = {
};

    var descriptor = {
        blocks: [
	    [' ', 'Create var %s', 'create', 'var'],
	    [' ', 'Set Var %s to %s', 'set', 'var', '0'],
	    [' ', 'Change %s by %n', 'change', '', 1],
	    ['r', 'Read Var %s', 'read', ''],
	    ['r', 'Who made this?', 'author']
        ],

	menus: {
	}
    };
    ext.set = function(v, value) {
	vars[v] = value;
    };
    ext.create = function(v) { 
    	var[v] = 0;
    };
    ext.change = function(v, value) {
	//vars[v] += value;
	for(var i in value){
		vars[v] ++;
	}
	}
    };
    ext.read = function(v) {
		return vars[v];
    };
    ext.author = function(a) {
		return '@Csf30816 made this project :)';
    };

    ScratchExtensions.register('Variable Scripts', descriptor, ext);
})({});
