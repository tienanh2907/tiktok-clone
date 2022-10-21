import Header from "../components/Header"

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className='content'>{children}</div>
        </>
    )
}

export default HeaderOnly;