import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = 'PROJECT_CONTEXT_FOR_AI.md';
const srcDir = path.join(__dirname, '..', 'src');
const rootFiles = ['index.html', 'package.json', 'vite.config.js', 'index.css'];

const excludedExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.mp4', '.ico', '.woff', '.woff2'];
const excludedDirs = ['node_modules', '.git', 'dist', 'scripts'];

let output = `# Project Context: Sun Ninja 3D Redesign\n\nGenerated on: ${new Date().toISOString()}\n\n`;

function isBinary(file) {
    const ext = path.extname(file).toLowerCase();
    return excludedExtensions.includes(ext);
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (excludedDirs.some(d => fullPath.includes(path.sep + d + path.sep) || fullPath.endsWith(path.sep + d))) {
            return;
        }

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (!isBinary(file)) {
            const relativePath = path.relative(path.join(__dirname, '..'), fullPath);
            const content = fs.readFileSync(fullPath, 'utf8');
            const ext = path.extname(file).slice(1) || 'txt';

            output += `## File: ${relativePath}\n\`\`\`${ext}\n${content}\n\`\`\`\n\n`;
            console.log(`Added: ${relativePath}`);
        }
    });
}

// Process Root Files
console.log('--- Processing Root Files ---');
rootFiles.forEach(file => {
    const fullPath = path.join(__dirname, '..', file);
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        const ext = path.extname(file).slice(1) || 'txt';
        output += `## File: ${file}\n\`\`\`${ext}\n${content}\n\`\`\`\n\n`;
        console.log(`Added: ${file}`);
    }
});

// Process Src Directory
console.log('--- Processing Src Directory ---');
if (fs.existsSync(srcDir)) {
    processDirectory(srcDir);
}

fs.writeFileSync(path.join(__dirname, '..', outputFile), output);
console.log(`\n✅ Success! Context file generated at: ${outputFile}`);
console.log(`You can now upload '${outputFile}' to any AI.`);
