(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready to use :)'
        };
    };
    var vars = {};

    var descriptor = {
        blocks: [
            [' ', 'Create var %s', 'create', 'var'],
            [' ', 'Set Var %s to %s', 'set', 'var', '0'],
            [' ', 'Change %s by %n', 'change', 'var', 1],
            ['r', 'Read Var %s', 'read', 'var'],
            ['r', 'Who made this?', 'author']
        ],

        menus: {}
    };

    ScratchExtensions.register('Variable Scripts', descriptor, ext);
})({});
