define(['handlebars'], function(Handlebars) {

this["HBS"] = this["HBS"] || {};

this["HBS"]["features/about/about"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-overlay about-overlay\" role=\"dialog\" tabindex=\"0\">\r\n    <div class=\"zaz-overlay-header\">\r\n        <div class=\"left\">\r\n            <div class=\"zaz-overlay-header-title\" tabindex=\"0\" aria-label=\"About Zaz UI\">\r\n                About Zaz UI</div>\r\n        </div>\r\n        <div class=\"right\">\r\n            <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\" title=\"Close\">close</i>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"zaz-overlay-content\">\r\n        <div class=\"left\">\r\n            <div class=\"logo\">\r\n                <img class=\"icon\" src=\"./framework/images/logo.png\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"right\">\r\n            <div>\r\n                <span>Version</span>&nbsp;\r\n                <span class=\"version\"></span>\r\n            </div>\r\n            <div class=\"about-content\">\r\n                Next generation of UI Development Platform for Enterprise Web Applications.\r\n                <div class=\"section new\">\r\n                    <div class=\"about-content-title\">What's new!</div>\r\n                    <ol>\r\n                        <li>Material Design Icons Adopted for Ligatures (Accessbility)</li>\r\n                        <li>Performance Grid (beta) for Large Data Sets of 100K rows</li>\r\n                        <li>Developer Harness (beta) for Faster Development/Leak Detection</li>\r\n                        <li>Mobile Mode (beta) for Responsive Experience</li>\r\n                        <li>Continuous Improvement for Better UX/Styles administration</li>\r\n                        <li>Code Generation Templates for Simple and Grid Gadgets</li>\r\n                        <li>Component Link allowing users to share a specific Component with specific values</li>\r\n                    </ol>\r\n                </div>\r\n                <div class=\"section coming\">\r\n                    <div class=\"about-content-title\">What's coming!</div>\r\n                    <ol>\r\n                        <li>New Panel and Splitter Widgets (beta)</li>\r\n                        <li>Enhanced Inline/Multi Level Animated Menu</li>\r\n                    </ol>\r\n                </div>\r\n                <div class=\"section planned\">\r\n                    <div class=\"about-content-title\">What's planned!</div>\r\n                    <ol>\r\n                        <li>Dynamic Forms Widget</li>\r\n                        <li>Dynamic Forms Administration for feature development by leveraging \r\n                            configuration/customization features, enabling absolute control \r\n                            over UI/UX which turn into a challenge with COTS products</li>\r\n                    </ol>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-overlay-footer\">\r\n        <div class=\"left\"></div>\r\n        <div class=\"right\">\r\n            <button class=\"button zaz-effect zaz-effect-bar-bottom default\" data-action=\"ok\">OK</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["features/notifications/notifications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notification\" aria-hidden=\"true\">\r\n    <div class=\"header\">Notification</div>\r\n    <div class=\"content\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":33}}}) : helper)))
    + "</div>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-menu notificationsmenu\" aria-hidden=\"true\">\r\n    <div class=\"items\" role=\"menu\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"textItems") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":13,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"item\" role=\"menuitem\" tabindex=\"0\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"blnPopup") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"blnList") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n";
},"useData":true});

