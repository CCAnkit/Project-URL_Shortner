const express = require('express');
const router = express.Router();
const urlController = require("../controllers/urlController.js");

// API's
router.post(`/url/shorten`, urlController.urlShorten);    //CreateShortUrl

router.get(`/:urlCode`,  urlController.redirectUrl);      //RedirectUrl


module.exports = router;