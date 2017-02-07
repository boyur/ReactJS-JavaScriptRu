import React, {Component, PropTypes} from 'react'

export default class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
      const {comment} = this.props;

      return (
        <div>
            {comment.text}
            user && <b> by {comment.user}</b>
        </div>
      )
    }

}


