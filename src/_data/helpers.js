module.exports = {
  getSiblingContent(collection, item, limit = 3, random = true) {
    let filteredItems = collection.filter((x) => x.url !== item.url);

    if (random) {
      let counter = filteredItems.length;

      while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = filteredItems[counter];

        filteredItems[counter] = filteredItems[index];
        filteredItems[index] = temp;
      }
    }

    if (limit > 0) {
      filteredItems = filteredItems.slice(0, limit);
    }

    return filteredItems;
  },
};
