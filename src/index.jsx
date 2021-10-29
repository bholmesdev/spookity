import { useEffect } from 'react'
import { useLocalStorage } from '/@root/utils/useLocalStorage'
import House from './_includes/House'
import TrickOrTreatBag from './_includes/TrickOrTreatBag'

export const frontMatter = {
  title: 'Heeeeeres Slinkity!',
  layout: 'layout',
}

export function getProps({ prismic, shortcodes }) {
  return {
    houses: prismic.house.map(({ uid, data }) => {
      return ({
        title: shortcodes.asText(data.family_name),
        subtext: data.house_photo.alt,
        url: `/stories/${uid}/`,
        image: data.house_photo.url,
      })
    })
  }
}

const HeeeeeeresSlinkity = ({ houses }) => {
  const [numCandies, setNumCandies] = useLocalStorage('numCandies', 0)
  const onGetCandy = () => setNumCandies(numCandies + 1)

  return (
    <main className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="max-w-4xl text-5xl mb-3 mx-auto">{frontMatter.title}</h1>
      <div className="max-w-4xl grid grid-cols-3 gap-8 justify-center mx-auto">
        {houses.map(({ title, subtext, url, image }) => (
          <House key={title} title={title} image={image} href={url} onClick={onGetCandy}>
            <p>{subtext}</p>
          </House>
        ))}
        <TrickOrTreatBag numCandies={numCandies} />
      </div>
    </main>
  )
}

export default HeeeeeeresSlinkity