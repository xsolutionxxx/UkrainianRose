import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">

                </main>
                <Footer />
            </div>
        </>
    );
}