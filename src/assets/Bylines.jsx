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
              - <a href="https://atmos.earth/fashion-and-design/inside-palestines-hirbawi-keffiyeh-factory/" target="_blank" rel="noopener noreferrer" style={{color: '#3E0230', textDecoration: 'underline'}}>"Inside Palestine's last keffiyeh factory"</a> <em>Atmos Magazine</em> w/Katherine Valdez
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "Dear Nora and Cassie Berman play for friends old, new and gone" <em>Nashville Scene</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "Budge just wants to have fun" <em>Nashville Scene</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "Another Look: Rap Ferreira" <em>Nashville Scene</em>
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
              - "Queering the Map is a crowdsourced archive of queer memories" <em>New York Times</em>
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "Tree Ninja cultivates a forest in Nashville's neighborhoods" <em>Nashville Scene</em> ◇
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
              - "The two young women behind Diversify Our Narrative" <em>Ms. Magazine</em> (2021)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "What is a community fridge? How they work, explained." <em>Vox</em> (2021)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "The best $96 I ever spent: A Keurig to show my mom I love her" <em>Vox</em> (2020) ☆
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "Opinion | Coronavirus Racism Infected My High School" <em>New York Times</em> (2020) *
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "These Asian American Women Should be in Every History Book" <em>Teen Vogue</em> (2020)
            </li>
            <li style={{
              fontSize: '16px',
              fontFamily: "'Courier New', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
              color: '#3E0230',
              fontWeight: 'normal',
              marginBottom: '0.5rem'
            }}>
              - "Meet the teen feminist leading the fight for young women's reproductive rights" <em>Ms. Magazine</em> (2019)
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