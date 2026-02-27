import type { Types } from "mongoose";

export interface ILead {
    name: string;
    email: string;
    phone: string;
    source: string;
    status: string;
    realtorId: Types.ObjectId;
    workspaceId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface ILeadCreate {
    name: string;
    email: string;
    phone: string;
    source: string;
    realtorId: Types.ObjectId;
    workspaceId: Types.ObjectId;
}
