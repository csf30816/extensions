(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Ready to use :)'
        };
    };

    var descriptor = {
        blocks: [
            [' ', 'Follow %s', 'follow', 'csf30816'],
            ['r', '%s s messages number', 'messages', 'csf30816']
        ],

        menus: {}
    };
    ext.follow = function (user) {
        $.ajax({
            type: "PUT",
            url: "https://scratch.mit.edu/site-api/users/followers/" + user + "/add/",
            data: {
                usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username
            }
        })
    }
    ext.messages = function (callback) {
        $.ajax({
            url: 'https://scratch.mit.edu/messages/ajax/get-message-count/',
            dataType: 'json',
            success: function (responseText) {
                number = responseText['msg_count'];
                return(number);
            }
        })
    }
    ScratchExtensions.register('Scratch API', descriptor, ext);
})({});
