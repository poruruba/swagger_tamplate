'use strict';

async function parse(parser, event) {
  var body = await parser.parse(event);

  if (body.files) {
    event.files = {};
    for (var i = 0; i < event.files.length; i++) {
      var file = {};
      file.buffer = event.files[i].content;
      file.encoding = event.files[i].encoding;
      file.fieldname = event.files[i].fieldname;
      file.mimetype = event.files[i].contentType;
      file.originalname = event.files[i].filename;
      file.size = event.files[i].content.length;
      event.files[event.file.fieldname] = [file];
    }
  }

  return body;
}

module.exports = {
  parse,
};