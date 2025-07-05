const axios = require('axios');

exports.translate = async (req, res) => {
  try {
    const { text, source, target } = req.body;

    const response = await axios.post(process.env.TRANSLATE_API, {
      q: text,
      source,
      target,
      format: 'text'
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    res.json({ translated: response.data.translatedText });
  } catch (error) {
    res.status(500).json({ error: 'Translation failed', detail: error.message });
  }
};
