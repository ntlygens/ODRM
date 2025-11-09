
export enum ODMStateType {
  LANDING = 'landing' as any,
  HOME = 'home' as any,
  WORK = 'work' as any,
  RESTAURANT = 'restaurant' as any,
  ROADSIDE = 'roadside' as any,
}

export interface UserInterface {
    _id?: string;
    name: string;
    img: string;
    desc?: string;
    content?: string;
    pgLoc: "Landing" | "Home" | "Work" | "Restaurant" | "RoadSide"

}

export interface ServiceScreenInterface {
  _id?: string;
  name?: string;
  desc?: string;
  num?: number;

}

export interface ODMRouteInterface {
  title?: string;
  redirectTo?: string;
  loadChildren?: any;
  pathMatch?: any;
  path: string;
  component?: any;
  data?: {
      state: string;
      animation: string;
      mobile?: any;
  };
  children?: any;
  outlets?: any;
  outlet?: string;
  formType?: ODMStateType;
}
