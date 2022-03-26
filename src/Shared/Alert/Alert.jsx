import react from 'react';
import { useAlert } from '../../Context';
// import './Alert.css';

export const Alert = () => {

    const {alertContent , setAlertContent} = useAlert();
    //alertContent {id: 1, isShow: true, type: 'ERROR', content: 'this is an ultimate error meassge'}

    return(
        <div className={`snackbar ${alertContent?.isShow?'snackbar-class':''}`} data-js="snackbar">
            <div className={`alert ${alertContent?.type === 'ERROR'? 'alert-danger': 'alert-success'}`}>
                <h4>{`${alertContent?.type === 'ERROR'? 'Error': 'Success'} Message!!!`}</h4>
                <p>{alertContent?.content}</p>
            </div>
        </div>
    );
}