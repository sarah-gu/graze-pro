import { mutation } from './_generated/server'

export default mutation(async ({ db }, body: string, author: string) => {
  const message = { body, author, url: undefined }
  await db.insert('messages', message)
})

export const sendMessage = mutation(async ({ db }, body, author) => {
  const message = { body, author, format: "text", url:undefined };
  await db.insert("messages", message);
});

// Generate a short-lived upload URL.
export const generateUploadUrl = mutation(async ({ storage }) => {
  return await storage.generateUploadUrl();
});
// Save the storage ID within a message.
export const sendImage = mutation(async ({ db }, storageId, author, url) => {
  const message = { body: storageId, author, format: "image", url };
  await db.insert("messages", message);
});