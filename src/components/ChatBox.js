import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ChatBox extends React.Component {
    render() {
        return (
                <div className="ChatBox">
                    <div name="">
                        <TextField name="user_name" onChange={this.props.onTextChange} className="" placeholder="Name"/>
                        <br/>
                        <TextField name="profile_image" onChange={this.props.onTextChange} className="" placeholder="Profile Image URL"/>
                    </div>
                    <TextField rows="4" multiLine="true" name='text' className="" onChange={this.props.onTextChange} />
                    <Button variant="contained" primary="true" label="Send" className="" onClick={this.props.onButtonClick} />
                </div>
        );
    }
}

export default ChatBox;