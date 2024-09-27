import { NextResponse } from "next/server";
import {connectionString} from '../../lib/database/db_connection';
import mongoose from "mongoose"
import {Address} from "../../lib/database/model/address";
export const GET = async () => {
  await mongoose.connect(connectionString)
  const empData = await Address.find();

  // return NextResponse.json({result: "Success"})
  return NextResponse.json({result: empData})
}
