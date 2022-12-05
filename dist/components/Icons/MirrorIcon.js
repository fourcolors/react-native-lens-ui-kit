var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Svg, { Path, G } from 'react-native-svg';
import { TouchableHighlight } from 'react-native';
export function MirrorIcon(_a) {
    var _b = _a.iconSize, iconSize = _b === void 0 ? "16" : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, _d = _a.onPress, onPress = _d === void 0 ? function () { } : _d, _e = _a.width, width = _e === void 0 ? 16 : _e;
    return (_jsx(TouchableHighlight, __assign({ onPress: onPress, underlayColor: "transparent", style: { width: width } }, { children: _jsx(Svg, __assign({ width: iconSize, height: iconSize, fill: color, viewBox: "200 200 800 800" }, { children: _jsxs(G, __assign({ "fill-rule": "evenodd" }, { children: [_jsx(Path, { d: "m374.96 350.61c-4.0195 0-7.875 1.6055-10.715 4.457-2.8359 2.8516-4.418 6.7148-4.3984 10.738l0.375 72.41c0.023438 3.9961 1.625 7.8203 4.457 10.637 2.832 2.8164 6.6641 4.3984 10.656 4.3984h397.59v113.21l-45.215-0.054687h0.003906c-3.9609-0.003907-7.7695 1.5508-10.598 4.3242-2.8281 2.7734-4.457 6.5469-4.5312 10.512-0.074219 3.9609 1.4102 7.793 4.1328 10.672l98.168 103.67c2.918 3.0781 6.9922 4.793 11.234 4.7188 4.2383-0.070313 8.2539-1.9219 11.062-5.0977l91.535-103.52h0.003906c2.582-2.9219 3.9336-6.7305 3.7734-10.625-0.15625-3.8945-1.8125-7.5781-4.625-10.281-2.8086-2.7031-6.5547-4.2148-10.453-4.2188l-44.121-0.058594v-200.77c0-4.0078-1.5938-7.8516-4.4258-10.688-2.8359-2.832-6.6797-4.4258-10.688-4.4258h-483.22zm15.191 30.23h452.91v198.28c-0.78906 4.8047 0.77734 9.6953 4.2188 13.141 0.097657 0.10547 0.19922 0.21094 0.30469 0.31641 3.4297 3.3633 8.2539 4.8984 13 4.1289h23.305l-58.414 66.062-62.617-66.129h22.691c4.7969 0.79688 9.6836-0.76172 13.133-4.1914 0.11719-0.10547 0.23047-0.21484 0.34375-0.32422h0.011719 0.023437c3.3398-3.4297 4.8594-8.2422 4.0898-12.969v-141.04c0-4.0117-1.5938-7.8555-4.4258-10.688-2.8359-2.8359-6.6797-4.4297-10.688-4.4297h-397.67l-0.21875-42.184z" }), _jsx(Path, { d: "m374.41 499.69c-4.3984-0.058594-8.6016 1.8008-11.516 5.0938l-91.613 103.52c-2.582 2.918-3.9375 6.7266-3.7812 10.621 0.16016 3.8984 1.8164 7.582 4.625 10.285 2.8125 2.7031 6.5586 4.2148 10.457 4.2227l44.121 0.074219v200.77c0 4.0078 1.5938 7.8555 4.4297 10.688 2.832 2.8359 6.6758 4.4258 10.688 4.4297h483.22-0.003906c4.0195-0.003907 7.875-1.6055 10.711-4.4531 2.8359-2.8477 4.4219-6.707 4.4062-10.727l-0.30078-72.41c-0.015624-3.9961-1.6172-7.8242-4.4492-10.648-2.832-2.8203-6.668-4.4023-10.664-4.4023h-397.67v-113.21l45.215 0.074219c3.9609 0.003906 7.7656-1.5469 10.594-4.3203 2.8281-2.7734 4.457-6.5469 4.5312-10.508 0.074219-3.9609-1.4062-7.793-4.1289-10.672l-98.09-103.67c-2.8086-2.9688-6.6992-4.6719-10.781-4.7266zm0.17578 37.5 62.566 66.129h-22.707v-0.003906c-4.8125-0.79688-9.7148 0.77344-13.168 4.2227-0.097656 0.097657-0.19531 0.19141-0.29297 0.28906-0.027344 0.03125-0.058594 0.058594-0.085937 0.089844-3.3164 3.4297-4.8203 8.2227-4.0586 12.934v141.04c0.003906 4.0078 1.5938 7.8516 4.4297 10.684 2.832 2.8359 6.6797 4.4297 10.688 4.4297h397.73l0.17578 42.184h-452.93v-198.3c0.78906-4.8125-0.78906-9.707-4.2383-13.148-0.089843-0.097656-0.17969-0.19141-0.27344-0.28516-0.003906-0.003906-0.003906-0.007813-0.007813-0.007813h-0.023437c-3.4297-3.3516-8.2461-4.875-12.977-4.1094h-23.289l58.465-66.062z" })] })) })) })));
}
//# sourceMappingURL=MirrorIcon.js.map