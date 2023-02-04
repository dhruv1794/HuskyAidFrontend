const HTTPMethods =  {
    put: 'PUT',
    post: 'POST',
    get: 'GET',
    delete: 'DELETE'
  }
  async function fetchWrapper(url, method, body) {
    const fetchBody = method === 'PUT' || method === 'POST' ? {
      method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    }:{
      method,
      headers: {
        'content-type': 'application/json',
      }
    };
    let response;
    try {
      response = await fetch(url, fetchBody);
    } catch (err) {
      response = await Promise.reject({ error: 'network-error' });
    }
    if (!response.ok) {
      return response.json().then(err_1 => Promise.reject(err_1));
    }
    return await response.json();
  }
  
  
  export function loginApi(username) {
    return fetchWrapper('/api/session', HTTPMethods.put,{username});
  }
  
  export function isAuthenticated() {
    return fetchWrapper('/api/session', HTTPMethods.get, null);
  }
  
  export function logout() {
    return fetchWrapper('/api/session', HTTPMethods.delete, null);
  }
  
  export function getMessages() {
    return fetchWrapper('/api/messages', HTTPMethods.get, null);
  }
  
  export function addMessage(message) {
    return fetchWrapper('/api/messages', HTTPMethods.post, {message});
  }

  export function getUsers() {
    return fetchWrapper('/api/users', HTTPMethods.get, null);
  }
  
  
  