import { projects } from '../../data/projects';
import { asset } from '../../utils/asset';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Projects.module.css';

// «Реализованные проекты» — три фото (92:45)
export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <SectionTitle id="projects-title">Реализованные проекты</SectionTitle>
      <ul className={styles.projects__list}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projects__item}>
            <img
              className={styles.projects__image}
              src={asset(`images/${project.image}`)}
              alt={project.alt}
              width="380"
              height="500"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
