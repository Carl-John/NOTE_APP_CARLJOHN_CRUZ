const fs = require('fs')
const del = function(id,oldNew){
    const note = JSON.parse(oldNote)

    const newNote = note.filter(function(n,idx){
        return n.id !== id
    })
    fs.writeFileSync('./note.txt',JSON.stringify(newNote))

}
module.exports = del