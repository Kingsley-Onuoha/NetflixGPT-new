export const netflixIcon = 
    'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const photoURL = 
    "https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"

export const backgroundImg = 
    'https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/ea4e3067-609b-4f51-a5ae-88663802fbfc/NG-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer  ' + process.env.REACT_APP_TMDB_KEY +''
    }
  };

export const IMG_CDN = "https://image.tmdb.org/t/p/w500"

export const SUPPOERTED_LANGUAGES =[
  {identifier: "en", name: "English"},
  {identifier: "french", name: "French"},
  {identifier: "spanish", name: "Spanish"}
]
