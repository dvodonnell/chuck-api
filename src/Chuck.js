var lib = {
    express : require('express'),
    socketio : require('socket.io')
};

var ChuckAPI = function(config) {

    if (this._validateConfig(config)) {
        this._parseConfig(config);
        this._instantiate();
        this._initialize();
    }

};

ChuckAPI.prototype = {

    _validateConfig : function(config) {

    },

    _parseConfig : function(config) {

        this.source = config.source;
        this.routes = config.routes;

    },

    _instantiate : function() {

        this.app = lib.express();

    },

    _initialize : function() {

        for (routePath in this.routes) {
            for (var i=0; i<this.routes[routePath].length; i++) {
                var routeConfig = this.routes[routePath][i];
                for (var j=0; j < routeConfig.method.length; j++) {
                    this.app[routeConfig.method[j]](
                        routePath,
                        function(req, res) {

                        }
                    );
                }
            }
        }

    },

    run : function() {



    }

};

module.exports = ChuckAPI;
