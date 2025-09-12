const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><p>Hello world</p>", {url: "https://chatgpt.com/",});
const window = dom.window
var mem = {}
function XOR_STR(e, t) {
        e = String(e);
        t = String(t);
        let n = "";
        for (let r = 0; r < e.length; r++)
            n += String.fromCharCode(e.charCodeAt(r) ^ t.charCodeAt(r % t.length));
        return n;
    }
var var_12_36 = 67.26;
var var_44_22 = "set";
var var_44_22 = window["Reflect"]["set"]
var var_12_36 = XOR_STR(var_12_36, var_12_36)
var var_12_36 = btoa("" + var_12_36)
var var_90_31 = 96.17;
var var_68_5 = 68.06;
var var_65_13 = "create";
var var_68_5 = 48.13;
var var_65_13 = window["Object"]["create"]
var var_38_33 = "localStorage";
var var_38_33 = window["localStorage"]
var var_12_36 = XOR_STR(var_12_36, var_68_5)
var var_12_36 = btoa("" + var_12_36)
var var_61_04 = 2000;
var var_44_15 = "now";
var var_44_15 = window["performance"]["now"].bind(window["performance"])
var var_12_36 = 75.48;
var var_90_37 = var_44_15()
var var_79_37 = null;
var var_31_98 = var_65_13(var_79_37)
var var_68_5 = XOR_STR(var_68_5, var_68_5)
var var_68_5 = btoa("" + var_68_5)
var var_21_83 = "navigator";
var var_21_83 = window["navigator"]
var var_24_71 = "b2sfHgQCHA4DBBoJFhwVBwEACQ1pHA5rAg0eFwUZFAMfHgwMHA4EBBoBGm0ZFGsWARsBBwIQDAceGQQZFAMfHgwMbXM=";
var var_90_31 = XOR_STR(var_90_31, var_68_5)
var var_90_31 = btoa("" + var_90_31)
var var_12_36 = 39.67;
var var_5_15 = 0.8;
var var_94_64 = 0.1;
var var_41_14 = 6.92;
var var_14_72 = 17.35;
var var_5_15 = Array.isArray(var_5_15) ? (var_5_15.push(var_94_64), var_5_15) : var_5_15 + var_94_64
var var_5_15 = XOR_STR(var_5_15, var_41_14)
var var_5_15 = btoa("" + var_5_15)
var_31_98[var_14_72] = var_5_15
var var_33_42 = [];
var var_90_31 = 14.11;
var var_36_08 = "__reactRouterContext";
var var_12_36 = 67.27;
var var_36_08 = window[var_36_08]
var var_6_28 = 25.89;
var var_90_4 = "state";
try { mem[var_90_4] = var_36_08[var_90_4]; } catch(r) { var_33_42 = "" + r; }
var var_94_6 = "loaderData";
try { mem[var_94_6] = var_90_4[var_94_6]; } catch(r) { var_33_42 = "" + r; }
var var_42_78 = 78.92;
var var_90_31 = btoa("" + var_90_31)
var_31_98[var_42_78] = var_90_31
var var_95_02 = "root";
try { mem[var_95_02] = var_94_6[var_95_02]; } catch(r) { var_33_42 = "" + r; }
var var_76_84 = "clientBootstrap";
var var_68_5 = 67.98;
try { mem[var_76_84] = var_95_02[var_76_84]; } catch(r) { var_33_42 = "" + r; }
var var_6_35 = "cfConnectingIp";
try { mem[var_6_35] = var_76_84[var_6_35]; } catch(r) { var_33_42 = "" + r; }
var var_33_42 = Array.isArray(var_33_42) ? (var_33_42.push(var_6_35), var_33_42) : var_33_42 + var_6_35
var var_49_49 = "cfIpCity";
try { mem[var_49_49] = var_76_84[var_49_49]; } catch(r) { var_33_42 = "" + r; }
var var_33_42 = Array.isArray(var_33_42) ? (var_33_42.push(var_49_49), var_33_42) : var_33_42 + var_49_49
var var_8_82 = "userRegion";
try { mem[var_8_82] = var_76_84[var_8_82]; } catch(r) { var_33_42 = "" + r; }
var var_33_42 = Array.isArray(var_33_42) ? (var_33_42.push(var_8_82), var_33_42) : var_33_42 + var_8_82
var var_68_5 = 5.57;
var var_35_5 = "cfIpLatitude";
try { mem[var_35_5] = var_76_84[var_35_5]; } catch(r) { var_33_42 = "" + r; }
var var_33_42 = Array.isArray(var_33_42) ? (var_33_42.push(var_35_5), var_33_42) : var_33_42 + var_35_5
var var_8_22 = "cfIpLongitude";
try { mem[var_8_22] = var_76_84[var_8_22]; } catch(r) { var_33_42 = "" + r; }
var var_90_31 = XOR_STR(var_90_31, var_6_28)
var var_90_31 = btoa("" + var_90_31)
var var_33_42 = Array.isArray(var_33_42) ? (var_33_42.push(var_8_22), var_33_42) : var_33_42 + var_8_22
var var_33_42 = JSON.stringify(var_33_42)
var var_33_42 = XOR_STR(var_33_42, var_41_14)
var var_90_31 = 33.66;
var var_33_42 = btoa("" + var_33_42)
var var_65_3 = 26.8;
var var_28_9 = 54.04;
var var_68_5 = btoa("" + var_68_5)
var_31_98[var_28_9] = var_68_5
var_31_98[var_65_3] = var_33_42
var var_68_5 = 64.03;
var var_41_14 = 6.92;
var var_77_58 = 90.85;
var var_48_27 = "createElement";
var var_38_47 = var_44_15()
Math.abs(var_90_37 - var_38_47) > var_61_04 ? var_97_57 = var_24_71 : null
var var_97_57 = var_97_57 !== void 0 ? (mem["58.29"] = "72.02", var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (var_44_22(var_31_98, mem["58.29"], var_38_47) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (atob("" + var_97_57) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (XOR_STR(var_97_57, mem["91.57"]) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (JSON.parse(var_97_57) || var_97_57) : var_97_57
var var_48_27 = window["document"]["createElement"].bind(window["document"])
var var_12_36 = 23.67;
var var_96_64 = "div";
var var_96_64 = var_48_27(var_96_64)
var var_86_94 = "style";
var var_86_94 = var_96_64["style"]
var var_68_5 = XOR_STR(var_68_5, var_68_5)
var var_68_5 = btoa("" + var_68_5)
var var_3_26 = "hidden";
var var_31_36 = "visibility";
var var_68_5 = XOR_STR(var_68_5, var_68_5)
var var_68_5 = btoa("" + var_68_5)
var_86_94[var_31_36] = var_3_26
var var_85_45 = "ariaHidden";
var var_9_45 = true;
var var_12_36 = XOR_STR(var_12_36, var_68_5)
var var_12_36 = btoa("" + var_12_36)
var_96_64[var_85_45] = var_9_45
var var_95_1 = "position";
var var_12_76 = "fixed";
var_86_94[var_95_1] = var_12_76
var var_21_14 = "Lucida Sans Unicode";
var var_58_66 = "fontFamily";
var var_12_36 = 17.67;
var_86_94[var_58_66] = var_21_14
var var_27_34 = "14px";
var var_28_9 = 54.04;
var var_68_5 = btoa("" + var_68_5)
var_31_98[var_28_9] = var_68_5
var var_43_88 = "fontSize";
var_86_94[var_43_88] = var_27_34
var var_29_51 = "K̬̤̄̆H̛̟̞̩́L̆̉";
var var_54_07 = "innerText";
var_96_64[var_54_07] = var_29_51
var var_43_02 = "appendChild";
var var_43_02 = window["document"]["body"]["appendChild"].bind(window["document"]["body"])
var var_12_36 = 63.99;
var_43_02(var_96_64)
var var_69_4 = "getBoundingClientRect";
var var_68_5 = 17.96;
var var_69_4 = var_96_64["getBoundingClientRect"].bind(var_96_64)
var var_91_22 = 51.36;
var var_12_36 = btoa("" + var_12_36)
var_31_98[var_91_22] = var_12_36
var var_64_11 = var_69_4()
var var_64_11 = JSON.stringify(var_64_11)
var var_64_11 = XOR_STR(var_64_11, var_41_14)
var var_64_11 = btoa("" + var_64_11)
var_31_98[var_77_58] = var_64_11
var var_2_86 = "removeChild";
var var_2_86 = window["document"]["body"]["removeChild"].bind(window["document"]["body"])
var var_38_47 = var_44_15()
Math.abs(var_90_37 - var_38_47) > var_61_04 ? var_97_57 = var_24_71 : null
var var_97_57 = var_97_57 !== void 0 ? (mem["58.29"] = "9.39", var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (var_44_22(var_31_98, mem["58.29"], var_38_47) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (atob("" + var_97_57) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (XOR_STR(var_97_57, mem["91.57"]) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (JSON.parse(var_97_57) || var_97_57) : var_97_57
var_2_86(var_96_64)
var var_94_27 = "location";
var var_68_5 = 11.89;
var var_94_27 = window["document"]["location"]
var var_12_36 = 82.63;
var var_89_33 = "";
var var_89_33 = Array.isArray(var_89_33) ? (var_89_33.push(var_94_27), var_89_33) : var_89_33 + var_94_27
var var_89_33 = XOR_STR(var_89_33, var_41_14)
var var_91_22 = 51.36;
var var_12_36 = btoa("" + var_12_36)
var_31_98[var_91_22] = var_12_36
var var_89_33 = btoa("" + var_89_33)
var var_87_94 = 31.58;
var var_68_5 = XOR_STR(var_68_5, var_12_36)
var var_68_5 = btoa("" + var_68_5)
var_31_98[var_87_94] = var_89_33
var var_69_17 = 27.48;
var var_68_5 = 8.28;
var var_55_7 = 39.07;
var var_1_79 = "random";
var var_12_36 = 41.73;
var var_1_79 = window["Math"]["random"]
var var_48_37 = var_1_79()
var var_68_5 = XOR_STR(var_68_5, var_12_36)
var var_68_5 = btoa("" + var_68_5)
var var_48_37 = XOR_STR(var_48_37, var_48_37)
var var_38_47 = var_44_15()
Math.abs(var_90_37 - var_38_47) > var_61_04 ? var_97_57 = var_24_71 : null
var var_97_57 = var_97_57 !== void 0 ? (mem["58.29"] = "70.26", var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (var_44_22(var_31_98, mem["58.29"], var_38_47) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (atob("" + var_97_57) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (XOR_STR(var_97_57, mem["91.57"]) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (JSON.parse(var_97_57) || var_97_57) : var_97_57
var var_48_37 = btoa("" + var_48_37)
var_31_98[var_69_17] = var_48_37
var var_12_36 = XOR_STR(var_12_36, var_68_5)
var var_12_36 = btoa("" + var_12_36)
var var_48_37 = var_1_79()
var var_12_36 = 5.92;
var_31_98[var_55_7] = var_48_37
var var_49_65 = [];
var var_90_31 = 90.23;
var var_44_39 = "vendor";
try { mem[var_44_39] = var_21_83[var_44_39]; } catch(r) { var_49_65 = "" + r; }
var var_49_65 = Array.isArray(var_49_65) ? (var_49_65.push(var_44_39), var_49_65) : var_49_65 + var_44_39
var var_52_72 = "platform";
try { mem[var_52_72] = var_21_83[var_52_72]; } catch(r) { var_49_65 = "" + r; }
var var_49_65 = Array.isArray(var_49_65) ? (var_49_65.push(var_52_72), var_49_65) : var_49_65 + var_52_72
var var_74_13 = "deviceMemory";
try { mem[var_74_13] = var_21_83[var_74_13]; } catch(r) { var_49_65 = "" + r; }
var var_12_36 = 98.19;
var var_49_65 = Array.isArray(var_49_65) ? (var_49_65.push(var_74_13), var_49_65) : var_49_65 + var_74_13
var var_78_3 = "maxTouchPoints";
var var_90_31 = XOR_STR(var_90_31, var_12_36)
var var_90_31 = btoa("" + var_90_31)
try { mem[var_78_3] = var_21_83[var_78_3]; } catch(r) { var_49_65 = "" + r; }
var var_49_65 = Array.isArray(var_49_65) ? (var_49_65.push(var_78_3), var_49_65) : var_49_65 + var_78_3
var var_90_31 = 17.58;
var var_49_65 = JSON.stringify(var_49_65)
var var_49_65 = XOR_STR(var_49_65, var_41_14)
var var_49_65 = btoa("" + var_49_65)
var var_87_95 = 18.52;
var_31_98[var_87_95] = var_49_65
var var_51_22 = 51.21;
var var_69_99 = "keys";
var var_69_99 = window["Object"]["keys"]
var var_12_36 = 36.64;
var var_35_97 = var_69_99(var_38_33)
var var_91_22 = 51.36;
var var_12_36 = btoa("" + var_12_36)
var_31_98[var_91_22] = var_12_36
var var_35_97 = XOR_STR(var_35_97, var_41_14)
var var_35_97 = btoa("" + var_35_97)
var var_38_47 = var_44_15()
Math.abs(var_90_37 - var_38_47) > var_61_04 ? var_97_57 = var_24_71 : null
var var_97_57 = var_97_57 !== void 0 ? (mem["58.29"] = "57.64", var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (var_44_22(var_31_98, mem["58.29"], var_38_47) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (atob("" + var_97_57) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (XOR_STR(var_97_57, mem["91.57"]) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (JSON.parse(var_97_57) || var_97_57) : var_97_57
var_31_98[var_51_22] = var_35_97
var var_31_41 = "length";
var var_68_5 = 44.3;
var var_31_41 = window["history"]["length"]
var var_31_41 = XOR_STR(var_31_41, var_41_14)
var var_31_41 = btoa("" + var_31_41)
var var_51_17 = 37.38;
var_31_98[var_51_17] = var_31_41
var var_79_46 = "setItem";
var var_79_46 = window["localStorage"]["setItem"].bind(window["localStorage"])
var var_12_36 = 51.42;
var var_38_47 = var_44_15()
Math.abs(var_90_37 - var_38_47) > var_61_04 ? var_97_57 = var_24_71 : null
var var_97_57 = var_97_57 !== void 0 ? (mem["58.29"] = "94.36", var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (var_44_22(var_31_98, mem["58.29"], var_38_47) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (atob("" + var_97_57) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (XOR_STR(var_97_57, mem["91.57"]) || var_97_57) : var_97_57
var var_97_57 = var_97_57 !== void 0 ? (JSON.parse(var_97_57) || var_97_57) : var_97_57
var var_52_86 = "1e8ff21b65255965";
var var_90_31 = 34.09;
var var_74_26 = 2;
var var_6_28 = 78.79;
var_79_46(var_52_86, var_74_26)
var var_24_71 = var_24_71 !== void 0 ? (mem["91.57"] = "40.05", var_24_71) : var_24_71
var var_12_36 = 14.63;
var var_24_71 = var_24_71 !== void 0 ? (atob("" + var_24_71) || var_24_71) : var_24_71
var var_24_71 = var_24_71 !== void 0 ? (XOR_STR(var_24_71, mem["91.57"]) || var_24_71) : var_24_71
var var_24_71 = var_24_71 !== void 0 ? (JSON.parse(var_24_71) || var_24_71) : var_24_71
var var_31_98 = JSON.stringify(var_31_98)
var var_31_98 = XOR_STR(var_31_98, var_41_14)
console.log(btoa("" + var_31_98))
