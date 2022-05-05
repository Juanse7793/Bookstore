const key = 'qbd7pMzzE4NH0sv8AO70';
const api = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${key}/books`;

export const fetchBooks = async () => {
  const response = await fetch(api);
  const data = await response.json();
  const books = [];
  Object.entries(data).forEach((book) => books.push({ ...book[1][0], item_id: book[0] }));
  return books;
};

export const createBook = async (book) => {
  await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return book;
};

export const deleteBook = async (id) => {
  const response = await fetch(`${api}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  if (response.status === 201) {
    return true;
  }
  return false;
};
