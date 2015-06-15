function Encoder() {
}

Encoder.prototype.encodeHTML = function(str) {
    var encoded = this.encodeHTMLAttr(str);
    encoded = encoded.replace(/>/g, '&gt;');
    encoded = encoded.replace(/ /g, '&nbsp;');

    return encoded;
};

Encoder.prototype.decodeHTML = function(str) {
    var decoded = '';

    if (str === undefined || str.length === 0) {
        return decoded;
    }

    decoded = str.replace(/&amp;/g, '&');
    decoded = decoded.replace(/&lt;/g, '<');
    decoded = decoded.replace(/&#39;/g, '\'');
    decoded = decoded.replace(/&quot;/g, '"');
    decoded = decoded.replace(/&gt;/g, '>');
    decoded = decoded.replace(/&nbsp;/g, ' ');

    return decoded;
};

Encoder.prototype.encodeHTMLAttr = function(str) {
    var encoded = '';

    if (str === undefined || str.length === 0) {
        return encoded;
    }

    encoded = str.replace(/&/g, '&amp;');
    encoded = encoded.replace(/</g, '&lt;');
    encoded = encoded.replace(/\'/g, '&#39;');
    encoded = encoded.replace(/"/g, '&quot;');

    return encoded;
};

Encoder.prototype.encodeJavaScript = function(str) {
    //TODO
};

Encoder.prototype.decodeJavaScript = function(str) {
    //TODO
}

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

Encoder.prototype.encodeXML = function(str) {
    //TODO
};

Encoder.prototype.decodeXML = function(str) {
    //TODO
};

Encoder.prototype.encodeJSON = function(str) {
    //TODO
};

Encoder.prototype.decodeJSON = function(str) {
    //TODO
};

Encoder.prototype.percentageEncode = function(str) {
    //TODO;
};

Encoder.prototype.percentageDecode = function(str) {
    //TODO
};

Encoder.prototype.quotedEncode = function(str) {
    //TODO
};

Encoder.prototype.quotedDecode = function(str) {
    //TODO
};

Encoder.prototype.base64Encode = function(str) {

};

Encoder.prototype.base64Decode = function(str) {

};

module.exports = new Encoder();