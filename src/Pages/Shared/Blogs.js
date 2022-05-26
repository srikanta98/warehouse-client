import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className="services grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="card lg:max-w-lg copy ">
                    <h1 className='text-center font-bold text-sky-500 font-mono  mb-2'> How will you improve the performance of a React Application?</h1>
                    <p className='font-mono text-center px-6'>Keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders.Code-splitting in React using dynamic import() Windowing or list virtualization in React.Lazy loading images in React.
                    </p>
                </div>
                <div className="card lg:max-w-lg copy ">
                    <h1 className='text-center font-bold text-sky-500 font-mono  mb-2'>What are the different ways to manage a state in a React application?</h1>
                    <p className='font-mono text-center px-6'>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.</p>

                </div>
                <div className="card lg:max-w-lg copy ">
                    <h1 className='text-center font-bold text-sky-500 font-mono  mb-2'>How does prototypical inheritance work?</h1>
                    <p className='font-mono text-center px-6'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>

                </div>
                <div className="card lg:max-w-lg copy ">
                    <h1 className='text-center font-bold text-sky-500 font-mono  mb-2'>Why you do not set the state directly in React?</h1>
                    <p className='font-mono text-center px-6'>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>

                </div>
                <div className="card lg:max-w-lg copy ">
                    <h1 className='text-center font-bold text-sky-500 font-mono  mb-2'>What is a unit test? Why should write unit tests?</h1>
                    <p className='font-mono text-center px-6'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;