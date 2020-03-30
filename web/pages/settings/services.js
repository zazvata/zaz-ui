define([
    'settings/globals'
], function (globals) {
    var services = {
        //##template
        users: {
            get: {
                data: {
                    url: (window.CONFIG.mock) ? 'user/users.data.json' : globals.REST + '/users?project=zaz-ui'
                },
                me: {
                    url: (window.CONFIG.mock) ? 'user/#userId#.data.json' : globals.REST + '/users/#userId#'
                    // url: globals.REST + '/me'
                }
            }
        },
        preferences: {
            get: {
                data: {
                    url: globals.REST + '/preferences/#type#/#key#?userId=#userId#'
                }
            },
            post: {
                url: globals.REST + '/preferences'
            },
            delete: {
                url: globals.REST + '/preferences'
            }
        },
        ioManager: {
            get: {
                data: {
                    url: 'features/ioManager.json'
                }
            }
        },
        docViewer: {
            get: {
                url: 'gadgets/docViewer/docViewer.data.json'
            }
        },
        news: {
            get: {
                data: {
                    url: globals.REST + '/news'
                }
            }
        },
        compare: {
            get: {
                data: {
                    url: 'gadgets/compare/compare.data.json'
                }
            }
        },
        incomes: {
            get: {
                config: {
                    url: 'gadgets/incomes/incomes.config.json'
                },
                data: {
                    url: 'gadgets/incomes/incomes.data.json'
                }
            }
        },
        dataGrid: {
            get: {
                config: {
                    url: 'gadgets/dataGrid/dataGrid.config.json'
                },
                data: {
                    url: 'gadgets/dataGrid/dataGrid.data.json'
                }
            }
        },
        cars: {
            get: {
                config: {
                    url: 'gadgets/cars/cars.config.json'
                },
                data: {
                    url: (window.CONFIG.mock) ? 'gadgets/cars/cars#count#.data.json' : globals.REST + '/cars/#count#',
                    cache: {
                        age: 28800,
                        control: 'public'
                    },
                    timeout: 120000
                }
            }
        },
        applicationInformation: {
            get: {
                data: {
                    url: 'gadgets/applicationInformation/applicationInformation.data.json'
                }
            }
        },
        applications: {
            get: {
                config: {
                    url: 'gadgets/applications/applications.config.json'
                },
                data: {
                    url: globals.REST + '/applications?userId=#userId#'
                },
                app: {
                    url: globals.REST + '/applications/#id#'
                }
            },
            post: {
                new: {
                    url: globals.REST + '/applications'
                },
                action: {
                    url: globals.REST + '/applications/#action#'
                }
            },
            delete: {
                url: globals.REST + '/applications?userId=#userId#'
            }
        },
        notifications: {
            get: {
                data: {
                    url: globals.REST + '/notifications?userId=#userId#&viewed=#viewed#'
                }
            }
        }
    };

    if (window.CONFIG.debug) {
        window.services = services;
    }

    return services;
});