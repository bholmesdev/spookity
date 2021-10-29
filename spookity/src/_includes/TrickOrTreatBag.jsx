import { useEffect, useRef } from 'react'
import pumpkinSvgUrl from '/@root/assets/pumpkin.svg'
import { useLocalStorage } from '/@root/utils/useLocalStorage'

const TrickOrTreatBag = ({ numCandies }) => {
  const [storedNumCandies] = useLocalStorage('numCandies')
  const containerRef = useRef(null)
  const animDuration = 100

  useEffect(() => {
    containerRef?.current?.classList.add('scale-110')
    setTimeout(() => {
      containerRef?.current?.classList.remove('scale-110')
    }, animDuration);
  }, [containerRef, numCandies])

  return (
    <div className="fixed flex -bottom-6 -right-6 h-60 w-60 transform -rotate-12">
      <p className="w-10 flex-shrink-0 text-6xl yikes">{numCandies || storedNumCandies}</p>
      <img ref={containerRef} className={`w-full h-full transform transition-transform duration-${animDuration} ease-in-out`} src={pumpkinSvgUrl} alt="Spooky pumpkin trick-or-treat bag" />
    </div>
  )
}

export default TrickOrTreatBag