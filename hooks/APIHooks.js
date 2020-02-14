import {apiUrl} from '../constants/urlConst';
import {AsyncStorage} from "react-native";


const fetchGET = async (endpoint = '', params = '', token = '') => {
  const fetchOptions = {
    headers: {
      'x-access-token': token,
    },
  };
  const response = await fetch(apiUrl + endpoint + '/' + params,
    fetchOptions);
  if (!response.ok) {
    throw new Error('fetchGET error: ' + response.status);
  }
  return await response.json();
};

const fetchPOST = async (endpoint = '', data = {}, token = '') => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(apiUrl + endpoint, fetchOptions);
  const json = await response.json();
  console.log(json);
  if (response.status === 400 || response.status === 401) {
    const message = Object.values(json).join();
    throw new Error(message);
  } else if (response.status > 299) {
    throw new Error('fetchPOST error: ' + response.status);
  }
  return json;
};

const fetchFormData = async (
  endpoint = '', data = new FormData(), token = '') => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'x-access-token': token,
    },
    body: data,
  };
  const response = await fetch(apiUrl + endpoint, fetchOptions);
  const json = await response.json();
  console.log(json);
  if (response.status === 400 || response.status === 401) {
    const message = Object.values(json).join();
    throw new Error(message);
  } else if (response.status > 299) {
    throw new Error('fetchPOST error: ' + response.status);
  }
  return json;
};

const getAllMedia = async () => {
  const json = await fetchGET('media/all');
  return await Promise.all(json.files.map(async (item) => {
    return await fetchGET('media', item.file_id);
  }));
};

const getUserMedia = async (token) => {
  console.log('im here', token);
  const json = await fetchGET('media/user', '', token);
  return await Promise.all(json.map(async (item) => {
    return await fetchGET('media', item.file_id);
  }));
};

const getUser = async (id) => {
  try{
    const token = await AsyncStorage.getItem('userToken');
    console.log('getuser token', token);
    //console.log('getuser id', id);
    return await fetchGET('users', id, token);
  }catch(e){
    console.log('getUser error', e.message);
  }
};

export {getUser, getAllMedia, getUserMedia, fetchGET, fetchPOST, fetchFormData};
