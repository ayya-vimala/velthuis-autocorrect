"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VelthuisCorrection {

    constructor() {
        this.id = "autocorrect:en";
    }

    correctWord(buffer, change) {

        // Replace Velthuis characters.
        var VelthuisDict = [[/aa/g,'ā'],[/ii/g,'ī'],[/uu/g,'ū'],[/\.rr/g,'ṝ'],[/\.r/g,'ṛ'],[/~n/g,'ñ'],[/\.ll/g,'ḹ'],[/\.l/g,'ḷ'],[/\.m/g,'ṁ'],[/\.n/g,'ṇ'],[/\.h/g,'ḥ'],[/"n/g,'ṅ'],[/\.t/g,'ṭ'],[/\.d/g,'ḍ'],[/"s/g,'ś'],[/\.s/g,'ṣ'],[/AA/g,'Ā'],[/II/g,'Ī'],[/UU/g,'Ū'],[/\.RR/g,'Ṝ'],[/\.R/g,'Ṛ'],[/~N/g,'Ñ'],[/\.LL/g,'Ḹ'],[/\.L/g,'Ḷ'],[/\.M/g,'Ṃ'],[/\.N/g,'Ṇ'],[/\.H/g,'Ḥ'],[/"N/g,'Ṅ'],[/\.T/g,'Ṭ'],[/\.D/g,'Ḍ'],[/"S/g,'Ś'],[/\.S/g,'Ṣ']];


        for (var i = 0, len = VelthuisDict.length; i < len; i++) {
            var replacement = VelthuisDict[i];
            change.replaceRegexp(replacement[0], replacement[1]);
        }
    }
}
exports.VelthuisCorrection = VelthuisCorrection;
//# sourceMappingURL=VelthuisCorrection.js.map