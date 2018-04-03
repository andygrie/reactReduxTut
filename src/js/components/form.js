import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import store from '../store/index';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor(){
        super();
        this.state = {
            article: {
                id: undefined,
                title: ''
            },
            articleToUpdate: null
        };

        store.subscribe(() => {
            this.setState({
                article: store.getState().articleToUpdate
            });
            console.log(store.getState().articleToUpdate);

        });
    }
    handleChange(e, article){
        this.setState({
            article: {
                id : article.id,
                title: e.target.value
            }
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const title = this.state.article.title;
        let id = this.state.article.id;
        if(id === undefined)
            id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ article: {
            id: undefined,
            title: ''
        } });
    }
    render(){
        const { article } = this.state;
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                {article.id === undefined &&
                    <h2>Add a new article</h2>
                }
                {article.id !== undefined &&
                    <h2>Update article '{article.id}'</h2>
                }
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={article.title}
                        onChange={(e) => this.handleChange(e, article)}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    Save
                </button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;