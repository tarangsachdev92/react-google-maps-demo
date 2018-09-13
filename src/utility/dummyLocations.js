import { locationsList } from "./constants";
import { createLocationObject } from "./helper";

const directions = [
  {
    from: locationsList.Mumbai,
    to: locationsList.Pune,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Goa,
    to: locationsList.Ratnagiri,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Nagpur,
    to: locationsList.Nashik,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Indore,
    to: locationsList.Gwalior,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Madurai,
    to: locationsList.Coimbatore,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Chennai,
    to: locationsList.Tirupati,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kochi,
    to: locationsList.Thiruvalla,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Udaipur,
    to: locationsList.Jodhpur,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Jaisalmer,
    to: locationsList.Jaipur,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kota,
    to: locationsList.Bikaner,
    strokeColor: "#f68f54"
  }
];
const DummyLocations = directions.map(elem => {
  return createLocationObject(
    elem.from.latLng,
    elem.from.title,
    elem.to.latLng,
    elem.to.title,
    elem.strokeColor
  );
});

export default DummyLocations;

/* more directions
const moreDirections = [
  {
    from: locationsList.NewDelhi,
    to: locationsList.Allahabad,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Amritsar,
    to: locationsList.Chandigarh,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Ludhiana,
    to: locationsList.Jalandhar,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kanpur,
    to: locationsList.Bareilly,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Lucknow,
    to: locationsList.Agra,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Islamabad,
    to: locationsList.RawalPindi,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Lahore,
    to: locationsList.Multan,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Dhaka,
    to: locationsList.Chittagong,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kohima,
    to: locationsList.Imphal,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Guwahati,
    to: locationsList.Shillong,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Kolkata,
    to: locationsList.Hydrabad,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Jamshedpur,
    to: locationsList.Ranchi,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Cuttack,
    to: locationsList.Bhubaneswar,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Raipur,
    to: locationsList.Bilaspur,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Visakhapatnam,
    to: locationsList.Srikakulam,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Vijayawada,
    to: locationsList.Kanchipuram,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Srinagar,
    to: locationsList.Porbandar,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Dambulla,
    to: locationsList.Colombo,
    strokeColor: "#f68f54"
  },
  {
    from: locationsList.Galle,
    to: locationsList.Kandy,
    strokeColor: "#f68f54"
  }
];
*/
