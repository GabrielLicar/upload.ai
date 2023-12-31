import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAICompletionRoute } from './routes/generate-ai-completion';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { getTranscriptionsRoute } from './routes/get-transcriptions';
import { uploadVideoRoute } from './routes/upload-video';

const app = fastify();

app.register(fastifyCors, {
  origin: ['*'],
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);
app.register(getTranscriptionsRoute);

app.listen({
  host: '0.0.0.0',
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!');
})