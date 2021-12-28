import venicePier from '../assets/venicefishingpier.jpg';
import redondoPier from '../assets/Redondobeachpier.jpg';
import santaMonicaPier from '../assets/santaMonicaPier.jpg';
import manhattanBeachPier from '../assets/manhattanBeachPier.jpg';
import willRodgersStateBeach from '../assets/willRodgersStateBeach.jpg';

export const beachData = [
  // resource https://www.californiabeaches.com/map/historic-fishing-piers-california/

  {
    id: 'Malibu',
    label: 'Surf',
    profileImage: willRodgersStateBeach,
    description: '',
    popularBeach: [
      'Zuma',
      'Corral Beach',
      'el Matador',
      'Big Rock Beach',
      'Pescodor',
      'Malibu Lagoon State Beach',
      'Will Rodgers State Beach',
      'Dead End Beach',
      'Pirates Cove',
      'Big Dume',
      'Paradise Cove Beach',
      'Esscondido Beach',
      'Latigo Beach',
      'Dan Blocker Beach',
      'Puerco Beach',
      'Amarillo Beach',
      'Malibu Beach',
      'Malibu Colony Beach',
      'Carbon Beach',
      'La Costa Beach',
      'Las Flores Beach',
      'Las Tunas Beach',
      'Topanga Beach',
      'Rocky Beach',
      'Ratner Beach',
      'Castle Rock Beach',
      'Sunset Beach',
      'Pacific Palisades Beach',
      'Palisades Beach',
    ],
    pier: {
      label: 'Pier',
      title: 'Malibu Pier',
      description: 'famous for its dual white towers',
      location: '23000 Pacific Coast Highway Malibu, CA 90265',
    },
  },
  {
    id: 'Santa Monica',
    label: 'Surf',
    profileImage: santaMonicaPier,
    description: '',
    popularBeach: ['Santa Monica State Beach', 'Sorrento Beach'],
    pier: {
      label: 'Pier',
      id: 'Santa Monica Pier',
      description: '',
      location: '200 Santa Monica Pier, Santa Monica',
    },
  },
  {
    id: 'Venice',
    label: 'Surf',
    profileImage: venicePier,
    description: '',
    popularBeach: [
      'Venice beach',
      'Venice City Beach',
      'Venice Pier Beach',
      'Marina Penisula Beach',
    ],
    pier: {
      label: 'Pier',
      title: 'Venice Beach Fishing Pier',
      description:
        'The Venice Pier Beach is at the long fishing pier jutting out into the Pacific Ocean from the Venice District of Los Angeles',
      address: 'W Washington Blvd and Ocean Front Walk Los Angeles CA 90291',
    },
  },
  {
    id: 'Marina Del Ray',
    label: 'Surf/ Jetty',
    profileImage: manhattanBeachPier,
    popularBeach: [''],
    description:
      'Licensed fishing is allowed at the north and south jetties and Venice pier(no License), Marina del Rey Sportfishing operates a bait dock at Fisherman’s Village (13739 Fiji Way), open daily 5 a.m.–6 p.m',
    location: '13739 Fiji Way',
  },
  {
    id: 'Redondo',
    label: 'Surf',
    profileImage: redondoPier,
    description: '',
    popularBeach: ['Hermosa Pier', 'El Segundo beach', 'Torrance Beach', 'King Harbor'],
    pier: {
      id: 'Redondo Beach Pier',
      label: 'Surf',
      photo: '',
      description: '',
      location: '121 W Torrance Blvd 103, Redondo Beach',
    },
  },
  {
    id: 'Huntington Beach Pier',
    label: 'Pier',
    profileImage: venicePier,
    description: '',
    location: 'Main St. and Pacific Coast Highway, Huntington Beach',
  },
  {
    id: 'Catalina Island',
    label: 'Surf',
    profileImage: venicePier,
    description: '',
    popularBeach: [''],
  },
  // {
  //   id: 'Seal Beach',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: ['Seal Beach', 'Alimitos Bay', 'Huntington Harbor', 'LA Harbor'],
  // },

  // {
  //   id: 'Huntington Beach',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: [
  //     'Huntington Flats',
  //     'Huntington Beach Pier',
  //     'Huntington Harbor',
  //     'SeaBridge Park',
  //   ],
  // },

  // {
  //   id: 'Belmont Pier',
  //   description: '',
  //   location: '',
  // },
  // {
  //   id: 'Cabrillo Pier',
  //   description: '',
  //   location: '',
  // },
  // {
  //   id: 'Hermosa Pier',
  //   description: '',
  //   location: '',
  // },
  // {
  //   id: 'Pier J',
  //   description: '',
  //   location: '',
  // },
  // {
  //   id: 'Rainbow Harbor',
  //   description: '',
  //   location: '',
  // },

  // {
  //   id: 'Seal Beach',
  //   description: '',
  //   location: '',
  // },
  // {
  //   id: 'Oceanside Pier',
  //   description: '',
  //   location: '',
  // },
  // {
  //   id: 'Newport Beach Pier',
  //   description: '',
  //   location: '70 Newport Pier, Newport Beach',
  // },
  // {
  //   id: 'Santa Cruz Wharf',
  //   description: '',
  //   location: '21 Municipal Wharf, Santa Cruz',
  // },

  // {
  //   id: 'Seascape Pier',
  //   description: '',
  //   location: 'Pier at Trinidad Bay, Trinidad, CA 95570',
  // },
  // {
  //   id: 'Santa Barbara',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: [
  //     'Refugio State Beach',
  //     'Rincon Beach',
  //     ' Gaviota State Park',
  //     'Goleta Beach Park',
  //     'Carpenteria State Beach',
  //   ],
  // },
  // {
  //   id: 'San Pedro',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: ['Horseshoe Kelp'],
  // },

  // {
  //   id: 'Newport Beach',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: ['Newland', 'River Jetties', 'Newport Harbor'],
  // },
  // {
  //   id: 'Dana Point',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: ['Salt Creek', 'Dana Cove Park', 'Doheny State Beach'],
  // },
  // {
  //   id: 'OceanSide',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: [
  //     'Oceanside Pier',
  //     'Oceanside Harbor',
  //     'Buena Vista Lagoon',
  //     'Miramar Resivoir',
  //     'Catalina and San Clemente Island',
  //   ],
  // },
  // {
  //   id: 'Solana Beach',
  //   label: 'Surf',
  //   photo: '',
  //   description: '',
  //   popularBeach: [
  //     'Del Mar',
  //     'Torrey Pines',
  //     'Mission Beach',
  //     'Cardiff',
  //     'Ponto',
  //     ' Misson Bay',
  //     'San Diego Bay',
  //   ],
  // },
];
