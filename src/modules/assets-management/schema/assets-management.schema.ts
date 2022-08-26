import { Schema, Prop } from "@nestjs/mongoose";
import { IAssetsDetails } from "../assets-management.interface";
import { Types } from "mongoose";
import { OrganizationsEntity } from "src/modules/organizations/schema/organizations.schema";

@Schema({ timestamps: true, versionKey: false })
export class AssetsManagement{


    @Prop({
        required: true,
        index: true,
        uppercase: true,
        unique: false,
        trim: true,
    })
    title: string;

    @Prop({
        required: false,
        type: [{
            label: String,
            value:String
        }]
    })
    details: IAssetsDetails[]
    
    @Prop({
        required: true,
        type: Types.ObjectId,
         ref: OrganizationsEntity.name,
    })
    organization:Types.ObjectId

}