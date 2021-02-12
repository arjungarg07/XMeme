import React, { Component } from 'react';

import MemesList from './MemesList';
import Header from './header';
import MemeForm from './memeForm';
import Meme from './Meme';


import {
	getAllMemes,
	createMeme,
	editMeme,
	deleteMeme,
} from '../apiCalls/prodApis';

import loaderSvg from '../assets/images/loader.svg';

export default class MemesContent extends Component {
	state = {
		currentPage: 1,
		list: [],
		loading: false,
		selected: undefined,
		// isNew: false,
		showModal: false,
		totalPages: 1,
	}

	async componentDidMount() {
		this.setState({
			loading: true,
		})
		let list = [];
		list = await getAllMemes();
		this.setState({
			list,
			loading: false
		})
	}

	closeModal = () => {
		this.setState({
			showModal: false,
		});
	};

	selectMeme = (meme) => {
		this.setState({
			selected: meme,
			showModal: true,
		});
	};

	render() {
		const { currentPage, list, loading, selected, showModal, totalPages} = this.state;
		return (
			<div >
				<Header/>
				<div className = 'container'>
				<MemeForm/>
				{loading ? (
					<div className="py-72 bg-gray-100">
						<img
							alt="loading....."
							className="mx-auto"
							width="48"
							src={loaderSvg}
						/>
					</div>
				) : (
					<>
						<MemesList
							list={list}
							selectMeme={this.selectMeme}
							deleteMeme={this.deleteMeme}
						/>
					</>
				)}
				</div>
			</div>
		)
	}
}