this["HBS"]["features/userPreferences/userPreferences"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-overlay userpreferences-overlay\" role=\"dialog\" tabindex=\"0\">\r\n    <div class=\"zaz-overlay-header\">\r\n        <div class=\"left\">\r\n            <div class=\"zaz-overlay-header-title\" tabindex=\"0\" aria-label=\"User preferences dialog\">User Preferences</div>\r\n        </div>\r\n        <div class=\"right\">\r\n            <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\" title=\"Close\">close</i>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"zaz-overlay-content\">\r\n        <div class=\"left\">\r\n            <div class=\"items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"name") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":17,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"language") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":20,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"font") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":23,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":26,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"mode") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":29,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"toolbar") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":32,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"tab") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":35,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"theme") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":38,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n        <div class=\"right\">\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-overlay-footer\">\r\n        <div class=\"left\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"reset") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":48,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"right\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"instantApply") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":55,"column":19}}})) != null ? stack1 : "")
    + "            <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"cancel\">Cancel</button>\r\n            <button class=\"button zaz-effect zaz-effect-bar-bottom default\" data-action=\"apply\">Apply</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right active\" tabindex=\"0\" data-pane=\"name\">Name</div> \r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"language\">Language</div> \r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"font\">Font</div> \r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"layout\">Layout</div> \r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"mode\">Mode</div> \r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"toolbar\">Toolbar</div> \r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"tab\">Tab</div> \r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"item zaz-effect zaz-effect-bar-right\" tabindex=\"0\" data-pane=\"theme\">Theme</div> \r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"reset\">Reset</button>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"instant\">\r\n                    <input type=\"checkbox\" class=\"instantApply\"> Instant Apply\r\n                </span> \r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"name\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Name Format Pane\">\r\n    <div class=\"header\">Choose a Name Format</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n        <tr>\r\n            <td class=\"title\">Format </td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"nameFormat\" data-key=\"nameFormat\" aria-label=\"Name Format\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"nameFormats") : stack1),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":20},"end":{"line":73,"column":29}}})) != null ? stack1 : "")
    + "                </select>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"unless","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":24},"end":{"line":72,"column":35}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":71,"column":43},"end":{"line":71,"column":52}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":71,"column":54},"end":{"line":71,"column":63}}}) : helper)))
    + "</option>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"language\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Language Pane\">\r\n    <div class=\"header\">Choose a Language</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n        <tr>\r\n            <td class=\"title\">Select Language </td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"language\" data-key=\"language\" aria-label=\"Language Settings\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"languages") : stack1),{"name":"each","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":20},"end":{"line":91,"column":29}}})) != null ? stack1 : "")
    + "                </select>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td colspan=\"2\">\r\n                <div class=\"flags\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"languages") : stack1),{"name":"each","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":98,"column":20},"end":{"line":105,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"unless","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":24},"end":{"line":104,"column":35}}})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"flag large\" data-lang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":100,"column":59},"end":{"line":100,"column":68}}}) : helper)))
    + "\" title=\"ISO 639-1 Code for "
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":100,"column":96},"end":{"line":100,"column":105}}}) : helper)))
    + " is "
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":100,"column":109},"end":{"line":100,"column":118}}}) : helper)))
    + "\">\r\n                            <div class=\"icon\"></div>\r\n                            <label>"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":102,"column":35},"end":{"line":102,"column":44}}}) : helper)))
    + "</label>\r\n                        </div>\r\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"font\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Font Pane\">\r\n    <div class=\"header\">Change Font Settings</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n        <tr>\r\n            <td class=\"title\">Family/Size</td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"family\" data-key=\"family\" aria-label=\"Font settings\">\r\n                    "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"systemFonts") : stack1),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":119,"column":20},"end":{"line":120,"column":85}}})) != null ? stack1 : "")
    + "\r\n                </select>\r\n            </td>\r\n            <td style=\"width:100px;\">\r\n                <select role=\"listbox\" class=\"size\" data-key=\"size\" aria-label=\"Font size setting\">\r\n                    "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"systemFontSizes") : stack1),{"name":"each","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":20},"end":{"line":127,"column":41}}})) != null ? stack1 : "")
    + "\r\n                </select>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"title\">Weight/Style </td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"weight\" data-key=\"weight\" aria-label=\"Apply Bold Font\">\r\n                <label>Bold</label>\r\n            </td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"style\" data-key=\"style\" aria-label=\"Apply Italic Style\">\r\n                <label>Italics</label>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"title\">Color </td>\r\n            <td colspan=\"2\">\r\n                <input type=\"text\" class=\"color\" data-key=\"color\" aria-label=\"Select Color\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td></td>\r\n            <td colspan=\"2\">\r\n                <input type=\"text\" class=\"wheelFontColor\" data-wcp-layout=\"block\" data-wcp-format=\"css\" />\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td colspan=\"3\" class=\"fontPreview\">\r\n                <div>The quick brown fox jumps over the lazy dog.</div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"unless","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":119,"column":51},"end":{"line":120,"column":75}}})) != null ? stack1 : "")
    + " ";
},"32":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n                    <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":120,"column":35},"end":{"line":120,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":120,"column":46},"end":{"line":120,"column":55}}}) : helper)))
    + "</option>";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"unless","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":55},"end":{"line":127,"column":31}}})) != null ? stack1 : "")
    + " ";
},"35":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n                    <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":126,"column":35},"end":{"line":126,"column":44}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":126,"column":46},"end":{"line":126,"column":55}}}) : helper)))
    + "</option>\r\n                    ";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"layout\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Layout Pane\">\r\n    <div class=\"header\">Settings for Layout</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"options") : stack1)) != null ? lookupProperty(stack1,"splitter") : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":165,"column":8},"end":{"line":172,"column":15}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"options") : stack1)) != null ? lookupProperty(stack1,"flip") : stack1),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":172,"column":16},"end":{"line":179,"column":15}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"options") : stack1)) != null ? lookupProperty(stack1,"orient") : stack1),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":179,"column":16},"end":{"line":186,"column":15}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"options") : stack1)) != null ? lookupProperty(stack1,"tab") : stack1),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":186,"column":16},"end":{"line":193,"column":15}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"layout") : stack1)) != null ? lookupProperty(stack1,"options") : stack1)) != null ? lookupProperty(stack1,"toolbar") : stack1),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":193,"column":16},"end":{"line":200,"column":15}}})) != null ? stack1 : "")
    + "    </table>\r\n</div>\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    return "        <tr>\r\n            <td class=\"title\">Show Splitter</td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"splitter\" data-key=\"splitter\" aria-label=\"Toggle Splitter\">\r\n            </td>\r\n        </tr>\r\n        ";
},"40":function(container,depth0,helpers,partials,data) {
    return "\r\n        <tr>\r\n            <td class=\"title\">Show Flip</td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"flip\" data-key=\"flip\" aria-label=\"Toggle Flip Zones\">\r\n            </td>\r\n        </tr>\r\n        ";
},"42":function(container,depth0,helpers,partials,data) {
    return "\r\n        <tr>\r\n            <td class=\"title\">Show Orientation</td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"orient\" data-key=\"orient\" aria-label=\"Toggle Flip Orientation\">\r\n            </td>\r\n        </tr>\r\n        ";
},"44":function(container,depth0,helpers,partials,data) {
    return "\r\n        <tr>\r\n            <td class=\"title\">Show Tabs</td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"tab\" data-key=\"tab\" aria-label=\"Toggle Tabs\">\r\n            </td>\r\n        </tr>\r\n        ";
},"46":function(container,depth0,helpers,partials,data) {
    return "\r\n        <tr>\r\n            <td class=\"title\">Show Toolbar</td>\r\n            <td>\r\n                <input type=\"checkbox\" class=\"toolbar\" data-key=\"toolbar\" aria-label=\"Toggle Toolbar\">\r\n            </td>\r\n        </tr>\r\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"mode\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Mode Pane\">\r\n    <div class=\"header\">Choose a View Mode</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"mode") : stack1),{"name":"if","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":207,"column":8},"end":{"line":217,"column":15}}})) != null ? stack1 : "")
    + "    </table>\r\n</div>\r\n";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td class=\"title\">Mode</td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"mode\" data-key=\"mode\" aria-label=\"Mode\">\r\n                    "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"mode") : stack1),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":20},"end":{"line":213,"column":85}}})) != null ? stack1 : "")
    + "\r\n                </select>\r\n            </td>\r\n        </tr>\r\n";
},"51":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"toolbar\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Toolbar Pane\">\r\n    <div class=\"header\">Choose a Toolbar Style</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"toolbar") : stack1),{"name":"if","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":224,"column":8},"end":{"line":234,"column":15}}})) != null ? stack1 : "")
    + "    </table>\r\n</div>\r\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td class=\"title\">Toolbar</td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"toolbar\" data-key=\"toolbar\" aria-label=\"Tab\">\r\n                    "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"toolbar") : stack1),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":20},"end":{"line":230,"column":85}}})) != null ? stack1 : "")
    + "\r\n                </select>\r\n            </td>\r\n        </tr>\r\n";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"tab\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Tab Pane\">\r\n    <div class=\"header\">Choose a Tab Style</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"panes") : stack1)) != null ? lookupProperty(stack1,"tab") : stack1),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":241,"column":8},"end":{"line":251,"column":15}}})) != null ? stack1 : "")
    + "    </table>\r\n</div>\r\n";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td class=\"title\">Tab</td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"tab\" data-key=\"tab\" aria-label=\"Tab\">\r\n                    "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"tab") : stack1),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":246,"column":20},"end":{"line":247,"column":85}}})) != null ? stack1 : "")
    + "\r\n                </select>\r\n            </td>\r\n        </tr>\r\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<div class=\"pane\" data-pane=\"theme\" tabindex=\"0\" role=\"region\" aria-hidden=\"false\" aria-label=\"Theme Pane\">\r\n    <div class=\"header\">Choose a Theme</div>\r\n    <table border=\"0\" cellpadding=\"5\">\r\n        <tr>\r\n            <td class=\"title\">Theme</td>\r\n            <td>\r\n                <select role=\"listbox\" class=\"theme\" data-key=\"theme\" aria-label=\"Theme\" data-description=\"\">\r\n                    "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"settings") : depth0)) != null ? lookupProperty(stack1,"themes") : stack1),{"name":"each","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":262,"column":20},"end":{"line":263,"column":153}}})) != null ? stack1 : "")
    + "\r\n                </select>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"title\">Theme Color </td>\r\n            <td>\r\n                <input type=\"text\" class=\"themeColor\" data-key=\"themeColor\" aria-label=\"Select Color\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td></td>\r\n            <td>\r\n                <input type=\"text\" class=\"wheelThemeColor\" data-wcp-layout=\"block\" data-wcp-format=\"css\" />\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n";
},"58":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"disabled") : depth0),{"name":"unless","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":262,"column":46},"end":{"line":263,"column":143}}})) != null ? stack1 : "")
    + " ";
},"59":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n                    <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":263,"column":35},"end":{"line":263,"column":44}}}) : helper)))
    + "\" data-themecolor=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"themecolor") || (depth0 != null ? lookupProperty(depth0,"themecolor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"themecolor","hash":{},"data":data,"loc":{"start":{"line":263,"column":63},"end":{"line":263,"column":77}}}) : helper)))
    + "\" data-description=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":263,"column":97},"end":{"line":263,"column":112}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":263,"column":114},"end":{"line":263,"column":123}}}) : helper)))
    + "</option>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":61,"column":7}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":8},"end":{"line":79,"column":7}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"language") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":8},"end":{"line":111,"column":7}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"font") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":8},"end":{"line":161,"column":7}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"layout") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":161,"column":8},"end":{"line":203,"column":7}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mode") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":203,"column":8},"end":{"line":220,"column":7}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"toolbar") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":220,"column":8},"end":{"line":237,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tab") : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":237,"column":7},"end":{"line":254,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"theme") : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":254,"column":7},"end":{"line":282,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["framework/baseGadget"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"gadget-loading gadget-mask\">\r\n</div>\r\n<div class=\"gadget-loading gadget-message\">\r\n    <div class=\"gadget-message-icon\"></div>\r\n    <div class=\"gadget-message-text\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":48}}}) : helper)))
    + "</div>\r\n</div>";
},"useData":true});

