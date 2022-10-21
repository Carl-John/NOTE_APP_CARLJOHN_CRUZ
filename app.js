const add = require('./add')
const read = require('./read')
const present = require('./present')
const update = require('./update')
// get user input
const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
    // Build Object
    note = { 
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}

if(cmd[2] == 'read') {
    present(read())
}

if (cmd[2] == 'delete') {
    let id = cmd[3]
    let oldNote = read()
    let del = require('./del')
    del(id, oldNote)
    console.log(read())
}

if (cmd[2] == 'update'){
    const note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5],
    }
    const oldNote = read()
    update(note, oldNote)
    let present = require('./present')
    present(read())
}