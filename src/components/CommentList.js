import React, { Component, PropTypes} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    static propTypes = {
      comments: PropTypes.array.isRequired
    };

    static defaultProps = {
        comments: []
    };

    state = {
        isOpen: false
    };

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show';
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <h3>No comments yet</h3>;

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>);
        return <ul>{commentItems}</ul>
    }

    toggleOpen = ev => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}