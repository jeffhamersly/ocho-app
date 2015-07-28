function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function randomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    function getPicks(balls, rows, power) {
        tableData = [];
        picks = [];
        for (var i = 1; rows >= i; i++) {
            var background = i % 2 ? "#f4f6f5" : "#ffffff";
            var row = Ti.UI.createTableViewRow({
                layout: "horizontal",
                backgroundColor: background
            });
            $.addClass(row, "lottoRow");
            var rowCount = Ti.UI.createLabel({
                text: i
            });
            $.addClass(rowCount, "countRow");
            row.add(rowCount);
            for (var j = 1; balls >= j; j++) {
                if (j != balls) {
                    var lottoPick = randomInt(ballMax);
                    for (var s = 0; j >= s; s++) {
                        picNumber = picks[s];
                        if (picNumber == lottoPick) {
                            var lottoPick = randomInt(powerBallMax);
                            s = 0;
                            Ti.API.info("1");
                            if (picNumber == lottoPick) {
                                var lottoPick = randomInt(powerBallMax);
                                s = 0;
                                Ti.API.info("2");
                                if (picNumber == lottoPick) {
                                    var lottoPick = randomInt(powerBallMax);
                                    s = 0;
                                    Ti.API.info("3");
                                    if (picNumber == lottoPick) {
                                        var lottoPick = randomInt(powerBallMax);
                                        s = 0;
                                        Ti.API.info("4");
                                        if (picNumber == lottoPick) {
                                            var lottoPick = randomInt(powerBallMax);
                                            s = 0;
                                            Ti.API.info("5");
                                            if (picNumber == lottoPick) {
                                                var lottoPick = randomInt(powerBallMax);
                                                s = 0;
                                                Ti.API.info("6");
                                                if (picNumber == lottoPick) {
                                                    var lottoPick = randomInt(powerBallMax);
                                                    s = 0;
                                                    Ti.API.info("7");
                                                    if (picNumber == lottoPick) {
                                                        var lottoPick = randomInt(powerBallMax);
                                                        s = 0;
                                                        Ti.API.info("8");
                                                        if (picNumber == lottoPick) {
                                                            var lottoPick = randomInt(powerBallMax);
                                                            s = 0;
                                                            Ti.API.info("9");
                                                            if (picNumber == lottoPick) {
                                                                var lottoPick = randomInt(powerBallMax);
                                                                s = 0;
                                                                Ti.API.info("10");
                                                                if (picNumber == lottoPick) {
                                                                    var lottoPick = randomInt(powerBallMax);
                                                                    s = 0;
                                                                    Ti.API.info("11");
                                                                    if (picNumber == lottoPick) {
                                                                        var lottoPick = randomInt(powerBallMax);
                                                                        s = 0;
                                                                        Ti.API.info("12");
                                                                        Ti.API.info("wow... a duplicate. I guess this was a piss poor solution afterall. Though at 11:49pm it seemed aight.");
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            picks[s] = lottoPick;
                            var labelBall = Ti.UI.createLabel({
                                text: lottoPick
                            });
                            $.addClass(labelBall, "lottoBall");
                        }
                    }
                    1 == j && $.addClass(labelBall, "firstBall");
                } else {
                    var lottoPick = randomInt(powerBallMax);
                    var labelBall = Ti.UI.createLabel({
                        text: lottoPick
                    });
                    true === power && $.addClass(labelBall, "lottoBallBlue");
                }
                row.add(labelBall);
                var dur = randomInt(300);
                labelBall.animate({
                    top: 10,
                    duration: dur
                });
            }
            tableData.push(row);
        }
        upgradeAd();
        $.table.setData(tableData);
    }
    function upgradeAd() {
        var row = Ti.UI.createTableViewRow({
            backgroundColor: "#ffffff"
        });
        var lockIcon = Ti.UI.createLabel({
            color: "#949fab",
            text: "",
            top: "10%",
            font: {
                fontFamily: "icomoon",
                fontSize: 35,
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
            }
        });
        var upgradeText = Ti.UI.createLabel({
            top: "30%",
            color: "#949fab",
            text: "Copy, Save and Share Picks",
            width: "100%",
            font: {
                fontFamily: "Lucida-neueu",
                fontSize: 15
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
        });
        var upgradeBtn = Ti.UI.createButton({
            top: "42%",
            backgroundColor: "#0086c8",
            color: "#ffffff",
            borderRadius: 10,
            title: "Upgrade Now - $4.95/mo",
            width: "85%"
        });
        row.add(upgradeText);
        row.add(lockIcon);
        row.add(upgradeBtn);
        tableData.push(row);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#f4f6f5",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.table = Ti.UI.createTableView({
        backgroundColor: "#f4f6f5",
        top: "22%",
        separatorStyle: "none",
        selectionStyle: "none",
        separatorColor: "transparent",
        id: "table"
    });
    $.__views.window.add($.__views.table);
    $.__views.nav = Ti.UI.createView({
        backgroundColor: "#7d8ea7",
        height: "13%",
        width: "100%",
        top: 0,
        id: "nav"
    });
    $.__views.window.add($.__views.nav);
    $.__views.navTitle = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 18,
            fontFamily: "Lucida-neueu"
        },
        top: "50%",
        text: "Astrology",
        id: "navTitle"
    });
    $.__views.nav.add($.__views.navTitle);
    $.__views.fries = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: 20,
            fontFamily: "icomoon"
        },
        right: 20,
        top: "50%",
        text: "",
        id: "fries"
    });
    $.__views.nav.add($.__views.fries);
    $.__views.footer = Ti.UI.createView({
        top: "13%",
        backgroundColor: "#fcfdfc",
        width: "100%",
        height: "51",
        id: "footer"
    });
    $.__views.window.add($.__views.footer);
    $.__views.refresh = Ti.UI.createLabel({
        color: "#949fab",
        font: {
            fontSize: 20,
            fontFamily: "icomoon"
        },
        left: "8%",
        top: "30%",
        text: "",
        id: "refresh"
    });
    $.__views.footer.add($.__views.refresh);
    $.__views.footerTitle = Ti.UI.createLabel({
        color: "#949fab",
        font: {
            fontSize: 12,
            fontFamily: "Lucida-neueu"
        },
        top: "35%",
        left: "16%",
        text: "Tap to get more lucky numbers",
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
    $.__views.filter = Ti.UI.createWindow({
        backgroundColor: "#f4f6f5",
        id: "filter"
    });
    $.__views.filter && $.addTopLevelView($.__views.filter);
    $.__views.filterNav = Ti.UI.createView({
        backgroundColor: "#7d8ea7",
        height: "13%",
        width: "100%",
        top: 0,
        id: "filterNav"
    });
    $.__views.filter.add($.__views.filterNav);
    $.__views.filterNavTitle = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: 18,
            fontFamily: "Lucida-neueu"
        },
        top: "50%",
        text: "Tweak Lottery Filter",
        id: "filterNavTitle"
    });
    $.__views.filterNav.add($.__views.filterNavTitle);
    $.__views.cancelFries = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: 20,
            fontFamily: "icomoon"
        },
        right: 20,
        top: "50%",
        text: "",
        id: "cancelFries"
    });
    $.__views.filterNav.add($.__views.cancelFries);
    $.__views.filterTable = Ti.UI.createTableView({
        id: "filterTable"
    });
    $.__views.filter.add($.__views.filterTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.window.open();
    var tableData = [];
    var picks = [];
    var powerBallMax = 15;
    var ballMax = 45;
    $.footer.addEventListener("click", function() {
        $.table.setData([]);
        getPicks(7, 5, true);
    });
    $.nav.addEventListener("click", function() {
        $.filter.open();
    });
    $.filterNav.addEventListener("click", function() {
        $.filter.close();
    });
    getPicks(7, 5, true);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;