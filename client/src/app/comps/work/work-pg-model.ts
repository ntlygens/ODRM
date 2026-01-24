export enum WorkPgModel {
    
}

export enum ODMStateType {
  LANDING = 'landing' as any,
  HOME = 'home' as any,
  WORK = 'work' as any,
  RESTAURANT = 'restaurant' as any,
  ROADSIDE = 'roadside' as any,
}

export interface gridCardInterface {
  _id?: string;
  color?: string;
  cols?: number; 
  rows?: number;
  text?: string;
  title?: string;
  subTitle?: string;
  desc?: string;
  content?: Blob;
  imageUrl?: string;
  cardType?: ODMStateType;

}

export interface WorkInterface {
    
}
