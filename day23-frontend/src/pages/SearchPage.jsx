import React, { useState } from 'react';

const SearchPage = () => {

      const [SearchText, setSearchText] = useState('');

      return (
            <div>
                  <div>
                        <input type="text" value={SearchText} onChange={(e)=>SearchText(e.target.value)} />
                        <button >Search</button>
                  </div>

                  <div>
                        <h1>Products</h1>
                        <div>{SearchText}</div>
                  </div>
            </div>
      );
};

export default SearchPage;