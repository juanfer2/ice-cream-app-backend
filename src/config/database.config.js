import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/ice-cream-app'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))

mongoose.set('useFindAndModify', false);

module.exports = mongoose;