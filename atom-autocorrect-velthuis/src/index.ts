import { VelthuisCorrection } from "./VelthuisCorrection";

const VelthuisCorrectionEntry = {
    plugin: new VelthuisCorrection(),

    activate(state: any) {
        return true;
    },

    deactivate() {
        return true;
    },

    serialize(): any {
        return {};
    },

    provideWordCorrection(): VelthuisCorrection {
        return this.plugin;
    },
};

module.exports = VelthuisCorrectionEntry;
