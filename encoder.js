function Encoder() {
}

Encoder.prototype.encodeHTML = function(str) {
    var encoded = '';

    if (str === undefined || str.length == 0) {
        return encoded;
    }

    encoded = str.replace(/&/g, '&amp;');
    encoded = encoded.replace(/</g, '&lt;');
    encoded = encoded.replace(/>/g, '&gt;');
    encoded = encoded.replace(/ /g, '&nbsp;');
    encoded = encoded.replace(/\'/g, '&#39;');
    encoded = encoded.replace(/\"/g, '&#quot;');

    return encoded;
};

Encoder.prototype.decodeHTML = function(str) {
    var decoded = '';

    if (str === undefined || str.length == 0) {
        return encoded;
    }

    dencoded = str.replace(/&amp;/g, '&');
    dencoded = dencoded.replace(/&lt;/g, '<');
    dencoded = dencoded.replace(/&gt;/g, '>');
    dencoded = dencoded.replace(/&nbsp;/g, ' ');
    dencoded = dencoded.replace(/&#39;/g, '\'');
    dencoded = dencoded.replace(/&#quot;/g, '\"');

    return decoded;
};

Encoder.prototype.encodeHTMLAttr = function(str) {
    //TODO
};

Encoder.prototype.encodeJavaScript = function(str) {
    //TODO
};

Encoder.prototype.encodeURI = function(str) {
    return encodeURI(str);
};

Encoder.prototype.decodeURI = function(str) {
    return decodeURI(str);
};

Encoder.prototype.encodeURIComponent = function(str) {
    return encodeURIComponent(str);
};

Encoder.prototype.decodeURIComponent = function(str) {
    return decodeURIComponent(str);
};

Encoder.protoytpe.encodeXML = function(str) {
    //TODO
};

Encoder.prototype.decodeXML = function(str) {
    //TODO
};


global.exports = new Encoder();
