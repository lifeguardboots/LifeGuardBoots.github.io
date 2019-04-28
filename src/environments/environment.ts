
export const environment = {
  production: false,
  apiURL: 'http://localhost:8080/s4_requirement-api/api'
};


export const environment_mapbox = {
  production: false,

  mapbox: {
    accessToken: 'pk.eyJ1Ijoic29maWFhbHZhcmV6bG9wZXoiLCJhIjoiY2ptZjU0N3JrMGR5ZzNxcnNtanlsbGxwZiJ9.TiqdpJq0bSw-PkJgwY3DVA'
  }
}

export const environment_firebase = {
  production: false,
  firebaseConfig:{
  apiKey: "AIzaSyCHmLcK5O9zrbEWstbZUlQ6027H-tjOyRc",
  authDomain: "lifeguardboots.firebaseapp.com",
  databaseURL: "https://lifeguardboots.firebaseio.com",
  projectId: "lifeguardboots",
  storageBucket: "lifeguardboots.appspot.com",
  messagingSenderId: "893991931201"
  }
};
