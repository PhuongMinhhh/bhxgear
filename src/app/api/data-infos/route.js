import { NextResponse } from "next/server";
import {connectionString} from '../../lib/database/db_connection';
import mongoose from "mongoose"
import {Info} from "../../lib/database/model/info";
export const GET = async () => {
  await mongoose.connect(connectionString)
  const empData = await Info.find();

  // return NextResponse.json({result: "Success"})
  return NextResponse.json(empData)
}


export const POST = async (req) => {
  const infoload = await req.json();
  await mongoose.connect(connectionString)
  const infoData = new Info(infoload)
  const response = await infoData.save();
  return NextResponse.json({result: response})

}