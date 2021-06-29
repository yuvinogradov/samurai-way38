import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='data:image/jpeg;base64,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' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;