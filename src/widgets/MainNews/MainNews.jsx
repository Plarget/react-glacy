import { PostCard } from '../../features/NewsCard/PostCard/PostCard'
import Subscribe from '@features/Subscribe'
import './styles.scss'


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