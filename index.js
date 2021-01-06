// import {axios} from "axios";

// const axios = require("./node_modules/axios");
let Ip = document.getElementById("ip_input").value;
let lat;
let long;
const getIP = async () => {
  console.log(Ip);
  const altAndLong = await getAltAndLong(Ip);
  lat = altAndLong.location.lat;
  long = altAndLong.location.lng;
  const isp = altAndLong.isp;
  const location = `${altAndLong.location.country}, ${altAndLong.location.region}`;
  const timeZone = `UTC ${altAndLong.location.timezone}`;
  console.log(lat, long, isp, location, timeZone);
  document.querySelector(".display-ip").innerHTML = altAndLong.ip;
  document.querySelector(".display-location").innerHTML = location;
  document.querySelector(".display-time").innerHTML = timeZone;
  document.querySelector(".display-isp").innerHTML = isp;
  // fdsf
  // mymap.off();
  // mymap.remove();
  var mymap = L.map("mapid").setView([lat, long], 13);
  const mapboxKey =
    "pk.eyJ1IjoidmluaXRjaHVyaTAzMTIiLCJhIjoiY2tqbGxhdzNuMDlpczJxdGZ3aGdoeGVsbiJ9.dN7tdytslNwM8xkJv6LD4w";
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmluaXRjaHVyaTAzMTIiLCJhIjoiY2tqbGxhdzNuMDlpczJxdGZ3aGdoeGVsbiJ9.dN7tdytslNwM8xkJv6LD4w",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "your.mapbox.access.token",
    }
  ).addTo(mymap);
  var marker = L.marker([lat, long]).addTo(mymap);
};

document.querySelector(".search-bar-btn").addEventListener("click", getIP);

const getAltAndLong = async (input) => {
  const key = "at_KyLi7giZvLr02pMRn37b3KBLYA6E7";
  const ip = input || "150.107.40.203";
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`
  ).catch(console.error);
  const data = await response.json();
  return data;
};
// console.log(lat, long);
// var mymap = L.map("mapid").setView([51.5, -0.09], 13);
// const mapboxKey =
//   "pk.eyJ1IjoidmluaXRjaHVyaTAzMTIiLCJhIjoiY2tqbGxhdzNuMDlpczJxdGZ3aGdoeGVsbiJ9.dN7tdytslNwM8xkJv6LD4w";
// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmluaXRjaHVyaTAzMTIiLCJhIjoiY2tqbGxhdzNuMDlpczJxdGZ3aGdoeGVsbiJ9.dN7tdytslNwM8xkJv6LD4w",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: "your.mapbox.access.token",
//   }
// ).addTo(mymap);
// var marker = L.marker([51.5, -0.09]).addTo(mymap);
