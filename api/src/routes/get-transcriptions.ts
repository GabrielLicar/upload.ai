import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { prisma } from "../lib/prisma";

export async function getTranscriptionsRoute(app: FastifyInstance) {
  app.get('/transcriptions/:videoId', async (req, res) => {

    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    })
    
    
    const { videoId } = paramsSchema.parse(req.params);
    
    if (!videoId) return res.code(400).send({ error: 'Video ID its required.' })

    const transcriptions = await prisma.video.findFirst({
      where: {
        id: videoId,
      }
    })

    return transcriptions
  })
}