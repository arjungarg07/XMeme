import React, { Component } from 'react';

import MemesList from './MemesList';
import Header from './header';
import MemeForm from './memeForm';

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
	}

	render() {
		const { currentPage, list, loading, selected, showModal, totalPages} = this.state;
		return (
			<div className = 'container'>
				<Header/>
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
		)
	}
}