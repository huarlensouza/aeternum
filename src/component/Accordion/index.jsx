import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import Rule from '../Rule';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderRadius: 5,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    marginBottom:5,
    backgroundColor:'rgba(0,0,0, .1)',
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ color: '#ffddcc', fontSize: '0.9rem',}} />}
        {...props}
     />
))(({ theme }) => ({
    color:'#ffddcc',
    borderRadius:5,
    backgroundColor:'rgba(0,0,0, .1)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    color:'#efefef',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default ({data}) => {
    const [expanded, setExpanded] = React.useState('');
    const [rule, setRule] = React.useState(false);
    
    const handleRule = () => setRule(true);

    const handleCloseRule = () => setRule(false);

    const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false);

    return (
        <div style={{display:'flex', flexDirection: 'column'}}>
            {      
                data.map((item, index) => (
                    <Accordion key={index} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                        <AccordionSummary>
                            <Typography
                                sx={{
                                    fontSize:'0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    textAlign: 'left',
                                    lineHeight: 2,
                                    fontWeight: 'lighter',
                                }}
                            >{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{fontSize:'0.75rem'}}>
                            <Typography sx={{fontSize:'0.75rem'}}>{item.content}</Typography>
                            {item.rule && 
                                <Box>
                                    <div style={{marginTop:10, display:'flex', flexDirection:'column'}}><span>Para mais informações, consulte o manual de regras:</span></div>
                                    <a onClick={handleRule} style={{color:'#db4d53', textDecoration:'underline', cursor:'pointer'}}>Acessar manual de regras e conduta</a>
                                </Box>
                            }
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            <Rule open={rule} handleCloseRule={handleCloseRule}/>
        </div>
    );
};