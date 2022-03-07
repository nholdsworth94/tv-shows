const headers = {
    'Authentication': `Bearer ${window.sessionStorage.getItem('token')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export default headers;