import axios from 'axios';
import React, { useEffect, useState } from 'react';

import "./home.css"

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.post("https://hoblist.com/api/movieList", {
                    "category": "movies",
                    "language": "kannada",
                    "genre": "all",
                    "sort": "voting"
                });
                setData(response.data.result); // Update state with the response data
                console.log(response.data.result); // Log the response data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

   ;

 

    const unixTimestampToDate = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert to milliseconds
        const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });
        return dateFormatter.format(date);
    };

    const truncateString=(str,length) => {
        return str.slice(0, length) + ".....";
    }


    const toggleCompanyInfo = () => {
        const companyInfo = document.getElementById('company-info');
        if (companyInfo.style.display === 'none') {
          companyInfo.style.display = 'block';
        } else {
          companyInfo.style.display = 'none';
        }
      };

    return (
        <div className='navpa'>
            <div className='nav'>
            <h1>Home Page</h1>
            <button className='button' onClick={toggleCompanyInfo}><h1>Company Info</h1></button>
            </div>
           

            <div>
      {/* <div>Geeksynergy Technologies Pvt Ltd</div> */}
     
      <div id="company-info" className="company-info">
        <div>
        <p>Company: <span>Geeksynergy Technologies Pvt Ltd</span></p>
        <p>Address: <span>Sanjayanagar, Bengaluru-56 </span></p>
        <p>Phone: <span>XXXXXXXXX09 </span></p>
        <p>Email: <span className='email'> XXXXXX@gmail.com </span></p>
        </div>
      </div>
    </div>
            


            <div className='parent'>
                {data.map((e) => {
                    // unixTimestampToDate(e.releasedDate);
                    return (<div className='father'>
                        <div className='child' key={e._id}>
                            <div className='child1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-up-filled" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" strokeWidth="0" fill="currentColor" />
                                </svg>
                                <p>{e.voting}</p>

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caret-down-filled" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" strokeWidth="0" fill="currentColor" />
                                </svg>
                                <p>Votes</p>
                            </div>

                            <div className='child2'>
                                <img width={220} src={e.poster} />
                            </div>

                            <div className='child3'>
                                <h2>{e.title}</h2>
                                <p>Genre:&nbsp; <span>{truncateString(e.genre,10)}</span></p>
                                <p>Director:&nbsp;<span>{truncateString(e.director[0],10)}</span></p>
                                <p>Starring:&nbsp;<span>{truncateString(e.stars[0],13)}</span></p>
                                <p>Min &nbsp;|&nbsp;English &nbsp;| {unixTimestampToDate(e.releasedDate)}</p>
                                <p className='colorNames'>{e.pageViews}&nbsp; Views | Voted by {e.voting} People</p>
                            </div>


                       
                        </div>

                        <div className='btn'><h4>Watch tariler</h4></div>

                        {/* <hr/> */}
                        </div>
                    );
                })}
                
            </div>

        </div>
    );
};

export default Home;