import fs from 'node:fs'
import Picture from '../models/Picture.js'

export const create = async (req, res) => {
  try {
    const { name } = req.body
    const file = req.file
    const picture = new Picture({
      name,
      src: file.path,
    })

    await picture.save()

    res.json({ picture, msg: 'Imagem salva com sucesso!' })
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao salvar imagem.' })
  }
}

export const findAll = async (_, res) => {
  try {
    const pictures = await Picture.find()
    res.json(pictures)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar imagens.' })
  }
}

export const remove = async (req, res) => {
  try {
    const picture = await Picture.findByIdAndDelete(req.params.id)
    if (!picture) {
      return res.status(404).json({ message: 'Imagem não encontrada.' })
    }
    fs.unlinkSync(picture.src)
    res.json({ message: 'Imagem removida com sucesso!' })
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir imagem.' })
    console.log(error)
  }
}
