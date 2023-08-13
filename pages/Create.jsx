import "../src/App.css"


export default function Create(){
    return(
        <div className="content-section-2">
            <form>
                <div className="details-info">
                    <input type="text" placeholder="Enter title" id="text-input"></input>
                    <br></br>
                    <input type="text" placeholder="Enter deadline" id="text-input"></input>
                    <br></br>
                    <textarea name="description" id="" cols="71" rows="7" placeholder="Description"></textarea>
                    <br></br>

                        <div className="checkboxes">

                        <input type="checkbox" id="isFreeone"></input>
                        <label htmlFor="isFree" id="isFree">Free</label>
                    
                        <input type="checkbox" id="isFreetwo"></input>
                        <label htmlFor="isPaid" id="isPaid">Paid</label>
                   
                        </div>
                    
                    <p id="add-more">Add More</p>
                    <button id="created-poll">CREATE POLL</button>
                </div>

            </form>
        </div>
    )
}