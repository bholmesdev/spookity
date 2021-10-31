import style from './House.module.scss'

const House = ({ title, image, href, children, onClick }) => (
  <article className="flex flex-col gap-4">
    <a className={style['house-link']} href={href}>
      <img src={image} alt={title} />
    </a>
    <h2 className="text-2xl">{title}</h2>
    <div>
      {children}
    </div>
    <button onClick={onClick} className="spooky-hover mt-auto">Take candy 🍬</button>
  </article>
)

export default House