import React from 'react';
import './Toast.css';

export const Toast = () => {
    return(
        <div className="snackbar snackbar-class" data-js="snackbar">
            <h2>Toast/ Notify /snackbar</h2>
            <p>This is my snackbar message !! This is my snackbar message !! This is my snackbar message !! This is my
                snackbar message !!</p>
            <div className="snackbar-btn-div">
                <button className="btn btn-sm btn-primary">ok !!</button>
            </div>
        </div>
    );
}