function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function updateWhiteBalls(e) {
        Alloy.Globals.numWhiteBalls = Math.round(e.value);
        if (Alloy.Globals.numWhiteBalls < 2) var ball = " ball"; else var ball = " balls";
        $.white_ball_count.text = String.format("%3.0f", Alloy.Globals.numWhiteBalls) + ball;
    }
    function updateWhiteMax(e) {
        Alloy.Globals.numWhiteMax = Math.round(e.value);
        var ball = " max";
        $.white_ball_max.text = String.format("%3.0f", Alloy.Globals.numWhiteMax) + ball;
    }
    function updatePowerMax(e) {
        Alloy.Globals.numPowerMax = Math.round(e.value);
        if (Alloy.Globals.numPowerMax < 2) var ball = " red ball"; else var ball = " red balls";
        $.power_ball_max.text = String.format("%3.0f", Alloy.Globals.numPowerMax) + ball;
    }
    function updateRows(e) {
        Alloy.Globals.numRows = Math.round(e.value);
        if (Alloy.Globals.numRows < 2) var row = " pick"; else var row = " picks";
        $.results_count.text = String.format("%3.0f", Alloy.Globals.numRows) + row;
    }
    function outputState() {
        if (true == $.togglePowerBall.value) {
            Alloy.Globals.powerBall = 1;
            $.sectionHide.show();
            $.sectionDescHide.show();
            $.sectionRowHide.height = 55;
            $.togglePowerBall_label.text = "Disable PowerBall";
        } else {
            $.sectionHide.hide();
            $.sectionDescHide.hide();
            $.sectionRowHide.height = 0;
            Alloy.Globals.powerBall = 0;
            $.togglePowerBall_label.text = "Enable PowerBall";
        }
    }
    function hideAd() {
        $.ad_overlay.hide();
        $.resetClass($.premiumDescResults, "sectionDesc");
        $.resetClass($.premiumResults, "section firstSection");
        $.resetClass($.premiumSection, "sectionRow");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
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
    var __defers = {};
    $.__views.settings = Ti.UI.createWindow({
        backgroundColor: "#f4f6f5",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    $.__views.settingScroll = Ti.UI.createScrollView({
        top: "20%",
        backgroundColor: "#ffffff",
        width: "96%",
        id: "settingScroll",
        layout: "vertical"
    });
    $.__views.settings.add($.__views.settingScroll);
    $.__views.premiumResults = Ti.UI.createLabel({
        color: "#777",
        left: "5%",
        top: "5%",
        font: {
            fontSize: 15
        },
        touchEnabled: false,
        opacity: ".2",
        text: "Number of results",
        id: "premiumResults"
    });
    $.__views.settingScroll.add($.__views.premiumResults);
    $.__views.premiumDescResults = Ti.UI.createLabel({
        left: "5%",
        color: "#999",
        font: {
            fontSize: 11
        },
        touchEnabled: false,
        opacity: ".2",
        text: "The total number of rows for each refresh",
        id: "premiumDescResults"
    });
    $.__views.settingScroll.add($.__views.premiumDescResults);
    $.__views.premiumSection = Ti.UI.createView({
        touchEnabled: false,
        opacity: ".2",
        height: 55,
        id: "premiumSection"
    });
    $.__views.settingScroll.add($.__views.premiumSection);
    $.__views.results_count = Ti.UI.createLabel({
        color: "#999999",
        left: "5%",
        width: "30%",
        top: "30%",
        font: {
            fontSize: 12
        },
        id: "results_count"
    });
    $.__views.premiumSection.add($.__views.results_count);
    $.__views.slider_results = Ti.UI.createSlider({
        top: "20%",
        left: "35%",
        width: "50%",
        id: "slider_results",
        min: "1",
        max: "25"
    });
    $.__views.premiumSection.add($.__views.slider_results);
    updateRows ? $.__views.slider_results.addEventListener("change", updateRows) : __defers["$.__views.slider_results!change!updateRows"] = true;
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cacbca",
        id: "__alloyId3"
    });
    $.__views.settingScroll.add($.__views.__alloyId3);
    $.__views.ad_overlay = Ti.UI.createView({
        top: "-75",
        height: 75,
        id: "ad_overlay"
    });
    $.__views.settingScroll.add($.__views.ad_overlay);
    $.__views.purchase = Ti.UI.createButton({
        bottom: "50%",
        backgroundColor: "#5f9c73",
        color: "#ffffff",
        borderRadius: 10,
        width: "75%",
        title: "More Results - $1.99",
        id: "purchase"
    });
    $.__views.ad_overlay.add($.__views.purchase);
    $.__views.lock = Ti.UI.createLabel({
        font: {
            fontFamily: "icomoon",
            fontSize: 18
        },
        color: "#fff",
        left: "15",
        text: "",
        id: "lock"
    });
    $.__views.purchase.add($.__views.lock);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        color: "#777",
        left: "5%",
        top: "2%",
        font: {
            fontSize: 15
        },
        text: "White Balls",
        id: "__alloyId4"
    });
    $.__views.settingScroll.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: "5%",
        color: "#999",
        font: {
            fontSize: 11
        },
        text: "The total number of balls used per pick",
        id: "__alloyId5"
    });
    $.__views.settingScroll.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: 55,
        id: "__alloyId6"
    });
    $.__views.settingScroll.add($.__views.__alloyId6);
    $.__views.white_ball_count = Ti.UI.createLabel({
        color: "#999999",
        left: "5%",
        width: "30%",
        top: "30%",
        font: {
            fontSize: 12
        },
        id: "white_ball_count"
    });
    $.__views.__alloyId6.add($.__views.white_ball_count);
    $.__views.slider_white_balls = Ti.UI.createSlider({
        top: "20%",
        left: "35%",
        width: "50%",
        id: "slider_white_balls",
        min: "1",
        max: "12"
    });
    $.__views.__alloyId6.add($.__views.slider_white_balls);
    updateWhiteBalls ? $.__views.slider_white_balls.addEventListener("change", updateWhiteBalls) : __defers["$.__views.slider_white_balls!change!updateWhiteBalls"] = true;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#777",
        left: "7%",
        top: "2%",
        font: {
            fontSize: 12
        },
        text: "Highest white ball",
        id: "__alloyId7"
    });
    $.__views.settingScroll.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        left: "7%",
        color: "#999",
        font: {
            fontSize: 11
        },
        text: "The maximum number on each white ball",
        id: "__alloyId8"
    });
    $.__views.settingScroll.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: 55,
        id: "__alloyId9"
    });
    $.__views.settingScroll.add($.__views.__alloyId9);
    $.__views.white_ball_max = Ti.UI.createLabel({
        color: "#999999",
        left: "7%",
        width: "30%",
        top: "30%",
        font: {
            fontSize: 12
        },
        id: "white_ball_max"
    });
    $.__views.__alloyId9.add($.__views.white_ball_max);
    $.__views.slider_white_max = Ti.UI.createSlider({
        top: "20%",
        left: "35%",
        width: "50%",
        id: "slider_white_max",
        min: "19",
        max: "99"
    });
    $.__views.__alloyId9.add($.__views.slider_white_max);
    updateWhiteMax ? $.__views.slider_white_max.addEventListener("change", updateWhiteMax) : __defers["$.__views.slider_white_max!change!updateWhiteMax"] = true;
    $.__views.__alloyId10 = Ti.UI.createView({
        height: "1",
        backgroundColor: "#cacbca",
        id: "__alloyId10"
    });
    $.__views.settingScroll.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        color: "#777",
        left: "5%",
        top: "2%",
        font: {
            fontSize: 15
        },
        text: "Add a PowerBall",
        id: "__alloyId11"
    });
    $.__views.settingScroll.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        left: "5%",
        color: "#999",
        font: {
            fontSize: 11
        },
        text: "A PowerBall is pulled from a different set of balls",
        id: "__alloyId12"
    });
    $.__views.settingScroll.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: 55,
        id: "__alloyId13"
    });
    $.__views.settingScroll.add($.__views.__alloyId13);
    $.__views.togglePowerBall_label = Ti.UI.createLabel({
        color: "#999999",
        left: "5%",
        width: "30%",
        top: "30%",
        font: {
            fontSize: 12
        },
        text: "Enable PowerBall",
        id: "togglePowerBall_label"
    });
    $.__views.__alloyId13.add($.__views.togglePowerBall_label);
    $.__views.togglePowerBall = Ti.UI.createSwitch({
        top: "30%",
        left: "35%",
        value: false,
        id: "togglePowerBall"
    });
    $.__views.__alloyId13.add($.__views.togglePowerBall);
    outputState ? $.__views.togglePowerBall.addEventListener("change", outputState) : __defers["$.__views.togglePowerBall!change!outputState"] = true;
    $.__views.sectionHide = Ti.UI.createLabel({
        color: "#777",
        left: "7%",
        top: "2%",
        font: {
            fontSize: 12
        },
        text: "Highest PowerBall",
        id: "sectionHide"
    });
    $.__views.settingScroll.add($.__views.sectionHide);
    $.__views.sectionDescHide = Ti.UI.createLabel({
        left: "7%",
        color: "#999",
        font: {
            fontSize: 11
        },
        text: "The maximum number on each PowerBall",
        id: "sectionDescHide"
    });
    $.__views.settingScroll.add($.__views.sectionDescHide);
    $.__views.sectionRowHide = Ti.UI.createView({
        height: 55,
        id: "sectionRowHide"
    });
    $.__views.settingScroll.add($.__views.sectionRowHide);
    $.__views.power_ball_max = Ti.UI.createLabel({
        color: "#999999",
        left: "7%",
        width: "30%",
        top: "30%",
        font: {
            fontSize: 12
        },
        id: "power_ball_max"
    });
    $.__views.sectionRowHide.add($.__views.power_ball_max);
    $.__views.slider_power_max = Ti.UI.createSlider({
        top: "20%",
        left: "35%",
        width: "50%",
        id: "slider_power_max",
        min: "1",
        max: "99"
    });
    $.__views.sectionRowHide.add($.__views.slider_power_max);
    updatePowerMax ? $.__views.slider_power_max.addEventListener("change", updatePowerMax) : __defers["$.__views.slider_power_max!change!updatePowerMax"] = true;
    $.__views.__alloyId14 = Ti.UI.createView({
        height: 55,
        id: "__alloyId14"
    });
    $.__views.settingScroll.add($.__views.__alloyId14);
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
        text: "Custom Lottery",
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
    $.__views.refresh = Ti.UI.createLabel({
        font: {
            fontFamily: "icomoon",
            fontSize: 20
        },
        color: "#5d6a63",
        left: "8%",
        top: "30%",
        text: "",
        id: "refresh"
    });
    $.__views.footer.add($.__views.refresh);
    $.__views.footerTitle = Ti.UI.createLabel({
        color: "#5d6a63",
        font: {
            fontFamily: "Lucida-neueu",
            fontSize: 12
        },
        top: "35%",
        left: "16%",
        text: "Search your local lottery >",
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
    var billing = require("Billing");
    $.white_ball_count.text = Alloy.Globals.numWhiteBalls;
    $.slider_white_balls.value = Alloy.Globals.numWhiteBalls;
    $.white_ball_max.text = Alloy.Globals.numWhiteMax;
    $.slider_white_max.value = Alloy.Globals.numWhiteMax;
    $.results_count.text = Alloy.Globals.numRows + " picks";
    $.slider_results.value = Alloy.Globals.numRows;
    $.togglePowerBall.value = Alloy.Globals.powerBall;
    $.togglePowerBall_label.text = Alloy.Globals.powerBall;
    $.slider_power_max.value = Alloy.Globals.numPowerMax;
    $.power_ball_max.text = String.format("%3.0f", Alloy.Globals.numPowerMax) + " red balls";
    outputState();
    1 == billing.checkPurchase("UnltdPicks") && hideAd();
    $.friesTap.addEventListener("singletap", function() {
        Alloy.Globals.navTitle.setText("Lottery Egg");
        Alloy.Globals.navTitle.setFont({
            fontSize: 18
        });
        Alloy.Globals.numbers.getPicks(Alloy.Globals.numWhiteBalls, Alloy.Globals.numWhiteMax, Alloy.Globals.numRows, Alloy.Globals.powerBall, Alloy.Globals.numPowerMax);
        $.settings.close();
    });
    $.purchase.addEventListener("singletap", function() {
        billing.makePurchase("UnltdPicks");
        $.addClass($.purchase, "disabledGrey");
    });
    $.hamburgerTap.addEventListener("singletap", function() {
        $.settings.close();
    });
    $.footer.addEventListener("singletap", function() {
        Alloy.createController("lotteries").getView().open();
    });
    Alloy.Globals.settings = $.settings;
    __defers["$.__views.slider_results!change!updateRows"] && $.__views.slider_results.addEventListener("change", updateRows);
    __defers["$.__views.slider_white_balls!change!updateWhiteBalls"] && $.__views.slider_white_balls.addEventListener("change", updateWhiteBalls);
    __defers["$.__views.slider_white_max!change!updateWhiteMax"] && $.__views.slider_white_max.addEventListener("change", updateWhiteMax);
    __defers["$.__views.togglePowerBall!change!outputState"] && $.__views.togglePowerBall.addEventListener("change", outputState);
    __defers["$.__views.slider_power_max!change!updatePowerMax"] && $.__views.slider_power_max.addEventListener("change", updatePowerMax);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;