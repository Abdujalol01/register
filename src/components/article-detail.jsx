import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import {getArticleFailure, getArticleStart, getArticleSuccess} from "../slice/articles"
import moment from "moment/moment"
import { ArticleService } from "../service/articles"
import { useEffect } from "react"
import {Loader} from "./"
const ArticleDetail = () => {
 const {slug} = useParams()
 const dispatch = useDispatch()
 const {getArticlesDetail, isLoading} = useSelector(state => state.article)
 useEffect(()=>{
  const getArticle = async()=>{
    dispatch(getArticleStart())
    try {
      const response = await ArticleService.getArticleDetail(slug)
      dispatch(getArticleSuccess(response.article))
    } catch (error) {
      dispatch(getArticleFailure())
    }
   }
  getArticle()
 },[slug])
 return isLoading ? (
  <Loader />
) : (
  getArticlesDetail !== null && (
    <div>
      <div className='py-3 mb-4  rounded-3'>
        <div className='container-fluid pb-5'>
          <h1 className='display-5 fw-bold'>{getArticlesDetail.title}</h1>
          <p className='col-md-8 fs-4'>{getArticlesDetail.description}</p>
          <p className='text-muted'>
            <span className='fw-bold'>Created at:</span> {moment(getArticlesDetail.createdAt).format('DD MMM, YYYY')}
          </p>
          <div className='col-md-6'>
            <div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
              <div className='col p-4 d-flex flex-column position-static'>
                <strong className='d-inline-block mb-2 text-primary text-uppercase'>{getArticlesDetail.author.username}</strong>
                <p className='card-text mb-auto'>{getArticlesDetail.author.bio}</p>
              </div>
              <div className='col-auto d-none d-lg-block'>
                <svg
                  className='bd-placeholder-img'
                  width='200'
                  height={'100%'}
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  aria-label='Placeholder: Thumbnail'
                  preserveAspectRatio='xMidYMid slice'
                  focusable='false'
                >
                  <title>Placeholder</title>
                  <rect width='100%' height='100%' fill='#55595c'></rect>
                  <text x={'45%'} y={'53%'} fill={'#fff'} className='fs-2 text-uppercase p-0 m-0'>
                    {getArticlesDetail.author.username[0]}
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div>{getArticlesDetail.body}</div>
        </div>
      </div>
    </div>
  )
)
}

export default ArticleDetail