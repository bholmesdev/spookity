import { useEffect } from "react"
import styles from './Candy.module.scss'

const Candy = ({ onDestroy, startingX, startingY }) => {
  const animDuration = 700
  useEffect(() => {
    setTimeout(() => {
      onDestroy()
    }, animDuration);
  }, [])
  return (
    <div className={styles.candy} style={{ '--startingX': Math.floor(startingX), '--startingY': Math.floor(startingY), '--animDuration': animDuration }}>🍬</div>
  )
}

export default Candy