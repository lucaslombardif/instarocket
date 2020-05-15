const Post  = require('../models/Post');
const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');
    return res.json(posts);
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { originalname: image } = req.file;
    const { location: url } = req.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: image,
      urlImage: url
    });

    req.io.emit('post', post);

    return res.json(post);
  }
};