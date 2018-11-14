import fetch from 'isomorphic-fetch';

const server = 'http://tv-server.trinity-tv.net/server/TvServerService/';

const MakeRequest = (method) => {
return fetch(server + method + '.json', {
      method: "POST",
      body: JSON.stringify({
        device: {
          type: 'DT_SmartTV',
          mac: 'A1:AB:AC:AF:11:2F'
        }
      }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => response.json())
    .then(json => {
      return json
    })
}

export function Auth() {

  // return MakeRequest('Auth').then(response => {
  //   re
  // })

  // return Fetch('http://tv-server.trinity-tv.net/server/TvServerService/Auth.json')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .then(data => {
  //     dispatch({
  //       data,
  //       type: 'ADD_TODO_SUCCESS'
  //     });
  //   })
};
