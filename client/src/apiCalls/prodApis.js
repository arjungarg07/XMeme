import { customFetch } from '../custom-lib';

export const getAllMemes = (params) =>
	customFetch(
		'http://localhost:8080/memes?' +
			new URLSearchParams(params).toString(),
		{}
	);

export const createMeme = (params) =>
	customFetch('http://localhost:8080/memes', {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(params),
	});

export const editMeme = (id, params) =>
	customFetch(`http://localhost:8080/memes/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'PATCH',
		body: JSON.stringify(params),
	});


export const deleteMeme = id =>
	customFetch(`http://localhost:8080/memes/${id}`, {
		mode: 'cors',
		method: 'DELETE',
	});

// export * from './dummyApis';
