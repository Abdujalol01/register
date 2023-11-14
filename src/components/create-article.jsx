import { useState } from 'react'
import FormArticles from './form-articles'
import { ArticleService } from '../service/articles'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/articles'
import { useNavigate } from 'react-router'
const CreateArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formSubmit = async (e) => {
    e.preventDefault()
    const article = { body, title, description }
    dispatch(postArticleStart())
    try {
      await ArticleService.postArticle(article)
      dispatch(postArticleSuccess())
      navigate("/")
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }
  const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }
  return (
    <div className='text-center'>
      <h1 className='fs-2'>Create article</h1>
      <div className='w-75 mx-auto'>
        <FormArticles {...formProps} />
      </div>
    </div>
  )
}

export default CreateArticle