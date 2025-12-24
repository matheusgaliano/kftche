const { default: multer } = require("multer");
const { resolve } = require("node:path");


module.exports = {
    storage: multer.diskStorage({
        destination: resolve (__dirname, "..", "..", "uploads"),
        filename: (req, file, callback) => {
            
    }),
}