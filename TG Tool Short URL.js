function doPost(e) {
    var estringa = JSON.parse(e.postData.contents);
    var payload  = identificar(estringa);
    var data     = {
        "method": "post",
        "payload": payload
    };
    UrlFetchApp.fetch("https://api.telegram.org/bot6561155639:AAEGhfCJECjHDTIhKZFe9vUJVUg_mTdTbueg/", data);
}

function identificar(e) {
    if ( e.message.text ) {
        if ( isUrl(e.message.text) ) {
            var short_url = UrlFetchApp.fetch("http://ouo.io/api/GmK0uIU1?s=" + e.message.text);
            var mensaje   = {
                "method": "sendMessage",
                "chat_id": String(e.message.chat.id),
                "text": short_url.getContentText(),
            }
        }
    }
    else {
        var mensaje = {
            "method": "sendMessage",
            "chat_id": String(e.message.chat.id),
            "text": "Try other stuff"
        }
    }
    // else if (e.message.sticker){
    //   var mensaje = {
    //     "method": "sendSticker",
    //     "chat_id": String(e.message.chat.id),
    //     "sticker": e.message.sticker.file_id
    //   }
    //  }
    // else if (e.message.photo){
    //   var array = e.message.photo;
    //   var text = array[1];
    //   var mensaje = {
    //     "method": "sendPhoto",
    //     "chat_id": String(e.message.chat.id),
    //     "photo": text.file_id
    //   }
    //  }

    return mensaje
}

function isUrl(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}
  