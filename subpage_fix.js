const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/shadow-\[0_0_15px_rgba\(255,255,255,0\.05\)\]/g, 'shadow-sm')
                .replace(/bg-gradient-to-t from-background/g, 'bg-gradient-to-t from-white');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log("Updated", fullPath);
            }
        }
    }
}
replaceInDir('src');
