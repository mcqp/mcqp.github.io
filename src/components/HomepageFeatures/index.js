import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        MCQP is designed to be simple and intuitive, allowing you to send messages and polls to Telegram 
        quickly and efficiently using a simple .mcq file.
      </>
    ),
  },
  {
    title: 'Powerful Features',
    description: (
      <>
        Create and send polls and messages with different types to a specific chat, 
        and automate exams creation with ease.
      </>
    ),
  },
  {
    title: 'CLI Based',
    description: (
      <>
        Built as a command-line tool, MCQP integrates seamlessly with your existing 
        workflows and automation scripts.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
