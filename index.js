// import {axios} from "axios";

// const axios = require("./node_modules/axios");
const getIP = async () => {
  let Ip = document.getElementById("ip_input").value;
  console.log(Ip);
  const altAndLong = await getAltAndLong(Ip);
  const lat = altAndLong.location.lat;
  const long = altAndLong.location.lng;
  const isp = altAndLong.isp;
  const location = `${altAndLong.location.country}, ${altAndLong.location.region}`;
  const timeZone = `UTC ${altAndLong.location.timezone}`;
  console.log(lat, long, isp, location, timeZone);
  document.querySelector(".display-ip").innerHTML = Ip;
  document.querySelector(".display-location").innerHTML = location;
  document.querySelector(".display-time").innerHTML = timeZone;
  document.querySelector(".display-isp").innerHTML = isp;
};
// console.log("");

document.querySelector(".search-bar-btn").addEventListener("click", getIP);

const getAltAndLong = async (input) => {
  const key = "at_KyLi7giZvLr02pMRn37b3KBLYA6E7";
  const ip = input || "150.107.40.203";
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`
  ).catch(console.error);
  const data = await response.json();
  // console.log(data);
  return data;
};

// const setIp = () => {
//   const apiKey = "at_KyLi7giZvLr02pMRn37b3KBLYA6E7";
//   const ip = document.getElementById("ip_input").value;
//   console.log(ip);
//   baseUrl = `https://geo.ipify.org/api/v1?apiKey=at_KyLi7giZvLr02pMRn37b3KBLYA6E7&ipAddress=${ip}`;
//   fetch(baseUrl, {
//     method: "GET",
//     headers: { "Content-type": "application/json" },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));
// };

// document.querySelector(".search-bar-btn").addEventListener("click", setIp);
