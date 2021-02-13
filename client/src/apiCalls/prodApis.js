import { customFetch } from "../custom-lib";

// const HOST = '';
const HOST = 'http://localhost:8081';

export const getAllMemes = (params) =>
  customFetch(
    `${HOST}/memes?` + new URLSearchParams(params).toString()
  );

export const createMeme = (params) =>
  customFetch(`${HOST}/memes`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(params),
  });

export const editMeme = (id, params) =>
  customFetch(`${HOST}/memes/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "PATCH",
    body: JSON.stringify(params),
  });

export const deleteMeme = (id) =>
  customFetch(`${HOST}/memes/${id}`, {
    mode: "cors",
    method: "DELETE",
  });

