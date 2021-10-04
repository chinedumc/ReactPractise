function Joke(props) {
    return (
        <div>
            <h3>Question: { props.jokey.question }</h3>
            <h3>Answer: { props.jokey.punchLine }</h3>
            <hr/>
        </div>
    )
}

export default Joke