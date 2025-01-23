// Code Keypad Component Here

function Keypad (){
    function HandleKeypad(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input
            type="password"
            onChange={HandleKeypad}
            />
        </div>
    )
}

export default Keypad;