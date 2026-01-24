export enum Orientation {
    LANDSCAPE = 'landscape',
    PORTRAIT = 'portrait',
    SQUARE = 'square'
}

// card-item.interface.ts
export interface CardItem {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  imgUrl: string;
  orientation?: Orientation;
}

// grid-item.interface.ts
export interface GridItem {
  data?: CardItem;
  cols: number;
  rows: number;
  isPlaceholder: boolean;
}

// card-data.ts
export const CARD_DATA: CardItem[] = [
  {
    _id: '1',
    title: 'Mountain Vista',
    subtitle: 'Nature Photography',
    content: 'A breathtaking view of snow-capped mountains at sunset',
    imgUrl: 'assets/CollageImages/collage-image-1.jpg?w=800&h=1200'
  },
  {
    _id: '2',
    title: 'Urban Skyline',
    subtitle: 'City Life',
    content: 'Modern architecture against the evening sky',
    imgUrl: 'assets/CollageImages/collage-image-2.jpg?w=1200&h=800'
  },
  {
    _id: '3',
    title: 'Ocean Waves',
    subtitle: 'Seascape',
    content: 'Powerful waves crashing on rocky shores',
    imgUrl: 'assets/CollageImages/collage-image-3.jpg?w=800&h=1200'
  },
  {
    _id: '4',
    title: 'Desert Landscape',
    subtitle: 'Wilderness',
    content: 'Golden sand dunes under a clear blue sky',
    imgUrl: 'assets/CollageImages/collage-image-4.jpg?w=1200&h=800'
  },
  {
    _id: '5',
    title: 'Forest Trail',
    subtitle: 'Hiking Adventure',
    content: 'A peaceful path through ancient woodland',
    imgUrl: 'assets/CollageImages/collage-image-5.jpg?w=800&h=1200'
  },
  {
    _id: '6',
    title: 'Coastal Sunset',
    subtitle: 'Beach Views',
    content: 'Vibrant colors painting the horizon',
    imgUrl: 'assets/CollageImages/collage-image-6.jpg?w=1200&h=800'
  },
  {
    _id: '7',
    title: 'Alpine Peak',
    subtitle: 'Mountain Range',
    content: 'Majestic summit reaching into the clouds',
    imgUrl: 'assets/CollageImages/collage-image-7.jpg?w=800&h=1200'
  },
  {
    _id: '8',
    title: 'City Lights',
    subtitle: 'Night Photography',
    content: 'Downtown district illuminated after dark',
    imgUrl: 'assets/CollageImages/collage-image-8.jpg?w=1200&h=800'
  },
  {
    _id: '9',
    title: 'Waterfall Beauty',
    subtitle: 'Natural Wonder',
    content: 'Cascading water through lush greenery',
    imgUrl: 'assets/CollageImages/collage-image-9.jpg?w=800&h=1200'
  },
  {
    _id: '10',
    title: 'Autumn Colors',
    subtitle: 'Seasonal Change',
    content: 'Trees displaying their fall palette',
    imgUrl: 'assets/CollageImages/collage-image-10.jpg?w=1200&h=800'
  },
  {
    _id: '11',
    title: 'Rocky Cliffs',
    subtitle: 'Coastal Formation',
    content: 'Dramatic geological structures by the sea',
    imgUrl: 'assets/CollageImages/collage-image-11.jpg?w=1200&h=800'
  },
  {
    _id: '12',
    title: 'Prairie Sunset',
    subtitle: 'Open Spaces',
    content: 'Endless fields under a painted sky',
    imgUrl: 'assets/CollageImages/collage-image-12.jpg?w=1200&h=800'
  },
  {
    _id: '13',
    title: 'Misty Morning',
    subtitle: 'Dawn Atmosphere',
    content: 'Fog rolling through the valley',
    imgUrl: 'assets/CollageImages/collage-image-13.jpg?w=800&h=1200'
  },
  {
    _id: '14',
    title: 'River Journey',
    subtitle: 'Waterway Views',
    content: 'Flowing water through natural terrain',
    imgUrl: 'assets/CollageImages/collage-image-14.jpg?w=800&h=1200'
  },
  {
    _id: '15',
    title: 'Snow Valley',
    subtitle: 'Winter Scene',
    content: 'Pristine white landscape in winter',
    imgUrl: 'assets/CollageImages/collage-image-15.jpg?w=800&h=1200'
  },
  {
    _id: '16',
    title: 'Tropical Paradise',
    subtitle: 'Island Life',
    content: 'Palm trees swaying in the breeze',
    imgUrl: 'assets/CollageImages/collage-image-16.jpg?w=1200&h=800'
  },
  {
    _id: '17',
    title: 'Canyon Depths',
    subtitle: 'Geological Marvel',
    content: 'Deep ravines carved by time',
    imgUrl: 'assets/CollageImages/collage-image-17.jpg?w=800&h=1200'
  },
  {
    _id: '18',
    title: 'Lake Reflection',
    subtitle: 'Mirror Waters',
    content: 'Perfect symmetry on still water',
    imgUrl: 'assets/CollageImages/collage-image-18.jpg?w=800&h=1200'
  },
  {
    _id: '19',
    title: 'Highland Vista',
    subtitle: 'Elevated Views',
    content: 'Panoramic mountain scenery',
    imgUrl: 'assets/CollageImages/collage-image-19.jpg?w=800&h=1200'
  },
  {
    _id: '20',
    title: 'Golden Hour',
    subtitle: 'Perfect Light',
    content: 'Warm tones across the landscape',
    imgUrl: 'assets/CollageImages/collage-image-20.jpg?w=1200&h=800'
  },
  {
    _id: '21',
    title: 'Storm Clouds',
    subtitle: 'Dramatic Weather',
    content: 'Dark clouds gathering overhead',
    imgUrl: 'assets/CollageImages/collage-image-21.jpg?w=800&h=1200'
  },
  {
    _id: '22',
    title: 'Meadow Flowers',
    subtitle: 'Spring Bloom',
    content: 'Colorful wildflowers in full bloom',
    imgUrl: 'assets/CollageImages/collage-image-22.jpg?w=1200&h=800'
  }
];

