import React, { useEffect } from 'react'
import PostItem from '../postItem/PostItem'
import './postsPage.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllPostsAction } from '../../store/actions/postsActions'
import { Link } from 'react-router-dom'

const PostsPage = () => {
    const { posts } = useSelector(state => state.posts)
    const { isAuthenticated, user } = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchAllPostsAction())
        }
    }, [dispatch, posts])

    return (
        <div className="post-container">
            <div className="post-container_main-content">
                {(isAuthenticated && user.role === 'author') || user.role === 'admin' ? (
                    <div className="post-container_main-content_action-items">
                        <div className="post-container_main-content_action-items_new-post">
                            <button>
                                <Link to="/posts/create">
                                    <span>Create new post</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                ) : null}
                <div className="post-container_main-content_posts__wrapper">
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
