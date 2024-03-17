import { ANIME, MANGA, META } from "@consumet/extensions";
import { Sites } from "./types";

const gogoanime = new ANIME.Gogoanime();
const anilist = new META.Anilist();
export const mangadex = new MANGA.MangaDex();
//search anime
export async function SearchAnime(anime: string) {
  let datav3;
  let y = await anilist.search(anime);
  datav3 = y;
  return datav3;
}
export declare enum Genres {
  ACTION = "Action",
  ADVENTURE = "Adventure",
  CARS = "Cars",
  COMEDY = "Comedy",
  DRAMA = "Drama",
  FANTASY = "Fantasy",
  HORROR = "Horror",
  MAHOU_SHOUJO = "Mahou Shoujo",
  MECHA = "Mecha",
  MUSIC = "Music",
  MYSTERY = "Mystery",
  PSYCHOLOGICAL = "Psychological",
  ROMANCE = "Romance",
  SCI_FI = "Sci-Fi",
  SLICE_OF_LIFE = "Slice of Life",
  SPORTS = "Sports",
  SUPERNATURAL = "Supernatural",
  THRILLER = "Thriller",
}

export async function GetAnimeGenres(genres: Genres[]) {
  let y = await anilist.fetchAnimeGenres(genres).then((data) => {
    console.log(data);
  });
}

export async function GetRecentEpisodes() {
  let y = await anilist.fetchRecentEpisodes("gogoanime");
  return y;
}
//popular anime
export async function fetchPopularAnime() {
  let y = await anilist.fetchPopularAnime();
  return y;
}

export async function TrendingAnime() {
  let y = await anilist.fetchTrendingAnime();
  return y;
}

export async function GetAnimeInfo(anime_id: string) {
  let y = await anilist.fetchAnimeInfo(anime_id);

  return y;
}

interface animeEp {
  anime: string;
  episode_number: number;
}

// example - one-piece-episode-1022
export async function GetAnimeSourceEpisodeSources(anime_episode: animeEp) {
  let y = await gogoanime.fetchEpisodeSources(
    `${anime_episode.anime}-episode-${anime_episode.episode_number}`
  );
  return y;
}

// example - one-piece-episode-1022
export async function GetEpisodeServers(anime_episode: animeEp) {
  let y = await gogoanime.fetchEpisodeServers(
    `${anime_episode.anime}-episode-${anime_episode.episode_number}`
  );

  return y;
}
