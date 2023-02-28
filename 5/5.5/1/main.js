function camelize(str) {
    let newStr = str.split('-');
    return newStr.map((word, index) => index===0 ? word : word[0].toUpperCase + word.slice(1)).join('');
}