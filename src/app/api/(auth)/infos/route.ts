import connect from "../../../database/db";

import Info from '../../../database/modals/info';

import { NextResponse,NextRequest } from "next/server";

export const GET  = async () =>{
    try{
        await connect();
        const infos = await Info.find();
        return new NextResponse(JSON.stringify(infos),{status: 200});

    } catch ( error : any ){
        return new NextResponse(" Error in fetching info" + error.message,{
            status: 500
        });
    }
}

// 

// post info 

    export const POST = async (req : NextRequest) => {
        const data = await req.json();

        if(!data.name || !data.email || !data.phone || !data.message){
            return new NextResponse("Missing required fields", {
                status: 400
            });
        }

        try{
            await connect();
            const info = new Info({
                loai: data.loai,
                model: data.model,
                ngaydi: data.ngaydi,
                ngaynhan: data.ngaynhan,
                ngayve: data.ngayve,
                sncu: data.sncu,
                snmoi: data.snmoi,
                sophieu: data.sophieu,
               
                trungtambaohanh: data.trungtambaohanh,

            });

            await info.save();

            return new NextResponse("Info submitted successfully", {
                status: 201
            });

        } catch ( error : any ){
            return new NextResponse("Error in saving info" + error.message,{
                status: 500
            });
        }
    }