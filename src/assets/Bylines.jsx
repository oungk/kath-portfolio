import React, { useState } from 'react';

export default function Bylines() {
  const [selectedCategory, setSelectedCategory] = useState('journalism');

  // Define different content sets for each category
  const contentByCategory = {
    journalism: {
      2025: [
        { text: '"An Extremely Detailed Map of the 2024 Election"', link: 'https://www.nytimes.com/interactive/2025/us/elections/2024-election-map-precinct-results.html?unlocked_article_code=1.uU8.dpPv._nJFbFUWhO8O&smid=url-share', publication: 'The New York Times' },
        { text: '"Country Almanac: Artists to Watch"', link: 'https://www.nashvillescene.com/music/coverstory/nashville-scene-country-almanac-artists-watch-wyatt-flores/article_c1eb8f7a-d2ac-11ef-927b-cf3f88063466.html', publication: 'Nashville Scene' }
      ],
      2024: [
        { text: '"Snõõper\'s convergence of puppets and punk"', link: 'https://nobells.blog/snooper-band-interview/', publication: 'No Bells Magazine' },
        { text: '"Inside Palestine\'s last keffiyeh factory"', link: 'https://atmos.earth/fashion-and-design/inside-palestines-hirbawi-keffiyeh-factory/', publication: 'Atmos Magazine' },
        { text: '"Dear Nora and Cassie Berman play for friends old, new and gone"', link: 'https://www.nashvillescene.com/music/thespin/dear-nora-and-cassie-berman-play-for-friends-old-new-and-gone/article_706d0cc8-f5d0-11ee-9d5b-6b73679b47b4.html', publication: 'Nashville Scene' },
        { text: '"Budge just wants to have fun"', link: 'https://www.nashvillescene.com/music/features/budge-hrtstrngs-nashville-music-interview/article_945c75aa-1a1b-11ef-8cb5-e32eafe41d6f.html', publication: 'Nashville Scene' },
        { text: '"Another Look: Rap Ferreira"', link: 'https://www.nashvillescene.com/music/features/nashville-music-recommendations-brittany-howard-rap-ferreira/article_f3fe4cee-d5a7-11ee-b2a9-1b523036a447.html', publication: 'Nashville Scene' },
        { text: '"Waxahatchee, MJ Lenderman and More Celebrate ANTI- Records\' Americanafest"', link: 'https://www.nashvillescene.com/music/thespin/americanafest-2024-waxahatchee-basement-east/article_c5f647e6-776b-11ef-9747-0f6fe5c61a94.html', publication: 'Nashville Scene' },
        { text: '"Opinion | Free Speech Is for Campus Reporters Too"', link: 'https://www.wsj.com/opinion/free-speech-vanderbilt-campus-paper-journalism-7eb17db4?gaa_at=eafs&gaa_n=AWEtsqf28CGqsR____UDu1-plHpy0DjeQWKdKtvK14LV1EYlD1d4fuLZiJX4hz3ndtI%3D&gaa_ts=68f31945&gaa_sig=ehNtvryB2_Lt-0Qw8urV9z63n0j-joH6ziwDjW-kgqrnGieyNIWq3cWySylJx1WqNMX5wkTGnZBE70vWWhddAQ%3D%3D', publication: 'The Wall Street Journal' },
        { text: '"The NYT\'s \'Needle\' Presidential Forecast"', link: 'https://www.nytimes.com/interactive/2024/11/05/us/elections/results-president-forecast-needle.html', publication: 'The New York Times' }
      ],
      2023: [
        { text: '"Huge amounts of hazardous materials pass through the Midwest every day. How safe are you?"', link: 'https://www.indystar.com/story/news/environment/2023/07/25/midwest-states-in-top-20-for-hazmat-transportation-accidents/70337547007/', publication: 'IndyStar' },
        { text: '"Queering the Map is a crowdsourced archive of queer memories"', link: 'https://www.nytimes.com/2023/06/25/style/queering-the-map-lucas-larochelle.html', publication: 'The New York Times' },
        { text: '"Tree Ninja cultivates a forest in Nashville\'s neighborhoods"', link: 'https://www.nashvillescene.com/news/citylimits/tree-ninja-cultivates-a-forest-in-nashville-s-neighborhoods/article_737ae7fc-fefd-11ed-a0ec-07bb4b1cdc5f.html', publication: 'Nashville Scene' }
      ],
      earlier: [
        { text: '"The two young women behind Diversify Our Narrative"', link: 'https://oungk.github.io/kath-portfolio/ms-magazine-1.pdf', publication: 'Ms. Magazine (print)' },
        { text: '"What is a community fridge? How they work, explained."', link: 'https://www.vox.com/the-goods/22285863/community-fridges-neighborhoods-free-food', publication: 'Vox'},
        { text: '"The best $96 I ever spent: A Keurig to show my mom I love her"', link: 'https://www.vox.com/the-goods/21443775/best-money-chinese-mom-i-love-you', publication: 'Vox'},
        { text: '"Opinion | Coronavirus Racism Infected My High School"', link: 'https://www.nytimes.com/2020/03/14/opinion/Racism-coronavirus-asians.html', publication: 'The New York Times' },
        { text: '"These Asian American Women Should be in Every History Book"', link: 'https://www.teenvogue.com/story/4-asian-american-women-who-changed-history', publication: 'Teen Vogue'},
        { text: '"Meet the teen feminist leading the fight for young women\'s reproductive rights"', link: 'https://msmagazine.com/2019/07/25/fierce-teen-ally-leads-girls-of-color-in-fight-for-reproductive-rights/', publication: 'Ms. Magazine' }
      ]
    },
    photography: {
      2024: [
        { text: '"Snõõper\'s convergence of puppets and punk"', link: 'https://nobells.blog/snooper-band-interview/', publication: 'No Bells Magazine' },
        { text: '"IN PHOTOS: Ryan Beatty takes it slow at the Basement East"', link: 'https://vanderbilthustler.com/2024/02/23/in-photos-ryan-beatty-takes-it-slow-at-the-basement-east/', publication: 'The Vanderbilt Hustler' },
        { text: '"Waxahatchee\'s meditative nostalgia"', link:'https://vanderbilthustler.com/2024/05/08/waxahatchees-meditative-nostalgia/#', publication: 'The Vanderbilt Hustler' },
      ],
      2023: [
        { text: '"Mother Cain embraces her found family at The Basement East"', link: 'https://vanderbilthustler.com/2022/09/12/mother-cain-embraces-her-found-family-at-the-basement-east/#',publication: 'The Vanderbilt Hustler' }
      ]
    },
    audio: {
      2023: [
        { text: '"Potential for hazmat transport accidents higher in low income areas in Midwest"', link: 'https://www.ideastream.org/2023-10-02/potential-for-hazmat-transport-accidents-higher-in-low-income-areas-in-midwest', publication: 'WYSO' },
      ],
      2020: [
        { text: '"How 2020 Changed Us"', link: 'https://podcasts.apple.com/us/podcast/how-2020-changed-us/id1346207297?i=1000503826209', publication: 'Today, Explained' }
      ]
    },
    video: {
      2025: [
        { text: '"Sham Jam 2025 Spotlight: McKay In-Studio"', link: 'https://wrvu.org/sham-jam-2025-spotlight-mckay-in-studio/', publication: 'WRVU' },
      ],
      2020: [
        { text: '"Opinion | Coronavirus Racism Infected My High School"', link: 'https://www.nytimes.com/2020/03/14/opinion/Racism-coronavirus-asians.html', publication: 'The New York Times'},
      ]
    },
    poetry: {
      2025: [
        { text: '"you kept telling me the west isn\'t wild anymore"', publication: 'Foglifter Journal (forthcoming)' },
        { text: '"It was summer and,"', publication: 'Foglifter Journal (forthcoming)' },
        { text: '"Summer Camp"', publication: 'Foglifter Journal (forthcoming)' },
        { text: '"THE BOYS"', publication: 'quarter notes magazine (forthcoming)' },
        { text: '"American Water"', publication: 'quarter notes magazine (forthcoming)' },
        { text: '"Indictment"', publication: 'Glass: A Journal of Poetry (forthcoming)' },
        { text: '"Hit and Run"', link: 'https://www.fourteenpoems.com/shop/issue-17', publication: 'fourteen poems (print)' },
        { text: '"PRAYER TO SAINT MICHAEL"', link: 'https://dishsoap-quarterly.com/5-20-25/prayer/', publication: 'Dishsoap Quarterly' },
        { text: '"DURING OUR SIXTH GRADE HISTORY UNIT ON THE COLD WAR,"', link: 'https://sinetheta.net/34.html',publication: 'Sine Theta Magazine (print)' }
      ]
    }
  };

  const categories = ['journalism', 'photography', 'audio', 'video', 'poetry'];
  const currentContent = contentByCategory[selectedCategory] || {};

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#3E0230',
      fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
      padding: '2rem',
      position: 'relative'
    }}>
      {/* 🧭 Nav - Top Left */}
      <nav style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        display: 'flex',
        gap: '1.5rem',
        fontSize: '16px',
        zIndex: 10
      }}>
        <a href="#" style={{color: '#3E0230 !important', textDecoration: 'none', fontWeight: 'normal', fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace"}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' })); }}>home</a>
        <a href="#" style={{color: '#3E0230 !important', textDecoration: 'none', fontWeight: 'normal', fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace"}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'work' })); }}>work</a>
        <a href="#" style={{color: '#3E0230 !important', textDecoration: 'none', fontWeight: 'bold', fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace"}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'bold'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'bylines' })); }}>bylines</a>
        <a href="#" style={{color: '#3E0230 !important', textDecoration: 'none', fontWeight: 'normal', fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace"}} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' })); }}>contact me</a>
      </nav>

          {/* Main Content Container */}
          <div className="main-content-container" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          paddingLeft: '4rem',
          paddingTop: '4rem'
      }}>
        {/* Main Title */}
        <h1 style={{
          fontSize: '70px',
          fontFamily: "'Luxurious Script', cursive",
          color: '#3E0230',
          fontWeight: 'normal',
          margin: '0 0 3rem 0',
          textAlign: 'left'
        }}>
          What I've made...
        </h1>

        {/* Clickable Category Filters */}
        <div style={{
           fontSize: '16px',
           fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
           color: '#3E0230',
           fontWeight: 'normal',
           marginBottom: '3rem'
         }}>
           {categories.map((category, index) => (
             <React.Fragment key={category}>
               <span 
                 style={{
                   cursor: 'pointer',
                   fontWeight: selectedCategory === category ? 'bold' : 'normal',
                   textDecoration: 'none',
                   color: '#3E0230'
                 }}
                 onClick={() => setSelectedCategory(category)}
                 onMouseOver={(e) => e.target.style.fontWeight = 'bold'}
                 onMouseOut={(e) => e.target.style.fontWeight = selectedCategory === category ? 'bold' : 'normal'}
               >
                 ✶ {category + ' '} 
               </span>
             </React.Fragment>
           ))}
         </div>

        {/* Render content based on selected category */}
        {Object.entries(currentContent)
          .sort(([a], [b]) => {
            // Sort years in descending order (newest first)
            if (a === 'earlier') return 1;
            if (b === 'earlier') return -1;
            return parseInt(b) - parseInt(a);
          })
          .map(([year, items]) => (
          <div key={year} style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'bold',
              margin: '0 0 1rem 0'
            }}>
              {year}
            </h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {items.map((item, index) => (
                <li key={index} style={{
                  fontSize: '16px',
                  fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
                  color: '#3E0230',
                  fontWeight: 'normal',
                  marginBottom: '0.5rem'
                }}>
                  - {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )} <em>{item.publication}</em>
                  {item.year && ` (${item.year})`}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

           {/* Mobile Responsive Styles */}
           <style>{`
        em {
            color: #3E0230 !important;
            font-style: italic;
        }
        nav a {
            color: #3E0230 !important;
        }
        .subtitle {
            color: #3E0230 !important;
        }
        @media (max-width: 767px) {
            nav {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            justify-content: center !important;
            margin-bottom: 2rem !important;
            }
            .main-content-container {
            padding-left: 1rem !important;
            padding-top: 1rem !important;
            }
            h1 {
            font-size: 45px !important;
            margin-top: 0 !important;
            }
        }
      `}</style>
    </div>
  );
}