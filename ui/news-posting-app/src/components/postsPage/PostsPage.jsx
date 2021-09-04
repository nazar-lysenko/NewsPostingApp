import React, { useEffect } from 'react'
import PostItem from '../postItem/PostItem'
import './postsPage.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllPosts } from '../../store/actions/postsActions'

const PostsPage = () => {
    const { posts } = useSelector(state => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchAllPosts({ asd: 'asd' }))
        }
    }, [dispatch])

    return (
        <div className="post-container">
            <div className="post-container_main-content">
                {posts.map(post => {
                    return (
                        <PostItem
                            key={post.id}
                            title={post.title}
                            imageUrl={post.imageUrl}
                            description={post.description}
                            author={post.author}
                        />
                    )
                })}
            </div>
            <div className="post-container_side-bar">
                <div className="post-container_side-bar_item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus praesentium molestiae culpa
                    iste consequuntur repellat omnis? Adipisci rem odio voluptas similique delectus doloremque
                    accusamus, perspiciatis natus possimus eaque praesentium!
                </div>
                <div className="post-container_side-bar_item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus praesentium molestiae culpa
                    iste consequuntur repellat omnis? Adipisci rem odio voluptas similique delectus doloremque
                    accusamus, perspiciatis natus possimus eaque praesentium!
                </div>
                <div className="post-container_side-bar_item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus praesentium molestiae culpa
                    iste consequuntur repellat omnis? Adipisci rem odio voluptas similique delectus doloremque
                    accusamus, perspiciatis natus possimus eaque praesentium!
                </div>
            </div>
        </div>
    )
}

export default PostsPage
