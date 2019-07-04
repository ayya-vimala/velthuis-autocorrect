"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VelthuisCorrection_1 = require("./VelthuisCorrection");
const VelthuisCorrectionEntry = {
    plugin: new VelthuisCorrection_1.VelthuisCorrection(),
    activate(state) {
        return true;
    },
    deactivate() {
        return true;
    },
    serialize() {
        return {};
    },
    provideWordCorrection() {
        return this.plugin;
    },
};
module.exports = VelthuisCorrectionEntry;
//# sourceMappingURL=index.js.map