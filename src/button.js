function Button(props){
    return <button className="btn btn-sm btn-danger w-100" onClick={props.click}>{props.value}</button>
}

export default Button;