import useInput from 'hooks/useInput'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewPostAction } from 'store/actions/postsActions'
import RichTextEditor from 'react-rte'

const PostCreationComponent = () => {
    const [title, titleInput, setTitle] = useInput({ name: 'title', label: 'Title' })
    const [imageUrl, imageUrlInput, setImageUrl] = useInput({ name: 'image', label: 'Image URL' })
    const [submit, submitInput] = useInput({ type: 'submit', name: 'submit', defaultValue: 'Submit' })
    const [description, setDescription] = useState(RichTextEditor.createEmptyValue())

    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const onFormSubmitHandler = event => {
        event.preventDefault()

        const newPost = {
            title,
            imageUrl,
            description: description.toString('html'),
            author: user.login,
        }

        setTitle('')
        setImageUrl('')
        setDescription(RichTextEditor.createEmptyValue())

        console.log(newPost)

        dispatch(createNewPostAction(newPost))
    }

    const onRichTextEditorChangeHandler = data => {
        setDescription(data)
    }

    return (
        <div className="post-creation">
            <form onSubmit={onFormSubmitHandler} className="post-creation_form">
                <div className="post-creation_form_input">{titleInput}</div>
                <div className="post-creation_form_input">{imageUrlInput}</div>
                <div
                    className="post-creation_form_input"
                    style={{ background: 'white', color: 'black', margin: '20px 0' }}>
                    <RichTextEditor value={description} onChange={onRichTextEditorChangeHandler} />
                </div>
                <div className="post-creation_form_submit">{submitInput}</div>
            </form>
        </div>
    )
}

export default PostCreationComponent
