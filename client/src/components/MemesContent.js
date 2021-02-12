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
		console.log(list);
		this.setState({
			list,
			loading: false
		})
	}

	handleSubmit = async (data) => {
		this.setState({
			loading: true,
			// isNew: false,
			showModal: false,
		});
		// const { success, message } = id
		// 	? await editIssue(id, data)
		// 	: await createIssue(data);
		console.log('memecontent handle',data);
		const { id } = await createMeme(data);
		console.log('id =>',id);
		if (!id) {
			this.setState({
				loading: false,
			});
			return alert('Internal Error');
		}
		
		const list = await getAllMemes();
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert('Internal Error');
		}
		this.setState({
			loading: false,
			list,
		});
	};

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
				<MemeForm 
					handleSubmit={this.handleSubmit}
				/>
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