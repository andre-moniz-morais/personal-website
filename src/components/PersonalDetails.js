import andre_pfp from '../assets/andre.jpeg';
import instagram_icon from '../assets/instagram-icon.png';
import twitter_icon from '../assets/twitter-icon.png';
import linkedin_icon from '../assets/linkedin-icon.png';
import mail_icon from '../assets/mail-icon.png';
import youtube_icon from '../assets/youtube-icon.png';
import github_icon from '../assets/github-icon.png';
import codepen_icon from '../assets/codepen-icon.png';
import '../styles/PersonalDetails.css';

function PersonalDetails() {

    const open_link = (url) => {

    }

    return (
        <div className="pd--container">
            <img
                src={andre_pfp}
                alt="Andre"
                className="pd_pfp"
            />

            <div className='pd_separator'></div>

            <div className='pd_details--container'>
                <div className='pd_details_socials'>
                    <a href="https://www.instagram.com/andremorais12/" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + instagram_icon + ")" }}></a>
                    <a href="https://x.com/andrefmmorais" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + twitter_icon + ")" }}></a>
                    <a href="https://www.linkedin.com/in/andre-moniz-morais/" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + linkedin_icon + ")" }}></a>
                    <a href="mailto:andre.moniz.morais@gmail.com" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + mail_icon + ")" }}></a>
                    <a href="https://www.youtube.com/@andremorais1997" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + youtube_icon + ")" }}></a>
                    <a href="https://github.com/andre-moniz-morais" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + github_icon + ")" }}></a>
                    <a href="https://codepen.io/Andre-Morais-the-encoder" target='_blank' className='pd_details_socials--button' style={{ backgroundImage: "url(" + codepen_icon + ")" }}></a>
                </div>

                <div className='pd_details_text'>
                    I'm a full-stack developer with expertise in PHP, Python, JavaScript, jQuery, and various database query languages.
                    Formerly the founder of Skillskope, I now work as an employee while building my new company, Unlimited Solutions.
                    Beyond coding, I have skills in Photoshop, Illustrator, and video creation for my tech-focused YouTube channel.
                    Passionate about innovation, I specialize in developing efficient, scalable solutions across multiple technologies.
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails;