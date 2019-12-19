define(['jquery',
    'vendor/moment/moment.min'
], function ($, moment) {
    /**
     * @namespace formatter
     * @static
     * @global
     * @classdesc Provides Formatting Utilties
     */
    var formatter = {};

    /**
     * Tests if the date object is valid.
     * @param date  Date object.
     *
     */
    function isDate(date) {
        return (typeof date === 'object' && date instanceof Date && date.toString() !== 'Invalid Date');
    }

    //handle a string, millis, or already a date
    //this needs double-checked against IE, which doesn't seem to support all
    //Date constructors properly
    function parseDate(date) {
        var d;
        if (typeof date === 'string') {
            //gets millis
            date = Date.parse(date);
        } else if (isDate(date)) {
            return date;
        }
        // create date
        d = new Date(date);
        // check if it's actually date
        if (!isDate(d)) {
            return null;
        }
        //ctor should handle existing or millis
        return d;
    }

    /**
     * @description Formates HTML
     * @memberof formatter
     */
    formatter.mimeTypeMap = {
        'application/pdf': 'pdf'
    };

    formatter.htmlFormat = {
        encode: function (string) {
            return string.replace(/./g, function (chr) {
                return chr.match(/[\w\d]/) ? chr : '&#' + chr.charCodeAt(0) + ';';
            });
        },
        decode: function (string) {
            return string.replace(/&#[0-9]+;/g, function (text) {
                return String.fromCharCode(text.match(/[0-9]+/)[0]);
            });
        }
    };

    formatter.formatString = function () {
        var args = arguments;

        return args[0].replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] === 'undefined' ? match : args[number];
        });
    };

    /**
     * @description Formats Dates
     * @memberof formatter
     */
    formatter.dateFormat = {
        arrMonths: function (date) {
            return typeof date !== 'number' ? moment(new Date(date))
                .format('MMMM') : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'
                ];
        },
        arrDays: function (date) {
            return typeof date !== 'number' ? moment(new Date(date))
                .format('dddd') : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        },
        toHMSTime: function () {
            return moment().format('h:mm:ss a');
        },
        fromISODate: function (s, strFormat) {
            return this.formatDate(s, /^(\d\d\d\d)-(\d\d)-(\d\d).*$/, '$1-$2-$3', strFormat);
        },
        /**
         * Strips out milliseconds since the backend doesn't support periods in the date
         * @param date
         * @returns {string}
         */
        noteModifiedDate: function (date) {
            var d = parseDate(date);
            return d.toISOString().replace(/\.\d{3}/gi, '');
        },
        datetimeISO8601: function (date) {
            var d = parseDate(date);
            return moment(d).format('YYYY-MM-DDTHH:MM:mm') + 'Z';
        },
        today: function () {
            return moment(new Date()).format('MM/DD/YYYY');
        },
        getDayIndex: function (strDay) {
            var i;

            for (i = 0; i < formatter.dateFormat.arrDays.length; i += 1) {
                if (this.dateFormat.arrDays[i] === strDay) {
                    return i;
                }
            }
        },
        /*test*/
        getDay: function (strDate) {
            var currentDate = new Date(strDate);
            return currentDate.getDay();
        },
        nextDay: function (strDate) {
            return moment(new Date(strDate), 'MM/DD/YYYY').add(1, 'days').format('MM/DD/YYYY');
        },
        prevDay: function (strDate) {
            return moment(new Date(strDate), 'MM/DD/YYYY').subtract(1, 'days').format('MM/DD/YYYY');
        },
        nextWeek: function (strDate) {
            return moment(new Date(strDate), 'MM/DD/YYYY').add(7, 'days').format('MM/DD/YYYY');
        },
        prevWeek: function (strDate) {
            return moment(new Date(strDate), 'MM/DD/YYYY').subtract(7, 'days').format('MM/DD/YYYY');
        },
        getDayOffset: function (strDate, intOffset) {
            return moment(new Date(strDate), 'MM/DD/YYYY').add(intOffset, 'days').format('MM/DD/YYYY');
        },
        formatDate: function (date, strFormat) {
            strFormat = (strFormat) ? strFormat : 'MM/DD/YYYY';
            return moment(new Date(date)).format(strFormat);
        },
        formatDateWithTZ: function (date, strFormat, intTz) {
            strFormat = (strFormat) ? strFormat : 'MM/DD/YYYY';
            return moment(new Date(date)).utcOffset(intTz).format(strFormat);
        },
        dateDisplay: function (date, defaultDisplay) {

            return this.formatDate(date, defaultDisplay);
        },
        //Passes the date, but not time values to formatString
        format: function (currentDate, strFormat) {

            if (typeof currentDate !== 'object') {
                currentDate = this.formatDate(currentDate, 'MM/DD/YYYY');
                currentDate = new Date(currentDate);
            }
            if (!currentDate || currentDate.toString() === 'Invalid Date') {
                return currentDate;
            }
            currentDate = this.formatString(currentDate, strFormat);
            return moment(new Date(currentDate)).format(strFormat);
            /*return currentDate;*/
        },
        //Passes the time and date to formatString
        localizedFormat: function (currentDate, strFormat) {
            return moment(new Date(currentDate)).format(strFormat);

        },
        //Called by format and localizedFormat to format the time and/or date string
        formatString: function (currentDate, strFormat) {
            strFormat = (strFormat) ? strFormat : 'MM/DD/YYYY';
            return moment(new Date(currentDate)).format(strFormat);
        },
        /**
         * Returns a value which depends on the given date relative to now:
         *   if the given date is within "today" then only the time portion will be returned.
         *   if the given date is within the current year then only the month and day will be returned.
         *   in all other cases, a date with the format of MM/dd/yyyy will be returned.
         * @param date The date value to be converted
         * @param undefinedValue Comparison value to determine if the date is set
         * @returns {*|string}
         */
        smartTimeDisplay: function (date, undefinedValue) {
            var val = undefinedValue || '',
                dateObj,
                now = new Date();

            if (date) {
                dateObj = new Date(date);
                if (dateObj.getFullYear() === now.getFullYear()) {
                    if (dateObj.getMonth() === now.getMonth() && dateObj.getDate() === now.getDate()) {
                        val = formatter.dateFormat.format(dateObj, 'hh:mm A');
                    } else {
                        val = formatter.dateFormat.format(dateObj, 'MMM d');
                    }
                } else {
                    val = formatter.dateFormat.format(dateObj, 'MM/DD/YYYY');
                }
            }

            return val;
        },
        timeDisplay: function (date, undefinedValue) {
            var d;
            if (date) {
                d = new Date(date);
                return formatter.dateFormat.format(d, 'hh:mm:ss A');
            }
            return undefinedValue || '';
        }
    };

    /**
     * @description Formats Names
     * @memberof formatter
     */
    formatter.nameFormat = {
        /**
         * Formats the given user object with a first initial and last name, capitalized. e.g. "J. SMITH"
         * @param  {object} user User object, containing fields such as firstName and lastName
         * @return {string} A string containing the first initial and last name, such as "J. SMITH"
         */
        initialName: function (user) {
            var firstInitial = formatter.nameFormat.firstInitial(user),
                lastName = user.lastName || '',
                middleName = user.middleName || '',
                ret = firstInitial + (firstInitial ? '. ' : '') + middleName.charAt(0) + (middleName ? '. ' : '') + lastName.charAt(0) + (lastName ? '.' : '');
            return ret.trim().toUpperCase();
        },
        /**
         * Simply returns the first initial of the first name. Private mini helper
         * @param  {object} user
         * @return {string} Just the first initial if there is a first name, otherwise empty string.
         */
        firstInitial: function (user) {
            return (user && user.firstName) ? user.firstName.substring(0, 1) : '';
        },
        /**
         * Returns last and first name separated by comma, capitalized. e.g. "STANFORD, CHRISTOPHER"
         * @param  {object} user
         * @return {string} Just the first initial if there is a first name, otherwise empty string.
         */
        lastFirstName: function (user) {
            var first, formatted, last;
            formatted = '';
            if (user && user.firstName && user.lastName) {
                first = user.firstName.substr(0, 1).toUpperCase() + user.firstName.substr(1);
                last = user.lastName.toUpperCase();
                formatted = last + ', ' + first;
            }
            return formatted;
        },

        lastFirstMiddle: function (user) {
            var formatted = '';
            formatted += user.lastName || '';
            formatted += (user.lastName && (user.firstName || user.middleName)) ? ', ' : '';
            formatted += user.firstName || '';
            formatted += (user.firstName && user.middleName) ? ' ' : '';
            formatted += user.middleName || '';
            return formatted;
        },

        firstMiddleLast: function (user) {
            var formatted = '';
            formatted += user.firstName || '';
            formatted += (user.firstName && user.middleName) ? ' ' : '';
            formatted += user.middleName || '';
            formatted += (user.lastName && (user.firstName || user.middleName)) ? ', ' : '';
            formatted += user.lastName || '';
            return formatted;
        },

        fullName: function (user) {
            var formatted = '';
            formatted += user.firstName || '';
            formatted += (user.firstName && user.middleName) ? ' ' : '';
            formatted += user.middleName || '';
            formatted += (user.lastName && (user.firstName || user.middleName)) ? ' ' : '';
            formatted += user.lastName || '';
            return formatted;
        },

        userInfo: function (userObject) {
            var artUnit, first, formatted, last;
            formatted = '';
            if (userObject && userObject.firstName && userObject.lastName) {
                first = userObject.firstName.substr(0, 1).toUpperCase() + userObject.firstName.substr(1);
                last = userObject.lastName.substr(0, 1).toUpperCase() + userObject.lastName.substr(1);
                artUnit = userObject.artUnit;
                formatted = last + ', ' + first + (artUnit ? ' (' + artUnit + ')' : '');
            }
            return formatted;
        },

        lastFirstUpperCase: function (lastName, firstName) {
            var formattedLastName;
            if (!lastName) {
                return '';
            }
            if (lastName.indexOf('et al') > 0) {
                formattedLastName = lastName.split(' ');
                formattedLastName[0] = formattedLastName[0].toUpperCase();
                formattedLastName = formattedLastName.join(' ');
                return formattedLastName;
            } else {
                return lastName.toUpperCase() + ', ' + firstName.toUpperCase();
            }
        }
    };

    /**
     * @description Formats Money
     * @memberof formatter
     */
    formatter.formatMoney = function (n, c, blnUseParens) {
        var d = '.',
            diff = n.toFixed(2),
            i,
            j,
            m,
            t = ',';

        if (!c) {
            c = 2;
        }

        n = Math.abs(n).toFixed(c);
        i = parseInt(n) + '';
        j = ((j = i.length) > 3) ? j % 3 : 0;
        m = (j ? i.substr(0, j) + t : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
            (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');

        if (diff >= 0) {
            m = '$' + m;
        } else if (diff < 0) {
            if (blnUseParens) {
                m = '$(' + m + ')';
            } else {
                m = '-$' + m;
            }
        }
        return m;
    };

    /**
     * @description Formats Numbers
     * @memberof formatter
     */
    formatter.formatNumber = function (n, c) {
        var d = '.',
            i,
            j,
            num,
            sign,
            t = ',';

        if (!c) {
            c = 2;
        }

        sign = (n < 0) ? '-' : '';
        n = Math.abs(n).toFixed(c);
        i = parseInt(n) + '';
        j = ((j = i.length) > 3) ? j % 3 : 0;
        num = sign + (j ? i.substr(0, j) + t : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
            (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
        return num;
    };

    /**
     * Given a number, return a string representation of that number with commas (or equivalent per locale)
     *     For example, given 7000 will return "7,000" in US
     * @param  {number} num The number. May also be a simple string such as "7000".
     * @return {string} String formatting of the number. ex: "123,456,789"
     */
    formatter.formatNumberWithCommas = function (num) {
        if (typeof num !== 'number') {
            num = parseInt(num);
        }
        num = num || 0;
        var ret = num.toLocaleString();
        return ret;
    };

    /**
     * @description Formats Phone Numbers xxx-xxx-xxxx
     * @memberof formatter
     */
    formatter.formatPhone = function (s) {
        return s.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    };

    /**
     * @description Formats Phone Numbers (xxx)xxx-xxxx
     * @memberof formatter
     */
    formatter.formatPhoneWithParenthesis = function (s) {
        return (typeof s === 'string') ? s.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3') : '';
    };
    /**
     * @description Removes all chars except alphabets and numbers
     * @memberof formatter
     */
    formatter.formatAlphaNum = function (s) {
        return s.replace(/[^a-zA-Z0-9]/g, '');
    };

    formatter.rgb2hex = function (rgb) {
        var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var arrrgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        function hex(x) {
            return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
        }

        return "#" + hex(arrrgb[1]) + hex(arrrgb[2]) + hex(arrrgb[3]);
    };

    formatter.hex2rgb = function (hex) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
        }
        throw new Error('Bad Hex');
    }

    return formatter;
});