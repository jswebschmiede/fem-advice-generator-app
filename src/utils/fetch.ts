const fetchItems = async (url: string) => {
  const delay = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

  try {
    await delay();
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchItems;
