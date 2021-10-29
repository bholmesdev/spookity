import { useEffect, useRef, useState } from 'react'
import Candy from './Candy'
import pumpkinSvgUrl from '/@root/assets/pumpkin.svg'
import { useLocalStorage } from '/@root/utils/useLocalStorage'

const TrickOrTreatBag = ({ numCandies, position = 'fixed' }) => {
  const [storedNumCandies] = useLocalStorage('numCandies')
  const [candyCoords, setCandyCoords] = useState(new Set())
  const containerRef = useRef(null)
  const bagAnimDuration = 100

  const onDestroyCandy = (coords) => {
    setCandyCoords(prevCandyCoords => {
      const newCoords = new Set([...prevCandyCoords])
      newCoords.delete(coords)
      return newCoords
    })
  }

  useEffect(() => {
    containerRef?.current?.classList.add('scale-110')
    const startingX = Math.random() * 160
    const startingY = Math.random() * 50
    const id = `${startingX} - ${startingY}`
    setCandyCoords(prevCandyCoords => new Set([...prevCandyCoords, id]))

    setTimeout(() => {
      containerRef?.current?.classList.remove('scale-110')
    }, bagAnimDuration);
  }, [containerRef, numCandies])

  return (
    <div className={`${position} flex -bottom-6 -right-6 h-60 w-60 transform -rotate-12`}>
      {[...candyCoords].map((id) => (
        <Candy
          key={id}
          startingX={id.split(' - ')[0]}
          startingY={id.split(' - ')[1]}
          onDestroy={() => onDestroyCandy(id)} />
      ))}
      <p className="w-10 flex-shrink-0 text-6xl yikes">{numCandies || storedNumCandies}</p>
      <img ref={containerRef} className={`w-full h-full transform transition-transform duration-${bagAnimDuration} ease-in-out`} src={pumpkinSvgUrl} alt="Spooky pumpkin trick-or-treat bag" />
    </div>
  )
}

export default TrickOrTreatBag