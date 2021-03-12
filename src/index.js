module.exports = function check(str, bracketsConfig) {
    let elementsStr = str.split('');
    let stack = [];
    let arrBracketsConfig = bracketsConfig.toString().split(',');

    if (elementsStr.length % 2 !== 0) return false;
    for (let i = 0; i < elementsStr.length; i++) {
        let indStr = arrBracketsConfig.indexOf(elementsStr[i]);
        if (indStr % 2 === 0) {
            stack.push(elementsStr[i]);
            if (elementsStr[i] === arrBracketsConfig[indStr + 1]) {
                if (stack[stack.length - 2] === elementsStr[i]) {
                    stack.pop();
                    stack.pop();
                }
                if (stack[stack.length - 3] === elementsStr[i]) {
                    return false;
                }
            }
        } else {
            let indElemLastStack = arrBracketsConfig.indexOf(stack.pop());
            if (elementsStr[i] !== arrBracketsConfig[indElemLastStack + 1]) return false;
        }
    }
    return true;
}