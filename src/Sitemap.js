import React, { useState, useEffect, useRef } from 'react';
import './Sitemap.css'; // Import the CSS file

function Sitemap() {
  const [input, setInput] = useState(''); // Define input state
  const inputRef = useRef(null); // Create reference for the input field

  const handleInputChange = (event) => {
    setInput(event.target.value); // Update input state on change
  };

  useEffect(() => {
    // Automatically focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCancel = () => {
    setInput(''); // Clear the input when the cancel button is clicked
  };

  // Handler to filter suggestions
  const getSuggestions = () => {
    if (!input) return [];
    const links = document.querySelectorAll('.link');
    return Array.from(links).filter(link =>
      link.getAttribute('data-english').toLowerCase().includes(input.toLowerCase())
    );
  };

  // Hide suggestions when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-container')) {
      document.getElementById('suggestions').style.display = 'none';
    }
  });

  const suggestions = getSuggestions();

  return (
    <div className="sitemap-column">
<h1 className="sitemap">
                <ul style={{margin:'0', listStyle:'none',}}>
                  <li style={{margin:'0', listStyle:'none',}}><a href="https://www.dinamalar.com/sitemap.xml"> Sitemap </a> </li>
                  </ul></h1>
                  <div className="search-container">
            
            <div style={{ position: "relative", display: "inline-block" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "20px",
                  height: "20px",
                  color: "#888", // more professional color
                }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
               ref={inputRef} // Attach ref to the input field
                type="text"
                id="search"
                placeholder="Search categories"
                value={input}
                onChange={handleInputChange}
                style={{
                  paddingLeft: "45px", // Space for the icon
                  paddingRight: "120px", // Space for the button
                }}
              />
              <button
                onClick={handleCancel}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "blue", // Button color
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ✖️
              </button>
            </div>

            <div id="suggestions" style={{ display: suggestions.length > 0 ? 'block' : 'none' }}>
              {suggestions.map((link, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => (window.location.href = link.getAttribute('href'))}
                >
                  {link.textContent}
                </div>
              ))}
            </div>
          </div>

    

    <div className="sitemap-container">
      <div className="sitemap-column">
        <ul className="sitemap shdbox">
          
          <li>
            <a
              href="https://www.dinamalar.com/news/tamil-news"
              className="link"
              data-english="seidhigal"
            >
              {/* SVG Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                height=".8em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 3 5 L 3 23 C 3 25.210938 4.789063 27 7 27 L 25 27 C 27.210938 27 29 25.210938 29 23 L 29 12 L 23 12 L 23 5 Z M 5 7 L 21 7 L 21 23 C 21 23.730469 21.222656 24.410156 21.5625 25 L 7 25 C 5.808594 25 5 24.191406 5 23 Z M 7 9 L 7 14 L 19 14 L 19 9 Z M 9 11 L 17 11 L 17 12 L 9 12 Z M 23 14 L 27 14 L 27 23 C 27 24.191406 26.191406 25 25 25 C 23.808594 25 23 24.191406 23 23 Z M 7 15 L 7 17 L 12 17 L 12 15 Z M 14 15 L 14 17 L 19 17 L 19 15 Z M 7 18 L 7 20 L 12 20 L 12 18 Z M 14 18 L 14 20 L 19 20 L 19 18 Z M 7 21 L 7 23 L 12 23 L 12 21 Z M 14 21 L 14 23 L 19 23 L 19 21 Z"></path>
              </svg>
              செய்திகள்
            </a>


            <ul>
              <li className="head">
                <a href="https://www.dinamalar.com/latestmain" className="link" data-english="timeline">
                  டைம்லைன்
                </a>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/latest-tamil-news" className="link" data-english="tharpodhayah seidhigal">
                  தற்போதைய செய்தி
                </a>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/premium-news" className="link" data-english="premium">
                  ப்ரீமியம்
                </a>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/tamil-nadu-news" className="link" data-english="tamilagam">
                  தமிழகம்
                </a>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/india-tamil-news" className="link" data-english="india">
                  இந்தியா
                </a>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/world-tamil-news" className="link" data-english="ulagam">
                  உலகம்
                </a>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/business" className="link" data-english="varthagam commodity">
                  <b>வர்த்தகம்</b>
                </a>
                <ul>
                  <li>
                    <a href="https://www.dinamalar.com/news/business-share-market" className="link" data-english="share market pangu ">
                      பங்கு வர்த்தகம்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/business-general-news/" className="link" data-english="podhu general">
                      பொது
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/business-banking-and-finance" className="link" data-english="vangi matrum nidhi">
                      வங்கி மற்றும் நிதி
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/business-savings" className="link" data-english="semippu">
                      சேமிப்பு திட்டம்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/business-commodity" className="link" data-english="commodity">
                      கமாடிட்டி
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/business-thousand-doubts" className="link" data-english="aayiram sandhegangal">
                      ஆயிரம் சந்தேகங்கள்
                    </a>
                  </li>
                </ul>
              </li>
              <li className="head">
                <a href="https://www.dinamalar.com/news/tamil-nadu-district-news" className="link" data-english="districts maavatangal">
                  <b>மாவட்டங்கள்</b>
                </a>
                <ul>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-ariyalur" className="link" data-english="ariyalur">
                      அரியலூர்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-chengalpattu" className="link" data-english="chengalpattu">
                      செங்கல்பட்டு
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-chennai" className="link" data-english="chennai">
                      சென்னை
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-coimbatore" className="link" data-english="coimbatore">
                      கோயம்புத்தூர்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-cuddalore" className="link" data-english="cuddalore">
                      கடலூர்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-dharmapuri" className="link" data-english="dharmapuri">
                      தர்மபுரி
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-dindigul" className="link" data-english="dindigul">
                      திண்டுக்கல்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-erode" className="link" data-english="erode">
                      ஈரோடு
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-kallakurichi" className="link" data-english="kallakurichi">
                      கள்ளக்குறிச்சி
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-kancheepuram" className="link" data-english="kancheepuram">
                      காஞ்சிபுரம்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-karur" className="link" data-english="karur">
                      கரூர்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-krishnagiri" className="link" data-english="krishnagiri">
                      கிருஷ்ணகிரி
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-madurai" className="link" data-english="madurai">
                      மதுரை
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-mayiladuthurai" className="link" data-english="mayiladuthurai">
                      மயிலாடுதுறை
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-nagapattinam" className="link" data-english="nagapattinam naagapattinam">
                      நாகப்பட்டினம்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-kanniyakumari" className="link" data-english="kanniyakumari">
                      கன்னியாகுமரி
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-namakkal" className="link" data-english="namakkal">
                      நாமக்கல்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-perambalur" className="link" data-english="perambalur">
                      பெரம்பலூர்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-pudukottai" className="link" data-english="pudukottai">
                      புதுக்கோட்டை
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-ramanathapuram" className="link" data-english="ramanathapuram">
                      ராமநாதபுரம்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-ranipet" className="link" data-english="ranipet">
                      ராணிப்பேட்டை
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-salem" className="link" data-english="salem">
                      சேலம்
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-sivagangai" className="link" data-english="sivagangai">
                      சிவகங்கை
                    </a>
                  </li>
                  <li>
                    <a href="https://www.dinamalar.com/news/tamil-nadu-district-news-tenkasi" className="link" data-english="tenkasi">
                      தென்காசி
                    </a>
                  </li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-thanjavur">தஞ்சாவூர்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-theni">தேனி</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-thiruvallur">திருவள்ளூர்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-thiruvarur">திருவாரூர்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-thoothukudi">தூத்துக்குடி</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-trichirappalli">திருச்சி</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-thirunelveli">திருநெல்வேலி</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-tirupathur">திருப்பத்துார்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-tiruppur">திருப்பூர்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-tiruvannamalai">திருவண்ணாமலை</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-nilgiris">நீலகிரி</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-vellore">வேலூர்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-viluppuram">விழுப்புரம்</a></li>
                  <li><a href="https://www.dinamalar.com/news/tamil-nadu-district-news-virudhunagar">விருதுநகர்</a></li>
                  <li><a href="https://www.dinamalar.com/news/puducherry">புதுச்சேரி</a></li>
                </ul>
              </li>
              <li class="head"><a href="https://www.dinamalar.com/kalvimalar" class="link" data-english="kalvimalar"> <b>கல்விமலர்</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/news/kalvimalar-news" class="link" data-english="kalvimalar news ">செய்திகள்</a></li>
                  <li><a href="https://www.dinamalar.com/news/kalvimalar-katturaikal" class="link" data-english="katturaikal">கட்டுரைகள்</a></li>
                </ul>
              </li>
              <li class="head"><a href="https://www.dinamalar.com/kalvimalareng" class="link" data-english="kalvimalar"><b>Kalvimalar</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/news/kalvimalar-news-en" class="link" data-english="news english">News</a></li>
                  <li><a href="https://www.dinamalar.com/news/kalvimalar-katturaikal-en" class="link" data-english="aeticles">Articles</a></li>
                </ul>
              </li>
              <li class="head"><a href="https://www.dinamalar.com/news/sports" class="link" data-english="sports vilayattu"><b>விளையாட்டு</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/news/sports-cricket" class="link" data-english="cricket">கிரிக்கெட்</a></li>
                  <li><a href="https://www.dinamalar.com/news/sports-tennis" class="link" data-english="tennis">டென்னிஸ்</a></li>
                  <li><a href="https://www.dinamalar.com/news/sports-football" class="link" data-english="football">கால்பந்து</a></li>
                  <li><a href="https://www.dinamalar.com/news/sports-badminton" class="link" data-english="badminton">பாட்மின்டன்</a></li>
                  <li><a href="https://www.dinamalar.com/news/sports-others" class="link" data-english="pira vilayattu other sports">பிற விளையாட்டு</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="sitemap shdbox">


          <li>

            <a href="https://www.dinamalar.com/videos"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM155.88,145a8,8,0,0,0-8.12.22l-19.95,12.46A16,16,0,0,0,112,144H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h64a16,16,0,0,0,15.81-13.68l19.95,12.46A8,8,0,0,0,160,216V152A8,8,0,0,0,155.88,145ZM112,208H48V160h64v48Zm32-6.43-16-10V176.43l16-10Z"></path></svg>
              தினமலர் டிவி</a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/videos/live-and-recorded" className="link" data-english="live">Live</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/politics-tamil-videos" className="link" data-english="arasiyal politics"> அரசியல்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/general-tamil-videos" className="link" data-english="podhu general video"> பொது</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/sambavam-event-videos" className="link" data-english="sambavam"> சம்பவம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/tamil-cinema-videos" className="link" data-english="cinema video"> சினிமா வீடியோ</a></li>
              <li className="head"><a href="https://www.dinamalar.com/trailer/tamil-cinema-movie-trailer" className="link" data-english="trailer"> டிரைலர்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/short-news-videos" className="link" data-english="short news seidhisurukkam"> செய்திச்சுருக்கம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/sports-tamil-videos" className="link" data-english="sports videos"> விளையாட்டு</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/exclusive-tamil-videos" className="link" data-english="sirappu thoguppu"> சிறப்பு தொகுப்புகள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/anmegam-videos-in-tamil" className="link" data-english="anmegam aanmegam"> ஆன்மிகம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/videos/district-news-video" className="link" data-english="district videos maavataseidhigal"><b> மாவட்ட செய்திகள் </b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/ariyalur?district=297" className="link" data-english="ariyalur">அரியலூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/chengalpattu?district=315" className="link" data-english="">செங்கல்பட்டு</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/chennai?district=267" className="link" data-english="">சென்னை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/coimbatore?district=287" className="link" data-english="">கோயம்புத்தூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/cuddalore?district=273" className="link" data-english="">கடலூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/dharmapuri?district=278" className="link" data-english="">தர்மபுரி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/dindigul?district=290" className="link" data-english="">திண்டுக்கல்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/erode?district=280" className="link" data-english="">ஈரோடு</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/kallakurichi?district=314" className="link" data-english="">கள்ளக்குறிச்சி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/kanniyakumari?district=295" className="link" data-english="">கன்னியாகுமரி</a></li>

                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/kancheepuram?district=269" className="link" data-english="">காஞ்சிபுரம்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/karur?district=285" className="link" data-english="">கரூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/krishnagiri?district=296" className="link" data-english="">கிருஷ்ணகிரி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/madurai?district=291" className="link" data-english="">மதுரை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/mayiladuthurai?district=318" className="link" data-english="">மயிலாடுதுறை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/nagapattinam?district=282" className="link" data-english="">நாகப்பட்டினம்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/namakkal?district=283" className="link" data-english="">நாமக்கல்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/perambalur?district=274" className="link" data-english="">பெரம்பலூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/pudukottai?district=277" className="link" data-english="">புதுக்கோட்டை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/ramanathapuram?district=286" className="link" data-english="">ராமநாதபுரம்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/ranipet?district=317" className="link" data-english="">ராணிப்பேட்டை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/salem?district=276" className="link" data-english="">சேலம்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/sivagangai?district=284" className="link" data-english="">சிவகங்கை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/tenkasi?district=313" className="link" data-english="thenkaasi">தென்காசி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/thanjavur?district=281" className="link" data-english="thanjavur">தஞ்சாவூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/theni?district=288" className="link" data-english="theni">தேனி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/thiruvallur?district=270" className="link" data-english="thiruvallur">திருவள்ளூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/thiruvarur?district=275" className="link" data-english="thiruvaarur">திருவாரூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/thoothukudi?district=294" className="link" data-english="thoothukudi">தூத்துக்குடி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/trichirappalli?district=279" className="link" data-english="thiruchi">திருச்சி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/thirunelveli?district=293" className="link" data-english="thirunelveli">திருநெல்வேலி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/tirupathur?district=316" className="link" data-english="thirupathur">திருப்பத்துார்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/tiruppur?district=298" className="link" data-english="thirupur">திருப்பூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/tiruvannamalai?district=271" className="link" data-english="thiruvannamalai">திருவண்ணாமலை</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/nilgiris?district=289" className="link" data-english="nilagiri">நீலகிரி</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/vellore?district=272" className="link" data-english="vellore">வேலூர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/viluppuram?district=268" className="link" data-english="viluppuram">விழுப்புரம்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/virudhunagar?district=292" className="link" data-english="virudhunagar">விருதுநகர்</a></li>
                  <li><a href="https://www.dinamalar.com/videos/district-news-videos/puducherry?district=234" className="link" data-english="pudhucherry">புதுச்சேரி</a></li>
                </ul>
              </li>
            </ul>
          </li>

        </ul>
        <ul className="sitemap shdbox">

          <li>

            <a href="https://www.dinamalar.com/dinam-dinam" className="link" data-english="dinam dinam"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"></path></svg>
              தினம் தினம்</a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/tea-kadai-bench" className="link" data-english="tea kada bench">டீ கடை பெஞ்ச்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/doubt-dhanabalu" className="link" data-english="doubt dhanabalu">டவுட் தனபாலு</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/pakka-vathiyam" className="link" data-english="pakkavaathiyam">பக்கவாத்தியம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/dinamalar-news-ethiroli" className="link" data-english="seidhi edhiroli">செய்தி எதிரொலி</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/ithu-ungal-idam-public-comment" className="link" data-english="idhu ungal idam">இது உங்கள் இடம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/dinamalar-cartoon-today" className="link" data-english="cartoons">கார்ட்டூன்ஸ்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/pechu-petti-arikkai" className="link" data-english="pechu petti arikkai">பேச்சு, பேட்டி, அறிக்கை</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/ariviyal-ayiram-science-news" className="link" data-english="ariviyal aayiram">அறிவியல் ஆயிரம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/solgirargal" className="link" data-english="solgiraargal">சொல்கிறார்கள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/itha-padinga-muthlla" className="link" data-english="idhapadinga muthalla">இதப்படிங்க முதல்ல</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/akkam-pakkam" className="link" data-english="akkam pakkam">அக்கம் பக்கம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/crossword" className="link" data-english="kurukezhuthu pooti crossword">குறுக்கெழுத்து போட்டி</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/pazhamozi" className="link" data-english="pazhamozhi">பழமொழி</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/on-the-same-day" className="link" data-english="idhe naalil andru">இதே நாளில் அன்று</a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinam-dinam/thagaval-surangam" className="link" data-english="thagaval surangam">தகவல் சுரங்கம்</a></li>
            </ul>
          </li>
        </ul>


        <ul className="sitemap shdbox">
          <li>
            <a href="https://www.dinamalar.com/astrology" className="link" data-english="joshiyam"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg>
              ஜோசியம்</a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/astrology/today-rasi-palan" className="link" data-english="indraiyah rasi today rasi">இன்றைய ராசி </a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/weekly-rasi-palan" className="link" data-english="vaara raasi weekly rasi">வார ராசிபலன் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/monthly-rasi-palan" className="link" data-english="monthly raasi maadha raasi">மாத ராசிபலன் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/guru-peyarchi-paln" className="link" data-english="guru peyarchi palan">குருபெயர்ச்சி பலன்கள்  </a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/sani-peyarchi-palan" className="link" data-english="sani peyarchi palan">சனிப்பெயர்ச்சி பலன்கள் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/rahu-kethu-peyarchi-palan" className="link" data-english="rahu kethu ">ராகு கேது பெயர்ச்சி பலன்கள் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/new_year" className="link" data-english="tamil new year pudhaandu">தமிழ் புத்தாண்டு பலன்கள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/englishnewyear" className="link" data-english="english new year">ஆங்கில புத்தாண்டு பலன்கள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/subamuhurthanaatkal" className="link" data-english="subamuhurtha naatkal">சுபமுகூர்த்த நாட்கள் 2024</a></li>
              <li className="head"><a href="https://www.dinamalar.com/astrology/vasthu-natkal" className="link" data-english="vasthu naatkal">வாஸ்து நாட்கள் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/gragaorai" className="link" data-english="gragaorai">கிரக ஓரைகளின் காலம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/gowripanchangam" className="link" data-english="gowripanchangam">கௌரி பஞ்சாங்கம்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/importantviratham" className="link" data-english="viradha natkal">விரத நாட்கள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/karinaal" className="link" data-english="kari naal">கரி நாள்</a></li>
            </ul>
          </li>
        </ul>

        <ul className="sitemap shdbox">
          <li>
            <a href="https://www.dinamalar.com/calendar" className="link" data-english="Calendar"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path></svg>
              காலண்டர் </a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/josiyam-astrology/tamil-daily-calendar-2024" className="link" data-english="daily calendar"> தினசரி காலண்டர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/josiyam-astrology/dinamalar-calendar-2024" className="link" data-english="monthly calendar"> தினமலர் காலண்டர் </a></li>
            </ul>
          </li>
        </ul>

        <ul className="sitemap shdbox">
          <li>

            <a href="https://www.dinamalar.com/anmegam-spirituality-in-tamil" className="link" data-english="Anmegam aanmegam sprituality"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11h-2zm-4.69 0H8.69l.6-2h5.42l.6 2zm-1.2-4H9.89l.6-2h3.02l.6 2zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20v5z"></path></svg>
              ஆன்மிகம்</a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/hindu" className="link" data-english="hindu"><b>இந்து</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/hindu-katturaikal" className="link" data-english="katturaigal">கட்டுரைகள் </a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/hindu-information" className="link" data-english="thagavalgal">தகவல்கள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/hindu-tamil-news/" className="link" data-english="sidhigal">செய்திகள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/hindu-kathikal" className="link" data-english="kadhaigal">கதைகள்</a></li>
                </ul>
              </li>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/muslim" className="link" data-english="muslim islam"><b>இஸ்லாம்</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/muslim-katturaikal" className="link" data-english="">கட்டுரைகள் </a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/muslim-information" className="link" data-english="">தகவல்கள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/muslim-tamil-news" className="link" data-english="">செய்திகள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/muslim-kathikal" className="link" data-english="">கதைகள்</a></li>
                </ul>
              </li>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/christians" className="link" data-english="christians"><b>கிறிஸ்தவம்</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/christians-katturaikal" className="link" data-english="">கட்டுரைகள் </a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/christians-information" className="link" data-english="">தகவல்கள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/christians-information" className="link" data-english="">தகவல்கள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/christians-tamil-news" className="link" data-english="">செய்திகள்</a></li>
                  <li><a href="https://www.dinamalar.com/anmegam-spirituality/christians-kathikal" className="link" data-english="">கதைகள்</a></li>
                </ul>
              </li>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/temple-360-degree-virtual-tours" className="link" data-english="360 kovilgal">360° கோயில்கள் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/temple-360-degree-virtual-tours-en" className="link" data-english="360 kovilgal english">360° Temple View (English) </a></li>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/hindu-tamil-spiritual-thoughts" className="link" data-english="aanmega sindhanai">ஆன்மிக சிந்தனைகள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/anmegam-spirituality/sathguruvin-anantha-alai" className="link" data-english="sathguruvin anantha alai">சத்குருவின் ஆனந்த அலை </a></li>
            </ul>
          </li>
        </ul>

        <ul className="sitemap shdbox">
          <li>
            <a href="https://www.dinamalar.com/weekly" className="link" data-english="vaara vaaram weekly"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-6.92-3.96L12.39 17 15 15.47 17.61 17l-.69-2.96 2.3-1.99-3.03-.26L15 9l-1.19 2.79-3.03.26z"></path></svg>
              வாராவாரம் </a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/weekly/chellame" className="link" data-english="chellame">செல்லமே </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/sinthipoma" className="link" data-english="sindhipoma">சிந்திப்போமா </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/kadayani" className="link" data-english="kadayani">கடையாணி </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/kanavu-illam" className="link" data-english="kanavu illam"> <b>கனவு இல்லம்</b> </a>
                <ul>
                  <li><a href="https://www.dinamalar.com/weekly/kanavu-illam/news">   செய்திகள்   </a></li>
                  <li><a href="https://www.dinamalar.com/weekly/kanavu-illam/sirappu-katturai" className="link" data-english="sirappu katturai">   சிறப்பு கட்டுரை   </a></li>
                  <li><a href="https://www.dinamalar.com/weekly/kanavu-illam/alosanai" className="link" data-english="aalosanai">   ஆலோசனை</a></li>
                  <li><a href="https://www.dinamalar.com/weekly/kanavu-illam/veedu-paramarippu" className="link" data-english="veedu paraamarippu">   வீடு பராமரிப்பு</a></li>
                </ul>
              </li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/kannamma" className="link" data-english="kannamma"> <b>கண்ணம்மா </b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/weekly/kannamma/avale-saranam" className="link" data-english="avale saranam">     அவளே சரணம்</a></li>
                  <li><a href="https://www.dinamalar.com/weekly/kannamma/rowthira-veenai" className="link" data-english="rowthira veenai">    ரௌத்ர வீணை</a></li>
                  <li><a href="https://www.dinamalar.com/weekly/kannamma/nizhal-pesum-nizam" className="link" data-english="nizhal pesum nijam">    நிழல் பேசும் நிஜம்</a></li>
                  <li><a href="https://www.dinamalar.com/weekly/kannamma/vaname-ellai" className="link" data-english="vaname ellai">    வானமே எல்லை</a></li>
                </ul>
              </li>

              <li className="head"><a href="https://www.dinamalar.com/weekly/virunthinar-paguthi" className="link" data-english="virunthinar paguthi">விருந்தினர் பகுதி </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/nijakathai" className="link" data-english="nijakathai">நிஜக்கதை </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/pokkisham" className="link" data-english="pokkisham">பொக்கிஷம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/nalam" className="link" data-english="nalam">நலம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/sinthanai-kalam" className="link" data-english="sindhanai kalam">சிந்தனைக் களம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/chithra-mithra-tirupur" className="link" data-english="chithra mithra tirupur">சித்ரா...மித்ரா (திருப்பூர்) </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/thalaiyangam" className="link" data-english="thalayagam">தலையங்கம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/tech-dairy" className="link" data-english="tech dairy">டெக் டைரி </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/chithra-mithra-coimbatore" className="link" data-english="chithra mithra kovai">சித்ரா...மித்ரா (கோவை) </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/ilakkiyavathikalin-pakkankal-Literature-tamil-news" className="link" data-english="ilakiyavaadhiyin pakkangal"><b>இலக்கியவாதியின் பக்கங்கள்</b> </a></li>
              <ul>
                <li><a href="https://www.dinamalar.com/weekly/ilakkiyavathikalin-pakkankal/ezhuthalarudan-sila-nimidankal" className="link" data-english="ezhuthalaruran sila nimidankal">    எழுத்தாளருடன் சில நிமிடங்கள்</a></li>
                <li><a href="https://www.dinamalar.com/weekly/ilakkiyavathikalin-pakkankal/padaippaliyin-parvaiyil" className="link" data-english="padaippaliyin parvaiyil">    படைப்பாளியின் பார்வையில்</a></li>
              </ul>
              <li className="head"><a href="https://www.dinamalar.com/weekly/uraththa-kural" className="link" data-english="uraththa kural">உரத்த குரல் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/weekly/pattam" className="link" data-english="pattam">பட்டம் </a></li>
            </ul>
          </li>
        </ul>




      </div>


      <div className="sitemap-column">

        <ul className="sitemap shdbox">
          <li>

            <a href="https://www.dinamalar.com/malarkal" className="link" data-english="malargal inaippu malar"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63a12.188 12.188 0 00-3.55 7.63c1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38-.47.3-.91.63-1.34.98-.42-.34-.87-.67-1.33-.97.25-1.2.71-2.35 1.37-3.39zM12 15.45a12.11 12.11 0 00-3.06-3.2c-.13-.09-.27-.16-.4-.26.13.09.27.17.39.25A11.777 11.777 0 002 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45zm1.32 4.15c-.44.15-.88.27-1.33.37-.44-.09-.87-.21-1.28-.36-3.29-1.18-5.7-3.99-6.45-7.35 1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55a10.19 10.19 0 012.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4-.75 3.37-3.15 6.18-6.42 7.35zm-4.33-7.32c-.02-.01-.04-.03-.05-.04 0 0 .01 0 .01.01.01.01.02.02.04.03z"></path></svg>
              இணைப்பு மலர்</a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/vara-malar-weekly-magazine" className="link" data-english="vaara malar">வாரமலர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/siruvar-malar-childrens-magazine" className="link" data-english="siruvar malar">சிறுவர் மலர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/ariviyal-malar-science-articles" className="link" data-english="ariviyal malar">அறிவியல் மலர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/velai-vaippu-malar-job-placement-details" className="link" data-english="velai vaaipu malar">வேலை வாய்ப்பு மலர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/vivasaya-malar-agriculture-news-tamil-nadu" className="link" data-english="vivassaya malar">விவசாய மலர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/vaduda-malar-year-book" className="link" data-english="varuda malar">வருடமலர் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/malarkal/pongal-malar-tamil-nadu-pongal-festival" className="link" data-english="pongal malar">பொங்கல் மலர் </a></li>
            </ul>
          </li>
        </ul>

        <ul className="sitemap shdbox">
          <li>

            <a href="https://www.dinamalar.com/photos" className="link" data-english="photos"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>
              போட்டோ</a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/photos/today-photos" className="link" data-english="indraiya photo today photos">இன்றைய போட்டோ   </a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/world-tamilar-nri-album" className="link" data-english="nri album">NRI ஆல்பம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/pugai-pada-album" className="link" data-english="pugaipada album">புகைப்பட ஆல்பம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/cinema-gallery" className="link" data-english="cinema">சினிமா </a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/social-media-cards" className="link" data-english="cards">Cards </a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/cartoon-today" className="link" data-english="cartoons">கார்ட்டூன்ஸ்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/photos/web-stories" className="link" data-english="web stories"><b>வெப் ஸ்டோரீஸ் </b></a></li>
              <ul>
                <li><a href="https://www.dinamalar.com/photos/web-stories/food" className="link" data-english="unavu kurippukal">உணவு குறிப்புகள்</a></li>
                <li><a href="https://www.dinamalar.com/photos/web-stories/cinema" className="link" data-english="web stories cinema">சினிமா</a></li>
                <li><a href="https://www.dinamalar.com/photos/web-stories/health" className="link" data-english="nalam">நலம்</a></li>
                <li><a href="https://www.dinamalar.com/photos/web-stories/lifestyle" className="link" data-english="lifestyle">லைப் ஸ்டைல்</a></li>
                <li><a href="https://www.dinamalar.com/photos/web-stories/sports" className="link" data-english="vilayattu stories">விளையாட்டு</a></li>
                <li><a href="https://www.dinamalar.com/photos/web-stories/anmegam" className="link" data-english="aanmegam stories">ஆன்மிகம்</a></li>
              </ul>
            </ul>
          </li>
        </ul>

        <ul className="sitemap shdbox">
          <li>

            <a href="https://www.dinamalar.com/world-news-nri-ta" className="link" data-english="NRI"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 3l-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"></path></svg>
              உலக தமிழர் </a>
            <ul>
              <li className="head" ><a href="https://www.dinamalar.com/world-news-nri-ta" className="link" data-english=""><b>உலக தமிழர் செய்திகள் </b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/" className="link" data-english=""><b>அமெரிக்கா </b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/tamil-news" className="link" data-english="">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/temple" className="link" data-english="">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/sankankal" className="link" data-english="">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/tamil-radio" className="link" data-english="">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/programs" className="link" data-english="">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/indian-hotels" className="link" data-english="">     இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/united-states/tamil-news-websites" className="link" data-english="">     தமிழ் செய்தி இணையங்கள் </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe" className="link" data-english=""><b>ஐரோப்பா </b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/tamil-news" className="link" data-english="">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/temple" className="link" data-english="">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/sankankal" className="link" data-english="">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/tamil-radio" className="link" data-english="">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/programs" className="link" data-english="">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/indian-hotels" className="link" data-english="">     இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/europe/tamil-news-websites" className="link" data-english="">     தமிழ் செய்தி இணையங்கள் </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa" className="link" data-english=""><b>ஆப்பிரிக்கா </b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/tamil-news">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/temple">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/sankankal">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/tamil-radio">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/programs">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/indian-hotels">     இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/africa/tamil-news-websites">     தமிழ் செய்தி இணையங்கள்     </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf" className="link" data-english="Valaguda valaikuda"><b>வளைகுடா</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/tamil-news">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/temple">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/sankankal">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/tamil-radio">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/programs">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/indian-hotels">     இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/gulf/tamil-news-websites">     தமிழ் செய்தி இணையங்கள் </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia" className="link" data-english="asia"><b> ஆசியா</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/tamil-news">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/temple">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/sankankal">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/tamil-radio">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/programs">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/indian-hotels">      இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/asia/tamil-news-websites">     தமிழ் செய்தி இணையங்கள் </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia" className="link" data-english="australia"><b>ஆஸ்திரேலியா </b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/tamil-news">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/temple">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/sankankal">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/tamil-radio">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/programs">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/indian-hotels">      இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/australia/tamil-news-websites">     தமிழ் செய்தி இணையங்கள் </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore" className="link" data-english="singapore"> <b> சிங்கப்பூர் </b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/tamil-news">     செய்திகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/temple">      கோவில்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/sankankal">      தமிழ் சங்கங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/tamil-radio">      தமிழ் வானொலி </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/programs">      நிகழ்ச்சிகள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/indian-hotels">      இந்திய உணவகங்கள் </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-ta/singapore/tamil-news-websites">     தமிழ் செய்தி இணையங்கள் </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/world-news-nri-en" className="link" data-english="nri english"><b>NRI</b></a>
                <ul>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states" className="link" data-english="america en"><b>America </b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/united-states/indian-hotels">  Indian Restaurant </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/europe" className="link" data-english="europe en"><b>Europe</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/europe/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/europe/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/europe/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/europe/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/europe/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/europe/indian-hotels">  Indian Restaurant </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/africa" className="link" data-english="africa en"><b>Africa</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/africa/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/africa/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/africa/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/africa/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/africa/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/africa/indian-hotels">  Indian Restaurant </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf" className="link" data-english="gulf"><b>Gulf</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/gulf/indian-hotels">  Indian Restaurant </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/asia" className="link" data-english="asia english"><b>Asia</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/asia/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/asia/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/asia/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/asia/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/asia/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/asia/indian-hotels">  Indian Restaurant </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/australia" className="link" data-english="australia english"><b>Australia</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/australia/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/australia/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/australia/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/australia/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/australia/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/australia/indian-hotels">  Indian Restaurant </a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/" className="link" data-english="singapore english"><b>Singapore</b></a>
                    <ul>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/news">   News </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/temple">   Temple </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/sankankal">   Tamil Assosiation </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/tamil-radio">   Tamil Radio </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/programs">   Events </a></li>
                      <li><a href="https://www.dinamalar.com/world-news-nri-en/singapore/indian-hotels">Indian Restaurant </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/other-state-tamil-news/" className="link" data-english="pira maanila "><b>பிறமாநில தமிழர் செய்திகள்</b></a></li>
              <ul>
                <li><a href="https://www.dinamalar.com/other-state-tamil-news/new-delhi">  புதுடில்லி</a></li>
                <li><a href="https://www.dinamalar.com/other-state-tamil-news/other-state">   பிற மாநிலம்
                </a></li>
              </ul>
            </ul>

          </li>
        </ul>

        <ul className="sitemap shdbox">
          <li>

            <a href="https://www.dinamalar.com/special" className="link" data-english="specials"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.68 13.69L12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72A7.96 7.96 0 0020 10zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 15l-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1L12 19z"></path></svg>
              ஸ்பெஷல்  </a>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/special/lifestyle" className="link" data-english="specials lifestyle "><strong>லைப் ஸ்டைல்</strong></a></li>
              <ul>
                <li><a href="https://www.dinamalar.com/special/lifestyle/beauty" className="link" data-english="specials alagu"> அழகு</a></li>
                <li><a href="https://www.dinamalar.com/special/lifestyle/health" className="link" data-english="specials aarokiyam"> ஆரோக்கியம்</a></li>
                <li><a href="https://www.dinamalar.com/special/lifestyle/fashion" className="link" data-english="specials fashion"> பேஷன்</a></li>
                <li><a href="https://www.dinamalar.com/special/lifestyle/food" className="link" data-english="specials unavu food"> உணவு</a></li>
                <li><a href="https://www.dinamalar.com/special/lifestyle/tours" className="link" data-english="sutrula tours"> சுற்றுலா</a></li>
                <li><a href="https://www.dinamalar.com/special/lifestyle/events" className="link" data-english="nigalvugal"> நிகழ்வுகள்</a></li>
                <li><a href="https://www.dinamalar.com/special/lifestyle/trends" className="link" data-english="trends"> டிரெண்ட்ஸ்</a></li>
              </ul>
              <li className="head"><a href="https://www.dinamalar.com/special/technology" className="link" data-english="technology"><strong> டெக்னாலஜி</strong></a></li>
              <ul>
                <li><a href="https://www.dinamalar.com/special/technology/smartphone-and-gadgets" className="link" data-english="smartphone and gadgets">ஸ்மார்ட்போன் & கேட்ஜெட்ஸ் </a></li>
                <li><a href="https://www.dinamalar.com/special/technology/startup" className="link" data-english="startups">ஸ்டார்ட்அப்கள்</a></li>
                <li><a href="https://www.dinamalar.com/special/technology/future-technology" className="link" data-english="varungala varungaala thozhilnutpam future technology">வருங்கால தொழில்நுட்பம்</a></li>
              </ul>
              <li className="head"><a href="https://www.dinamalar.com/special/useful-information" className="link" data-english="arindhu kolvom"><b>அறிந்துகொள்வோம்</b></a></li>
            </ul>
          </li>

        </ul>

        <ul className="sitemap shdbox ">
          <li>

            <p className="link" data-english="Sub domain">  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1h2v1H2v12h1.5v1h-2l-.5-.5v-13l.5-.5zm6 6h-2L5 6.5v-2l.5-.5h2l.5.5v2l-.5.5zM6 6h1V5H6v1zm7.5 1h-3l-.5-.5v-3l.5-.5h3l.5.5v3l-.5.5zM11 6h2V4h-2v2zm-3.5 6h-2l-.5-.5v-2l.5-.5h2l.5.5v2l-.5.5zM6 11h1v-1H6v1zm7.5 2h-3l-.5-.5v-3l.5-.5h3l.5.5v3l-.5.5zM11 12h2v-2h-2v2zm-1-2H8v1h2v-1zm0-5H8v1h2V5z"></path></svg>
              Sub Domain </p>
            <ul>
              <li className="head"><a href="https://ipaper.dinamalar.com/" target="_blank" className="link" data-english="ipaper">iPaper </a></li>
              <li className="head"><a href="https://cinema.dinamalar.com/" target="_blank" className="link" data-english="cinema"> சினிமா</a></li>
              <li className="head"><a href="https://temple.dinamalar.com/" target="_blank" className="link" data-english="kovilgal">கோயில்கள் </a></li>
              <li className="head"><a href="https://books.dinamalar.com/" target="_blank" className="link" data-english="books">புத்தகங்கள் </a></li>
              <li className="head"><a href="https://subscription.dinamalar.com/" target="_blank" className="link" data-english="subscription">Subscription </a></li>
            </ul>
          </li>

        </ul>

        <ul className="sitemap shdbox">
          <li>

            <p className="link" data-english="micro site">     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H3zm0 2h18v16H3V4zm3 3h2v2H6V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"></path>
            </svg>Micro Sites </p>
            <ul>
              <li className="head"><a target="_blank" href="https://election.dinamalar.com/lok-sabha-election-results-2024.html" className="link" data-english="lok sabha election">லோக்சபா தேர்தல் 2024 </a></li>
              <li className="head"><a target="_blank" href="https://specials.dinamalar.com/paris-olympics-2024/search.php" className="link" data-english="paris olympics">பாரிஸ்  ஒலிம்பிக்ஸ் 2024 </a></li>
            </ul>
          </li>

        </ul>

        <ul className="sitemap shdbox">
          <li>

            <p className="link" data-english="mattravai matravai">   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height=".8em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M10 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8l-6-4z"></path>
            </svg>மற்றவை </p>
            <ul>
              <li className="head"><a href="https://www.dinamalar.com/podcast" className="link" data-english="audio podcast"> ஆடியோ</a></li>
              <li className="head"><a href="https://www.dinamalar.com/archive" className="link" data-english="archive mundhaya padhippu"> முந்தய பதிப்புகள்</a></li>
              <li className="head"><a href="https://www.dinamalar.com/kadal-thamarai-tvr-history" className="link" data-english="kadal thamarai">கடல் தாமரை </a></li>
              <li className="head"><a href="https://www.dinamalar.com/thirukural" className="link" data-english="thirukural thirukkural">திருக்குறள்  </a></li>
              <li className="head"><a href="https://specials.dinamalar.com/tariff/" className="link" data-english="Advertisement Tariff">Advertisement Tariff </a></li>
              <li className="head"><a href="https://www.dinamalar.com/vasagarcomments" className="link" data-english="vasagar kadidham">வாசகர் கடிதம் </a></li>
              <li className="head"><a href="https://www.dinamalar.com/international-edition"className="link" data-english="international edition">International Edition </a></li>
              <li className="head"><a href="https://www.dinamalar.com/dinamalar-publications"className="link" data-english="dinamalar publications">Dinamalar Publications </a></li>
              <li className="head"><a href="https://www.dinamalar.com/search"className="link" data-english="search">Search </a></li>
              <li className="head"><a href="https://www.dinamalar.com/contact-us"className="link" data-english="contact us">Contact US </a></li>
              <li className="head"><a href="https://www.dinamalar.com/terms-and-conditions"className="link" data-english="terms and condition">Terms and Conditions </a></li>
              <li className="head"><a href="https://www.dinamalar.com/usercomments"className="link" data-english="user comments">User Comments </a></li>
              <li className="head"><a href="https://www.dinamalar.com/ourapps"className="link" data-english="mobile apps"><b>Mobile apps</b></a></li>
              <ul>
                <li><a href="https://www.dinamalar.com/ourapps?app=android"className="link" data-english="apps dinamalar android apps">Dinamalar Android App</a></li>
                <li><a href="https://www.dinamalar.com/ourapps?app=iphone"className="link" data-english="Dinamalar iPhone App">Dinamalar iPhone App</a></li>
                <li><a href="https://www.dinamalar.com/ourapps?app=ipaper"className="link" data-english="Dinamalar iPaper">Dinamalar iPaper</a></li>
                <li><a href="https://www.dinamalar.com/ourapps?app=calendar"className="link" data-english="Dinamalar Calender">Dinamalar Calender</a></li>
                <li><a href="https://www.dinamalar.com/ourapps?app=alexa"className="link" data-english="Amazon Alexa">Amazon Alexa</a></li>
              </ul>
              <li className="head"><a href="https://www.dinamalar.com/usercomments"className="link" data-english="Recent comments">Recent comments </a></li>
              <li className="head"><a href="https://auth.dinamalar.com/profile/profile"className="link" data-english="Profile">Profile </a></li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
    </div>
  
  );
  
}



export default Sitemap;