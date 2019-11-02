import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './InputNumber.scss'

class InputNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            innerValue: '',
            reg: /^([-+])?\d+(\.\d+)?$/,
            message: "必须输入数字！"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
    };
    get propsValue(){
        return 'value' in this.props;
    }
    get value(){
        return this.propsValue ? this.props.value : this.state.innerValue;
    }
    handleChange = (e) => {
        if(!this.propsValue){
            this.setState({
                innerValue: e.target.value
            })
        }
        this.props.onChange(e.target.value);
    };
    render(){
        return (
            <div className='input-div'>
                <input className='input-form'
                       value={this.value}
                       onChange={this.handleChange}
                       autoFocus='autoFocus'
                />
                <p className='input-msg'>{this.value&&!this.state.reg.test(this.value)
                && this.state.message}</p>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            innerValue: this.props.defaultValue
        })
    }
}

export default InputNumber
