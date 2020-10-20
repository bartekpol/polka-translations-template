import React from 'react';

class TextArea extends React.Component {

    state = {value: '', focused: false};

    elRef = React.createRef(); 

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    handleFocus = () => {
        this.setState({focused: true});
    }
    
    handleBlur = () => {
        this.setState({focused: false});
    }
    render() {
        let {id, label, styles} = this.props;
        let className = 'form-control textarea';
        if(this.state.value.length > 0)
            className += ' filled';
        if(this.state.focused)
            className += ' focused';

        return (
            <div className={className} ref={this.elRef} style={styles}>
                <label htmlFor={id}>{label}</label>
                <textarea name={id} id={id} value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
            </div>
        )
    }
}

export default TextArea;