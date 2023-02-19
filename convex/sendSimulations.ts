import { mutation } from "./_generated/server";

export default mutation(async ({ db },  cowhealth: number, grasshealth: number, numberpaddocks:number, rotationtime:number) => {
  console.log("posting", grasshealth);
  db.insert("simulations", { time: Date.now(), cowhealth, grasshealth, numberpaddocks, rotationtime });
});