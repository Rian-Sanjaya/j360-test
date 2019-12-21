import React from 'react';
import './style/style.css'
import whileLogo from './images/white-logo.svg'
import pilihanTerlengkap from './images/pilihan_terlengkap.svg'
import cicilan12x from './images/cicilan_12.svg'
import tigaEnamVirtual from './images/360_virtual.svg'
import unit1 from './images/unit1.jpg'
import unit2 from './images/unit2.jpg'
import unit3 from './images/unit3.jpeg'
import footerLogo from './images/footer-logo-white.svg'
import unitData from './unit.json'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="navigation">
          <div className="logo-nav">
            <img src={whileLogo} alt="logo" className="nav-logo"></img>
          </div>
          <ul>
            <li><a href="/">Home</a> </li>
            <li><a href="/">Special</a> </li>
            <li><a href="/">Recommendation</a> </li>
            <li><a href="/">Article</a> </li>
            <li><a href="/">Footer</a> </li>
          </ul>
        </nav>

        <div className="home">
          <div>
            #1 Specialis Sewa Apartemen Jakarta
          </div>
        </div>

        <div className="titipkan">
          <button>Titipkan Unit</button>
        </div>

        <div className="special">
          <div className="sp-unit">
            <div className="sp-img-container">
              <img className="sp-img" src={pilihanTerlengkap} alt="Pilihan Terlengkap" />
            </div>
            <div className="sp-title">Pilihan Terlengkap</div>
            <div className="sp-desc">Lebih dari 8000 unit tersedia</div>
          </div>
          <div className="sp-unit">
            <div className="sp-img-container">
              <img className="sp-img" src={cicilan12x} alt="Cicilan 12x" />
            </div>
            <div className="sp-title">Cicilan 12x</div>
            <div className="sp-desc">Bayar bulanan dengan / tanpa kartu kredit</div>
          </div>
          <div className="sp-unit">
            <div className="sp-img-container">
              <img className="sp-img" src={tigaEnamVirtual} alt="360 Virtual Tour" />
            </div>
            <div className="sp-title">360 Virtual Tour</div>
            <div className="sp-desc">Foto lengkap dan representatif</div>
          </div>
        </div>

        <div className="rekomendasi">
          <div className="rk-unit">
            <div className="rk-img-container">
              <img className="rk-img" src={unit1} alt="unit1" />
            </div>
            <div className="rk-title">{unitData[0].title}</div>
            <div className="rk-desc">{`${unitData[0].bedroom} Bedrooms, ${unitData[0].bathroom} Bathroom`}</div>
            <div className="rk-sub-desc">
              <span className="rk-span">{unitData[0].furnished === 'full' ? 'Full Furnished' : unitData[0].furnished === 'semi' ? 'Semi Furnished' : 'Non Furnished'}</span>
              <span>{`${unitData[0].area}m2`}</span>
            </div>
            <div className="rk-sub-desc2">
              <span className="rk-span">{`Tower ${unitData[0].tower}`}</span>
              <span>{`Lantai ${unitData[0].floor}`}</span>
            </div>
          </div>
          <div className="rk-unit">
            <div className="rk-img-container">
              <img className="rk-img" src={unit2} alt="unit2" />
            </div>
            <div className="rk-title">{unitData[1].title}</div>
            <div className="rk-desc">{`${unitData[1].bedroom} Bedrooms, ${unitData[1].bathroom} Bathroom`}</div>
            <div className="rk-sub-desc">
              <span className="rk-span">{unitData[1].furnished === 'full' ? 'Full Furnished' : unitData[1].furnished === 'semi' ? 'Semi Furnished' : 'Non Furnished'}</span>
              <span>{`${unitData[1].area}m2`}</span>
            </div>
            <div className="rk-sub-desc2">
              <span className="rk-span">{`Tower ${unitData[1].tower}`}</span>
              <span>{`Lantai ${unitData[1].floor}`}</span>
            </div>
          </div>
          <div className="rk-unit">
            <div className="rk-img-container">
              <img className="rk-img" src={unit3} alt="unit3" />
            </div>
            <div className="rk-title">{unitData[2].title}</div>
            <div className="rk-desc">{`${unitData[2].bedroom} Bedrooms, ${unitData[2].bathroom} Bathroom`}</div>
            <div className="rk-sub-desc">
              <span className="rk-span">{unitData[2].furnished === 'full' ? 'Full Furnished' : unitData[2].furnished === 'semi' ? 'Semi Furnished' : 'Non Furnished'}</span>
              <span>{`${unitData[2].area}m2`}</span>
            </div>
            <div className="rk-sub-desc2">
              <span className="rk-span">{`Tower ${unitData[2].tower}`}</span>
              <span>{`Lantai ${unitData[2].floor}`}</span>
            </div>
          </div>
        </div>

        <div className="article">
          <div className="title">Sewa Apartemen Jakarta</div>
          <div className="content">
            <div className="col1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="col2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className="button">
            <button>Readmore</button>
          </div>
        </div>

        <div className="footer">
          <div className="col1">
            <img src={footerLogo} alt="fotter logo" className="footer-logo"></img>
            <div className="address">
              <div style={{ fontWeight: 600 }}>PT. Vidi Vici Digital</div>
              <div>Ruko Komplek Business Park Blok AB-6</div>
              <div>Jl. Raya Meruya ilir no 88,</div>
              <div>Kebon Jeruk, Jakarta Barat</div>
              <div>Jakarta 11620, Indonesia</div>
            </div>
          </div>
          <div className="col2">
            <div style={{ fontWeight: 600, color: '#fff', fontSize: '16px' }}>Bantuan</div>
            <div><a href="/">Sewakan Apartemen Anda</a></div>
            <div><a href="/">Syarat &amp; Ketentuan Jendela360</a></div>
            <div><a href="/">Panduan Penyewa</a></div>
            <div><a href="/">Panduan Pemilik</a></div>
            <div><a href="/">Hubungi Kami</a></div>
          </div>
          <div className="col3">
            <div style={{ fontWeight: 600, color: '#fff', fontSize: '16px', marginBottom: '10px' }}>Customer Service</div>
            <div style={{ color: '#fff', fontSize: '20px', marginBottom: '10px'  }}>0815-11-360360</div>
            <div style={{ color: '#fff', fontSize: '18px', marginBottom: '10px'  }}>Senin - Minggu, 07.00-21.00</div>
            <div><a href="/" style={{ color: '#fff', fontSize: '14px' }}>contact@jendela360.com</a></div>
            <div><a href="/" style={{ color: '#fff', fontSize: '14px' }}>0815-11-360360</a></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
