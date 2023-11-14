import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getArticleFailure, getArticleStart, getArticleSuccess } from "../slice/articles"
import { FormArticles } from './'
import { ArticleService } from '../service/articles'

const EditArticle = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const dispatch = useDispatch()
  const { slug } = useParams()

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

  const formSubmit = () => { }

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