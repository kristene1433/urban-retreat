export type Review = {
  id: string
  guestName: string
  rating: number // 1-5
  title: string
  content: string
  stayDate: string // ISO or human readable
  roomType: 'Studio Apartment' | 'Deluxe Suite' | 'Penthouse'
}

export const reviews: Review[] = [
  {
    id: 'r1',
    guestName: 'Ava Thompson',
    rating: 5,
    title: 'Absolutely perfect city escape',
    content:
      'The location is unbeatable and the views are breathtaking. The room was spotless and the staff made everything seamless. We loved the rooftop area and the concierge helped us plan the perfect weekend.',
    stayDate: 'June 2025',
    roomType: 'Deluxe Suite',
  },
  {
    id: 'r2',
    guestName: 'Liam Chen',
    rating: 4,
    title: 'Modern, comfortable, and convenient',
    content:
      'Beautiful interiors and super comfortable bed. Fast WiFi and great workspace for remote work. Would have loved a few more kitchen tools, but overall fantastic stay.',
    stayDate: 'May 2025',
    roomType: 'Studio Apartment',
  },
  {
    id: 'r3',
    guestName: 'Sofia Martinez',
    rating: 5,
    title: 'Luxury penthouse exceeded expectations',
    content:
      'The penthouse is stunning. Panoramic views, private rooftop access, and every detail felt premium. Concierge arranged last-minute dining for us—amazing service!',
    stayDate: 'April 2025',
    roomType: 'Penthouse',
  },
  {
    id: 'r4',
    guestName: 'Noah Patel',
    rating: 5,
    title: 'Spotless and stylish',
    content:
      'Immaculately clean with stylish design touches. The building felt safe and quiet at night. We will definitely be back for another weekend.',
    stayDate: 'March 2025',
    roomType: 'Deluxe Suite',
  },
  {
    id: 'r5',
    guestName: 'Emma Williams',
    rating: 4,
    title: 'Great value in the heart of the city',
    content:
      'Everything we needed for a city break. Easy check-in, friendly staff, and walking distance to everything. The gym was better than most hotels.',
    stayDate: 'February 2025',
    roomType: 'Studio Apartment',
  },
]

export function getReviewById(id: string): Review | undefined {
  return reviews.find((r) => r.id === id)
}


