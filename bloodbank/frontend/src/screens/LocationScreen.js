import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
function App() { 

  const [location, setlocation] = useState([]);

  const fetchData = () => {
    return fetch("/api/location")
          .then((response) => response.json())
          .then((data) => setlocation(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  // console.log(location);
  let locations = []
  location.forEach((element, index, array) => {
    console.log(element[" Latitude"]);
    console.log(element[" Longitude"]);
    let loc = {
      "name": element[" Blood Bank Name"],
      "location": {
        lat: Number(element[" Latitude"]),
        lng: Number(element[" Longitude"])
      }
    }
    locations.push(loc)
});

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 23.391734, lng: 83.32310
  }
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyD8U6-eCfBai-CGI_4wy7XCQAFgPEzOtQg'>
       <GoogleMap
         mapContainerStyle={mapStyles}
         zoom={5.34}
         center={defaultCenter}>
         {
          locations.map(item => {
            return (
            <Marker key={item.name} position={item.location}/>
            )
          })
       }
       {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
       {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
       </GoogleMap>
    </LoadScript>
 )

}

export default App;