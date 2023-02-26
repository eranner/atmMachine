const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label id='submitMe'className="label huge">
      <input id='numberBox'type="number" min='0' width="200" onChange={onChange}></input>
      {/* <input id='final' disabled={isValid} type="submit" width="200" value="Submit"></input> */}
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [amount, setAmount] = React.useState(0)
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  // const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `${totalState} `;

  const handleChange = event => {
  
    let newAmount = Number(event.target.value);
    setAmount(newAmount)
  };
  const handleSubmit = () => {
//    let newTotal = isDeposit ? totalState + amount : totalState - amount;
let newTotal = 0
if(isDeposit && amount > 0){
  newTotal = totalState + amount
  setTotalState(newTotal);

}
if(!isDeposit && amount > totalState){
  
  alert('You have insufficient funds')
  // setTotalState(totalState)
  
}
if(!isDeposit && amount <= totalState && amount > 0){
  newTotal = totalState - amount
  setTotalState(newTotal);
}


    event.preventDefault();
  };
  
  return (
    <form id='interface' onSubmit={handleSubmit}>
      <h2 id="total">Account Balance:<br></br>${status}</h2>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
      <div id='buttonSection'>
      <button className='deposit'onClick={() => setIsDeposit(true)}>Deposit</button>
      <button className='withdrawal'onClick={() => setIsDeposit(false)}>Cash Back</button>
      </div>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
