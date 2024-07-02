import { FastifyInstance, FastfyPluginOptions, FastifyRequest, FastifyReply} from "fastify"

export async function routes (fastify: FastifyInstance, options: FastfyPluginOptions){
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => { 
        return {ok: true}
    } )
}