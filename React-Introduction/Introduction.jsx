                                                                            What is React ? 

React is a JavaScript library for building user interfaces (UIs) on the web. React is a declarative, component based library that allows developers to build reusable UI components and It follows the Virtual DOM (Document Object Model) approach, which optimizes rendering performance by minimizing DOM updates. React is fast and works well with other tools and libraries. 
->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                                            History of React 

React was invented by Facebook developers who found the traditional DOM slow. By implementing a virtual DOM, React addressed this issue and gained popularity rapidly. 
->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                                          How does React work? 
  
React operates by creating an in-memory virtual DOM rather than directly manipulating the browser’s DOM. It performs necessary manipulations within this virtual representation before applying changes to the actual browser DOM. React is efficient, altering only what requires modification. 
->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                                            Features of React 

React is one of the most demanding JavaScript librarys because it is equipped with a ton of features which makes it faster and production-ready. Below are the few features of React. 

1. Component-Based Architecture 

React provides the feature to break down the UI into smaller, self-contained components. Each component can have its own state and props. 

2. JSX (JavaScript Syntax Extension) 

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It makes React components more readable and expressive. 

const name="GeekforGeeks"; 
const ele = <h1>Welcome to {name}</h1>; 

3. Virtual DOM 

React maintains a lightweight representation of the actual DOM in memory. When changes occur, React efficiently updates only the necessary parts of the DOM. 

4. One-way Data Binding 

One-way data binding, the name itself says that it is a one-direction flow. The data in react flows only in one direction i.e. the data is transferred from top to bottom i.e. from parent components to child components. The properties(props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs. 

5. Performance 

As we discussed earlier, react uses virtual DOM and updates only the modified parts. So , this makes the DOM to run faster. DOM executes in memory so we can create separate components which makes the DOM run faster. 

6. Components 

React divides the web page into multiple components as it is component-based. Each component is a part of the UI design which has its own logic and design as shown in the below image. So the component logic which is written in JavaScript makes it easy and run faster and can be reusable. 

7. Single-Page Applications (SPAs) 

React is recommended in creating SPAs, allowing smooth content updates without page reloads. Its focus on reusable components makes it ideal for real-time applications. 

->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                                                          ReactJS Data Binding 

Data Binding is the process of connecting the view element or user interface, with the data which populates it. 

In ReactJS, components are rendered to the user interface and the component’s logic contains the data to be displayed in the view(UI). The connection between the data to be displayed in the view and the component’s logic is called data binding in ReactJS. 

One-way Data Binding: : ReactJS uses one-way data binding. In one-way data binding one of the following conditions can be followed: 

Component to View :  Any change in component data would get reflected in the view. 

View to Component :  Any change in View would get reflected in the component’s data. 
 

                                                                          Implementing Component to View Data Binding: 

 import React, { useState } from 'react';

function App() {
  const [subject, setSubject] = useState("ReactJS");

  return (
    <div style={{ textAlign: "center" }}>
      <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
      <p><b>{subject}</b> Tutorial</p>
    </div>
  );
}

export default App;

 

                                                                        Implementing View to Component Data Binding: 


We cannot directly apply View to Component data binding in ReactJS, for this we have to add event handlers to the view element. 

 
import React, { useState } from 'react';

function App() {
  // State using useState hook
  const [subject, setSubject] = useState("");

  // Function to handle input change
  const handleChange = event => {
    setSubject(event.target.value);
  };

  // JSX returned directly from the function
  return (
    <div>
      <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
      <input
        placeholder="Enter Subject"
        onChange={handleChange}
        value={subject} // Controlled input value
      />
      <p><b>{subject}</b> Tutorial</p>
    </div>
  );
}

export default App;

 

 

 

->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>->>
                                                                                                
                                                                                        ReactJS Lifecycle 

Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence. 

Here's the React component lifecycle described in terms of functional components and React Hooks: 

                                                                                          Initialization: 

Functional components are initialized with the given props passed to them as arguments. 

                                                                                          Mounting Phase: 

UseEffect with an empty dependency array ([]): 

This is equivalent to componentDidMount in class components. It runs after the component is rendered for the first time. 

You can perform side effects like data fetching or setting up subscriptions inside this useEffect. 

                                                                                          Render: 

The return statement of the functional component represents the JSX representation of the component. It's called during initial rendering and subsequent updates. 

                                                                                      Updating Phase: 

UseEffect with dependencies: 

This is equivalent to componentDidUpdate in class components. It runs after every render and re-render. 

You can handle side effects based on changes in props or state inside this useEffect. 

Memoization (optional): 

You can use React.memo to memoize functional components and optimize performance. It's similar to shouldComponentUpdate. 

                                                                                    Unmounting Phase: 

UseEffect with a cleanup function: 

This is equivalent to componentWillUnmount in class components. You can return a cleanup function from the useEffect hook. 

This cleanup function is invoked just before the component is removed from the DOM. You can clean up resources like event listeners or timers here. 



                                                                      import React, { useState, useEffect } from 'react';
                                                                      
                                                                      function MyFunctionalComponent() {
                                                                      const [count, setCount] = useState(0);
                                                                      
                                                                      // Equivalent to componentDidMount and componentDidUpdate
                                                                      useEffect(() => {
                                                                        // Side effect code goes here
                                                                        console.log('Component has mounted or updated');
                                                                        
                                                                        // Clean up function (equivalent to componentWillUnmount)
                                                                        return () => {
                                                                          console.log('Component will unmount');
                                                                          // Clean up code goes here
                                                                        };
                                                                      });
                                                                      
                                                                      return (
                                                                        <div>
                                                                          <p>You clicked {count} times</p>
                                                                          <button onClick={() => setCount(count + 1)}>
                                                                            Click me
                                                                          </button>
                                                                        </div>
                                                                      );
                                                                      }
                                                                      
                                                                      export default MyFunctionalComponent;
                                                                      
                                                                      
