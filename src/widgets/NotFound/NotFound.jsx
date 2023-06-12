import './styles.scss'


export const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__body container">
        <h2 className="not-found__title title">Not found</h2>
        <div className="not-found__text text"><p>Такой страницы не существует</p></div>
      </div>
    </section>
  )
}