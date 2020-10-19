const crypto = require('crypto');

exports.generateID = () => {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    
    for (var i = 0; i < 16; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

exports.hashString = (str) => {
    var hash = crypto.getHashes();
    var hashPwd = crypto.createHash('sha1').update(str).digest('hex');
  
    return hash;
  }