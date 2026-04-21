const fs = require('fs');
const path = require('path');

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We will revert the colors back to the beautiful highly requested blue: #28a8e0
      // We will change red backgrounds back to sky/blue
      content = content.replace(/#d32f2f/g, '#28a8e0');
      content = content.replace(/red-50(\/50)?/g, 'sky-50$1');
      content = content.replace(/red-100/g, 'sky-100');
      content = content.replace(/red-200/g, 'sky-200');
      content = content.replace(/red-500/g, 'sky-500');
      content = content.replace(/red-600/g, 'sky-500');
      content = content.replace(/red-700/g, 'sky-600');
      content = content.replace(/bg-red-500/g, 'bg-green-500'); // for whatsapp logo mostly
      content = content.replace(/rose-50\/50/g, 'sky-50/50');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processFiles(path.join(__dirname, 'src'));
console.log('Colors replaced successfully to Cerulean Blue!');
