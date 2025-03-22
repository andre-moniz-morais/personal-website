import '../styles/ProfessionalWork.css';
import '../styles/general.css';
import codepen1 from "../assets/codepen1.png";
import cardano_fields from "../assets/cardano_fields.png";
import death_escape from "../assets/death_escape.png";
import youtube_automator from "../assets/youtube_automator.png";

function PersonalProjects() {
    return (
        <div className="pw--container">
            <h1 className='title'>Personal Projects</h1>
            <div className="horizontal_scroll--container">
                <div className='horizontal_scroll_item'>
                    <img src={codepen1} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Codepen slider</h2>
                        <div className='horizontal_scroll_item--description__text'>
                            It was a 3-hour challenge I took after seeing a tiktok short videos joking
                            about the designer expectations VS developer reality.
                        </div>
                        <div className='horizontal_scroll_item--description__external'>
                            <a href="https://codepen.io/Andre-Morais-the-encoder/pen/vYoQXmd" target='_blank'>Pen</a>
                        </div>
                    </div>
                </div>
                <div className='horizontal_scroll_item'>
                    <img src={cardano_fields} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Cardano fields</h2>
                        <div className='horizontal_scroll_item--description__text'>
                            A cardano play-2-earn browser game that, although having some players, didn't have enough traction to start selling the NFT collection.
                            The game was fully working. It's currently deactivated.
                        </div>
                        <div className='horizontal_scroll_item--description__external'>
                        {/* https://x.com/CardanoFields */}
                        </div>
                    </div>
                </div>
                <div className='horizontal_scroll_item'>
                    <img src={death_escape} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Death escape</h2>
                        <div className='horizontal_scroll_item--description__text'>
                            A Cardano-powered play-2-earn game with a post apocalyptic style. It was developed in Next.js with connection with Cardano blockchain.
                        </div>
                    </div>
                    <div className='horizontal_scroll_item--description__external'>
                    {/* http://death-escape.vercel.app */}
                    </div>
                </div>
                <div className='horizontal_scroll_item'>
                    <img src={youtube_automator} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Youtube automator</h2>
                        <div className='horizontal_scroll_item--description__text'>
                            (under construction) A way of create youtube videos effortlessly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalProjects;