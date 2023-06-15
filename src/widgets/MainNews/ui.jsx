import PostCard from '@shared/ui/PostCard'
import Subscribe from '@features/Subscribe'
import './MainNews.scss'


export const MainNews = () => {
  return (
    <section className="news">
      <div className="news__body container">
        <PostCard className="news__item"/>
        <Subscribe className="news__item"/>
      </div>
    </section>
  )
}

export default MainNews