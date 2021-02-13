import React, { Component } from "react";

import MemesList from "./MemesList";
import Header from "./header";
import Footer from "./footer";
import MemeForm from "./memeForm";
import EditModal from "./editModal";

import {
  getAllMemes,
  createMeme,
  editMeme,
  deleteMeme,
} from "../apiCalls/prodApis";

import loaderSvg from "../assets/images/loader.svg";
import scroll from "../assets/images/scroll.svg";

export default class MemesContent extends Component {
  state = {
    list: [],
    loading: false,
    selected: undefined,
    showModal: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let list = [];
    list = await getAllMemes();
    this.setState({
      list,
      loading: false,
    });
  }

  handleEdit = async (data) => {
    this.setState({
      loading: true,
      showModal: false,
    });
    const { id } = data;
    await editMeme(id, data);
    const list = await getAllMemes();
    if (!list) {
      this.setState({
        loading: false,
      });
      return alert("Internal Error");
    }
    this.setState({
      loading: false,
      list,
    });
  };

  handleSubmit = async (data) => {
    this.setState({
      loading: true,
    });
    const { id } = await createMeme(data);
    if (!id) {
      this.setState({
        loading: false,
      });
      return alert(" (>_<) Internal Error");
    }

    const list = await getAllMemes();
    if (!list) {
      this.setState({
        loading: false,
      });
      return alert(" (>_<) Internal Error");
    }
    this.setState({
      loading: false,
      list,
    });
  };

  deleteMeme = async (id) => {
    this.setState({
      loading: true,
      showModal: false,
    });
    await deleteMeme(id);
    const list = await getAllMemes();
    if (!list) {
      this.setState({
        loading: false,
      });
      return alert(" (>_<) Internal Error");
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

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { list, loading, selected, showModal } = this.state;
    return (
      <div>
        <Header />
        <div>
          {showModal && (
            <EditModal
              active={selected}
              closeModal={this.closeModal}
              handleEdit={this.handleEdit}
              deleteMeme={this.deleteMeme}
            />
          )}
          {/* <div className = "relative h-32 w-32"> */}
          <div className="bottom-0 fixed mb-20 mx-4 right-0 z-10">
            <svg className="" onClick = {this.scrollToTop} width="32" height="32" viewBox="0 0 100 100">
              <path
                fill="black"
                d="m50 0c-13.262 0-25.98 5.2695-35.355 14.645s-14.645 22.094-14.645 35.355 5.2695 25.98 14.645 35.355 22.094 14.645 35.355 14.645 25.98-5.2695 35.355-14.645 14.645-22.094 14.645-35.355-5.2695-25.98-14.645-35.355-22.094-14.645-35.355-14.645zm20.832 62.5-20.832-22.457-20.625 22.457c-1.207 0.74219-2.7656 0.57812-3.7891-0.39844-1.0273-0.98047-1.2695-2.5273-0.58594-3.7695l22.918-25c0.60156-0.61328 1.4297-0.96094 2.2891-0.96094 0.86328 0 1.6914 0.34766 2.293 0.96094l22.918 25c0.88672 1.2891 0.6875 3.0352-0.47266 4.0898-1.1562 1.0508-2.9141 1.0859-4.1133 0.078125z"
              ></path>
            </svg>
          </div>
          {/* </div> */}
          <MemeForm handleSubmit={this.handleSubmit} />
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
        <Footer />
      </div>
    );
  }
}
