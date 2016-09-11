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
            ['r', '%s s messages number', 'messages', 'csf30816'],
            ['r', 'Projects', 'projects'],
            ['r', '☁ %s of project %s', 'cloud', 'Cloud', '10080213']
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
                callback(number);
            }
        })
    }
    ext.projects = function (callback) {
        $.ajax({
            url: 'https://api-staging.scratch.mit.edu/projects/count/all',
            dataType: 'json',
            success: function (responseText) {
                number = responseText['count'];
                callback(number);
            }
        })
    }
    ext.cloud = function (name, id, callback){
		$.getJSON('http://crossorigin.me/http://scratch.mit.edu/varserver/' + id, function(json){
			console.log(json);
			for (var i=0; i<json['variables'].length; i++){
				console.log(json['variables'][i])
				if (json['variables'][i]['name'] == "☁ " + name){
					console.log(json['variables'][i]['name']);
					callback(json['variables'][i]["value"]);
				}
			}
		
		});
	};
    ScratchExtensions.register('Scratch API', descriptor, ext);
})({});
