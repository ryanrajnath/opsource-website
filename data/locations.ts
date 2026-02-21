export interface Location {
  id: string;
  city: string;
  state: string;
  tagline: string;
  phone: string;
  image: string;
  address: string;
  isHQ?: boolean;
}

export const locations: Location[] = [
  { id: "anderson", city: "Anderson", state: "SC", tagline: "Lake Hartwell & the Upstate SC area", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1562178105-a570a37c5a04?w=600&q=80", address: "118 N. Main Street, Anderson, SC 29621" },
  { id: "arden", city: "Arden", state: "NC", tagline: "Near the Biltmore Estate & Western NC", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1579565362538-18e9e5384387?w=600&q=80", address: "2 Airport Road, Suite 100, Arden, NC 28704" },
  { id: "charleston", city: "Charleston", state: "SC", tagline: "Historic Charleston & the Lowcountry", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1732386210967-17e0b9b045a6?w=600&q=80", address: "4950 Centre Pointe Drive, Suite 136, North Charleston, SC 29418" },
  { id: "columbia", city: "Columbia", state: "SC", tagline: "The capital city & Midlands region", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1655127275857-d76abbf01e45?w=600&q=80", address: "1301 Gervais Street, Suite 300, Columbia, SC 29201" },
  { id: "gaffney", city: "Gaffney", state: "SC", tagline: "Home of the Peachoid & Cherokee County", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1517355352485-3c18847c2f7d?w=600&q=80", address: "207 E. Frederick Street, Gaffney, SC 29340" },
  { id: "greenwood", city: "Greenwood", state: "SC", tagline: "Lake Greenwood & the Lakelands region", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1691514773478-114aea18476a?w=600&q=80", address: "106 Main Street, Suite B, Greenwood, SC 29646" },
  { id: "greenville", city: "Greenville", state: "SC", tagline: "Falls Park & the greater Upstate area", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1691680990188-440ac4243306?w=600&q=80", address: "115 Edinburgh Court, Suite 200, Greenville, SC 29607" },
  { id: "kingsport", city: "Kingsport", state: "TN", tagline: "Gateway to the Appalachian Mountains", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1675702670582-9fa50ca1daa6?w=600&q=80", address: "1501 E. Center Street, Kingsport, TN 37664" },
  { id: "spartanburg", city: "Spartanburg", state: "SC", tagline: "Historic Morgan Square, Corporate HQ", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1754141897824-c2f437d87c36?w=600&q=80", address: "135 North Church Street, Spartanburg, SC 29306", isHQ: true },
  { id: "summerville", city: "Summerville", state: "SC", tagline: "Flowertown in the Pines & Dorchester area", phone: "(866) 870-8133", image: "https://images.unsplash.com/photo-1713664368209-9054f7ffe5da?w=600&q=80", address: "128 W. Richardson Avenue, Summerville, SC 29483" },
];
