function ContactCard (props) {
    return (
        <div className="contact-card">
            <img style={{display: !props.contact.imgUrl && "none"}} src={ props.contact.imgUrl } />
            <h3 style={{color:!props.contact.imgUrl && "red"}}> { props.contact.name } </h3>
            <p>Phone: { props.contact.phone }</p>
            <p>Email: { props.contact.email }</p>
        </div>
    )
}

export default ContactCard