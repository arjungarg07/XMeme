import React from 'react';

import Meme from './Meme';

const MemesList = ({ list, selectMeme, deleteMeme }) => (
	<div className="bg-gray-100 border-b container mx-auto p-0">
		{list && list.length > 0 ? (
			list.map((details, index) => (
				<Meme
					selectIssue = {selectMeme}
					details = {details}
					key = {index}
					deleteMeme = {deleteMeme}
				/>
			))
		) : (
			<div className="border border-b-0 border-collapse border-gray-300 cursor-pointer flex font-semibold hover:bg-gray-200 items-center justify-center px-6 py-2 text-xl">No Memes to display</div>
		)}
	</div>
);

export default MemesList;