this["HBS"]["framework/gadgetManager"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"panel\">\r\n        <div class=\"tabcontrols\">\r\n            <div class=\"tabs\" role=\"tablist\" draggable=\"true\" aria-orientation=\"horizontal\">\r\n            </div>\r\n            <div class=\"controls\">\r\n                <div class=\"icon gadgetlist\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                     title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GADGETS-ON-PANEL") : stack1), depth0))
    + "\">\r\n                     <i class=\"material-icons md-light\">expand_more</i></div>\r\n                <div class=\"icon gadgetmover\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\"\r\n                     title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GADGETS-ACTIONS") : stack1), depth0))
    + "\">\r\n                     <i class=\"material-icons md-light\">more_vert</i></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"content\"></div>\r\n        <div class=\"dropIndicator\"></div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"tab zaz-effect zaz-effect-bar-bottom\" draggable=\"true\" tabindex=\"0\" role=\"tab\" aria-selected=\"false\">\r\n        <div class=\"tab-start\"></div>\r\n        <div class=\"tab-pin\" tabindex=\"0\"><i class=\"material-icons md-light\">lock_open</i></div>\r\n        <div class=\"tab-icon\"><i class=\"material-icons md-light\">home</i></div>\r\n        <div class=\"tab-title\" tabindex=\"0\"></div>\r\n        <div class=\"tab-count\">0</div>\r\n        <div class=\"tab-close\" tabindex=\"0\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE") : stack1), depth0))
    + "\"><i class=\"material-icons md-light\">close</i></div>\r\n        <div class=\"tab-end\"></div>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"zaz-overlay gadget-opener-overlay\" role=\"dialog\" tabindex=\"0\">\r\n        <div class=\"zaz-overlay-header\">\r\n            <div class=\"left\">\r\n                <div class=\"zaz-overlay-header-title\" tabindex=\"0\" aria-label=\"Gadgets\">\r\n                </div>\r\n            </div>\r\n            <div class=\"right\">\r\n                <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\" title=\"Close\">close</i>\r\n            </div>\r\n        </div>\r\n        <div class=\"zaz-overlay-content\">\r\n            <div class=\"gadget-opener-section\">\r\n                <div class=\"gadget-opener-title\" data-mode=\"open\">\r\n                    <span class=\"open\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-IN") : stack1), depth0))
    + "</span>\r\n                    <span class=\"move\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"MOVE-TO") : stack1), depth0))
    + "</span>\r\n                </div>\r\n                <div class=\"gadget-new\">\r\n                    <div class=\"zaz-effect zaz-effect-bar-bottom item gadget-new-tab\" data-zone=\"new\" data-zonetype=\"tab\" tabindex=\"0\">New Tab</div>\r\n                    <div class=\"zaz-effect zaz-effect-bar-bottom item gadget-new-window\" data-zone=\"new\" data-zonetype=\"window\" tabindex=\"0\">New Window</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"area-current-windows\"></div>\r\n        </div>\r\n        <div class=\"zaz-overlay-footer\">\r\n            <div class=\"left\"></div>\r\n            <div class=\"right\">\r\n                <button class=\"button zaz-effect zaz-effect-bar-bottom default\" data-action=\"close\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"zaz-menu gadgetmovermenu\" aria-hidden=\"false\">\r\n        <div class=\"items\">\r\n            <div class=\"item closetab\" tabindex=\"0\" data-action=\"closetab\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE-TAB") : stack1), depth0))
    + "</div>\r\n            <div class=\"item closealltabs\" tabindex=\"0\" data-action=\"closealltabs\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE-ALL-TABS") : stack1), depth0))
    + "</div>\r\n            <div class=\"item closeothertabs\" tabindex=\"0\" data-action=\"closeothertabs\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE-OTHER-TABS") : stack1), depth0))
    + "</div>\r\n            <div class=\"item movetab\" tabindex=\"0\" data-action=\"movetab\" style=\"display: none;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"MOVE-TO-LOCATION") : stack1), depth0))
    + "...</div>\r\n            <div class=\"item movealltabs\" tabindex=\"0\" data-action=\"movealltabs\" style=\"display: none;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"MOVE-ALL-TABS-TO") : stack1), depth0))
    + "...</div>\r\n        </div>\r\n    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"zaz-menu gadgetlistmenu\" aria-hidden=\"false\">\r\n        <div class=\"items\">\r\n        </div>\r\n    </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"zaz-overlay gadgets-overlay\" role=\"dialog\" tabindex=\"0\">\r\n        <div class=\"zaz-overlay-header\">\r\n            <div class=\"left\">\r\n                <div class=\"zaz-overlay-header-title\" tabindex=\"0\" aria-label=\"Gadgets\">\r\n                    Open Gadget(s)</div>\r\n            </div>\r\n            <div class=\"right\">\r\n                <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\" title=\"Close\">close</i>\r\n            </div>\r\n        </div>\r\n        <div class=\"zaz-overlay-content\">\r\n            <div class=\"gadgets\"></div>\r\n        </div>\r\n        <div class=\"zaz-overlay-footer\">\r\n            <div class=\"left\"></div>\r\n            <div class=\"right\">\r\n                <button class=\"button zaz-effect zaz-effect-bar-bottom default\" data-action=\"close\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"item zaz-effect zaz-effect-bar-left-top-to-bottom\" tabindex=\"0\" aria-label=\"open gadget "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":108,"column":104},"end":{"line":108,"column":113}}}) : helper)))
    + "\" data-gadget=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"script") || (depth0 != null ? lookupProperty(depth0,"script") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"script","hash":{},"data":data,"loc":{"start":{"line":108,"column":128},"end":{"line":108,"column":138}}}) : helper)))
    + "\" data-gadgetid=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"gadgetid") || (depth0 != null ? lookupProperty(depth0,"gadgetid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gadgetid","hash":{},"data":data,"loc":{"start":{"line":108,"column":155},"end":{"line":108,"column":167}}}) : helper)))
    + "\">\r\n        <i class=\"material-icons md-light icon-class "
    + alias4(((helper = (helper = lookupProperty(helpers,"iconClass") || (depth0 != null ? lookupProperty(depth0,"iconClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iconClass","hash":{},"data":data,"loc":{"start":{"line":109,"column":53},"end":{"line":109,"column":66}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":109,"column":68},"end":{"line":109,"column":76}}}) : helper)))
    + "</i>\r\n        <div class=\"item-meta\">\r\n            <div class=\"item-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":111,"column":36},"end":{"line":111,"column":45}}}) : helper)))
    + "</div>\r\n            <div class=\"item-desc\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"desc") || (depth0 != null ? lookupProperty(depth0,"desc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"desc","hash":{},"data":data,"loc":{"start":{"line":112,"column":35},"end":{"line":112,"column":43}}}) : helper)))
    + "</div>\r\n        </div>\r\n    </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"area current\">\r\n        <div class=\"area-container\">\r\n            <div class=\"__layout\" aria-describedby=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"idForLabel") || (depth0 != null ? lookupProperty(depth0,"idForLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idForLabel","hash":{},"data":data,"loc":{"start":{"line":120,"column":52},"end":{"line":120,"column":66}}}) : helper)))
    + "\" data-window=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"windowName") || (depth0 != null ? lookupProperty(depth0,"windowName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"windowName","hash":{},"data":data,"loc":{"start":{"line":120,"column":81},"end":{"line":120,"column":95}}}) : helper)))
    + "\">\r\n                <div class=\"zone\" data-zone=\"main\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"idForLabel") || (depth0 != null ? lookupProperty(depth0,"idForLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"idForLabel","hash":{},"data":data,"loc":{"start":{"line":125,"column":17},"end":{"line":125,"column":31}}}) : helper)))
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thisWindow") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":125,"column":33},"end":{"line":125,"column":142}}})) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"THIS-WINDOW") : stack1), depth0))
    + " ("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"WINDOW") : stack1), depth0))
    + " "
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":125,"column":91},"end":{"line":125,"column":100}}}) : helper)))
    + ")";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"WINDOW") : stack1), depth0))
    + " "
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (depth0 != null ? lookupProperty(depth0,"index") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":125,"column":126},"end":{"line":125,"column":135}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"panelControls") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgetTab") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgetOpener") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":0},"end":{"line":63,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgetMoverMenu") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":65,"column":0},"end":{"line":75,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgetListMenu") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":0},"end":{"line":82,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgetsOverlay") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":0},"end":{"line":105,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgetsOverlayItem") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":107,"column":0},"end":{"line":115,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"windowLayout") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":0},"end":{"line":127,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["framework/layoutManager"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"zone\" data-zone=\"main\">\r\n        <div class=\"zone-drop\">\r\n            <div class=\"icon\"></div>\r\n        </div>\r\n        <div class=\"zone-help\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"MAIN-ZONE-MESSAGE") : stack1), depth0))
    + "</div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"zone-meta\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isVertical") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"layouts") : depth0)) != null ? lookupProperty(stack1,"enableSplitter") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":51,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isVertical") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":52,"column":4},"end":{"line":68,"column":11}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"zone top\" data-meta=\"top\" data-zone=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"parentZone") || (depth0 != null ? lookupProperty(depth0,"parentZone") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"parentZone","hash":{},"data":data,"loc":{"start":{"line":13,"column":57},"end":{"line":13,"column":71}}}) : helper)))
    + "-top\">\r\n            <div class=\"zone-close\" title=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE") : stack1), depth0))
    + "\"><i class=\"material-icons md-light\">close</i></div>\r\n            <div class=\"zone-drop\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"zone-meta\"></div>\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"zone left\" data-meta=\"left\" data-zone=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"parentZone") || (depth0 != null ? lookupProperty(depth0,"parentZone") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"parentZone","hash":{},"data":data,"loc":{"start":{"line":21,"column":59},"end":{"line":21,"column":73}}}) : helper)))
    + "-left\">\r\n            <div class=\"zone-close\" title=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE") : stack1), depth0))
    + "\"><i class=\"material-icons md-light\">close</i></div>\r\n            <div class=\"zone-drop\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"zone-meta\"></div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"zone-splitter\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isVertical") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":49,"column":15}}})) != null ? stack1 : "")
    + "        </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"arrow\" data-orientation=\"top\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"COLLAPSE-TOP") : stack1), depth0))
    + "\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"layouts") : depth0)) != null ? lookupProperty(stack1,"enableFlip") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":35,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"layouts") : depth0)) != null ? lookupProperty(stack1,"enableOrientation") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":38,"column":19}}})) != null ? stack1 : "")
    + "            <div class=\"arrow\" data-orientation=\"bottom\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"COLLAPSE-BOTTOM") : stack1), depth0))
    + "\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"flip\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"FLIP-TOP-BOTTOM") : stack1), depth0))
    + "\"></div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"orient\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"FLIP-ORIENTATION") : stack1), depth0))
    + "\"></div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"arrow\" data-orientation=\"left\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"COLLAPSE-LEFT") : stack1), depth0))
    + "\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"layouts") : depth0)) != null ? lookupProperty(stack1,"enableFlip") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":44,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"layouts") : depth0)) != null ? lookupProperty(stack1,"enableOrientation") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":12},"end":{"line":47,"column":19}}})) != null ? stack1 : "")
    + "        <div class=\"arrow\" data-orientation=\"right\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"COLLAPSE-RIGHT") : stack1), depth0))
    + "\"></div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"flip\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"FLIP-LEFT-RIGHT") : stack1), depth0))
    + "\"></div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"zone bottom\" data-meta=\"bottom\" data-zone=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"parentZone") || (depth0 != null ? lookupProperty(depth0,"parentZone") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"parentZone","hash":{},"data":data,"loc":{"start":{"line":53,"column":63},"end":{"line":53,"column":77}}}) : helper)))
    + "-bottom\">\r\n            <div class=\"zone-close\" title=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE") : stack1), depth0))
    + "\"><i class=\"material-icons md-light\">close</i></div>\r\n            <div class=\"zone-drop\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"zone-meta\"></div>\r\n        </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"zone right\" data-meta=\"right\" data-zone=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"parentZone") || (depth0 != null ? lookupProperty(depth0,"parentZone") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"parentZone","hash":{},"data":data,"loc":{"start":{"line":61,"column":61},"end":{"line":61,"column":75}}}) : helper)))
    + "-right\">\r\n            <div class=\"zone-close\" title=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"CLOSE") : stack1), depth0))
    + "\"><i class=\"material-icons md-light\">close</i></div>\r\n            <div class=\"zone-drop\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"zone-meta\"></div>\r\n        </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"meta-count\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":72,"column":28},"end":{"line":72,"column":37}}}) : helper)))
    + "</div>\r\n    <div class=\"meta-gadgets\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"gadgets") : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":8},"end":{"line":76,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"meta-gadget\" data-script=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"script") : depth0), depth0))
    + "\" data-gadgetid=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"gadgetid") : depth0), depth0))
    + "\" >"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mainZone") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subZone") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":69,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"collapsedZone") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":78,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["framework/logManager"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"log\" style=\"display:none\">\r\n    <div class=\"title\">Log Manager</div>\r\n    <div class=\"list\">\r\n        <table width=\"100%\" cellpadding=\"2\" cellspacing=\"1\"></table>\r\n    </div>\r\n    <div class=\"buttons\">\r\n        <button class=\"button close\" style=\"float:right\">Close</button>\r\n        <button class=\"button clear\" style=\"float:right\">Clear</button>\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["gadgets/applicationInformation/applicationInformation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n        <div class=\"gadget-controls\">\r\n            <div class=\"controls-bar\">\r\n                <div class=\"message\">\r\n                    applicationInformation - Simple Template\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"gadget-content\">\r\n            <div class=\"address\">\r\n                <div class=\"fname\"></div>\r\n                <div class=\"lname\"></div>\r\n                <div class=\"city\"></div>\r\n            </div>\r\n        </div>\r\n    </div>";
},"useData":true});

