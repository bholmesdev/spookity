import { useEffect } from 'react'
import { useLocalStorage } from '/@root/utils/useLocalStorage'
import House from './_includes/House'
import TrickOrTreatBag from './_includes/TrickOrTreatBag'

export const frontMatter = {
  title: 'Heeeeeres Slinkity!',
  layout: 'layout',
}

const HeeeeeeresSlinkity = () => {
  const [numCandies, setNumCandies] = useLocalStorage('numCandies', 0)
  const onGetCandy = () => setNumCandies(numCandies + 1)

  useEffect(() => {
    console.log({numCandies})
  }, [numCandies])

  return (
    <main className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="max-w-4xl text-5xl mb-3 mx-auto">{frontMatter.title}</h1>
      <dl className="max-w-4xl grid grid-cols-3 gap-8 justify-center mx-auto">
        <House title="House 1" onClick={onGetCandy}>
          <p>A very spooky abode indeed</p>
        </House>
        <House title="House 2" onClick={onGetCandy}>
          <p>A very spooky abode indeed</p>
        </House>
        <House title="House 3" onClick={onGetCandy}>
          <p>A very spooky abode indeed</p>
        </House>
        <TrickOrTreatBag numCandies={numCandies} />
      </dl>
    </main>
  )
}

export default HeeeeeeresSlinkity