import { Component } from "react";

import {
    SearchbarContainer,
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput
} from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        imageName: '',
    }

    handleNameChange = evt => {
        this.setState({ imageName: evt.currentTarget.value.toLowerCase() })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const { onSubmit } = this.props;
        const { imageName } = this.state;

        if (imageName.trim() === '') {
            alert('Enter the image name pls')
            return;
        }

        onSubmit(imageName);

        this.setState({ imageName: '' })
    }

    render() {
        const { imageName } = this.state;

        return (
            <SearchbarContainer>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        value={imageName}
                        placeholder="Search images and photos"
                        onChange={this.handleNameChange}
                    />
                </SearchForm>
            </SearchbarContainer>
        )
    }
}