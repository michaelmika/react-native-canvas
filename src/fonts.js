var FontFaceObserver = require('./fontfaceobserver.standalone');
function waitForFonts(fonts = []){
    return new Promise((resolve, reject) => {
        let count = fonts.length - 1;
        fonts.forEach(
            (fontFace) => {
                let font = new FontFaceObserver(fontFace);
                font.load().then(resolve).catch(e => reject(e));
            }
        );
    });
};
module.exports = waitForFonts;
