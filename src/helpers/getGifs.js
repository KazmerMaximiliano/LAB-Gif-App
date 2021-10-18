export const getGifs = async (category) => {
  const api_url = "https://api.giphy.com/v1/gifs";
  const search_param = `search?q=${encodeURI(category)}`;
  const limit_param = "limit=12";
  const api_key = "HfTZV1qp1tVuPXrDtXGjf2hbNZOauZnD";

  const url = `${api_url}/${search_param}&${limit_param}&api_key=${api_key}`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url,
    };
  });

  return gifs;
};
