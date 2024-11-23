import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import { CreateNutritionController } from './controllers/CreateNutritionController'

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/teste', (request: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Guilherme",\n  "sexo": "Masculino",\n  "idade": 20,\n  "altura": 1.80,\n  "peso": 100,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "7:00",\n      "nome": "Cafe da manha",\n      "alimentos": [\n        "Aveia (50g)",\n        "Leite desnatado (200ml)",\n        "Banana (1 unidade)",\n        "Nozes (20g)",\n        "Proteina de soro do leite (30g)"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da manha",\n      "alimentos": [\n        "Batata doce media (150g)",\n        "Peito de frango (100g)"\n      ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoco",\n      "alimentos": [\n        "Arroz integral (150g)",\n        "Feijao (1 concha)",\n        "Carne vermelha (150g)",\n        "Salada (folhas verdes, tomate, pepino)"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da tarde",\n      "alimentos": [\n        "Whey protein (30g)",\n        "Fruta (maça ou laranja)"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Janta",\n      "alimentos": [\n        "Peixe (150g)",\n        "Batata assada (150g)",\n        "Brócolis (1 concha)"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche antes de dormir",\n      "alimentos": [\n        "Caseina (30g)",\n        "Leite desnatado (100ml)"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey protein",\n    "Creatina",\n    "BCAA",\n    "Vitamina D"\n  ]\n}\n```'

    try {
      //extrari o json
      let jsonString = responseText
        .replace(/```\w*\n/g, '')
        .replace(/\n```/g, '')
        .trim()
      let jsonObject = JSON.parse(jsonString)
      return reply.send({ data: jsonObject })
    } catch (error) {
      console.error(error)
    }
    reply.send({ ok: true })
  })

  fastify.post(
    '/create',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply)
    }
  )
}
