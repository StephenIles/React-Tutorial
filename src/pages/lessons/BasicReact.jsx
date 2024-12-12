import React from 'react';
import '../../styles/Lesson.css';

function BasicReact() {
    return (
        <div className="lesson">
            <h1>Getting Started with React</h1>
            
            <section className="lesson-section">
                <h2>What is React?</h2>
                <p>React is a Javascipt library for building user interfaces. It lets you create reusable UI components that manage their own state.</p>
            </section>

            <section className="lesson-section">
                <h2>Key Concepts</h2>
                <ul>
                    <li>Components</li>
                    <li>JSX</li>
                    <li>Props</li>
                    <li>State</li>
                </ul>
            </section>

            <section className="lesson-section code-example">
                <h2>Your First Component</h2>
                <pre>
                    <code>
{`import React from 'react';

function Welcome() {
    return <h1>Hello, World!</h1>;
}

export default Welcome;`}
                    </code>
                </pre>
            </section>

        </div>
    );
}

export default BasicReact;