this["HBS"]["gadgets/applications/applications"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"filters\">\r\n                <div tabindex=\"0\" class=\"filter "
    + ((stack1 = (lookupProperty(helpers,"ifequal")||(depth0 && lookupProperty(depth0,"ifequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"filter") : depth0),"submitted",{"name":"ifequal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":97}}})) != null ? stack1 : "")
    + "\" data-filter=\"submitted\">Submitted<span class=\"count\">0</span></div>\r\n                <div tabindex=\"0\" class=\"filter "
    + ((stack1 = (lookupProperty(helpers,"ifequal")||(depth0 && lookupProperty(depth0,"ifequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"filter") : depth0),"reviewed",{"name":"ifequal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":48},"end":{"line":6,"column":96}}})) != null ? stack1 : "")
    + "\" data-filter=\"reviewed\">Reviewed<span class=\"count\">0</span></div>\r\n                <div tabindex=\"0\" class=\"filter "
    + ((stack1 = (lookupProperty(helpers,"ifequal")||(depth0 && lookupProperty(depth0,"ifequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"filter") : depth0),"approved",{"name":"ifequal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":48},"end":{"line":7,"column":96}}})) != null ? stack1 : "")
    + "\" data-filter=\"approved\">Approved<span class=\"count\">0</span></div>\r\n                <div tabindex=\"0\" class=\"filter "
    + ((stack1 = (lookupProperty(helpers,"ifequal")||(depth0 && lookupProperty(depth0,"ifequal"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"filter") : depth0),"all",{"name":"ifequal","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":91}}})) != null ? stack1 : "")
    + "\" data-filter=\"all\">All<span class=\"count\">0</span></div>\r\n            </div>\r\n            <div class=\"knobs\">\r\n                <div tabindex=\"0\" class=\"knob new-app\" data-action=\"new-app\"><label class=\"label\">New</label></div>\r\n                <div tabindex=\"0\" class=\"knob delete-apps\" data-action=\"delete-apps\"><label class=\"label\">Delete All</label></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"grid\"></div>\r\n</div>";
},"useData":true});

this["HBS"]["gadgets/applications/newApplicationOverlay"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-overlay new-application-overlay\" tabindex=\"-1\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":75},"end":{"line":1,"column":84}}}) : helper)))
    + "\" role=\"dialog\">\r\n    <div class=\"zaz-overlay-header\">\r\n        <div class=\"left\">\r\n            <div class=\"zaz-overlay-header-title\" tabindex=\"0\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":63},"end":{"line":4,"column":72}}}) : helper)))
    + "</div>\r\n        </div>\r\n        <div class=\"right\">\r\n            <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\"\r\n                title=\"Close\">close</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-overlay-content\" tabindex=\"0\" aria-live=\"assertive\" role=\"alert\">\r\n        <div class=\"new-application-row\">\r\n            <label>Title of Application</label>\r\n            <div class=\"new-application-input\"><input class=\"new-application-title\" type=\"text\"></div>\r\n        </div>\r\n        <div class=\"seperator\"></div>\r\n        <div class=\"new-application-row\">\r\n            <label>Select Reviewer</label>\r\n            <div class=\"new-application-reviewers\"><select></select></div>\r\n        </div>\r\n        <div class=\"new-application-row\">\r\n            <label>Select Approver</label>\r\n            <div class=\"new-application-approvers\"><select></select></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-overlay-footer\">\r\n        <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"cancel\" tabindex=\"0\">Cancel</button>\r\n        <button class=\"button zaz-effect zaz-effect-bar-bottom default\" data-action=\"ok\" tabindex=\"0\">Create</button>\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["gadgets/applicationsChart/applicationsChart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"message\">\r\n                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"APPLICATIONS-DATA-1") : stack1), depth0))
    + "\r\n            </div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs\">\r\n                <div tabindex=\"0\" class=\"knob type active\" data-view=\"columns\" title=\"View as Columns Chart\">\r\n                    <i class=\"material-icons md-light\">insert_chart</i>\r\n                    <label>Columns</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob type\" data-view=\"pie\" title=\"View as Pie Chart\">\r\n                    <i class=\"material-icons md-light\">pie_chart</i>\r\n                    <label>Pie</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"knobs\" style=\"margin-left: 10px;\">\r\n                <div tabindex=\"0\" class=\"knob theme\" title=\"Set theme for the Chart\">\r\n                    <label>Theme</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"chart\"></div>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-menu thememenu\" aria-hidden=\"true\">\r\n    <div class=\"items\" role=\"menu\">\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"standard\">Standard</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"avocado\">Avocado</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"darkblue\">Dark Blue</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"darkgreen\">Dark Green</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"darkunica\">Dark Unica</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"gray\">Gray</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"grid\">Grid</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"gridlight\">Grid Light</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"highcontrastdark\">High-contrast Dark</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"highcontrastlight\">High-contrast Light</div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"thememenu") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":48,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["gadgets/cars/cars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\" style=\"flex:1\">\r\n            <div class=\"message\" style=\"white-space: nowrap;\">\r\n                100K rows\r\n            </div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs mode\">\r\n                <div tabindex=\"0\" class=\"knob active\" data-mode=\"grid\" title=\"View as Grid\">\r\n                    <i class=\"material-icons md-light\">view_stream</i>\r\n                    <label>Grid</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob\"  data-mode=\"tile\" title=\"View as Tiles\">\r\n                    <i class=\"material-icons md-light\">view_module</i>\r\n                    <label>Tile</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs rows\">\r\n                <div tabindex=\"0\" class=\"knob c10 active\" data-rows=\"10\" title=\"10 rows\">\r\n                    <label>10</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob c100\" data-rows=\"100\" title=\"100 rows\">\r\n                    <label>100</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob c1000\" data-rows=\"1000\" title=\"1000 rows\">\r\n                    <label>1000</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob c10000\" data-rows=\"10000\" title=\"10000 rows\">\r\n                    <label>10000</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob c100000\" data-rows=\"100000\" title=\"100000 rows\">\r\n                    <label>100000</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs template\">\r\n                <div tabindex=\"0\" class=\"knob active\" data-mode=\"grid\" title=\"View as Grid\">\r\n                    <i class=\"material-icons md-light\">format_shapes</i>\r\n                    <label>Template</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"grid\"></div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":51,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["gadgets/dataGrid/dataGrid"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"filters-selector\">                \r\n            </div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"filters\"> </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"grid\"></div>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"filters") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":19,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div tabindex=\"0\" class=\"filter "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"index")),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":71}}})) != null ? stack1 : "")
    + "\" data-filter=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":18,"column":86},"end":{"line":18,"column":94}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":18,"column":96},"end":{"line":18,"column":104}}}) : helper)))
    + "<span class=\"count\">"
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"length") : depth0), depth0))
    + "</span></div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "active";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <select>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"columns") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + "    </select>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <option "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"index")),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":26,"column":57}}})) != null ? stack1 : "")
    + " data-filter=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":26,"column":71},"end":{"line":26,"column":79}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":26,"column":81},"end":{"line":26,"column":89}}}) : helper)))
    + "</option>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"blnFilters") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"blnColumns") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["gadgets/docViewer/docViewer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"message\">\r\n                Document Viewer\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gadget-content\">\r\n        <iframe src=\"\" width=\"100%\" height=\"100%\"></iframe>\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["gadgets/formBuilder/formBuilder"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-form-designer\"></div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-form-features\">\r\n    <div class=\"zaz-form-setting\" data-type=\"formtitle\" data-value=\"enabled\">Form Title</div>\r\n    <div class=\"zaz-form-setting\" data-type=\"grouptitles\" data-value=\"enabled\">Group Titles</div>\r\n    <div class=\"zaz-form-setting\" data-type=\"stepmode\" data-value=\"disabled\">Step Mode</div>\r\n    <div class=\"zaz-form-setting\" data-type=\"labels\" data-value=\"inline\">Labels</div>\r\n    <div class=\"zaz-form-setting\" data-type=\"controls\" data-value=\"fixed\">Controls</div>\r\n\r\n    <div class=\"zaz-form-feature zaz-form-section\">Section</div>\r\n    <div class=\"zaz-form-feature zaz-form-group\">Group</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"text\">Text</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"email\">Email</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"number\">Number</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"range\">Range</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"checkbox\">Checkbox</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"radio\">Radio</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"select\">Select</div>\r\n    <div class=\"zaz-form-feature zaz-form-field\" data-type=\"textarea\">Textarea</div>\r\n</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-form-data\">\r\n    <div class=\"json\"></div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs\">\r\n                <div class=\"knob\" data-action=\"design\"></div>\r\n                <div class=\"knob\" data-action=\"format\"></div>\r\n                <div class=\"knob\" data-action=\"data\"></div>\r\n            </div>\r\n            <div class=\"knobs\">\r\n                <input class=\"theme\" type=\"range\" min=\"1\" max=\"5\" value=\"1\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gadget-content\">\r\n        <div class=\"zaz-form-builder\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"designer"),depth0,{"name":"designer","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"features"),depth0,{"name":"features","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"formdata"),depth0,{"name":"formdata","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["designer"],"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":25,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"args":["features"],"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":46,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"args":["formdata"],"data":data,"loc":{"start":{"line":48,"column":0},"end":{"line":52,"column":11}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});

