(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready'
        };
    };

    var descriptor = {
        blocks: [
            ['r', 'Connect using code %s', 'connect', 'HgI2)#rD2J']
        ],

        menus: {}
    };
    ext.connect = function (code) {
        $.ajax({
            url: 'http://bank-r2dbconn.htaccessgenerator.cf/connect/db/bank/',
            dataType: 'text',
            success: function (responseText) {
                messages = responseText;
                callback(messages);
            }
        })
    }
    ScratchExtensions.register('Variable Scripts', descriptor, ext);
})({});
