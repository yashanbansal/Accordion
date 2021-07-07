import React, { useState } from 'react';
import './index.css';
import { questions } from './Api.jsx'
import MyAccordion from './MyAccordion';

const Accordion = () => {
    const [data, setData] = useState(questions)
    return (
        <>
        <section className="main-div">
            <h1>react Interview Questions 👨‍🎓</h1>
            {
                data.map((val) => {
                    const {id} = val;
                {/* console.log(val) */}
                    return <MyAccordion key={id} {... val }/>;
                })
            }
        </section>   
        </>
    );
}

export default Accordion
