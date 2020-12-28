let userInput: unknown;

let userName: String;

userInput = 5;
userInput = 'hello'
userName = 'liminjun'
if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {messsage: message,errorCode: code}
}

generateError('An error occurred!', 500)