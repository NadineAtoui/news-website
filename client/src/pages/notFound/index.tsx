import React from 'react';
import styles from './NotFound.module.css';

interface NotFoundProps {
  content: {
    title: string;
    description: string;
    buttonTitle: string;
    url: string;
  }
}

const NotFound: React.FC<NotFoundProps> = ({ content }) => {
  const { title, description, buttonTitle, url} = content

  return (
    <div className={styles.container}>
      <h1> { title } </h1>
      <p> { description } </p>
      <a href={url}> { buttonTitle } </a>
    </div>
  );
};

export default NotFound;
