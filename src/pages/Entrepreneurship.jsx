import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footer from '../components/Footer';

export default function Entrepreneurship() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <StyledEntrepreneurship>
                <div className="main_entrepreneurship">
                    <h1>
                        Entrepreneurship
                    </h1>

                    <div className="entrepreneurship_tabs">
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Tabs
                                onChange={handleChange}
                                value={value}
                                aria-label="Tabs where selection follows focus"
                                selectionFollowsFocus
                                sx={{
                                    "& .MuiTabs-indicator": {
                                        top: 0,
                                        bottom: "auto",
                                        backgroundColor: "var(--primary-color)",
                                    },

                                    "& .MuiTab-root": {
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "2rem",
                                        textTransform: "none",
                                        color: "var(--background-color-dark)",
                                    },

                                    "& .MuiTab-root.Mui-selected": {
                                        color: "var(--primary-color) !important",
                                    },

                                    //  body: {
                                    "body.light-mode &": {
                                        "& .MuiTab-root": {
                                            color: "black",
                                        },
                                        "& .MuiTab-root.Mui-selected": {
                                            color: "var(--light-blue-color) !important",
                                        },
                                        "& .MuiTabs-indicator": {
                                            backgroundColor: "var(--light-blue-color)",
                                        },
                                    },
                                    // },

                                    "body.dark-mode &": {
                                        "& .MuiTab-root": {
                                            color: "var(--background-color-light)",
                                        },
                                        "& .MuiTab-root.Mui-selected": {
                                            color: "var(--primary-color) !important",
                                        },
                                        "& .MuiTabs-indicator": {
                                            backgroundColor: "var(--primary-color)",
                                        },
                                    },
                                }}
                            >
                                <Tab label="Company1" />
                                <Tab label="Company2" />
                            </Tabs>
                        </Box>
                    </div>
                </div>
                <div className="tab_content">
                    {value === 0 && <Company1 />} {value === 1 && <Company2 />}
                </div>
            </StyledEntrepreneurship>
            <Footer/>
        </>
    )
}



const Company1 = () => {
    
    return (
      <>
      Company1
      </>
    );
};

const Company2 = () => {
    
    return (
        <> 
        Company2
        </>
    );
};


const StyledEntrepreneurship = styled.div`
width: 80%;
margin: var(--section-margin) auto;
height: 100vh;
.main_entrepreneurship{
    
    h1{
      font-size: var(--xl-heading);
      margin-bottom: var(--heading-margin);
     
    }
}

@media (max-width: 1024px) {
    .main_entrepreneurship {
      h1 {
        text-align: center;
      }
    }
  }

`
