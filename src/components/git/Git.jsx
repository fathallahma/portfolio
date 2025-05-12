// Git.jsx
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import './git.css';

const Git = () => {
  return (
    <section id="git-activity">
      <h5>Code Everyday</h5>
      <h2>GitHub Contributions</h2>

      <div className="container git__container">
        <div className="git__calendar">
          <GitHubCalendar
            username="fathallahma"
            blockSize={15}
            blockMargin={6}
            color="#2f80ed"
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
};

export default Git;
