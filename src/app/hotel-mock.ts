import { HOTEL } from 'src/app/models/HOTEL'

 export let hotels: HOTEL[]= [
    {
         id: 1,
         name: 'Lakewood',
         rating: 3,
         regularCustomers: 
         [{
            weekDay: 110,
            weekEnd: 90
        }
        ],
         loyaltyProgramCustomers:  
         [{
            weekDay: 80,
            weekEnd: 80 
         }]
    },
    {
        id: 2,
        name: 'Bridgewood',
        rating: 4,
        regularCustomers: 
        [{
           weekDay: 160,
           weekEnd: 60
       }
       ],
        loyaltyProgramCustomers:  
        [{
           weekDay: 110,
           weekEnd: 50  
        }]
   },
   {
    id: 3,
    name: 'Ridgewood',
    rating: 5,
    regularCustomers: 
    [{
       weekDay: 220,
       weekEnd: 150
   }
   ],
    loyaltyProgramCustomers:  
    [{
       weekDay: 100,
       weekEnd: 40 
    }]
}
  ]