this["HBS"]["gadgets/lab/lab"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"message\">\r\n               Lab for designing, developing & testing Widgets\r\n            </div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs\">\r\n                <div tabindex=\"0\" class=\"knob\"  data-mode=\"toggle\" title=\"View as Grid\">\r\n                    <i class=\"material-icons md-light\">rotate_90_degrees_ccw</i>\r\n                    <label>Toggle Orientation</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gadget-content\">\r\n        <div class=\"lab-widget\"></div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});

this["HBS"]["gadgets/mapData/mapData"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n        <div class=\"gadget-controls\"></div>\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"gm-label\">\r\n        <span class=\"text\">Property Age:    </span>\r\n        <span class=\"value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"property") : depth0)) != null ? lookupProperty(stack1,"age") : stack1), depth0))
    + " year(s)</span>\r\n    </div>\r\n    <div class=\"gm-label\">\r\n        <span class=\"text\">Property Wear and Tear:    </span>\r\n        <span class=\"value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"property") : depth0)) != null ? lookupProperty(stack1,"wearTear") : stack1), depth0))
    + "%</span>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tooltip") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["gadgets/news/news"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"message\">Sample News (TechCrunch)</div>\r\n        </div>\r\n        <div class=\"controls-bar\">\r\n            <div class=\"knobs\">\r\n                <div tabindex=\"0\" class=\"knob active\" data-mode=\"gallery\" title=\"View as Gallery\">\r\n                    <i class=\"material-icons md-light\">view_module</i>\r\n                    <label>Gallery</label>\r\n                </div>\r\n                <div tabindex=\"0\" class=\"knob\"  data-mode=\"list\" title=\"View are List\">\r\n                    <i class=\"material-icons md-light\">view_list</i>\r\n                    <label>List</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gadget-content\" data-mode=\"gallery\">\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["gadgets/news/newsContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"content-item\">\r\n        <div class=\"content-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":46}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n        <div class=\"content-data\">\r\n            <div class=\"content-image\"><img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"urlToImage") || (depth0 != null ? lookupProperty(depth0,"urlToImage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlToImage","hash":{},"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":63}}}) : helper)))
    + "\" /></div>\r\n            <div class=\"content-desc\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":55}}}) : helper))) != null ? stack1 : "")
    + "&nbsp;<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":6,"column":70},"end":{"line":6,"column":77}}}) : helper)))
    + "\" target=\"_new\">read more</a></div>\r\n        </div>\r\n        <div class=\"content-author\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":8,"column":36},"end":{"line":8,"column":48}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["gadgets/sampleForm/sampleForm"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"gadget-container zaz-effect zaz-effect-bar-top\">\r\n    <div class=\"gadget-controls\">\r\n        <div class=\"controls-bar\">\r\n            <div class=\"message\">\r\n                Sample Form\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gadget-content\">\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["pages/harness/harness"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content\">\r\n    <div class=\"gadget\"></div>\r\n</div>";
},"useData":true});

