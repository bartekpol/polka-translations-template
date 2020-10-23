import React from 'react';

class Input extends React.Component {

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
        let {type, id, label, styles, ref} = this.props;
        let className = 'form-control input';
        if(this.state.value.length > 0)
            className += ' filled';
        if(this.state.focused)
            className += ' focused';

        return (
            <div className={className} ref={this.elRef} style={styles}>
                <label htmlFor={id}>{label}</label>
                <input type={type} name={id} id={id} value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} ref={ref}/>
            </div>
        )
    }
}

export default Input;