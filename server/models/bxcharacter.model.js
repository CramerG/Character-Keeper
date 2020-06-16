const mongoose = require('mongoose');

const BXSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true,
    },
    groups: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    str: {
        type: Number,
        required: true
    },
    dex: {
        type: Number,
        required: true
    },
    con: {
        type: Number,
        required: true
    },
    int: {
        type: Number,
        required: true
    },
    wis: {
        type: Number,
        required: true
    },
    cha: {
        type: Number,
        required: true
    },
    ac: {
        type: Number,
        required: true
    },
    thac0: {
        type: Number,
        required: true
    },
    spells: Array,
    theifSkills: Array,
}, {timestamps: true})

const BXCharacter = mongoose.model("BXCharacter", BXSchema);

module.exports = BXCharacter;