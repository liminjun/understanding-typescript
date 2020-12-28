var userInput;
var userName;
userInput = 5;
userInput = 'hello';
userName = 'liminjun';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { messsage: message, errorCode: code };
}
generateError('An error occurred!', 500);
