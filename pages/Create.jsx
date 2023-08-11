import "../src/App.css"


export default function Create(){
    return(
        <div className="content-section">
            <form>

                <div className="details-info">
                    <input type="text" placeholder="Enter title"></input>
                    <br></br>
                    <input type="text" placeholder="Enter deadline"></input>
                    <br></br>
                    <textarea name="description" id="" cols="40" rows="5" placeholder="Description"></textarea>
                    <br></br>
                    <input type="checkbox" id="isFree"></input>
                    <label htmlFor="isFree">Free</label>
                    
                    <input type="checkbox" id="isPaid"></input>
                    <label htmlFor="isPaid">Paid</label>
                    <p>Add More</p>
                    <button>CREATE POLL</button>
                    
                </div>

            </form>
        </div>
    )
}