function Book(props: any) {
    return (
        <div>
            <h1>{`this book Name is a ${props.name}`}</h1>
            <h1>{`this book Content is a ${props.content}`}</h1>
        </div>
    )
}

export default Book;