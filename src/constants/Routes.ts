enum Routes {
  LOGIN = "/myanimelist/login",
  SIGNIN = "/myanimelist/signin",
  HOME = "/myanimelist/",
  TOPANIME = "/myanimelist/top/anime",
  TOPMANGA = "/myanimelist/top/manga",
  ANIME = "/myanimelist/top/anime/:id",
  MANGA = "/myanimelist/top/manga/:id",
  ERROR = "/myanimelist/*"
}

export default Routes;
