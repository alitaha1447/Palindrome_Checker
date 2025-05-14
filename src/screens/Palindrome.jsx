import React, { useState } from 'react';

const Palindrome = () => {
    const [inputValue, setInputValue] = useState( '' );
    const [result, setResult] = useState( null );

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };

    const checkPalindrome = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim() === '' )
        {
            setResult( null );
            return;
        }

        for ( let i = 0, j = inputValue.length; i < j; i++, j-- )
        {
            if ( inputValue[i] !== inputValue[j - 1] )
            {
                setResult( false );
                return;
            } else
            {
                setResult( true );
            }
        }
    };

    return (
        <div className="wrapper">
            <form className="form" onSubmit={checkPalindrome}>
                <h1 className="title">Palindrome Checker</h1>
                <div className="input-box">
                    <label className="form-label">Enter String</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Type a string"
                    />
                </div>
                <button type="submit" className="check-button">Check</button>
                {result === null ? ( ''
                ) : result ? (
                    <div className="result-box yes">
                        <p className='result-text'>
                            {'Yes, it\'s a palindrome!'}
                        </p>
                    </div>
                ) : (
                    <div className="result-box no">
                        <p className='result-text'>
                            {'No, it\'s not a palindrome.'}
                        </p>
                    </div>
                )}
            </form>
        </div >
    );
};

export default Palindrome;
