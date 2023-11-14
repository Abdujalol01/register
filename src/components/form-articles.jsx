import { useSelector } from 'react-redux'
import Input from '../ui/input'
import TextArea from '../ui/text-area'
const FormArticles = (props) => {
  const { title, setTitle, description, body, setBody, setDescription, formSubmit } = props
  const { isLoading } = useSelector(state => state.article)
  return (
    <form onSubmit={formSubmit}>
      <Input label={'Title'} state={title} setState={setTitle} />
      <TextArea label={'Description'} state={description} setState={setDescription} />
      <TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
      <button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
        {isLoading ? "Loading..." : "Create"}
      </button>
    </form>
  )
}

export default FormArticles
