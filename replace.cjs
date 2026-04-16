const fs = require('fs');
const path = require('path');

function replaceColors(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/#28a8e0/g, '#d32f2f');
      content = content.replace(/sky-50(\/50)?/g, 'red-50$1');
      content = content.replace(/sky-100/g, 'red-100');
      content = content.replace(/sky-500/g, 'red-600');
      content = content.replace(/sky-600/g, 'red-700');
      content = content.replace(/blue-500/g, 'red-500');
      content = content.replace(/purple-500/g, 'slate-500');
      content = content.replace(/emerald-500/g, 'red-500');
      content = content.replace(/green-500/g, 'red-500');
      content = content.replace(/rose-500/g, 'red-500');
      content = content.replace(/amber-500/g, 'red-500');
      
      // Update specific components if needed...
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceColors(path.join(__dirname, 'src'));
console.log('Colors replaced successfully!');
