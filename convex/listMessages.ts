import { query } from './_generated/server'
import { Document } from './_generated/dataModel'
export default query(async ({ db, storage }) => {
  const messages = await db.query("messages").collect();
  for (const message of messages) {
    message.url = await storage.getUrl(message.body);
  }
  return messages;
});