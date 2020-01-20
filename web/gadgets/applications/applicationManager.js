define([
    'jquery.plugins',
    'handlebars-helpers',
    'common/formatter',
    'framework/framework',
    'widgets/zazOverlay/zazOverlay',
    'css!gadgets/applications/applicationManager'
], function (
    $,
    HBS,
    formatter,
    framework
) {
    var newApplication = {
        user: null,
        deferred: null,

        newId: function () {
            var length = 3;
            var timestamp = new Date().getTime();
            var ts = timestamp.toString();
            var parts = ts.split('').reverse();
            var id = '';
    
            function _getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
    
            for (var i = 0; i < length; ++i) {
                var index = _getRandomInt(0, parts.length - 1);
                id += parts[index];
            }
            return id;
        },

        show: function () {
            var context = this;
            
            this.deferred = $.Deferred();
            this._getUsers().then(function () {
                context._renderLayout();
                context._loadUsers();
                context.$overlay.zazOverlay({
                    title: 'New Application',
                    'button-click': context._handleButtonClick.bind(context)
                });
                context.$overlay.find('.new-application-title').val('App-' + context.newId())
            });

            return this.deferred.promise();
        },

        _getUsers: function () {
            var context = this,
                deferred = $.Deferred();

            function error(response, textStatus) {
                this.$overlay.find('.zaz-overlay-content').html('There was an error!');
                deferred.reject();
            }

            function success(response) {
                context.users = response;
                deferred.resolve();
            }

            framework.serviceManager.exec({
                service: 'users.get.data',
                success: success,
                error: error
            });

            return deferred.promise();
        },

        _renderLayout: function () {
            var $overlay = $(HBS['gadgets/applications/newApplicationOverlay']());
            $overlay.appendTo('body');
            this.$overlay = $overlay;
        },

        _loadUsers: function () {
            var context = this;

            $.each(this.users, function (i, user) {
                if (user.userId.toString() === window.USERID) {
                    return true;
                }
                if (user.role === 'admin') {
                    context.$overlay.find('.new-application-approvers select').append(`<option value="${user.userId}">${user.lastName + ', ' + user.firstName}</option>`)
                }
                if (user.role === 'user') {
                    context.$overlay.find('.new-application-reviewers select').append(`<option value="${user.userId}">${user.lastName + ', ' + user.firstName}</option>`)
                }
                return true;
            });
        },

        _handleButtonClick: function (e, data) {
            var strAction = data.action;

            switch (strAction) {
                case 'cancel':
                    this.close();
                    break;
                case 'ok':
                    this._createApp();
                    break;
                default:
                    break;
            }
        },

        deleteAll: function () {
            var deferred = $.Deferred();

            framework.serviceManager.exec({
                service: 'applications.delete',
                params: {
                    userId: window.USERID
                },
                success: deferred.resolve,
                error: deferred.reject,
                type: 'DELETE'
            });

            return deferred.promise();
        },

        close: function () {
            this.$overlay.zazOverlay('close');
        },

        _validateApp: function () {
            if (this.$overlay.find('.new-application-title').val() === '') {
                this.$overlay.find('.new-application-title').focus();
                return false;
            }
            return true;
        },

        _createApp: function () {
            var context = this,
                params = {};

            if (!this._validateApp()) {
                return false;
            }

            params = {
                title: this.$overlay.find('.new-application-title').val(),
                creator: window.USERID,
                approver: this.$overlay.find('.new-application-approvers select').val(),
                reviewer: this.$overlay.find('.new-application-reviewers select').val(),
            };

            function success() {
                context.deferred.resolve();
                context.close();
            }

            function error() {
                context.deferred.reject();
                alert('There was an error!');
            }

            framework.serviceManager.exec({
                service: 'applications.post.new',
                data: JSON.stringify(params),
                success: success,
                error: error,
                type: 'POST'
            });
        }
    };

    return newApplication;
});