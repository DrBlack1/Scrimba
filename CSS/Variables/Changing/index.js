let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let yellow = rootStyles.getPropertyValue('--yellow');
console.log('yellow: ', yellow);


root.styleSheets.setProperty('--yellow', 'orange');