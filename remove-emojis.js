const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\adity\\OneDrive\\Desktop\\Desktop\\College\\trackbot';

const files = ['index.html', 'platform.html', 'blogs.html'];

// Emoji regex covering various blocks
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2B06}\u{2194}\u{25AA}\u{25AB}\u{25FE}\u{25FD}\u{25FC}\u{25FB}\u{2B1B}\u{2B1C}\u{1F200}-\u{1F2FF}\u{2934}\u{2935}\u{200D}\u{FE0F}✓]/gu;

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove emojis
    content = content.replace(emojiRegex, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Removed emojis from ${file}`);
    } else {
      console.log(`No emojis found in ${file}`);
    }
  }
});
