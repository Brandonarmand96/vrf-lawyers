function Funds() {
    return (
        <div className="flex items-center justify-center">
            <form className="form">
                <h1 className="title h-title">Global Giving Funds Requisition</h1>
                <div className="form-m">
                    <label className="title">Email</label><br />
                    <input className="odd" type="email" id="email" />
                </div>
                <div className="form-m">
                    <label className="title">Who is Requesting</label>
                    <input className="odd" list="names" id="requestName" />
                    <datalist id="names">
                        <option value="Shufai Blaise Berinyuy" />
                        <option value="Joseph W. Akuwiyadze" />
                        <option value="Asu Takem Alfred" />
                        <option value= "Neba Justus Ambe" />
                        <option value= "Ndohmunang Nickson Mbimbui" />
                        <option value="Fangyong Patrick Yong" />
                        <option value= "Che veronica Fen" />
                        <option value= "Ngwabo Kenneth Suh" />
                        <option value= "Njobam cyril Ayori" />
                        <option value= "Lukong Augustine Yuven" />
                        <option value= "Affah Ndetan Victor" />
                    </datalist>
                </div>
            </form>
        </div>
    )
}

export default Funds
