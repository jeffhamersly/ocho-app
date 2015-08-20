function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getLottery(country, region) {
        var tableData = [];
        var url = "https://app.lotteryegg.com/lotteries";
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                json = JSON.parse(this.responseText);
                var length = 0;
                if (country) if ("USA" != country || region) {
                    $.back.setText("< back");
                    $.back.addEventListener("singletap", function() {
                        $.table.setData(tableData);
                        getLottery();
                    });
                    Alloy.Globals.Location = "lottery";
                    var totalLotteries = json.length;
                    var length = 0;
                    for (var j = 0; totalLotteries > j; j++) {
                        var lotteryName = json[j].name;
                        var lotteryConfig = json[j].config;
                        var lotteryCountry = json[j].country;
                        var lotteryRegion = json[j].region;
                        if (lotteryCountry == country) {
                            length++;
                            var background = length % 2 ? "#f4f6f5" : "#ffffff";
                            var row = Ti.UI.createTableViewRow({
                                backgroundColor: background,
                                width: Ti.UI.FILL
                            });
                            $.addClass(row, "countryRow");
                            var wrapper = Ti.UI.createView({
                                layout: "horizontal",
                                left: "10%",
                                width: "90%"
                            });
                            var rowCount = Ti.UI.createLabel({
                                text: length
                            });
                            $.addClass(rowCount, "countRow");
                            row.add(rowCount);
                            if (region) {
                                if (lotteryRegion == region) {
                                    var lotteryList = Ti.UI.createLabel({
                                        text: lotteryName,
                                        layout: lotteryConfig
                                    });
                                    $.addClass(lotteryList, "countryList");
                                    wrapper.add(lotteryList);
                                    row.add(wrapper);
                                    tableData.push(row);
                                }
                            } else {
                                var lotteryList = Ti.UI.createLabel({
                                    text: lotteryName,
                                    layout: lotteryConfig
                                });
                                $.addClass(lotteryList, "countryList");
                                wrapper.add(lotteryList);
                                row.add(wrapper);
                                tableData.push(row);
                            }
                        }
                    }
                    $.table.setData(tableData);
                } else {
                    $.back.setText("< choose country");
                    $.back.addEventListener("singletap", function() {
                        getLottery();
                    });
                    Alloy.Globals.Location = "region";
                    Alloy.Globals.newloc = "usa";
                    var lotteries = lookForUnique(json, "region");
                    Ti.API.info(lotteries);
                    var totalLotteries = lotteries.length;
                    for (var j = 0; totalLotteries > j; j++) {
                        var lotteryRegion = json[j].region;
                        if (lotteryRegion) {
                            length++;
                            var background = length % 2 ? "#f4f6f5" : "#ffffff";
                            var row = Ti.UI.createTableViewRow({
                                backgroundColor: background,
                                width: Ti.UI.FILL
                            });
                            $.addClass(row, "countryRow");
                            var wrapper = Ti.UI.createView({
                                layout: "horizontal",
                                left: "10%",
                                width: "90%"
                            });
                            var rowCount = Ti.UI.createLabel({
                                text: length
                            });
                            $.addClass(rowCount, "countRow");
                            row.add(rowCount);
                            var countryList = Ti.UI.createLabel({
                                text: lotteries[j]
                            });
                            $.addClass(countryList, "countryList");
                            wrapper.add(countryList);
                            row.add(wrapper);
                            tableData.push(row);
                        }
                    }
                    $.table.setData(tableData);
                    $.table.scrollToTop();
                } else {
                    $.back.setText("");
                    Alloy.Globals.Location = "country";
                    Alloy.Globals.newloc = "country";
                    var lotteries = lookForUnique(json);
                    var totalLotteries = lotteries.length;
                    for (var j = 0; totalLotteries > j; j++) {
                        length++;
                        var background = length % 2 ? "#f4f4f4" : "#ffffff";
                        var row = Ti.UI.createTableViewRow({
                            backgroundColor: background,
                            width: Ti.UI.FILL
                        });
                        $.addClass(row, "countryRow");
                        var wrapper = Ti.UI.createView({
                            layout: "horizontal",
                            left: "10%",
                            width: "90%"
                        });
                        var rowCount = Ti.UI.createLabel({
                            text: length
                        });
                        $.addClass(rowCount, "countRow");
                        row.add(rowCount);
                        var countryList = Ti.UI.createLabel({
                            text: lotteries[j]
                        });
                        $.addClass(countryList, "countryList");
                        wrapper.add(countryList);
                        row.add(wrapper);
                        tableData.push(row);
                    }
                    $.table.setData(tableData);
                    $.table.add(Ti.UI.createView({
                        top: 0,
                        height: 1,
                        backgroundColor: "#cacbca"
                    }));
                }
            },
            onerror: function(e) {
                Ti.API.info(e.error);
                alert("Please Try Again");
            },
            timeout: 5e3
        });
        xhr.open("GET", url);
        xhr.send();
    }
    function lookForUnique(data, region) {
        var countries = [];
        if (region) {
            for (var j = 0; j < data.length; j++) "" != data[j].region && countries.push(data[j].region);
            countries = _.uniq(countries, false);
            countries.sort();
            return countries;
        }
        for (var j = 0; j < data.length; j++) countries.push(data[j].country);
        countries = _.uniq(countries, false);
        countries.sort();
        countries.unshift("USA", "United Kingdom");
        return countries;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "lotteries";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.settings = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    $.__views.heading = Ti.UI.createView({
        id: "heading"
    });
    $.__views.settings.add($.__views.heading);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontFamily: "icomoon",
            fontSize: 70
        },
        color: "#999",
        left: "8%",
        top: "30%",
        text: "",
        id: "__alloyId0"
    });
    $.__views.heading.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        color: "#777",
        left: "35%",
        top: "31%",
        font: {
            fontSize: 16
        },
        text: "Choose Your Lottery",
        id: "__alloyId1"
    });
    $.__views.heading.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        left: "35%",
        top: "36%",
        color: "#999",
        width: "60%",
        font: {
            fontSize: 11
        },
        text: "Pick balls based on your local lottery's rules.",
        id: "__alloyId2"
    });
    $.__views.heading.add($.__views.__alloyId2);
    $.__views.tableStyle = Ti.UI.createView({
        id: "tableStyle"
    });
    $.__views.settings.add($.__views.tableStyle);
    $.__views.back = Ti.UI.createLabel({
        color: "#949fab",
        left: "3%",
        top: "45%",
        width: "100%",
        font: {
            fontSize: 12
        },
        id: "back"
    });
    $.__views.tableStyle.add($.__views.back);
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "#FDFFFE",
        top: "50%",
        separatorStyle: "none",
        separatorColor: "transparent",
        id: "table"
    });
    $.__views.tableStyle.add($.__views.table);
    $.__views.nav = Ti.UI.createView({
        backgroundColor: "#5d9d74",
        height: "13%",
        width: "100%",
        top: 0,
        id: "nav"
    });
    $.__views.settings.add($.__views.nav);
    $.__views.cancel = Ti.UI.createLabel({
        font: {
            fontFamily: "Lucida-neueu",
            fontSize: 12
        },
        color: "#fff",
        left: 20,
        top: "55%",
        text: "cancel",
        id: "cancel"
    });
    $.__views.nav.add($.__views.cancel);
    $.__views.hamburgerTap = Ti.UI.createView({
        left: 0,
        top: "45%",
        width: "33%",
        id: "hamburgerTap"
    });
    $.__views.nav.add($.__views.hamburgerTap);
    $.__views.navTitle = Ti.UI.createLabel({
        color: "#e0ebd8",
        font: {
            fontFamily: "Lucida-neueu",
            fontSize: 18
        },
        top: "50%",
        text: "Choose Lottery",
        id: "navTitle"
    });
    $.__views.nav.add($.__views.navTitle);
    $.__views.done = Ti.UI.createLabel({
        font: {
            fontFamily: "Lucida-neueu",
            fontSize: 12
        },
        color: "#fff",
        right: 20,
        top: "55%",
        text: "done",
        id: "done"
    });
    $.__views.nav.add($.__views.done);
    $.__views.friesTap = Ti.UI.createView({
        right: 0,
        top: "45%",
        width: "33%",
        id: "friesTap"
    });
    $.__views.nav.add($.__views.friesTap);
    $.__views.footer = Ti.UI.createView({
        top: "13%",
        backgroundColor: "#dfecd8",
        width: "100%",
        height: "51",
        id: "footer"
    });
    $.__views.settings.add($.__views.footer);
    $.__views.refresh_configure = Ti.UI.createLabel({
        font: {
            fontFamily: "icomoon",
            fontSize: 15
        },
        color: "#5d6a63",
        left: "9%",
        top: "35%",
        text: "",
        id: "refresh_configure"
    });
    $.__views.footer.add($.__views.refresh_configure);
    $.__views.footerTitle = Ti.UI.createLabel({
        color: "#5d6a63",
        font: {
            fontFamily: "Lucida-neueu",
            fontSize: 12
        },
        top: "35%",
        left: "16%",
        text: "Create a custom lottery >",
        id: "footerTitle"
    });
    $.__views.footer.add($.__views.footerTitle);
    $.__views.sep = Ti.UI.createView({
        bottom: "0",
        width: "100%",
        id: "sep",
        height: "1",
        backgroundColor: "#cacbca"
    });
    $.__views.footer.add($.__views.sep);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.friesTap.addEventListener("singletap", function() {
        $.settings.close();
    });
    $.hamburgerTap.addEventListener("singletap", function() {
        $.settings.close();
    });
    $.footer.addEventListener("singletap", function() {
        getLottery();
    });
    $.table.addEventListener("click", function(e) {
        e.rowData.backgroundColor = "#949fab";
        if ("country" == Alloy.Globals.Location) {
            var clickedCountry = e.rowData.children[1].children[0].text;
            getLottery(clickedCountry);
            Alloy.Globals.Location = "country";
        } else if ("region" == Alloy.Globals.Location) {
            var clickedRegion = e.rowData.children[1].children[0].text;
            getLottery("USA", clickedRegion);
        } else if ("lottery" == Alloy.Globals.Location) {
            var text = e.rowData.children[1].children[0].layout;
            var pattern = "([0-9]*)x([0-9]*).([0-9]*)x([0-9]*)";
            var matches = text.match(pattern);
            Alloy.Globals.numWhiteBalls = matches[1];
            Alloy.Globals.numWhiteMax = matches[2];
            Alloy.Globals.powerBall = matches[3];
            Alloy.Globals.numPowerMax = matches[4];
            Alloy.Globals.navTitle.setText(e.rowData.children[1].children[0].text);
            Alloy.Globals.navTitle.setFont(e.rowData.children[1].children[0].text.length > 16 ? {
                fontSize: 12
            } : {
                fontSize: 18
            });
            Alloy.Globals.numbers.getPicks(Alloy.Globals.numWhiteBalls, Alloy.Globals.numWhiteMax, Alloy.Globals.numRows, Alloy.Globals.powerBall, Alloy.Globals.numPowerMax);
            $.settings.close();
        }
        setTimeout(function() {
            e.rowData.backgroundColor = "transparent";
        }, 500);
    });
    $.footer.addEventListener("singletap", function() {
        Alloy.createController("settings").getView().open();
        $.settings.close();
    });
    Alloy.Globals.Location ? "usa" == Alloy.Globals.newloc ? getLottery("USA") : getLottery() : getLottery("USA");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;