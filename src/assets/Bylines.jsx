import React from 'react';

export default function Bylines() {
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
       <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
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

        {/* Sub-heading */}
        <div className="subtitle" style={{
        fontSize: '16px',
        fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
        color: '#3E0230',
        fontWeight: 'normal',
        marginBottom: '3rem'
        }}>
        (plus!) * photography * video * audio * poetry
        </div>

        {/* 2025 Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '16px',
            fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
            color: '#3E0230',
            fontWeight: 'bold',
            margin: '0 0 1rem 0'
          }}>
            2025
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nytimes.com/interactive/2025/us/elections/2024-election-map-precinct-results.html?unlocked_article_code=1.uU8.dpPv._nJFbFUWhO8O&smid=url-share" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"An Extremely Detailed Map of the 2024 Election"</a> <em>The New York Times</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nashvillescene.com/music/coverstory/nashville-scene-country-almanac-artists-watch-wyatt-flores/article_c1eb8f7a-d2ac-11ef-927b-cf3f88063466.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Country Almanac: Artists to Watch"</a> <em>Nashville Scene</em>
            </li>
          </ul>
        </div>

        {/* 2024 Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '16px',
            fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
            color: '#3E0230',
            fontWeight: 'bold',
            margin: '0 0 1rem 0'
          }}>
            2024
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://nobells.blog/snooper-band-interview/" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Snõõper's convergence of puppets and punk"</a> <em>No Bells Magazine</em> w/Ben Arthur
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://atmos.earth/fashion-and-design/inside-palestines-hirbawi-keffiyeh-factory/" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Inside Palestine's last keffiyeh factory"</a> <em>Atmos Magazine</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nashvillescene.com/music/thespin/dear-nora-and-cassie-berman-play-for-friends-old-new-and-gone/article_706d0cc8-f5d0-11ee-9d5b-6b73679b47b4.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Dear Nora and Cassie Berman play for friends old, new and gone"</a> <em>Nashville Scene</em>            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nashvillescene.com/music/features/budge-hrtstrngs-nashville-music-interview/article_945c75aa-1a1b-11ef-8cb5-e32eafe41d6f.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Budge just wants to have fun"</a> <em>Nashville Scene</em> w/Ben Arthur            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nashvillescene.com/music/features/nashville-music-recommendations-brittany-howard-rap-ferreira/article_f3fe4cee-d5a7-11ee-b2a9-1b523036a447.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Another Look: Rap Ferreira"</a> <em>Nashville Scene</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
            - <a href="https://www.nashvillescene.com/music/thespin/americanafest-2024-waxahatchee-basement-east/article_c5f647e6-776b-11ef-9747-0f6fe5c61a94.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Waxahatchee, MJ Lenderman and More Celebrate ANTI- Records’ Americanafest"</a> <em>Nashville Scene</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
            - <a href="https://www.wsj.com/opinion/free-speech-vanderbilt-campus-paper-journalism-7eb17db4?gaa_at=eafs&gaa_n=AWEtsqf28CGqsR____UDu1-plHpy0DjeQWKdKtvK14LV1EYlD1d4fuLZiJX4hz3ndtI%3D&gaa_ts=68f31945&gaa_sig=ehNtvryB2_Lt-0Qw8urV9z63n0j-joH6ziwDjW-kgqrnGieyNIWq3cWySylJx1WqNMX5wkTGnZBE70vWWhddAQ%3D%3D" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Opinion | Free Speech Is for Campus Reporters Too"</a> <em>The Wall Street Journal</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nytimes.com/interactive/2024/11/05/us/elections/results-president-forecast-needle.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"The NYT’s ‘Needle’ Presidential Forecast"</a> <em>The New York Times</em>
            </li>
          </ul>
        </div>

        {/* 2023 Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '16px',
            fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
            color: '#3E0230',
            fontWeight: 'bold',
            margin: '0 0 1rem 0'
          }}>
            2023
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.indystar.com/story/news/environment/2023/07/25/midwest-states-in-top-20-for-hazmat-transportation-accidents/70337547007/" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Huge amounts of hazardous materials pass through the Midwest every day. How safe are you?"</a> <em>IndyStar</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nytimes.com/2023/06/25/style/queering-the-map-lucas-larochelle.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Queering the Map is a crowdsourced archive of queer memories"</a> <em>The New York Times</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.nashvillescene.com/news/citylimits/tree-ninja-cultivates-a-forest-in-nashville-s-neighborhoods/article_737ae7fc-fefd-11ed-a0ec-07bb4b1cdc5f.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Tree Ninja cultivates a forest in Nashville's neighborhoods"</a> <em>Nashville Scene</em>
            </li>
          </ul>
        </div>

        {/* Earlier Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '16px',
            fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
            color: '#3E0230',
            fontWeight: 'bold',
            margin: '0 0 1rem 0'
          }}>
            earlier
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "The two young women behind Diversify Our Narrative" <em>Ms. Magazine (print)</em> (2021)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.vox.com/the-goods/22285863/community-fridges-neighborhoods-free-food" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"What is a community fridge? How they work, explained."</a> <em>Vox</em> (2021)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.vox.com/the-goods/21443775/best-money-chinese-mom-i-love-you" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"The best $96 I ever spent: A Keurig to show my mom I love her"</a> <em>Vox</em> (2020)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - - <a href="https://www.nytimes.com/2020/03/14/opinion/Racism-coronavirus-asians.html" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Opinion | Coronavirus Racism Infected My High School"</a> <em>The New York Times</em> (2020)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://www.teenvogue.com/story/4-asian-american-women-who-changed-history" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"These Asian American Women Should be in Every History Book"</a> <em>Teen Vogue</em> (2020)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - <a href="https://msmagazine.com/2019/07/25/fierce-teen-ally-leads-girls-of-color-in-fight-for-reproductive-rights/" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Meet the teen feminist leading the fight for young women's reproductive rights"</a> <em>Ms. Magazine</em> (2019)
            </li>
          </ul>
        </div>
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
            .main-content {
            padding-left: 1rem !important;
            }
            .main-title {
            font-size: 50px !important;
            }
        }
        `}</style>
    </div>
  );
}