const Music = require("../../models/musicModel/music.model");

//  create Music
const createMusic = async (reqBody) => {
    return Music.create(reqBody);
};

//  get Music list
const getMusicList = async (filter, options) => {
    return Music.find({});
    // return Music.find({$or: [{Music_total_rooms: 10}]});
};

//  get Music by Id
const getMusicById = async (MusicId) => {
    return Music.findOne({ MusicId });
};

//  delete Music
const deleteMusic = async (MusicId) => {
    return MusicId.findByIaAndDelete(MusicId);
};

module.exports = {
    createMusic,
    getMusicList,
    getMusicById,
    deleteMusic,
}