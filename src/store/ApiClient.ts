/* eslint-disable prettier/prettier */
import fetch from 'cross-fetch';

let token: any = localStorage.getItem("dashboard");
let valueToken = JSON.parse(token);

export const requestGET = async (url: any) => {
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${valueToken.token}`},
  };
  return fetch(url, requestOptions)
  .then((response: Response)=>{
    return response.json().then((jsonData)=> {return jsonData})
  })
};

export const requestDELETE = async (url:any) => {
  const requestOptions = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${valueToken.token}`},
  };
  fetch(url, requestOptions) 
  .then((response: Response)=>{return response.json().then((jsonData)=> {return jsonData})})
  .catch(err => console.log(err))
};

export const requestPOST = async (url:any, newBooking:{}) => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${valueToken.token}`},
    body: JSON.stringify(newBooking),
  };
  fetch(url, requestOptions) 
  .then((response: Response)=> {return response.json()})
  .catch(err => console.log(err))
};

export const requestPUT = (url: any, currentBooking: {}) => {
  const requestOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${valueToken.token}`,"charset":"UTF-8"},
    body: JSON.stringify(currentBooking),
  };
  fetch(url, requestOptions) 
  .then((response: Response)=>{return response.json()})
  .catch(err => console.log(err))
};