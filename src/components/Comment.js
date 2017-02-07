import React, {Component, PropTypes} from 'react'

export default class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
      const {comment: {text, user}} = this.props;

      return (
        <div>
            {text}
            user && <b> by {user}</b>
        </div>
      )
    }

}


