const express = require('express');
const cohere = require('cohere-ai');
const { v4: uuidv4 } = require('uuid');

cohere.init('6ojTvfUtHJnfCKwki7h3ersql7qLfSP9YcJeL23n'); // This is your trial API key

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/generate', async (req, res) => {
  const text = req.query.text; // Get the input text from the query string
  const response = await cohere.summarize({
    text: text,
    length: 'medium',
    format: 'paragraph',
    model: 'summarize-xlarge',
    additional_command: '',
    temperature: 0.3,
  });
  const summary = response.body.summary;

  res.send({ summary }); // Send the summary as JSON response
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
