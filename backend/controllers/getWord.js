const Words = require('../model/words');
const getWord = async(req, res) => {
    const { word, from } = req.query
    try {

        const requiredWord = await Words.findOne({
            [from]: word
        })
        res.status(200).json({
            requiredWord
        })
    } catch (error) {
        res.status(404).json({
            error
        })
    }

}
const getWords = async(req, res) => {
    try {
        const words = await Words.find({})
        res.status(200).json({ words })
    } catch (error) {
        res.status(404).json({ error })
    }

}

module.exports = { getWord, getWords }