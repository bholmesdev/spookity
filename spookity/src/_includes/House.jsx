const House = ({ title, children, onClick }) => (
  <article className="flex flex-col gap-4">
    <h2 className="text-xl">{title}</h2>
    <div>
      {children}
    </div>
    <button onClick={onClick} className="bg-purple-700 px-6 py-2 rounded-md hover:bg-yellow-500 transform hover:rotate-2 transition-all">Take candy 🍬</button>
  </article>
)

export default House