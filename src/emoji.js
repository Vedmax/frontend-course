var format = message => {
    return message.replace(/:\)/g, "%(");
}

module.exports = {
    format:format
}