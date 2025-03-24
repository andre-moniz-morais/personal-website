import '../styles/general.css';
import open_arrow from "../assets/open_arrow.png";

function HorizontalList(props) {
    return (
        <div className="general--container">
            <h1 className='title'>{props.title}</h1>
            <div className="horizontal_scroll--container">
                {
                    props.list_projects.map((project) => 
                        <div className='horizontal_scroll_item'>
                            <img src={project.image} alt="skillskope logo" className='horizontal_scroll_item--image'/>
                            <div className='horizontal_scroll_item--description'>
                                <h2 className='horizontal_scroll_item--description__title'>{project.name}</h2>
                                <div className='horizontal_scroll_item--description__text'>
                                    {project.description}
                                </div>
                                {
                                    (project.external_link) ?
                                        <div className='horizontal_scroll_item--description__external'>
                                            <a href={project.external_link.link} target='_blank' style={{backgroundImage:`url(${open_arrow})`}}>{project.external_link.name}</a>
                                        </div>
                                    :
                                        null
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default HorizontalList;