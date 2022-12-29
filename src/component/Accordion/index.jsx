import React, { useEffect } from 'react';
import Rule from '../Rule';
import './index.css';

export default ({data, handleRule}) => {
    const [value, setValue] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [rule, setRule] = React.useState(false)

    useEffect(() => {
        let accordion = [];
        data.forEach((i) => {
            accordion.push({
                title:i.title,
                content:i.content,
                html:i.html,
                rule:i.rule,
                open:false
            });
        });
    
        setValue({accordionItems: accordion});
        setLoading(false);
    },[]);

    const handleClick = (i) => {
        const newAccordion = value.accordionItems.slice();
        const index = newAccordion.indexOf(i);

        newAccordion[index].open = !newAccordion[index].open;

        setValue({accordionItems:newAccordion});
    };

    return (
        <>
            {
                !loading ?

                    <div className="accordion">
                        {
                            
                            value.accordionItems.map((i, x) => (
                                <div key={x}>
                                    <div 
                                        className="title" 
                                        onClick={() => handleClick(i)}
                                    >
                                        <div className="arrow-wrapper">
                                            <i
                                                className={
                                                    i.open 
                                                    ?
                                                        "fa fa-angle-down fa-rotate-180" 
                                                    :
                                                        "fa fa-angle-down"
                                                }
                                            />
                                        </div>
                                        <span className="title-text">
                                            {i.title}
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            i.open 
                                            ?
                                                "content content-open" 
                                            :
                                                "content"
                                        }
                                    >
                                        <div
                                            className={
                                                i.open 
                                                ?
                                                    "content-text content-text-open" 
                                                :
                                                    "content-text"}
                                        >
                                            <div>
                                                {i.content}
                                            </div>
                                                {
                                                    i.html
                                                    ?
                                                        <div style={{marginTop:10, display:'flex', flexDirection:'column'}}>
                                                            {i.html}
                                                            <div style={{textDecoration:'underline', cursor:'pointer'}} title="Acessar o manual de regras e conduta" onClick={handleRule}>
                                                                {i.rule}
                                                            </div>
                                                        </div>
                                                    :
                                                        null

                                                }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <h1/>
                }
                <Rule open={rule}/>
        </>
    );
};
