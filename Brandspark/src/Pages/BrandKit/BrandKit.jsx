import React from 'react'
import './BrandKit.css'
import icon1 from '../../assets/BrandKit/icon1.png'
import icon2 from '../../assets/BrandKit/icon2.png'
import icon3 from '../../assets/BrandKit/icon3.png'
import nike1 from '../../assets/BrandKit/nike1.jpg'
import nike2 from '../../assets/BrandKit/nike2.jpg'
import nike3 from '../../assets/BrandKit/nike3.jpg'
import { Link } from 'react-router-dom'
import FAQ from './FAQs/FAQ'
import MT from './MarketingTools/MT'
import Navbar from '../../Components/Navbar/Navbar'

const BrandKit = () => {

    return (
        <div>
            <Navbar/>
            <div className="bkheadertext">
                <h1>Make your brand shine with BrandSpark's Brand Kit</h1>
                <p>Access 300+ branded templates customized to your logo, colors, and fonts. Elevate your marketing materials and boost your business!</p>
                    <input className='bkcompany' type="text" placeholder='Enter Your Company Name'/>
                    <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Generator'><button className='bkgetstart'>Let's make a brand kit!</button></Link>
                </div>

            <div className="branding-container">
                <div className="icon-container">
                    <div className="icon"></div>
                    <img src={icon1} alt=""/>
                    <h2>All-in-one solution</h2>
                    <p>Providing everything you require conveniently in a single location</p>
                </div>

                <div className="icon-container">
                    <div className="icon"></div>
                    <img src={icon2} alt=""/>
                    <h2>Unique layouts</h2>
                    <p>Enjoy easy-to-use layouts for your field, with pictures and text that fit your brand</p>
                </div>

                <div className="icon-container">
                    <div className="icon"></div>
                    <img src={icon3} alt=""/>
                    <h2>Easy designing</h2>
                    <p>Simply change your items and make new designs when you wish</p>
                </div>
            </div>

            <div className= "mtcontainer">
                <h1>All-in-one marketing toolkit</h1>
                <p>BrandSpark's BrandKit is like having your own designer. As a member, you can change and get new designs anytime — all from one easy-to-use dashboard.</p>
                <MT></MT>
            </div>

            <div className="brand-start-container">
                <h1>Build your brand — reach new heights.</h1>
                <input className="bkcompany" type="text" placeholder="Enter your company name" />
                <Link style={{textDecoration:'none',fontFamily:'inherit',color:'inherit',}} to='/Generator'>
                <button className="bkgetstart">Get started</button>
                </Link>
            </div>

            <div className="bkheadertext">
                <h1>Discover how BrandSpark's Brand Kit works:</h1>
            </div>

            <div className="logomaker-brandkit">
                <img src={nike1} alt="" />
                <div className="brandkitleft">
                    <h2><span>01.</span> Build your brand’s look</h2>
                    <p>Start telling your brand’s story with a logo that grabs attention. With BrandSpark, you can upload your logo or make a new one that shows off what you’re all about. Then, pick colors, fonts, and pictures that show your style and make your brand stand out.</p>
                    <p>Ready to begin? Visit our <Link style={{textDecoration:'none',fontFamily:'inherit',color:'#5340ff',}} to='/Logomaker'>logo maker</Link> to create your unique logo today.</p>
                </div>
            </div>

            <div className="logomaker-brandkit">
                <div className="brandkitleft">
                    <h2><span>02.</span> Craft your unique brand</h2>
                    <p>BrandSpark integrates your logo colors into our Brand Kit, providing you with matching fonts, patterns, and industry-specific images and copy. Say goodbye to building your brand identity from scratch or using generic templates!</p>
                </div>
                <img src={nike2} alt="" />
            </div>

            <div className="logomaker-brandkit">
                <img src={nike3} alt="" />
                <div className="brandkitleft">
                    <h2><span>03.</span> Boost your business easily</h2>
                    <p>Got ideas for your brand? Our Brand Kit tool turns them into cool stuff like flyers and posters in no time, and you don’t need a designer. Grab your designs in lots of formats, even ones ready for printing.</p>
                    <p>And there’s more – the Brand Kit hooks you up with special deals worth over $3,000 to speed up all you do.</p>
                </div>
            </div>
            
            <div>
                <FAQ></FAQ>
            </div>

            <div className="cta-container">
                <div className="cta-left">
                    <h1>Ready to start growing your business?</h1>
                    <p>Use BrandSpark's AI-powered platform to build a brand that your customers will love.</p>
                </div>
                <div className="cta-input-container">
                    <input type="text" placeholder="Enter your company name" />
                    <button className="btn">Get started</button>
                </div>
            </div>

        </div>
    )
}

export default BrandKit;