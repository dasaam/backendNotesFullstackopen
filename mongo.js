const mongoose = require('mongoose')
const password = 'KADAZAMI007'

const url = `mongodb+srv://photoman:${password}@cluster0.ecufs.mongodb.net/note-app`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

/*note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})*/

/*Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})*/