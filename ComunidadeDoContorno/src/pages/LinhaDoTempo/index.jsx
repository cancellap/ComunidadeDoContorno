import Header from "../../components/Header";
import Timeline from "../../components/Timeline/TimeLine";
import styles from "./LinhaDoTempo.module.css"
import { timelineItems } from '../../assets/DataTimeLineDetails';

const LinhaDoTempo = () => {

  const itemsForTimeline = timelineItems.map(item => ({
    id: item.id,
    year: item.year,
    title: item.title,
    description: item.description
  }));

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Nossa Linha do Tempo</h1>
      <Timeline items={itemsForTimeline} />
    </div>
  );
};

export default LinhaDoTempo;
