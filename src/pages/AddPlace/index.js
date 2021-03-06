import React from "react";
// import {articleService} from '../../services';
import AddPlaceForm from "./Forms/AddPlaceForm";

import "../../pages/AddPlace/addPlacePage.scss";

class AddPlace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: null,
      error: null,
    };
  }

  async componentDidMount() {
    // const id = this.props.match.params.id;
    // try {
    //     const response = await articleService.getById(id);
    //     this.setState({article: response.data.article});
    // } catch (e) {
    //     this.setState({error: "erreur server"});
    // }
  }

  render() {
    // const article = this.state.article;
    return (
      <>
        {/* <h1>Add a place</h1> */}
        <h2>We are going to help you publish a place.</h2>
        <AddPlaceForm />
        {/* {this.state.error && <p>{this.state.error}</p>}
                {article &&
                    <article>
                        <h3>{article.title}</h3>
                        <img src={article.img} alt={article.title}/>
                        <p>{article.content}</p>
                    </article>
                } */}
      </>
    );
  }
}

export default AddPlace;
