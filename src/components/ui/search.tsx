import React from 'react';

const Search = () => {
    return (
        <div justify="center" align="middle" style={{ marginTop:"10px" }}>
                <input type="text" placeholder="Search..."
                    style={
                        {
                            width: "20%"
                        }
                    }
                    onChange={
                        (e) => {
                            // setSearchTerm(e.target.value)
                        }
                    }

                    />
        </div>

    );
};

export default Search;