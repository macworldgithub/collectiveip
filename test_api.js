fetch('https://collective-bot.omnisuiteai.com/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message: 'hello', sessionId: null })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
