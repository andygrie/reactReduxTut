import React from 'react';
import { connect } from 'react-redux';
import store from '../store/index';
import { removeArticle, setArticleToUpdate } from "../actions/index";

const mapStateToProps = state => {
    return {articles: state.articles };
};
const mapDispatchToProps = dispatch => {
  return {
      removeArticle: id => dispatch(removeArticle(id)),
      setArticleToUpdate: article => dispatch(setArticleToUpdate(article))
  };
};


class ConnectedList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    store.subscribe(() => {
      this.setState({
        articles: store.getState().articles
      });
    });
  }


  handleClickDelete(id, e){
    this.props.removeArticle(id);
  }
  handleClickUpdate(article, e){
    this.props.setArticleToUpdate(article);
  }

  render(){
    return(
      <ul className="list-group list-group-flush">
        {this.state.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
            <button className="btn btn-sm transparent" onClick={(e) => this.handleClickDelete(el.id, e)}>
              <span className="glyphicon glyphicon-minus"></span>
            </button>
            <button className="btn btn-sm transparent" onClick={(e) => this.handleClickUpdate(el, e)}>
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;