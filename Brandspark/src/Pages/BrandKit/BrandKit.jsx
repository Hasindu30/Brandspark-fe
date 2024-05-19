import './BrandKit.css'
import icon1 from '../../assets/BrandKit/icon1.png'
import icon2 from '../../assets/BrandKit/icon2.png'
import icon3 from '../../assets/BrandKit/icon3.png'

const BrandKit = () => {

    return (
        <div>

            <div className="bkheadertext">
                <h1>Make Your Brand Shine with BrandSpark's Brand Kit</h1>
                <p>Access 300+ branded templates customized to your logo, colors, and fonts. Elevate your marketing materials and boost your business!</p>
                <input className="bkcompany" type="text" placeholder="Enter your company name" />
                <button className='bkgetstart'>Let's make a brand kit!</button>
            </div>

            <div className="branding-container">
                <div className="icon-container">
                    <div className="icon"></div>
                    <img src={icon1} alt=""/>
                    <h2>Your All-in-One Solution</h2>
                    <p>Providing everything you require conveniently in a single location</p>
                </div>

                <div className="icon-container">
                    <div className="icon"></div>
                    <img src={icon2} alt=""/>
                    <h2>Unique Layouts</h2>
                    <p>Enjoy easy-to-use layouts for your field, with pictures and text that fit your brand</p>
                </div>

                <div className="icon-container">
                    <div className="icon"></div>
                    <img src={icon3} alt=""/>
                    <h2>Easy Designing</h2>
                    <p>Simply change your items and make new designs when you wish</p>
                </div>
            </div>


            <div className= "container">
                <h1>All-in-One marketing toolkit</h1>
                <p>BrandSpark's BrandKit is like having your own designer. As a member, you can change and get new designs anytime — all from one easy-to-use dashboard.</p>
            </div>
            

        </div>
    )
}

export default BrandKit;