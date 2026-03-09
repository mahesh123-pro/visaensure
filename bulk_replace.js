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
                .replace(/\btext-white\b/g, 'text-foreground')
                .replace(/\bbg-white\//g, 'bg-foreground/')
                .replace(/\bborder-white\//g, 'border-foreground/')
                .replace(/bg-\[\#0F0F1A\]/g, 'bg-background')
                .replace(/bg-black\/40/g, 'bg-white/40')
                .replace(/text-foreground\/50/g, 'text-foreground/60')
                .replace(/mix-blend-screen/g, 'mix-blend-multiply')
                .replace(/from-white to-secondary/g, 'from-primary to-secondary')
                .replace(/from-white to-transparent/g, 'from-foreground to-transparent')
                .replace(/text-transparent bg-clip-text/g, 'text-transparent bg-clip-text')
                .replace(/border-white\/20/g, 'border-foreground/20')
                .replace(/text-foreground\/70/g, 'text-foreground/80')
                .replace(/bg-gradient-to-tr from-primary\/30 to-transparent mix-blend-overlay pointer-events-none/g, ''); // Remove the dark gradient overlay over image
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log("Updated", fullPath);
            }
        }
    }
}
replaceInDir('src');
