import styles from './NoNews.module.css'

interface noNewsProps {
  content: {
    title: string;
    subtitle: string;
  }
}

const NoNews: React.FC<noNewsProps> = ({content}) => {
  const { title, subtitle } = content
  return (
    <div className={styles.container}>
      <h2> { title } </h2>
      <h3> { subtitle } </h3>
    </div>
  );
};

export default NoNews;