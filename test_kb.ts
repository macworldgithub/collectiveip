import { getBotResponse } from './src/config/knowledgeBase';

const questions = [
  "Can you support a multi-site Cisco wireless rollout?",
  "What intelligent automation solutions do you offer?",
  "Can you deliver endpoint security for a large enterprise?",
  "How do you work with channel partners?",
  "Which service would you like to explore?",
];

questions.forEach(q => {
  console.log(`\nResponse for '${q}'`);
  console.log(getBotResponse(q));
});
