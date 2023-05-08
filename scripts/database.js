const database = {
  guests: [
    { id: 1, name: "His Majesty King William the 4th", areaId: 1 },
    { id: 2, name: "Jackie O'Connell", areaId: 2 },
    { id: 3, name: "Ryan McMillan", areaId: 3 },
    { id: 4, name: "Caroline Powers", areaId: 4 },
    { id: 5, name: "Max Granger", areaId: 5 },
    { id: 6, name: "Lena Rivera", areaId: 6 },
    { id: 7, name: "Dante Whitaker", areaId: 1 },
    { id: 8, name: "Eva Abbott", areaId: 2 },
    { id: 9, name: "Liam James", areaId: 3 },
    { id: 10, name: "Avery Spencer", areaId: 4 },
    { id: 11, name: "Noah Walker", areaId: 5 },
    { id: 12, name: "Sophia Hudson", areaId: 6 },
    { id: 13, name: "Oliver Quinn", areaId: 1 },
    { id: 14, name: "Ava Ramsey", areaId: 2 },
    { id: 15, name: "William Foster", areaId: 3 },
    { id: 16, name: "Mia Dawson", areaId: 4 },
    { id: 17, name: "Ethan Kim", areaId: 5 },
    { id: 18, name: "Charlotte Lee", areaId: 6 },
    { id: 19, name: "Jacob Chen", areaId: 1 },
    { id: 20, name: "Emily Park", areaId: 2 },
    { id: 21, name: "Daniel Patel", areaId: 3 },
    { id: 22, name: "Evelyn Singh", areaId: 4 },
    { id: 23, name: "Logan Wong", areaId: 5 },
    { id: 24, name: "Chloe Kim", areaId: 6 },
    { id: 25, name: "Michael Lee", areaId: 1 },
    { id: 26, name: "Harper Patel", areaId: 2 },
    { id: 27, name: "Benjamin Lee", areaId: 3 },
    { id: 28, name: "Grace Yang", areaId: 4 },
    { id: 29, name: "Mason Kim", areaId: 5 },
    { id: 30, name: "Lily Chen", areaId: 6 },
    { id: 31, name: "Muhammad", areaId: 1 },
    { id: 32, name: "Jesus Christ of Nazareth", areaId: 1 },
  ],
  services: [
    { id: 1, service: "Rafting" },
    { id: 2, service: "Canoeing" },
    { id: 3, service: "Fishing" },
    { id: 4, service: "Hiking" },
    { id: 5, service: "Picnicking" },
    { id: 6, service: "Rock Climbing" },
    { id: 7, service: "Lodging" },
    { id: 8, service: "Parking" },
    { id: 9, service: "Information" },
    { id: 12, service: "Zip Lining" },
  ],

  areas: [
    { id: 1, section: "Northeast", trailName: "Chamfort River" },
    { id: 2, section: "Northern", trailName: "Lost Wolf Hiking Trail" },
    { id: 3, section: "Northwest", trailName: "Lodge" },
    { id: 4, section: "Southwest", trailName: "Gander River" },
    { id: 5, section: "Southern", trailName: "Campgrounds" },
    { id: 6, section: "Southeast", trailName: "Pine Bluffs Trails" },
  ],
  areaServices: [
    { id: 1, areaId: 1, servicesId: 1 },
    { id: 2, areaId: 1, servicesId: 2 },
    { id: 3, areaId: 1, servicesId: 3 },
    { id: 4, areaId: 2, servicesId: 4 },
    { id: 5, areaId: 2, servicesId: 5 },
    { id: 6, areaId: 2, servicesId: 6 },
    { id: 7, areaId: 3, servicesId: 7 },
    { id: 8, areaId: 3, servicesId: 8 },
    { id: 9, areaId: 3, servicesId: 9 },
    { id: 10, areaId: 3, servicesId: 5 },
    { id: 11, areaId: 4, servicesId: 3 },
    { id: 12, areaId: 4, servicesId: 4 },
    { id: 13, areaId: 5, servicesId: 9 },
    { id: 14, areaId: 5, servicesId: 7 },
    { id: 15, areaId: 5, servicesId: 8 },
    { id: 16, areaId: 6, servicesId: 4 },
    { id: 17, areaId: 6, servicesId: 5 },
    { id: 18, areaId: 6, servicesId: 12 },
  ],
};

export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};
export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};
export const getAreas = () => {
  return database.areas.map((area) => ({ ...area }));
};
export const getAreaServices = () => {
  return database.areaServices.map((areaService) => ({ ...areaService }));
};
