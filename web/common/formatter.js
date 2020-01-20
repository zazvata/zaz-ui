define(['jquery',
    'vendor/moment/moment.min'
], function ($, moment) {
    var formatter = {};
    
    formatter.dateFormat = {
        format: function (currentDate, strFormat) {

            if (typeof currentDate !== 'object') {
                currentDate = new Date(currentDate);
            }
            if (!currentDate || currentDate.toString() === 'Invalid Date') {
                return currentDate;
            }
            return moment(currentDate).format(strFormat);
        }
    };

    formatter.nameFormat = {
        initialName: function (user) {
            var firstInitial = formatter.nameFormat.firstInitial(user),
                lastName = user.lastName || '',
                middleName = user.middleName || '',
                ret = firstInitial + (firstInitial ? '. ' : '') + middleName.charAt(0) + (middleName ? '. ' : '') + lastName.charAt(0) + (lastName ? '.' : '');
            return ret.trim().toUpperCase();
        },
        firstInitial: function (user) {
            return (user && user.firstName) ? user.firstName.substring(0, 1) : '';
        },
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

    formatter.formatNumberWithCommas = function (num) {
        if (typeof num !== 'number') {
            num = parseInt(num);
        }
        num = num || 0;
        var ret = num.toLocaleString();
        return ret;
    };

    formatter.formatPhone = function (s) {
        return s.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    };

    formatter.formatPhoneWithParenthesis = function (s) {
        return (typeof s === 'string') ? s.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3') : '';
    };

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