import React, { Component, PropTypes } from 'react'
import { Button, Form, Input, Textarea } from 'muicss/react';
import Comment from './Comment'
import 'muicss/dist/css/mui.css'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };
    static defaultProps = {
        comments: []
    };
    // componentDidMount() {
    //     console.log('---', 'mounted')
    // }
    //
    // componentWillReceiveProps(nextProps) {
    //    // console.log('---', this.props, nextProps)
    // }
    //
    //
    // componentWillUnmount() {
    //     //console.log('---', 'unmounting')
    // }

    state = {
        isOpen: false
    };

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show';
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
                {this.addComment()}
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

    addComment() {
        if (!this.state.isOpen) return null;

        return <Form onSubmit={this.handleSubmit}>
                  <Input type="text" name="user" hint="User"/>
                  <Textarea name="comment" hint="Text..."/>
                  <Button type="submit" color="primary">Add comment</Button>
               </Form>;
    }

    toggleOpen = ev => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleSubmit = (ev) => {
        alert('User: ' + ev.target.user.value +
              '\nComment: ' + ev.target.comment.value);
        ev.preventDefault();
    }
}

export default CommentList