const apiRoot = "https://edtech.ilbc.edu.mm/api";
// const apiRoot = "https://jsonplaceholder.typicode.com/"

const get = (path, params, token) => {
  return doRequest(path, params, "GET", token);
};

const post = (path, params, token) => {
  return doRequest(path, params, "POST", token);
};

const put = (path, params, token) => {
  return doRequest(path, params, "PUT", token);
};

const del = (path, params, token) => {
  return doRequest(path, params, "DELETE", token);
};

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
};

const doRequest = async (path, params, method, activeToken) => {
  console.log("tokenforMeeting=>",activeToken)
  const options = { method, headers: {} };
  if (params) {
    if (method === "GET") {
      path += "?" + objectToQueryString(params);
    } else {
      options.body = params;
    }
  }

  if (activeToken) {
    options.headers = new Headers({
      'Accept': 'application/json',
      'Authorization': `Bearer ${activeToken}`,
    })
  }

  return fetch(apiRoot + path, options).then((response) => {
    if (response.status === 204) {
      return undefined;
    }
    if (response.status === 403) {
      activeToken = null;
    }
    return response.json().then((result) => {
      //console.log(result)
      return result;
    });
  }).catch(error => error);
};
export default {
  get,
  post,
  put,
  del,
};
