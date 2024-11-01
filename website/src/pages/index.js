import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <div class="card-demo-container">
          <div class="card-demo shadow--md">
            <div class="card">
              <div class="card__header">
              </div>
              <div class="card__image">
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: 400 }} src={require('@site/static/img/profile-pic2.png').default}
                  alt="Picture of Syed"
                  title="Syed Ahmed"
                />
              </div>
              <div class="card__body">
                <h1 class="text--center hero__title">Hi, I'm Syed!</h1>
                <p class="padding-horiz--md">
                  I was born in Dhaka, Bangladesh. A very sweet place, has very beautiful
                  rains and 2-3 hour long traffic jams. I was there for the majority of my
                  childhood and teenage years. In 2011, I moved to Kolkata, India to complete
                  my Grade 11 and 12. Life there was quite dynamic and the place turned out
                  to be very enriching for my personal development. Kolkata gave me life long
                  friends and bitter and sweet memories. <br></br><br></br> After Kolkata,
                  I moved to Rochester, NY and completed my Bachelors in Computer Engineering
                  from RIT. I spent a little more than a year at
                  NVIDIA as a Software Engineer and contributed to PyTorch. I
                  finished my Master's
                  in Electrical Engineering from UPenn, and am back at NVIDIA to continue
                  from where I left off. <br></br><br></br>At work I
                  love to investigate high performance computing, machine learning,
                  digital logic design, compilers and optimization methods. When not at work, I
                  love to do scuba diving, whitewater rafting, singing, salsa dancing,
                  playing guitar-piano-percussions, and travelling. <br></br><br></br>
                  
                  You can read my engineering notes and blog above. The notes are really meant for
                  my reference. You might find more tutorial like articles in the blog section.
                  Feel free to use the "Edit this page" button to <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-code">open a github issue</a> and comment. 
                  
                  <br></br><br></br>You can learn more about my career in the following links.
                </p>
              </div>
              <div class="card__footer">
                <div class="button-group button-group--block">
                  <a href={require('@site/static/syed_ahmed_resume.pdf').default} class="button button--secondary" >Resume</a>
                  <a href="https://www.linkedin.com/in/mrsyed/" class="button button--secondary">LinkedIn</a>
                  <a href="https://github.com/syed-ahmed" class="button button--secondary">GitHub</a>
                  <a href="https://twitter.com/tousifsays" class="button button--secondary">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
