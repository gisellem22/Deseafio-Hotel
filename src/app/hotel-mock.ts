import { HOTEL } from 'src/app/models/HOTEL'

 export let hotels: HOTEL[]= [
    {
         id: 1,
         name: 'LAKEWOOD',
         rating: 3,
         img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
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
        name: 'BRIDGEWOOD',
        rating: 4,
        img: "https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",        regularCustomers: 
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
    name: 'RIDGEWOOD',
    rating: 5,
    img: "https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
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
