const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  const appropriateStations = [];
  
  for (const station of stations) {
    const capacity = station[1];
  
    if (capacity >= 20) {
      const buildingType = station[2];

      if (buildingType === 'school' || buildingType === 'community centre') {
        appropriateStations.push(station[0]);
      }
    }
  }
  return appropriateStations;
};

console.log(chooseStations(stations));