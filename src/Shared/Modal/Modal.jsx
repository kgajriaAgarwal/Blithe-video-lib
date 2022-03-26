import react from 'react';
import './Modal.css'

export const Modal = () =>{
    return(
        // <!-- Modal -->
        <div id="my-modal" className="bg-modal display-block">
        <div className="modal-content">
            <div className="title-container">
                <p className="text-md">Modal title</p>
                <span className="close">&times;</span>
            </div>
            <hr/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <div className="btn-container">
                <button className="btn btn-sm btn-primary">ok !!</button>
            </div>
        </div>
    </div>
    );
}