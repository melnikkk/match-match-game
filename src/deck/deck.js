function shuffle(arr) {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

export default function initializeDeck(difficulty) {
  let id = 0;
  const cards = Array(difficulty / 2).fill(0).map((e, i) => e = i).reduce((acc, type) => {
    acc.push({
      id: id++,
      type
    });
    acc.push({
      id: id++,
      type
    });
    return acc;
  }, []);

  return shuffle(cards);
}