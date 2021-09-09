import React from 'react'
import './postItem.scss'

const PostItem = props => {
    const { title, imageUrl, description, author } = props

    return (
        <div className="post-item">
            <div className="post-item_title">
                <h2>{title}</h2>
            </div>
            <div className="post-item_image">
                <img src={imageUrl} alt="" />
            </div>
            <div className="post-item_details">
                <div className="post-item_details_description" dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className="post-item_details_author">{author}</div>
            </div>
        </div>
    )
}

export default PostItem
