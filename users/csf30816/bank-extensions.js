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
            ['r', 'Connect using code %s', 'connect', 'HgI2rD2J']
        ],

        menus: {}
    };
    ext.connect = function (code, callback) {
        /*$.ajax({
            url: 'http://bank-r2dbconn.htaccessgenerator.cf/connect/db/bank/',
            dataType: 'text',
            success: function (responseText) {
                messages = responseText;
                callback(messages);
            }
        })*/
        $.ajax({
            url: 'https://scratch.mit.edu/messages/ajax/get-message-count/',
            dataType: 'json',
            success: function (responseText) {
                messages = responseText['msg_count'];
                callback(messages);
            }
        })
    }
    ScratchExtensions.register('Bank', descriptor, ext);
})({});
