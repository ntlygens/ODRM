import * as mongodb from "mongodb";

export interface UserInterface {
    _id?: mongodb.ObjectId;
    name: string;
    img: string;
    desc?: string;
    content?: string;
    pgLoc: "Landing" | "Home" | "Work" | "Restaurant" | "RoadSide"

}
