import React, {Component} from 'react'

export default class CommentsList extends Component {
    state = {
        isOpen: false
    };

    render() {
        return (
            <div>
                <h5 onClick={this.handleClick}>{this.state.isOpen ? 'Hide' : 'Show'} comments</h5>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;

        const {comments} = this.props;
        //comments может быть undefined
        const commentElements = comments.map((comment) =>
        <li key={comment.id}>
            <div>
                <b>User: {comment.user}</b>
            </div>
            <div>
                {comment.text}
            </div>
        </li>);

        return (
            <section>
                {commentElements}
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
