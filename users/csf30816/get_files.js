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
            [' ', 'Get file from URL: %s', 'getURL', 'https://scratch.mit.edu']
        ],

        menus: {}
    };
    ext.getURL = function(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send();
        alert(xmlHttp.responseText);
    };

    ScratchExtensions.register('Get File', descriptor, ext);
})({});
