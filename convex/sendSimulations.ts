import { mutation } from "./_generated/server";

export default mutation(({ db }, ) => {
  console.log("posting", title);
  db.insert("simulations", { title, date: Date.now(), votes: 1 });
});