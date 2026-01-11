const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "..", "public");
const webpQuality = 80;

function convertFolder(folder) {
  fs.readdirSync(folder).forEach((file) => {
    const fullPath = path.join(folder, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertFolder(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();

      if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        const newFile = fullPath.replace(ext, ".webp");

        sharp(fullPath)
          .webp({ quality: webpQuality })
          .toFile(newFile)
          .then(() => console.log("Converted:", newFile))
          .catch((err) => console.error("Error:", err));
      }
    }
  });
}

convertFolder(inputDir);
