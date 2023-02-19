import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  messages: defineTable({
    author: s.string(),
    body: s.string(),
    url: s.any(), 
  }),
  simulations: defineTable({
    time: s.number(),
    cowhealth: s.number(),
    grasshealth: s.number(),
    numberpaddocks: s.number(),
    rotationtime: s.number()
  })
})
