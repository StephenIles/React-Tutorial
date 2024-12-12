import React from 'react';
import '../../styles/Lesson.css';

function ComponentsAndProps() {
    return (
        <div className="lesson">
            <h1>Components & Props</h1>

            <section className="lesson-section">
                <h2>What are Components?</h2>
                <p>Components are reusable pieces of UI that let you split the interface into independent, reusable pieces. Think of them as custom HTML elements.</p>
            </section>

            <section className="lession-section code-example">
                <h2>Function Component Example</h2>
                <pre>
                    <code>
{`import React from 'react;

function Greetings(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Using the component:
function App() {
    return (
        <div>
            <Greetings name="Alice" />
            <Greetings name="Bob" />
        </div>
    );
}`}
                    </code>
                </pre>
            </section>

            <section className="lesson-section">
                <h2>Understanding Props</h2>
                <p>Props (short for properties) are how we pass data to components. They work similary to HTML attributes but can pass any Javascript value.</p>
                <ul>
                    <li>Props are read-only</li>
                    <li>Props can be any Javascript value</li>
                    <li>Props flow down from parent to child</li>
                </ul>
            </section>
        </div>
    );
}

export default ComponentsAndProps;