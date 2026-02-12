export const destinations = [
  {
    id: 'mars-colony',
    name: 'Mars Colony',
    tagline: 'Red Horizon Residences',
    atmosphere: 'CO₂-rich, controlled luxury domes',
    gravity: '0.38g',
    travelTime: '6 Months',
    color: 'from-[#E75A3C] to-[#7A1C0E]',
  },
  {
    id: 'titan-resort',
    name: 'Titan Resort',
    tagline: 'Methane Sky Retreat',
    atmosphere: 'Nitrogen haze with premium habitats',
    gravity: '0.14g',
    travelTime: '7 Years',
    color: 'from-[#EFB25D] to-[#4E2E19]',
  },
  {
    id: 'europa-deep-sea',
    name: 'Europa Deep-Sea',
    tagline: 'Subsurface Ocean Sanctuaries',
    atmosphere: 'Pressurized under-ice sanctums',
    gravity: '0.13g',
    travelTime: '6 Years',
    color: 'from-[#8DE4FF] to-[#205C8A]',
  },
]

export const destinationMap = Object.fromEntries(destinations.map((d) => [d.id, d]))
