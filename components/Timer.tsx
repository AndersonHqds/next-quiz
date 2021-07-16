import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Timer.module.css';

interface TimerProps {
  key: any;
  duration: number;
  onTimeEnd: () => void;
}

const Timer: React.FC<TimerProps> = (props) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duration}
        onComplete={props.onTimeEnd}
        colors={[
          ['#BCE696', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
      >
        {
          ({ remainingTime }) => remainingTime
        }
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer;