import React from 'react'
import styles from './Error.module.css'

interface ErrorProps {
  errorMessage: string;
  buttonTitle: string;
  onClick: () => void;
}

const Error: React.FC<ErrorProps> = ({errorMessage, buttonTitle, onClick }) => {
  return (
    <div className={styles.container}>
      <h1>{ errorMessage }</h1>
      <button className={styles.retryButton} onClick={() => onClick()}> { buttonTitle } </button>
    </div>
  )
}

export default Error