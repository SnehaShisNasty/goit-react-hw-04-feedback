import css from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section className={css.feedback}>
      <h1 className={css.title}> {title}</h1>
      {children}
    </section>
  );
};
