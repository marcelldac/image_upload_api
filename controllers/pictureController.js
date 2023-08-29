const Picture = require('../models/Picture');

exports.create = async (req, res) => {
    try{
        const {name} = req.body;
        const file = req.file;
        const picture = new Picture({
            name,
            src: file.path
        });

        await picture.save();

        res.json({picture, msg: "Imagem salva com sucesso!"})
    }catch(error){
        res.status(500).json({mensagem: "Erro ao salvar imagem."})
    }
};

exports.findAll = async (req, res) => {
    try{
        const pictures = await Picture.find();
        res.json(pictures);
    }catch(error){
        res.status(500).json({message: "Erro ao buscar imagens."});
    }
}