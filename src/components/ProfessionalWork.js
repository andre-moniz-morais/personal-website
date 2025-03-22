import '../styles/ProfessionalWork.css';
import '../styles/general.css';
import skillskope_img from "../assets/skillskope.png";
import synertics_img from "../assets/synertics.png";
import unlsolu_img from "../assets/unlimited_solutions.png";

function ProfessionalWork() {
    return (
        <div className="pw--container">
            <h1 className='title'>Professional Work</h1>
            <div className="horizontal_scroll--container">
                <div className='horizontal_scroll_item'>
                    <img src={skillskope_img} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Skillskope</h2>
                        <div className='horizontal_scroll_item--description__time'>2020-2023</div>
                        <div className='horizontal_scroll_item--description__text'>
                            Co-Founder & Lead Developer.
                            Led the creation of a platform to help students discover career paths.
                            Managed development and strategy.
                            The company has since closed, but valuable lessons were learned.
                        </div>
                    </div>
                </div>
                <div className='horizontal_scroll_item'>
                    <img src={synertics_img} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Synertics</h2>
                        <div className='horizontal_scroll_item--description__time'>2023-current</div>
                        <div className='horizontal_scroll_item--description__text'>
                            Full-Stack Software Engineer.
                            Sole developer at Synertics, building and maintaining software for the renewable energy PPA market.
                            Responsible for the entire tech stack, ensuring scalability and performance.
                        </div>
                    </div>
                </div>
                <div className='horizontal_scroll_item'>
                    <img src={unlsolu_img} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                    <div className='horizontal_scroll_item--description'>
                        <h2 className='horizontal_scroll_item--description__title'>Unlimited Solutions</h2>
                        <div className='horizontal_scroll_item--description__time'>2024-current</div>
                        <div className='horizontal_scroll_item--description__text'>
                            Co-Founder.
                            Currently building a software development company with two partners.
                            Focused on delivering custom software solutions to businesses, handling both technical and strategic aspects of the startup.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalWork;