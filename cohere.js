const cohere = require('cohere-ai');

cohere.init('6ojTvfUtHJnfCKwki7h3ersql7qLfSP9YcJeL23n'); // Replace with your API key

async function summarizeText(text) {
  try {
    const response = await cohere.summarize({
      text,
      length: 'medium',
      format: 'paragraph',
      model: 'summarize-xlarge',
      additional_command: '',
      temperature: 0.3,
    });

    return response.body.summary;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = {
  summarizeText,
};
