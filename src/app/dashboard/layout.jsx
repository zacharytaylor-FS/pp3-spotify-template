import Nav from '../../ui/navigation/NavBar'
export default function Layout({children}) {
    return (
        <>
        <Nav />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow md:overflow-y-auto md:p-12">
                Dashboard Layout
                {children}
            </div>
        </div>
        </>
    )
}