this["HBS"]["pages/index/index"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"__mainbar\">\r\n    <div class=\"left\">\r\n        <div class=\"title\" data-intro='This the main title of the web application' data-step=\"1\" data-position=\"right\">\r\n            <span>Zaz</span>\r\n            <span class=\"ui\">UI</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-user\">Hello <span></span></div>\r\n    <div class=\"right\">\r\n        <div class=\"knobs\">\r\n            <div tabindex=\"0\" class=\"knob notifications\" data-action=\"notifications\" data-type=\"action\" role=\"button\"\r\n                tabindex=\"0\">\r\n                <i class=\"material-icons md-light\">notifications_active</i>\r\n                <span class=\"count\">0</span>\r\n            </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"viewerMode") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":22,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <div tabindex=\"0\" class=\"knob user\" data-action=\"user\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light\">account_circle</i>\r\n            </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"viewerMode") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":0},"end":{"line":98,"column":7}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"viewerMode") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":0},"end":{"line":111,"column":11}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"standard\">\r\n    <div class=\"left\">\r\n        <div class=\"knobs\" data-intro=\"Click here to open or reopen gadgets\" data-step=\"2\" data-position=\"left\">\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"mobile\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"MOBILE-MODE") : stack1), depth0))
    + "\">\r\n                <i class=\"material-icons md-light\">devices</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"gadgets\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-GADGETS-MENU") : stack1), depth0))
    + "\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light\">picture_in_picture</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-gadget=\"applications\" data-type=\"gadget\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-APPLICATIONS") : stack1), depth0))
    + "\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light icon-class icon-class-applications\">class</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-gadget=\"applicationsChart\" data-type=\"gadget\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-APPLICATIONS-CHART") : stack1), depth0))
    + "\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light icon-class icon-class-chart\">insert_chart</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-gadget=\"cars\" data-type=\"gadget\" role=\"button\" tabindex=\"0\"\r\n                title=\"Open High Performance Grid\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light icon-class icon-class-cars\">view_day</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"right\">\r\n        <div class=\"knobs\" data-intro=\"Click here to view features\" data-step=\"3\" data-position=\"left\">\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"preferences\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"PREFERENCES") : stack1), depth0))
    + "\">\r\n                <i class=\"material-icons md-light\">settings</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"viewintro\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"VIEW-INTRODUCTION") : stack1), depth0))
    + "\">\r\n                <i class=\"material-icons md-light\">school</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"about\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"ABOUT") : stack1), depth0))
    + "\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light\">info</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"mobile\">\r\n    <div class=\"left\">\r\n        <div class=\"knobs\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"viewerMode") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":12},"end":{"line":81,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n    <div class=\"zaz-user\">Hello <span></span></div>\r\n    <div class=\"right\">\r\n        <div class=\"knobs\">\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"desktop\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"DESKTOP-MODE") : stack1), depth0))
    + "\">\r\n                <i class=\"material-icons md-light\">devices</i>\r\n            </div>\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"gadgets\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-GADGETS-MENU") : stack1), depth0))
    + "\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons md-light\">picture_in_picture</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <div tabindex=\"0\" class=\"knob\" data-action=\"user\" data-type=\"action\" role=\"button\" tabindex=\"0\">\r\n                <div class=\"user\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\">\r\n                    <i class=\"material-icons md-light\">account_circle</i>\r\n                </div>\r\n            </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"standard\">\r\n    <div class=\"left\">\r\n        <div class=\"knobs\">\r\n            <div tabindex=\"0\" class=\"knob\" data-action=\"console\" data-type=\"action\" role=\"button\" tabindex=\"0\"\r\n                title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\">\r\n                <i class=\"material-icons md-light\">home</i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"right\"></div>\r\n</div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-menu usermenu\" aria-hidden=\"true\">\r\n    <div class=\"items\" role=\"menu\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"switchUser") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":8},"end":{"line":119,"column":15}}})) != null ? stack1 : "")
    + "        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"gadgets\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-GADGETS-MENU") : stack1), depth0))
    + "</div>\r\n        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"preferences\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"PREFERENCES") : stack1), depth0))
    + "</div>\r\n    </div>\r\n</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"item\" role=\"menuitem\" tabindex=\"0\" data-action=\"switchuser\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"SWITCH-USER") : stack1), depth0))
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mainbar") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":26,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"toolbar") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":0},"end":{"line":112,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"usermenu") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":114,"column":0},"end":{"line":124,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["pages/login/login"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"content\">\r\n    <div class=\"title\">\r\n        <span>Zaz</span>\r\n        <span class=\"ui\">UI</span>\r\n        <span>Login</span>\r\n    </div>\r\n    <div class=\"gadget\">\r\n        <div class=\"gadget-container\">\r\n            <div class=\"gadget-controls\">\r\n                <div class=\"controls-bar\">\r\n                    <div class=\"search\">\r\n                        <div class=\"searchbox\">\r\n                            <input type=\"text\" class=\"text\" \r\n                            placeholder=\"Search by id, name or role\"/>\r\n                            <input type=\"button\" class=\"clear\" value=\"x\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"grid\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"left\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"switch")||(depth0 && lookupProperty(depth0,"switch"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"role") : stack1),{"name":"switch","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":36,"column":19}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"right\">\r\n        <div class=\"login-id\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "</div>\r\n        <div class=\"login-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"firstName") : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"lastName") : stack1), depth0))
    + "</div>\r\n    </div>\r\n    <div class=\"login-role\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"role") : stack1), depth0))
    + "</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"admin",{"name":"case","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":12},"end":{"line":32,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"user",{"name":"case","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":35,"column":21}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"login-icon\"><i class=\"material-icons md-light\">account_box</i></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"login-icon\"><i class=\"material-icons md-light\">account_circle</i></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tile") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":0},"end":{"line":43,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["pages/viewer/viewer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"hiddenLabel titleLabel\" tabindex=\"0\"></span>\r\n<div class=\"__mainbar\">\r\n    <div class=\"left\">\r\n        <div class=\"title\">Application #"
    + alias4(((helper = (helper = lookupProperty(helpers,"applicationNumber") || (depth0 != null ? lookupProperty(depth0,"applicationNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"applicationNumber","hash":{},"data":data,"loc":{"start":{"line":5,"column":40},"end":{"line":5,"column":61}}}) : helper)))
    + "<span class=\"version\"></span></div>\r\n    </div>\r\n    <div class=\"right meta\">\r\n        <div class=\"info created\">Created By: <span class=\"user\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"creator") || (depth0 != null ? lookupProperty(depth0,"creator") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creator","hash":{},"data":data,"loc":{"start":{"line":8,"column":65},"end":{"line":8,"column":76}}}) : helper)))
    + "</span></div>\r\n        <div class=\"info reviewed\">Reviewed: <span class=\"status"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isReviewed") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":64},"end":{"line":9,"column":93}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isReviewed") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":9,"column":95},"end":{"line":9,"column":133}}})) != null ? stack1 : "")
    + "</span></div>\r\n        <div class=\"info approved\">Approved: <span class=\"status"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isApproved") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":64},"end":{"line":10,"column":93}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isApproved") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":10,"column":95},"end":{"line":10,"column":133}}})) != null ? stack1 : "")
    + "</span></div>\r\n    </div>\r\n</div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " yes";
},"4":function(container,depth0,helpers,partials,data) {
    return "YES";
},"6":function(container,depth0,helpers,partials,data) {
    return "NO";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"viewerMode") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":49,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"viewerMode") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":4},"end":{"line":72,"column":15}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"standard\">\r\n            <div class=\"left\">\r\n                <div class=\"knobs\" data-intro='Click here to open or reopen gadgets' data-step=\"4\" data-position=\"bottom\">\r\n                    <div tabindex=\"0\" class=\"knob\"  data-action=\"console\" data-type=\"action\" role=\"button\" tabindex=\"0\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\">\r\n                        <i class=\"material-icons md-light\">home</i>\r\n                    </div>\r\n                    <div tabindex=\"0\" class=\"knob\"  data-action=\"gadgets\" data-type=\"action\" role=\"button\" tabindex=\"0\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-GADGETS-MENU") : stack1), depth0))
    + "\" aria-haspopup=\"true\"\r\n                        aria-expanded=\"false\">\r\n                        <i class=\"material-icons md-light\">picture_in_picture</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right\"></div>\r\n        </div>\r\n        <div class=\"mobile\">\r\n            <div class=\"left\">\r\n                <div class=\"knobs\" data-intro='Click here to open or reopen gadgets' data-step=\"4\" data-position=\"bottom\">\r\n                    <div tabindex=\"0\" class=\"knob\"  data-action=\"console\" data-type=\"action\" role=\"button\" tabindex=\"0\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\">\r\n                        <i class=\"material-icons md-light\">home</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right\">\r\n                <div class=\"knobs\">\r\n                    <div tabindex=\"0\" class=\"knob\"  data-action=\"gadgets\" data-type=\"action\" role=\"button\" tabindex=\"0\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"OPEN-GADGETS-MENU") : stack1), depth0))
    + "\" aria-haspopup=\"true\"\r\n                        aria-expanded=\"false\">\r\n                        <i class=\"material-icons md-light\">picture_in_picture</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"standard\">\r\n            <div class=\"left\">\r\n                <div class=\"knobs\" data-intro='Click here to open or reopen gadgets' data-step=\"4\" data-position=\"bottom\">\r\n                    <div tabindex=\"0\" class=\"knob\"  data-action=\"console\" data-type=\"action\" role=\"button\" tabindex=\"0\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\">\r\n                        <i class=\"material-icons md-light\">home</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right\"></div>\r\n        </div>\r\n        <div class=\"mobile\">\r\n            <div class=\"left\">\r\n                <div class=\"knobs\" data-intro='Click here to open or reopen gadgets' data-step=\"4\" data-position=\"bottom\">\r\n                    <div tabindex=\"0\" class=\"knob\"  data-action=\"console\" data-type=\"action\" role=\"button\" tabindex=\"0\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"items") : depth0)) != null ? lookupProperty(stack1,"GO-TO-CONSOLE") : stack1), depth0))
    + "\">\r\n                        <i class=\"material-icons md-light\">home</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right\">\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"mainbar") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"toolbar") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":0},"end":{"line":73,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["widgets/zazAlert/zazAlert"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-overlay zaz-alert-overlay\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":69},"end":{"line":1,"column":78}}}) : helper)))
    + "\" role=\"alertdialog\">\r\n    <div class=\"zaz-overlay-header\">\r\n        <div class=\"left\">\r\n            <div class=\"zaz-overlay-header-title\" tabindex=\"0\"></div>\r\n        </div>\r\n        <div class=\"right\">\r\n            <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\" title=\"Close\">close</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-overlay-content\" tabindex=\"0\" aria-live=\"assertive\" role=\"alert\"></div>\r\n    <div class=\"zaz-overlay-footer\">\r\n        <div class=\"left\">\r\n        </div>\r\n        <div class=\"right\">\r\n            <button class=\"button\" data-action=\"ok\" tabindex=\"0\">OK</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["widgets/zazForm/zazForm"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form novalidate class=\"zaz-form\" data-theme=\"theme-"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"format") : stack1)) != null ? lookupProperty(stack1,"theme") : stack1), depth0))
    + "\" data-stepmode=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"format") : stack1)) != null ? lookupProperty(stack1,"stepmode") : stack1), depth0))
    + "\"\r\n    data-labels=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"format") : stack1)) != null ? lookupProperty(stack1,"labels") : stack1), depth0))
    + "\" data-controls=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"format") : stack1)) != null ? lookupProperty(stack1,"controls") : stack1), depth0))
    + "\"\r\n    data-grouptitles=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"format") : stack1)) != null ? lookupProperty(stack1,"grouptitles") : stack1), depth0))
    + "\" data-formtitle=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"format") : stack1)) != null ? lookupProperty(stack1,"formtitle") : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"header") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"form-items"),depth0,{"name":"form-items","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"footer") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"errors") : stack1)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "</form>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-header"),depth0,{"name":"form-header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-footer"),depth0,{"name":"form-footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-errors"),depth0,{"name":"form-errors","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":21,"column":9}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-error\" data-error-field=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"field") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"field") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"message") : depth0), depth0))
    + "</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-header\">\r\n    <div class=\"zaz-form-header-title\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"header") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</div>\r\n    <div class=\"zaz-form-error-link\">View <span></span> error(s)</div>\r\n</div>\r\n";
},"13":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"sections") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":33,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"14":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-section"),depth0,{"name":"form-section","hash":{"section":blockParams[0][0]},"data":data,"blockParams":blockParams,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-form-footer\">\r\n    <button type=\"button\" class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"prev\">\r\n        Prev\r\n    </button>\r\n    <button type=\"button\" class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"next\">\r\n        Next\r\n    </button>\r\n    <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"clear\">\r\n        Clear\r\n    </button>\r\n    <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"undo\">\r\n        Undo\r\n    </button>\r\n    <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"add\">\r\n        Add\r\n    </button>\r\n    <button class=\"button zaz-effect zaz-effect-bar-bottom\" data-action=\"delete\">\r\n        Delete\r\n    </button>\r\n    <button class=\"button zaz-effect zaz-effect-bar-bottom default\" data-action=\"submit\">\r\n        Submit\r\n    </button>\r\n</div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-form-errors\"></div>\r\n";
},"20":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-section active\" data-enabled=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"section") : depth0)) != null ? lookupProperty(stack1,"enabled") : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"section") : depth0)) != null ? lookupProperty(stack1,"groups") : stack1),{"name":"each","hash":{},"fn":container.program(21, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":71,"column":4},"end":{"line":73,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"21":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-group"),depth0,{"name":"form-group","hash":{"group":blockParams[0][0]},"data":data,"blockParams":blockParams,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-group\" data-group=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-enabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? lookupProperty(stack1,"enabled") : stack1), depth0))
    + "\">\r\n    <div class=\"zaz-form-group-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"group") : depth0)) != null ? lookupProperty(stack1,"fields") : stack1),{"name":"each","hash":{},"fn":container.program(24, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":80,"column":4},"end":{"line":82,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"24":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-field"),depth0,{"name":"form-field","hash":{"field":blockParams[0][0]},"data":data,"blockParams":blockParams,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-field\" data-enabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"enabled") : stack1), depth0))
    + "\">\r\n    <div class=\"zaz-form-label "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":31},"end":{"line":88,"column":68}}})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"label") : stack1), depth0))
    + "</div>\r\n    <div class=\"zaz-form-control\" data-type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"switch")||(depth0 && lookupProperty(depth0,"switch"))||container.hooks.helperMissing).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),{"name":"switch","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":8},"end":{"line":136,"column":19}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    return "required";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"label",{"name":"case","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":8},"end":{"line":93,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"text",{"name":"case","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":8},"end":{"line":96,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"email",{"name":"case","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":8},"end":{"line":99,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"number",{"name":"case","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":8},"end":{"line":102,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"range",{"name":"case","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":8},"end":{"line":105,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"checkbox",{"name":"case","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":106,"column":8},"end":{"line":108,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"radio",{"name":"case","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":8},"end":{"line":111,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"select",{"name":"case","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":8},"end":{"line":114,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"textarea",{"name":"case","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":8},"end":{"line":117,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"color",{"name":"case","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":118,"column":8},"end":{"line":120,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"date",{"name":"case","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":121,"column":8},"end":{"line":123,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"file",{"name":"case","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":124,"column":8},"end":{"line":126,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"month",{"name":"case","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":127,"column":8},"end":{"line":129,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"tel",{"name":"case","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":130,"column":8},"end":{"line":132,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"case")||(depth0 && lookupProperty(depth0,"case"))||alias2).call(alias1,"time",{"name":"case","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":133,"column":8},"end":{"line":135,"column":17}}})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-label"),depth0,{"name":"form-label","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-text"),depth0,{"name":"form-text","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-email"),depth0,{"name":"form-email","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-number"),depth0,{"name":"form-number","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-range"),depth0,{"name":"form-range","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-checkbox"),depth0,{"name":"form-checkbox","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-radio"),depth0,{"name":"form-radio","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-select"),depth0,{"name":"form-select","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-textarea"),depth0,{"name":"form-textarea","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-color"),depth0,{"name":"form-color","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-date"),depth0,{"name":"form-date","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-file"),depth0,{"name":"form-file","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-month"),depth0,{"name":"form-month","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-tel"),depth0,{"name":"form-tel","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"58":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"form-time"),depth0,{"name":"form-time","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\"></div>\r\n";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"text\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":146,"column":102},"end":{"line":146,"column":139}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":147,"column":4},"end":{"line":147,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"63":function(container,depth0,helpers,partials,data) {
    return "readonly";
},"65":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"email\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":151,"column":103},"end":{"line":151,"column":140}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":152,"column":4},"end":{"line":152,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"67":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"number\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":156,"column":104},"end":{"line":156,"column":141}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":157,"column":4},"end":{"line":157,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"range\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" min=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"min") : stack1), depth0))
    + "\" max=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"max") : stack1), depth0))
    + "\"\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":4},"end":{"line":162,"column":41}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":42},"end":{"line":162,"column":79}}})) != null ? stack1 : "")
    + ">\r\n";
},"71":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-checkbox-controls\" data-display=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"display") : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(72, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":167,"column":4},"end":{"line":175,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"72":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"zaz-form-checkbox-control\">\r\n        <label>\r\n            <input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" value=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" type=\"checkbox\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":170,"column":108},"end":{"line":170,"column":145}}})) != null ? stack1 : "")
    + ">\r\n            <span class=\"checkmark\"></span>\r\n        </label>\r\n        <span class=\"control-title\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</span>\r\n    </div>\r\n";
},"74":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-form-radio-controls\" data-display=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"display") : stack1), depth0))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(75, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":181,"column":4},"end":{"line":189,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"75":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"zaz-form-radio-control\">\r\n        <label>\r\n            <input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" value=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\" type=\"radio\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":184,"column":105},"end":{"line":184,"column":142}}})) != null ? stack1 : "")
    + ">\r\n            <span class=\"checkmark\"></span>\r\n        </label>\r\n        <span class=\"control-title\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</span>\r\n    </div>\r\n";
},"77":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<select name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":194,"column":91},"end":{"line":194,"column":128}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":195,"column":4},"end":{"line":195,"column":41}}})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"items") : stack1),{"name":"each","hash":{},"fn":container.program(78, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":196,"column":4},"end":{"line":198,"column":13}}})) != null ? stack1 : "")
    + "</select>\r\n";
},"78":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <option value=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</option>\r\n";
},"80":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<textarea name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":203,"column":93},"end":{"line":203,"column":130}}})) != null ? stack1 : "")
    + "></textarea>\r\n";
},"82":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"color\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":207,"column":103},"end":{"line":207,"column":140}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":208,"column":4},"end":{"line":208,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"84":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"date\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":212,"column":74},"end":{"line":212,"column":111}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":213,"column":4},"end":{"line":213,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"86":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"file\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":217,"column":102},"end":{"line":217,"column":139}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":218,"column":4},"end":{"line":218,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"88":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"month\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":222,"column":103},"end":{"line":222,"column":140}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":223,"column":4},"end":{"line":223,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"90":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"tel\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":227,"column":73},"end":{"line":227,"column":110}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":228,"column":4},"end":{"line":228,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"92":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"time\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":232,"column":102},"end":{"line":232,"column":139}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":233,"column":4},"end":{"line":233,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"94":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"url\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":237,"column":101},"end":{"line":237,"column":138}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":238,"column":4},"end":{"line":238,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"96":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" data-field=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\" type=\"week\" style=\"width:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + "px;\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"required") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":242,"column":102},"end":{"line":242,"column":139}}})) != null ? stack1 : "")
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"field") : depth0)) != null ? lookupProperty(stack1,"readonly") : stack1),{"name":"if","hash":{},"fn":container.program(63, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":243,"column":4},"end":{"line":243,"column":41}}})) != null ? stack1 : "")
    + ">\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"form") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":1,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"errors") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":18,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-header"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":24,"column":0},"end":{"line":29,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-items"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":31,"column":0},"end":{"line":37,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-footer"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":39,"column":0},"end":{"line":63,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-errors"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":65,"column":0},"end":{"line":67,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-section"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":69,"column":0},"end":{"line":75,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-group"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":77,"column":0},"end":{"line":84,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-field"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":86,"column":0},"end":{"line":139,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-label"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":141,"column":0},"end":{"line":143,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-text"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":145,"column":0},"end":{"line":148,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(65, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-email"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":150,"column":0},"end":{"line":153,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(67, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-number"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":155,"column":0},"end":{"line":158,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(69, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-range"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":160,"column":0},"end":{"line":163,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(71, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-checkbox"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":165,"column":0},"end":{"line":177,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(74, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-radio"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":179,"column":0},"end":{"line":191,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(77, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-select"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":193,"column":0},"end":{"line":200,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-textarea"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":202,"column":0},"end":{"line":204,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(82, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-color"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":206,"column":0},"end":{"line":209,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(84, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-date"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":211,"column":0},"end":{"line":214,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(86, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-file"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":216,"column":0},"end":{"line":219,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(88, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-month"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":221,"column":0},"end":{"line":224,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(90, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-tel"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":226,"column":0},"end":{"line":229,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(92, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-time"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":231,"column":0},"end":{"line":234,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(94, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-url"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":236,"column":0},"end":{"line":239,"column":11}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(96, data, 0, blockParams, depths),"inverse":container.noop,"args":["form-week"],"data":data,"blockParams":blockParams,"loc":{"start":{"line":241,"column":0},"end":{"line":244,"column":11}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true,"useBlockParams":true});

this["HBS"]["widgets/zazOverlay/zazOverlay"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-overlay zaz-overlay-active\" title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":60}}}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"zaz-overlay-header\">\r\n        <div class=\"left\">\r\n            <div class=\"zaz-overlay-header-title\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":63},"end":{"line":4,"column":74}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n        </div>\r\n        <div class=\"right\">\r\n            <i class=\"material-icons md-light zaz-overlay-header-close\" tabindex=\"0\" role=\"button\" title=\"Close\">close</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"zaz-overlay-content\" tabindex=\"0\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":10,"column":50},"end":{"line":10,"column":63}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n    <div class=\"zaz-overlay-footer\">\r\n        <div class=\"left\">\r\n        </div>\r\n        <div class=\"right\">\r\n            <button class=\"button close\" data-action=\"close\">Close</button>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["HBS"]["widgets/zazPane/zazPane"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"zaz-pane-panel\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":37},"end":{"line":2,"column":43}}}) : helper)))
    + "\" aria-expanded=\"false\" aria-label=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":79},"end":{"line":2,"column":88}}}) : helper)))
    + "\">\r\n    <div class=\"zaz-pane-panel-tab\" tabindex=\"0\">\r\n        <div class=\"zaz-pane-panel-tab-indicator\"></div>\r\n        <div class=\"zaz-pane-panel-tab-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":57}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n    </div>\r\n    <div class=\"zaz-pane-panel-content\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":9}}})) != null ? stack1 : "");
},"useData":true});

this["HBS"]["widgets/zazSplitter/zazSplitter"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"zaz-splitter-pane zaz-splitter-prev\">\r\n</div>\r\n<div class=\"zaz-splitter-splitter\">\r\n    <div class=\"zaz-splitter-splitter-arrow\" tabindex=\"0\" role=\"button\" aria-expanded=\"false\" aria-label=\"splitter\"></div>\r\n</div>\r\n<div class=\"zaz-splitter-pane zaz-splitter-next\">\r\n</div>";
},"useData":true});

return this["HBS"];

});