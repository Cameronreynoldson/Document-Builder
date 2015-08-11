var mongoose = require('mongoose');
var Schema = mongoose.schema;

var Note = new Schema({
  userId: String,
  content: String,
  postDate: Date
});

mongoose.model('Note', Note);
mongoose.connect('mongodb://localhost/notes');
