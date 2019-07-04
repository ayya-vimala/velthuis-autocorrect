export class VelthuisCorrection {
    public id: string = "autocorrect:en";

    public correctWord(buffer: AtomCore.IEditor, change: any): void {
        // Handle when the user has the shift-key down just a tad too long
        // and causes a double capital letter. We can only detect this with
        // three or more characters.
        change.replaceRegexp(
            /^([A-Z])([A-Z])([a-z])/,
            (entire: string, l1: string, l2: string, l3: string) => {
                return l1 + l2.toLowerCase() + l3;
            });

        // Replace Velthuis characters.
        var VelthuisDict = [[/aa/g,'ā'],[/ii/g,'ī'],[/uu/g,'ū'],[/\.rr/g,'ṝ'],[/\.r/g,'ṛ'],[/~n/g,'ñ'],[/\.ll/g,'ḹ'],[/\.l/g,'ḷ'],[/\.m/g,'ṁ'],[/\.n/g,'ṇ'],[/\.h/g,'ḥ'],[/"n/g,'ṅ'],[/\.t/g,'ṭ'],[/\.d/g,'ḍ'],[/"s/g,'ś'],[/\.s/g,'ṣ'],[/AA/g,'Ā'],[/II/g,'Ī'],[/UU/g,'Ū'],[/\.RR/g,'Ṝ'],[/\.R/g,'Ṛ'],[/~N/g,'Ñ'],[/\.LL/g,'Ḹ'],[/\.L/g,'Ḷ'],[/\.M/g,'Ṃ'],[/\.N/g,'Ṇ'],[/\.H/g,'Ḥ'],[/"N/g,'Ṅ'],[/\.T/g,'Ṭ'],[/\.D/g,'Ḍ'],[/"S/g,'Ś'],[/\.S/g,'Ṣ']];


        for (var i = 0, len = VelthuisDict.length; i < len; i++) {
            var replacement = VelthuisDict[i];
            change.replaceRegexp(replacement[0], replacement[1]);
        }
    }
}
