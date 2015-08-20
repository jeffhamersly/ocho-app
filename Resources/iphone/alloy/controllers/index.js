function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function randomXToY(minVal, maxVal) {
        var randVal = minVal + Math.random() * (maxVal - minVal);
        return Math.round(randVal);
    }
    function getPicks(balls, max, rows, power, maxPb) {
        tableData = [];
        var url = "https://app.lotteryegg.com?numBalls=" + balls + "&numRows=" + rows + "&powerBall=" + Alloy.Globals.powerBall + "&maxRange=" + max + "&maxPbRange=" + maxPb;
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                json = JSON.parse(this.responseText);
                Alloy.Globals.balls = [];
                var length = 0;
                for (var key in json) if (json.hasOwnProperty(key)) {
                    length++;
                    var background = length % 2 ? "#f4f6f5" : "#ffffff";
                    var row = Ti.UI.createTableViewRow({
                        backgroundColor: background,
                        width: Ti.UI.FILL
                    });
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
                    for (var j = 0; balls > j; j++) {
                        var labelBall = Ti.UI.createLabel({
                            text: json[key].numbers[j],
                            top: -100,
                            zIndex: 1e3
                        });
                        Alloy.Globals.balls.push(labelBall);
                        0 == j && $.addClass(labelBall, "firstBall");
                        if (4 > balls) {
                            $.addClass(labelBall, "lottoBallLarge");
                            $.addClass(row, "lottoRowLarge");
                        } else if (balls > 7 & 10 >= balls) {
                            $.addClass(labelBall, "lottoBall");
                            $.addClass(row, "lottoRowTwo");
                        } else if (balls > 10 & 15 >= balls) {
                            $.addClass(labelBall, "lottoBall");
                            $.addClass(row, "lottoRowTwo");
                        } else if (balls > 15) {
                            $.addClass(labelBall, "lottoBall");
                            $.addClass(row, "lottoRowSuper");
                        } else {
                            $.addClass(labelBall, "lottoBall");
                            $.addClass(row, "lottoRow");
                        }
                        wrapper.add(labelBall);
                    }
                    if (json[key].powerball) {
                        var labelBall = Ti.UI.createLabel({
                            text: json[key].powerball,
                            top: -100,
                            zIndex: 1e3
                        });
                        Alloy.Globals.balls.push(labelBall);
                        $.addClass(labelBall, "lottoBallBlue");
                        4 > balls ? $.addClass(labelBall, "lottoBallBlueLarge") : $.addClass(labelBall, "lottoBallBlue");
                        wrapper.add(labelBall);
                    }
                    row.add(wrapper);
                    tableData.push(row);
                }
                upgradeAd();
                $.table.setData(tableData);
                animateBalls();
                Alloy.Globals.Animated = false;
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
    function animateBalls() {
        var allBalls = Alloy.Globals.balls.length;
        for (var p = 0; allBalls > p; p++) {
            Alloy.Globals.balls[p].animate({
                top: 10,
                duration: randomXToY(300, 600)
            });
            Ti.API.info("animated ball number" + p);
        }
    }
    function upgradeAd() {
        var row = Ti.UI.createTableViewRow({
            backgroundColor: "#ffffff"
        });
        var lockIcon = Ti.UI.createLabel({
            color: "#949fab",
            text: "",
            top: "10%",
            font: {
                fontFamily: "icomoon",
                fontSize: 40,
                textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
            }
        });
        var upgradeText = Ti.UI.createLabel({
            top: "30%",
            color: "#949fab",
            text: "Questions or Suggestions",
            width: "100%",
            font: {
                fontFamily: "Lucida-neueu",
                fontSize: 15
            },
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
        });
        var upgradeBtn = Ti.UI.createButton({
            top: "42%",
            backgroundColor: "#5f9c73",
            color: "#ffffff",
            borderRadius: 10,
            title: "Leave Feedback",
            width: "75%"
        });
        upgradeBtn.addEventListener("singletap", function() {
            var emailDialog = Ti.UI.createEmailDialog();
            emailDialog.subject = "Feedback - LotteryEgg";
            emailDialog.toRecipients = [ "jeff.hamersly@gmail.com" ];
            emailDialog.setMessageBody("Howdy!\n       \nI'm always working on improving LotteryEgg, let me know what what you would like changed!\n\n-Jeff");
            emailDialog.open();
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
    $.__views.footer = Ti.UI.createView({
        top: "13%",
        backgroundColor: "#dfecd8",
        width: "100%",
        height: "51",
        id: "footer"
    });
    $.__views.window.add($.__views.footer);
    $.__views.refresh = Ti.UI.createLabel({
        color: "#5d6a63",
        font: {
            fontSize: 20,
            fontFamily: "icomoon"
        },
        left: "8%",
        top: "30%",
        text: "",
        id: "refresh"
    });
    $.__views.footer.add($.__views.refresh);
    $.__views.footerTitle = Ti.UI.createLabel({
        color: "#5d6a63",
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
    $.__views.nav = Ti.UI.createView({
        backgroundColor: "#5d9d74",
        height: "13%",
        width: "100%",
        top: 0,
        id: "nav"
    });
    $.__views.window.add($.__views.nav);
    $.__views.hamburger = Ti.UI.createLabel({
        color: "#e0ebd8",
        font: {
            fontSize: 30,
            fontFamily: "icomoon"
        },
        left: 20,
        top: "45%",
        text: "",
        id: "hamburger"
    });
    $.__views.nav.add($.__views.hamburger);
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
            fontSize: 18,
            fontFamily: "Lucida-neueu"
        },
        top: "50%",
        text: "LotteryEgg",
        id: "navTitle"
    });
    $.__views.nav.add($.__views.navTitle);
    $.__views.fries = Ti.UI.createLabel({
        color: "#e0ebd8",
        font: {
            fontSize: 20,
            fontFamily: "icomoon"
        },
        right: 20,
        top: "50%",
        text: "",
        id: "fries"
    });
    $.__views.nav.add($.__views.fries);
    $.__views.friesTap = Ti.UI.createView({
        right: 0,
        top: "45%",
        width: "33%",
        id: "friesTap"
    });
    $.__views.nav.add($.__views.friesTap);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tableData = [];
    require("Billing");
    Alloy.Globals.Animated = false;
    $.table.addEventListener("scroll", function(e) {
        var roundedY = Math.round(e.contentOffset.y);
        var allBalls = Alloy.Globals.balls.length;
        if (roundedY > 50 & false == Alloy.Globals.Animated) {
            for (var p = 0; allBalls > p; p++) {
                Alloy.Globals.balls[p].setTop(10);
                Ti.API.info("animated ball number" + p);
            }
            Alloy.Globals.Animated = true;
        }
    });
    $.footer.addEventListener("singletap", function() {
        $.table.scrollToTop();
        getPicks(Alloy.Globals.numWhiteBalls, Alloy.Globals.numWhiteMax, Alloy.Globals.numRows, Alloy.Globals.powerBall, Alloy.Globals.numPowerMax);
    });
    $.friesTap.addEventListener("singletap", function() {
        Alloy.createController("settings").getView().open();
    });
    $.hamburgerTap.addEventListener("singletap", function() {
        Alloy.createController("lotteries").getView().open();
    });
    $.window.getPicks = getPicks;
    Alloy.Globals.numbers = $.window;
    getPicks(Alloy.Globals.numWhiteBalls, Alloy.Globals.numWhiteMax, Alloy.Globals.numRows, Alloy.Globals.powerBall, Alloy.Globals.numPowerMax);
    Alloy.Globals.navTitle = $.navTitle;
    $.window.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;