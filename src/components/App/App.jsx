import { Component } from "react";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";

import { fetchImages } from "service/ApiService";

import { Container } from "./App.styled";

export class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    isLoading: false,
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName, images: [], page: 1 });
  }

  fetchImages = () => {
    const { imageName, page } = this.state;

    if (imageName !== undefined) {
      this.setState({ isLoading: true });

      fetchImages(imageName, page)
        .then(data =>
          this.setState(prevState =>
            ({ images: [...prevState.images, ...data.hits] })
          )
        )
        .catch(error => console.log(error.message))
        .finally(this.setState({ isLoading: false }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  render() {
    const { images } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
      </Container>
    )
  }
}