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
            [' ', 'Get file from URL: %s', 'getURL', 'http://lego.com'],
            ['r', 'Return file contents of %s', 'rGetURL', 'http://lego.com']
        ],

        menus: {}
    };
    ext.getURL = function(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlhttp.setRequestHeader("Access-Control-Allow-Origin");
        xmlHttp.send();
        alert(xmlHttp.responseText);
    };
    ext.rGetURL = function(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlhttp.setRequestHeader("Access-Control-Allow-Origin");
        xmlHttp.send();
        return(xmlHttp.responseText);
    }

    ScratchExtensions.register('Get File', descriptor, ext);
})({});
