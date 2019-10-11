import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Projekt Rubrik - {id}</span>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi officiis vero repudiandae provident debitis, ducimus eos beatae nam voluptatibus nobis hic et autem vitae earum aliquam quia facilis dolorem laboriosam.
                    </p>
                 </div>  
                 <div className="card-action gret lighten-4-text">
                     <div>Skriven av Rebecca Kling</div>
                     <div>2 September, kl:18</div>
                 </div>
            </div>
        </div> 
    )
}

export default ProjectDetails
  