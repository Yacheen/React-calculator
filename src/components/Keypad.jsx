export default function KeyboardComponent ({clicked}) {
    let calcLayout = ['(', ')', 'CE', 'C', 1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/'];
    return(
        <div className="button">
            {calcLayout.map((e) => { 
                return <button 
                        name={e} 
                        onClick={e => clicked(e.target.name)}
                        >{e}</button>})
            }
        </div>
    );
}
