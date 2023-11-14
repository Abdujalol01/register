import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getArticleFailure, getArticleStart, getArticleSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/articles"
import { FormArticles } from './'
import { ArticleService } from '../service/articles'

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const { slug } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        setTitle(response.article.title)
        setDescription(response.article.description)
        setBody(response.article.body)
        dispatch(getArticleSuccess(response.article))
      } catch (error) {
        dispatch(getArticleFailure())
      }
    }

    getArticleDetail()
  }, [])
  const formSubmit = async (e) => {
    e.preventDefault()
    const article = { body, title, description }
    dispatch(postArticleStart())
    try {
      await ArticleService.editArticle(slug, article)
      dispatch(postArticleSuccess())
      navigate("/")
    } catch (error) {
      dispatch(postArticleFailure())
    }
  }

  const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }

  return (
    <div className='text-center'>
      <h1 className='fs-2'>Edit article</h1>
      <div className='w-75 mx-auto'>
        <FormArticles {...formProps} />
      </div>
    </div>
  )
}

export default EditArticle