// index.js
const { App } = require('@slack/bolt');
require('dotenv').config();

// Initialize the app in Socket Mode
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN, // App-level token for Socket Mode
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
});

// Listen for any message that includes "slay"
app.message(/slay/i, async ({ message, say }) => {
    console.log(`Message received from ${message.user}: ${message.text}`);
    
    await say(`Did somebody say slay? Keep it fabulous, <@${message.user}>`);
});
(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ SlayTracker is running!');
  })();
  