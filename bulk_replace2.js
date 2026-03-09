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
                // Enhance primary button text to be solid white
                .replace(/bg-primary text-foreground/g, 'bg-primary text-white')
                // Fix secondary button styles to be white cards with primary border
                .replace(/bg-foreground\/5/g, 'bg-white shadow-sm border border-gray-100')
                .replace(/bg-foreground\/10/g, 'bg-white shadow-md border border-gray-200')
                // Adjust typography for clarity on light theme
                .replace(/text-foreground\/80/g, 'text-gray-600')
                .replace(/text-foreground\/70/g, 'text-gray-500')
                .replace(/text-foreground\/60/g, 'text-gray-500')
                .replace(/text-foreground\/50/g, 'text-gray-400')
                // Adjust text-gradient styling 
                .replace(/bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary/g, 'bg-clip-text text-transparent bg-gradient-to-r from-[#EE2720] to-[#FF6B6B]')
                // Adjust icon colors
                .replace(/text-secondary/g, 'text-primary')
                // Fix dark mode dividers / borders
                .replace(/divide-white\/10/g, 'divide-gray-200')
                .replace(/border-white\/10/g, 'border-gray-200')
                .replace(/border-foreground\/10/g, 'border-gray-200')
                .replace(/border-foreground\/5/g, 'border-gray-100')
                .replace(/via-white\/5/g, 'via-gray-200')
                // Glow modifications
                .replace(/shadow-glow/g, 'shadow-[0_0_20px_rgba(238,39,32,0.15)]')
                // Fix any errant dark gradients
                .replace(/from-gray-700 to-gray-900/g, 'from-gray-100 to-gray-300')
                .replace(/bg-primary\/20/g, 'bg-primary/10')
                .replace(/bg-secondary\/20/g, 'bg-secondary/10');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log("Updated", fullPath);
            }
        }
    }
}
replaceInDir('src');
