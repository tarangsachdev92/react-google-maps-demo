const convertLatLngToObj = (lat, lng) => {
  return {
    lat,
    lng
  };
};

const createLocationObject = (
  from,
  fromTitle,
  to,
  toTitle,
  strokeColor = "#f68f54"
) => {
  return {
    from: { ...createLatLngObject(from), fromTitle },
    to: { ...createLatLngObject(to), toTitle },
    strokeColor: strokeColor
  };
};

const createLatLngObject = latLng => {
  const latLngArray = latLng.split(",");
  return {
    lat: latLngArray[0],
    lng: latLngArray[1]
  };
};
export { convertLatLngToObj, createLocationObject, createLatLngObject };
