"use client";
import { Input } from 'antd';

const Search = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop:"20px" }}>
                <Input.Search type="text" placeholder="Search..."
                    style={
                        {
                            width: "60%",
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