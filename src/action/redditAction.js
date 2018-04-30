export function getAccessToken(code) {
  let form = new URLSearchParams();
  form.set('code', code);
  form.set('grant_type', "authorization_code");
  form.set('redirect_uri', 'http://127.0.0.1:3000/authorize_callback');

  return dispatch =>
    fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Basic Q0s0ODAyX0NWNWQza3c6YWRQMmFqQlZBR2pWU0x1RDVfQTJydkp0Mjdz',
        'Content-Type': "application/x-www-form-urlencoded"
      }),
      body: form
    })
        .then(response => response.json())
        .then(json => {
      dispatch({type: 'ADD_ATOKEN', value: json.access_token});
      return Promise.resolve();
    })
}

export const loadSubList = () => {
  return (dispatch, getState) => {
    let url = 'https://oauth.reddit.com/subreddits/mine/subscriber';
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Bearer '+ getState().accessToken,
      })
    })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          let subList = json.data.children.map(subItem => subItem.data.url);
          dispatch({type: 'ADD_SUBRLIST', data: subList});
    })
  }
};

class Post {
  constructor(dataObj) {
    this.title = dataObj.title;
    this.url = dataObj.url;
    this.created = dataObj.created;
    this.authorName = dataObj.author;
    this.upvote = dataObj.score;
    this.thumbnail = dataObj.thumbnail;
  }
}

export const getPost = (subTitle) => {
  return (dispatch) => {
    let url = 'https://www.reddit.com' + subTitle + 'hot.json'
    fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      //console.log(json);
      let postArray = json.data.children.map(post => new Post(post.data));
      dispatch({type: 'UPDATE_POST', data: postArray});
    })
  }
};

// CK4802_CV5d3kw:adP2ajBVAGjVSLuD5_A2rvJt27

// "45656352500-1bJoAlsEptaLL23_pqz5bmeySAM"