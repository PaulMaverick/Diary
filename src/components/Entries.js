import React from 'react';

const EntryHeader = () => {
    return <h3>Title</h3>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <div key={index} className="entryBody">
                <div className='entryTop'>
                <h2 className='entryTitle'>{line.title}</h2>
                <small className='entryDate'>{line.date}</small>
                </div>
                <p className='entrytext'>{line.body}</p>
                <button className='entryBtn' onClick={() => props.removeEntry(index)}>Delete</button>
            </div>
        )
    })
    return(
        <div>
           {lines}
        </div>
    )
}

const Entries = (props) => {
    
        const { entryData, removeEntry } = props
        return (
            <div>
                <div className='entryPart'>
                <h2>My Entries</h2>
                </div>
                <EntryBody entryData={entryData} removeEntry={removeEntry}/>
            </div>
        )
    
    
}

export default Entries