// export const CARD_DATA2: CardItem[] = [
//   {
//     _id: '1',
//     title: 'Mountain Vista',
//     subtitle: 'Nature Photography',
//     content: 'A breathtaking view of snow-capped mountains at sunset',
//     imgUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=1200'
//   },
//   {
//     _id: '2',
//     title: 'Urban Skyline',
//     subtitle: 'City Life',
//     content: 'Modern architecture against the evening sky',
//     imgUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800'
//   },
//   {
//     _id: '3',
//     title: 'Ocean Waves',
//     subtitle: 'Seascape',
//     content: 'Powerful waves crashing on rocky shores',
//     imgUrl: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=1200'
//   },
//   {
//     _id: '4',
//     title: 'Desert Landscape',
//     subtitle: 'Wilderness',
//     content: 'Golden sand dunes under a clear blue sky',
//     imgUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=800'
//   },
//   {
//     _id: '5',
//     title: 'Forest Trail',
//     subtitle: 'Hiking Adventure',
//     content: 'A peaceful path through ancient woodland',
//     imgUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1200'
//   },
//   {
//     _id: '6',
//     title: 'Coastal Sunset',
//     subtitle: 'Beach Views',
//     content: 'Vibrant colors painting the horizon',
//     imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800'
//   },
//   {
//     _id: '7',
//     title: 'Alpine Peak',
//     subtitle: 'Mountain Range',
//     content: 'Majestic summit reaching into the clouds',
//     imgUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1200'
//   },
//   {
//     _id: '8',
//     title: 'City Lights',
//     subtitle: 'Night Photography',
//     content: 'Downtown district illuminated after dark',
//     imgUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800'
//   },
//   {
//     _id: '9',
//     title: 'Waterfall Beauty',
//     subtitle: 'Natural Wonder',
//     content: 'Cascading water through lush greenery',
//     imgUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&h=1200'
//   },
//   {
//     _id: '10',
//     title: 'Autumn Colors',
//     subtitle: 'Seasonal Change',
//     content: 'Trees displaying their fall palette',
//     imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800'
//   },
//   {
//     _id: '11',
//     title: 'Rocky Cliffs',
//     subtitle: 'Coastal Formation',
//     content: 'Dramatic geological structures by the sea',
//     imgUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800'
//   },
//   {
//     _id: '12',
//     title: 'Prairie Sunset',
//     subtitle: 'Open Spaces',
//     content: 'Endless fields under a painted sky',
//     imgUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800'
//   },
//   {
//     _id: '13',
//     title: 'Misty Morning',
//     subtitle: 'Dawn Atmosphere',
//     content: 'Fog rolling through the valley',
//     imgUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200'
//   },
//   {
//     _id: '14',
//     title: 'River Journey',
//     subtitle: 'Waterway Views',
//     content: 'Flowing water through natural terrain',
//     imgUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=1200'
//   },
//   {
//     _id: '15',
//     title: 'Snow Valley',
//     subtitle: 'Winter Scene',
//     content: 'Pristine white landscape in winter',
//     imgUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=1200'
//   },
//   {
//     _id: '16',
//     title: 'Tropical Paradise',
//     subtitle: 'Island Life',
//     content: 'Palm trees swaying in the breeze',
//     imgUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800'
//   },
//   {
//     _id: '17',
//     title: 'Canyon Depths',
//     subtitle: 'Geological Marvel',
//     content: 'Deep ravines carved by time',
//     imgUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200'
//   },
//   {
//     _id: '18',
//     title: 'Lake Reflection',
//     subtitle: 'Mirror Waters',
//     content: 'Perfect symmetry on still water',
//     imgUrl: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=1200'
//   },
//   {
//     _id: '19',
//     title: 'Highland Vista',
//     subtitle: 'Elevated Views',
//     content: 'Panoramic mountain scenery',
//     imgUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=1200'
//   },
//   {
//     _id: '20',
//     title: 'Golden Hour',
//     subtitle: 'Perfect Light',
//     content: 'Warm tones across the landscape',
//     imgUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=800'
//   },
//   {
//     _id: '21',
//     title: 'Storm Clouds',
//     subtitle: 'Dramatic Weather',
//     content: 'Dark clouds gathering overhead',
//     imgUrl: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&h=1200'
//   },
//   {
//     _id: '22',
//     title: 'Meadow Flowers',
//     subtitle: 'Spring Bloom',
//     content: 'Colorful wildflowers in full bloom',
//     imgUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=800'
//   }
// ];
