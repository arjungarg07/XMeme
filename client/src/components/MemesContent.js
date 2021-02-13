import React, { Component } from 'react';

import MemesList from './MemesList';
import Header from './header';
import MemeForm from './memeForm';
import EditModal from './editModal'


import {
	getAllMemes,
	createMeme,
	editMeme,
	deleteMeme,
} from '../apiCalls/prodApis';

import loaderSvg from '../assets/images/loader.svg';

export default class MemesContent extends Component {
	state = {
		list: [],
		loading: false,
		selected: undefined,
		showModal: false,
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

	handleEdit = async (data) => {
		this.setState({
			loading: true,
			showModal: false,
		});
		const { id } = data;
		await editMeme(id,data);
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
	}

	handleSubmit = async (data) => {
		this.setState({
			loading: true,
		});
		const { id } = await createMeme(data);
		// console.log('id =>',id);
		if (!id) {
			this.setState({
				loading: false,
			});
			return alert(' (>_<) Internal Error');
		}
		
		const list = await getAllMemes();
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert(' (>_<) Internal Error');
		}
		this.setState({
			loading: false,
			list,
		});
	};

	deleteMeme = async (id) => {
		this.setState({
			loading: true,
			showModal:false
		});
		await deleteMeme(id);
		const list = await getAllMemes();
		if (!list) {
			this.setState({
				loading: false,
			});
			return alert(' (>_<) Internal Error');
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
		const { list, loading, selected, showModal } = this.state;
		return (
			<div >
				<Header/>
				<div>
				{showModal && (
					<EditModal
						active={selected}
						closeModal={this.closeModal}
						handleEdit={this.handleEdit}
						deleteMeme={this.deleteMeme}
					/>
				)}
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