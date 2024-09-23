import { initiMongoose } from "../../../lib/mongoose";
import Info from "../../../models/Info";

export default async function handle(req, res) {
  await initiMongoose();
  res.json(await Product.find().exec());
}